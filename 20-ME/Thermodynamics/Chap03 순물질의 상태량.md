---
title: "Chap03 — 순물질의 상태량"
tags: [note, me, thermodynamics, chapter]
domain: ME
subject: Thermodynamics
chapter: 3
source: "Cengel & Boles, *Thermodynamics: An Engineering Approach*, 10e — Prof. 전충환 (PNU)"
created: 2026-05-19
---

⬅︎ [[Chap02 에너지와 에너지 전달]] · [[Thermodynamics]] · 다음 → [[Chap04 닫힌계의 에너지 해석]]

## 한 줄 요약
물·냉매 같은 **순물질**의 상태량을 P–v, T–v, P–T 다이어그램과 **증기표 / 이상기체 식**으로 다룰 수 있게 만든다.

## 3-1 순물질(Pure Substance)
- **고정된 화학 조성**을 가진 물질 (액체 물 + 수증기는 OK; 공기는 액화 시 조성 변하므로 엄밀히는 X — but 기체상태에선 순물질로 취급)

## 3-2 상(Phase)
- 고체 / 액체 / 기체. 각 상 내부에서는 분자 배열·결합 에너지가 균일.

## 3-3 순물질의 상변화 과정
정압 가열 시나리오 (1 atm 물):
1. **압축액(Compressed/subcooled liquid)** — $T < T_\text{sat}$
2. **포화액(Saturated liquid)** — 끓기 직전
3. **포화 혼합물(Saturated mixture)** — 액·기 공존, T = const
4. **포화증기(Saturated vapor)** — 마지막 액 입자가 증발
5. **과열증기(Superheated vapor)** — $T > T_\text{sat}$

- **포화온도/포화압력**: $T_\text{sat}(P)$, $P_\text{sat}(T)$
- 잠열: $h_{fg} = h_g - h_f$
- 건도(quality): $x = m_\text{vapor}/m_\text{total}$
$$
y = y_f + x\,(y_g - y_f) = y_f + x\,y_{fg}\quad (y = v, u, h, s)
$$

## 3-4 상태량 다이어그램
- **T–v 다이어그램**: 임계점(critical point) 위/아래 행동
- **P–v 다이어그램**: 임계점 + 고체상 포함 시 삼중선
- **P–T 다이어그램(상도)**: 융해/증발/승화 곡선 + **삼중점**(triple point) + **임계점**
  - 물 임계점: $T_c = 374.14\,°C, P_c = 22.06\,\text{MPa}$
  - 물 삼중점: $T_t = 0.01\,°C, P_t = 0.6117\,\text{kPa}$

## 3-5 상태량 표(Property tables)
- A-4/A-5: **포화** (온도/압력 기준)
- A-6: **과열증기**
- A-7: **압축액** — 보통은 $y \approx y_f(T)$ 근사로 충분
- **엔탈피**: $h = u + Pv$ — 표에서 직접 읽음
- 기준상태: 물은 0.01 °C 포화액 기준 $u_f = 0$, 냉매는 -40 °C 포화액 기준

## 3-6 이상기체 상태식
$$
\boxed{\;Pv = RT \quad\text{또는}\quad PV = mRT = NR_u T\;}
$$
- 보편기체상수 $R_u = 8.314\,\text{kJ/(kmol·K)}$
- 비기체상수 $R = R_u/M$

**적용 한계**: 임계점에서 멀고(저밀도) 극저온이 아닐 때만. 수증기는 1.3 MPa 이하면 0.1 % 미만 오차로 OK; 응축기·보일러처럼 임계점 근처면 표 사용.

## 3-7 압축인자 (Compressibility factor)
$$
Z = \frac{Pv}{RT}
$$
- $Z = 1$이면 이상기체
- **대응상태 원리**: 모든 기체는 동일한 **환산 압력** $P_R = P/P_c$, **환산 온도** $T_R = T/T_c$에서 거의 같은 $Z$ 값
- **일반화 압축인자 도표**(generalized compressibility chart) 사용
- 수정 환산비체적: $v_R = v\,P_c / (R T_c)$

## 3-8 기타 상태식
- **Van der Waals**: $\left(P + \frac{a}{v^2}\right)(v-b) = RT$ — 분자 부피·인력 보정
- **Beattie–Bridgeman**: 5개 상수, ρ < 0.8ρ_c에서 정확
- **Benedict–Webb–Rubin (BWR)**: 8개 상수, ρ ≤ 2.5ρ_c
- **Virial**: $P = \dfrac{RT}{v} + \dfrac{a(T)}{v^2} + \dfrac{b(T)}{v^3} + \cdots$

## 자주 하는 실수
- 포화구역에서 단지 $T, P$로 상태를 결정하려 함 (T, P는 종속 → 건도 필요)
- 압축액에 이상기체식 적용
- 압축액 표 없을 때 $u, h$를 $y_f(P)$가 아니라 $y_f(T)$로 근사해야 하는데 반대로
- $R$ (비기체상수)과 $R_u$ (보편) 혼동
- 표에서 단위 (kJ/kg vs J/g, kPa vs MPa) 실수

## 관련 개념
- [[Chap04 닫힌계의 에너지 해석]] — Cv, Cp는 여기서 본격적으로
- [[Chap07 엔트로피]] — 엔트로피도 같은 표에서 읽음

## 참고
- Cengel & Boles, *Thermodynamics*, 10e, Ch. 3
- 전충환 교수 강의자료, 2026-03-17
