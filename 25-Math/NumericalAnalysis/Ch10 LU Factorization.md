---
title: Ch10 LU Factorization
chapter: 10
part: 3
tags:
  - numerical-analysis
  - lu-factorization
  - cholesky
  - linear-algebra
---

# Ch10. LU Factorization

## 왜 LU 분해인가?

[[Ch09 Gauss Elimination]]은 $[A]\{x\}=\{b\}$에 매우 효과적이지만:
- **같은 $[A]$, 다른 $\{b\}$** 여러 개를 풀 때 매번 $O(n^3)$의 elimination을 반복 → 비효율

**LU**: 시간이 많이 드는 $[A]$ 처리(분해)와 $\{b\}$ 처리(치환)를 **분리**.
$[A]$를 한 번 분해해두면 새 $\{b\}$마다 $O(n^2)$로 해를 얻을 수 있다.

## 10.1 Overview of LU Factorization

$$[A]\{x\} = \{b\}$$
$$\Downarrow \quad [A] = [L][U]$$
$$[L][U]\{x\} = \{b\}$$

새 변수 $\{y\} = [U]\{x\}$를 도입:
$$\boxed{[L]\{y\} = \{b\} \quad\xrightarrow{\text{forward}}\quad \{y\}}$$
$$\boxed{[U]\{x\} = \{y\} \quad\xrightarrow{\text{backward}}\quad \{x\}}$$

### 정리: 3단계
1. **LU 분해**: $[A] = [L][U]$ — 한 번만 수행 ($O(n^3)$)
2. **Forward substitution**: $[L]\{y\} = \{b\}$
   $$y_i = b_i - \sum_{j=1}^{i-1} l_{ij}\,y_j, \quad i = 1, 2, \ldots, n$$
3. **Backward substitution**: $[U]\{x\} = \{y\}$
   $$x_n = y_n / u_{nn}, \quad x_i = \frac{y_i - \sum_{j=i+1}^{n} u_{ij}\,x_j}{u_{ii}}$$

## 10.2 Gauss Elimination as LU Factorization

Gauss elimination 과정에서 사용한 **소거 인자** $f_{ij} = a_{ij}/a_{ii}$를 모아두면 $[L]$이 된다!

### 3×3 예시
1. 1행에 $f_{21} = a_{21}/a_{11}$ 곱해 2행에서 빼기
2. 1행에 $f_{31} = a_{31}/a_{11}$ 곱해 3행에서 빼기
3. (수정된) 2행에 $f_{32} = a'_{32}/a'_{22}$ 곱해 3행에서 빼기

결과:
$$[A] = \underbrace{\begin{bmatrix} 1 & & \\ f_{21} & 1 & \\ f_{31} & f_{32} & 1 \end{bmatrix}}_{[L]} \underbrace{\begin{bmatrix} a_{11} & a_{12} & a_{13} \\ & a'_{22} & a'_{23} \\ & & a''_{33} \end{bmatrix}}_{[U]}$$

### Pivoting을 포함한 LU
실무에서는 partial pivoting을 적용:
$$P\,A = L\,U$$
여기서 $P$는 **순열행렬(permutation matrix)** — 행 교환을 표현한 $I$의 변형.

방정식 풀기는:
$$PA\,x = Pb \;\Rightarrow\; LU\,x = Pb \;\Rightarrow\; \begin{cases} Ly = Pb \\ Ux = y \end{cases}$$

### MATLAB 예 (Ex 10.4)
$$\begin{bmatrix} 3 & -0.1 & -0.2 \\ 0.1 & 7 & -0.3 \\ 0.3 & -0.2 & 10 \end{bmatrix}\{x\} = \begin{Bmatrix} 7.85 \\ -19.3 \\ 71.4 \end{Bmatrix}$$

```matlab
>> A = [3 -.1 -.2; .1 7 -.3; .3 -.2 10];
>> b = [7.85; -19.3; 71.4];
>> [L, U] = lu(A)
L = [1       0       0
     0.0333  1       0
     0.1     -0.0271 1]
U = [3       -0.1    -0.2
     0       7.0033  -0.2933
     0       0       10.0120]
>> d = L \ b      % forward
>> x = U \ d      % backward
x = [3; -2.5; 7]
```

## 10.3 Cholesky Factorization

### 대칭 행렬 $[A]^T = [A]$의 특수 분해
대칭일 때는 **메모리 절반, 연산 절반** 이득:
$$[A] = [U]^T [U]$$
(또는 $[A] = [L][L]^T$)

### 원소 계산식
$$u_{ii} = \sqrt{a_{ii} - \sum_{k=1}^{i-1} u_{ki}^2}$$
$$u_{ij} = \frac{a_{ij} - \sum_{k=1}^{i-1} u_{ki} u_{kj}}{u_{ii}}, \quad j = i+1, \ldots, n$$

(주의: $a_{ii} - \sum u_{ki}^2 > 0$이어야 — 양의 정부호 조건)

### Cholesky로 시스템 풀기
$$[A]\{x\} = \{b\}$$
$$\Rightarrow [U]^T [U] \{x\} = \{b\}$$
$$\Rightarrow [U]^T \{y\} = \{b\} \;\&\; [U]\{x\} = \{y\}$$

### MATLAB Ex 10.5
```matlab
>> A = [6 15 55; 15 55 225; 55 225 979];   % symmetric
>> b = [sum(A(1,:)); sum(A(2,:)); sum(A(3,:))]   % = [76; 295; 1259]
>> U = chol(A)
U = [2.4495  6.1237  22.4537
     0       4.1833  20.9165
     0       0       6.1101]
>> d = U' \ b     % forward
>> x = U \ d      % backward
x = [1; 1; 1]
```

## 정리

| 방법 | 적용 대상 | 비용 (분해) | 비용 (풀이) |
| --- | --- | --- | --- |
| Gauss Elim. | 일반 정방 | $O(n^3)$ | $O(n^3)$ ($\{b\}$ 변경 시 매번) |
| LU | 일반 정방 | $O(n^3)$ (1회) | $O(n^2)$ (여러 $\{b\}$) |
| Cholesky | **대칭 양정부호** | $O(n^3/2)$ | $O(n^2)$ |

MATLAB 함수:
- `[L,U,P] = lu(A)` — LU with partial pivoting
- `R = chol(A)` — Cholesky upper triangular
- `x = A\b` — 자동으로 적합한 방법 선택

---

← [[Ch09 Gauss Elimination]] | → [[Ch11 Matrix Inverse and Condition]]

#numerical-analysis #ch10 #lu-factorization #cholesky
