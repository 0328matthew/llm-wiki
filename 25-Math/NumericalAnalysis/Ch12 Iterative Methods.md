---
title: Ch12 Iterative Methods (Jacobi, Gauss-Seidel, SOR)
chapter: 12
part: 3
tags:
  - numerical-analysis
  - iterative-method
  - gauss-seidel
  - jacobi
  - newton-raphson
---

# Ch12. Iterative Methods

> **직접법(Gauss/LU)** vs **반복법(Iterative)**: 큰 sparse 시스템에서는 직접법이 너무 비싸기 때문에 반복법을 사용. 또한 **비선형 시스템**은 반복법이 사실상 필수.

## 12.1 Linear Systems: Gauss-Seidel

### 기본 아이디어 (3×3 예)
각 식에서 대각 항을 분리해 자기 변수를 좌변으로:
$$x_1 = \frac{b_1 - a_{12}x_2 - a_{13}x_3}{a_{11}}, \quad x_2 = \frac{b_2 - a_{21}x_1 - a_{23}x_3}{a_{22}}, \quad x_3 = \frac{b_3 - a_{31}x_1 - a_{32}x_2}{a_{33}}$$
($a_{ii} \ne 0$ 필요)

### Jacobi vs Gauss-Seidel

**Jacobi**: 이전 반복값만 사용
$$x_i^{(j)} = \frac{b_i - \sum_{k \ne i} a_{ik}\, x_k^{(j-1)}}{a_{ii}}$$

**Gauss-Seidel**: 방금 계산된 새 값을 즉시 사용
$$x_i^{(j)} = \frac{b_i - \sum_{k<i} a_{ik}\,x_k^{(j)} - \sum_{k>i} a_{ik}\,x_k^{(j-1)}}{a_{ii}}$$

→ G-S가 대체로 더 빠르게 수렴 (메모리도 절약).

### 정지 조건
$$\varepsilon_{a,i} = \left|\frac{x_i^{(j)} - x_i^{(j-1)}}{x_i^{(j)}}\right| \times 100\% \le \varepsilon_s$$

모든 $i$에 대해 만족할 때까지 반복.

### Ex 12.1 — Gauss-Seidel 적용
$$\begin{aligned}
3x_1 - 0.1x_2 - 0.2x_3 &= 7.85 \\
0.1x_1 + 7x_2 - 0.3x_3 &= -19.3 \\
0.3x_1 - 0.2x_2 + 10x_3 &= 71.4
\end{aligned}$$
참 해: $\{x\} = (3, -2.5, 7)^T$.

#### 1차 반복 (초기 $x = 0$)
$$x_1 = \frac{7.85}{3} = 2.616667$$
$$x_2 = \frac{-19.3 - 0.1(2.616667)}{7} = -2.794524$$
$$x_3 = \frac{71.4 - 0.3(2.616667) + 0.2(-2.794524)}{10} = 7.005610$$

#### 2차 반복
$x_1 = 2.990557$, $x_2 = -2.499625$, $x_3 = 7.000291$  
$\varepsilon_{a,1} = 12.5\%$, $\varepsilon_{a,2} = 11.8\%$, $\varepsilon_{a,3} = 0.076\%$

→ 매우 빠르게 참 해로 수렴.

### 수렴 조건: Diagonal Dominance
$$\boxed{|a_{ii}| > \sum_{j=1, j\ne i}^{n} |a_{ij}|, \quad \text{for each } i}$$

**대각 우세 시스템(diagonally dominant)**이면 임의의 초기값에서 G-S/Jacobi가 항상 수렴.

### Relaxation (완화 기법)
G-S의 결과를 이전 값과 가중평균:
$$x_i^{\text{new}} = \lambda\, x_i^{\text{new}} + (1 - \lambda)\, x_i^{\text{old}}$$

가중치 $\lambda$ 선택:

| 범위 | 명칭 | 효과 |
| --- | --- | --- |
| $\lambda = 1$ | 일반 G-S | — |
| $0 \le \lambda < 1$ | **Under-relaxation** | 진동 감쇠, 비수렴 시스템 수렴 유도 |
| $1 < \lambda \le 2$ | **Over-relaxation (SOR)** | 수렴 가속 |

SOR (**Successive Over-Relaxation**)은 1세대 PDE 솔버의 핵심 기술. 최적 $\lambda$는 시스템에 따라 다름 (대개 1.2~1.8).

## 12.2 Nonlinear Systems

### 비선형 연립 방정식
$$f_1(x_1, \ldots, x_n) = 0, \;\ldots,\; f_n(x_1, \ldots, x_n) = 0$$

예시:
$$x_1^2 + x_1 x_2 = 10, \quad x_2 + 3 x_1 x_2^2 = 57$$
참 해: $(2, 3)$.

### Successive Substitution (고정점 반복)
[[Ch06 Open Methods#6.1 Simple Fixed Point Iteration|단변수 fixed-point]]를 다변수로 확장.
- 수렴 여부는 식의 변형 방식에 강하게 의존
- 초기값이 좋아야 함
- 비선형 시스템에는 **제한적 유용성**

### Multivariate Newton-Raphson

각 함수에 대해 1차 Taylor 전개 ($n=2$ 경우):
$$f_{k,i+1} = f_{k,i} + (x_{1,i+1} - x_{1,i})\frac{\partial f_{k,i}}{\partial x_1} + (x_{2,i+1} - x_{2,i})\frac{\partial f_{k,i}}{\partial x_2} = 0$$

행렬 표기:
$$\boxed{\{f\} + [J]\{x_{i+1} - x_i\} = 0 \;\Rightarrow\; \{x_{i+1}\} = \{x_i\} - [J]^{-1}\{f\}}$$

#### Jacobian Matrix
$$[J] = \begin{bmatrix}
\frac{\partial f_1}{\partial x_1} & \frac{\partial f_1}{\partial x_2} & \cdots & \frac{\partial f_1}{\partial x_n} \\
\frac{\partial f_2}{\partial x_1} & \frac{\partial f_2}{\partial x_2} & \cdots & \frac{\partial f_2}{\partial x_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial f_n}{\partial x_1} & \frac{\partial f_n}{\partial x_2} & \cdots & \frac{\partial f_n}{\partial x_n}
\end{bmatrix}$$

→ 매 반복마다 $[J]$를 평가하고 **선형 시스템** $[J]\{\Delta x\} = -\{f\}$를 풀어야 함.

### Ex 12.3 — Newton-Raphson for $f_1, f_2$
$f_1 = x_1^2 + x_1 x_2 - 10$, $f_2 = x_2 + 3 x_1 x_2^2 - 57$  
초기 $(1.5, 3.5)$:

#### Jacobian 평가
$$[J] = \begin{bmatrix} 2x_1 + x_2 & x_1 \\ 3x_2^2 & 1 + 6 x_1 x_2 \end{bmatrix}_{(1.5, 3.5)} = \begin{bmatrix} 6.5 & 1.5 \\ 36.75 & 32.5 \end{bmatrix}$$

$D = 6.5 \cdot 32.5 - 1.5 \cdot 36.75 = 156.125$

#### 함수값
$f_{1,0} = -2.5$, $f_{2,0} = 1.625$

#### 다음 반복
$$x_1 = 1.5 - \frac{-2.5(32.5) - 1.625(1.5)}{156.125} = 2.03603$$
$$x_2 = 3.5 - \frac{1.625(6.5) - (-2.5)(36.75)}{156.125} = 2.84388$$

→ 곧 참 해 $(2, 3)$으로 수렴.

## 정리

| 방법 | 적용 | 수렴 조건 | 특징 |
| --- | --- | --- | --- |
| Jacobi | 선형 | diagonally dominant | 단순, 병렬화 쉬움 |
| Gauss-Seidel | 선형 | 같음 | Jacobi보다 보통 빠름 |
| SOR | 선형 | 같음 | $\lambda$ 튜닝으로 가속 |
| Successive Substitution | 비선형 | $|g'|<1$ (다변수) | 발산 위험 |
| Multivariate N-R | 비선형 | 좋은 초기값 + $[J]$ 비특이 | 이차 수렴, FEM 비선형 해법의 표준 |

---

← [[Ch11 Matrix Inverse and Condition]] | → [[Ch13 Eigenvalues]]

#numerical-analysis #ch12 #iterative-method #gauss-seidel
