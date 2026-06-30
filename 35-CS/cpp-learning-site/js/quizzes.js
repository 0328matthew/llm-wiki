/* =====================================================================
 *  C++ 학습 사이트 — 종합 퀴즈 은행
 *  concept : 개념 문제 (객관식)
 *  coding  : 코딩 문제 — type "output"(출력 예측, 객관식)
 *                        type "fill"  (빈칸 채우기, 직접 입력)
 *  fill 의 accept 는 허용 정답 목록 (대소문자·괄호·세미콜론 무시하고 채점)
 * ===================================================================== */

const QUIZ_BANK = {
  concept: [
    {
      q: "C++ 프로그램의 실행이 시작되는 함수는?",
      options: ["start()", "main()", "init()", "run()"],
      answer: 1,
      explain: "모든 C++ 프로그램은 main() 에서 실행을 시작한다."
    },
    {
      q: "정수 7 과 2 에 대해 7 / 2 의 결과는?",
      options: ["3.5", "3", "4", "1"],
      answer: 1,
      explain: "정수끼리의 나눗셈은 소수부를 버린다. 나머지(1)는 % 로 얻는다."
    },
    {
      q: "값이 한 번 정해지면 바뀌지 않아야 하는 변수에 붙이는 키워드는?",
      options: ["static", "const", "auto", "final"],
      answer: 1,
      explain: "const 는 변경 불가능한 상수를 만든다."
    },
    {
      q: "큰 객체를 복사 없이 '읽기 전용'으로 함수에 넘길 때 권장되는 매개변수 형태는?",
      options: ["T x", "T& x", "const T& x", "T* x"],
      answer: 2,
      explain: "const T& 는 복사 비용을 없애면서 원본 변경도 막는 표준 관용구다."
    },
    {
      q: "switch 문에서 case 끝에 break 를 빠뜨리면?",
      options: ["컴파일 에러", "다음 case 로 흘러감(fall-through)", "프로그램 종료", "무한 루프"],
      answer: 1,
      explain: "break 가 없으면 일치한 case 이후의 case 들이 연달아 실행된다."
    },
    {
      q: "기반 클래스 포인터로 호출해도 실제 객체 타입의 함수가 실행되게 하는 키워드는?",
      options: ["static", "virtual", "inline", "explicit"],
      answer: 1,
      explain: "virtual 함수는 런타임에 실제 객체 타입의 버전이 호출된다(동적 바인딩)."
    },
    {
      q: "단독 소유이며 복사할 수 없고 이동만 가능한 스마트 포인터는?",
      options: ["shared_ptr", "weak_ptr", "unique_ptr", "auto_ptr"],
      answer: 2,
      explain: "unique_ptr 는 단일 소유권을 가지며 복사가 금지되고 이동만 허용된다."
    },
    {
      q: "자원을 객체 수명에 묶어 소멸 시 자동 해제하는 C++ 관용구는?",
      options: ["GC", "RAII", "DRY", "SOLID"],
      answer: 1,
      explain: "RAII(Resource Acquisition Is Initialization)는 소멸자에서 자원을 자동 해제한다."
    },
    {
      q: "클래스 멤버를 외부에서 직접 접근하지 못하게 숨기는 접근 지정자는?",
      options: ["public", "private", "friend", "extern"],
      answer: 1,
      explain: "private 멤버는 클래스 내부에서만 접근 가능해 캡슐화를 구현한다."
    },
    {
      q: "함수 템플릿 선언을 시작하는 올바른 구문은?",
      options: ["template<typename T>", "generic<T>", "func<T>", "type T:"],
      answer: 0,
      explain: "template<typename T> (또는 template<class T>) 로 템플릿을 선언한다."
    },
    {
      q: "std::vector 접근 시 인덱스가 범위를 벗어나면 예외를 던지는 안전한 방법은?",
      options: ["v[i]", "v.at(i)", "v.get(i)", "v->i"],
      answer: 1,
      explain: "at() 은 범위를 검사해 벗어나면 std::out_of_range 예외를 던진다."
    },
    {
      q: "new 로 할당한 메모리를 delete 하지 않으면 발생하는 문제는?",
      options: ["컴파일 에러", "메모리 누수", "타입 에러", "무한 루프"],
      answer: 1,
      explain: "delete 를 빠뜨리면 회수되지 않는 메모리 누수가 생긴다."
    }
  ],

  coding: [
    {
      type: "output",
      q: "다음 코드의 출력은?",
      code: `int a = 5, b = 2;
std::cout << a / b << " " << a % b;`,
      options: ["2 1", "2.5 1", "2 2", "3 1"],
      answer: 0,
      explain: "정수 나눗셈 5/2 = 2, 나머지 5%2 = 1 → \"2 1\"."
    },
    {
      type: "output",
      q: "다음 코드의 출력은?",
      code: `std::vector<int> v{1, 2, 3};
v.push_back(4);
std::cout << v.size() << " " << v.back();`,
      options: ["3 3", "4 4", "4 3", "3 4"],
      answer: 1,
      explain: "push_back 후 크기는 4, 마지막 원소 back() 은 4 → \"4 4\"."
    },
    {
      type: "output",
      q: "참조를 통해 원본을 바꾼다. 출력은?",
      code: `int x = 3;
int& r = x;
r = 10;
std::cout << x;`,
      options: ["3", "10", "0", "오류"],
      answer: 1,
      explain: "r 은 x 의 별명이므로 r = 10 은 x 를 10 으로 바꾼다."
    },
    {
      type: "output",
      q: "break 로 루프를 빠져나온다. 출력은?",
      code: `for (int i = 0; i < 5; ++i) {
    if (i == 3) break;
    std::cout << i;
}`,
      options: ["01234", "012", "0123", "123"],
      answer: 1,
      explain: "i 가 3 이 되는 순간 break 로 멈추므로 0,1,2 까지 출력 → \"012\"."
    },
    {
      type: "output",
      q: "continue 로 짝수를 건너뛴다. n 의 값은?",
      code: `int n = 0;
for (int i = 1; i <= 4; ++i) {
    if (i % 2 == 0) continue;
    n += i;
}
std::cout << n;`,
      options: ["10", "4", "6", "3"],
      answer: 1,
      explain: "홀수만 더한다: 1 + 3 = 4 (2,4 는 continue 로 건너뜀)."
    },
    {
      type: "output",
      q: "auto 의 타입 추론에 주의하라. 출력은?",
      code: `auto x = 7 / 2;
auto y = 7.0 / 2;
std::cout << x << " " << y;`,
      options: ["3.5 3.5", "3 3", "3 3.5", "3.5 3"],
      answer: 2,
      explain: "7/2 는 정수 나눗셈(3), 7.0/2 는 실수(3.5) → \"3 3.5\"."
    },
    {
      type: "output",
      q: "삼항 연산자의 결과는?",
      code: `int score = 75;
std::cout << (score >= 80 ? "B" : "C");`,
      options: ["B", "C", "75", "BC"],
      answer: 1,
      explain: "75 >= 80 은 거짓이므로 거짓일 때 값 \"C\" 가 출력된다."
    },
    {
      type: "output",
      q: "다형성. zoo 의 출력 순서는?",
      code: `struct Animal { virtual void cry() { std::cout << "?"; } };
struct Dog : Animal { void cry() override { std::cout << "W"; } };
Animal* a = new Dog();
a->cry();`,
      options: ["?", "W", "?W", "오류"],
      answer: 1,
      explain: "virtual 덕분에 Animal* 로 호출해도 실제 타입 Dog 의 cry() 가 불려 \"W\"."
    },

    {
      type: "fill",
      q: "벡터 v 의 끝에 정수 5 를 추가하려 한다. 빈칸에 들어갈 멤버 함수 이름은?",
      code: `std::vector<int> v;
v.______(5);`,
      accept: ["push_back"],
      explain: "push_back(x) 으로 벡터 끝에 원소를 추가한다."
    },
    {
      type: "fill",
      q: "콘솔에 출력하기 위한 표준 스트림 객체 이름은? (std:: 뒤)",
      code: `std::______ << "Hello";`,
      accept: ["cout"],
      explain: "std::cout 은 표준 출력 스트림이다."
    },
    {
      type: "fill",
      q: "값이 바뀌지 않는 상수로 선언하려 한다. 빈칸 키워드는?",
      code: `______ double PI = 3.14159;`,
      accept: ["const"],
      explain: "const 로 변경 불가능한 상수를 선언한다."
    },
    {
      type: "fill",
      q: "new 로 할당한 메모리를 해제하는 키워드는?",
      code: `int* p = new int{7};
______ p;`,
      accept: ["delete"],
      explain: "delete 로 동적 할당한 단일 객체를 해제한다."
    },
    {
      type: "fill",
      q: "벡터를 오름차순으로 정렬하는 표준 알고리즘 이름은? (std:: 뒤)",
      code: `std::______(v.begin(), v.end());`,
      accept: ["sort"],
      explain: "std::sort 에 begin/end 이터레이터를 넘겨 정렬한다."
    },
    {
      type: "fill",
      q: "파생 클래스에서 재정의될 수 있도록 멤버 함수를 선언하는 키워드는?",
      code: `struct Shape {
    ______ double area() const { return 0; }
};`,
      accept: ["virtual"],
      explain: "virtual 함수는 파생 클래스에서 재정의(override)되어 다형성을 가능케 한다."
    },
    {
      type: "fill",
      q: "단독 소유 스마트 포인터를 안전하게 생성하는 표준 함수는? (std:: 뒤)",
      code: `auto p = std::______<int>(42);`,
      accept: ["make_unique"],
      explain: "std::make_unique<T>(...) 로 unique_ptr 를 안전하게 생성한다."
    },
    {
      type: "fill",
      q: "range-based for 로 v 의 모든 원소를 복사 없이 읽으려 한다. 빈칸(캡처 형태)은?",
      code: `for (______ x : v) std::cout << x;`,
      accept: ["const auto&", "const auto &", "const int&", "const int &"],
      explain: "const auto& 로 받으면 복사 없이 읽기 전용으로 순회한다."
    }
  ]
};
