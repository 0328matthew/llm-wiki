---
title: "Lecture 03 — 파괴·상태도·금속합금"
tags: [note, me, materials, lecture]
domain: ME
subject: MaterialsScience
lecture: 3
created: 2026-05-19
---

⬅︎ [[Lecture02 확산과 기계적 성질]] · [[Materials Science]]

## 한 줄 요약
재료가 어떻게 **부서지는가**(fracture/fatigue/creep) → 합금이 어떻게 **상으로 나뉘는가**(phase diagrams) → 실제 **금속재료와 열처리**.

---

## 1. 파괴 (Fracture)

### 파괴의 두 모드
| | **취성파괴(Brittle)** | **연성파괴(Ductile)** |
|---|---|---|
| 소성변형 | 거의 없음 | 큼 |
| 균열 전파 | 빠름, 불안정 | 느림, 안정 |
| 표면 | 매끈, 결정학적 (벽개면) | 컵-콘, 무딘 표면 |
| 응력 방향 | 최대 인장응력에 **수직** | — |
| 균열 경로 | **Transgranular**(입내) 또는 **Intergranular**(입계) | 기공 생성·응집 |

### 응력집중
타원형 노치 끝의 최대 응력:
$$
\sigma_m \approx 2\sigma_0 \sqrt{\frac{a}{\rho_t}}
$$
- $a$: 균열 반길이, $\rho_t$: 균열 선단 곡률반경
- **응력집중계수**: $K_t = \sigma_m/\sigma_0$

### Griffith 이론 (취성)
균열 길이 $a$인 시편 — 균열 전파로 인한 에너지 변화:
- 탄성에너지 방출 ∝ $\sigma^2 a / E$
- 표면에너지 증가 ∝ $\gamma_s a$
- 균형 조건 →
$$
\sigma_c = \sqrt{\frac{2 E \gamma_s}{\pi a}}
$$
연성 재료 — 소성에너지 $\gamma_p \gg \gamma_s$:
$$
\sigma_c = \sqrt{\frac{2 E (\gamma_s + \gamma_p)}{\pi a}}
$$

### 응력 강도 인자 K (Stress Intensity Factor)
- 3가지 모드: I(개구, opening), II(미끄럼, sliding), III(찢김, tearing)
- 균열 선단 응력장:
$$
\sigma_{ij} = \frac{K}{\sqrt{2\pi r}} f_{ij}(\theta)
$$
- Mode I: $K_I = Y \sigma \sqrt{\pi a}$ ($Y$: 형상계수, dimensionless)

### 파괴인성 $K_{IC}$
- **Plane strain fracture toughness** (두꺼운 시편)
$$
K_{IC} = Y \sigma_c \sqrt{\pi a}
$$
- 취성: 낮은 $K_{IC}$ / 연성: 높은 $K_{IC}$ (T↑·$\dot\varepsilon$↓ → $K_{IC}$↑)
- **Plane stress** (얇은 판): $\sigma_z \approx 0$ → 더 높은 외견상 인성

### 설계 식
$$
\sigma_d \le \frac{K_{IC}}{Y\sqrt{\pi a_c}}
$$
또는 허용 균열길이: $a_c \le \dfrac{1}{\pi}\left(\dfrac{K_{IC}}{Y\sigma_d}\right)^2$

### 충격시험 & DBTT
- Charpy / Izod V-notch — 흡수에너지 측정
- **DBTT (Ductile-Brittle Transition Temperature)**: 저온에서 BCC·HCP는 취성으로 천이
  - FCC는 DBTT가 거의 없음 → 극저온 사용 가능

---

## 2. 피로 (Fatigue)

### 응력 사이클
$$
\sigma_m = \frac{\sigma_\text{max}+\sigma_\text{min}}{2},\quad \sigma_a = \frac{\sigma_\text{max}-\sigma_\text{min}}{2}
$$
- 응력비 $R = \sigma_\text{min}/\sigma_\text{max}$
- 교번응력 사이클(R = -1): $\sigma_m = 0$, 완전 인장↔압축

### S-N 곡선
| | **LCF (저주기)** | **HCF (고주기)** |
|---|---|---|
| 응력 수준 | 높음 | 낮음 |
| 수명 | < ~$10^4$ 사이클 | > ~$10^5$ 사이클 |
| 균열 개시 | 쉬움 | 어려움 |

- **피로한도(Fatigue limit / Endurance limit)**: 강(Fe계)에는 존재 — 그 이하에서 무한수명; Al, Cu 등 비철은 없음

### 균열 개시·전파
- 개시: 표면 흠집·dislocation slip step·dent·sharp fillet 등 응력집중점
- **Stage I**: 전단응력으로 천천히 전파 (평탄, 특징 없음)
- **Stage II**: 빠른 전파, 응력축에 수직, plastic blunting — **Striation, Beachmark** 형성

### Paris Law (균열 전파속도)
$$
\frac{da}{dN} = A (\Delta K)^m,\quad \Delta K = Y(\sigma_\text{max}-\sigma_\text{min})\sqrt{\pi a}
$$

### 피로수명 영향 인자
- **평균응력**: $\sigma_m \uparrow$ → 수명 ↓
- **표면효과**:
  - 거친 표면, 날카로운 필렛 → 수명 ↓
  - 폴리싱, **숏 피닝(shot peening)** (압축 잔류응력) → 수명 ↑
  - **표면경화(Case hardening)** → 수명 ↑
- **환경**:
  - **열피로(Thermal fatigue)**: $\sigma = \alpha E \Delta T$ — 구속 + 재료 선정
  - **부식피로(Corrosion fatigue)**: 응력 + 화학 공격

---

## 3. 크리프 (Creep)

일정 온도·하중에서 시간에 따른 소성변형. **고온(T > 0.4 T_m)** 에서 중요.

### 크리프 곡선 3단계
1. **1차 (Primary / Transient)**: 변형경화로 속도 감소
2. **2차 (Secondary / Steady-state)**: 경화 ↔ 회복 평형 → **$\dot\varepsilon_s$ 일정**  → 설계용 핵심 변수
3. **3차 (Tertiary)**: 네킹·균열·공공 형성 → 가속·파열

### 설계 변수
- 장기 구조물(원전): 정상 크리프 속도 $\dot\varepsilon_s$
- 단기 고온 사용(터빈 블레이드, 로켓 노즐): **파열 수명(Rupture life)**

### 응력·온도 효과
$\sigma\uparrow$ 또는 $T\uparrow$ →
1. 초기 순간변형 ↑
2. $\dot\varepsilon_s$ ↑
3. 파열 수명 ↓

---

## 4. 상태도 (Phase Diagrams)

### 기본 개념
- **성분(Component)**: 합금을 구성하는 원자 종류
- **상(Phase)**: 균질하고 역학적으로 분리 가능한 부분
- 농도(wt%): $C_A = m_A/(m_A+m_B) \times 100$
- **고용한계(Solubility limit)**: 주어진 T에서 고용 가능한 최대 농도

### 평형 = 자유에너지 최소 ($T, P, C$ 고정)

### Gibbs 상률 (Phase Rule)
$$
\boxed{\;P + F = C + N\;}
$$
- $P$: 상의 수, $F$: 자유도, $C$: 성분 수, $N$: 비조성 변수 (보통 1, T만)
- 예: Cu-Ag 이원계, P = 1 atm → $F = C + 1 - P = 3 - P$
  - 1상 영역: F = 2 (T, C 둘 다 변경 가능)
  - 2상 영역: F = 1
  - 3상(공정점): F = 0 → T, C 모두 고정

### 이원 동형(Isomorphous) — Cu-Ni
- 완전 고용
- **Liquidus / Solidus**: 액상선 / 고상선

### **지렛대 법칙 (Lever Rule)**
2상 영역 ($\alpha + L$)에서 합금 조성 $C_0$:
$$
W_L = \frac{C_\alpha - C_0}{C_\alpha - C_L},\quad W_\alpha = \frac{C_0 - C_L}{C_\alpha - C_L}
$$

### 공정(Eutectic) 반응
$$
L \underset{\text{cooling}}{\overset{\text{heating}}{\rightleftarrows}} \alpha + \beta
$$
- 불변반응(invariant reaction) — 공정점에서 F = 0
- 다른 불변반응:
  - **공석(Eutectoid)**: $\gamma \to \alpha + \beta$
  - **포정(Peritectic)**: $L + \alpha \to \beta$

### Fe-C 상태도 핵심
- **공정**: $L \to \gamma + \text{Fe}_3\text{C}$ at 1147 °C, 4.30 wt% C
- **공석**: $\gamma(0.76\,\text{wt\%C}) \to \alpha(0.022) + \text{Fe}_3\text{C}(6.7)$ at 727 °C
- **Hypoeutectoid** (< 0.76 wt% C): pro-eutectoid α + Pearlite
- **Hypereutectoid** (> 0.76 wt% C): pro-eutectoid Fe₃C + Pearlite

---

## 5. 상변태 — Fe-C 미세조직

### 변태 속도 (Kinetics)
- 변태율: $y = 1 - \exp(-kt^n)$ (Avrami)
- 변태속도: $r \propto \exp(-Q/RT)$ (Arrhenius)
- **과냉각·과열**: 평형 상태가 느려서 변태가 평형 온도에서 벗어남

### 등온변태(IT) — Fe-C 0.76 wt% C
공석 온도 727 °C 아래 등온 유지 시:

| 미세조직 | 형성 조건 | 형상 | 성질 |
|---|---|---|---|
| **Pearlite (Coarse / Fine)** | 727 °C 바로 아래 | α + Fe₃C 교호 layer | 두꺼우면 약함, 얇으면 강함 |
| **Bainite** | Pearlite 영역 아래 | 침상·미세 | P보다 강하고 연성도 양호 |
| **Spheroidite** | 공석 온도 이하 장시간 유지 | 구상 Fe₃C in α matrix | 가장 연함 |
| **Martensite** | 급랭 (확산 못함) | platelike/needlelike, BCT 구조 | 가장 강하고 가장 취성 |

> **Martensite**는 무확산(diffusionless), athermal 변태 — 음속으로 진행, 시간 무관·온도만 의존.

### 합금 첨가 효과
- Cr, Mo, Ni, W → IT 곡선의 **nose가 오른쪽으로** 이동 → Martensite 형성 쉬움 = **경화능(Hardenability) 향상**

### 연속냉각변태(CCT) 다이어그램
- 실제 냉각은 등온이 아니므로 IT보다 CCT가 현실적
- IT 곡선 대비 longer time, lower temp으로 이동
- 일반적으로 **Bainite는 잘 안 생김** (Plain carbon steel)

### Fe-C 합금의 기계적 거동
- **Pearlite**: Fe₃C(경+취) + α(연)의 layered → fine할수록 더 강함 (위상경계가 전위 방해)
- **Spheroidite**: 위상경계 면적 적음 → soft, weak
- **Bainite**: P보다 강도·인성 ↑
- **Martensite**: 가장 단단·취성. C가 BCT 격자 변형 → 전위 이동 봉쇄

### Tempered Martensite (TM)
- M은 너무 brittle → **Tempering** (250–650 °C) 으로 인성 회복
- M (BCT, single phase) → α + Fe₃C 미세분산
- M보다 강도는 ↓, **연성·인성 ↑**

### 뜨임 취성 (Tempered Embrittlement)
- 575 °C 이상 tempering 후 서냉 시 인성 ↓
- 375–575 °C 영역에서 가열 후 RT까지 서냉도 위험
- 합금 성분(Mn, Ni, Cr, As, P, Sn)이 DBTT를 상승 — 입계편석
- **대책**: 조성 조절, 또는 575 °C 이상에서 tempering 후 빠르게 300 °C 이하로 quench

---

## 6. 금속 합금

### 철강 (Ferrous Alloys)
| 종류 | 조성 | 용도 |
|---|---|---|
| **저탄소강** (< 0.25 % C) | C-Mn 주성분 | 자동차 보디, 파이프, 빌딩, 캔 |
| **HSLA** (High Strength Low Alloy) | Cu, V, Ni, Mo 첨가 | 교량, 타워, 압력용기 |
| **중탄소강** (0.25–0.6 %) | austenizing→quench→temper | 기어, 크랭크샤프트 |
| **고탄소강** (0.6–1.4 %) | Cr, V, W, Mo 첨가 → 탄화물 | 공구, 칼, 스프링 |
| **스테인리스** | Cr ≥ 11 % | Martensitic(410, 440·자성), Austenitic(304, 316·비자성), Ferritic(409, 446·자성) |
| **주철(Cast iron)** (2.14–4.5 % C) | Fe₃C 메타스테이블 → graphite | gray, ductile (nodular), white, malleable |

### 주철 4종
- **Gray iron**: flake graphite, 진동감쇠·내마모 우수, 압축 강함
- **Ductile (Nodular) iron**: Mg/Ce 첨가, 구상 graphite — 강하고 연성
- **White iron**: 저Si + 급랭, Fe₃C 그대로 — 극히 경하고 취성 (rolling mill roll)
- **Malleable iron**: White iron을 800–900 °C 장시간 → cluster graphite, 강도·연성 모두

### 비철 합금
- 일반적 특징: 높은 전도도·내식성·낮은 밀도
- Cu (전기·열전도), Al (경량·내식), Mg (초경량), Ti (강도/밀도비, 내식)

---

## 7. 금속 가공 & 열처리

### 성형 (Forming)
- **열간 가공(Hot working)**: $T >$ 재결정온도 — 큰 변형, 가공경화 없음
- **냉간 가공(Cold working)**: 강도↑, 연성↓, 표면 개선, 치수 정밀

### 주조·용접·분말야금
- Casting: 사형, 다이, 정밀(investment), 연속
- Powder metallurgy: 분말 압축·소결

### Annealing (어닐링)
heating → soaking → cooling. 목적:
1. 응력 완화 (Stress Relief)
2. 연성/인성 개선
3. 특정 조직 유도

### 철강의 어닐링
| 종류 | 온도 | 결과 |
|---|---|---|
| **Process Annealing** | 재결정 온도 부근 | 냉간가공 후 연성 회복 |
| **Stress Relief** | 낮은 온도 | 잔류응력만 제거 |
| **Normalizing** | $A_3$ 또는 $A_{cm}$ + 55–85 °C | 미세 균일 결정립 |
| **Full Annealing** | $A_3$/$A_1$ + 15–40 °C, 노냉 | coarse pearlite, soft·ductile |
| **Spheroidizing** | $A_1$ 바로 아래 | 구상 Fe₃C, 가공 용이 |

### 경화능 (Hardenability) — **Jominy End-Quench Test**
- 한쪽 끝 물 분사 → 거리에 따른 경도 분포로 평가
- 영향: 합금 조성, 냉각매 (water > oil > air), 시편 크기·형상

### 석출경화 (Precipitation Hardening)
**3단계**:
1. **용체화 처리(Solution heat treatment)**: 단일 고용체 영역까지 가열 → 고용
2. **Quenching**: 과포화 고용체(준안정)
3. **시효(Aging)**: 상온 또는 약간 가열 → 미세 석출물 ↑ → 전위 방해
- 예: Al-Cu (두랄루민), Be-Cu, Mg-Al, Ti 합금

---

## 자주 하는 실수
- $K$ (응력강도 인자)와 $K_{IC}$ (재료 고유 인성) 구분
- Plane stress vs plane strain — 두께 효과
- Griffith 식에서 $\pi$ 누락
- 평균응력 식에서 $(\sigma_\text{max}+\sigma_\text{min})/2$ 와 응력진폭 $(\sigma_\text{max}-\sigma_\text{min})/2$ 헷갈림
- 공정(eutectic) vs 공석(eutectoid) — 액→고+고 vs 고→고+고
- Lever rule 분자·분모 방향 (반대 상의 조성 차로 가중)
- Martensite는 **무확산** — IT 곡선의 nose 회피로만 형성
- Tempering이 항상 좋은 것은 아님 (575 °C 이상 후 서냉 → 뜨임취성)
- 스테인리스 자성 여부 (Ferritic, Martensitic은 자성 / Austenitic은 비자성)

## LLM × 이 주제
- $K_{IC}$, $\sigma_d$, $a_c$ 중 하나 계산기 — 자연어 입력 처리
- IT/CCT 그래프 위에 cooling path 그려서 어떤 조직이 나올지 시뮬레이션
- 화학 조성 → 추천 열처리 시퀀스

## 관련 개념
- [[Lecture02 확산과 기계적 성질]] — 강화 기구가 여기서 열처리로 구현됨
- [[Lecture01 원자구조와 결정구조]] — 결함이 파괴·변태의 출발점
- [[이상기체 사이클]] — 야금 공정의 에너지 측면

## 참고
- Callister, *Materials Science and Engineering*
- 강의자료 Lecture_3.pdf
