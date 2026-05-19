---
title: "Ch5 — Modelling with Higher-Order DEs"
tags: [note, math, ode, chapter]
domain: Math
subject: DifferentialEquations
chapter: 5
source: "Zill, *Differential Equations*, 양민진 교수 강의 (PNU)"
created: 2026-05-19
---

⬅︎ [[Ch4 고계 선형 미분방정식]] · [[Math-MOC]] · 다음 → [[Ch7 Laplace 변환]]

## 한 줄 요약
**스프링-질량계와 RLC 회로**가 사실 같은 2계 선형 ODE. 자유진동·감쇠·강제·공명을 통일적으로 다룬다. 경계값 문제(BVP)는 IVP와 본질적으로 다름 (해의 존재·유일성 보장 X).

---

## 5.1.1 스프링/질량계 — **자유 무감쇠 진동**

Newton 2법칙 + Hooke 법칙:
$$
m\frac{d^2 x}{dt^2} = -kx \implies \boxed{\;\frac{d^2 x}{dt^2} + \omega^2 x = 0,\quad \omega = \sqrt{k/m}\;}
$$

해:
$$
x(t) = c_1 \cos\omega t + c_2 \sin\omega t = A\sin(\omega t + \phi)
$$
- 진폭 $A = \sqrt{c_1^2 + c_2^2}$
- 위상각 $\tan\phi = c_1 / c_2$
- 주기 $T = 2\pi/\omega$, 진동수 $f = 1/T$

---

## 5.1.2 자유 감쇠 진동
점성 감쇠항 추가:
$$
m\ddot x + c\dot x + kx = 0 \implies \ddot x + 2\lambda \dot x + \omega^2 x = 0
$$
- $\lambda = c/(2m)$, $\omega = \sqrt{k/m}$
- 특성방정식: $r^2 + 2\lambda r + \omega^2 = 0$
- 근: $r = -\lambda \pm \sqrt{\lambda^2 - \omega^2}$

### 세 가지 경우
| 조건 | 이름 | 거동 | 해 형태 |
|---|---|---|---|
| $\lambda^2 - \omega^2 > 0$ | **과감쇠(Overdamped)** | 진동 없이 감쇠 | $c_1 e^{r_1 t} + c_2 e^{r_2 t}$ |
| $\lambda^2 - \omega^2 = 0$ | **임계감쇠(Critically damped)** | 가장 빠른 비진동 감쇠 | $(c_1 + c_2 t)e^{-\lambda t}$ |
| $\lambda^2 - \omega^2 < 0$ | **저감쇠(Underdamped)** | 감쇠 진동 | $e^{-\lambda t}(c_1\cos\omega_d t + c_2\sin\omega_d t)$ |

- 감쇠 진동수: $\omega_d = \sqrt{\omega^2 - \lambda^2}$
- 임계감쇠가 응답성과 안정성의 최적

---

## 5.1.3 강제 진동 (Driven Motion)
외력 $F(t)$:
$$
m\ddot x + c\dot x + kx = F(t)
$$
- 전체해 = **transient(과도, 동차해)** + **steady-state(정상상태, 특수해)**

### 정현 강제력 $F(t) = F_0\cos\gamma t$
무감쇠($c=0$)일 때 정상상태:
$$
x_p(t) = \frac{F_0/m}{\omega^2 - \gamma^2}\cos\gamma t
$$

#### 공명 (Resonance)
$\gamma = \omega$이면 분모 = 0 → **순수공명**:
$$
x_p(t) = \frac{F_0}{2m\omega} t\sin\omega t \quad (\text{진폭이 시간에 따라 무한 증가})
$$

#### 박동 (Beats)
$\gamma \approx \omega$이지만 $\gamma \ne \omega$일 때 진폭이 천천히 변동.

### 감쇠 + 강제
$$
x_p(t) = \frac{F_0}{\sqrt{(k - m\gamma^2)^2 + (c\gamma)^2}}\sin(\gamma t - \phi)
$$
- 진폭 최대(공명): $\gamma_\text{res} = \sqrt{\omega^2 - 2\lambda^2}$
- 감쇠가 약하면 $\gamma_\text{res} \approx \omega$

---

## 5.1.4 직렬 RLC 회로 (전기-역학 유사성)
$$
L\ddot q + R\dot q + \frac{1}{C}q = E(t)
$$
| 역학 | 전기 |
|---|---|
| 질량 $m$ | 인덕턴스 $L$ |
| 감쇠계수 $c$ | 저항 $R$ |
| 스프링상수 $k$ | $1/C$ (= elastance) |
| 외력 $F(t)$ | 기전력 $E(t)$ |
| 변위 $x$ | 전하 $q$ |
| 속도 $\dot x$ | 전류 $i$ |

→ 한쪽 풀이를 알면 다른 쪽도 즉시 풀이.

---

## 5.2 선형 모델 — 경계값 문제 (BVP)

### IVP vs BVP
- **IVP**: 같은 점에서 조건 $n$개 → Picard 정리로 해 존재·유일성 보장
- **BVP**: 서로 다른 점에서 조건 → **해가 없거나, 하나거나, 무한 개**

### 예: 휘는 보 (Beam Deflection)
$$
EI \frac{d^4 y}{dx^4} = w(x)
$$
4계 ODE — 양 끝 지지 조건에 따라 4개 경계조건 필요. 대표 경계:
| 지지 | 조건 |
|---|---|
| 자유단 | $y'' = 0,\ y''' = 0$ |
| 고정단 | $y = 0,\ y' = 0$ |
| 단순지지 | $y = 0,\ y'' = 0$ |

### 좌굴 (Buckling, Euler column)
$$
EI y'' + Py = 0,\quad y(0) = y(L) = 0
$$
**고유값 문제** — 자명하지 않은 해는 특정 $P$에서만:
$$
P_n = \frac{n^2\pi^2 EI}{L^2},\quad y_n = \sin\frac{n\pi x}{L}
$$
최소 좌굴하중: $P_\text{cr} = \pi^2 EI/L^2$.

> 이게 [[Lecture02 확산과 기계적 성질|재료역학]]에서 말하는 좌굴 강도.

---

## 모델링 체크리스트
1. **자유물체도** (스프링·감쇠·중력·외력)
2. Newton 2법칙으로 식 수립
3. 부호 규약 (변위 방향, 평형점 기준)
4. 초기/경계 조건 명시
5. 차원 일관성 검토

---

## 자주 하는 실수
- 평형점을 0으로 잡지 않아 중력항이 계속 남는 경우 (보통 평형 위치로 잡으면 사라짐)
- $\omega^2 = k/m$에서 제곱근 누락
- 박동과 공명 구분 (γ = ω는 공명, γ ≈ ω는 박동)
- BVP에서 IVP처럼 일반해 + 두 조건으로 정의 시도 → 일치 안 함을 모름
- 좌굴 고유값에서 $n = 0$이 자명해임을 모름

## LLM × 이 주제
- 스프링-질량-감쇠 시뮬레이션 (SciPy `solve_ivp`) + LLM 해설
- 같은 식이 회로/구조/진동으로 어떻게 매핑되는지 자동 변환

## 관련 개념
- [[Ch4 고계 선형 미분방정식]] — 풀이 도구
- [[Ch7 Laplace 변환]] — 초기조건 포함 풀이를 깔끔히
- [[Chap05 검사체적의 질량·에너지 해석]] — 동적 시스템 사고

## 참고
- Zill, Ch. 5
- 강의자료 Ch.5
