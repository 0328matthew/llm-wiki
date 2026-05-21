---
title: "SA Ch8 — 배열"
tags: [note, cs, cpp, structured, chapter]
domain: CS
subject: Cpp-Structured
chapter: 8
source: "Forouzan & Gilberg, *Computer Science: A Structured Approach Using C++*"
created: 2026-05-21
---

⬅︎ [[SA Ch07 텍스트 입출력]] · [[CS-MOC]] · 다음 → [[SA Ch09 포인터]]

## 한 줄 요약
같은 자료형 값을 **하나의 이름 + 인덱스**로 묶어 다루는 자료구조. 반복문과 결합해 대량 데이터를 절차적으로 처리하고, **정렬·검색** 같은 고전 알고리즘의 무대가 되는 장.

---

## 8.1 1차원 배열
- 선언: `int score[5];` → 인덱스 `0 ~ 4` (0-기반!)
- 초기화: `int a[5] = {3, 1, 4, 1, 5};`, 일부만 주면 나머지는 0
- 크기 생략 초기화: `int a[] = {1, 2, 3};` → 크기 3으로 추론
```cpp
int score[5] = {90, 85, 70, 60, 100};
for (int i = 0; i < 5; i++)
    cout << score[i] << ' ';
```
> C++ 배열은 **경계 검사를 하지 않는다**. `score[5]`나 `score[-1]`은 미정의 동작.

## 8.2 배열과 반복문
배열의 본질은 인덱스 = 반복 변수. 합·평균·최댓값 같은 누적 패턴이 정형화된다.
```cpp
int sum = 0, maxV = score[0];
for (int i = 0; i < 5; i++) {
    sum += score[i];
    if (score[i] > maxV) maxV = score[i];
}
double avg = sum / 5.0;
```

## 8.3 배열을 함수에 전달
- 배열 이름은 **첫 원소의 주소**로 전달됨 → 사실상 참조 전달(원본 수정 가능)
- 함수는 크기를 모르므로 **크기를 별도 인자로** 넘긴다
```cpp
double average(const int a[], int n) {   // const → 원본 보호
    int sum = 0;
    for (int i = 0; i < n; i++) sum += a[i];
    return static_cast<double>(sum) / n;
}
// 호출: average(score, 5);
```

## 8.4 정렬 (Sorting)
세 가지 기본 정렬의 개요 — 모두 O(n²)이지만 절차적 사고 훈련에 좋다.

| 정렬 | 핵심 아이디어 |
|---|---|
| 선택 | 남은 구간의 **최솟값을 골라** 앞으로 |
| 버블 | 인접 쌍을 비교·교환, 큰 값이 **거품처럼** 뒤로 |
| 삽입 | 앞쪽 정렬된 부분에 원소를 **끼워 넣기** |

```cpp
void selectionSort(int a[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int min = i;
        for (int j = i + 1; j < n; j++)
            if (a[j] < a[min]) min = j;
        int tmp = a[i]; a[i] = a[min]; a[min] = tmp;  // swap
    }
}
```

## 8.5 검색 (Searching)
- **선형 검색**: 앞에서부터 차례로 비교, O(n). 정렬 불필요
- **이진 검색**: **정렬된** 배열에서 중간값과 비교해 절반씩 버림, O(log n)
```cpp
int binarySearch(const int a[], int n, int key) {
    int lo = 0, hi = n - 1;
    while (lo <= hi) {
        int mid = (lo + hi) / 2;
        if (a[mid] == key) return mid;
        else if (a[mid] < key) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;  // 못 찾음
}
```

## 8.6 2차원 배열
- 행렬·표 모델링: `int m[3][4];` (3행 4열)
- 메모리상 **행 우선(row-major)** 으로 연속 배치
- 함수 전달 시 **열 크기는 반드시 명시**: `void f(int m[][4], int rows)`
```cpp
int m[2][3] = {{1, 2, 3}, {4, 5, 6}};
for (int r = 0; r < 2; r++)
    for (int c = 0; c < 3; c++)
        cout << m[r][c] << ' ';
```

---

## 자주 하는 실수
- 인덱스를 1부터 세거나 `a[n]`에 접근 (off-by-one, 범위 초과)
- 배열을 `=`로 통째 복사하려 함 → 불가, 반복문으로 원소별 복사
- 함수에 배열 넘기며 크기 인자를 빠뜨림
- 이진 검색을 **정렬 안 된** 배열에 적용
- 2차원 배열을 함수에 넘길 때 열 크기 생략

## 관련 개념
- [[SA Ch09 포인터]] — 배열 이름이 곧 주소라는 사실의 정체
- [[SA Ch10 유도 자료형 — 열거형·구조체·공용체]] — 서로 다른 자료형을 묶는 struct

## 참고
- Forouzan & Gilberg, *Structured Approach*, Ch. 8
