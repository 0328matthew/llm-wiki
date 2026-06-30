/* =====================================================================
 *  C++ 학습 사이트 — 앱 로직 (외부 의존성 없음)
 *  - 사이드바 렌더 / 라우팅(해시) / 강의 렌더
 *  - 자체 C++ 구문 강조 / 코드 복사
 *  - 퀴즈 채점 / 진행도 저장(localStorage) / 검색 / 테마
 * ===================================================================== */
(function () {
  "use strict";

  const STORE_DONE = "cpp-site-done";
  const STORE_THEME = "cpp-site-theme";

  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

  /* ---------- 진행도 상태 ---------- */
  function getDone() {
    try { return new Set(JSON.parse(localStorage.getItem(STORE_DONE) || "[]")); }
    catch { return new Set(); }
  }
  function setDone(set) {
    localStorage.setItem(STORE_DONE, JSON.stringify([...set]));
  }
  let done = getDone();

  /* ---------- HTML 이스케이프 ---------- */
  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------- 간단한 C++ 구문 강조 ---------- */
  const KEYWORDS = new Set(("alignas alignof and auto bool break case catch char class const constexpr " +
    "continue decltype default delete do double else enum explicit export extern false float for " +
    "friend goto if inline int long mutable namespace new noexcept nullptr operator override private " +
    "protected public return short signed sizeof static struct switch template this throw true try " +
    "typedef typename union unsigned using virtual void volatile while").split(" "));
  const TYPES = new Set(("std string vector map unordered_map set pair size_t unique_ptr shared_ptr " +
    "weak_ptr ostream istream").split(" "));

  function highlight(src) {
    // 토큰: 공백, 주석, 전처리, 문자열/문자, 숫자, 식별자, 기타 기호
    // (공백을 명시적으로 잡지 않으면 exec 가 건너뛰어 줄바꿈이 사라진다)
    const re = /(\s+)|(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(#[^\n]*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(\b\d[\d.'eExXa-fA-F]*\b)|([A-Za-z_]\w*)|([^\sA-Za-z0-9_])/g;
    let out = "";
    let m;
    while ((m = re.exec(src)) !== null) {
      if (m[1]) out += m[1];                                            // 공백/줄바꿈 그대로
      else if (m[2]) out += `<span class="tok-com">${esc(m[2])}</span>`; // 주석
      else if (m[3]) out += `<span class="tok-pre">${esc(m[3])}</span>`; // 전처리
      else if (m[4]) out += `<span class="tok-str">${esc(m[4])}</span>`; // 문자열
      else if (m[5]) out += `<span class="tok-num">${esc(m[5])}</span>`; // 숫자
      else if (m[6]) {
        const w = m[6];
        if (KEYWORDS.has(w)) out += `<span class="tok-key">${w}</span>`;
        else if (TYPES.has(w)) out += `<span class="tok-type">${w}</span>`;
        else {
          // 뒤에 ( 가 오면 함수로 간주
          const after = src.slice(re.lastIndex);
          if (/^\s*\(/.test(after)) out += `<span class="tok-fn">${w}</span>`;
          else out += w;
        }
      } else out += esc(m[7]);
    }
    return out;
  }

  /* ---------- 코드 블록 렌더 ---------- */
  function renderCode(code, note, lang) {
    lang = lang || "cpp";
    const noteHtml = note ? `<p class="code-note">${esc(note)}</p>` : "";
    const isCpp = lang === "cpp";
    const label = isCpp ? "C++" : "bash";
    const inner = isCpp ? highlight(code) : esc(code);
    return `
      <div class="code-block">
        <div class="code-head">
          <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
          <span class="lang">${label}</span>
          <button class="copy-btn" type="button">복사</button>
        </div>
        <pre class="code ${isCpp ? "" : "plain"}"><code>${inner}</code></pre>
      </div>
      ${noteHtml}`;
  }

  /* ---------- 퀴즈 렌더 ---------- */
  function renderQuiz(quiz, lessonId) {
    if (!quiz || !quiz.length) return "";
    const qs = quiz.map((q, qi) => {
      const opts = q.options.map((o, oi) =>
        `<button class="quiz-opt" data-q="${qi}" data-o="${oi}" type="button">${esc(o)}</button>`
      ).join("");
      return `
        <div class="quiz-q" data-answer="${q.answer}" data-qi="${qi}">
          <p>${qi + 1}. ${esc(q.q)}</p>
          ${opts}
          <div class="quiz-explain hidden">${esc(q.explain)}</div>
        </div>`;
    }).join("");
    return `<div class="quiz" data-lesson="${lessonId}">
      <p class="quiz-title">📝 확인 퀴즈</p>${qs}</div>`;
  }

  /* ---------- 강의 렌더 ---------- */
  function renderLesson(id) {
    const idx = FLAT_LESSONS.findIndex(l => l.id === id);
    const lesson = idx >= 0 ? FLAT_LESSONS[idx] : FLAT_LESSONS[0];
    const realIdx = idx >= 0 ? idx : 0;

    const el = $("#lesson");
    el.innerHTML = `
      <div class="crumb">${esc(lesson.stage)}</div>
      <h1>${esc(lesson.title)}</h1>
      <p class="summary">${esc(lesson.summary)}</p>
      ${lesson.body}
      ${lesson.code ? renderCode(lesson.code, lesson.codeNote, lesson.lang) : ""}
      ${renderQuiz(lesson.quiz, lesson.id)}
    `;
    document.title = `${lesson.title} · C++ 학습 사이트`;
    window.scrollTo({ top: 0, behavior: "smooth" });

    bindCopyButtons(el);
    bindQuiz(el);
    updateLessonNav(realIdx);
    highlightActiveNav(lesson.id);
    closeSidebar();
  }

  /* ---------- 코드 복사 ---------- */
  function bindCopyButtons(scope) {
    $$(".copy-btn", scope).forEach(btn => {
      btn.addEventListener("click", () => {
        const code = btn.closest(".code-block").querySelector("pre.code").innerText;
        const finish = () => {
          btn.textContent = "복사됨 ✓"; btn.classList.add("copied");
          setTimeout(() => { btn.textContent = "복사"; btn.classList.remove("copied"); }, 1500);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(code).then(finish).catch(finish);
        } else {
          const ta = document.createElement("textarea");
          ta.value = code; document.body.appendChild(ta); ta.select();
          try { document.execCommand("copy"); } catch (e) {}
          document.body.removeChild(ta); finish();
        }
      });
    });
  }

  /* ---------- 퀴즈 채점 ---------- */
  function bindQuiz(scope) {
    $$(".quiz-q", scope).forEach(qBlock => {
      const answer = Number(qBlock.dataset.answer);
      const explain = $(".quiz-explain", qBlock);
      $$(".quiz-opt", qBlock).forEach(opt => {
        opt.addEventListener("click", () => {
          if (qBlock.dataset.answered) return;
          qBlock.dataset.answered = "1";
          const chosen = Number(opt.dataset.o);
          $$(".quiz-opt", qBlock).forEach((o, i) => {
            o.disabled = true;
            if (i === answer) o.classList.add("correct");
          });
          if (chosen !== answer) opt.classList.add("wrong");
          explain.classList.remove("hidden");
        });
      });
    });
  }

  /* ---------- 강의 하단 내비 + 완료 버튼 ---------- */
  let currentIdx = 0;
  function updateLessonNav(idx) {
    currentIdx = idx;
    const prev = $("#prevBtn"), next = $("#nextBtn"), complete = $("#completeBtn");
    prev.disabled = idx === 0;
    next.disabled = idx === FLAT_LESSONS.length - 1;
    const id = FLAT_LESSONS[idx].id;
    const isDone = done.has(id);
    complete.classList.toggle("done", isDone);
    complete.textContent = isDone ? "완료됨 ✓ (클릭해 취소)" : "이 강의 완료 표시 ✓";
  }

  /* =====================================================================
   *  종합 퀴즈 코너 (개념 / 코딩)
   * ===================================================================== */
  function normalize(s) {
    return s.trim().toLowerCase().replace(/\s+/g, " ").replace(/[();]/g, "").trim();
  }

  function renderConceptQ(q, i) {
    const opts = q.options.map((o, oi) =>
      `<button class="quiz-opt" data-o="${oi}" type="button">${esc(o)}</button>`
    ).join("");
    return `<div class="quiz-q qz" data-answer="${q.answer}">
      <p><span class="q-num">${i + 1}</span> ${esc(q.q)}</p>
      ${opts}
      <div class="quiz-explain hidden">${esc(q.explain)}</div>
    </div>`;
  }

  function renderCodingQ(q, i) {
    const codeHtml = q.code ? `<pre class="code qz-code"><code>${highlight(q.code)}</code></pre>` : "";
    if (q.type === "output") {
      const opts = q.options.map((o, oi) =>
        `<button class="quiz-opt" data-o="${oi}" type="button"><code>${esc(o)}</code></button>`
      ).join("");
      return `<div class="quiz-q qz" data-answer="${q.answer}">
        <p><span class="q-num">${i + 1}</span> <span class="badge">출력 예측</span> ${esc(q.q)}</p>
        ${codeHtml}
        ${opts}
        <div class="quiz-explain hidden">${esc(q.explain)}</div>
      </div>`;
    }
    // fill
    const accept = q.accept.map(normalize);
    return `<div class="quiz-q qz fill" data-accept='${esc(JSON.stringify(accept))}'>
      <p><span class="q-num">${i + 1}</span> <span class="badge fill-badge">빈칸 채우기</span> ${esc(q.q)}</p>
      ${codeHtml}
      <div class="fill-row">
        <input class="fill-input" type="text" placeholder="빈칸에 들어갈 코드" autocomplete="off" spellcheck="false" />
        <button class="fill-check" type="button">확인</button>
      </div>
      <div class="fill-feedback hidden"></div>
      <div class="quiz-explain hidden">${esc(q.explain)}</div>
    </div>`;
  }

  let quizTab = "concept";
  function renderQuizPage() {
    const view = $("#quizView");
    const concept = QUIZ_BANK.concept;
    const coding = QUIZ_BANK.coding;
    const total = quizTab === "concept" ? concept.length : coding.length;
    const list = quizTab === "concept"
      ? concept.map(renderConceptQ).join("")
      : coding.map(renderCodingQ).join("");

    view.innerHTML = `
      <div class="lesson">
        <div class="crumb">📝 종합 퀴즈</div>
        <h1>실력 점검 퀴즈</h1>
        <p class="summary">개념 이해와 코드 읽기/쓰기를 나눠서 확인해 보세요. 푼 만큼 점수가 올라갑니다.</p>
        <div class="qz-tabs">
          <button class="qz-tab ${quizTab === "concept" ? "active" : ""}" data-tab="concept">
            개념 문제 <span class="cnt">${concept.length}</span>
          </button>
          <button class="qz-tab ${quizTab === "coding" ? "active" : ""}" data-tab="coding">
            코딩 문제 <span class="cnt">${coding.length}</span>
          </button>
        </div>
        <div class="qz-score">
          이 탭 점수: <strong id="qzScore">0</strong> / ${total}
          <button id="qzReset" class="link-btn">다시 풀기</button>
        </div>
        <div id="qzList">${list}</div>
      </div>`;

    document.title = "종합 퀴즈 · C++ 학습 사이트";
    window.scrollTo({ top: 0, behavior: "smooth" });

    // 탭 전환
    $$(".qz-tab", view).forEach(t => t.addEventListener("click", () => {
      quizTab = t.dataset.tab; renderQuizPage();
    }));
    $("#qzReset").addEventListener("click", renderQuizPage);

    bindQuizScoring(view);
    highlightActiveNav("__quiz__");
    closeSidebar();
  }

  // 종합 퀴즈 채점 + 점수 카운트
  function bindQuizScoring(scope) {
    let score = 0;
    const scoreEl = $("#qzScore", scope);
    const bump = () => { score++; if (scoreEl) scoreEl.textContent = String(score); };

    // 객관식(개념 + 출력 예측)
    $$(".quiz-q.qz:not(.fill)", scope).forEach(block => {
      const answer = Number(block.dataset.answer);
      const explain = $(".quiz-explain", block);
      $$(".quiz-opt", block).forEach(opt => {
        opt.addEventListener("click", () => {
          if (block.dataset.answered) return;
          block.dataset.answered = "1";
          const chosen = Number(opt.dataset.o);
          $$(".quiz-opt", block).forEach((o, i) => {
            o.disabled = true;
            if (i === answer) o.classList.add("correct");
          });
          if (chosen === answer) bump(); else opt.classList.add("wrong");
          explain.classList.remove("hidden");
        });
      });
    });

    // 빈칸 채우기
    $$(".quiz-q.qz.fill", scope).forEach(block => {
      const accept = JSON.parse(block.dataset.accept);
      const input = $(".fill-input", block);
      const btn = $(".fill-check", block);
      const fb = $(".fill-feedback", block);
      const explain = $(".quiz-explain", block);
      const grade = () => {
        if (block.dataset.answered) return;
        const val = normalize(input.value);
        if (!val) return;
        block.dataset.answered = "1";
        input.disabled = true; btn.disabled = true;
        const ok = accept.includes(val);
        fb.classList.remove("hidden");
        if (ok) {
          fb.textContent = "정답입니다! ✓"; fb.classList.add("ok");
          input.classList.add("ok"); bump();
        } else {
          fb.textContent = `오답 — 정답: ${accept[0]}`; fb.classList.add("ng");
          input.classList.add("ng");
        }
        explain.classList.remove("hidden");
      };
      btn.addEventListener("click", grade);
      input.addEventListener("keydown", e => { if (e.key === "Enter") grade(); });
    });
  }

  /* ---------- 사이드바 ---------- */
  function buildNav() {
    const nav = $("#nav");
    const quizLink = `<a class="nav-item quiz-link" href="#quiz" data-id="__quiz__">
        <span class="nav-check quiz-ic">📝</span>
        <span>종합 퀴즈</span>
      </a>`;
    nav.innerHTML = quizLink + CURRICULUM.map(stage => {
      const items = stage.lessons.map(l => `
        <a class="nav-item ${done.has(l.id) ? "done" : ""}" href="#${l.id}" data-id="${l.id}">
          <span class="nav-check">✓</span>
          <span>${esc(l.title)}</span>
        </a>`).join("");
      return `<div class="nav-stage">
        <div class="nav-stage-title">${stage.icon} ${esc(stage.stage)}</div>
        ${items}
      </div>`;
    }).join("");
  }
  function highlightActiveNav(id) {
    $$(".nav-item").forEach(a => a.classList.toggle("active", a.dataset.id === id));
  }
  function refreshNavChecks() {
    $$(".nav-item").forEach(a => a.classList.toggle("done", done.has(a.dataset.id)));
  }
  function updateProgress() {
    const total = FLAT_LESSONS.length;
    const n = FLAT_LESSONS.filter(l => done.has(l.id)).length;
    $("#progressFill").style.width = (total ? (n / total * 100) : 0) + "%";
    $("#progressCount").textContent = `${n}/${total}`;
  }

  /* ---------- 검색 ---------- */
  function setupSearch() {
    const input = $("#search"), box = $("#searchResults");
    let active = -1, results = [];
    const close = () => { box.hidden = true; active = -1; };

    function run() {
      const q = input.value.trim().toLowerCase();
      if (!q) { close(); return; }
      results = FLAT_LESSONS.filter(l =>
        l.title.toLowerCase().includes(q) ||
        l.summary.toLowerCase().includes(q) ||
        l.stage.toLowerCase().includes(q)
      );
      if (!results.length) {
        box.innerHTML = `<li class="empty">검색 결과 없음</li>`;
      } else {
        box.innerHTML = results.map((l, i) =>
          `<li data-id="${l.id}" data-i="${i}">
             <div>${esc(l.title)}</div>
             <div class="sr-stage">${esc(l.stage)}</div>
           </li>`).join("");
        $$("li", box).forEach(li => {
          li.addEventListener("click", () => { location.hash = li.dataset.id; input.value = ""; close(); });
        });
      }
      box.hidden = false; active = -1;
    }
    input.addEventListener("input", run);
    input.addEventListener("keydown", e => {
      const items = $$("li[data-id]", box);
      if (e.key === "ArrowDown") { e.preventDefault(); active = Math.min(active + 1, items.length - 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); active = Math.max(active - 1, 0); }
      else if (e.key === "Enter" && active >= 0) { items[active].click(); return; }
      else if (e.key === "Escape") { input.value = ""; close(); return; }
      items.forEach((it, i) => it.classList.toggle("active", i === active));
    });
    document.addEventListener("click", e => {
      if (!e.target.closest(".search-wrap")) close();
    });
  }

  /* ---------- 사이드바 토글(모바일) ---------- */
  function openSidebar() { $("#sidebar").classList.add("open"); $("#overlay").hidden = false; }
  function closeSidebar() { $("#sidebar").classList.remove("open"); $("#overlay").hidden = true; }

  /* ---------- 테마 ---------- */
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    $("#themeToggle").textContent = t === "dark" ? "☀️" : "🌙";
    localStorage.setItem(STORE_THEME, t);
  }

  /* ---------- 라우팅 ---------- */
  function route() {
    const id = location.hash.replace(/^#/, "") || FLAT_LESSONS[0].id;
    const lessonView = $("#lessonView"), quizView = $("#quizView");
    if (id === "quiz") {
      lessonView.hidden = true;
      quizView.hidden = false;
      renderQuizPage();
    } else {
      quizView.hidden = true;
      lessonView.hidden = false;
      renderLesson(id);
    }
  }

  /* ---------- 초기화 ---------- */
  function init() {
    // 테마: 저장값 → OS 선호
    const savedTheme = localStorage.getItem(STORE_THEME) ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    applyTheme(savedTheme);

    buildNav();
    updateProgress();
    setupSearch();

    $("#themeToggle").addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme");
      applyTheme(cur === "dark" ? "light" : "dark");
    });
    $("#menuToggle").addEventListener("click", openSidebar);
    $("#overlay").addEventListener("click", closeSidebar);

    $("#prevBtn").addEventListener("click", () => {
      if (currentIdx > 0) location.hash = FLAT_LESSONS[currentIdx - 1].id;
    });
    $("#nextBtn").addEventListener("click", () => {
      if (currentIdx < FLAT_LESSONS.length - 1) location.hash = FLAT_LESSONS[currentIdx + 1].id;
    });
    $("#completeBtn").addEventListener("click", () => {
      const id = FLAT_LESSONS[currentIdx].id;
      if (done.has(id)) done.delete(id); else done.add(id);
      setDone(done);
      updateLessonNav(currentIdx);
      refreshNavChecks();
      updateProgress();
    });
    $("#resetProgress").addEventListener("click", () => {
      if (!confirm("진행도를 모두 초기화할까요?")) return;
      done = new Set(); setDone(done);
      refreshNavChecks(); updateProgress(); updateLessonNav(currentIdx);
    });

    window.addEventListener("hashchange", route);
    route();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
