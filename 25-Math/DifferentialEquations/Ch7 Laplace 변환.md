---
title: "Ch7 — The Laplace Transform"
tags: [note, math, ode, chapter]
domain: Math
subject: DifferentialEquations
chapter: 7
source: "Zill, *Differential Equations*, 양민진 교수 강의 (PNU)"
created: 2026-05-19
---

⬅︎ [[Ch5 고계 ODE 모델링]] · [[Math-MOC]]

## 한 줄 요약
**시간 미분방정식 → 대수방정식**으로 옮기는 적분 변환. 초기조건이 변환식에 직접 들어가서, 상수계수 + IVP에서 가장 강력. 불연속·임펄스·주기 입력에 특히 유리.

---

## 7.1 Laplace 변환 정의
$$
\boxed{\;\mathcal{L}\{f(t)\}(s) = F(s) = \int_0^\infty e^{-st} f(t)\,dt\;}
$$
- 수렴역: $s > c$ ($f(t)$가 **piecewise continuous + 지수 위계 ($|f| \le M e^{ct}$)**)

### 기본 변환표
| $f(t)$ | $F(s)$ |
|---|---|
| $1$ | $1/s$ |
| $t^n$ | $n!/s^{n+1}$ |
| $e^{at}$ | $1/(s-a)$ |
| $\sin kt$ | $k/(s^2 + k^2)$ |
| $\cos kt$ | $s/(s^2 + k^2)$ |
| $\sinh kt$ | $k/(s^2 - k^2)$ |
| $\cosh kt$ | $s/(s^2 - k^2)$ |

### 선형성
$$
\mathcal{L}\{\alpha f + \beta g\} = \alpha F(s) + \beta G(s)
$$

---

## 7.2 역변환과 도함수의 변환

### 역변환 (Inverse)
$$
f(t) = \mathcal{L}^{-1}\{F(s)\}
$$
표 + **부분분수 분해(partial fractions)** 가 주된 도구.

### 도함수의 변환 — **IVP 풀이의 핵심**
$$
\mathcal{L}\{f'(t)\} = sF(s) - f(0)
$$
$$
\mathcal{L}\{f''(t)\} = s^2 F(s) - s f(0) - f'(0)
$$
일반:
$$
\mathcal{L}\{f^{(n)}\} = s^n F(s) - s^{n-1}f(0) - \cdots - f^{(n-1)}(0)
$$

### Laplace로 IVP 풀이 절차
1. 양변에 $\mathcal{L}$ 적용 — 초기조건 자동 삽입
2. $Y(s)$에 대해 대수적으로 풀이
3. 부분분수 + 표로 역변환 → $y(t)$

예: $y'' + y = 0,\ y(0)=1,\ y'(0)=0$ →
$s^2 Y - s + Y = 0 \Rightarrow Y = s/(s^2 + 1) \Rightarrow y = \cos t$

---

## 7.3 연산 성질 I — 평행이동

### s축 평행이동 (First shifting theorem)
$$
\boxed{\;\mathcal{L}\{e^{at} f(t)\} = F(s - a)\;}
$$
예: $\mathcal{L}\{e^{2t}\sin 3t\} = 3/((s-2)^2 + 9)$

### t축 평행이동 (Second shifting theorem) — **단위계단함수**
**Heaviside 함수**:
$$
\mathcal{U}(t - a) = \begin{cases} 0, & t < a \\ 1, & t \ge a \end{cases}
$$
$$
\boxed{\;\mathcal{L}\{f(t-a)\,\mathcal{U}(t-a)\} = e^{-as}F(s)\;}
$$
또는 대안형: $\mathcal{L}\{g(t)\,\mathcal{U}(t-a)\} = e^{-as}\mathcal{L}\{g(t+a)\}$

→ **구간별로 정의된 입력**(예: 스위치 ON/OFF)을 단일 식으로 처리.

---

## 7.4 연산 성질 II

### 7.4.1 변환의 도함수
$$
\mathcal{L}\{t^n f(t)\} = (-1)^n \frac{d^n}{ds^n} F(s)
$$
예: $\mathcal{L}\{t\sin kt\} = 2ks/(s^2+k^2)^2$

### 7.4.2 적분의 변환 + 컨볼루션
**적분 변환**:
$$
\mathcal{L}\left\{\int_0^t f(\tau)\,d\tau\right\} = \frac{F(s)}{s}
$$

**컨볼루션 정리**:
$$
(f * g)(t) = \int_0^t f(\tau) g(t-\tau)\,d\tau
$$
$$
\boxed{\;\mathcal{L}\{f * g\} = F(s)\,G(s)\;}
$$
→ 곱 $F(s)G(s)$의 역변환은 컨볼루션으로 계산.

### 7.4.3 주기함수
주기 $T$인 $f$:
$$
\mathcal{L}\{f(t)\} = \frac{1}{1 - e^{-sT}}\int_0^T e^{-st}f(t)\,dt
$$

---

## 7.5 Dirac 델타 함수 (단위 임펄스)
$$
\delta(t - t_0) = \lim_{\epsilon \to 0^+} \delta_\epsilon(t - t_0)
$$
성질:
- $\int_{-\infty}^\infty \delta(t-t_0)\,dt = 1$
- $\int_{-\infty}^\infty f(t)\delta(t-t_0)\,dt = f(t_0)$ (**sifting**)

**Laplace**:
$$
\boxed{\;\mathcal{L}\{\delta(t - t_0)\} = e^{-st_0},\quad \mathcal{L}\{\delta(t)\} = 1\;}
$$
→ 임펄스 입력에 대한 **충격 응답(impulse response)**.

---

## 7.6 연립 선형 ODE 시스템
변수별로 Laplace 변환 → 변수별 $X(s), Y(s)$ 식을 **대수 연립식**으로 처리:
$$
\begin{cases} sX - x_0 = a_{11}X + a_{12}Y + F_1(s) \\ sY - y_0 = a_{21}X + a_{22}Y + F_2(s) \end{cases}
$$
크라메르 법칙 또는 역행렬로 $X, Y$ 풀이 → 역변환.

---

## 활용 분야
- **회로 해석**: RLC + 스위칭 = $\delta, \mathcal{U}$ 입력
- **제어**: 전달함수 $H(s) = Y(s)/X(s)$가 곧 Laplace 결과
- **신호 처리**: 푸리에 변환의 일반화 (수렴 조건 완화)
- [[Ch5 고계 ODE 모델링|진동·회로]] 풀이의 표준

---

## 자주 하는 실수
- $\mathcal{L}\{f''\}$에서 초기조건 항 부호 누락
- s축 vs t축 평행이동 혼동
- 단위계단함수 적용 시 $f(t-a)$가 아닌 $f(t)$로 대입
- 컨볼루션 적분 한계 (0부터 t까지, $\tau$ 방향)
- 부분분수에서 중복근 항 누락 ($1/(s-a)^2$에는 $A/(s-a) + B/(s-a)^2$ 둘 다)
- $\delta(t)$의 Laplace는 $1$ (단순), $\delta(t-t_0)$는 $e^{-st_0}$

## LLM × 이 주제
- SymPy `laplace_transform` / `inverse_laplace_transform` 활용
- 회로/스프링 IVP를 자연어로 → 표 이용해 단계별 풀이 설명
- 전달함수 부분분수 + Bode plot 시각화 → 제어 입문

## 관련 개념
- [[Ch4 고계 선형 미분방정식]]
- [[Ch5 고계 ODE 모델링]] — RLC, 스프링/질량
- Fourier 급수와 변환 *(미작성)*

## 참고
- Zill, Ch. 7
- 강의자료 Ch.7 (1)–(5)
