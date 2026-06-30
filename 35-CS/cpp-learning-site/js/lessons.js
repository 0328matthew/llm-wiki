/* =====================================================================
 *  C++ 학습 사이트 — 강의 콘텐츠 데이터
 *  각 강의: { id, title, summary, body(HTML), code, codeNote, quiz[] }
 *  단계(stage)별로 묶여 사이드바에 표시된다.
 * ===================================================================== */

const CURRICULUM = [
  {
    stage: "1. 입문",
    icon: "🚀",
    lessons: [
      {
        id: "intro",
        title: "C++ 란 무엇인가",
        summary: "C++의 역사와 특징, 어디에 쓰이는지.",
        body: `
<p><strong>C++</strong>는 1983년 Bjarne Stroustrup가 C 언어를 확장해 만든 언어로,
"C with Classes"에서 출발했다. C의 빠른 속도와 저수준 제어 능력을 그대로 가지면서
<em>객체지향</em>, <em>제네릭(템플릿)</em>, 그리고 현대적인 추상화까지 지원한다.</p>
<h3>왜 C++ 인가</h3>
<ul>
  <li><strong>성능</strong> — 가비지 컬렉터 없이 메모리를 직접 다뤄 매우 빠르다.</li>
  <li><strong>제어</strong> — 하드웨어/메모리에 가까운 저수준 제어가 가능하다.</li>
  <li><strong>범용성</strong> — 게임 엔진, 운영체제, 임베디드, 금융, 시뮬레이션 등에 쓰인다.</li>
</ul>
<h3>"제로 오버헤드" 원칙</h3>
<p>C++의 철학은 <em>"쓰지 않는 기능에는 비용을 내지 않는다"</em>이다.
추상화를 제공하되, 그 추상화가 런타임 성능을 깎지 않도록 설계되어 있다.</p>
<div class="callout">기계공학·시뮬레이션·수치해석처럼 <strong>속도가 중요한 계산</strong>에 C++가 자주 쓰인다.
이 위키의 <code>25-Math/NumericalAnalysis</code> 와 잘 어울린다.</div>
`,
        code: `// 모든 C++ 프로그램은 main() 에서 시작한다.
#include <iostream>   // 입출력 라이브러리

int main() {
    std::cout << "Hello, C++!" << std::endl;
    return 0;          // 0 = 정상 종료
}`,
        codeNote: "std::cout 으로 콘솔에 출력하고, std::endl 로 줄을 바꾼다.",
        quiz: [
          {
            q: "C++ 프로그램의 실행이 시작되는 함수는?",
            options: ["start()", "main()", "begin()", "run()"],
            answer: 1,
            explain: "모든 C++ 프로그램은 main() 함수에서 실행을 시작한다."
          },
          {
            q: "C++의 핵심 철학 '제로 오버헤드 원칙'이 뜻하는 것은?",
            options: [
              "모든 코드는 0초에 실행된다",
              "쓰지 않는 기능에는 비용을 내지 않는다",
              "메모리를 0으로 초기화한다",
              "에러가 0개여야 한다"
            ],
            answer: 1,
            explain: "사용하지 않는 추상화 때문에 성능 손해를 보지 않는다는 의미다."
          }
        ]
      },
      {
        id: "setup",
        title: "개발 환경 & 컴파일 흐름",
        summary: "컴파일러, 빌드 단계, 실행까지.",
        body: `
<p>C++는 <strong>컴파일 언어</strong>다. 소스 코드(<code>.cpp</code>)를 컴파일러가
기계어(실행 파일)로 번역한 뒤 실행한다.</p>
<h3>대표 컴파일러</h3>
<ul>
  <li><strong>g++</strong> (GCC) — 리눅스/MinGW</li>
  <li><strong>clang++</strong> — macOS/LLVM</li>
  <li><strong>MSVC</strong> (cl.exe) — Windows / Visual Studio</li>
</ul>
<h3>빌드 4단계</h3>
<ol>
  <li><strong>전처리</strong> — <code>#include</code>, <code>#define</code> 처리</li>
  <li><strong>컴파일</strong> — 소스 → 어셈블리</li>
  <li><strong>어셈블</strong> — 어셈블리 → 오브젝트 파일(.o)</li>
  <li><strong>링크</strong> — 오브젝트 + 라이브러리 → 실행 파일</li>
</ol>
<div class="callout">설치 없이 바로 연습하려면 온라인 컴파일러
(godbolt.org, wandbox.org, replit)를 써도 된다.</div>
`,
        code: `# 터미널에서 컴파일 & 실행 (g++ 기준)
g++ -std=c++17 -Wall -O2 hello.cpp -o hello
./hello

# 자주 쓰는 플래그
#   -std=c++17   표준 버전 지정 (c++11/14/17/20/23)
#   -Wall        모든 경고 켜기 (버그 예방)
#   -O2          최적화 레벨 2
#   -g           디버깅 정보 포함`,
        codeNote: "처음엔 항상 -Wall 을 켜라. 경고는 미래의 버그다.",
        quiz: [
          {
            q: "C++ 빌드 과정에서 여러 오브젝트 파일과 라이브러리를 묶어 실행 파일을 만드는 단계는?",
            options: ["전처리", "컴파일", "링크", "어셈블"],
            answer: 2,
            explain: "링크(linking) 단계에서 오브젝트 파일들과 라이브러리를 결합한다."
          },
          {
            q: "g++로 C++17 표준을 지정하는 플래그는?",
            options: ["-cpp17", "-std=c++17", "-version=17", "--c17"],
            answer: 1,
            explain: "-std=c++17 로 사용할 표준 버전을 지정한다."
          }
        ]
      }
    ]
  },
  {
    stage: "2. 기초 문법",
    icon: "🧱",
    lessons: [
      {
        id: "variables",
        title: "변수와 자료형",
        summary: "기본 타입, 초기화, const 와 auto.",
        body: `
<p><strong>변수</strong>는 값을 담는 이름 붙은 메모리 공간이다. C++는
<em>정적 타입</em> 언어라 변수마다 타입이 정해진다.</p>
<h3>기본 자료형</h3>
<table class="tbl">
  <tr><th>타입</th><th>설명</th><th>예</th></tr>
  <tr><td><code>int</code></td><td>정수</td><td>42, -7</td></tr>
  <tr><td><code>double</code></td><td>실수(배정밀도)</td><td>3.14</td></tr>
  <tr><td><code>char</code></td><td>문자 1개</td><td>'A'</td></tr>
  <tr><td><code>bool</code></td><td>참/거짓</td><td>true / false</td></tr>
  <tr><td><code>std::string</code></td><td>문자열</td><td>"hello"</td></tr>
</table>
<h3>초기화 — 중괄호를 권장</h3>
<p>모던 C++에서는 <code>{}</code> (균일 초기화)를 권장한다. 데이터 손실이 있는
변환을 컴파일 타임에 막아주기 때문이다.</p>
<h3>const 와 auto</h3>
<ul>
  <li><code>const</code> — 바뀌지 않는 값. 가능하면 항상 붙여라.</li>
  <li><code>auto</code> — 컴파일러가 타입을 추론. 긴 타입명에 유용.</li>
</ul>`,
        code: `#include <iostream>
#include <string>

int main() {
    int age{25};              // 균일 초기화 (권장)
    double pi{3.14159};
    const double G = 9.81;    // 상수 (변경 불가)
    char grade = 'A';
    bool passed = true;
    std::string name = "Matthew";

    auto count = 10;          // auto → int 로 추론
    auto ratio = 0.5;         // auto → double 로 추론

    std::cout << name << ", " << age << "세\\n";
    std::cout << "중력가속도 = " << G << '\\n';
    return 0;
}`,
        codeNote: "const double G = 9.81; 처럼 변하지 않는 값엔 const 를 붙여 실수를 막는다.",
        quiz: [
          {
            q: "값이 절대 바뀌지 않아야 하는 변수에 붙이는 키워드는?",
            options: ["static", "const", "final", "auto"],
            answer: 1,
            explain: "const 는 한 번 초기화하면 변경할 수 없는 상수를 만든다."
          },
          {
            q: "auto count = 10; 에서 count 의 타입은?",
            options: ["double", "auto", "int", "long"],
            answer: 2,
            explain: "정수 리터럴 10 으로 초기화했으므로 int 로 추론된다."
          }
        ]
      },
      {
        id: "operators",
        title: "연산자와 표현식",
        summary: "산술·비교·논리·대입 연산자.",
        body: `
<h3>산술 연산자</h3>
<p><code>+ - * /</code> 와 나머지 <code>%</code>. <strong>정수끼리의 나눗셈은
소수점을 버린다</strong>는 점을 꼭 기억하라.</p>
<h3>비교 / 논리</h3>
<ul>
  <li>비교: <code>== != &lt; &gt; &lt;= &gt;=</code> → 결과는 <code>bool</code></li>
  <li>논리: <code>&amp;&amp;</code> (그리고), <code>||</code> (또는), <code>!</code> (부정)</li>
</ul>
<h3>증감 & 복합 대입</h3>
<p><code>++ --</code> 와 <code>+= -= *= /=</code>.</p>
<div class="callout warn"><strong>흔한 함정:</strong> <code>7 / 2 == 3</code> (정수 나눗셈).
실수 결과가 필요하면 <code>7.0 / 2</code> 처럼 하나라도 실수로 만들어라.</div>`,
        code: `#include <iostream>
int main() {
    int a = 7, b = 2;
    std::cout << a / b   << '\\n';   // 3  (정수 나눗셈!)
    std::cout << a % b   << '\\n';   // 1  (나머지)
    std::cout << 7.0 / b << '\\n';   // 3.5 (실수)

    bool ok = (a > 5) && (b != 0);
    std::cout << std::boolalpha << ok << '\\n'; // true
    return 0;
}`,
        codeNote: "std::boolalpha 를 쓰면 bool 이 1/0 대신 true/false 로 출력된다.",
        quiz: [
          {
            q: "C++에서 7 / 2 (둘 다 int)의 결과는?",
            options: ["3.5", "3", "4", "1"],
            answer: 1,
            explain: "정수끼리의 나눗셈은 소수부를 버려 3이 된다. 나머지는 % 로 얻는다."
          },
          {
            q: "두 조건이 모두 참일 때만 true 가 되는 논리 연산자는?",
            options: ["||", "&&", "!", "&"],
            answer: 1,
            explain: "&& 는 논리 AND 로 양쪽이 모두 참이어야 true 다."
          }
        ]
      }
    ]
  },
  {
    stage: "3. 제어 흐름",
    icon: "🔀",
    lessons: [
      {
        id: "conditions",
        title: "조건문 — if / switch",
        summary: "분기로 프로그램 흐름을 제어.",
        body: `
<h3>if / else if / else</h3>
<p>조건이 <code>true</code>일 때 블록을 실행한다. 여러 갈래는
<code>else if</code> 로 잇는다.</p>
<h3>switch</h3>
<p>하나의 값을 여러 상수와 비교할 때 깔끔하다. 각 <code>case</code> 끝에
<code>break</code> 를 잊으면 <em>fall-through</em>(다음 case로 흘러감)가 일어난다.</p>
<h3>삼항 연산자</h3>
<p><code>조건 ? 참일때 : 거짓일때</code> — 짧은 분기를 한 줄로.</p>`,
        code: `#include <iostream>
int main() {
    int score = 82;

    if (score >= 90)       std::cout << "A\\n";
    else if (score >= 80)  std::cout << "B\\n";   // 여기 실행
    else if (score >= 70)  std::cout << "C\\n";
    else                   std::cout << "F\\n";

    char grade = (score >= 60) ? 'P' : 'F';   // 삼항 연산자
    std::cout << "Pass? " << grade << '\\n';

    switch (grade) {
        case 'P': std::cout << "합격!\\n"; break;
        case 'F': std::cout << "불합격\\n"; break;
        default:  std::cout << "알 수 없음\\n";
    }
    return 0;
}`,
        codeNote: "switch 의 각 case 에는 break 를 꼭 넣어 의도치 않은 fall-through 를 막아라.",
        quiz: [
          {
            q: "switch 문에서 case 끝에 break 를 빠뜨리면 일어나는 현상은?",
            options: [
              "컴파일 에러",
              "다음 case 로 실행이 흘러감 (fall-through)",
              "프로그램 종료",
              "무한 루프"
            ],
            answer: 1,
            explain: "break 가 없으면 일치한 case 이후의 case 들도 연달아 실행된다."
          },
          {
            q: "score>=60 이면 'P', 아니면 'F' 를 한 줄로 쓰는 방법은?",
            options: [
              "score>=60 ? 'P' : 'F'",
              "if score>=60 'P' else 'F'",
              "score>=60 => 'P'",
              "P if score>=60 else F"
            ],
            answer: 0,
            explain: "삼항 연산자 조건 ? 참 : 거짓 형식을 사용한다."
          }
        ]
      },
      {
        id: "loops",
        title: "반복문 — for / while",
        summary: "for, while, range-based for, break/continue.",
        body: `
<h3>for 루프</h3>
<p>반복 횟수가 정해졌을 때. <code>for(초기화; 조건; 증감)</code>.</p>
<h3>while / do-while</h3>
<p>조건이 참인 동안 반복. <code>do-while</code> 은 <em>최소 한 번</em> 실행된다.</p>
<h3>range-based for (모던 C++)</h3>
<p>컨테이너의 모든 원소를 순회할 때 가장 깔끔하다.
복사를 피하려면 <code>const auto&amp;</code> 를 쓴다.</p>
<h3>break / continue</h3>
<ul>
  <li><code>break</code> — 루프 즉시 탈출</li>
  <li><code>continue</code> — 이번 반복만 건너뛰고 다음으로</li>
</ul>`,
        code: `#include <iostream>
#include <vector>
int main() {
    // 1부터 5까지 합
    int sum = 0;
    for (int i = 1; i <= 5; ++i) sum += i;
    std::cout << "합 = " << sum << '\\n';   // 15

    // range-based for
    std::vector<int> v{10, 20, 30};
    for (const auto& x : v)
        std::cout << x << ' ';
    std::cout << '\\n';

    // break / continue
    for (int i = 0; i < 10; ++i) {
        if (i == 7) break;        // 7에서 멈춤
        if (i % 2 == 0) continue; // 짝수 건너뜀
        std::cout << i << ' ';    // 1 3 5
    }
    std::cout << '\\n';
    return 0;
}`,
        codeNote: "range-based for 에서 const auto& 를 쓰면 불필요한 복사를 피한다.",
        quiz: [
          {
            q: "조건과 관계없이 본문을 최소 한 번은 실행하는 반복문은?",
            options: ["for", "while", "do-while", "range-based for"],
            answer: 2,
            explain: "do-while 은 본문을 먼저 실행한 뒤 조건을 검사하므로 최소 1회 실행된다."
          },
          {
            q: "루프에서 '이번 반복만 건너뛰고 다음 반복으로' 가는 키워드는?",
            options: ["break", "continue", "return", "skip"],
            answer: 1,
            explain: "continue 는 현재 반복의 남은 부분을 건너뛰고 다음 반복으로 넘어간다."
          }
        ]
      }
    ]
  },
  {
    stage: "4. 함수",
    icon: "🔧",
    lessons: [
      {
        id: "functions",
        title: "함수 기초",
        summary: "선언, 정의, 매개변수, 반환값.",
        body: `
<p><strong>함수</strong>는 이름 붙은 코드 블록이다. 같은 일을 반복하지 않고
재사용하며, 프로그램을 작은 조각으로 나눠 읽기 쉽게 만든다.</p>
<h3>구조</h3>
<pre class="mini">반환타입 함수이름(매개변수목록) { 본문 }</pre>
<h3>선언 vs 정의</h3>
<p>함수를 호출하기 전에 컴파일러가 그 존재(시그니처)를 알아야 한다.
보통 <em>선언(프로토타입)</em>을 위에 두고 <em>정의</em>를 아래에 둔다.</p>
<h3>기본 인자 & 오버로딩</h3>
<ul>
  <li><strong>기본 인자</strong>: <code>int f(int x, int y = 0)</code></li>
  <li><strong>오버로딩</strong>: 이름이 같아도 매개변수가 다르면 별개 함수</li>
</ul>`,
        code: `#include <iostream>

int add(int a, int b);          // 선언 (프로토타입)
double add(double a, double b);  // 오버로딩 (실수 버전)
int square(int x) { return x * x; }

int main() {
    std::cout << add(3, 4)     << '\\n';  // 7   (int 버전)
    std::cout << add(1.5, 2.5) << '\\n';  // 4   (double 버전)
    std::cout << square(5)     << '\\n';  // 25
    return 0;
}

int add(int a, int b)       { return a + b; }   // 정의
double add(double a, double b){ return a + b; }`,
        codeNote: "매개변수 타입이 다르면 같은 이름으로 여러 함수를 정의할 수 있다 (오버로딩).",
        quiz: [
          {
            q: "함수 이름이 같지만 매개변수의 개수/타입이 달라 여러 버전을 두는 것을?",
            options: ["오버라이딩", "오버로딩", "상속", "캡슐화"],
            answer: 1,
            explain: "오버로딩(overloading)은 시그니처가 다른 동명 함수를 정의하는 것이다."
          },
          {
            q: "함수를 정의보다 먼저 호출하려면 무엇이 필요한가?",
            options: ["main 함수", "선언(프로토타입)", "헤더 가드", "네임스페이스"],
            answer: 1,
            explain: "컴파일러가 호출 시점에 시그니처를 알도록 선언(프로토타입)을 먼저 둔다."
          }
        ]
      },
      {
        id: "references",
        title: "참조와 포인터 인자",
        summary: "값 전달 vs 참조 전달, const 참조.",
        body: `
<h3>값 전달 (pass by value)</h3>
<p>인자의 <em>복사본</em>이 함수로 전달된다. 함수 안에서 바꿔도 원본은 그대로다.</p>
<h3>참조 전달 (pass by reference)</h3>
<p><code>&amp;</code> 를 붙이면 원본 자체에 별명을 붙인다. 함수 안 변경이 원본에 반영된다.
큰 객체를 복사 없이 넘길 때도 유용하다.</p>
<h3>const 참조 — 가장 흔한 관용구</h3>
<p>큰 객체를 <em>읽기만</em> 할 땐 <code>const T&amp;</code> 로 받아라.
복사 비용을 없애면서 실수로 원본을 바꾸는 것도 막는다.</p>
<table class="tbl">
  <tr><th>방식</th><th>원본 변경</th><th>복사 비용</th></tr>
  <tr><td><code>T x</code></td><td>불가</td><td>있음</td></tr>
  <tr><td><code>T&amp; x</code></td><td>가능</td><td>없음</td></tr>
  <tr><td><code>const T&amp; x</code></td><td>불가</td><td>없음</td></tr>
</table>`,
        code: `#include <iostream>
#include <string>

void byValue(int x)        { x = 99; }      // 원본 안 바뀜
void byRef(int& x)         { x = 99; }      // 원본 바뀜
void print(const std::string& s) {          // 복사 없이 읽기
    std::cout << s << '\\n';
}

int main() {
    int a = 1;
    byValue(a);  std::cout << a << '\\n';   // 1
    byRef(a);    std::cout << a << '\\n';   // 99

    std::string big = "복사하지 않고 전달";
    print(big);
    return 0;
}`,
        codeNote: "읽기 전용 + 큰 객체 = const T& 가 정석이다.",
        quiz: [
          {
            q: "함수 안에서 인자를 바꿔도 원본이 변하지 않는 전달 방식은?",
            options: ["참조 전달", "포인터 전달", "값 전달", "이동 전달"],
            answer: 2,
            explain: "값 전달은 복사본을 넘기므로 원본에 영향이 없다."
          },
          {
            q: "큰 객체를 복사 없이 '읽기 전용'으로 함수에 넘길 때 권장되는 매개변수 형태는?",
            options: ["T x", "T& x", "const T& x", "T* x"],
            answer: 2,
            explain: "const T& 는 복사를 피하면서 원본 변경도 막는 표준 관용구다."
          }
        ]
      }
    ]
  },
  {
    stage: "5. 자료 구조",
    icon: "📦",
    lessons: [
      {
        id: "vectors",
        title: "벡터와 배열",
        summary: "std::vector — 동적 배열의 기본.",
        body: `
<h3>왜 std::vector 인가</h3>
<p>C 스타일 배열(<code>int arr[5]</code>)은 크기가 고정이고 경계 검사가 없다.
모던 C++에서는 크기가 자동으로 늘어나는 <strong><code>std::vector</code></strong> 를 기본으로 쓴다.</p>
<h3>핵심 동작</h3>
<ul>
  <li><code>push_back(x)</code> — 끝에 추가</li>
  <li><code>size()</code> — 원소 개수</li>
  <li><code>v[i]</code> / <code>v.at(i)</code> — 접근 (at 은 경계 검사)</li>
  <li><code>front()</code> / <code>back()</code> — 첫/마지막 원소</li>
</ul>
<div class="callout">기계공학 수치해석에서 행렬·벡터 데이터를 담을 때
<code>std::vector&lt;double&gt;</code> 가 출발점이 된다.</div>`,
        code: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> v{3, 1, 4};
    v.push_back(1);
    v.push_back(5);

    std::cout << "크기: " << v.size() << '\\n';   // 5
    std::cout << "첫: "  << v.front()
              << " 끝: " << v.back() << '\\n';

    long sum = 0;
    for (int x : v) sum += x;
    std::cout << "합: " << sum << '\\n';          // 14
    return 0;
}`,
        codeNote: "v.at(i) 는 범위를 벗어나면 예외를 던져 안전하지만, v[i] 보다 약간 느리다.",
        quiz: [
          {
            q: "std::vector 의 끝에 원소를 추가하는 멤버 함수는?",
            options: ["add()", "append()", "push_back()", "insert_end()"],
            answer: 2,
            explain: "push_back(x) 으로 벡터 끝에 원소를 추가한다."
          },
          {
            q: "벡터 접근 시 인덱스 범위를 벗어나면 예외를 던지는 안전한 방법은?",
            options: ["v[i]", "v.at(i)", "v.get(i)", "v->i"],
            answer: 1,
            explain: "at() 은 범위를 검사해 벗어나면 std::out_of_range 예외를 던진다."
          }
        ]
      },
      {
        id: "pointers",
        title: "포인터와 메모리",
        summary: "주소, 역참조, nullptr, 동적 할당.",
        body: `
<p><strong>포인터</strong>는 다른 변수의 <em>메모리 주소</em>를 담는 변수다.
C++의 강력함이자 가장 흔한 버그의 원천이다.</p>
<h3>핵심 기호</h3>
<ul>
  <li><code>&amp;x</code> — x 의 주소</li>
  <li><code>int* p</code> — 정수를 가리키는 포인터</li>
  <li><code>*p</code> — p 가 가리키는 값 (역참조)</li>
  <li><code>nullptr</code> — 아무것도 안 가리킴 (NULL/0 대신 사용)</li>
</ul>
<h3>동적 할당 — new / delete</h3>
<p><code>new</code> 로 힙에 메모리를 잡고, 반드시 <code>delete</code> 로 돌려줘야 한다.
빠뜨리면 <strong>메모리 누수</strong>다.</p>
<div class="callout warn">현업에서는 raw <code>new/delete</code> 대신
<strong>스마트 포인터</strong>를 쓴다 (다음 단계 참고). 원리 이해를 위해 먼저 본다.</div>`,
        code: `#include <iostream>
int main() {
    int x = 42;
    int* p = &x;          // p 는 x 의 주소를 가리킨다

    std::cout << *p << '\\n';   // 42 (역참조)
    *p = 100;                   // x 를 통째로 바꿈
    std::cout << x  << '\\n';   // 100

    // 동적 할당
    int* heap = new int{7};
    std::cout << *heap << '\\n'; // 7
    delete heap;                // 반드시 해제!
    heap = nullptr;             // 댕글링 방지
    return 0;
}`,
        codeNote: "new 한 것은 반드시 delete 하라. 해제 후 nullptr 로 두면 잘못된 재사용을 막는다.",
        quiz: [
          {
            q: "포인터 p 가 가리키는 곳의 '값'을 얻는 연산자는?",
            options: ["&p", "*p", "#p", "p&"],
            answer: 1,
            explain: "*p 는 역참조(dereference)로 포인터가 가리키는 값을 읽는다."
          },
          {
            q: "new 로 할당한 메모리를 해제하지 않으면 발생하는 문제는?",
            options: ["컴파일 에러", "메모리 누수", "타입 에러", "무한 루프"],
            answer: 1,
            explain: "delete 를 빠뜨리면 메모리가 회수되지 않는 메모리 누수가 생긴다."
          }
        ]
      }
    ]
  },
  {
    stage: "6. 객체지향(OOP)",
    icon: "🏛️",
    lessons: [
      {
        id: "classes",
        title: "클래스와 객체",
        summary: "멤버 변수/함수, 캡슐화, 생성자.",
        body: `
<p><strong>클래스</strong>는 데이터(멤버 변수)와 그 데이터를 다루는 동작(멤버 함수)을
하나로 묶은 사용자 정의 타입이다. 클래스로 찍어낸 인스턴스가 <strong>객체</strong>다.</p>
<h3>캡슐화 — public / private</h3>
<ul>
  <li><code>private</code> — 클래스 내부에서만 접근 (기본값)</li>
  <li><code>public</code> — 외부에서 접근 가능 (인터페이스)</li>
</ul>
<p>데이터는 <code>private</code> 로 숨기고, 검증된 멤버 함수로만 접근하게 하는 것이
캡슐화의 핵심이다.</p>
<h3>생성자</h3>
<p>객체가 만들어질 때 자동 호출되어 초기 상태를 세팅한다.
<em>멤버 초기화 리스트</em> <code>: 멤버{값}</code> 를 권장한다.</p>`,
        code: `#include <iostream>
#include <string>

class BankAccount {
    std::string owner;   // private (기본)
    double balance;
public:
    BankAccount(std::string o, double b)   // 생성자
        : owner{std::move(o)}, balance{b} {}

    void deposit(double amt) { balance += amt; }
    bool withdraw(double amt) {
        if (amt > balance) return false;   // 검증
        balance -= amt;
        return true;
    }
    double getBalance() const { return balance; } // 읽기 전용
};

int main() {
    BankAccount acc{"Matthew", 1000};
    acc.deposit(500);
    acc.withdraw(200);
    std::cout << "잔액: " << acc.getBalance() << '\\n'; // 1300
    return 0;
}`,
        codeNote: "balance 를 private 로 숨기고 deposit/withdraw 로만 바꿔 음수 인출 같은 잘못된 상태를 막는다.",
        quiz: [
          {
            q: "클래스 멤버를 외부에서 직접 접근하지 못하게 숨기는 접근 지정자는?",
            options: ["public", "private", "static", "friend"],
            answer: 1,
            explain: "private 멤버는 클래스 내부에서만 접근할 수 있어 캡슐화를 구현한다."
          },
          {
            q: "객체가 생성될 때 자동으로 호출되어 초기 상태를 설정하는 특수 멤버 함수는?",
            options: ["소멸자", "생성자", "복사자", "초기자"],
            answer: 1,
            explain: "생성자(constructor)는 객체 생성 시 자동 호출되어 멤버를 초기화한다."
          }
        ]
      },
      {
        id: "inheritance",
        title: "상속과 다형성",
        summary: "기반/파생 클래스, virtual, 오버라이딩.",
        body: `
<h3>상속</h3>
<p>기존 클래스(<em>기반 클래스</em>)의 멤버를 물려받아 새 클래스(<em>파생 클래스</em>)를
만든다. "is-a" 관계 — <code>Dog is-a Animal</code>.</p>
<h3>다형성 — virtual</h3>
<p>기반 클래스 포인터/참조로 파생 객체를 가리킬 때, 호출되는 함수가
<em>실제 객체의 타입</em>에 따라 결정되게 하려면 <code>virtual</code> 을 붙인다.
파생에서 재정의할 땐 <code>override</code> 를 명시하라 (실수 방지).</p>
<div class="callout warn">기반 클래스를 포인터로 다룬다면 소멸자도
<code>virtual</code> 로 만들어야 파생 객체가 제대로 해제된다.</div>`,
        code: `#include <iostream>
#include <memory>
#include <vector>

class Animal {
public:
    virtual void speak() const { std::cout << "...\\n"; }
    virtual ~Animal() = default;   // 가상 소멸자
};
class Dog : public Animal {
public:
    void speak() const override { std::cout << "멍멍\\n"; }
};
class Cat : public Animal {
public:
    void speak() const override { std::cout << "야옹\\n"; }
};

int main() {
    std::vector<std::unique_ptr<Animal>> zoo;
    zoo.push_back(std::make_unique<Dog>());
    zoo.push_back(std::make_unique<Cat>());
    for (const auto& a : zoo) a->speak();  // 멍멍 / 야옹
    return 0;
}`,
        codeNote: "virtual 덕분에 Animal* 로 호출해도 실제 타입(Dog/Cat)의 speak() 가 불린다 — 다형성.",
        quiz: [
          {
            q: "기반 클래스 포인터로 호출해도 실제 객체 타입의 함수가 실행되게 하는 키워드는?",
            options: ["static", "virtual", "const", "inline"],
            answer: 1,
            explain: "virtual 함수는 런타임에 실제 객체 타입에 맞는 버전이 호출된다 (동적 바인딩)."
          },
          {
            q: "파생 클래스에서 기반 클래스의 가상 함수를 재정의할 때 명시하면 좋은 키워드는?",
            options: ["overload", "override", "overwrite", "redefine"],
            answer: 1,
            explain: "override 를 붙이면 시그니처가 안 맞아 재정의에 실패한 경우 컴파일러가 잡아준다."
          }
        ]
      }
    ]
  },
  {
    stage: "7. 템플릿 & STL",
    icon: "📚",
    lessons: [
      {
        id: "templates",
        title: "템플릿 — 제네릭 프로그래밍",
        summary: "타입에 독립적인 함수/클래스.",
        body: `
<p><strong>템플릿</strong>은 타입을 <em>매개변수</em>로 받아, 여러 타입에 대해
같은 코드를 재사용하게 한다. 컴파일러가 사용된 타입마다 코드를 자동 생성한다.</p>
<h3>함수 템플릿</h3>
<p><code>template&lt;typename T&gt;</code> 로 시작한다. <code>T</code> 자리에
호출 시 실제 타입이 대입된다.</p>
<h3>왜 좋은가</h3>
<ul>
  <li>int, double, string 마다 함수를 따로 안 만들어도 된다.</li>
  <li>런타임 비용 없이(컴파일 타임 생성) 타입 안전성을 유지한다.</li>
  <li>STL 전체가 템플릿 위에 세워져 있다.</li>
</ul>`,
        code: `#include <iostream>
#include <string>

template<typename T>
T maxOf(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    std::cout << maxOf(3, 9)         << '\\n'; // 9   (int)
    std::cout << maxOf(2.5, 1.1)     << '\\n'; // 2.5 (double)
    std::cout << maxOf<std::string>("apple", "pear") << '\\n'; // pear
    return 0;
}`,
        codeNote: "maxOf 하나로 int, double, string 모두 처리한다 — 컴파일러가 타입별 버전을 만든다.",
        quiz: [
          {
            q: "함수 템플릿 선언을 시작하는 올바른 구문은?",
            options: [
              "template<typename T>",
              "generic<T>",
              "type T:",
              "func<T>"
            ],
            answer: 0,
            explain: "template<typename T> (또는 template<class T>) 로 템플릿을 선언한다."
          },
          {
            q: "템플릿의 타입별 코드는 언제 생성되는가?",
            options: ["런타임", "링크 타임", "컴파일 타임", "설치 시"],
            answer: 2,
            explain: "컴파일러가 사용된 타입마다 컴파일 타임에 코드를 생성한다(인스턴스화)."
          }
        ]
      },
      {
        id: "stl",
        title: "STL — 컨테이너와 알고리즘",
        summary: "map, sort, find 등 표준 라이브러리.",
        body: `
<p><strong>STL</strong>(Standard Template Library)은 검증된 자료구조와
알고리즘 모음이다. 바퀴를 다시 발명하지 말고 STL을 써라.</p>
<h3>주요 컨테이너</h3>
<table class="tbl">
  <tr><th>컨테이너</th><th>용도</th></tr>
  <tr><td><code>vector</code></td><td>동적 배열</td></tr>
  <tr><td><code>map</code></td><td>키-값 (정렬됨)</td></tr>
  <tr><td><code>unordered_map</code></td><td>키-값 (해시, 빠름)</td></tr>
  <tr><td><code>set</code></td><td>중복 없는 집합</td></tr>
</table>
<h3>알고리즘 (&lt;algorithm&gt;)</h3>
<p><code>std::sort</code>, <code>std::find</code>, <code>std::count</code>,
<code>std::accumulate</code> 등. 컨테이너와 분리되어 어디든 적용된다.</p>`,
        code: `#include <iostream>
#include <vector>
#include <map>
#include <algorithm>

int main() {
    std::vector<int> v{5, 2, 8, 1};
    std::sort(v.begin(), v.end());       // 1 2 5 8
    for (int x : v) std::cout << x << ' ';
    std::cout << '\\n';

    std::map<std::string, int> age;
    age["Matthew"] = 25;
    age["Anna"] = 30;
    for (const auto& [name, a] : age)    // 구조적 바인딩
        std::cout << name << ": " << a << '\\n';
    return 0;
}`,
        codeNote: "구조적 바인딩 auto& [k, v] 로 map 을 순회하면 키/값을 깔끔히 분해할 수 있다.",
        quiz: [
          {
            q: "std::vector 를 오름차순으로 정렬하는 표준 알고리즘은?",
            options: ["v.order()", "std::sort(v.begin(), v.end())", "v.sort()", "std::arrange(v)"],
            answer: 1,
            explain: "std::sort 에 begin/end 이터레이터를 넘겨 정렬한다."
          },
          {
            q: "키로 값을 빠르게(해시 기반) 조회하는 STL 컨테이너는?",
            options: ["vector", "list", "unordered_map", "set"],
            answer: 2,
            explain: "unordered_map 은 해시 테이블 기반으로 평균 O(1) 조회를 제공한다."
          }
        ]
      }
    ]
  },
  {
    stage: "8. 모던 C++",
    icon: "✨",
    lessons: [
      {
        id: "smartptr",
        title: "스마트 포인터 & RAII",
        summary: "unique_ptr, shared_ptr, 자원 자동 관리.",
        body: `
<h3>RAII</h3>
<p><strong>RAII</strong>(Resource Acquisition Is Initialization)는 C++의 핵심 관용구다.
자원(메모리·파일·락)을 객체의 수명에 묶어, <em>객체가 사라질 때 자동으로 해제</em>한다.</p>
<h3>스마트 포인터</h3>
<ul>
  <li><code>unique_ptr</code> — 단독 소유. 복사 불가, 이동만 가능. 기본 선택.</li>
  <li><code>shared_ptr</code> — 공동 소유. 참조 카운트가 0이 되면 해제.</li>
  <li><code>weak_ptr</code> — shared 의 순환 참조를 끊는 약한 참조.</li>
</ul>
<div class="callout">스마트 포인터를 쓰면 <code>delete</code> 를 직접 부를 일이
거의 없어진다 → 메모리 누수가 사라진다.</div>`,
        code: `#include <iostream>
#include <memory>

struct File {
    File()  { std::cout << "파일 열림\\n"; }
    ~File() { std::cout << "파일 닫힘\\n"; }  // 자동 호출
    void read() { std::cout << "읽는 중...\\n"; }
};

int main() {
    {
        auto f = std::make_unique<File>(); // 열림
        f->read();
    } // 블록 끝 → 자동으로 ~File() (닫힘) — delete 불필요!
    std::cout << "끝\\n";
    return 0;
}`,
        codeNote: "make_unique 로 만든 객체는 스코프를 벗어날 때 소멸자가 자동 호출된다 — 이것이 RAII.",
        quiz: [
          {
            q: "자원을 객체 수명에 묶어 자동 해제하는 C++ 관용구는?",
            options: ["GC", "RAII", "DRY", "SOLID"],
            answer: 1,
            explain: "RAII 는 객체 소멸 시 자원을 자동 해제해 누수를 막는 핵심 관용구다."
          },
          {
            q: "단독 소유이며 복사할 수 없고 이동만 가능한 스마트 포인터는?",
            options: ["shared_ptr", "weak_ptr", "unique_ptr", "raw_ptr"],
            answer: 2,
            explain: "unique_ptr 는 단일 소유권을 가지며 복사가 금지되고 이동만 허용된다."
          }
        ]
      },
      {
        id: "lambda",
        title: "람다와 auto",
        summary: "익명 함수, 캡처, 범용 타입 추론.",
        body: `
<h3>람다 표현식</h3>
<p>이름 없는 함수를 그 자리에서 만든다. 알고리즘에 동작을 넘길 때 특히 유용하다.</p>
<pre class="mini">[캡처](매개변수) { 본문 }</pre>
<h3>캡처</h3>
<ul>
  <li><code>[]</code> — 아무것도 안 가져옴</li>
  <li><code>[=]</code> — 외부 변수를 값으로 복사</li>
  <li><code>[&amp;]</code> — 외부 변수를 참조로</li>
  <li><code>[x]</code> — x 만 값으로</li>
</ul>
<h3>auto 와 결합</h3>
<p>람다의 타입은 복잡하므로 <code>auto</code> 에 담는다.</p>`,
        code: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> v{1, 2, 3, 4, 5, 6};

    // 짝수만 세기 — 람다를 조건으로 전달
    int evens = std::count_if(v.begin(), v.end(),
        [](int x) { return x % 2 == 0; });
    std::cout << "짝수 개수: " << evens << '\\n';  // 3

    // 캡처: 외부 변수 threshold 를 값으로
    int threshold = 3;
    auto big = [threshold](int x) { return x > threshold; };
    std::cout << std::count_if(v.begin(), v.end(), big) << '\\n'; // 3
    return 0;
}`,
        codeNote: "[](int x){ ... } 가 람다다. count_if 같은 알고리즘에 '조건'을 직접 넘길 수 있다.",
        quiz: [
          {
            q: "람다에서 외부 변수를 '참조'로 캡처하는 표기는?",
            options: ["[=]", "[&]", "[*]", "[#]"],
            answer: 1,
            explain: "[&] 는 외부 변수를 참조로 캡처한다. [=] 는 값 복사다."
          },
          {
            q: "범위 안의 원소 중 조건을 만족하는 개수를 세는 STL 알고리즘은?",
            options: ["std::find", "std::sort", "std::count_if", "std::filter"],
            answer: 2,
            explain: "count_if 는 술어(predicate, 보통 람다)를 만족하는 원소 수를 센다."
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
