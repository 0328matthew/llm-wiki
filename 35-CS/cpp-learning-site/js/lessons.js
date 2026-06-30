/* =====================================================================
 *  C++ 학습 사이트 — 강의 콘텐츠 데이터
 *  교재의 20장 구조를 "절(節)당 1강"으로 재구성.
 *  각 강의: { id, title, summary, body(HTML), code?, codeNote?, lang?, quiz[] }
 *  단계(stage)별로 묶여 사이드바에 표시된다.
 *  ── 단계는 아래 CURRICULUM 배열에 순서대로 채워진다(장 묶음 단위로 추가). ──
 * ===================================================================== */

const CURRICULUM = [
  /* ===================================================================
   *  1단계 · 기초 — 입문과 문법 (Ch01~03)
   * =================================================================== */
  {
    stage: "1. 기초 — 입문과 문법",
    icon: "🚀",
    lessons: [
      /* ---------- Ch01 컴퓨터와 프로그래밍 언어 ---------- */
      {
        id: "ch01-1",
        title: "Ch01·1 컴퓨터 시스템",
        summary: "하드웨어와 소프트웨어, 컴퓨터가 일하는 방식.",
        body: `
<p><strong>컴퓨터 시스템</strong>은 <em>하드웨어</em>(CPU·메모리·입출력 장치)와
그 위에서 동작하는 <em>소프트웨어</em>(프로그램)로 이루어진다.</p>
<h3>핵심 구성</h3>
<ul>
  <li><strong>CPU</strong> — 명령어를 해석·실행하는 두뇌</li>
  <li><strong>메모리(RAM)</strong> — 실행 중인 프로그램과 데이터를 임시 저장</li>
  <li><strong>보조기억장치</strong> — 파일을 영구 저장(SSD·HDD)</li>
  <li><strong>입출력 장치</strong> — 키보드·모니터 등</li>
</ul>
<p>프로그램이 실행되면 보조기억장치에 있던 코드가 <strong>메모리로 올라가</strong>
CPU가 한 줄씩 처리한다. C++는 이 메모리를 직접 다룰 수 있어 빠르다.</p>
<div class="callout">C++가 "저수준 제어"가 가능하다는 말은, 바로 이 메모리·하드웨어에
가깝게 접근할 수 있다는 뜻이다.</div>`,
        quiz: [
          {
            q: "실행 중인 프로그램과 데이터가 임시로 올라가는 곳은?",
            options: ["보조기억장치(SSD)", "메모리(RAM)", "CPU 캐시만", "모니터"],
            answer: 1,
            explain: "프로그램은 실행 시 메모리(RAM)에 적재되어 CPU가 처리한다."
          }
        ]
      },
      {
        id: "ch01-2",
        title: "Ch01·2 프로그래밍 언어",
        summary: "기계어·어셈블리·고급 언어, 그리고 번역 방식.",
        body: `
<h3>언어의 계층</h3>
<ul>
  <li><strong>기계어</strong> — 0과 1. CPU가 직접 이해하지만 사람은 읽기 어렵다.</li>
  <li><strong>어셈블리어</strong> — 기계어에 기호를 붙인 저수준 언어.</li>
  <li><strong>고급 언어</strong> — C++, Python 등. 사람이 이해하기 쉬운 문법.</li>
</ul>
<h3>번역 방식</h3>
<ul>
  <li><strong>컴파일러</strong> — 전체 소스를 한 번에 기계어로 번역(C++). 빠르다.</li>
  <li><strong>인터프리터</strong> — 한 줄씩 해석하며 실행(Python). 유연하다.</li>
</ul>
<p>C++는 <strong>컴파일 언어</strong>다. 소스(<code>.cpp</code>)를 컴파일러가
실행 파일로 번역한 뒤 실행한다.</p>`,
        quiz: [
          {
            q: "C++는 어떤 방식으로 실행되는가?",
            options: ["인터프리터가 한 줄씩 해석", "컴파일러가 전체를 기계어로 번역", "브라우저가 직접 실행", "번역 없이 실행"],
            answer: 1,
            explain: "C++는 컴파일 언어로, 컴파일러가 소스를 실행 파일로 번역한다."
          }
        ]
      },
      {
        id: "ch01-3",
        title: "Ch01·3 C++ 소개",
        summary: "C++의 탄생, 특징, 활용 분야.",
        body: `
<p><strong>C++</strong>는 1983년 Bjarne Stroustrup가 C에 객체지향을 더해 만든
언어다("C with Classes"에서 출발).</p>
<h3>특징</h3>
<ul>
  <li><strong>성능</strong> — 가비지 컬렉터 없이 메모리를 직접 관리해 매우 빠르다.</li>
  <li><strong>다중 패러다임</strong> — 절차적 + 객체지향 + 제네릭(템플릿).</li>
  <li><strong>제로 오버헤드 원칙</strong> — 쓰지 않는 기능엔 비용을 내지 않는다.</li>
</ul>
<h3>활용 분야</h3>
<p>게임 엔진, 운영체제, 임베디드, 금융·시뮬레이션, 수치해석 등 <em>속도가 중요한</em>
거의 모든 곳.</p>`,
        code: `#include <iostream>

int main() {
    std::cout << "Hello, C++!" << std::endl;
    return 0;   // 0 = 정상 종료
}`,
        codeNote: "모든 C++ 프로그램은 main() 에서 시작한다. cout 으로 콘솔에 출력한다.",
        quiz: [
          {
            q: "C++의 설계 철학 '제로 오버헤드 원칙'의 뜻은?",
            options: ["모든 코드는 0초에 실행", "쓰지 않는 기능엔 비용을 내지 않는다", "메모리를 0으로 초기화", "오류가 0개"],
            answer: 1,
            explain: "사용하지 않는 추상화 때문에 성능 손해를 보지 않는다는 의미다."
          }
        ]
      },
      {
        id: "ch01-4",
        title: "Ch01·4 프로그램 개발 과정",
        summary: "편집 → 컴파일 → 링크 → 실행.",
        body: `
<h3>빌드 4단계</h3>
<ol>
  <li><strong>전처리</strong> — <code>#include</code>, <code>#define</code> 처리</li>
  <li><strong>컴파일</strong> — 소스 → 어셈블리/오브젝트(.o)</li>
  <li><strong>링크</strong> — 오브젝트 + 라이브러리 → 실행 파일</li>
  <li><strong>실행</strong> — OS가 실행 파일을 메모리에 올려 구동</li>
</ol>
<h3>대표 컴파일러</h3>
<p><strong>g++</strong>(GCC) · <strong>clang++</strong> · <strong>MSVC</strong>(Visual Studio).</p>`,
        lang: "bash",
        code: `# g++ 로 컴파일 & 실행
g++ -std=c++17 -Wall -O2 hello.cpp -o hello
./hello

#  -std=c++17  표준 버전   -Wall 경고 켜기   -O2 최적화`,
        codeNote: "처음엔 항상 -Wall 을 켜라. 경고는 미래의 버그다.",
        quiz: [
          {
            q: "여러 오브젝트 파일과 라이브러리를 묶어 실행 파일을 만드는 단계는?",
            options: ["전처리", "컴파일", "링크", "실행"],
            answer: 2,
            explain: "링크(linking) 단계에서 오브젝트와 라이브러리를 결합한다."
          }
        ]
      },
      {
        id: "ch01-5",
        title: "Ch01·5 프로그램 테스트",
        summary: "테스트 데이터 설계와 오류의 종류.",
        body: `
<h3>오류의 종류</h3>
<table class="tbl">
  <tr><th>종류</th><th>발생 시점</th><th>예</th></tr>
  <tr><td>컴파일 오류(문법)</td><td>컴파일 중</td><td>세미콜론 누락</td></tr>
  <tr><td>링크 오류</td><td>링크 중</td><td>정의 없는 함수 호출</td></tr>
  <tr><td>런타임 오류</td><td>실행 중</td><td>0으로 나누기</td></tr>
  <tr><td>논리 오류</td><td>실행 후 결과</td><td>공식이 틀림</td></tr>
</table>
<h3>테스트 데이터 설계</h3>
<p>정상 입력뿐 아니라 <strong>경계값</strong>(0, 최대/최소), <strong>예외 입력</strong>(음수, 빈 값)을
함께 넣어봐야 숨은 버그가 드러난다.</p>`,
        quiz: [
          {
            q: "공식을 잘못 써서 결과가 틀리지만 프로그램은 멈추지 않는 오류는?",
            options: ["컴파일 오류", "링크 오류", "런타임 오류", "논리 오류"],
            answer: 3,
            explain: "논리 오류는 실행은 되지만 결과가 의도와 다른 오류다."
          }
        ]
      },

      /* ---------- Ch02 C++ 프로그래밍 기본 ---------- */
      {
        id: "ch02-1",
        title: "Ch02·1 C++ 프로그램의 개요",
        summary: "첫 프로그램의 구조: include, main, cout/cin.",
        body: `
<h3>프로그램의 뼈대</h3>
<ul>
  <li><code>#include &lt;iostream&gt;</code> — 입출력 라이브러리 포함</li>
  <li><code>int main()</code> — 실행 시작점</li>
  <li><code>std::cout &lt;&lt;</code> — 출력, <code>std::cin &gt;&gt;</code> — 입력</li>
  <li><code>return 0;</code> — 정상 종료</li>
</ul>
<p><code>std::</code>는 <em>네임스페이스</em>로, 표준 라이브러리 이름임을 뜻한다.</p>`,
        code: `#include <iostream>

int main() {
    std::string name;
    std::cout << "이름? ";
    std::cin >> name;                 // 입력
    std::cout << "안녕, " << name << "!\\n";  // 출력
    return 0;
}`,
        codeNote: "<< 는 출력 스트림에 '넣기', >> 는 입력 스트림에서 '꺼내기' 다.",
        quiz: [
          {
            q: "콘솔 입력을 받을 때 사용하는 것은?",
            options: ["std::cout <<", "std::cin >>", "std::in <<", "std::read()"],
            answer: 1,
            explain: "std::cin >> 변수 로 콘솔 입력을 변수에 저장한다."
          }
        ]
      },
      {
        id: "ch02-2",
        title: "Ch02·2 변수, 값, 상수",
        summary: "변수 선언·초기화, 리터럴, const 상수.",
        body: `
<p><strong>변수</strong>는 값을 담는 이름 붙은 메모리 공간이다. C++는 정적 타입 언어라
변수마다 타입이 정해진다.</p>
<h3>초기화 — 중괄호 권장</h3>
<p>모던 C++에서는 <code>int x{10};</code> 처럼 <strong>균일 초기화 {}</strong>를 권장한다.
데이터 손실이 있는 변환을 컴파일 타임에 막아준다.</p>
<h3>상수</h3>
<ul>
  <li><code>const</code> — 변경 불가 값. 가능하면 항상 붙여라.</li>
  <li><strong>리터럴</strong> — 코드에 직접 쓴 값(42, 3.14, 'A', "hi").</li>
</ul>`,
        code: `int age{25};
const double G = 9.81;   // 상수 (변경 불가)
double pi{3.14159};
char grade = 'A';
// G = 9.8;   // 오류! const 는 바꿀 수 없다`,
        codeNote: "변하지 않는 값엔 const 를 붙여 실수로 바꾸는 것을 막는다.",
        quiz: [
          {
            q: "값이 절대 바뀌면 안 되는 변수에 붙이는 키워드는?",
            options: ["static", "const", "auto", "final"],
            answer: 1,
            explain: "const 는 한 번 초기화하면 변경할 수 없는 상수를 만든다."
          }
        ]
      },
      {
        id: "ch02-3",
        title: "Ch02·3 토큰과 주석",
        summary: "식별자·키워드·연산자, 그리고 주석 다는 법.",
        body: `
<h3>토큰</h3>
<p>컴파일러가 인식하는 최소 단위. <em>키워드</em>(int, if…), <em>식별자</em>(변수/함수 이름),
<em>리터럴</em>, <em>연산자</em>, <em>구두점</em>으로 나뉜다.</p>
<h3>식별자 규칙</h3>
<ul>
  <li>문자·숫자·밑줄(_)만, 숫자로 시작 불가</li>
  <li>키워드는 사용 불가, 대소문자 구분</li>
</ul>
<h3>주석</h3>
<ul>
  <li><code>// 한 줄 주석</code></li>
  <li><code>/* 여러 줄 주석 */</code></li>
</ul>`,
        code: `int totalScore = 0;   // OK: 의미 있는 이름
// int 2nd = 1;       // 오류: 숫자로 시작 불가
/* 아래는 평균을 계산한다
   여러 줄도 가능 */
double avg = totalScore / 3.0;`,
        codeNote: "이름은 totalScore 처럼 의미가 드러나게 — 미래의 당신을 위한 배려다.",
        quiz: [
          {
            q: "올바른 식별자(변수 이름)는?",
            options: ["2nd_value", "total-score", "int", "user_age"],
            answer: 3,
            explain: "숫자로 시작 불가(2nd), 하이픈 불가(-), 키워드 불가(int). user_age 만 유효."
          }
        ]
      },
      {
        id: "ch02-4",
        title: "Ch02·4 자료형",
        summary: "정수·문자·불·실수·void·문자열.",
        body: `
<table class="tbl">
  <tr><th>자료형</th><th>설명</th><th>예</th></tr>
  <tr><td><code>int</code></td><td>정수</td><td>42, -7</td></tr>
  <tr><td><code>char</code></td><td>문자 1개</td><td>'A'</td></tr>
  <tr><td><code>bool</code></td><td>참/거짓</td><td>true / false</td></tr>
  <tr><td><code>double</code></td><td>실수(배정밀도)</td><td>3.14</td></tr>
  <tr><td><code>void</code></td><td>'값 없음'</td><td>반환 없는 함수</td></tr>
  <tr><td><code>std::string</code></td><td>문자열</td><td>"hello"</td></tr>
</table>
<p>정수는 <code>short / int / long / long long</code> 으로 크기가 다르고,
<code>unsigned</code>를 붙이면 음수 없이 범위가 2배가 된다.</p>`,
        code: `int    n   = 100;
double pi  = 3.14;
char   c   = 'Z';
bool   ok  = true;
unsigned u = 4000000000u;   // 음수 없는 정수

std::cout << sizeof(int) << " 바이트\\n";  // 보통 4`,
        codeNote: "sizeof(타입) 으로 그 타입이 차지하는 바이트 수를 알 수 있다.",
        quiz: [
          {
            q: "참(true)/거짓(false)만 담는 자료형은?",
            options: ["int", "char", "bool", "void"],
            answer: 2,
            explain: "bool 은 true/false 두 값만 가진다."
          }
        ]
      },

      /* ---------- Ch03 표현식과 문장 ---------- */
      {
        id: "ch03-1",
        title: "Ch03·1 표현식이란",
        summary: "산술 표현식, lvalue와 rvalue.",
        body: `
<p><strong>표현식</strong>은 값으로 평가되는 코드다. 단항(<code>-x</code>),
곱셈(<code>*</code> <code>/</code> <code>%</code>), 덧셈(<code>+</code> <code>-</code>),
할당(<code>=</code>) 등이 있다.</p>
<div class="callout warn"><strong>정수 나눗셈 주의:</strong> <code>7 / 2 == 3</code>(소수 버림).
실수가 필요하면 <code>7.0 / 2</code>. 나머지는 <code>7 % 2 == 1</code>.</div>
<h3>lvalue vs rvalue</h3>
<ul>
  <li><strong>lvalue</strong> — 이름/주소가 있어 대입의 왼쪽에 올 수 있는 것(변수)</li>
  <li><strong>rvalue</strong> — 임시 값, 대입의 오른쪽에만(리터럴, 계산 결과)</li>
</ul>`,
        code: `int a = 7, b = 2;
std::cout << a / b << '\\n';     // 3  (정수 나눗셈)
std::cout << a % b << '\\n';     // 1  (나머지)
std::cout << 7.0 / b << '\\n';   // 3.5
a = b;        // OK: a 는 lvalue
// 7 = a;     // 오류: 7 은 rvalue`,
        codeNote: "정수끼리 나누면 소수점이 버려진다. 하나를 실수로 만들면 실수 결과가 나온다.",
        quiz: [
          {
            q: "C++에서 7 / 2 (둘 다 int)의 결과는?",
            options: ["3.5", "3", "4", "1"],
            answer: 1,
            explain: "정수 나눗셈은 소수부를 버려 3. 나머지(1)는 % 로 얻는다."
          }
        ]
      },
      {
        id: "ch03-2",
        title: "Ch03·2 자료형 변환",
        summary: "암묵적 변환과 명시적 캐스팅.",
        body: `
<h3>암묵적 변환</h3>
<p>작은 타입 → 큰 타입은 자동으로 변환된다(<code>int</code> → <code>double</code>).
반대로 큰 → 작은은 데이터 손실 위험이 있어 경고가 난다.</p>
<h3>명시적 캐스팅</h3>
<p>모던 C++은 <code>static_cast&lt;T&gt;(값)</code>을 권장한다.
C 스타일 <code>(int)x</code>보다 안전하고 의도가 분명하다.</p>`,
        code: `int sum = 7, n = 2;
double avg = sum / n;                 // 3.0 (이미 정수 나눗셈 후 변환!)
double ok  = static_cast<double>(sum) / n;  // 3.5 (먼저 실수로)

double d = 3.9;
int    t = static_cast<int>(d);       // 3 (소수부 버림)`,
        codeNote: "나눗셈 전에 캐스팅해야 한다. static_cast<double>(sum)/n 이 정답.",
        quiz: [
          {
            q: "정수 sum 을 실수로 안전하게 변환하는 모던 C++ 방식은?",
            options: ["(double)sum", "static_cast<double>(sum)", "double(sum)", "sum.toDouble()"],
            answer: 1,
            explain: "static_cast<double>(sum) 이 의도가 분명하고 안전한 권장 방식이다."
          }
        ]
      },
      {
        id: "ch03-3",
        title: "Ch03·3 표현식의 평가 순서",
        summary: "연산자 우선순위와 결합 방향.",
        body: `
<h3>우선순위</h3>
<p><code>*</code> <code>/</code> <code>%</code> 가 <code>+</code> <code>-</code> 보다 먼저.
괄호 <code>()</code> 로 명시하면 헷갈릴 일이 없다.</p>
<h3>결합 방향</h3>
<ul>
  <li>대부분 <strong>왼쪽→오른쪽</strong>: <code>a - b - c = (a-b)-c</code></li>
  <li>대입은 <strong>오른쪽→왼쪽</strong>: <code>a = b = 3</code></li>
</ul>`,
        code: `std::cout << 2 + 3 * 4 << '\\n';     // 14 (곱셈 먼저)
std::cout << (2 + 3) * 4 << '\\n';   // 20 (괄호 먼저)
int a, b;
a = b = 5;   // 오른쪽부터: b=5, 그다음 a=5`,
        codeNote: "헷갈리면 괄호로 의도를 명시하라. 가독성과 정확성 둘 다 얻는다.",
        quiz: [
          {
            q: "2 + 3 * 4 의 결과는?",
            options: ["20", "14", "24", "9"],
            answer: 1,
            explain: "곱셈이 덧셈보다 우선순위가 높아 3*4=12, +2 = 14."
          }
        ]
      },
      {
        id: "ch03-4",
        title: "Ch03·4 오버플로우와 언더플로우",
        summary: "표현 범위를 넘으면 생기는 일.",
        body: `
<h3>정수 오버플로우</h3>
<p>타입이 표현할 수 있는 최대값을 넘으면 <strong>값이 한 바퀴 돌아</strong> 음수가 되는 등
엉뚱한 값이 된다. (예: int 최대 + 1)</p>
<h3>부동소수점</h3>
<ul>
  <li><strong>오버플로우</strong> → <code>inf</code>(무한대)</li>
  <li><strong>언더플로우</strong> → 0에 가까워져 정밀도 손실</li>
</ul>
<div class="callout warn">큰 수 계산엔 <code>long long</code>을, 정밀한 실수엔 <code>double</code>을 쓰고
범위를 항상 의식하라.</div>`,
        code: `#include <climits>
int big = INT_MAX;          // int 최대값
std::cout << big << '\\n';   // 2147483647
std::cout << big + 1 << '\\n'; // 오버플로우! 음수가 됨

long long safe = static_cast<long long>(big) + 1;
std::cout << safe << '\\n';  // 2147483648 (안전)`,
        codeNote: "큰 수가 예상되면 미리 long long 으로 올려서 계산하라.",
        quiz: [
          {
            q: "int 최대값에 1을 더하면 일어나는 일은?",
            options: ["컴파일 오류", "오버플로우로 엉뚱한(음수) 값", "자동으로 long 변환", "프로그램 종료"],
            answer: 1,
            explain: "표현 범위를 넘으면 값이 한 바퀴 돌아 음수가 되는 오버플로우가 발생한다."
          }
        ]
      },
      {
        id: "ch03-5",
        title: "Ch03·5 데이터 형식 조정",
        summary: "출력 조정자: setw, setprecision, fixed.",
        body: `
<p><code>&lt;iomanip&gt;</code>의 <strong>조정자(manipulator)</strong>로 출력 모양을 다듬는다.</p>
<ul>
  <li><code>std::setw(n)</code> — 폭 n 칸 정렬</li>
  <li><code>std::setprecision(n)</code> — 유효숫자/소수 자리</li>
  <li><code>std::fixed</code> — 고정 소수점 표기</li>
  <li><code>std::boolalpha</code> — bool 을 true/false 로</li>
</ul>`,
        code: `#include <iostream>
#include <iomanip>
int main() {
    double pi = 3.14159265;
    std::cout << std::fixed << std::setprecision(2);
    std::cout << pi << '\\n';                 // 3.14
    std::cout << std::setw(8) << 42 << '\\n'; // "      42"
    std::cout << std::boolalpha << (1 < 2) << '\\n'; // true
}`,
        codeNote: "fixed + setprecision(2) 조합으로 소수점 둘째 자리까지 고정 출력한다.",
        quiz: [
          {
            q: "실수를 소수점 둘째 자리까지 고정 출력하려면?",
            options: ["setw(2)", "fixed << setprecision(2)", "round(2)", "precision=2"],
            answer: 1,
            explain: "std::fixed 와 std::setprecision(2) 를 함께 쓴다."
          }
        ]
      },
      {
        id: "ch03-6",
        title: "Ch03·6 문장이란",
        summary: "선언문·표현식문·복합문·리턴문.",
        body: `
<p><strong>문장(statement)</strong>은 실행 단위다. 대부분 세미콜론 <code>;</code> 으로 끝난다.</p>
<ul>
  <li><strong>선언문</strong> — <code>int x = 3;</code></li>
  <li><strong>표현식문</strong> — <code>x = x + 1;</code></li>
  <li><strong>널 문</strong> — <code>;</code> (아무것도 안 함)</li>
  <li><strong>복합문(블록)</strong> — <code>{ ... }</code> 로 묶은 여러 문장</li>
  <li><strong>리턴문</strong> — <code>return 값;</code></li>
</ul>
<div class="callout warn">블록 <code>{}</code> 안에서 선언한 변수는 그 블록 안에서만 유효하다(스코프).</div>`,
        code: `int main() {
    int x = 3;          // 선언문
    {                   // 복합문(블록) 시작
        int y = x + 1;  // y 는 이 블록 안에서만 유효
        std::cout << y; // 4
    }                   // 블록 끝 → y 소멸
    return 0;           // 리턴문
}`,
        codeNote: "{ } 블록은 변수의 유효 범위(스코프)를 만든다.",
        quiz: [
          {
            q: "{ } 블록 안에서 선언한 지역 변수의 유효 범위는?",
            options: ["프로그램 전체", "그 블록 안에서만", "함수 전체", "파일 전체"],
            answer: 1,
            explain: "블록 안에서 선언한 변수는 그 블록을 벗어나면 사라진다(스코프)."
          }
        ]
      }
    ]
  },

  /* ===================================================================
   *  2단계 · 제어 구조 — 조건·반복·함수 (Ch04~06)
   * =================================================================== */
  {
    stage: "2. 제어 구조 — 조건·반복·함수",
    icon: "🔀",
    lessons: [
      /* ---------- Ch04 조건문 ---------- */
      {
        id: "ch04-1",
        title: "Ch04·1 조건문의 개요",
        summary: "관계/일치 표현식, if · if-else · 다중 분기.",
        body: `
<h3>관계 / 일치 표현식</h3>
<p>비교 연산자 <code>&lt; &gt; &lt;= &gt;=</code> 와 일치 <code>== !=</code> 의 결과는 <code>bool</code>.</p>
<div class="callout warn"><strong>흔한 실수:</strong> 비교는 <code>==</code>, 대입은 <code>=</code>.
<code>if (x = 5)</code> 는 항상 참이 되는 버그!</div>
<h3>if / else if / else</h3>
<p>조건이 참일 때 블록 실행, 여러 갈래는 <code>else if</code> 로 잇는다.</p>`,
        code: `int score = 82;
if (score >= 90)       std::cout << "A\\n";
else if (score >= 80)  std::cout << "B\\n";   // 실행
else if (score >= 70)  std::cout << "C\\n";
else                   std::cout << "F\\n";`,
        codeNote: "위에서부터 검사해 처음 참인 가지 하나만 실행된다.",
        quiz: [
          {
            q: "'같다'를 비교하는 올바른 연산자는?",
            options: ["=", "==", "===", ":="],
            answer: 1,
            explain: "== 가 비교(같음), = 는 대입이다. 헷갈리면 큰 버그가 된다."
          }
        ]
      },
      {
        id: "ch04-2",
        title: "Ch04·2 논리 표현식",
        summary: "AND(&&), OR(||), NOT(!)와 단축 평가.",
        body: `
<ul>
  <li><code>&amp;&amp;</code> (그리고) — 양쪽 모두 참이어야 참</li>
  <li><code>||</code> (또는) — 하나라도 참이면 참</li>
  <li><code>!</code> (부정) — 참↔거짓 뒤집기</li>
</ul>
<h3>단축 평가</h3>
<p><code>&amp;&amp;</code>는 왼쪽이 거짓이면 오른쪽을 <em>아예 평가하지 않는다</em>.
<code>||</code>는 왼쪽이 참이면 멈춘다. 이를 이용해 안전 검사를 한다.</p>`,
        code: `int* p = nullptr;
int age = 20;
bool adult = (age >= 19) && (age < 100);   // true
// 단축 평가: p 가 null 이면 *p 를 보지 않아 안전
if (p != nullptr && *p > 0) std::cout << *p;`,
        codeNote: "p != nullptr 가 거짓이면 *p 는 평가되지 않는다 — 단축 평가의 안전한 활용.",
        quiz: [
          {
            q: "두 조건이 모두 참일 때만 참이 되는 연산자는?",
            options: ["||", "&&", "!", "&"],
            answer: 1,
            explain: "&& 는 논리 AND 로 양쪽이 모두 참이어야 참이다."
          }
        ]
      },
      {
        id: "ch04-3",
        title: "Ch04·3 switch 조건문",
        summary: "하나의 값을 여러 case 와 비교, break 주의.",
        body: `
<p>정수/문자 하나를 여러 상수와 비교할 때 깔끔하다. 각 <code>case</code> 끝에
<code>break</code> 를 잊으면 <em>fall-through</em>(다음 case로 흘러감).</p>`,
        code: `char grade = 'B';
switch (grade) {
    case 'A': std::cout << "최우수\\n"; break;
    case 'B': std::cout << "우수\\n";   break;   // 실행
    case 'C': std::cout << "보통\\n";   break;
    default:  std::cout << "확인 필요\\n";
}`,
        codeNote: "각 case 마다 break 를 넣어 의도치 않은 fall-through 를 막아라.",
        quiz: [
          {
            q: "switch 의 case 끝에 break 를 빠뜨리면?",
            options: ["컴파일 오류", "다음 case 로 실행이 흘러감", "프로그램 종료", "무한 루프"],
            answer: 1,
            explain: "break 가 없으면 일치한 case 이후의 case 들이 연달아 실행된다."
          }
        ]
      },
      {
        id: "ch04-4",
        title: "Ch04·4 조건부(삼항) 표현식",
        summary: "조건 ? 참 : 거짓 으로 짧은 분기.",
        body: `
<p><code>조건 ? 참일때값 : 거짓일때값</code> — if-else 를 한 줄 <em>표현식</em>으로.
값을 돌려주므로 변수 초기화에 특히 유용하다.</p>`,
        code: `int a = 7, b = 3;
int big = (a > b) ? a : b;        // 7
std::string s = (big % 2 == 0) ? "짝수" : "홀수";
std::cout << big << " " << s << '\\n';  // 7 홀수`,
        codeNote: "값을 바로 변수에 담을 땐 if-else 보다 삼항 연산자가 간결하다.",
        quiz: [
          {
            q: "a>b 이면 a, 아니면 b 를 한 줄로 얻는 식은?",
            options: ["(a>b) ? a : b", "if(a>b) a else b", "a>b => a", "max(a,b,?)"],
            answer: 0,
            explain: "삼항 연산자 조건 ? 참 : 거짓 형식을 사용한다."
          }
        ]
      },
      {
        id: "ch04-5",
        title: "Ch04·5 [Lab] 조건문 응용",
        summary: "성적 등급·세금 구간 같은 구간 판정.",
        body: `
<p>조건문의 대표 활용은 <strong>구간(범위) 판정</strong>이다. 성적 등급, 소득 구간별 세금,
요금제 선택처럼 "값이 어느 구간에 드는가"를 if-else 사다리로 처리한다.</p>
<div class="callout">구간 판정은 <strong>큰 값/작은 값부터 순서대로</strong> 검사해야
경계가 겹치지 않는다.</div>`,
        code: `// 소득 구간별 세율 (단순화)
double income = 45000000, tax;
if      (income <= 12000000) tax = income * 0.06;
else if (income <= 46000000) tax = income * 0.15;
else                          tax = income * 0.24;
std::cout << "세금: " << tax << '\\n';`,
        codeNote: "구간 판정은 경계값을 어디에 포함시킬지(<= vs <) 신중히 정하라.",
        quiz: [
          {
            q: "성적 등급처럼 값이 어느 범위에 드는지 판정할 때 적합한 구조는?",
            options: ["단일 if", "if-else if 사다리", "while 루프", "switch 만"],
            answer: 1,
            explain: "연속 구간 판정은 if-else if 사다리로 위에서부터 검사하는 것이 자연스럽다."
          }
        ]
      },

      /* ---------- Ch05 반복문 ---------- */
      {
        id: "ch05-1",
        title: "Ch05·1 반복문의 개요",
        summary: "반복의 필요성, 전위/후위 증감.",
        body: `
<p>같은 일을 여러 번 할 때 <strong>반복문</strong>을 쓴다. C++의 반복문은
<code>while</code>, <code>for</code>, <code>do-while</code> 세 가지.</p>
<h3>전위 vs 후위 증감</h3>
<ul>
  <li><code>++i</code> (전위) — 먼저 1 증가한 뒤 그 값을 사용</li>
  <li><code>i++</code> (후위) — 현재 값을 쓰고 나서 1 증가</li>
</ul>
<p>루프 카운터로는 관례상 <code>++i</code> 를 권장(객체에선 더 효율적).</p>`,
        code: `int i = 5;
std::cout << i++ << '\\n';  // 5 출력 후 6 됨
std::cout << i   << '\\n';  // 6
std::cout << ++i << '\\n';  // 먼저 7 되고 7 출력`,
        codeNote: "i++ 는 '쓰고 증가', ++i 는 '증가하고 씀'.",
        quiz: [
          {
            q: "i=5 일 때 std::cout << ++i; 가 출력하는 값은?",
            options: ["5", "6", "7", "4"],
            answer: 1,
            explain: "전위 ++i 는 먼저 6으로 증가한 뒤 그 값을 출력한다."
          }
        ]
      },
      {
        id: "ch05-2",
        title: "Ch05·2 while 반복문",
        summary: "조건이 참인 동안 반복, 무한루프 주의.",
        body: `
<p><code>while(조건)</code> — 조건이 참인 동안 본문을 반복한다.
<strong>카운터 제어</strong>(횟수가 정해짐)와 <strong>이벤트 제어</strong>(특정 입력까지)로 나뉜다.</p>
<div class="callout warn">루프 안에서 조건을 거짓으로 만드는 변화가 없으면
<strong>무한 루프</strong>에 빠진다. 증감/입력을 꼭 넣어라.</div>`,
        code: `int sum = 0, i = 1;
while (i <= 5) {       // 카운터 제어
    sum += i;
    ++i;               // 이게 없으면 무한 루프!
}
std::cout << sum << '\\n';   // 15`,
        codeNote: "while 본문에는 조건을 언젠가 거짓으로 만드는 변화가 반드시 있어야 한다.",
        quiz: [
          {
            q: "while 루프가 끝나지 않고 영원히 도는 상태를?",
            options: ["오버플로우", "무한 루프", "재귀", "fall-through"],
            answer: 1,
            explain: "조건이 계속 참이면 무한 루프에 빠진다. 카운터 증감을 잊지 말자."
          }
        ]
      },
      {
        id: "ch05-3",
        title: "Ch05·3 for 반복문",
        summary: "초기화·조건·증감을 한 줄에, range-based for.",
        body: `
<p>반복 횟수가 정해졌을 때 가장 깔끔하다: <code>for(초기화; 조건; 증감)</code>.</p>
<h3>range-based for (모던 C++)</h3>
<p>컨테이너 전체를 순회할 때 <code>for (auto x : v)</code>. 복사를 피하려면
<code>const auto&amp;</code>.</p>`,
        code: `int sum = 0;
for (int i = 1; i <= 5; ++i) sum += i;   // 15

std::vector<int> v{10, 20, 30};
for (const auto& x : v) std::cout << x << ' ';  // 10 20 30`,
        codeNote: "range-based for 에서 const auto& 를 쓰면 불필요한 복사를 피한다.",
        quiz: [
          {
            q: "반복 횟수가 명확히 정해진 경우 가장 적합한 반복문은?",
            options: ["while", "do-while", "for", "goto"],
            answer: 2,
            explain: "for 는 초기화·조건·증감을 한곳에 모아 횟수가 정해진 반복에 적합하다."
          }
        ]
      },
      {
        id: "ch05-4",
        title: "Ch05·4 do-while 반복문",
        summary: "최소 한 번은 실행되는 반복.",
        body: `
<p><code>do { ... } while(조건);</code> — 본문을 <strong>먼저 한 번 실행</strong>한 뒤
조건을 검사한다. 메뉴 입력처럼 "적어도 한 번은 보여줘야" 할 때 적합.</p>`,
        code: `int n;
do {
    std::cout << "양수를 입력: ";
    std::cin >> n;
} while (n <= 0);   // 양수가 들어올 때까지 반복
std::cout << "입력값: " << n << '\\n';`,
        codeNote: "do-while 은 조건과 무관하게 본문이 최소 1회 실행된다.",
        quiz: [
          {
            q: "조건과 상관없이 본문을 최소 한 번 실행하는 반복문은?",
            options: ["while", "for", "do-while", "range-based for"],
            answer: 2,
            explain: "do-while 은 본문을 먼저 실행한 뒤 조건을 검사한다."
          }
        ]
      },
      {
        id: "ch05-5",
        title: "Ch05·5 중첩 반복문",
        summary: "반복문 안의 반복문 — 2차원 처리.",
        body: `
<p>반복문 안에 또 반복문을 둘 수 있다. 바깥 루프 1회마다 안쪽 루프가 전부 돈다.
구구단·행렬·격자 출력에 쓰인다.</p>`,
        code: `for (int i = 1; i <= 3; ++i) {       // 행
    for (int j = 1; j <= 3; ++j) {   // 열
        std::cout << i * j << '\\t';
    }
    std::cout << '\\n';
}`,
        codeNote: "바깥 i 한 번에 안쪽 j 가 모두 실행된다 (3x3 = 9회).",
        quiz: [
          {
            q: "바깥 루프 3회, 안쪽 루프 3회인 중첩 반복문의 안쪽 본문 실행 횟수는?",
            options: ["3회", "6회", "9회", "27회"],
            answer: 2,
            explain: "바깥 3회 × 안쪽 3회 = 9회 실행된다."
          }
        ]
      },
      {
        id: "ch05-6",
        title: "Ch05·6 return·break·continue·goto",
        summary: "흐름을 제어하는 점프문.",
        body: `
<ul>
  <li><code>break</code> — 가장 가까운 루프/switch 를 즉시 탈출</li>
  <li><code>continue</code> — 이번 반복만 건너뛰고 다음 반복으로</li>
  <li><code>return</code> — 함수 자체를 종료(값 반환)</li>
  <li><code>goto</code> — 라벨로 점프(권장하지 않음)</li>
</ul>`,
        code: `for (int i = 0; i < 10; ++i) {
    if (i == 7) break;        // 7에서 멈춤
    if (i % 2 == 0) continue; // 짝수 건너뜀
    std::cout << i << ' ';    // 1 3 5
}`,
        codeNote: "break 는 루프 탈출, continue 는 이번 회차만 건너뛴다. goto 는 피하라.",
        quiz: [
          {
            q: "'이번 반복만 건너뛰고 다음 반복으로' 가는 키워드는?",
            options: ["break", "continue", "return", "goto"],
            answer: 1,
            explain: "continue 는 현재 반복의 남은 부분을 건너뛰고 다음 반복으로 간다."
          }
        ]
      },
      {
        id: "ch05-7",
        title: "Ch05·7 [Lab] 반복문 응용",
        summary: "팩토리얼·거듭제곱·최소최대·any/all.",
        body: `
<p>반복문의 단골 응용: 누적(합·곱), 팩토리얼, 거듭제곱, 최소/최대 찾기,
"하나라도(any) / 모두(all) 조건 만족" 판정.</p>`,
        code: `// 팩토리얼 5! = 120
long long fact = 1;
for (int i = 1; i <= 5; ++i) fact *= i;
std::cout << fact << '\\n';

// 배열에서 최댓값
int arr[] = {3, 9, 2, 7}, mx = arr[0];
for (int x : arr) if (x > mx) mx = x;
std::cout << mx << '\\n';   // 9`,
        codeNote: "최댓값 찾기는 '첫 값을 후보로 두고 더 큰 값이 나오면 교체' 패턴이다.",
        quiz: [
          {
            q: "팩토리얼이나 합계처럼 결과를 변수에 차곡차곡 모으는 패턴을?",
            options: ["분기", "누적(accumulation)", "재귀", "캐스팅"],
            answer: 1,
            explain: "반복하며 결과를 한 변수에 모으는 것을 누적(accumulation) 패턴이라 한다."
          }
        ]
      },

      /* ---------- Ch06 함수 ---------- */
      {
        id: "ch06-1",
        title: "Ch06·1 함수의 개요",
        summary: "함수의 역할·장점·기본 사용법.",
        body: `
<p><strong>함수</strong>는 이름 붙은 코드 블록이다. 같은 일을 반복하지 않고 재사용하며,
프로그램을 작은 조각으로 나눠 읽기 쉽게 만든다.</p>
<pre class="mini">반환타입 함수이름(매개변수목록) { 본문 }</pre>
<p>호출 전에 컴파일러가 시그니처를 알도록 보통 <em>선언(프로토타입)</em>을 위에 둔다.</p>`,
        code: `int square(int x) { return x * x; }  // 정의

int main() {
    std::cout << square(5) << '\\n';   // 25
    return 0;
}`,
        codeNote: "함수로 나누면 같은 코드를 반복하지 않고 이름으로 재사용한다.",
        quiz: [
          {
            q: "함수를 쓰는 가장 큰 이유는?",
            options: ["프로그램을 느리게", "코드 재사용과 가독성", "메모리 증가", "타입 제거"],
            answer: 1,
            explain: "함수는 코드 재사용과 모듈화로 가독성·유지보수성을 높인다."
          }
        ]
      },
      {
        id: "ch06-2",
        title: "Ch06·2 라이브러리 함수",
        summary: "수학·문자·시간·랜덤 함수.",
        body: `
<ul>
  <li><strong>수학</strong> <code>&lt;cmath&gt;</code> — <code>sqrt, pow, abs, sin</code></li>
  <li><strong>문자</strong> <code>&lt;cctype&gt;</code> — <code>isdigit, toupper</code></li>
  <li><strong>시간</strong> <code>&lt;ctime&gt;</code> — <code>time</code></li>
  <li><strong>랜덤</strong> <code>&lt;random&gt;</code> 또는 <code>rand()</code></li>
</ul>`,
        code: `#include <cmath>
#include <cctype>
std::cout << std::sqrt(16.0) << '\\n';   // 4
std::cout << std::pow(2, 10) << '\\n';   // 1024
std::cout << (char)std::toupper('a');    // A`,
        codeNote: "바퀴를 다시 만들지 말고 표준 라이브러리 함수를 먼저 찾아 쓰라.",
        quiz: [
          {
            q: "제곱근을 구하는 표준 수학 함수는?",
            options: ["std::pow", "std::sqrt", "std::abs", "std::root"],
            answer: 1,
            explain: "std::sqrt(x) 가 제곱근을 반환한다. (<cmath> 필요)"
          }
        ]
      },
      {
        id: "ch06-3",
        title: "Ch06·3 사용자 정의 함수",
        summary: "직접 만드는 함수: 선언과 정의.",
        body: `
<p>직접 만드는 함수는 <strong>선언(프로토타입)</strong>과 <strong>정의(본문)</strong>로 나눌 수 있다.
큰 프로그램에선 선언을 헤더에, 정의를 소스 파일에 둔다.</p>`,
        code: `double avg(double a, double b);   // 선언(프로토타입)

int main() {
    std::cout << avg(3, 4) << '\\n';  // 3.5
}

double avg(double a, double b) {  // 정의
    return (a + b) / 2.0;
}`,
        codeNote: "선언을 위에 두면 정의가 아래에 있어도 호출할 수 있다.",
        quiz: [
          {
            q: "함수를 정의보다 먼저 호출하려면 무엇이 필요한가?",
            options: ["main 함수", "선언(프로토타입)", "헤더 가드", "네임스페이스"],
            answer: 1,
            explain: "컴파일러가 호출 시점에 시그니처를 알도록 선언을 먼저 둔다."
          }
        ]
      },
      {
        id: "ch06-4",
        title: "Ch06·4 자료 교환 — 전달과 리턴",
        summary: "값 전달 vs 참조 전달, const 참조.",
        body: `
<table class="tbl">
  <tr><th>방식</th><th>원본 변경</th><th>복사 비용</th></tr>
  <tr><td><code>T x</code> (값)</td><td>불가</td><td>있음</td></tr>
  <tr><td><code>T&amp; x</code> (참조)</td><td>가능</td><td>없음</td></tr>
  <tr><td><code>const T&amp; x</code></td><td>불가</td><td>없음</td></tr>
</table>
<p>큰 객체를 <em>읽기만</em> 할 땐 <code>const T&amp;</code> 가 정석이다.</p>`,
        code: `void byValue(int x) { x = 99; }   // 원본 안 바뀜
void byRef(int& x)  { x = 99; }   // 원본 바뀜

int a = 1;
byValue(a); std::cout << a << '\\n';  // 1
byRef(a);   std::cout << a << '\\n';  // 99`,
        codeNote: "원본을 바꾸려면 참조(&), 큰 객체를 읽기만 하면 const T&.",
        quiz: [
          {
            q: "큰 객체를 복사 없이 '읽기 전용'으로 넘기는 권장 매개변수 형태는?",
            options: ["T x", "T& x", "const T& x", "T* x"],
            answer: 2,
            explain: "const T& 는 복사를 피하면서 원본 변경도 막는 표준 관용구다."
          }
        ]
      },
      {
        id: "ch06-5",
        title: "Ch06·5 매개변수와 함수 오버로딩",
        summary: "기본 매개변수, 같은 이름 다른 시그니처.",
        body: `
<h3>기본 매개변수</h3>
<p><code>int f(int x, int y = 0)</code> — 인자를 생략하면 기본값 사용. 오른쪽부터 채운다.</p>
<h3>오버로딩</h3>
<p>이름이 같아도 <strong>매개변수의 개수/타입</strong>이 다르면 별개 함수.
컴파일러가 인자에 맞는 버전을 골라준다.</p>`,
        code: `int add(int a, int b)          { return a + b; }
double add(double a, double b) { return a + b; }  // 오버로딩
int power(int x, int n = 2)    { /* 기본 제곱 */ return n==2 ? x*x : x*x*x; }

add(3, 4);      // int 버전 → 7
add(1.5, 2.5);  // double 버전 → 4.0
power(5);       // n 생략 → 25`,
        codeNote: "매개변수 타입이 다르면 같은 이름으로 여러 함수를 둘 수 있다(오버로딩).",
        quiz: [
          {
            q: "이름은 같지만 매개변수가 달라 여러 버전을 두는 것을?",
            options: ["오버라이딩", "오버로딩", "상속", "캡슐화"],
            answer: 1,
            explain: "오버로딩은 시그니처가 다른 동명 함수를 정의하는 것이다."
          }
        ]
      },
      {
        id: "ch06-6",
        title: "Ch06·6 함수의 사용 범위와 유지 기간",
        summary: "스코프(지역/전역)와 수명(static).",
        body: `
<h3>스코프(유효 범위)</h3>
<ul>
  <li><strong>지역 변수</strong> — 함수/블록 안에서만, 나가면 소멸</li>
  <li><strong>전역 변수</strong> — 어디서나, 남용 금지</li>
</ul>
<h3>수명(유지 기간)</h3>
<p><code>static</code> 지역 변수는 함수가 끝나도 <strong>값이 유지</strong>되어 다음 호출에서 이어진다.</p>`,
        code: `void counter() {
    static int count = 0;   // 호출이 끝나도 유지
    ++count;
    std::cout << count << ' ';
}
counter(); counter(); counter();   // 1 2 3`,
        codeNote: "static 지역 변수는 처음 한 번만 초기화되고 호출 사이에 값이 보존된다.",
        quiz: [
          {
            q: "함수가 끝나도 값이 유지되어 다음 호출에서 이어지는 지역 변수는?",
            options: ["const 변수", "전역 변수", "static 지역 변수", "참조 변수"],
            answer: 2,
            explain: "static 지역 변수는 수명이 프로그램 전체이며 호출 사이에 값이 보존된다."
          }
        ]
      },
      {
        id: "ch06-7",
        title: "Ch06·7 [Lab] 함수 응용",
        summary: "예금·적금 미래 가치 계산.",
        body: `
<p>함수로 <strong>금융 계산</strong>을 모듈화한다. 정기 예금의 미래 가치는 복리 공식
<code>FV = P(1+r)<sup>n</sup></code> 으로, 함수로 빼두면 여러 시나리오에 재사용할 수 있다.</p>`,
        code: `#include <cmath>
double futureValue(double principal, double rate, int years) {
    return principal * std::pow(1 + rate, years);
}

int main() {
    std::cout << futureValue(1000000, 0.03, 10) << '\\n'; // 10년 후
}`,
        codeNote: "공식을 함수로 분리하면 원금·이율·기간만 바꿔 재사용할 수 있다.",
        quiz: [
          {
            q: "복리 미래가치 P(1+r)^n 에서 거듭제곱을 계산하는 함수는?",
            options: ["std::sqrt", "std::pow", "std::abs", "std::exp 만"],
            answer: 1,
            explain: "std::pow(밑, 지수) 로 거듭제곱을 계산한다."
          }
        ]
      }
    ]
  },

  /* ===================================================================
   *  3단계 · 객체지향 입문 — 클래스·배열·메모리 (Ch07~09)
   * =================================================================== */
  {
    stage: "3. 객체지향 입문 — 클래스·배열·메모리",
    icon: "🏗️",
    lessons: [
      /* ---------- Ch07 클래스와 생성자 ---------- */
      {
        id: "ch07-1",
        title: "Ch07·1 클래스의 개요",
        summary: "타입과 인스턴스, 클래스와 객체.",
        body: `
<p><strong>클래스</strong>는 사용자가 정의하는 <em>타입</em>이고, 그 타입으로 찍어낸 실체가
<strong>객체(인스턴스)</strong>다. "붕어빵 틀(클래스) → 붕어빵(객체)".</p>
<h3>왜 클래스인가</h3>
<p>관련된 <em>데이터(멤버 변수)</em>와 그 데이터를 다루는 <em>동작(멤버 함수)</em>을
하나로 묶어 현실의 개념을 코드로 모델링한다.</p>`,
        code: `class Dog {           // 타입(틀)
public:
    std::string name;
    void bark() { std::cout << name << ": 멍멍\\n"; }
};

Dog d;                // 객체(인스턴스)
d.name = "초코";
d.bark();             // 초코: 멍멍`,
        codeNote: "class 는 타입(틀), 그것으로 만든 변수 d 가 객체(인스턴스)다.",
        quiz: [
          {
            q: "클래스와 객체의 관계로 옳은 것은?",
            options: ["둘은 같은 말", "클래스는 틀, 객체는 그 틀로 만든 실체", "객체가 틀, 클래스가 실체", "객체는 함수다"],
            answer: 1,
            explain: "클래스는 타입(틀), 객체는 그 클래스로 생성한 인스턴스(실체)다."
          }
        ]
      },
      {
        id: "ch07-2",
        title: "Ch07·2 객체 지향과 클래스",
        summary: "클래스 정의, 멤버 함수, 인라인, 구조체.",
        body: `
<h3>접근 지정자</h3>
<ul>
  <li><code>private</code>(기본) — 클래스 내부에서만</li>
  <li><code>public</code> — 외부에서 접근 가능(인터페이스)</li>
</ul>
<p>데이터는 <code>private</code> 로 숨기고 <code>public</code> 멤버 함수로만 다루는 것이
<strong>캡슐화</strong>의 핵심이다.</p>
<h3>struct vs class</h3>
<p>둘 다 클래스지만 <code>struct</code> 는 기본이 <code>public</code>, <code>class</code> 는 기본이 <code>private</code>.</p>`,
        code: `class Circle {
    double r;                    // private (기본)
public:
    void setR(double v) { r = v; }
    double area() const { return 3.14159 * r * r; }  // 인라인
};

Circle c; c.setR(2);
std::cout << c.area() << '\\n';   // 12.566`,
        codeNote: "멤버 데이터는 private 로 숨기고 public 함수로만 접근하게 한다.",
        quiz: [
          {
            q: "클래스 멤버를 외부에서 직접 접근하지 못하게 숨기는 접근 지정자는?",
            options: ["public", "private", "friend", "static"],
            answer: 1,
            explain: "private 멤버는 클래스 내부에서만 접근 가능해 캡슐화를 구현한다."
          }
        ]
      },
      {
        id: "ch07-3",
        title: "Ch07·3 생성자와 소멸자",
        summary: "객체의 생성·소멸 시 자동 호출.",
        body: `
<ul>
  <li><strong>생성자</strong> — 객체가 만들어질 때 자동 호출, 초기 상태 설정.
  <em>멤버 초기화 리스트</em> <code>: 멤버{값}</code> 권장.</li>
  <li><strong>소멸자</strong> <code>~클래스()</code> — 객체가 사라질 때 자동 호출, 자원 정리.</li>
</ul>`,
        code: `class Account {
    std::string owner;
    double balance;
public:
    Account(std::string o, double b)        // 생성자
        : owner{std::move(o)}, balance{b} {
        std::cout << owner << " 계좌 개설\\n";
    }
    ~Account() { std::cout << owner << " 계좌 정리\\n"; } // 소멸자
};
{ Account a{"민수", 1000}; }  // 블록 끝 → 소멸자 자동 호출`,
        codeNote: "생성자는 객체 생성 시, 소멸자는 객체 소멸 시 자동으로 불린다.",
        quiz: [
          {
            q: "객체가 생성될 때 자동 호출되어 초기 상태를 설정하는 멤버 함수는?",
            options: ["소멸자", "생성자", "정적 함수", "복사자"],
            answer: 1,
            explain: "생성자(constructor)는 객체 생성 시 자동 호출되어 멤버를 초기화한다."
          }
        ]
      },
      {
        id: "ch07-4",
        title: "Ch07·4 인스턴스 멤버",
        summary: "객체마다 따로 갖는 데이터·함수.",
        body: `
<p><strong>인스턴스 멤버</strong>는 객체마다 <em>각자</em> 갖는다. 객체 A의 <code>balance</code> 와
객체 B의 <code>balance</code> 는 별개의 메모리다.</p>
<p>멤버 함수가 객체의 상태를 바꾸지 않으면 뒤에 <code>const</code> 를 붙여
<strong>읽기 전용</strong>임을 보장하라.</p>`,
        code: `class Counter {
    int value = 0;            // 인스턴스 데이터 멤버
public:
    void inc() { ++value; }   // 상태 변경
    int get() const { return value; }  // 읽기 전용
};
Counter a, b;
a.inc(); a.inc();
std::cout << a.get() << " " << b.get();  // 2 0 (서로 독립)`,
        codeNote: "객체 a 와 b 의 인스턴스 멤버는 서로 독립적이다.",
        quiz: [
          {
            q: "객체의 상태를 바꾸지 않는 멤버 함수에 붙이면 좋은 키워드는?",
            options: ["static", "const", "virtual", "inline"],
            answer: 1,
            explain: "상태를 안 바꾸는 멤버 함수 뒤에 const 를 붙여 읽기 전용을 보장한다."
          }
        ]
      },
      {
        id: "ch07-5",
        title: "Ch07·5 정적 멤버",
        summary: "클래스 전체가 공유하는 멤버(static).",
        body: `
<p><code>static</code> 멤버는 객체마다가 아니라 <strong>클래스 전체가 하나를 공유</strong>한다.
생성된 객체 수를 세는 카운터 등에 쓴다. 정적 멤버 함수는 특정 객체 없이
<code>클래스::함수()</code> 로 호출한다.</p>`,
        code: `class Widget {
public:
    static int count;          // 선언 (공유)
    Widget()  { ++count; }
    ~Widget() { --count; }
};
int Widget::count = 0;         // 정의(초기화)

Widget a, b;
std::cout << Widget::count << '\\n';  // 2`,
        codeNote: "static 멤버는 모든 객체가 공유하며 클래스::멤버 로 접근한다.",
        quiz: [
          {
            q: "객체마다가 아니라 클래스 전체가 하나를 공유하는 멤버는?",
            options: ["인스턴스 멤버", "static 멤버", "const 멤버", "private 멤버"],
            answer: 1,
            explain: "static 멤버는 클래스 단위로 하나만 존재해 모든 객체가 공유한다."
          }
        ]
      },
      {
        id: "ch07-6",
        title: "Ch07·6 객체 지향 프로그래밍 — 파일 분할",
        summary: "헤더/소스 분할, 전처리 지시문, 캡슐화.",
        body: `
<p>큰 프로그램은 <strong>선언(.h)</strong>과 <strong>정의(.cpp)</strong>로 나눈다.</p>
<ul>
  <li><code>.h</code> — 클래스 선언, 함수 프로토타입</li>
  <li><code>.cpp</code> — 함수 본문 구현</li>
</ul>
<h3>헤더 가드</h3>
<p><code>#pragma once</code> 또는 <code>#ifndef</code> 로 헤더가 여러 번 포함되는 것을 막는다.</p>`,
        lang: "cpp",
        code: `// circle.h
#pragma once
class Circle {
    double r;
public:
    Circle(double r);
    double area() const;   // 선언만
};

// circle.cpp
#include "circle.h"
Circle::Circle(double r) : r{r} {}
double Circle::area() const { return 3.14159 * r * r; }`,
        codeNote: "헤더엔 선언, 소스엔 정의. #pragma once 로 중복 포함을 막는다.",
        quiz: [
          {
            q: "헤더 파일이 여러 번 포함되는 것을 막는 가장 간단한 방법은?",
            options: ["#include 한 번만", "#pragma once", "static 선언", "const 선언"],
            answer: 1,
            explain: "#pragma once (또는 #ifndef 가드)로 헤더 중복 포함을 막는다."
          }
        ]
      },
      {
        id: "ch07-7",
        title: "Ch07·7 [Lab] 클래스 설계 — 분수·Time",
        summary: "Fraction·Time 같은 값 클래스 만들기.",
        body: `
<p>분수(Fraction)·시간(Time) 같은 <strong>값 클래스</strong>는 OOP 설계 연습의 단골이다.
데이터(분자/분모)를 숨기고, 약분·덧셈 같은 동작을 멤버 함수로 노출한다.</p>`,
        code: `class Fraction {
    int num, den;
    int gcd(int a, int b) { return b ? gcd(b, a % b) : a; }
public:
    Fraction(int n, int d) : num{n}, den{d} { reduce(); }
    void reduce() { int g = gcd(num, den); num/=g; den/=g; }
    void print() const { std::cout << num << "/" << den << '\\n'; }
};
Fraction f{6, 8}; f.print();   // 3/4 (자동 약분)`,
        codeNote: "생성자에서 reduce() 를 불러 항상 약분된 상태를 유지한다(불변식 보장).",
        quiz: [
          {
            q: "Fraction 생성자에서 reduce()(약분)를 호출하는 이유는?",
            options: ["속도 향상", "객체가 항상 올바른(약분된) 상태를 유지하려고", "메모리 절약", "출력 위해"],
            answer: 1,
            explain: "생성 시 약분해 객체의 불변식(항상 기약분수)을 보장한다."
          }
        ]
      },

      /* ---------- Ch08 배열 ---------- */
      {
        id: "ch08-1",
        title: "Ch08·1 1차원 배열",
        summary: "배열 개요·속성·생성·요소 접근.",
        body: `
<p><strong>배열</strong>은 같은 타입의 값을 연속된 메모리에 모은 것이다. 인덱스는
<strong>0부터</strong> 시작한다.</p>
<div class="callout warn">크기가 5인 배열의 유효 인덱스는 0~4. 범위를 벗어나면(arr[5])
정의되지 않은 동작 — 위험하다.</div>
<p>모던 C++에선 고정 크기엔 <code>std::array</code>, 가변 크기엔 <code>std::vector</code> 권장.</p>`,
        code: `int score[5] = {90, 85, 70, 60, 100};
std::cout << score[0] << '\\n';   // 90 (첫 번째)
std::cout << score[4] << '\\n';   // 100 (마지막)
int sum = 0;
for (int i = 0; i < 5; ++i) sum += score[i];
std::cout << sum << '\\n';        // 405`,
        codeNote: "배열 인덱스는 0부터. 크기 n 배열의 마지막 인덱스는 n-1.",
        quiz: [
          {
            q: "크기가 5인 배열에서 유효한 마지막 인덱스는?",
            options: ["5", "4", "6", "0"],
            answer: 1,
            explain: "인덱스는 0부터 시작하므로 크기 5 배열의 마지막은 4다."
          }
        ]
      },
      {
        id: "ch08-2",
        title: "Ch08·2 배열의 연산",
        summary: "접근·변경 연산, 함수 전달, 병렬 배열.",
        body: `
<p>배열은 통째로 복사·대입되지 않는다. 함수에 넘기면 <strong>포인터로 전달</strong>되어
원본이 바뀔 수 있다(크기는 따로 넘겨야 함).</p>
<h3>병렬 배열</h3>
<p>같은 인덱스가 서로 연관되도록 여러 배열을 나란히 쓰는 기법
(예: <code>name[i]</code> 와 <code>age[i]</code>가 한 사람).</p>`,
        code: `void doubleAll(int a[], int n) {   // 배열은 포인터로 전달됨
    for (int i = 0; i < n; ++i) a[i] *= 2;
}
int v[3] = {1, 2, 3};
doubleAll(v, 3);
std::cout << v[0] << v[1] << v[2];   // 246 (원본 변경됨)`,
        codeNote: "배열을 함수에 넘기면 원본을 가리키므로 안에서 바꾸면 원본이 바뀐다.",
        quiz: [
          {
            q: "배열을 함수에 인자로 넘기면 어떻게 전달되는가?",
            options: ["전체 복사본", "포인터(원본을 가리킴)", "참조 불가", "값 하나만"],
            answer: 1,
            explain: "배열은 포인터로 전달되어 함수 안에서 원본을 직접 수정할 수 있다."
          }
        ]
      },
      {
        id: "ch08-3",
        title: "Ch08·3 다차원 배열",
        summary: "2차원·3차원 배열, 행렬 표현.",
        body: `
<p><strong>2차원 배열</strong> <code>a[행][열]</code> 은 표(행렬)를 표현한다.
중첩 반복문으로 순회한다. 행렬 연산·격자 데이터에 쓰인다.</p>`,
        code: `int m[2][3] = {{1, 2, 3}, {4, 5, 6}};
for (int i = 0; i < 2; ++i) {
    for (int j = 0; j < 3; ++j)
        std::cout << m[i][j] << ' ';
    std::cout << '\\n';
}
// 1 2 3
// 4 5 6`,
        codeNote: "2차원 배열은 중첩 for(행, 열)로 순회한다.",
        quiz: [
          {
            q: "2차원 배열 m[2][3] 의 원소 개수는?",
            options: ["5", "6", "2", "3"],
            answer: 1,
            explain: "2 × 3 = 6개의 원소를 가진다."
          }
        ]
      },
      {
        id: "ch08-4",
        title: "Ch08·4 [Lab] 배열 응용",
        summary: "빈도 배열·히스토그램, 선형 변환.",
        body: `
<p>배열의 대표 활용은 <strong>빈도 세기(counting)</strong>다. 값 자체를 인덱스로 써서
각 값이 몇 번 나왔는지 센다 → 히스토그램·도수분포표.</p>`,
        code: `int data[] = {1, 3, 3, 5, 3, 1};
int freq[6] = {0};               // 0~5 빈도
for (int x : data) freq[x]++;    // 값을 인덱스로!
for (int v = 1; v <= 5; ++v)
    std::cout << v << ": " << freq[v] << '\\n';
// 1:2  3:3  5:1`,
        codeNote: "값을 인덱스로 삼아 freq[값]++ 하면 빈도를 한 번에 셀 수 있다.",
        quiz: [
          {
            q: "각 값이 몇 번 등장했는지 셀 때 쓰는 배열 기법은?",
            options: ["병렬 배열", "빈도(counting) 배열", "다차원 배열", "동적 배열"],
            answer: 1,
            explain: "값을 인덱스로 삼아 freq[값]++ 하는 빈도(counting) 배열 기법이다."
          }
        ]
      },

      /* ---------- Ch09 참조, 포인터, 메모리 관리 ---------- */
      {
        id: "ch09-1",
        title: "Ch09·1 참조",
        summary: "참조 변수 — 다른 변수의 별명.",
        body: `
<p><strong>참조(reference)</strong>는 기존 변수에 붙이는 <em>별명</em>이다. 참조를 바꾸면
원본이 바뀐다. 선언과 동시에 초기화해야 하며, 한 번 묶이면 대상을 바꿀 수 없다.</p>`,
        code: `int x = 10;
int& r = x;     // r 은 x 의 별명
r = 20;
std::cout << x << '\\n';   // 20 (원본이 바뀜)`,
        codeNote: "참조는 원본의 또 다른 이름. r 을 바꾸면 x 가 바뀐다.",
        quiz: [
          {
            q: "참조 변수에 대한 설명으로 옳은 것은?",
            options: ["초기화 없이 선언 가능", "기존 변수의 별명이다", "대상을 자유롭게 바꿀 수 있다", "null 이 될 수 있다"],
            answer: 1,
            explain: "참조는 선언 시 묶은 변수의 별명이며, 이후 대상을 바꿀 수 없다."
          }
        ]
      },
      {
        id: "ch09-2",
        title: "Ch09·2 포인터",
        summary: "주소, 역참조, const 한정자, nullptr.",
        body: `
<ul>
  <li><code>&amp;x</code> — x 의 주소</li>
  <li><code>int* p</code> — 정수를 가리키는 포인터</li>
  <li><code>*p</code> — p 가 가리키는 값(역참조)</li>
  <li><code>nullptr</code> — 아무것도 안 가리킴(NULL 대신)</li>
</ul>
<p><code>const int* p</code>(가리키는 값 불변) vs <code>int* const p</code>(포인터 자체 불변)를 구분하라.</p>`,
        code: `int x = 42;
int* p = &x;          // x 의 주소
std::cout << *p << '\\n';   // 42 (역참조)
*p = 100;                   // x 를 바꿈
std::cout << x << '\\n';    // 100
int* q = nullptr;           // 안전한 초기화`,
        codeNote: "&x 는 주소, *p 는 그 주소의 값. 초기화 안 한 포인터엔 nullptr 을.",
        quiz: [
          {
            q: "포인터 p 가 가리키는 곳의 '값'을 얻는 연산자는?",
            options: ["&p", "*p", "#p", "p&"],
            answer: 1,
            explain: "*p 는 역참조로 포인터가 가리키는 값을 읽는다."
          }
        ]
      },
      {
        id: "ch09-3",
        title: "Ch09·3 배열과 포인터",
        summary: "배열 이름은 첫 원소의 주소.",
        body: `
<p>배열 이름은 사실상 <strong>첫 원소를 가리키는 포인터</strong>처럼 동작한다.
<code>arr[i]</code> 는 <code>*(arr + i)</code> 와 같다(포인터 산술).</p>`,
        code: `int arr[3] = {10, 20, 30};
int* p = arr;             // arr == &arr[0]
std::cout << *p << '\\n';      // 10
std::cout << *(p + 1) << '\\n'; // 20 (포인터 산술)
std::cout << p[2] << '\\n';     // 30 (p[i] 도 가능)`,
        codeNote: "arr[i] 와 *(arr+i) 는 같다. 배열과 포인터는 깊게 연결돼 있다.",
        quiz: [
          {
            q: "arr[2] 와 같은 표현은?",
            options: ["*(arr + 2)", "arr + 2", "&arr[2]", "*arr + 2"],
            answer: 0,
            explain: "arr[i] 는 *(arr + i) 와 동일하다(포인터 산술)."
          }
        ]
      },
      {
        id: "ch09-4",
        title: "Ch09·4 메모리 관리",
        summary: "스택 vs 힙, new / delete.",
        body: `
<h3>메모리 영역</h3>
<ul>
  <li><strong>코드</strong> — 실행 명령어</li>
  <li><strong>정적</strong> — 전역/static 변수</li>
  <li><strong>스택</strong> — 지역 변수(자동 관리, 빠름)</li>
  <li><strong>힙</strong> — <code>new</code> 로 직접 할당(수동 관리)</li>
</ul>
<div class="callout warn"><code>new</code> 한 것은 반드시 <code>delete</code>. 빠뜨리면 <strong>메모리 누수</strong>!
(모던 C++에선 스마트 포인터로 대체 — Ch이후 참고)</div>`,
        code: `int* heap = new int{7};     // 힙에 할당
std::cout << *heap << '\\n'; // 7
delete heap;                // 반드시 해제!
heap = nullptr;             // 댕글링 방지

int* arr = new int[3]{1,2,3};
delete[] arr;               // 배열은 delete[]`,
        codeNote: "new ↔ delete, new[] ↔ delete[]. 짝을 반드시 맞춰라.",
        quiz: [
          {
            q: "new 로 할당한 메모리를 delete 하지 않으면?",
            options: ["컴파일 오류", "메모리 누수", "자동 회수", "스택 오버플로우"],
            answer: 1,
            explain: "delete 를 빠뜨리면 회수되지 않는 메모리 누수가 생긴다."
          }
        ]
      },
      {
        id: "ch09-5",
        title: "Ch09·5 [Lab] 메모리 응용",
        summary: "동적 배열로 Matrix 클래스 만들기.",
        body: `
<p>크기를 실행 중에 정하는 <strong>동적 행렬(Matrix)</strong>은 힙 할당의 대표 예다.
생성자에서 <code>new</code>, 소멸자에서 <code>delete[]</code> 로 짝을 맞춘다(RAII의 기초).</p>`,
        code: `class Vector {
    int* data;
    int n;
public:
    Vector(int size) : data{new int[size]{}}, n{size} {}
    ~Vector() { delete[] data; }      // 자동 정리
    int& operator[](int i) { return data[i]; }
};
Vector v{3};
v[0] = 10;
std::cout << v[0] << '\\n';   // 10  (블록 끝나면 소멸자가 delete[])`,
        codeNote: "생성자 new ↔ 소멸자 delete[] 로 짝을 맞추면 누수가 없다(RAII).",
        quiz: [
          {
            q: "생성자에서 new[] 로 할당했다면 소멸자에서 해야 할 일은?",
            options: ["delete", "delete[]", "free", "아무것도 안 함"],
            answer: 1,
            explain: "배열 할당 new[] 는 반드시 delete[] 로 해제해야 한다."
          }
        ]
      }
    ]
  },

  /* ===================================================================
   *  4단계 · 객체지향 심화 — 문자열·관계·다형성·오버로드 (Ch10~13)
   * =================================================================== */
  {
    stage: "4. 객체지향 심화 — 관계·다형성",
    icon: "🏛️",
    lessons: [
      /* ---------- Ch10 문자열 ---------- */
      {
        id: "ch10-1",
        title: "Ch10·1 C 문자열",
        summary: "char 배열과 널 종료, C 문자열 함수.",
        body: `
<p><strong>C 문자열</strong>은 <code>char</code> 배열이며 끝에 <strong>널 문자 <code>'\\0'</code></strong>가
붙는다. <code>&lt;cstring&gt;</code> 의 <code>strlen, strcpy, strcmp</code> 로 다룬다.</p>
<div class="callout warn">C 문자열은 버퍼 크기·널 종료를 직접 챙겨야 해 버그가 잦다.
새 코드에선 <code>std::string</code> 을 쓰자.</div>`,
        code: `#include <cstring>
char s[] = "hello";          // 끝에 '\\0' 자동 추가 (크기 6)
std::cout << std::strlen(s) << '\\n';  // 5 ('\\0' 제외)`,
        codeNote: "C 문자열은 끝에 보이지 않는 '\\0' 가 있어 길이는 글자 수와 같다.",
        quiz: [
          {
            q: "C 문자열(char 배열)의 끝을 표시하는 문자는?",
            options: ["'\\n'", "'\\0'", "' '", "'#'"],
            answer: 1,
            explain: "널 문자 '\\0' 가 C 문자열의 끝을 나타낸다."
          }
        ]
      },
      {
        id: "ch10-2",
        title: "Ch10·2 C++ 문자열 클래스",
        summary: "std::string — 안전하고 편리한 문자열.",
        body: `
<p><code>std::string</code> 은 길이 관리·메모리를 알아서 해주는 문자열 클래스다.
<code>+</code> 로 연결, <code>==</code> 로 비교, <code>.size() .substr() .find()</code> 등 풍부한 기능.</p>`,
        code: `#include <string>
std::string a = "Hello", b = "World";
std::string c = a + ", " + b + "!";   // 연결
std::cout << c << '\\n';               // Hello, World!
std::cout << c.size() << '\\n';        // 13
std::cout << c.substr(0, 5) << '\\n';  // Hello
std::cout << (a == "Hello") << '\\n';  // 1 (true)`,
        codeNote: "std::string 은 + 로 잇고 == 로 비교하며 길이를 알아서 관리한다.",
        quiz: [
          {
            q: "std::string 두 개를 이어 붙이는 연산자는?",
            options: ["&", "+", "<<", "."],
            answer: 1,
            explain: "std::string 은 + 연산자로 문자열을 연결한다."
          }
        ]
      },
      {
        id: "ch10-3",
        title: "Ch10·3 [Lab] 문자열 응용",
        summary: "진법 변환·문자열 처리 함수.",
        body: `
<p>문자열의 대표 응용은 <strong>진법 변환</strong>이다. 10진수를 2/16진수 문자열로 바꾸려면
나머지를 거꾸로 모은다. 문자 ↔ 숫자 변환에 <code>'0' + d</code> 같은 기법을 쓴다.</p>`,
        code: `std::string toBinary(int n) {
    if (n == 0) return "0";
    std::string s;
    while (n > 0) { s = char('0' + n % 2) + s; n /= 2; }
    return s;
}
std::cout << toBinary(13) << '\\n';   // 1101`,
        codeNote: "나머지를 앞에 붙여 가면(s = ... + s) 자릿수가 올바른 순서로 쌓인다.",
        quiz: [
          {
            q: "숫자 d(0~9)를 해당 문자로 바꾸는 방법은?",
            options: ["(char)d", "'0' + d", "d.toChar()", "char(d * 10)"],
            answer: 1,
            explain: "'0' + d 로 문자 코드를 더해 숫자를 문자로 변환한다."
          }
        ]
      },

      /* ---------- Ch11 클래스 간의 관계 ---------- */
      {
        id: "ch11-1",
        title: "Ch11·1 상속",
        summary: "기반/파생 클래스, public 상속, 3가지 유형.",
        body: `
<p><strong>상속</strong>은 기존 클래스(<em>기반</em>)의 멤버를 물려받아 새 클래스(<em>파생</em>)를
만든다. "is-a" 관계 — <code>Dog is-a Animal</code>.</p>
<h3>상속 유형</h3>
<table class="tbl">
  <tr><th>유형</th><th>기반의 public 멤버가 파생에서</th></tr>
  <tr><td>public</td><td>public (가장 흔함)</td></tr>
  <tr><td>protected</td><td>protected</td></tr>
  <tr><td>private</td><td>private</td></tr>
</table>`,
        code: `class Animal {
public:
    void eat() { std::cout << "먹는다\\n"; }
};
class Dog : public Animal {   // public 상속
public:
    void bark() { std::cout << "멍멍\\n"; }
};
Dog d;
d.eat();    // 물려받은 멤버
d.bark();   // 자신의 멤버`,
        codeNote: "public 상속은 'is-a' 관계를 표현하며 기반의 public 멤버를 그대로 노출한다.",
        quiz: [
          {
            q: "상속이 표현하는 관계는?",
            options: ["has-a", "is-a", "use-a", "none"],
            answer: 1,
            explain: "상속은 'Dog is-a Animal' 같은 is-a 관계를 표현한다."
          }
        ]
      },
      {
        id: "ch11-2",
        title: "Ch11·2 연관 — 소유와 구성",
        summary: "클래스가 다른 클래스를 멤버로 갖기.",
        body: `
<p><strong>연관(association)</strong>은 "has-a" 관계다. 클래스가 다른 객체를 멤버로 가진다.</p>
<ul>
  <li><strong>구성(composition)</strong> — 전체가 부분을 소유, 수명을 같이함(자동차-엔진)</li>
  <li><strong>집합(aggregation)</strong> — 느슨한 소유, 수명 독립(팀-선수)</li>
</ul>`,
        code: `class Engine {
public:
    void start() { std::cout << "부릉\\n"; }
};
class Car {
    Engine engine;        // 구성: Car 가 Engine 을 소유
public:
    void drive() { engine.start(); std::cout << "출발\\n"; }
};
Car c; c.drive();   // 부릉 / 출발`,
        codeNote: "Car 가 Engine 을 멤버로 가지는 'has-a'(구성) 관계다.",
        quiz: [
          {
            q: "'자동차가 엔진을 가진다'처럼 클래스가 다른 객체를 멤버로 갖는 관계는?",
            options: ["is-a (상속)", "has-a (연관/구성)", "다형성", "오버로딩"],
            answer: 1,
            explain: "멤버로 다른 객체를 포함하는 has-a 관계(연관/구성)다."
          }
        ]
      },
      {
        id: "ch11-3",
        title: "Ch11·3 의존과 UML",
        summary: "느슨한 의존 관계, UML 다이어그램.",
        body: `
<p><strong>의존(dependency)</strong>은 한 클래스가 다른 클래스를 <em>잠깐</em> 사용하는 관계다
(주로 함수 매개변수로). 멤버로 갖는 연관보다 결합이 약하다.</p>
<h3>UML 표기</h3>
<ul>
  <li>상속: 속이 빈 삼각형 화살표 (▷)</li>
  <li>연관/구성: 실선 + 다이아몬드(◆)</li>
  <li>의존: 점선 화살표 (- ->)</li>
</ul>`,
        code: `class Printer {
public:
    void print(const std::string& doc) {  // Printer 가 string 에 '의존'
        std::cout << doc << '\\n';
    }
};`,
        codeNote: "매개변수로만 잠깐 쓰는 관계가 의존(dependency)이다.",
        quiz: [
          {
            q: "클래스가 다른 클래스를 멤버가 아니라 함수 매개변수로 잠깐만 쓰는 관계는?",
            options: ["상속", "구성", "의존(dependency)", "다형성"],
            answer: 2,
            explain: "잠깐 사용하는 느슨한 결합이 의존(dependency) 관계다."
          }
        ]
      },

      /* ---------- Ch12 다형성 ---------- */
      {
        id: "ch12-1",
        title: "Ch12·1 다형성이란",
        summary: "가상 함수, 동적 바인딩, 가상 소멸자.",
        body: `
<p><strong>다형성</strong>은 같은 호출이 <em>실제 객체 타입</em>에 따라 다르게 동작하는 것.
기반 클래스 함수에 <code>virtual</code> 을 붙이면 <strong>동적 바인딩</strong>이 일어난다.</p>
<div class="callout warn">기반 클래스를 포인터로 다룬다면 소멸자도 <code>virtual</code> 로!
안 그러면 파생 객체가 제대로 해제되지 않는다.</div>`,
        code: `struct Animal {
    virtual void speak() const { std::cout << "...\\n"; }
    virtual ~Animal() = default;
};
struct Dog : Animal { void speak() const override { std::cout << "멍멍\\n"; } };
struct Cat : Animal { void speak() const override { std::cout << "야옹\\n"; } };

Animal* a = new Dog();
a->speak();   // 멍멍 (실제 타입 Dog!)
delete a;`,
        codeNote: "virtual 덕분에 Animal* 로 호출해도 실제 타입(Dog)의 speak() 가 불린다.",
        quiz: [
          {
            q: "기반 클래스 포인터로 호출해도 실제 객체 타입의 함수가 실행되게 하는 키워드는?",
            options: ["static", "virtual", "const", "inline"],
            answer: 1,
            explain: "virtual 함수는 런타임에 실제 객체 타입의 버전이 호출된다(동적 바인딩)."
          }
        ]
      },
      {
        id: "ch12-2",
        title: "Ch12·2 추상 클래스와 다중 상속",
        summary: "순수 가상 함수, 인터페이스, 다중 상속.",
        body: `
<h3>추상 클래스</h3>
<p>순수 가상 함수(<code>= 0</code>)를 하나라도 가지면 <strong>추상 클래스</strong>가 되어
직접 객체를 만들 수 없다. 파생 클래스가 반드시 구현하게 강제한다(인터페이스 역할).</p>
<h3>다중 상속</h3>
<p>C++은 여러 기반 클래스를 동시에 상속할 수 있다(주의해서 사용).</p>`,
        code: `struct Shape {
    virtual double area() const = 0;   // 순수 가상 → 추상 클래스
    virtual ~Shape() = default;
};
struct Circle : Shape {
    double r;
    Circle(double r) : r{r} {}
    double area() const override { return 3.14159 * r * r; }
};
// Shape s;        // 오류! 추상 클래스는 객체 생성 불가
Shape* p = new Circle{2};
std::cout << p->area();   // 12.566`,
        codeNote: "= 0 인 순수 가상 함수가 있으면 추상 클래스 — 파생에서 반드시 구현해야 한다.",
        quiz: [
          {
            q: "순수 가상 함수(= 0)를 가진 추상 클래스의 특징은?",
            options: ["객체를 직접 만들 수 없다", "상속할 수 없다", "멤버가 없다", "static 이다"],
            answer: 0,
            explain: "추상 클래스는 인스턴스화할 수 없고, 파생 클래스가 구현을 제공해야 한다."
          }
        ]
      },

      /* ---------- Ch13 연산자 오버로드 ---------- */
      {
        id: "ch13-1",
        title: "Ch13·1 객체의 역할",
        summary: "호스트·매개변수·리턴 객체.",
        body: `
<p>연산자 오버로드를 이해하려면 식 <code>a + b</code> 에서 객체들의 역할을 본다.</p>
<ul>
  <li><strong>호스트 객체</strong> — 연산을 수행하는 주체(왼쪽 <code>a</code>)</li>
  <li><strong>매개변수 객체</strong> — 함께 계산되는 대상(<code>b</code>)</li>
  <li><strong>리턴 객체</strong> — 결과로 돌려주는 새 객체</li>
</ul>`,
        code: `// a + b 에서:
//   a = 호스트 객체 (operator+ 를 호출하는 주체)
//   b = 매개변수 객체
//   결과 = 리턴 객체 (새로 만들어 반환)`,
        codeNote: "a + b 는 a.operator+(b) 로 해석된다 — a 가 호스트, b 가 매개변수.",
        quiz: [
          {
            q: "식 a + b 에서 연산을 수행하는 주체(호스트 객체)는?",
            options: ["a", "b", "+", "결과"],
            answer: 0,
            explain: "a + b 는 a.operator+(b) 로, a 가 연산을 수행하는 호스트 객체다."
          }
        ]
      },
      {
        id: "ch13-2",
        title: "Ch13·2 연산자 오버로드의 개념",
        summary: "연산자에 새 의미 부여, 규칙.",
        body: `
<p><strong>연산자 오버로드</strong>는 <code>+ - * == &lt;&lt;</code> 같은 연산자를
사용자 정의 타입에 대해 동작하게 만드는 것이다.</p>
<h3>규칙</h3>
<ul>
  <li>새 연산자를 만들 수는 없다(기존 것만 재정의)</li>
  <li>우선순위·피연산자 개수는 못 바꾼다</li>
  <li><code>:: . .* ?:</code> 는 오버로드 불가</li>
</ul>`,
        code: `// 오버로드 가능:  + - * / == != < > << >> [] () 등
// 불가:          ::  .  .*  ?:
// 의미는 직관적으로! a + b 가 '빼기'처럼 동작하면 혼란만 준다.`,
        codeNote: "연산자 오버로드는 직관에 맞게 — + 는 더하기처럼 동작해야 한다.",
        quiz: [
          {
            q: "연산자 오버로드에 대한 설명으로 옳은 것은?",
            options: ["완전히 새 연산자를 만들 수 있다", "기존 연산자에 새 의미를 줄 수 있다", "우선순위를 바꿀 수 있다", "모든 연산자가 가능하다"],
            answer: 1,
            explain: "기존 연산자를 사용자 타입에 맞게 재정의하는 것이며, 새 연산자 생성·우선순위 변경은 불가."
          }
        ]
      },
      {
        id: "ch13-3",
        title: "Ch13·3 멤버 함수로 오버로드",
        summary: "operator+ 등을 멤버로 정의.",
        body: `
<p>이항 연산자를 <strong>멤버 함수</strong>로 정의하면 왼쪽 피연산자가 호스트(<code>this</code>),
오른쪽이 매개변수가 된다.</p>`,
        code: `class Vec2 {
public:
    int x, y;
    Vec2(int x, int y) : x{x}, y{y} {}
    Vec2 operator+(const Vec2& o) const {   // 멤버 오버로드
        return Vec2{x + o.x, y + o.y};
    }
};
Vec2 a{1, 2}, b{3, 4};
Vec2 c = a + b;          // a.operator+(b)
std::cout << c.x << "," << c.y;   // 4,6`,
        codeNote: "멤버 operator+ 에서 왼쪽 피연산자는 this, 오른쪽은 매개변수 o 다.",
        quiz: [
          {
            q: "멤버 함수로 정의한 a + b 의 operator+ 에서 'a' 는?",
            options: ["매개변수", "this(호스트)", "리턴값", "전역 객체"],
            answer: 1,
            explain: "멤버 연산자에서 왼쪽 피연산자 a 가 this(호스트)가 된다."
          }
        ]
      },
      {
        id: "ch13-4",
        title: "Ch13·4 비멤버 함수로 오버로드",
        summary: "<< 출력 연산자, 대칭 연산.",
        body: `
<p>왼쪽 피연산자가 내 클래스가 아닐 때(예: <code>std::cout &lt;&lt; v</code>)는
<strong>비멤버 함수</strong>로 오버로드한다. 내부 데이터 접근이 필요하면 <code>friend</code> 로.</p>`,
        code: `class Vec2 {
public:
    int x, y;
    Vec2(int x, int y) : x{x}, y{y} {}
    friend std::ostream& operator<<(std::ostream& os, const Vec2& v) {
        return os << "(" << v.x << ", " << v.y << ")";
    }
};
Vec2 v{3, 4};
std::cout << v << '\\n';   // (3, 4)`,
        codeNote: "cout << v 는 왼쪽이 ostream 이라 비멤버(friend) 로 오버로드한다.",
        quiz: [
          {
            q: "std::cout << myObj 형태를 지원하려면 operator<< 를 어떻게 정의하나?",
            options: ["멤버 함수로", "비멤버(보통 friend) 함수로", "static 함수로", "정의 불가"],
            answer: 1,
            explain: "왼쪽 피연산자가 ostream 이므로 비멤버(friend) 함수로 오버로드한다."
          }
        ]
      },
      {
        id: "ch13-5",
        title: "Ch13·5 자료형 변환",
        summary: "변환 생성자와 변환 연산자.",
        body: `
<ul>
  <li><strong>변환 생성자</strong> — 다른 타입을 받아 내 객체로(<code>Fraction(int)</code>)</li>
  <li><strong>변환 연산자</strong> — 내 객체를 다른 타입으로(<code>operator double()</code>)</li>
</ul>
<div class="callout warn">의도치 않은 암묵 변환을 막으려면 단일 인자 생성자에
<code>explicit</code> 를 붙이는 것을 고려하라.</div>`,
        code: `class Fraction {
    int num, den;
public:
    Fraction(int n, int d = 1) : num{n}, den{d} {}   // 변환 생성자
    operator double() const { return (double)num / den; }  // 변환 연산자
};
Fraction f{3, 4};
double d = f;          // operator double() → 0.75
std::cout << d << '\\n';`,
        codeNote: "변환 연산자 operator double() 덕분에 Fraction 을 double 로 쓸 수 있다.",
        quiz: [
          {
            q: "내 클래스 객체를 double 로 자동 변환되게 하는 멤버는?",
            options: ["double convert()", "operator double()", "toDouble()", "cast<double>"],
            answer: 1,
            explain: "operator double() const 변환 연산자를 정의한다."
          }
        ]
      },
      {
        id: "ch13-6",
        title: "Ch13·6 [Lab] 연산자 오버로드 응용",
        summary: "Fraction·Date·Poly 클래스 확장.",
        body: `
<p>연산자 오버로드의 종합 실습: 분수(Fraction) 사칙연산, 날짜(Date) 비교·증가,
다항식(Poly) 덧셈 등. 여러 연산자를 일관되게 정의해 객체를 <em>내장 타입처럼</em> 다룬다.</p>`,
        code: `class Fraction {
    int num, den;
    int gcd(int a, int b){ return b? gcd(b,a%b):a; }
public:
    Fraction(int n, int d) : num{n}, den{d} {}
    Fraction operator+(const Fraction& o) const {
        Fraction r{num*o.den + o.num*den, den*o.den};
        int g = r.gcd(abs(r.num), r.den); r.num/=g; r.den/=g;
        return r;
    }
    void print() const { std::cout << num << "/" << den << '\\n'; }
};
(Fraction{1,2} + Fraction{1,3}).print();   // 5/6`,
        codeNote: "여러 연산자를 정의하면 Fraction 을 int 처럼 자연스럽게 계산할 수 있다.",
        quiz: [
          {
            q: "연산자 오버로드를 잘 설계했을 때의 이점은?",
            options: ["실행이 느려짐", "사용자 타입을 내장 타입처럼 직관적으로 사용", "메모리 절약", "상속이 쉬워짐"],
            answer: 1,
            explain: "Fraction a+b 처럼 사용자 타입을 내장 타입과 같은 문법으로 쓸 수 있다."
          }
        ]
      }
    ]
  },

  /* ===================================================================
   *  5단계 · 고급 기능 — 예외·템플릿·스트림·재귀 (Ch14~17)
   * =================================================================== */
  {
    stage: "5. 고급 기능 — 예외·템플릿·스트림",
    icon: "⚙️",
    lessons: [
      /* ---------- Ch14 예외 처리 ---------- */
      {
        id: "ch14-1",
        title: "Ch14·1 예외 처리의 개요",
        summary: "try · throw · catch 로 오류 다루기.",
        body: `
<p><strong>예외 처리</strong>는 실행 중 발생한 오류를 정상 흐름과 분리해 처리한다.</p>
<ul>
  <li><code>throw</code> — 예외를 던진다</li>
  <li><code>try</code> — 위험한 코드를 감싼다</li>
  <li><code>catch</code> — 던져진 예외를 받아 처리한다</li>
</ul>
<p>예외가 던져지면 <code>try</code> 블록을 빠져나와 맞는 <code>catch</code> 로 점프한다.</p>`,
        code: `double divide(int a, int b) {
    if (b == 0) throw "0으로 나눌 수 없음";
    return (double)a / b;
}
try {
    std::cout << divide(10, 0) << '\\n';
} catch (const char* msg) {
    std::cout << "오류: " << msg << '\\n';
}`,
        codeNote: "throw 로 던지고, try 로 감싸고, catch 로 받는다.",
        quiz: [
          {
            q: "예외를 '던지는' 키워드는?",
            options: ["try", "throw", "catch", "raise"],
            answer: 1,
            explain: "throw 로 예외를 던지고, try/catch 로 감싸 처리한다."
          }
        ]
      },
      {
        id: "ch14-2",
        title: "Ch14·2 클래스와 예외 처리",
        summary: "예외 객체, 스택 해제, 생성자/소멸자.",
        body: `
<p>예외로는 문자열뿐 아니라 <strong>객체</strong>도 던질 수 있다(권장).
예외가 전파되며 <code>try</code> 까지 거슬러 올라갈 때, 그 사이 스택의 지역 객체
소멸자가 호출된다 — 이를 <strong>스택 해제(stack unwinding)</strong>라 한다.</p>
<div class="callout warn">소멸자에서는 예외를 던지지 마라 — 스택 해제 중이면 프로그램이 종료된다.</div>`,
        code: `struct MyError {
    std::string what;
    MyError(std::string w) : what{std::move(w)} {}
};
try {
    throw MyError{"잔액 부족"};
} catch (const MyError& e) {
    std::cout << e.what << '\\n';   // 잔액 부족
}`,
        codeNote: "예외 객체를 던지면 정보를 풍부하게 담아 전달할 수 있다.",
        quiz: [
          {
            q: "예외가 전파되며 지역 객체들의 소멸자가 호출되는 과정을?",
            options: ["가비지 컬렉션", "스택 해제(unwinding)", "오버플로우", "바인딩"],
            answer: 1,
            explain: "예외 전파 중 스택의 지역 객체가 정리되는 것을 스택 해제라 한다."
          }
        ]
      },
      {
        id: "ch14-3",
        title: "Ch14·3 표준 예외 클래스",
        summary: "std::exception 과 그 파생들.",
        body: `
<p>표준 라이브러리는 <code>&lt;stdexcept&gt;</code> 에 예외 계층을 제공한다.</p>
<ul>
  <li><code>std::logic_error</code> — 논리 오류(<code>invalid_argument</code>, <code>out_of_range</code>)</li>
  <li><code>std::runtime_error</code> — 런타임 오류(<code>overflow_error</code> 등)</li>
</ul>
<p>모두 <code>std::exception</code> 을 상속하며 <code>.what()</code> 으로 메시지를 얻는다.</p>`,
        code: `#include <stdexcept>
#include <vector>
try {
    std::vector<int> v{1, 2, 3};
    std::cout << v.at(10);          // 범위 초과 → 예외
} catch (const std::out_of_range& e) {
    std::cout << "범위 초과: " << e.what() << '\\n';
}`,
        codeNote: "vector::at 은 범위를 벗어나면 std::out_of_range 예외를 던진다.",
        quiz: [
          {
            q: "모든 표준 예외의 메시지를 얻는 멤버 함수는?",
            options: [".message()", ".what()", ".error()", ".str()"],
            answer: 1,
            explain: "std::exception 계층은 .what() 으로 설명 문자열을 반환한다."
          }
        ]
      },

      /* ---------- Ch15 제네릭 프로그래밍: 템플릿 ---------- */
      {
        id: "ch15-1",
        title: "Ch15·1 템플릿 프로그래밍의 개요",
        summary: "타입을 매개변수로 — 코드 재사용.",
        body: `
<p><strong>템플릿</strong>은 타입을 <em>매개변수</em>로 받아 여러 타입에 같은 코드를
재사용하게 한다. 컴파일러가 사용된 타입마다 코드를 자동 생성(인스턴스화)한다.</p>
<p>STL 전체가 템플릿 위에 세워져 있다. 런타임 비용 없이 타입 안전성을 유지한다.</p>`,
        code: `// 타입 T 에 독립적인 코드
// template<typename T> ... 형태로 시작한다
// int, double, string 마다 함수를 따로 만들 필요가 없다`,
        codeNote: "템플릿은 컴파일 타임에 타입별 코드를 생성한다 — 런타임 비용 0.",
        quiz: [
          {
            q: "템플릿의 타입별 코드는 언제 생성되는가?",
            options: ["런타임", "링크 타임", "컴파일 타임(인스턴스화)", "설치 시"],
            answer: 2,
            explain: "컴파일러가 사용된 타입마다 컴파일 타임에 코드를 생성한다."
          }
        ]
      },
      {
        id: "ch15-2",
        title: "Ch15·2 함수 템플릿",
        summary: "여러 타입에 동작하는 함수 한 벌.",
        body: `
<p><code>template&lt;typename T&gt;</code> 로 시작한다. <code>T</code> 자리에 호출 시
실제 타입이 대입된다. 컴파일러가 인자로부터 타입을 추론한다.</p>`,
        code: `template<typename T>
T maxOf(T a, T b) {
    return (a > b) ? a : b;
}

std::cout << maxOf(3, 9)     << '\\n';  // 9   (int)
std::cout << maxOf(2.5, 1.1) << '\\n';  // 2.5 (double)
std::cout << maxOf<std::string>("a", "b");  // b`,
        codeNote: "maxOf 하나로 int·double·string 을 모두 처리 — 타입별 버전을 자동 생성.",
        quiz: [
          {
            q: "함수 템플릿 선언을 시작하는 올바른 구문은?",
            options: ["template<typename T>", "generic<T>", "func<T>", "type T:"],
            answer: 0,
            explain: "template<typename T> (또는 template<class T>) 로 선언한다."
          }
        ]
      },
      {
        id: "ch15-3",
        title: "Ch15·3 클래스 템플릿",
        summary: "타입 매개변수를 갖는 클래스.",
        body: `
<p>클래스도 템플릿으로 만들 수 있다. <code>std::vector&lt;T&gt;</code> 가 대표 예다.
어떤 타입의 데이터든 담는 컨테이너·자료구조를 한 번만 작성한다.</p>`,
        code: `template<typename T>
class Box {
    T item;
public:
    Box(T v) : item{v} {}
    T get() const { return item; }
};
Box<int> a{42};
Box<std::string> b{"hi"};
std::cout << a.get() << " " << b.get();   // 42 hi`,
        codeNote: "Box<int>, Box<std::string> 처럼 타입을 지정해 인스턴스화한다.",
        quiz: [
          {
            q: "클래스 템플릿 Box 를 string 으로 사용하는 올바른 표기는?",
            options: ["Box(string)", "Box<std::string>", "Box::string", "string Box"],
            answer: 1,
            explain: "Box<std::string> 처럼 꺾쇠 안에 타입 인자를 넣는다."
          }
        ]
      },

      /* ---------- Ch16 입출력 스트림 ---------- */
      {
        id: "ch16-1",
        title: "Ch16·1 입출력 스트림의 개요",
        summary: "스트림 개념과 스트림 클래스 계층.",
        body: `
<p><strong>스트림</strong>은 데이터가 흐르는 통로다. 콘솔·파일·문자열 모두 같은
인터페이스(<code>&lt;&lt;</code>, <code>&gt;&gt;</code>)로 다룬다.</p>
<ul>
  <li><code>istream</code> / <code>ostream</code> — 입력/출력 기반</li>
  <li><code>ifstream</code> / <code>ofstream</code> — 파일</li>
  <li><code>istringstream</code> / <code>ostringstream</code> — 문자열</li>
</ul>`,
        code: `// 콘솔, 파일, 문자열 모두 같은 << >> 문법을 공유한다
// std::cout << x;        콘솔
// fileStream << x;       파일
// strStream  << x;       문자열`,
        codeNote: "스트림 덕분에 콘솔·파일·문자열을 동일한 << >> 문법으로 다룬다.",
        quiz: [
          {
            q: "C++에서 데이터가 흐르는 통로(콘솔·파일·문자열 공통 추상화)를?",
            options: ["버퍼", "스트림(stream)", "파이프", "포인터"],
            answer: 1,
            explain: "스트림은 입출력 대상을 동일한 인터페이스로 다루는 추상화다."
          }
        ]
      },
      {
        id: "ch16-2",
        title: "Ch16·2 콘솔 스트림",
        summary: "cin/cout, 스트림 상태, getline.",
        body: `
<p><code>std::cin</code> 은 공백에서 입력을 끊는다. 줄 전체를 받으려면
<code>std::getline(std::cin, str)</code> 을 쓴다.</p>
<div class="callout warn"><code>cin &gt;&gt;</code> 다음에 <code>getline</code> 을 쓰면
남은 개행 때문에 빈 줄을 읽는다 — <code>cin.ignore()</code> 로 비워라.</div>`,
        code: `#include <iostream>
#include <string>
std::string line;
std::cout << "한 줄 입력: ";
std::getline(std::cin, line);   // 공백 포함 한 줄
std::cout << "[" << line << "]\\n";`,
        codeNote: "공백이 포함된 한 줄을 받으려면 cin >> 대신 getline 을 쓴다.",
        quiz: [
          {
            q: "공백을 포함한 한 줄 전체를 입력받는 함수는?",
            options: ["cin >> s", "std::getline(cin, s)", "cin.line(s)", "scanf"],
            answer: 1,
            explain: "std::getline 은 개행 전까지 공백 포함 한 줄을 읽는다."
          }
        ]
      },
      {
        id: "ch16-3",
        title: "Ch16·3 파일 스트림",
        summary: "ifstream/ofstream 으로 파일 읽기·쓰기.",
        body: `
<p>파일은 <code>&lt;fstream&gt;</code> 으로 다룬다. <code>ofstream</code>(쓰기),
<code>ifstream</code>(읽기). 열기에 성공했는지 항상 확인하고, 다 쓰면 닫는다
(RAII로 스코프 종료 시 자동 닫힘).</p>`,
        code: `#include <fstream>
// 쓰기
std::ofstream out{"data.txt"};
if (out) { out << "Hello\\n" << 42 << '\\n'; }
out.close();
// 읽기
std::ifstream in{"data.txt"};
std::string word; int n;
in >> word >> n;
std::cout << word << " " << n;   // Hello 42`,
        codeNote: "파일 객체는 if(out) 로 열기 성공을 확인하고, 스코프를 벗어나면 자동으로 닫힌다.",
        quiz: [
          {
            q: "파일에 데이터를 쓰기 위한 스트림 클래스는?",
            options: ["ifstream", "ofstream", "istringstream", "iostream"],
            answer: 1,
            explain: "ofstream(output file stream)으로 파일에 쓴다. 읽기는 ifstream."
          }
        ]
      },
      {
        id: "ch16-4",
        title: "Ch16·4 문자열 스트림",
        summary: "문자열을 스트림처럼 파싱·조립.",
        body: `
<p><code>&lt;sstream&gt;</code> 의 <code>istringstream</code> 으로 문자열을 토큰으로
쪼개거나, <code>ostringstream</code> 으로 여러 값을 하나의 문자열로 조립한다.
숫자↔문자열 변환에도 유용하다.</p>`,
        code: `#include <sstream>
std::istringstream iss{"10 20 30"};
int a, b, c;
iss >> a >> b >> c;            // 파싱
std::cout << a + b + c << '\\n'; // 60

std::ostringstream oss;
oss << "합=" << (a + b + c);
std::string s = oss.str();      // 조립
std::cout << s << '\\n';         // 합=60`,
        codeNote: "istringstream 으로 문자열을 >> 로 파싱, ostringstream 으로 << 로 조립한다.",
        quiz: [
          {
            q: "문자열 \"10 20 30\" 을 숫자들로 파싱할 때 쓰는 스트림은?",
            options: ["ifstream", "istringstream", "ofstream", "cin"],
            answer: 1,
            explain: "istringstream 에 문자열을 넣고 >> 로 토큰을 뽑아낸다."
          }
        ]
      },
      {
        id: "ch16-5",
        title: "Ch16·5 데이터 형식 조정",
        summary: "조정자로 출력 모양 다듬기.",
        body: `
<p><code>&lt;iomanip&gt;</code> 의 조정자로 정렬·자릿수·진법을 제어한다.
표 형태 출력에 특히 유용하다.</p>
<ul>
  <li><code>setw(n)</code> · <code>setfill('*')</code> — 폭·채움 문자</li>
  <li><code>setprecision(n)</code> · <code>fixed</code> — 소수 자리</li>
  <li><code>hex</code> · <code>oct</code> · <code>dec</code> — 진법</li>
</ul>`,
        code: `#include <iomanip>
std::cout << std::setw(6) << std::setfill('0') << 42 << '\\n'; // 000042
std::cout << std::hex << 255 << '\\n';   // ff
std::cout << std::fixed << std::setprecision(3) << 3.14159;    // 3.142`,
        codeNote: "setw+setfill 로 자리를 채우고, hex 로 16진수, fixed+setprecision 으로 소수 자리를 맞춘다.",
        quiz: [
          {
            q: "정수를 16진수로 출력하는 조정자는?",
            options: ["std::oct", "std::hex", "std::bin", "std::dec"],
            answer: 1,
            explain: "std::hex 를 스트림에 넣으면 이후 정수를 16진수로 출력한다."
          }
        ]
      },
      {
        id: "ch16-6",
        title: "Ch16·6 [Lab] 입출력 응용",
        summary: "파일 정렬·결합, 간단 암호화.",
        body: `
<p>스트림 종합 실습: 여러 파일을 읽어 정렬·병합, 또는 파일 내용을
<strong>대칭 키(XOR)</strong>로 간단히 암호화/복호화하기. 파일 입출력 + 알고리즘의 결합.</p>`,
        code: `// 문자마다 키와 XOR — 같은 키로 다시 XOR 하면 복원됨
char key = 'K';
std::string msg = "SECRET";
for (char& c : msg) c ^= key;   // 암호화
// ... 파일에 저장 ...
for (char& c : msg) c ^= key;   // 복호화 (원래대로)
std::cout << msg << '\\n';       // SECRET`,
        codeNote: "XOR 암호화는 같은 키로 두 번 적용하면 원문으로 돌아온다.",
        quiz: [
          {
            q: "같은 키로 두 번 적용하면 원래 값으로 돌아오는 연산은?",
            options: ["AND", "OR", "XOR(^)", "NOT"],
            answer: 2,
            explain: "XOR 은 같은 키로 두 번 적용하면 원래 값으로 복원된다."
          }
        ]
      },

      /* ---------- Ch17 재귀 ---------- */
      {
        id: "ch17-1",
        title: "Ch17·1 재귀의 개요",
        summary: "함수가 자기 자신을 호출, 종료 조건.",
        body: `
<p><strong>재귀(recursion)</strong>는 함수가 자기 자신을 호출하는 기법이다.
반드시 <strong>종료 조건(base case)</strong>이 있어야 무한 재귀를 피한다.</p>
<div class="callout warn">종료 조건이 없거나 도달하지 못하면 <strong>스택 오버플로우</strong>로
프로그램이 죽는다.</div>`,
        code: `long long factorial(int n) {
    if (n <= 1) return 1;          // 종료 조건
    return n * factorial(n - 1);   // 자기 호출
}
std::cout << factorial(5) << '\\n';   // 120`,
        codeNote: "재귀엔 반드시 종료 조건(base case)이 있어야 무한 호출을 막는다.",
        quiz: [
          {
            q: "재귀 함수에 반드시 있어야 무한 호출을 막는 것은?",
            options: ["전역 변수", "종료 조건(base case)", "반복문", "포인터"],
            answer: 1,
            explain: "종료 조건이 없으면 재귀가 끝나지 않아 스택 오버플로우가 난다."
          }
        ]
      },
      {
        id: "ch17-2",
        title: "Ch17·2 재귀를 활용한 정렬과 탐색",
        summary: "퀵 정렬, 이진 탐색, 하노이 탑.",
        body: `
<p>재귀는 <strong>분할 정복</strong> 알고리즘의 핵심이다.</p>
<ul>
  <li><strong>퀵 정렬</strong> — 기준으로 나눠 각각 정렬</li>
  <li><strong>이진 탐색</strong> — 절반씩 줄여가며 찾기(O(log n))</li>
  <li><strong>하노이 탑</strong> — 큰 문제를 작은 같은 문제로 분해</li>
</ul>`,
        code: `// 이진 탐색 (정렬된 배열에서)
int bsearch(int a[], int lo, int hi, int key) {
    if (lo > hi) return -1;             // 종료: 없음
    int mid = (lo + hi) / 2;
    if (a[mid] == key) return mid;
    return (a[mid] < key) ? bsearch(a, mid+1, hi, key)
                          : bsearch(a, lo, mid-1, key);
}`,
        codeNote: "이진 탐색은 매 단계 범위를 절반으로 줄여 O(log n) 으로 찾는다.",
        quiz: [
          {
            q: "정렬된 데이터에서 절반씩 범위를 줄여 찾는 탐색의 시간복잡도는?",
            options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
            answer: 1,
            explain: "이진 탐색은 매 단계 후보를 절반으로 줄여 O(log n) 이다."
          }
        ]
      },
      {
        id: "ch17-3",
        title: "Ch17·3 [Lab] 재귀 응용",
        summary: "순열 생성, 하노이 탑.",
        body: `
<p>재귀 종합 실습: 문자열의 모든 <strong>순열(permutation)</strong> 생성,
<strong>하노이 탑</strong> 옮기기. "큰 문제 = 더 작은 같은 문제 + 한 단계" 로 사고하는 연습.</p>`,
        code: `// 하노이 탑: n개를 from → to (via 경유)
void hanoi(int n, char from, char to, char via) {
    if (n == 0) return;
    hanoi(n - 1, from, via, to);
    std::cout << from << "->" << to << ' ';
    hanoi(n - 1, via, to, from);
}
hanoi(2, 'A', 'C', 'B');   // A->B A->C B->C`,
        codeNote: "하노이 탑은 'n-1개를 옮기고, 1개 옮기고, 다시 n-1개를 옮긴다'로 분해된다.",
        quiz: [
          {
            q: "큰 문제를 같은 형태의 더 작은 문제로 쪼개 푸는 전략은?",
            options: ["탐욕법", "분할 정복", "동적 계획법만", "완전 탐색만"],
            answer: 1,
            explain: "재귀로 작은 부분 문제로 나눠 푸는 것이 분할 정복(divide & conquer)이다."
          }
        ]
      }
    ]
  },

  /* ===================================================================
   *  6단계 · 자료구조와 STL (Ch18~19)
   * =================================================================== */
  {
    stage: "6. 자료구조와 STL",
    icon: "📚",
    lessons: [
      /* ---------- Ch18 자료구조 ---------- */
      {
        id: "ch18-1",
        title: "Ch18·1 자료구조의 개요",
        summary: "인터페이스와 구현, 추상 자료형.",
        body: `
<p><strong>자료구조</strong>는 데이터를 효율적으로 저장·관리하는 방식이다.
<em>무엇을 할 수 있는가</em>(인터페이스)와 <em>어떻게 구현하는가</em>(구현)를 분리해 생각한다.</p>
<h3>대표 자료구조</h3>
<p>배열, 링크드 리스트, 스택, 큐, 트리, 그래프, 해시 테이블 등. 문제에 맞는
자료구조 선택이 성능을 좌우한다.</p>`,
        code: `// 같은 '리스트' 인터페이스도 구현이 다를 수 있다:
//   - 배열 기반: 임의 접근 빠름, 중간 삽입 느림
//   - 링크드 리스트: 삽입/삭제 빠름, 임의 접근 느림
// 인터페이스(무엇)와 구현(어떻게)을 분리해서 생각하라`,
        codeNote: "같은 동작(인터페이스)도 구현 방식에 따라 성능 특성이 달라진다.",
        quiz: [
          {
            q: "자료구조에서 '무엇을 할 수 있는가'와 '어떻게 구현하는가'를 나누는 개념은?",
            options: ["상속과 다형성", "인터페이스와 구현", "스택과 힙", "선언과 정의"],
            answer: 1,
            explain: "추상 자료형은 인터페이스(동작)와 구현(방법)을 분리한다."
          }
        ]
      },
      {
        id: "ch18-2",
        title: "Ch18·2 단일 링크드 리스트",
        summary: "노드와 포인터로 잇는 동적 리스트.",
        body: `
<p><strong>링크드 리스트</strong>는 각 <em>노드</em>가 데이터와 '다음 노드 주소'를 갖고
사슬처럼 연결된 구조다. 중간 삽입·삭제가 빠르지만(O(1)) 임의 접근은 느리다(O(n)).</p>`,
        code: `struct Node {
    int data;
    Node* next;
};
// 1 -> 2 -> 3 -> nullptr
Node* head = new Node{1, new Node{2, new Node{3, nullptr}}};
for (Node* p = head; p != nullptr; p = p->next)
    std::cout << p->data << ' ';   // 1 2 3`,
        codeNote: "각 노드의 next 포인터를 따라가며 순회한다. 마지막은 nullptr.",
        quiz: [
          {
            q: "링크드 리스트의 각 노드가 갖는 것은?",
            options: ["데이터만", "데이터 + 다음 노드 주소", "인덱스만", "전체 배열"],
            answer: 1,
            explain: "노드는 데이터와 다음 노드를 가리키는 포인터(next)를 가진다."
          }
        ]
      },
      {
        id: "ch18-3",
        title: "Ch18·3 스택과 큐",
        summary: "LIFO 스택, FIFO 큐.",
        body: `
<ul>
  <li><strong>스택(Stack)</strong> — 후입선출(LIFO). 마지막에 넣은 게 먼저 나옴(접시 더미).</li>
  <li><strong>큐(Queue)</strong> — 선입선출(FIFO). 먼저 넣은 게 먼저 나옴(줄 서기).</li>
</ul>
<p>스택은 함수 호출·되돌리기, 큐는 작업 대기열·BFS 에 쓰인다.</p>`,
        code: `#include <stack>
#include <queue>
std::stack<int> s;
s.push(1); s.push(2); s.push(3);
std::cout << s.top() << '\\n';   // 3 (마지막에 넣은 것)

std::queue<int> q;
q.push(1); q.push(2); q.push(3);
std::cout << q.front() << '\\n'; // 1 (먼저 넣은 것)`,
        codeNote: "스택은 top()=마지막, 큐는 front()=처음. LIFO vs FIFO.",
        quiz: [
          {
            q: "먼저 넣은 데이터가 먼저 나오는(FIFO) 자료구조는?",
            options: ["스택", "큐", "트리", "해시"],
            answer: 1,
            explain: "큐(Queue)는 선입선출(FIFO). 스택은 후입선출(LIFO)이다."
          }
        ]
      },
      {
        id: "ch18-4",
        title: "Ch18·4 이진 탐색 트리",
        summary: "정렬을 유지하는 트리, 순회.",
        body: `
<p><strong>이진 탐색 트리(BST)</strong>는 각 노드의 왼쪽엔 작은 값, 오른쪽엔 큰 값을 두어
탐색·삽입·삭제를 평균 O(log n)에 한다.</p>
<h3>순회</h3>
<ul>
  <li><strong>중위(in-order)</strong> — 왼→루트→오른: <em>정렬된 순서</em>로 방문</li>
  <li>전위(루트 먼저), 후위(루트 나중)</li>
</ul>`,
        code: `struct TreeNode {
    int val;
    TreeNode *left = nullptr, *right = nullptr;
};
// 중위 순회 → 오름차순 출력
void inorder(TreeNode* n) {
    if (!n) return;
    inorder(n->left);
    std::cout << n->val << ' ';
    inorder(n->right);
}`,
        codeNote: "BST 를 중위 순회하면 값이 정렬된 순서로 나온다.",
        quiz: [
          {
            q: "이진 탐색 트리를 중위(in-order) 순회하면?",
            options: ["무작위 순서", "정렬된 순서로 방문", "역순", "루트만"],
            answer: 1,
            explain: "BST 의 중위 순회는 왼→루트→오른 순서라 오름차순으로 방문한다."
          }
        ]
      },

      /* ---------- Ch19 STL ---------- */
      {
        id: "ch19-1",
        title: "Ch19·1 STL 소개",
        summary: "컨테이너·반복자·알고리즘의 3요소.",
        body: `
<p><strong>STL</strong>(Standard Template Library)은 검증된 자료구조와 알고리즘 모음이다.
세 가지 축으로 구성된다.</p>
<ul>
  <li><strong>컨테이너</strong> — 데이터를 담는 그릇(vector, map…)</li>
  <li><strong>반복자(iterator)</strong> — 컨테이너 원소를 가리키는 포인터 같은 것</li>
  <li><strong>알고리즘</strong> — sort, find 등 컨테이너에 적용하는 연산</li>
</ul>
<p>반복자가 컨테이너와 알고리즘을 <em>이어주는 다리</em>다.</p>`,
        code: `// 반복자가 컨테이너와 알고리즘을 연결한다:
//   std::sort( v.begin(), v.end() );
//              └─ 반복자 ─┘
// 바퀴를 다시 발명하지 말고 STL 을 써라`,
        codeNote: "STL = 컨테이너 + 반복자 + 알고리즘. 반복자가 둘을 잇는다.",
        quiz: [
          {
            q: "STL 에서 컨테이너와 알고리즘을 이어주는 요소는?",
            options: ["포인터", "반복자(iterator)", "템플릿", "네임스페이스"],
            answer: 1,
            explain: "반복자(iterator)가 컨테이너의 원소를 가리켜 알고리즘에 연결한다."
          }
        ]
      },
      {
        id: "ch19-2",
        title: "Ch19·2 반복자",
        summary: "begin/end, 반복자로 순회.",
        body: `
<p><strong>반복자</strong>는 컨테이너 원소를 가리킨다. <code>begin()</code> 은 첫 원소,
<code>end()</code> 는 <em>마지막 다음</em>을 가리킨다(유효 원소 아님).</p>
<p><code>*it</code> 로 값을 읽고, <code>++it</code> 로 다음으로 이동한다.</p>`,
        code: `std::vector<int> v{10, 20, 30};
for (auto it = v.begin(); it != v.end(); ++it)
    std::cout << *it << ' ';        // 10 20 30
// 모던: range-based for 가 더 간결
for (int x : v) std::cout << x << ' ';`,
        codeNote: "end() 는 마지막 '다음'을 가리키므로 it != v.end() 까지 반복한다.",
        quiz: [
          {
            q: "v.end() 가 가리키는 위치는?",
            options: ["마지막 원소", "마지막 원소의 다음(유효 원소 아님)", "첫 원소", "중간"],
            answer: 1,
            explain: "end() 는 마지막 원소의 다음을 가리키는 경계 표시다."
          }
        ]
      },
      {
        id: "ch19-3",
        title: "Ch19·3 시퀀스 컨테이너",
        summary: "vector · deque · list.",
        body: `
<table class="tbl">
  <tr><th>컨테이너</th><th>특징</th></tr>
  <tr><td><code>vector</code></td><td>동적 배열. 끝 삽입·임의 접근 빠름(기본 선택)</td></tr>
  <tr><td><code>deque</code></td><td>양끝 삽입·삭제 빠름</td></tr>
  <tr><td><code>list</code></td><td>이중 링크드 리스트. 중간 삽입·삭제 빠름</td></tr>
</table>`,
        code: `#include <vector>
std::vector<int> v{3, 1, 4};
v.push_back(1);            // 끝에 추가
std::cout << v.size() << '\\n';   // 4
std::cout << v[0] << '\\n';       // 3 (임의 접근)
std::cout << v.front() << ' ' << v.back();  // 3 1`,
        codeNote: "특별한 이유가 없으면 시퀀스 컨테이너는 vector 를 기본으로 쓴다.",
        quiz: [
          {
            q: "끝에 추가·임의 접근이 빠른 가장 기본적인 시퀀스 컨테이너는?",
            options: ["list", "deque", "vector", "set"],
            answer: 2,
            explain: "vector 는 동적 배열로 끝 삽입·임의 접근이 빠른 기본 선택지다."
          }
        ]
      },
      {
        id: "ch19-4",
        title: "Ch19·4 컨테이너 어댑터",
        summary: "stack · queue · priority_queue.",
        body: `
<p>기존 컨테이너를 감싸 특정 인터페이스만 노출하는 <strong>어댑터</strong>.</p>
<ul>
  <li><code>stack</code> — LIFO (push/top/pop)</li>
  <li><code>queue</code> — FIFO (push/front/pop)</li>
  <li><code>priority_queue</code> — 항상 가장 큰(우선) 원소가 top</li>
</ul>`,
        code: `#include <queue>
std::priority_queue<int> pq;
pq.push(3); pq.push(1); pq.push(5);
std::cout << pq.top() << '\\n';   // 5 (최댓값이 먼저)
pq.pop();
std::cout << pq.top() << '\\n';   // 3`,
        codeNote: "priority_queue 는 넣은 순서와 무관하게 가장 큰 값이 top 에 온다.",
        quiz: [
          {
            q: "항상 가장 우선순위 높은(기본은 최댓값) 원소가 먼저 나오는 어댑터는?",
            options: ["stack", "queue", "priority_queue", "vector"],
            answer: 2,
            explain: "priority_queue 는 우선순위 순으로 top 을 제공한다(기본 최댓값)."
          }
        ]
      },
      {
        id: "ch19-5",
        title: "Ch19·5 연관 컨테이너",
        summary: "set · map, 정렬·해시.",
        body: `
<ul>
  <li><code>set</code> — 중복 없는 정렬된 집합</li>
  <li><code>map</code> — 키-값 쌍(키로 정렬). <code>unordered_map</code> 은 해시 기반(빠름)</li>
</ul>
<p>키로 빠르게 찾고 싶을 때 쓴다. 구조적 바인딩으로 순회하면 깔끔하다.</p>`,
        code: `#include <map>
std::map<std::string, int> age;
age["민수"] = 25;
age["지영"] = 30;
for (const auto& [name, a] : age)     // 구조적 바인딩
    std::cout << name << ": " << a << '\\n';
std::cout << age["민수"] << '\\n';     // 25`,
        codeNote: "map 은 [키]로 값에 접근하고, auto& [k,v] 로 키/값을 분해해 순회한다.",
        quiz: [
          {
            q: "키-값 쌍을 저장하고 키로 값을 조회하는 연관 컨테이너는?",
            options: ["vector", "stack", "map", "list"],
            answer: 2,
            explain: "map 은 키-값 쌍을 저장하며 키로 값을 조회한다."
          }
        ]
      },
      {
        id: "ch19-6",
        title: "Ch19·6 함수 사용 — 함수 객체와 람다",
        summary: "함수 포인터, 함수 객체, 람다.",
        body: `
<p>알고리즘에 '동작'을 넘기는 방법 세 가지: <strong>함수 포인터</strong>,
<strong>함수 객체</strong>(<code>operator()</code> 정의), 그리고 가장 간편한 <strong>람다</strong>.</p>
<pre class="mini">[캡처](매개변수) { 본문 }</pre>
<ul>
  <li><code>[]</code> 캡처 없음 · <code>[=]</code> 값 복사 · <code>[&amp;]</code> 참조</li>
</ul>`,
        code: `#include <algorithm>
#include <vector>
std::vector<int> v{1, 2, 3, 4, 5, 6};
int evens = std::count_if(v.begin(), v.end(),
    [](int x){ return x % 2 == 0; });   // 람다
std::cout << evens << '\\n';   // 3`,
        codeNote: "[](int x){ ... } 가 람다. 알고리즘에 조건/동작을 그 자리에서 넘긴다.",
        quiz: [
          {
            q: "람다에서 외부 변수를 참조로 캡처하는 표기는?",
            options: ["[=]", "[&]", "[*]", "[#]"],
            answer: 1,
            explain: "[&] 는 참조 캡처, [=] 는 값 복사 캡처다."
          }
        ]
      },
      {
        id: "ch19-7",
        title: "Ch19·7 알고리즘",
        summary: "sort · find · accumulate 등.",
        body: `
<p><code>&lt;algorithm&gt;</code>·<code>&lt;numeric&gt;</code> 는 컨테이너와 분리된
범용 알고리즘을 제공한다. 반복자 범위로 동작해 어떤 컨테이너에도 적용된다.</p>
<ul>
  <li><strong>비변경</strong>: <code>find, count, all_of</code></li>
  <li><strong>변경</strong>: <code>copy, transform, replace</code></li>
  <li><strong>정렬/수치</strong>: <code>sort, accumulate</code></li>
</ul>`,
        code: `#include <algorithm>
#include <numeric>
std::vector<int> v{5, 2, 8, 1};
std::sort(v.begin(), v.end());                 // 1 2 5 8
int sum = std::accumulate(v.begin(), v.end(), 0); // 16
auto it = std::find(v.begin(), v.end(), 8);    // 8 위치
std::cout << sum << " " << (it != v.end());     // 16 1`,
        codeNote: "sort·accumulate·find 모두 begin/end 반복자 범위로 동작한다.",
        quiz: [
          {
            q: "범위의 모든 원소를 더한 합을 구하는 표준 알고리즘은?",
            options: ["std::sort", "std::find", "std::accumulate", "std::count"],
            answer: 2,
            explain: "std::accumulate(begin, end, 초기값) 으로 합을 구한다(<numeric>)."
          }
        ]
      }
    ]
  },

  /* ===================================================================
   *  7단계 · 디자인 패턴 (Ch20)
   * =================================================================== */
  {
    stage: "7. 디자인 패턴",
    icon: "✨",
    lessons: [
      {
        id: "ch20-1",
        title: "Ch20·1 디자인 패턴이란",
        summary: "반복되는 설계 문제의 검증된 해법.",
        body: `
<p><strong>디자인 패턴</strong>은 자주 마주치는 설계 문제에 대한 <em>검증된 해법의 틀</em>이다.
"바퀴를 다시 발명하지 말고", 선배들이 정리한 구조를 재사용한다.</p>
<h3>3대 카테고리</h3>
<ul>
  <li><strong>생성 패턴</strong> — 객체를 어떻게 만드는가 (싱글턴, 팩토리…)</li>
  <li><strong>구조 패턴</strong> — 객체를 어떻게 조합하는가 (어댑터, 데코레이터…)</li>
  <li><strong>행동 패턴</strong> — 객체가 어떻게 협력하는가 (옵저버, 전략…)</li>
</ul>`,
        code: `// 패턴은 '언어 문법'이 아니라 '설계 관용구'다.
// 생성(Creational) · 구조(Structural) · 행동(Behavioral) 으로 분류된다.
// 무작정 적용하지 말고 문제에 맞을 때만 쓰라.`,
        codeNote: "디자인 패턴은 문법이 아니라 반복되는 설계 문제의 해법 틀이다.",
        quiz: [
          {
            q: "디자인 패턴의 3대 카테고리가 아닌 것은?",
            options: ["생성 패턴", "구조 패턴", "행동 패턴", "컴파일 패턴"],
            answer: 3,
            explain: "디자인 패턴은 생성·구조·행동 세 가지로 분류된다."
          }
        ]
      },
      {
        id: "ch20-2",
        title: "Ch20·2 생성 패턴",
        summary: "싱글턴 · 팩토리 메소드 · 빌더 · 프로토타입.",
        body: `
<p>객체 <strong>생성 과정</strong>을 캡슐화한다.</p>
<ul>
  <li><strong>싱글턴</strong> — 인스턴스를 단 하나만(설정·로거)</li>
  <li><strong>팩토리 메소드</strong> — 어떤 객체를 만들지 서브클래스가 결정</li>
  <li><strong>빌더</strong> — 복잡한 객체를 단계별로 조립</li>
  <li><strong>프로토타입</strong> — 기존 객체를 복제해 생성</li>
</ul>`,
        code: `class Logger {              // 싱글턴
    Logger() = default;
public:
    static Logger& instance() {  // 항상 같은 객체 반환
        static Logger inst;
        return inst;
    }
    void log(const std::string& m) { std::cout << "[LOG] " << m << '\\n'; }
};
Logger::instance().log("시작");`,
        codeNote: "싱글턴은 static 지역 객체로 단 하나의 인스턴스를 공유한다.",
        quiz: [
          {
            q: "프로그램 전체에서 인스턴스를 단 하나만 두는 생성 패턴은?",
            options: ["팩토리", "싱글턴", "빌더", "프로토타입"],
            answer: 1,
            explain: "싱글턴(Singleton)은 인스턴스를 하나만 만들어 공유한다."
          }
        ]
      },
      {
        id: "ch20-3",
        title: "Ch20·3 구조 패턴",
        summary: "어댑터 · 데코레이터 · 퍼사드 · 프록시 · 컴포짓.",
        body: `
<p>클래스·객체를 <strong>조합해 더 큰 구조</strong>를 만든다.</p>
<ul>
  <li><strong>어댑터</strong> — 호환 안 되는 인터페이스를 맞춰줌(변환기)</li>
  <li><strong>데코레이터</strong> — 기능을 동적으로 덧씌움</li>
  <li><strong>퍼사드</strong> — 복잡한 서브시스템에 간단한 창구 제공</li>
  <li><strong>프록시</strong> — 대리 객체로 접근 제어</li>
  <li><strong>컴포짓</strong> — 부분-전체를 같은 방식으로 다룸(트리)</li>
</ul>`,
        code: `// 데코레이터: 커피에 기능(우유·시럽)을 동적으로 덧씌움
struct Coffee { virtual int cost() const { return 3000; } virtual ~Coffee()=default; };
struct Milk : Coffee {
    Coffee* base;
    Milk(Coffee* b) : base{b} {}
    int cost() const override { return base->cost() + 500; }
};
Coffee* c = new Milk(new Coffee());
std::cout << c->cost() << '\\n';   // 3500`,
        codeNote: "데코레이터는 원본을 감싸 기능(가격)을 덧씌운다 — 상속 없이 동적 확장.",
        quiz: [
          {
            q: "호환되지 않는 두 인터페이스를 맞춰 연결해주는 구조 패턴은?",
            options: ["어댑터", "옵저버", "싱글턴", "전략"],
            answer: 0,
            explain: "어댑터(Adapter)는 인터페이스를 변환해 호환되게 한다."
          }
        ]
      },
      {
        id: "ch20-4",
        title: "Ch20·4 행동 패턴",
        summary: "옵저버 · 전략 · 커맨드 · 반복자 · 상태 등.",
        body: `
<p>객체들이 <strong>어떻게 협력·소통</strong>하는지를 정리한다.</p>
<ul>
  <li><strong>옵저버</strong> — 상태 변화를 구독자들에게 자동 통지(이벤트)</li>
  <li><strong>전략</strong> — 알고리즘을 갈아끼움(정렬 방식 교체)</li>
  <li><strong>커맨드</strong> — 요청을 객체로 캡슐화(실행 취소)</li>
  <li><strong>상태</strong> — 상태에 따라 행동이 달라짐</li>
  <li><strong>반복자</strong> — 내부 구조 노출 없이 순회(STL iterator)</li>
</ul>`,
        code: `// 전략 패턴: 동작을 람다(전략)로 갈아끼움
#include <functional>
#include <vector>
#include <algorithm>
std::vector<int> v{3, 1, 2};
std::function<bool(int,int)> strategy = [](int a, int b){ return a > b; };
std::sort(v.begin(), v.end(), strategy);   // 내림차순 전략
// strategy 만 바꾸면 정렬 기준이 바뀐다 (3 2 1)`,
        codeNote: "전략 패턴은 알고리즘(비교 기준)을 외부에서 주입해 교체할 수 있게 한다.",
        quiz: [
          {
            q: "상태 변화를 여러 구독자에게 자동으로 통지하는 행동 패턴은?",
            options: ["전략", "옵저버", "커맨드", "어댑터"],
            answer: 1,
            explain: "옵저버(Observer)는 주제의 상태 변화를 구독자들에게 통지한다."
          }
        ]
      }
    ]
  }
];

// 사이드바 순서대로 펼친 평면 목록 (이전/다음 탐색용)
const FLAT_LESSONS = CURRICULUM.flatMap(s =>
  s.lessons.map(l => ({ ...l, stage: s.stage }))
);
