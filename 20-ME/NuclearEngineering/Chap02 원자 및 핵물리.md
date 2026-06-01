---
title: "Chap02 — 원자 및 핵물리"
tags: [note, me, nuclear-engineering, chapter]
domain: ME
subject: NuclearEngineering
chapter: 2
source: "원자력공학개론 강의자료 (PNU, 이준엽 교수)"
created: 2026-06-01
---

⬅︎ [[Chap01 원자력공학 개요]] · [[ME-MOC]] · 다음 → [[Chap03 핵반응과 원자로]]

## 한 줄 요약
원자력공학의 **물리적 기초**: 원자 구조 · 결합에너지 · 방사붕괴. 핵심은 $\Delta m \cdot c^2$ (질량결손이 곧 방출 에너지)와 $N(t)=N_0 e^{-\lambda t}$ (지수 붕괴)다. 이 두 식으로 핵분열 에너지부터 사용후핵연료의 잔열까지 다 다룰 수 있다.

## 2-1 원자 및 원자핵 구조

### 원자 = 원자핵 + 궤도 전자
- **원자핵**: 양성자(+) + 중성자(중성)
- **궤도 전자**: 음의 전하 (-)
- 원자모형의 변천: 돌턴 → 톰슨 → 러더퍼드 → 보어 → 슈뢰딩거

### 원자 기호 $_Z X^A$
- **Z (원자번호)**: 원자핵 속의 양성자 수
- **A (질량수)**: 양성자 수 + 중성자 수
- 예: $_1H^2$, $_6C^{12}$, U-235

## 2-2 기본 입자

| 입자 | 기호 | 전하 | 질량 (amu) |
|---|---|---|---|
| 양성자 (proton) | $p$ | +1 | 1.007277 |
| 중성자 (neutron) | $n$ | 0 | 1.008665 |
| 전자 (electron) | $e^-$ | -1 | 0.000549 |
| 광자 (photon) | $\gamma$ | 0 | 0 |
| 중성미자 (neutrino) | $\nu$ | 0 | ≈ 0 |

- 전자 질량 = 양성자 질량의 **1/1837**
- $m_e = 9.10956 \times 10^{-28}$ g, $e = 1.60219 \times 10^{-19}$ C

### 핵종 (Nuclide)과 분류
- **Nuclide**: Z와 A로 특징 지어지는 개개의 원자핵 (U-234, U-235는 서로 다른 nuclide)

| 분류 | 정의 | 예 |
|---|---|---|
| **Isotopes (동위원소)** | same Z | N-13, N-14, N-15 |
| **Isotones (동중성자원소)** | same N | $_6$C-14, $_7$N-15, $_8$O-16 |
| **Isobars (동중원소)** | same A | $_6$C-14, $_7$N-14 |
| **Isodiaphers** | same A-2Z | $_6$C-12, $_7$N-14, $_8$O-16 |
| **Isomers (핵이성체)** | same Z, N (에너지 상태만 다름) | Br-80m (4.4 h), Br-80 (18 min) |

## 2-3 원자량과 질량

### Atomic Mass Unit (amu)
$$
1\,\text{amu} = \frac{1}{12} \times (\text{neutral } ^{12}\text{C atom's mass}) = 1.660438 \times 10^{-24}\,\text{g}
$$
- **1 amu → 931.5 MeV** (질량-에너지 환산)
- 전자 결합에너지 $B_e \approx 13.6$ eV (수소 기준)

### 원자핵 질량
$$
M'\!(\text{원자핵 질량}) = M(\text{원자량}) - (Zm_0 - B_e(Z))
$$
- 보통 $B_e$는 무시 가능 (Thomas-Fermi: $B_e(Z) = 15.73 Z^{7/3}$ eV)

### 아보가드로 수
$$
N_A = 6.02252 \times 10^{23}\,\text{molecules/gm-mole}
$$

## 2-4 원자 및 원자핵 반경

### 원자의 크기
- 원자간 간격 ≈ $2 \times 10^{-8}$ cm
- 전자 궤도는 정확한 원이 아님 — 발견 확률로 결정됨 (Schrödinger orbital)

### 핵 반경
$$
\boxed{\;R = R_0 A^{1/3}\;}
$$
- $R_0 \approx 10^{-13}$ cm ≈ 1.2 fm
- 원자핵의 부피 ∝ 질량수 A → **핵 밀도 일정**
- 원자 vs 원자핵 크기 비율: 약 **20만 배** (원자 10 km, 핵 5 cm 비유)

## 2-5 질량과 에너지

### 질량결손과 결합에너지 (Binding Energy)
- 원자핵 내 양성자끼리 반발력에도 불구하고 묶여 있음 → **강한 단거리 핵력 (attractive force)**
- **핵의 질량 < 구성핵자 질량의 합**

$$
\boxed{\;\Delta m = ZM_p + NM_n - M'\;}
$$
$$
\boxed{\;\Delta E = \Delta m \cdot c^2\;}
$$
- 결합에너지 = "핵을 구성 핵자로 분해하는 데 필요한 에너지" = "A개 핵자가 핵을 형성할 때 방출되는 에너지"

### 핵자당 결합에너지 (Binding Energy per Nucleon)
- 정의: 총 결합에너지 / 핵자 수 (n + p)
- **Fe-56이 가장 안정** (peak ≈ 8.8 MeV/nucleon)
- 핵자당 결합에너지가 클수록 → 단단한 결합, 결합 시 더 많은 에너지 방출

### 융합 vs 분열
- **융합**: $_1H^2 + {}_1H^2 \to {}_1H^3 + {}_1H^1 + \gamma\,(4.02\,\text{MeV})$ — 가벼운 핵
- **분열**: $_{92}U^{238} + n \to X^{119}_Z + X^{119}_Z + \gamma\,(\sim 210\,\text{MeV})$ — 무거운 핵
- 두 경우 모두 핵자당 결합에너지가 큰 쪽으로 이동 → 에너지 방출

## 2-6 상대론적 속도 (Relativistic Velocities)

### Einstein 상대론
$$
m = \frac{m_0}{\sqrt{1-v^2/c^2}},\quad E = mc^2 = \frac{m_0 c^2}{\sqrt{1-v^2/c^2}}
$$
$$
KE = mc^2 - m_0 c^2 = m_0 c^2 \left[\frac{1}{\sqrt{1-v^2/c^2}} - 1\right]
$$

### 비상대론적 근사 ($v \ll c$): Taylor 전개
$$
\frac{1}{\sqrt{1-v^2/c^2}} \approx 1 + \frac{1}{2}\frac{v^2}{c^2} + \cdots
$$
$$
\Rightarrow\; KE \approx \frac{1}{2} m_0 v^2 \quad(\text{Newton})
$$

### 핵분열 vs 핵융합 중성자 속도
| | 핵분열 | 핵융합 |
|---|---|---|
| 에너지 | 2 MeV | 14 MeV |
| $v$ (m/s) | 1.95 × 10⁷ | 5.17 × 10⁷ |
| $v/c$ (Newton) | 6.52% | 17.25% |
| $v/c$ (Einstein) | 6.51% | 17.06% |
- 핵분열 중성자: 상대론적 보정 < 0.1% → Newton 근사 OK
- 핵융합 중성자: 약 0.2%p 차이 — 정밀 계산엔 상대론 필요

## 2-7 원자의 에너지 준위 (Excited States)

### Bohr 모형
- 원자핵 주변 전자는 **discrete한 에너지 준위**(궤도)에서만 운행
- 궤도 이동 시 두 궤도의 에너지 차만큼 흡수/방출 (광자 $E = h\nu$, $h = 6.63 \times 10^{-34}$ J·s)
- **K(n=1) < L(n=2) < M(n=3)** 순으로 멀어지고 에너지↑
- 각 껍질의 전자수 = **$2n^2$**

### 4가지 양자수
| 양자수 | 기호 | 값 |
|---|---|---|
| 주양자수 | $n$ | 1, 2, 3, ... |
| 방위양자수 (angular momentum) | $l$ | 0, 1, ..., n-1 |
| 자기양자수 (magnetic orbital) | $m$ | -l, ..., +l |
| 스핀양자수 | $s$ | ±1/2 |

### X-ray와 Bremsstrahlung
| | X-ray (특성) | Bremsstrahlung (제동복사) |
|---|---|---|
| 발생 원리 | 전자가 고에너지 → 저에너지 준위로 천이 | 하전입자가 강한 전기장에 가속됨 |
| 스펙트럼 | **Discrete** | **Continuous** |
| 조건 | 원자 내 전자 천이 | 가벼운 하전입자 + 무거운 원자핵에 가까이 |

### 원자 결합 (atomic bonding)
| 결합 | 메커니즘 | 예 |
|---|---|---|
| Ionic (이온 결합) | 전자 양도, 양/음 이온 인력 | MgO, NaCl |
| Covalent (공유 결합) | 전자 공유 | H₂ |
| Metallic (금속 결합) | 자유 전자 + 양이온 (전자구름) | 금속 |
| Van der Waals | 비대칭 전자 분포 (쌍극자-쌍극자) | He, Ar 등 불활성기체 |

### 핵 구조 및 결합력
- 양성자 간 반발력보다 강한 **단거리 인력 (short-ranged)** 작용
- 원자핵 내 양성자/중성자도 전자처럼 **discrete 에너지 준위**에 존재
- 감마선 = 핵 상태가 고에너지 → 저에너지로 천이 시 발생 EM wave
- 모든 핵종은 고유의 에너지 준위 (지문과 유사) — γ선 에너지로 핵종 식별 가능

## 2-8 방사붕괴 (Radioactive Decay)

### 불안정한 동위원소
- 원자핵은 중성자/양성자 비율에 따라 안정/불안정 결정
- 불안정한 동위원소 = **방사성 동위원소** → 방사선 방출하며 안정 핵종으로 천이
- 현재 104 원소 중 80개가 안정 동위원소 보유, 총 약 279개 안정 동위원소 발견

### 붕괴 방식 분류

| 붕괴 | 변화 | 예 |
|---|---|---|
| **α 붕괴** | Z -2, A -4 (He 핵 방출) | $^{238}_{92}U \to {}^{234}_{90}Th + \alpha + Q$ |
| **β⁻ 붕괴** | Z +1, A 불변 (n → p + e⁻ + $\bar\nu$) | $^{23}_{10}Ne \to {}^{23}_{11}Na + \beta^- + \bar\nu + Q$ (Q=4.39 MeV) |
| **β⁺ 붕괴** | Z -1, A 불변 (p → n + e⁺ + $\nu$) | $^{11}_6C \to {}^{11}_5B + \beta^+ + \nu + Q$ (Q=0.960 MeV) |
| **전자포획 (EC)** | Z -1, A 불변 (K shell 전자 흡수, X선 방출) | $^{41}_{20}Ca + \beta^- \to {}^{41}_{19}K + \nu$ (Q=0.426 MeV) |
| **γ선 방출** | 변화 없음 (여기 → 기저 상태) | — |
| **핵이성체 전환 (IT)** | 변화 없음 | Br-80m → Br-80 |
| **중성자 방출** | Z 불변, A -1 | $^{137}_{53}I \xrightarrow{\beta^-} {}^{137}_{54}Xe \xrightarrow{n} {}^{136}_{54}Xe$ |

- **β⁻**: 가장 흔한 방사붕괴 방식
- α 입자 = $_2He^4$ (양성자 2 + 중성자 2)
- β⁻ = electron, β⁺ = positron

## 2-9 방사능 (Radioactivity)

### 붕괴상수 $\lambda$
- **단위시간당 1개 동위원소가 붕괴할 확률** (단위 sec⁻¹)
- 방사붕괴 미분방정식:
$$
\frac{dn(t)}{dt} = -\lambda n(t) \;\;\Rightarrow\;\; \boxed{\;n(t) = n_0 e^{-\lambda t}\;}
$$

### 핵심 물리량
| 양 | 의미 |
|---|---|
| $\lambda$ | 단위시간당 붕괴 확률 |
| $e^{-\lambda t}$ | 시간 $t$까지 붕괴하지 않을 확률 |
| $\lambda e^{-\lambda t}\,dt$ | $t$ ~ $t+dt$ 사이에 붕괴할 확률 |
| $\lambda n(t)$ | **시간 $t$에서 1초 동안 붕괴하는 핵 수 = Activity (방사능)** |

### 반감기와 평균수명
$$
\boxed{\;t_{1/2} = \frac{\ln 2}{\lambda}\;}\qquad \boxed{\;\tilde t = \frac{1}{\lambda} = \int_0^\infty t\lambda e^{-\lambda t}\,dt\;}
$$

### 방사능 단위
- **1 Curie (Ci)** = $3.7 \times 10^{10}$ disintegrations/sec
- **1 Bq (Becquerel)** = 1 disintegration/sec
- 1 mCi = 10⁻³ Ci, 1 μCi = 10⁻⁶ Ci

### 주요 동위원소 반감기

| 동위원소 | 반감기 | 방출 |
|---|---|---|
| 중성자 | 614 s | β, 0.782 MeV |
| Tritium (H-3) | 12.33 y | β, 0.0186 |
| C-14 | 5715 y | β, 0.156 |
| Cs-137 | 30.2 y | β, 0.514 / γ, 0.662 |
| Co-60 | 5.271 y | β, 0.315 / γ, 1.173, 1.332 |
| Sr-90 | 29.1 y | β, 0.546 |
| I-131 | 8.021 d | β, 0.606 / γ, 0.284, 0.364 |
| **U-235** | **7.04 × 10⁸ y** | α, 4.152 |
| **U-238** | **4.47 × 10⁹ y** | α, 4.040 |
| **Pu-239** | **2.41 × 10⁴ y** | α, 5.055 |

### 생성·붕괴 동시 (Production + Decay)
$$
\frac{dN(t)}{dt} = R - \lambda N(t) \;\;\Rightarrow\;\; N(t) = N_0 e^{-\lambda t} + \frac{R}{\lambda}(1 - e^{-\lambda t})
$$
- 평형: $t \to \infty$에서 $N \to R/\lambda$ → **Activity = R** (생성률과 같음)

### 붕괴 사슬 (Decay Chain) $X_1 \to X_2 \to X_3\,(\text{stable})$
$$
\frac{dN_1}{dt} = -\lambda_1 N_1
$$
$$
\frac{dN_2}{dt} = \lambda_1 N_1 - \lambda_2 N_2
$$
$$
\frac{dN_3}{dt} = \lambda_2 N_2
$$
- 해: $N_2 = \frac{\lambda_1}{\lambda_2 - \lambda_1} N_1^0 (e^{-\lambda_1 t} - e^{-\lambda_2 t}) + N_2^0 e^{-\lambda_2 t}$
- $\lambda_1 \ll \lambda_2$ (긴 부모, 짧은 자식)이면 **secular equilibrium**: $\lambda_1 N_1 \approx \lambda_2 N_2$

## 2-10 핵반응 (Nuclear Reaction)

### 정의
> 두 개의 핵입자가 작용(충돌)하여 두 개 이상의 핵종 혹은 감마선을 생성할 때 핵반응이 일어났다고 함.
> $a + A \to B + b$

### Q value (반응 에너지)
$$
\boxed{\;Q = M_a + M_A - (M_b + M_B) = (T_b + T_B) - (T_a + T_A)\;}
$$
- M: nuclear mass, T: kinetic energy
- **Q > 0**: 발열 반응 (exothermic) — 에너지 방출
- **Q < 0**: 흡열 반응 (endothermic) — 에너지 흡수 필요

## 자주 하는 실수
- $A = Z + N$인데 N을 중성자가 아닌 다른 입자로 착각
- 1 amu를 그냥 양성자 질량으로 가정 (실제로는 C-12 기준)
- 반감기 $t_{1/2}$와 평균수명 $\tilde t$를 혼동 — 둘 다 1/λ 관련이지만 $t_{1/2} = \tilde t \cdot \ln 2$
- β⁻와 β⁺ 변환 시 Z 변화 방향 헷갈림 — β⁻는 **Z 증가**, β⁺/EC는 **Z 감소**
- 결합에너지가 클수록 "불안정"이라고 착각 — 정반대 (안정 = 단단히 묶임)
- 핵분열 + 핵융합 둘 다 에너지 방출 — Fe-56 양쪽에서 핵자당 결합에너지가 작아지는 방향이 분열, 큰 쪽으로 가는 방향이 안정화

## LLM × 이 주제
- 붕괴 chain 시뮬레이터 — 임의 초기 동위원소 → 안정 핵종까지 path 그리기
- 반응 Q-value 계산기 ([[Tool Use]] + 핵 질량 DB)
- $E=mc^2$ 직관 설명 챗봇 (1 amu → 931.5 MeV 환산 과정 단계별)
- 양자수 → 주기율표 전자배치 자동 생성

## 관련 개념
- [[Chap03 핵반응과 원자로]] — 단면적, 중성자 감속
- [[Chap04 원자로와 원자력계통]] — 6인자 공식
- [[Chap06 핵연료주기와 사용후핵연료 처분]] — 방사능 진화

## 참고
- "원자력공학개론" 강의자료, 이준엽 교수 (PNU), 2026 봄학기
- 참고: 서울대 원자핵공학과 이은철 교수 "핵공학개론"
- Lamarsh & Baratta, *Introduction to Nuclear Engineering*, Ch. 2
