---
title: "Lecture 02 — 확산·기계적 성질·전위와 강화기구"
tags: [note, me, materials, lecture]
domain: ME
subject: MaterialsScience
lecture: 2
created: 2026-05-19
---

⬅︎ [[Lecture01 원자구조와 결정구조]] · [[ME-MOC]] · 다음 → [[Lecture03 파괴·상태도·금속합금]]

## 한 줄 요약
원자가 어떻게 움직이는가(**확산**) → 재료가 응력에 어떻게 반응하는가(**기계적 성질**) → 그 거동을 조작해 강하게 만드는 법(**강화 기구**).

---

## 1. 확산 (Diffusion)

### 반응속도론 — 활성화 에너지
원자가 다른 위치로 도약하려면 **에너지 장벽 $\Delta G^*$**를 넘어야 함. 도약율:
$$
r = \nu_0 \exp\!\left(-\frac{\Delta G^*}{kT}\right) = \nu_0 \exp\!\left(\frac{\Delta S^*}{k}\right)\exp\!\left(-\frac{\Delta H^*}{kT}\right)
$$

### 확산 메커니즘
| 종류 | 활성화 에너지 $\Delta H_D$ | 예 |
|---|---|---|
| **격자간형(Interstitial)** | 도약 에너지만 | H, C, N, O — 작은 원자 |
| **치환형/공공(Vacancy)** | $\Delta H_m + \Delta H_v$ (도약 + 공공 형성) | 순수 원소, 화합물의 주확산 |

> Fe 기준: $\Delta H_v \approx 285$ kJ/mol $\gg \Delta H_m^\text{int} \approx 84$ kJ/mol  
> → **격자간형 확산이 훨씬 빠름** (mobility ↑, empty site는 풍부)

### 정상상태 확산 — **Fick's 1st Law**
$$
\boxed{\;J = -D \frac{dC}{dx}\;}
$$
- $J$: 유동량 [원자/(m²·s)]
- $D$: 확산계수 [m²/s], $\quad D = D_0\exp(-Q_d / RT)$
- 농도 기울기 반대 방향으로 유동 (음의 부호)

### 비정상 확산 — **Fick's 2nd Law**
$$
\boxed{\;\frac{\partial C}{\partial t} = D \frac{\partial^2 C}{\partial x^2}\;}
$$
표면 농도 $C_s$ 일정, 무한 평판 경계조건의 해:
$$
\frac{C_x - C_0}{C_s - C_0} = 1 - \mathrm{erf}\!\left(\frac{x}{2\sqrt{Dt}}\right)
$$
- 같은 농도가 도달하는 위치 → $x \propto \sqrt{Dt}$ (확산 시간 추정용)

---

## 2. 기계적 성질

### 응력·변형 정의
- **공칭(Engineering)**: $\sigma = F/A_0$, $\varepsilon = \Delta L / L_0$
- **진응력(True)**: $\sigma_T = F/A$, $\varepsilon_T = \ln(L/L_0)$
- 체적 일정 가정: $\sigma_T = \sigma(1 + \varepsilon)$, $\varepsilon_T = \ln(1+\varepsilon)$

### 시험 종류
| 시험 | 식 |
|---|---|
| 인장/압축 | $\sigma = F/A$ |
| 전단 | $\tau = F/A$ |
| 뒤틀림 | $\tau = T r / J$ |

### 탄성 거동
- **Hooke's law**: $\sigma = E\varepsilon$, $\tau = G\gamma$
  - $E$: Young's modulus, $G$: shear modulus
- 등방 탄성: $E = 2G(1+\nu)$
- **푸아송비** $\nu = -\varepsilon_\text{lateral} / \varepsilon_\text{axial}$ (보통 0.25–0.35)
- $E$는 본질적으로 **원자결합력**의 함수 — 가공·결함에 거의 영향 없음

### Anelasticity (비탄성 회복)
- 하중 제거 후 변형이 시간 지연으로 회복되는 성분
- 금속은 작아서 무시, **고분자(viscoelastic)** 에서 중요

### 소성 거동 — 항복까지의 점 정의
| 점 | 의미 |
|---|---|
| **A 탄성한계** | 하중 제거 시 영구변형이 없는 최대 응력 |
| **A' 비례한계** | $\sigma\propto\varepsilon$인 최대 응력 |
| **B 항복강도(Yield strength)** | 통상 **0.2% offset**으로 정의 |

- **Yield point 현상**: 저탄소강 등에서 상부/하부 항복점 + Lüders band (~45° 띠) 출현 → Piobert 효과

### Necking 전후
- **Necking 전**: 가공경화율 > 단면 감소율 → 하중 ↑
- **Necking 후**: 반대 → 실하중 하강, 파괴

### 가공경화 식
$$
\sigma_T = K \varepsilon_T^n
$$
- $K$: strength coefficient, $n$: strain hardening exponent

### 4가지 성능 지표
| 지표 | 정의 |
|---|---|
| **강도** | 인장강도(TS), 항복강도(YS) |
| **연성** | 연신율 $\% EL = (L_f-L_0)/L_0 \times 100$, 단면수축률 $\% AR$ |
| **Resilience** $U_r$ | 항복까지 흡수 에너지 = $\sigma_y^2 / 2E$ |
| **Toughness** $U_t$ | 파괴까지 단위체적당 일 ($\sigma$–$\varepsilon$ 곡선 아래 면적) |

### 경도 시험
| 방식 | 압입자 | 특징 |
|---|---|---|
| **Rockwell (HRC, HRB, …)** | 120° 원추 다이아 / 강구 1/16″ | 기준+시험 하중 차이 깊이로 판정. C(150 kgf), B(100 kgf). Superficial은 3+15/30/45 kgf |
| **Brinell (HB)** | 5–10 mm 강구·WC | $HB = \dfrac{2P}{\pi D(D - \sqrt{D^2 - d^2})}$ |
| **Vickers (HV)** | 정사각 피라미드 다이아 (대면각 136°) | 표면 거칠기에 민감 |
| **Knoop (HK)** | 사방형(rhombic) 피라미드, 대각선비 7:1 | 박판·코팅에 적합, 표면조건 영향 적음 |
| **Mohs / 줄경도** | 긁힘 비교 | 정성적 |
| **Shore(반발)** | 강구 낙하 반발 | 비파괴, 동적 |

경도-인장강도 변환 (강):
$$
TS\,\text{[MPa]} \approx 3.45 \cdot HB,\quad TS\,\text{[psi]} \approx 500 \cdot HB
$$

### 설계 안전계수
- **Design stress**: $\sigma_d = N' \sigma_y$ (예상응력 기준)
- **Safe stress**: $\sigma_w = \sigma_y / N$, $N \approx 1.2\text{–}4.0$

---

## 3. 전위와 강화기구

### 슬립 (Slip)
- **슬립계 = 슬립면 + 슬립방향**
- 슬립면 = 최밀 충진면, 슬립방향 = Burgers vector 방향 = 최밀 충진방향
- 이유: 면 사이 거리 가장 큼 + 평탄 → 전위 이동 저항 최소

### 결정구조별 슬립계 수
| 구조 | 슬립계 | 결과 |
|---|---|---|
| **FCC** $\{111\}\langle110\rangle$ | 12 | 연성 |
| **BCC** $\{110\}\langle111\rangle$ + $\{112\}, \{321\}$ | 12 (+24) | 연성 (저온은 취성) |
| **HCP** $\{0001\}\langle11\bar20\rangle$ | 3 | 취성 |

### Schmid Law — 분해전단응력
$$
\tau_R = \sigma \cos\phi \cos\lambda
$$
- $\phi$: 슬립면 법선과 인장축 사이 각
- $\lambda$: 슬립방향과 인장축 사이 각
- 최대는 $\phi = \lambda = 45°$일 때: $\tau_R^\text{max} = \sigma/2$
- 슬립 시작 조건: $\tau_R \ge \tau_\text{CRSS}$ (critical resolved shear stress)
- 항복 응력: $\sigma_y = \tau_\text{CRSS} / (\cos\phi\cos\lambda)_\text{max}$

### 쌍정변형 (Twinning)
- 전위 이동과 경쟁
- BCC: 저온/고변형률에서 쌍정 우세
- FCC: 거의 일어나지 않음
- HCP: 대부분 온도에서 쌍정으로 변형 (Zn, Mg, Be)

### 강화 기구 5가지

1. **고용체 강화(Solid Solution)**
   - 불순물 원자 → 격자 뒤틀림 → 응력장이 전위를 잡음
   - $\Delta\tau \propto G \cdot c^{1/2}$ (c: 농도)

2. **변형경화(Strain Hardening / 가공경화)**
   - 변형 → 전위 밀도 ↑ → 전위끼리 간섭
   - $\tau \propto G b \sqrt{\rho_d}$
   - 단점: 연성 감소

3. **결정립 미세화(Grain Size Strengthening) — Hall-Petch**
$$
\boxed{\;\sigma_y = \sigma_0 + k_y\,d^{-1/2}\;}
$$
   - $d$: 평균 결정립 직경
   - 미세할수록 결정립계 면적 ↑ → 전위 이동 방해

4. **석출 강화(Precipitation Hardening)**
   - 제2상 미세 석출물이 전위 이동 방해 (예: Al-Cu의 GP zone)

5. **분산 강화(Dispersion Hardening)**
   - 불용성 입자(산화물 등) 강화 — 고온에서도 유효

### 회복·재결정·입자성장 (Annealing 거동)
| 단계 | 무엇이 일어나나 | 강도/연성 |
|---|---|---|
| **회복(Recovery)** | 전위 재배열 → 변형에너지 ↓ | 거의 불변 |
| **재결정(Recrystallization)** | 무변형 새 결정립 핵생성·성장 | **강도 급감, 연성 회복** |
| **입자성장(Grain Growth)** | 표면에너지 ↓ 위해 결정립 성장 | 항복강도 ↓ (Hall-Petch 역방향) |

- 재결정 온도 $T_R \approx 0.3\text{–}0.5\,T_m$
- 입자성장: $d^n - d_0^n = K t$ ($n \ge 2$)

---

## 자주 하는 실수
- Fick 1st/2nd law 적용 조건 혼동 (정상상태 vs 비정상)
- erf 함수 인자 $x/(2\sqrt{Dt})$에서 2 누락
- True strain $\ln(1+\varepsilon)$이 공칭변형 $\varepsilon$과 부호 또는 크기 비교에서 혼동
- 0.2% offset 항복 정의에서 "탄성 직선을 평행이동" 단계 빼먹음
- Schmid law의 $\phi, \lambda$가 일반적으로 같지 않음 (수직과 슬립방향은 다른 방향)
- HCP 슬립계 3개 — Mg, Zn 등이 왜 가공이 어려운지 이해 못 함
- Hall-Petch 지수 $d^{-1/2}$ 위치 (분모인지 분자인지)
- 가공경화와 재결정의 강도 변화 방향 헷갈림

## LLM × 이 주제
- 응력-변형 곡선에서 항복점·TS·연성을 자동 검출
- Schmid factor 계산기 — 결정 방위 → 가장 활성화될 슬립계 추천

## 관련 개념
- [[Lecture01 원자구조와 결정구조]] — 결함·슬립계의 기하학적 근거
- [[Lecture03 파괴·상태도·금속합금]] — 강화/연화의 실제 적용 (열처리)

## 참고
- Callister, *Materials Science and Engineering*
- 강의자료 Lecture_2.pdf
