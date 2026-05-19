---
title: "SM-4 — Bending, Shear & Deflection (Ch.4·5·9)"
tags: [note, me, solid-mechanics, lecture]
domain: ME
subject: SolidMechanics
section: 4
source: "이태경 교수 강의 (PNU 기계공학부)"
created: 2026-05-19
---

⬅︎ [[SM3 비틀림]] · [[ME-MOC]]

## 한 줄 요약
보(beam)의 분석 풀 흐름: **SFD·BMD → flexure formula(굽힘응력) → shear formula(전단응력) → deflection(처짐)**. 마지막은 $EI y'' = M(x)$의 적분 문제로 귀결.

---

# Part 1. 전단력과 굽힘 모멘트 (Ch.4)

## 보(Beam)와 종류
- **보**: 측방향 하중을 받는 구조부재
- 평면 굽힘(plane of bending): 모든 하중과 처짐이 같은 평면 내
- 종류:
  - **Simple beam (단순지지)**: 한쪽 핀, 한쪽 롤러
  - **Cantilever (외팔보)**: 한쪽 고정, 한쪽 자유
  - **Overhanging beam**: 지지점 바깥으로 돌출

## 부호 규약
- **(+) 전단력 $V$**: 미소 요소를 시계방향(CW)으로 비트는 방향
- **(+) 굽힘 모멘트 $M$**: 위쪽을 압축, 아래쪽을 인장 (sagging)

## 정정 구조 해석 절차
1. 단면법으로 임의 $x$에서 절단
2. 절단한 한쪽 FBD 작성 (내력 $V, M$ 포함)
3. $\sum F = 0,\ \sum M = 0$
4. 구간별로 $V(x), M(x)$ 식 유도

## $q$–$V$–$M$ 관계 (분포하중 $q$)
$$
\boxed{\;\frac{dV}{dx} = -q,\quad \frac{dM}{dx} = V\;}
$$
$$
V_B - V_A = -\int_A^B q\,dx,\quad M_B - M_A = \int_A^B V\,dx
$$
→ **SFD 곡선 아래 면적 = BMD 변화량**

## SFD & BMD 정성적 규칙
| 영역 | SFD | BMD |
|---|---|---|
| 하중 없음 | 수평선 | 직선 |
| 등분포 하중 | 직선 | 포물선 |
| 집중하중 | 점프(불연속) | 기울기 변화 (꺾임) |
| 집중모멘트 | 변화 없음 | 점프 |

$V = 0$ 지점이 곧 **$M$이 극값**.

## 내부 이완(Internal Releases)
- Axial release / Torque release / Shear release / Moment release
- 해당 내력 = 0인 경계를 도입 → 양쪽 FBD 분할해서 풀이
- 부정정 → 정정으로 변환하는 도구

---

# Part 2. 보의 응력 (Ch.5)

## 곡률 (Curvature)
$$
\kappa = \frac{1}{\rho} = \frac{d\theta}{dx}
$$
- 작은 처짐 가정 하 $\kappa \approx d^2y/dx^2$
- 순수굽힘($dM/dx = 0$): **곡률 일정**
- 비균일 굽힘: 곡률 변화

## 순수 굽힘 가정
- 전단력 $V = 0$인 구역
- 평면 단면이 변형 후에도 평면 유지(Euler-Bernoulli)
- 재료는 선형탄성, 등방, 균질

## 종방향 변형률·응력
**중립면(Neutral Surface)**: 종방향 길이가 변하지 않는 평면. 단면과 만나는 선이 **중립축(NA)**.

선형 분포:
$$
\varepsilon_x = -\frac{y}{\rho} = -\kappa y,\quad \sigma_x = -E\kappa y
$$
($y > 0$이 NA 위쪽이고 $\kappa > 0$이면 위쪽 압축, 아래쪽 인장)

## 중립축 위치 = 도심
$$
\int \sigma_x\,dA = -E\kappa\int y\,dA = 0 \implies \bar y = 0
$$
- 단면이 대칭이면 NA가 자동으로 **도심(centroid)** 을 지남

## Moment–Curvature 관계
$$
M = \int (-\sigma_x)\,y\,dA = E\kappa\int y^2\,dA = E\kappa I_z
$$
$$
\boxed{\;\kappa = \frac{1}{\rho} = \frac{M}{EI_z}\;}
$$
- **$EI$**: 굽힘 강성도(flexural rigidity)
- $I_z \ne I_p$ (단면 2차모멘트 vs 극관성모멘트)

## **Flexure Formula** (굽힘응력식)
$$
\boxed{\;\sigma_x = -\frac{My}{I_z}\;}
$$
극값:
$$
\sigma_\text{max} = \frac{M c}{I_z} = \frac{M}{S},\quad S = \frac{I_z}{c}
$$
- $c$: NA에서 가장 먼 곳까지 거리
- $S$: **단면계수(section modulus)** — 같은 재료라도 $S$가 클수록 같은 모멘트에 응력 감소

### 대표 단면
| 단면 | $I_z$ | $S$ |
|---|---|---|
| 직사각형 $b \times h$ | $bh^3/12$ | $bh^2/6$ |
| 원형 직경 $d$ | $\pi d^4/64$ | $\pi d^3/32$ |

## **Shear Formula** (전단응력식)
비균일 굽힘에서 단면 내 전단응력:
$$
\boxed{\;\tau = \frac{VQ}{I_z\,b}\;}
$$
- $V$: 단면의 전단력
- $Q$: 관심 위치에서 잘라낸 부분의 NA에 대한 **1차 모멘트** = $A^* \bar y^*$
- $b$: 관심 위치의 단면 폭

### 직사각형 단면의 최대 전단응력
$$
\tau_\text{max} = \frac{3V}{2A}\quad (\text{at NA, } y = 0)
$$
- 평균($V/A$)의 1.5배
- **포물선 분포**

### 원형 단면
$$
\tau_\text{max} = \frac{4V}{3A}\quad (\text{at NA})
$$

## 비균일 단면 (Composite beams)
- 다른 재료가 결합된 보 → **변환단면법(Transformed section method)**
  - $n = E_2/E_1$ 비로 폭을 변환 후 균질재료처럼 풀이

## 완전응력보 (Fully stressed beam)
- 모든 단면에서 $\sigma_\text{max}$가 일정한 형상
- 균일 분포하중 단순지지: 포물선 BMD → 단면도 그에 맞춰 변화

---

# Part 3. 처짐 (Ch.9)

## 처짐의 미분방정식
$$
\boxed{\;EI_z\,\frac{d^2 y}{dx^2} = M(x)\;}
$$
이를 미분하면 더 상위 식 (보 위 분포하중 $q$가 양의 아래 방향일 때):
$$
EI_z y''' = V(x),\quad EI_z y^{(4)} = -q(x)
$$
- 처짐 $y$, 기울기 $\theta \approx y'$

## 적분 풀이 절차 (Double Integration)
1. $M(x)$ 식 수립
2. $EI y'' = M$을 적분 → $EI y' = \int M\,dx + C_1$
3. 다시 적분 → $EI y = \int\int M\,dx\,dx + C_1 x + C_2$
4. **경계조건**으로 $C_1, C_2$ 결정

## 경계조건·연속조건
| 지지 | 조건 |
|---|---|
| **고정단(fixed)** | $y = 0,\ y' = 0$ |
| **단순지지(pin/roller)** | $y = 0$ |
| **자유단(free)** | $M = 0,\ V = 0$ |
| **분할점** | $y$ 연속, $y'$ 연속 |
| **대칭점** | $y' = 0$ |

## 대표 결과 (외울 가치 있음)
| 케이스 | $\delta_\text{max}$ | 위치 |
|---|---|---|
| **외팔보 끝 집중하중 $P$** | $PL^3/3EI$ | 자유단 |
| **외팔보 등분포 $q$** | $qL^4/8EI$ | 자유단 |
| **외팔보 끝 모멘트 $M$** | $ML^2/2EI$ | 자유단 |
| **단순지지 중앙 집중 $P$** | $PL^3/48EI$ | 중앙 |
| **단순지지 등분포 $q$** | $5qL^4/384EI$ | 중앙 |
| **단순지지 양단 모멘트 $M$** | $ML^2/8EI$ | 중앙 |

## 중첩법 (Superposition)
선형탄성 → **하중의 합 = 처짐의 합**.
복잡한 보를 표 케이스의 조합으로 분해 → 각 케이스 결과 더함.

## 부정정 보의 처짐 활용
- 잉여 반력(redundant) 가정
- 처짐 조건 (예: 지지점에서 $y = 0$)으로 추가 식 도출
- 대표적으로 **세 모멘트 정리(Three-moment theorem)**, 처짐 일치법(consistent deflection)

---

## 자주 하는 실수
- $V, M$ 부호 규약을 도중에 바꿔서 SFD/BMD가 안 맞음
- $I_z$ vs $I_p$ 혼동 (굽힘은 $I_z$, 비틀림은 $I_p$)
- Flexure formula 부호 — $\sigma_x$가 $y$의 부호와 반대
- Shear formula의 $Q$를 잘못된 단면 위로 계산
- 처짐 적분에서 BMD가 구간별로 다를 때 각 구간 적분 + 연속조건 누락
- 단순지지에서 $y' = 0$도 경계조건이라고 잘못 사용
- 좌굴 식 $P_\text{cr} = \pi^2 EI/L^2$의 $L$이 유효길이(end condition에 따라 변화) 임을 모름

## LLM × 이 주제
- SFD/BMD/EFD/처짐도 자동 작도 (구간별 하중 + 적분)
- 표준 케이스 합성 → 복잡한 보 처짐 자동 계산기

## 관련 개념
- [[SM2 축 하중]]
- [[SM3 비틀림]]
- [[Lecture02 확산과 기계적 성질]] — 항복 후 거동
- [[Mohr's Circle]] — 결합응력 상태(굽힘+비틀림)에 적용

## 참고
- 이태경 교수 강의자료 TL-SM-4 (Ch4/5/9)
- Beer/Hibbeler/Gere, *Mechanics of Materials*, Ch. 4–5, 9
