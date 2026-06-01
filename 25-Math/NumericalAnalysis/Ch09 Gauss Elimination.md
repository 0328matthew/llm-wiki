---
title: Ch09 Gauss Elimination
chapter: 9
part: 3
tags:
  - numerical-analysis
  - gauss-elimination
  - linear-algebra
  - pivoting
---

# Ch9. Gauss Elimination

## 9.1 Solving Small Number of Equations

작은 시스템 ($n \le 3$)에서 사용 가능한 직관적 방법들:
1. **Graphical Method** — 두 직선의 교점
2. **Cramer's Rule** — 행렬식 비
3. **Elimination of unknowns**

### Graphical Method (2-D)
$3x_1 + 2x_2 = 18$, $-x_1 + 2x_2 = 2$ → 두 직선 교점에서 해 $(x_1, x_2) = (4, 3)$.

### 특이/병약 시스템

| 상태 | 의미 |
| --- | --- |
| **Singular** | 두 직선이 평행 또는 일치 → 해 없음 / 무수히 많음 |
| **Ill-conditioned** | 거의 평행 → 작은 오차에도 해가 크게 흔들림 |

### Determinants

#### 2×2
$$D = \begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix} = a_{11}a_{22} - a_{12}a_{21}$$

#### 3×3 (cofactor expansion)
$$D = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31})$$

- Singular: $D = 0$
- Ill-conditioned: $D \approx 0$

### Cramer's Rule
$[A]\{x\} = \{b\}$에서 $i$번째 미지수:
$$x_i = \frac{D_i}{D}$$
($D_i$는 $[A]$의 $i$번째 열을 $\{b\}$로 치환한 행렬의 행렬식)

→ 큰 $n$에는 비효율적 ($n!$ 연산), 학술/이론용.

## 9.2 Naive Gauss Elimination

큰 시스템을 풀기 위한 **체계적 알고리즘**. 두 단계로 구성:

### Step 1: Forward Elimination
$[A]$를 **상삼각행렬**로 만들기. $x_1$을 $2 \sim n$행에서 제거 → $x_2$를 $3 \sim n$행에서 제거 → ...

**Pivot Equation**과 **Pivot Element**: 매 단계의 기준이 되는 식과 그 식의 첫 비영 계수.

#### 한 단계 (예: $x_1$ 소거)
첫 식에 $a_{21}/a_{11}$을 곱해 두 번째 식에서 빼면:
$$\left(a_{22} - \frac{a_{21}}{a_{11}}a_{12}\right)x_2 + \cdots + \left(a_{2n} - \frac{a_{21}}{a_{11}}a_{1n}\right)x_n = b_2 - \frac{a_{21}}{a_{11}}b_1$$
$$\Leftrightarrow \quad a'_{22}x_2 + \cdots + a'_{2n}x_n = b'_2$$

$3 \sim n$행도 같은 방식으로 처리. 이후 $a'_{22}$가 **새로운 pivot**이 되어 $x_2$를 소거.

최종적으로 시스템은:
$$\begin{aligned}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n &= b_1 \\
a'_{22}x_2 + \cdots + a'_{2n}x_n &= b'_2 \\
a''_{33}x_3 + \cdots + a''_{3n}x_n &= b''_3 \\
\ddots &\quad\vdots \\
a^{(n-1)}_{nn}x_n &= b^{(n-1)}_n
\end{aligned}$$

### Step 2: Backward Substitution
맨 아래부터 차례로:
$$x_n = \frac{b^{(n-1)}_n}{a^{(n-1)}_{nn}}$$
$$x_i = \frac{b^{(i-1)}_i - \sum_{j=i+1}^{n} a^{(i-1)}_{ij} x_j}{a^{(i-1)}_{ii}}, \quad i = n-1, n-2, \ldots, 1$$

### Operation Counting (FLOPS)
- Forward Elimination: $\dfrac{2n^3}{3} + O(n^2)$
- Backward Substitution: $n^2 + O(n)$
- **Total**: $\dfrac{2n^3}{3} + O(n^2)$ — $n$이 크면 소거 단계가 거의 전부

| $n$ | F-E | B-S | Total | $2n^3/3$ | 소거 % |
| --- | --- | --- | --- | --- | --- |
| 10 | 705 | 100 | 805 | 667 | 87.58% |
| 100 | 671,550 | 10,000 | 681,550 | 666,667 | 98.53% |
| 1000 | $6.67\times 10^8$ | $1\times 10^6$ | $6.68\times 10^8$ | $6.67\times 10^8$ | 99.85% |

### "Naive"의 의미
**0으로 나누는 경우를 회피하지 않음**. 예시:
$$\begin{aligned}
0\cdot x_1 + 2x_2 + 3x_3 &= 8 \\
4x_1 + 6x_2 + 7x_3 &= -3 \\
2x_1 - 3x_2 + 6x_3 &= 5
\end{aligned}$$
첫 식의 pivot이 0! → 다음 절의 **pivoting** 필요.

## 9.3 Pivoting

### Pivot Element가 0 또는 매우 작을 때
- 0이면 분모가 0 → 실패
- 작으면 **round-off error**가 크게 증폭

### Partial Pivoting (실무용)
1. Pivot column 아래에서 **절댓값이 가장 큰 원소**를 찾기
2. 그 행을 pivot 행과 **swap**
3. 그 후 정상적으로 elimination 진행

### Complete Pivoting
- 행과 열을 모두 탐색 — 더 안정적이지만 비용 ↑, 거의 사용 X

> 실제 라이브러리(LAPACK 등)의 LU 분해는 모두 partial pivoting을 기본.

## 9.4 Tridiagonal System

대각 + 부대각만 non-zero인 행렬:
$$\begin{bmatrix}
f_1 & g_1 & & & \\
e_2 & f_2 & g_2 & & \\
 & e_3 & f_3 & g_3 & \\
 & & \ddots & \ddots & \ddots \\
 & & & e_{n-1} & f_{n-1} & g_{n-1} \\
 & & & & e_n & f_n
\end{bmatrix}\begin{Bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{Bmatrix} = \begin{Bmatrix} r_1 \\ r_2 \\ \vdots \\ r_n \end{Bmatrix}$$

### Thomas 알고리즘
이 특수 구조에서는 **O($n$)** 연산만으로 풀 수 있다 (Gauss는 $O(n^3)$).

#### Forward
$$f'_k = f_k - \frac{e_k}{f'_{k-1}} g_{k-1}, \quad r'_k = r_k - \frac{e_k}{f'_{k-1}} r'_{k-1}$$

#### Backward
$$x_n = r'_n / f'_n, \quad x_k = (r'_k - g_k x_{k+1}) / f'_k$$

→ FDM으로 1-D PDE를 풀 때 가장 자주 만나는 시스템.

## 정리
1. Forward Elimination → Backward Substitution
2. 항상 partial pivoting과 함께 사용
3. 큰 시스템에 $O(n^3)$이지만 행렬 구조(tridiagonal, banded, sparse)를 활용하면 더 빨라짐
4. **[[Ch10 LU Factorization]]**: 같은 $[A]$에 대해 여러 $\{b\}$를 풀 때 유리

---

← [[Ch08 선형방정식과 행렬]] | → [[Ch10 LU Factorization]]

#numerical-analysis #ch09 #gauss-elimination
