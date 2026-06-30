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
  function renderCode(code, note) {
    const noteHtml = note ? `<p class="code-note">${esc(note)}</p>` : "";
    return `
      <div class="code-block">
        <div class="code-head">
          <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
          <span class="lang">C++</span>
          <button class="copy-btn" type="button">복사</button>
        </div>
        <pre class="code"><code>${highlight(code)}</code></pre>
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
      ${lesson.code ? renderCode(lesson.code, lesson.codeNote) : ""}
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

  /* ---------- 사이드바 ---------- */
  function buildNav() {
    const nav = $("#nav");
    nav.innerHTML = CURRICULUM.map(stage => {
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
    renderLesson(id);
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
