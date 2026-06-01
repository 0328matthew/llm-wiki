---
title: "SM-2 — Axial Loading (Tension & Compression)"
tags: [note, me, solid-mechanics, lecture]
domain: ME
subject: SolidMechanics
section: 2
source: "이태경 교수 강의 (PNU 기계공학부 금속설계연구실)"
created: 2026-05-19
---

⬅︎ [[SM1 정역학 복습]] · [[Mechanics of Materials]] · 다음 → [[SM3 비틀림]]

## 한 줄 요약
가장 단순한 하중 — **축방향 인장/압축**. 응력·변형률, Hooke 법칙, $P$–$\delta$ 관계, AFD·ADD, 부정정구조, 열응력, 경사면 응력, 변형에너지·충격하중까지 모두 이 하나의 모델에서 파생.

---

## 응력과 변형률 (Normal)

### 정의
- **수직응력(Normal stress)**: $\sigma = P/A_0$ (인장 +, 압축 −) [MPa, GPa]
- **수직변형률(Normal strain)**: $\varepsilon = \delta/L_0$ (무차원)
- $s, e$가 공칭(engineering), $\sigma, \varepsilon$는 본 강의에선 동일 취급

### Hooke 법칙
$$
\boxed{\;\sigma = E\varepsilon\;}
$$
- $E$: **Young's modulus(탄성계수)** [GPa] — 재료 고유
- **선형 탄성, 일축 응력**에만 유효

---

## 전단응력·변형률 (Shear)

### 정의
- **전단응력** $\tau = V/A$ [Pa]
- **전단변형률** $\gamma$ [rad] — 직각의 변화(distortion)
- 측면 길이는 안 변하고 **모양만** 변함

### 부호 규약
- **(+) 면(positive face)**: 좌표축의 (+) 방향
- 전단응력 부호:
  - (+) face, (+) 방향 → (+)
  - (+) face, (−) 방향 → (−)
  - (−) face, (+) 방향 → (−)
  - (−) face, (−) 방향 → (+)
- 변형률 부호: 두 (+) (또는 두 (−)) 면 사이 **각이 줄면 (+)**

### Hooke 법칙 (전단)
$$
\tau = G\gamma,\quad G = \frac{E}{2(1+\nu)}
$$
- $G$: 전단탄성계수(rigidity)
- 등방·균질재료에서 $E, G, \nu$는 **독립이 아님**

---

## $P$–$\delta$ 관계

균일한 봉:
$$
\delta = \frac{PL}{EA}
$$
- 강성(stiffness): $k = EA/L$
- 유연성(flexibility): $f = L/EA = 1/k$

### 분할/가변 단면
$$
\delta = \sum_i \frac{N_i L_i}{E_i A_i}\quad\text{or}\quad \delta = \int_0^L \frac{P(x)}{E(x)A(x)}\,dx
$$

### 중간 축하중을 받는 봉
1. FBD로 반력 계산
2. 구간 분할
3. 각 구간 단면법으로 $N_i$ 결정
4. 각 구간 $\delta_i$ 계산
5. 모두 합산 → 전체 신장량

---

## AFD & ADD (Axial Force / Displacement Diagram)
- **AFD**: 축방향 거리에 따른 내력 $N(x)$
- **ADD**: 축방향 변위 $u(x)$
- 관계:
  - ADD 기울기 = AFD / $EA$
  - 두 점 사이 변위 변화 = AFD 곡선 아래 면적 / $EA$

---

## 부정정 구조 (Statically Indeterminate)
- 미지수(반력 + 내력) > 평형식 개수 → **적합조건(compatibility)** 추가
- 절차:
  1. 평형방정식
  2. 적합조건 ($\delta$ 관계)
  3. $P$–$\delta$ 관계로 식 결합
  4. 연립 풀이

예: 양단 고정 봉에 중간 하중 $P_1, P_2$:
$$
R_A - P_1 - P_2 = 0,\quad \delta_\text{total} = 0
$$

---

## 열 효과 (Thermal Effects)
- 열변형률: $\varepsilon_T = \alpha\,\Delta T$ ($\alpha$: 열팽창계수 [1/K])
- 열변위: $\delta_T = \alpha\,\Delta T \cdot L$
- **고정된 봉**의 열응력: 변위 = 0 조건 →
$$
\sigma_T = -E\alpha\,\Delta T
$$
- 한쪽이 스프링 지지: $\sigma_T = E\alpha\Delta T / (1 + EA/kL)$

---

## 경사면 응력 (Stresses on Inclined Sections)
일축 하중 $\sigma_x$ 받는 봉에서 경사각 $\theta$ 단면의 응력:
$$
\sigma_\theta = \sigma_x\cos^2\theta = \frac{\sigma_x}{2}(1 + \cos 2\theta)
$$
$$
\tau_\theta = -\sigma_x\sin\theta\cos\theta = -\frac{\sigma_x}{2}\sin 2\theta
$$

### 극값
| 양 | 최대값 | 발생 각 |
|---|---|---|
| $\sigma_\theta$ | $\sigma_x$ | $\theta = 0°$ |
| $|\tau_\theta|$ | $\sigma_x/2$ | $\theta = ±45°$ |

→ 일축 인장에서도 **45° 평면에 최대 전단**이 작용 → 연성 금속의 slip line이 45°에 나타나는 이유.

---

## 정적 vs 동적 하중

### 정적 vs 동적
- **정적**: 천천히 적용, 진동·관성 무시
- **동적**:
  - **충격(Impact)**: 갑작스러운 부가/제거
  - **변동(Fluctuating)**: 지속적 변화 → [[Lecture03 파괴·상태도·금속합금|피로]]로 연결

---

## 변형에너지 (Strain Energy)
일 = 변형에너지:
$$
U = W = \int_0^\delta P\,d\delta
$$

### 선형탄성 일축 변형
$$
U = \frac{P\delta}{2} = \frac{P^2 L}{2EA} = \frac{EA\delta^2}{2L}
$$

### 분할/가변 단면
$$
U = \sum_i \frac{N_i^2 L_i}{2E_i A_i},\quad U = \int_0^L \frac{[N(x)]^2}{2EA(x)}\,dx
$$

> 변형에너지는 **응력의 제곱**에 비례. 같은 하중·면적이라도 분포에 따라 흡수 가능한 에너지가 크게 달라짐 (segmented bar 예).

---

## 충격하중 (Impact Loads)
높이 $h$에서 떨어지는 무게 $W$가 봉에 충돌:
$$
\delta_\text{max} = \delta_\text{st}\!\left[1 + \sqrt{1 + \frac{2h}{\delta_\text{st}}}\right]
$$
- $\delta_\text{st} = WL/EA$: 정적 변위
- $h \to 0$: 자유낙하 한계 → $\delta_\text{max} = 2\delta_\text{st}$ (suddenly applied load)
- $h \gg \delta_\text{st}$: $\delta_\text{max} \approx \sqrt{2h\delta_\text{st}}$

→ 정적과 비교해 **응력은 충격계수배** 커짐.

---

## 자주 하는 실수
- 공칭응력 $\sigma = P/A_0$에 변형 후 면적 $A$ 대입
- 부정정 구조에서 적합조건 누락
- 열응력 부호 — 가열 + 구속 → 압축이지만 식에 부호 잊음
- 경사면 응력 식에서 $\cos^2$이 아니라 $\cos$ 적용
- 변형에너지 분할 적용 시 각 segment의 내력 다른 점 망각
- 충격 식의 $\delta_\text{st}$가 봉의 정적 변위지 자유낙하 거리가 아님

## LLM × 이 주제
- 자연어 → FBD → AFD/ADD 자동 작도
- 부정정 풀이 적합조건 도출을 단계 설명

## 관련 개념
- [[SM3 비틀림]] — 같은 흐름 (응력·변형률·rigidity·부정정)
- [[SM4 굽힘과 처짐]]
- [[Lecture02 확산과 기계적 성질]] — 재료 측면 $E, \nu, \sigma_y$

## 참고
- 이태경 교수 강의자료 TL-SM-2
- Beer/Hibbeler, *Mechanics of Materials*, Ch. 2
