---
title: "Ch4 — Higher-Order Linear DEs"
tags: [note, math, ode, chapter]
domain: Math
subject: DifferentialEquations
chapter: 4
source: "Zill, *Differential Equations*, 양민진 교수 강의 (PNU)"
created: 2026-05-19
---

⬅︎ [[Ch3 1계 미분방정식 응용]] · [[Math-MOC]] · 다음 → [[Ch5 고계 ODE 모델링]]

## 한 줄 요약
$n$계 선형 ODE의 일반해 = **동차해 + 특수해**. 동차해는 **특성방정식**의 근으로, 특수해는 **미정계수법** or **매개변수 변환법**으로 구한다. **Cauchy-Euler**는 가변계수 특수 케이스.

---

## 4.1 선형 ODE의 이론

### 표준형
$$
a_n(x)y^{(n)} + a_{n-1}(x)y^{(n-1)} + \cdots + a_1(x)y' + a_0(x)y = g(x)
$$
- $g(x) = 0$: **동차(Homogeneous)**
- $g(x) \ne 0$: **비동차(Non-homogeneous)**

### 해의 구조 (중첩 원리)
**동차 ODE의 해**가 $y_1, y_2, \ldots, y_n$이면:
$$
y_h = c_1 y_1 + c_2 y_2 + \cdots + c_n y_n
$$
이 일반해.

### 일차독립과 Wronskian
$y_1, \ldots, y_n$이 일차독립 ⟺
$$
W(y_1, \ldots, y_n) = \begin{vmatrix} y_1 & \cdots & y_n \\ y_1' & \cdots & y_n' \\ \vdots & & \vdots \\ y_1^{(n-1)} & \cdots & y_n^{(n-1)} \end{vmatrix} \ne 0
$$
구간 위의 한 점에서라도 $W \ne 0$이면 독립.

### 비동차 ODE의 일반해
$$
\boxed{\;y = y_h + y_p\;}
$$
- $y_h$: 대응 동차 ODE의 일반해 (complementary function)
- $y_p$: 비동차 ODE의 **임의의** 특수해

---

## 4.2 차수 축소 (Reduction of Order)
2계 동차 ODE $y'' + P(x)y' + Q(x)y = 0$의 한 해 $y_1$을 알 때, **선형독립 두 번째 해**:
$$
y_2 = y_1(x) \int \frac{e^{-\int P(x)\,dx}}{y_1^2(x)}\,dx
$$
(Abel의 항등식 활용)

활용: 특성방정식 중복근, 계수가 가변일 때.

---

## 4.3 상수계수 동차 ODE
$$
a_n y^{(n)} + a_{n-1} y^{(n-1)} + \cdots + a_1 y' + a_0 y = 0
$$

**특성방정식(Auxiliary equation)**: $y = e^{mx}$ 대입
$$
a_n m^n + a_{n-1} m^{n-1} + \cdots + a_0 = 0
$$

### 근 종류별 해
| 근 종류 | 해 형태 |
|---|---|
| **서로 다른 실근** $m_1, m_2, \ldots$ | $e^{m_1 x}, e^{m_2 x}, \ldots$ |
| **중복근** $m$ ($k$중) | $e^{mx}, x e^{mx}, \ldots, x^{k-1} e^{mx}$ |
| **복소근** $\alpha \pm i\beta$ | $e^{\alpha x}\cos\beta x,\ e^{\alpha x}\sin\beta x$ |
| **중복 복소근** | 위에 $x, x^2, \ldots$ 곱한 형태 |

예: $y'' + 2y' + 5y = 0$ → $m^2 + 2m + 5 = 0$ → $m = -1 \pm 2i$
$$
y_h = e^{-x}(c_1 \cos 2x + c_2 \sin 2x)
$$

---

## 4.4 미정계수법 (Undetermined Coefficients) — **중첩 접근**
비동차 ODE에서 $g(x)$가 **특정 형태**일 때, $y_p$의 형태를 미리 추측 후 계수 결정.

### 적용 가능한 $g(x)$
| $g(x)$ | $y_p$ 후보 |
|---|---|
| 다항식 $P_n(x)$ | $A_n x^n + \cdots + A_0$ |
| $e^{\alpha x}$ | $A e^{\alpha x}$ |
| $\sin\beta x,\ \cos\beta x$ | $A\sin\beta x + B\cos\beta x$ |
| $P_n(x) e^{\alpha x}$ | $(A_n x^n + \cdots)e^{\alpha x}$ |
| $P_n(x)e^{\alpha x}\sin\beta x$ | $e^{\alpha x}[(A_n x^n+\cdots)\cos\beta x + (B_n x^n+\cdots)\sin\beta x]$ |

### **중복 규칙(Modification)**
$y_p$ 후보가 $y_h$의 항과 일치하면 → **$x^s$ 곱하기** ($s$ = 일치하는 항 수)

예: $y'' - 3y' + 2y = e^x$. 특성근 $m = 1, 2$, 그런데 $g = e^x$이고 $e^x$가 $y_h$에 있음 → $y_p = Axe^x$.

---

## 4.6 매개변수 변환법 (Variation of Parameters)
미정계수법이 안 통하는 $g(x)$(예: $\tan x$, $\ln x$, $1/x$)에도 적용.

2계 $y'' + P(x)y' + Q(x)y = f(x)$에 대해 $y_h = c_1 y_1 + c_2 y_2$라 할 때:
$$
y_p = u_1(x) y_1(x) + u_2(x) y_2(x)
$$
$$
u_1' = -\frac{y_2\,f(x)}{W},\quad u_2' = \frac{y_1\,f(x)}{W}
$$
여기서 $W = W(y_1, y_2)$ (Wronskian).

**일반화(n계)**: $u_k' = W_k / W$ ($W_k$는 $k$번째 열을 $(0,\ldots,0,f)^T$로 바꾼 행렬식).

---

## 4.7 Cauchy–Euler 방정식 (가변계수 표준형)
$$
a_n x^n y^{(n)} + a_{n-1} x^{n-1} y^{(n-1)} + \cdots + a_0 y = g(x)
$$
**$y = x^m$** 대입 → **보조방정식(indicial equation)**.

### 2계: $ax^2 y'' + bxy' + cy = 0$
보조방정식: $am(m-1) + bm + c = 0$
| 근 | $y_h$ |
|---|---|
| 다른 실근 $m_1, m_2$ | $c_1 x^{m_1} + c_2 x^{m_2}$ |
| 중복근 $m$ | $x^m (c_1 + c_2 \ln x)$ |
| 복소근 $\alpha \pm i\beta$ | $x^\alpha[c_1\cos(\beta\ln x) + c_2\sin(\beta\ln x)]$ |

> 대안: **$x = e^t$ 치환** → 상수계수 ODE로 환원.

---

## 자주 하는 실수
- 미정계수법 중복 규칙 무시 → 무한 루프 / 해 0개
- 복소근에서 $\alpha$ vs $\beta$ 부호 또는 위치
- Wronskian = 0이 항상 일차종속을 의미한다고 오해 (해 공간에서만 성립)
- Cauchy-Euler에 $g(x)\ne 0$인데 미정계수법을 바로 적용 ($t = \ln x$ 변환 후 적용해야 깔끔)
- 매개변수 변환법 분모에 Wronskian — 정의 부호 실수
- 특성근이 0일 때 $e^{0x} = 1$을 누락

## LLM × 이 주제
- SymPy `dsolve()`로 해석해 검증, 손풀이와 비교
- 학생이 $y_p$ 형태를 잘못 선택했을 때 중복 규칙 적용 단계를 자연어로 설명

## 관련 개념
- [[Ch5 고계 ODE 모델링]] — 진동계가 대표 응용
- [[Ch7 Laplace 변환]] — 상수계수 + 초기조건이면 더 깔끔

## 참고
- Zill, Ch. 4
- 강의자료 Ch.4 (1)–(5)
