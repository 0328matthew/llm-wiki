---
title: "Lecture 01 — 원자구조·결정구조·결함"
tags: [note, me, materials, lecture]
domain: ME
subject: MaterialsScience
lecture: 1
created: 2026-05-19
---

⬅︎ [[ME-MOC]] · 다음 → [[Lecture02 확산과 기계적 성질]]

## 한 줄 요약
재료는 **원자 결합 → 결정격자 → 결함**의 계층으로 이해. 결정학적 표기와 결함 분류가 이후 모든 강화·파괴 메커니즘의 기초.

---

## 1. 원자 간 결합

### Coulombic / Repulsive Force
- 양이온 ↔ 전자운(electron cloud) 인력 + 인접 양이온 반발력
- 두 힘의 합으로 평형거리 $r_0$ 결정 (= 결합 길이)
- **결합 에너지(Bond Energy, $E$)**: 두 원자를 무한히 떨어뜨리는 데 필요한 에너지 = potential well 깊이

### 결합 에너지가 결정하는 것들
| ↑ $E$ | ↓ $E$ |
|---|---|
| 높은 용해온도 | 낮은 용해온도 |
| 높은 탄성계수 | 낮은 탄성계수 |
| 낮은 열팽창계수 | 높은 열팽창계수 |

> 결합이 강할수록 원자를 격자 위치에서 움직이기 어렵다 → $T_m \uparrow, E_\text{Young} \uparrow, \alpha \downarrow$

---

## 2. 결정 구조

### 격자(Lattice) 기본
- **결정(Crystal)**: 원자가 규칙적 공간 배열 (대부분 금속)
- **비정질(Amorphous)**: 불규칙 — 유리, 플라스틱, 완전 액체
- **단위격자(unit cell)**: 격자상수 $a, b, c$ (≈ 0.25–0.5 nm)와 각도 $\alpha, \beta, \gamma$로 정의
- 7개 결정계:
  - 입방(Cubic): $a=b=c$, $\alpha=\beta=\gamma=90°$
  - 정방(Tetragonal): $a=b\ne c$, 모든 각 90°
  - 육방(Hexagonal): $a=b\ne c$, $\alpha=\beta=90°, \gamma=120°$

### 세 가지 주요 격자 — FCC / BCC / HCP
| | **FCC** | **BCC** | **HCP** |
|---|---|---|---|
| 원자 접촉선 | 면대각선 | 체대각선 | 저면 |
| 격자상수 관계 | $a = \dfrac{4R}{\sqrt2}$ | $a = \dfrac{4R}{\sqrt3}$ | 축비 $c/a = \sqrt{8/3} \approx 1.633$ |
| 단위격자 원자 수 | 4 | 2 | 6 (관례) / 2 (1차) |
| 배위수 | **12** | **8** | **12** |
| 충진율(APF) | **0.74** | 0.68 | **0.74** |
| 예 | Cu, Al, Ag, γ-Fe | α-Fe, Cr, W | Zn, Mg, Ti |

- **Close-packed**: FCC, HCP가 가장 조밀 (APF 0.74). 둘의 차이는 적층 순서 — FCC는 ABCABC, HCP는 ABAB.

---

## 3. 결정학적 표기

### 방향 [uvw]
1. 원점에서 점까지 성분 $(u,v,w)$ 추출
2. 격자상수로 나눠 무차원화
3. 분수 제거 (최소 정수비)
4. 음수는 위에 막대 (예: $[\bar1 1 1]$)
5. **등가 방향족**: $\langle u v w \rangle$
   - 예: 입방정에서 $\langle 100\rangle = \{[100], [010], [001], [\bar100], \ldots\}$

### 평면 (hkl) — **Miller Index**
1. 평면이 결정축과 만나는 절편 (격자상수 단위)
2. 역수 취함
3. 분수 제거 → 최소 정수 $(h k l)$
4. **등가 평면족**: $\{h k l\}$ — 예: $\{111\}$은 8개 평면 포함

### 입방정 면간거리
$$
d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}
$$
일반 직교계: $1/d^2 = h^2/a^2 + k^2/b^2 + l^2/c^2$

### Linear / Planar Density
- **LD** = 방향선 위 원자수 / 단위 길이
- **PD** = 면 위 원자수 / 단위 면적
- **최밀 방향·평면(Close-packed direction/plane)** = LD, PD 최대 → 슬립이 잘 일어남

---

## 4. 고체 내 결함 (Imperfections)

> 결함이 없으면 재료는 연성도 없고 가공도 불가능. 반도체 전도도는 결함으로 제어. 열처리 = 결함 재배열.

### 4-1 점결함 (Point Defects)
- **공공(Vacancy)**: 빈 격자점 — 확산·열처리·변태의 주역
- **격자간 원자(Interstitial)**: H, C, N, O, B 같이 작은 비금속이 격자 틈에 침입. 자기 원자(self-interstitial)도 가능하지만 격자변형이 커서 드묾.
- **치환형(Substitutional)**: 격자점에 다른 종류 원자 치환
- 이온결정 점결함:
  - **Schottky**: 양·음 이온 공공 쌍 (전하 중성 유지)
  - **Frenkel**: 공공 + 침입형 쌍

### 4-2 선결함 (Line Defects) — **전위 Dislocation**
- 슬립면 경계로 원자열이 끊어진 1차원 결함
- 종류:
  - **칼날 전위(Edge)**: 여분 원자열이 슬립면 위쪽에 끼어 있는 형태
  - **나선 전위(Screw)**: 전위선 주변 원자가 나선 계단 형태
  - **혼합 전위(Mixed)**: 칼날 + 나선 성분 모두
- **Burgers vector $\vec b$**: 전위가 이동시킨 격자 변위
- **전위 밀도(Dislocation density)** = 전위선 총길이 / 체적
  - 연화 어닐링 상태: ~$10^5\,\text{m/m}^3$ 수준 (cm³당 1 km)
  - 냉간 가공: ~$10^9\,\text{m/m}^3$ (cm³당 10,000 km) → 가공경화의 본질
- 전위 ↑ → 격자 에너지 ↑ → 응력장 형성 → 소성변형 매개

### 4-3 면결함 (Interfacial Defects)
- **자유표면(Free surface)**: 고체-기체 경계. 표면 원자는 한쪽 결합이 없어 에너지가 높음 — 최밀면이 표면에너지 최소
- **결정립 경계(Grain Boundary)**: 같은 상이지만 방위가 다른 결정립 사이의 경계
  - **소각경계(Low angle, < 10°)**: tilt / twist boundary — 전위 배열로 설명 가능
  - **대각경계(High angle)**: 2–3 원자 두께의 무질서 영역
  - **쌍정경계(Twin)**: 거울 대칭, 에너지 낮음
- **상경계(Interphase Boundary)**: 다른 상 사이의 경계
  - **정합(Coherent)**: 격자 연속, 탄성 변형으로 격자 차이 흡수
  - **반정합(Semi-coherent)**: 일부만 격자 일치, 미스핏 전위 발생
  - **부정합(Incoherent)**: 격자 연속성 완전 상실
- **ASTM 결정립 크기**: $N = 2^{n-1}$ (100배 확대 시 평방인치당 결정립 수, $n$이 grain size number)

### 4-4 부피결함 (Bulk Defects)
- **개재물(Inclusion)**: 의도치 않은 제2상 입자 — 황화물, 산화물, 수소화물
- **주조결함**: 수축공(shrinkage cavity), 기공(gas hole)
- **가공/단조결함**: 균열
- **용접결함**

---

## 자주 하는 실수
- Miller index와 방향 표기 혼동: $(hkl)$ vs $[uvw]$ vs $\{hkl\}$ vs $\langle uvw\rangle$
- FCC와 HCP가 같은 APF 0.74임을 모름 (둘 다 close-packed)
- HCP 축비 $c/a$의 이상값 $\sqrt{8/3} \approx 1.633$ 누락
- 전위 밀도 단위 — m/m³ = 1/m² 임을 헷갈림
- 결정립 경계 에너지 < 자유표면 에너지 (양쪽 결합이 있는 vs 한쪽뿐) 부등호 방향
- 면간거리 식에 $hkl$ 부호를 포함시키는 실수 (제곱이므로 무관)

## 관련 개념
- [[Lecture02 확산과 기계적 성질]] — 전위가 슬립으로 이어짐
- [[Lecture03 파괴·상태도·금속합금]] — 결함이 파괴 거동에 미치는 영향

## 참고
- Callister, *Materials Science and Engineering: An Introduction*
- 강의자료 Lecture_1.pdf
