---
title: Ch24 Boundary Value Problems (Shooting, Finite Difference)
chapter: 24
part: 6
tags:
  - numerical-analysis
  - boundary-value-problem
  - shooting-method
  - finite-difference
  - bvp
---

# Ch24. Boundary-Value Problems (BVP)

## 24.1 Introduction

### IVP vs BVP

| 구분 | Initial-Value Problem | Boundary-Value Problem |
| --- | --- | --- |
| 조건 위치 | **같은 $t$**(시작점)에 모두 부여 | **서로 다른 $x$**(양 끝)에 부여 |
| 예 | $y(0) = y_0$, $y'(0) = y_0'$ | $y(0) = y_0$, $y(L) = y_L$ |
| 적분 변수 | 보통 시간 | 보통 공간 |

→ 공간에 대한 적분에서는 BVP가 더 자연스럽다 (정상상태 온도, 빔 처짐 등).

### 모델 문제 — 1D Heated Rod
양 끝벽($T_a$, $T_b$) 사이의 봉, 측면 공기와 대류:

미소 요소 $\Delta x$에 대한 열 평형:
$$0 = q(x)A_c - q(x + \Delta x)A_c + h A_s (T_\infty - T)$$

부피로 나누고 $\Delta x \to 0$, Fourier 법칙 $q = -k\dfrac{dT}{dx}$ 대입:
$$\boxed{0 = \frac{d^2 T}{dx^2} + h'(T_\infty - T)}$$
- $h' = 2h/(rk)$: bulk heat transfer parameter $[\text{m}^{-2}]$
- 경계조건 (Dirichlet): $T(0) = T_a, \; T(L) = T_b$

## Ex 24.1 — 해석해

$L = 10\,\text{m}$, $h' = 0.05\,\text{m}^{-2}$, $T_\infty = 200\,\text{K}$, $T(0) = 300$, $T(10) = 400$.

ODE 재정리:
$$\frac{d^2 T}{dx^2} - h' T = -h' T_\infty$$

특성방정식 $\lambda^2 - h' = 0 \Rightarrow \lambda = \pm \sqrt{h'}$. 일반해:
$$T = T_\infty + A e^{\lambda x} + B e^{-\lambda x}$$

경계조건 대입:
$$A = \frac{(T_a - T_\infty)e^{-\lambda L} - (T_b - T_\infty)}{e^{-\lambda L} - e^{\lambda L}}, \quad B = \frac{(T_b - T_\infty) - (T_a - T_\infty)e^{\lambda L}}{e^{-\lambda L} - e^{\lambda L}}$$

값 대입: $A = 20.4671$, $B = 79.5329$.

$$T(x) = 200 + 20.4671\,e^{\sqrt{0.05}\,x} + 79.5329\,e^{-\sqrt{0.05}\,x}$$

→ 곡선이 U-shape (안쪽에서 공기와 평형, 양끝에서 벽 온도). 보통 BVP는 해석해를 얻기 어려우므로 수치해법이 필요.

## 24.2 Shooting Method

**아이디어**: BVP를 IVP로 변환해 [[Ch22 Initial Value Problems — Euler Heun RK|RK 등]]으로 풀고, 끝점 조건이 맞을 때까지 **초기 기울기를 시행착오로 조정**.

### 2nd-order ODE → 1st-order 시스템
$T'' + h'(T_\infty - T) = 0$를 두 1차 ODE로:
$$\frac{dT}{dx} = z, \qquad \frac{dz}{dx} = -h'(T_\infty - T)$$

초기조건:
- $T(0) = T_a$ (주어짐)
- $z(0) = ?$ (미지) → 추정값 $z_a$로 시작

### Trial and Error

1. 시도 1: $z(0) = z_{a,1}$ → IVP 적분 → $T(L) = T_{b,1}$ 얻음
2. 시도 2: $z(0) = z_{a,2}$ → IVP 적분 → $T(L) = T_{b,2}$ 얻음
3. **선형 보간**으로 정확한 $z_a$ 예측 (ODE가 선형일 때 정확):
$$\boxed{z_a = z_{a,1} + \frac{z_{a,2} - z_{a,1}}{T_{b,2} - T_{b,1}}(T_b - T_{b,1})}$$

비선형 ODE에서는 [[Ch05 Bracketing Methods|Bisection]]·[[Ch06 Open Methods|Newton-Raphson 등]] 근 찾기 알고리즘 사용.

### Ex 24.2 — Shooting
같은 봉 문제.

$z_{a,1} = -5$ → $T(10) = 569.7539$ (너무 큼)  
$z_{a,2} = -20$ → $T(10) = 259.5131$ (너무 작음)  

선형 보간:
$$z_a = -5 + (-20 - (-5))\frac{400 - 569.7539}{259.5131 - 569.7539} = -13.2075$$

→ $z_a = -13.2075\,\text{K/m}$로 적분하면 $T(10) = 400\,\text{K}$ 정확히 도달!

### Derivative BCs
- **Dirichlet BC**: 값 고정 ($T(0) = T_a$)
- **Neumann BC**: 미분값 고정 ($T'(0) = T_a'$)

Shooting에서는 derivative BC도 쉽게 처리 가능 — 초기 미분값이 직접 BC로 주어지면, 다른 한쪽 ($T$ 또는 $z$)을 추정해 같은 trial-and-error.

## 24.3 Finite Difference Method

전역적 접근: 도함수를 **유한차분으로 대체** → **선형 시스템** 풀이.

### 이산화
봉을 $n$개 노드로 분할 ($T_0, T_1, \ldots, T_n$), $\Delta x = L/n$.

내부 노드 $i$에서 centered FD:
$$\frac{d^2 T}{dx^2} \approx \frac{T_{i-1} - 2T_i + T_{i+1}}{\Delta x^2}$$

ODE에 대입:
$$\frac{T_{i-1} - 2T_i + T_{i+1}}{\Delta x^2} + h'(T_\infty - T_i) = 0$$

정리:
$$\boxed{-T_{i-1} + (2 + h' \Delta x^2)\,T_i - T_{i+1} = h' \Delta x^2 T_\infty}$$

- $n-1$개의 내부 노드 → **$n-1$개의 일차 방정식**
- $T_0, T_n$은 BC로 주어짐 → 우변에 흡수
- 결과는 **삼중대각** + **대각 우세** → [[Ch09 Gauss Elimination#9.4 Tridiagonal System|Thomas 알고리즘]] 또는 [[Ch12 Iterative Methods|Gauss-Seidel]]로 효율적 풀이

### Ex 24.5 — Heated Rod, FD
$\Delta x = 2\,\text{m}$, $n = 5$ (4개 내부 노드), $h' \Delta x^2 = 0.2$, $h' \Delta x^2 T_\infty = 40$.

각 내부 노드 ($T_1 \ldots T_4$)에 대해:
- Node 1: $-T_0 + 2.2 T_1 - T_2 = 40 \Rightarrow 2.2 T_1 - T_2 = 340$ (T_0 = 300 흡수)
- Node 2: $-T_1 + 2.2 T_2 - T_3 = 40$
- Node 3: $-T_2 + 2.2 T_3 - T_4 = 40$
- Node 4: $-T_3 + 2.2 T_4 - T_5 = 40 \Rightarrow -T_3 + 2.2 T_4 = 440$ (T_5 = 400 흡수)

행렬:
$$\begin{bmatrix} 2.2 & -1 & 0 & 0 \\ -1 & 2.2 & -1 & 0 \\ 0 & -1 & 2.2 & -1 \\ 0 & 0 & -1 & 2.2 \end{bmatrix} \begin{Bmatrix} T_1 \\ T_2 \\ T_3 \\ T_4 \end{Bmatrix} = \begin{Bmatrix} 340 \\ 40 \\ 40 \\ 440 \end{Bmatrix}$$

MATLAB:
```matlab
>> A = [2.2 -1 0 0; -1 2.2 -1 0; 0 -1 2.2 -1; 0 0 -1 2.2];
>> b = [340 40 40 440]';
>> T = A\b
T = 283.2660
    283.1853
    299.7416
    336.2462
```

### 해석해와 비교

| $x$ | Analytic | Shooting | Finite Difference |
| --- | --- | --- | --- |
| 0 | 300 | 300 | 300 |
| 2 | 282.8634 | 282.8889 | 283.2660 |
| 4 | 282.5775 | 282.6158 | 283.1853 |
| 6 | 299.0843 | 299.1254 | 299.7416 |
| 8 | 335.7404 | 335.7718 | 336.2462 |
| 10 | 400 | 400 | 400 |

→ Shooting이 더 정확 (RK4 사용 시), FD는 $\Delta x$ 의존. $\Delta x$를 줄이면 FD도 개선.

### Derivative BC (Neumann) 처리

$x = 0$에서 $\dfrac{dT}{dx} = T_a'$가 주어진 경우.

**가상 노드** $T_{-1}$ 도입, centered FD:
$$\frac{dT}{dx}\bigg|_0 = \frac{T_1 - T_{-1}}{2\Delta x} = T_a' \Rightarrow T_{-1} = T_1 - 2\Delta x\,T_a'$$

Node 0의 일반 FD 식 $-T_{-1} + (2 + h'\Delta x^2)T_0 - T_1 = h'\Delta x^2 T_\infty$에 대입:
$$\boxed{(2 + h'\Delta x^2)T_0 - 2T_1 = h'\Delta x^2 T_\infty - 2\Delta x\,T_a'}$$

→ Neumann BC를 시스템에 자연스럽게 포함.

### Ex 24.6 — Insulated Left End

$T_a' = 0$ ($x=0$ 단열), $T_b = 400$.

Node 0: $2.2 T_0 - 2 T_1 = 40$  
Node 1~4: 그대로

행렬 (5×5):
$$\begin{bmatrix} 2.2 & -2 & & & \\ -1 & 2.2 & -1 & & \\ & -1 & 2.2 & -1 & \\ & & -1 & 2.2 & -1 \\ & & & -1 & 2.2 \end{bmatrix} \{T\} = \{40, 40, 40, 40, 440\}^T$$

해: $T_0 = 243.03$, $T_1 = 247.33$, $T_2 = 261.10$, $T_3 = 287.09$, $T_4 = 330.49$.

$T_a' = -20$일 때: 우변 [120, 40, 40, 40, 440] → $T_0 = 328.27, \ldots, T_4 = 339.10$. 끝부분에서 더 가파른 기울기.

### Nonlinear ODE — Successive Substitution

복사항 추가:
$$0 = \frac{d^2 T}{dx^2} + h'(T_\infty - T) + \sigma'(T_\infty^4 - T^4)$$

FD 이산화:
$$-T_{i-1} + (2 + h'\Delta x^2)T_i - T_{i+1} = h'\Delta x^2 T_\infty + \sigma' \Delta x^2 (T_\infty^4 - T_i^4)$$

비선형 항을 **이전 반복의 값**으로 평가 → Gauss-Seidel처럼 점진적으로 수렴.

각 노드 업데이트:
$$T_i = \frac{h'\Delta x^2 T_\infty + \sigma'\Delta x^2 (T_\infty^4 - T_i^4) + T_{i-1} + T_{i+1}}{2 + h'\Delta x^2}$$

#### Ex 24.7
$\sigma' = 2.7 \times 10^{-9}\,\text{K}^{-3}\text{m}^{-2}$ 추가.

수렴까지 반복 → $T_0 = 300, T_1 = 250.48, T_2 = 236.30, T_3 = 245.76, T_4 = 286.49, T_5 = 400$.

복사 효과로 봉 전체 온도가 단순 대류 경우보다 더 낮아짐 (광선으로 열손실).

### Newton-Raphson 대안
큰 비선형성·여러 변수에서는 다변량 Newton-Raphson ([[Ch12 Iterative Methods|Ch12 참고]]) 사용. Jacobian 구성 후 선형화 반복.

## Shooting vs Finite Difference

| 항목 | Shooting | Finite Difference |
| --- | --- | --- |
| 변환 | BVP → IVP + 근 찾기 | 도함수 → 차분 + 선형 시스템 |
| 메모리 | 적음 (1D 적분) | 큼 (행렬) |
| 적합 ODE | **선형/약한 비선형** | **선형/비선형 모두** |
| 끝점 BC | Dirichlet/Neumann 자연 처리 | Neumann은 가상노드 필요 |
| 정확도 | RK4 사용 시 매우 높음 | $\Delta x$ 의존 ($O(\Delta x^2)$) |
| 안정성 | ODE가 불안정하면 발산 가능 | 항상 안정 |
| 확장성(고차원) | 어려움 | **2D/3D로 자연 확장** (PDE) |

→ **단순 1D BVP**: Shooting이 빠르고 정확  
→ **복잡 비선형 / 2D 이상**: Finite Difference가 표준

## 정리

- BVP는 **공간 적분**에 흔한 형태
- **Shooting**: BVP를 IVP로 환원, 초기 기울기를 trial-and-error로 조정. 선형 ODE에서는 2번의 시도 + 보간으로 정확.
- **Finite Difference**: 노드별 FD 이산화 → 삼중대각 선형 시스템. 비선형은 successive substitution / Newton-Raphson.
- **Neumann BC**: 가상 노드(ghost point)로 처리.
- BVP의 자연스러운 확장: **PDE** (열전도, Laplace 방정식, Poisson 방정식 등)

---

← [[Ch22 Initial Value Problems — Euler Heun RK]] | ↑ [[Numerical Analysis|과목 종합]]

#numerical-analysis #ch24 #boundary-value-problem #shooting-method #finite-difference
