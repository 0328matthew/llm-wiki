---
title: "Chap05 — 검사체적의 질량·에너지 해석"
tags: [note, me, thermodynamics, chapter]
domain: ME
subject: Thermodynamics
chapter: 5
source: "Cengel & Boles, *Thermodynamics: An Engineering Approach*, 10e — Prof. 전충환 (PNU)"
created: 2026-05-19
---

⬅︎ [[Chap04 닫힌계의 에너지 해석]] · [[ME-MOC]] · 다음 → [[Chap06 열역학 제2법칙]]

## 한 줄 요약
질량이 경계를 넘는 **열린계(CV)** 에 질량 보존 + 1법칙을 적용. 정상유동(steady-flow)과 비정상유동(unsteady-flow) 두 경우로 나눠 푼다.

## 5-1 질량 보존
$$
\dot m = \rho V_\text{avg} A_c = \rho \dot V
$$
$$
\boxed{\;\frac{dm_\text{CV}}{dt} = \sum_\text{in}\dot m - \sum_\text{out}\dot m\;}
$$
- **정상유동**: $\sum \dot m_\text{in} = \sum \dot m_\text{out}$
- 단일 입출구: $\rho_1 V_1 A_1 = \rho_2 V_2 A_2$ (연속방정식)
- 비압축성 정상유동: $\dot V_1 = \dot V_2$

## 5-2 유동 일과 유동 유체의 에너지
- **유동일(Flow work)**: CV 안으로 단위질량을 밀어 넣는 데 필요한 일 = $Pv$
- 흐르는 유체의 단위질량당 총에너지:
$$
\theta = h + \tfrac12 V^2 + g z
$$
여기서 엔탈피 $h = u + Pv$가 이미 유동일을 포함.

## 5-3 정상유동 시스템의 에너지 해석
$$
\boxed{\;\dot Q - \dot W_s = \sum_\text{out}\dot m\!\left(h + \tfrac{V^2}{2} + g z\right) - \sum_\text{in}\dot m\!\left(h + \tfrac{V^2}{2} + g z\right)\;}
$$

단일 입출구·정상상태:
$$
q - w_s = (h_2 - h_1) + \tfrac{V_2^2 - V_1^2}{2} + g(z_2 - z_1)
$$

## 5-4 주요 정상유동 장치
| 장치 | 모델링 |
|---|---|
| **노즐/디퓨저** | $\dot Q \approx 0, \dot W_s = 0$, $\Delta PE \approx 0$ → $h_1 + V_1^2/2 = h_2 + V_2^2/2$ |
| **터빈** | $\dot Q \approx 0$, $\Delta KE, \Delta PE \approx 0$ → $w_s = h_1 - h_2$ |
| **압축기/펌프** | 단열, $w_\text{in} = h_2 - h_1$ |
| **스로틀밸브(교축)** | $\dot Q = \dot W = 0, \Delta KE, \Delta PE \approx 0$ → $h_1 = h_2$ **(등엔탈피)** |
| **혼합기(Mixing chamber)** | $\dot Q = \dot W = 0$ → $\sum \dot m_\text{in} h_\text{in} = \sum \dot m_\text{out} h_\text{out}$ |
| **열교환기** | $\dot W = 0, \dot Q_\text{ext} \approx 0$ → 각 유체 측 $\dot m \Delta h$ 균형 |
| **파이프/덕트 유동** | 마찰·열손실 포함 — 일반 1법칙 |

> 스로틀이 등엔탈피이지만 **냉장 사이클**에서는 액체→2상 혼합으로 변하면서 T가 떨어진다 ([[Joule-Thomson coefficient]]).

## 5-5 비정상유동(Uniform-flow) 과정
CV의 질량·에너지가 시간에 따라 변함:
$$
m_\text{in} - m_\text{out} = (m_2 - m_1)_\text{CV}
$$
$$
Q - W_s = \left[\sum m\,\theta\right]_\text{out} - \left[\sum m\,\theta\right]_\text{in} + (m_2 u_2 - m_1 u_1)_\text{CV}
$$

대표 예: **가압 탱크 충전·배출**, 보일러 startup.

가정: 입출구에서 유체 성질이 시간에 따라 일정한 **uniform-flow** 모델.

## 자주 하는 실수
- 노즐/디퓨저에서 $\Delta KE$를 무시 (속도 변화가 본질인데!)
- 펌프 효율 정의에서 입출구 부호 (압축기 부호 규약과 동일)
- 스로틀을 단열·등엔탈피 둘 다 아닌 등온으로 오해
- 비정상 유동에서 CV 초기/최종 항을 누락
- 단위: $V^2/2$는 m²/s² = J/kg, $h$는 kJ/kg → 단위 맞추기 위해 1000 나누기 필요

## LLM × 이 주제
- "이 노즐의 출구 속도는?" 같은 문제를 자연어 입력 → 가정 추출 → 식 선택 → 표 조회 자동화
- 사이클(랭킨/브레이튼/냉동) 컴포넌트별 5장 모델 합성

## 관련 개념
- [[Chap04 닫힌계의 에너지 해석]]
- [[Chap08 엔트로피 해석]] — 정상유동에 등엔트로피·효율 적용

## 참고
- Cengel & Boles, *Thermodynamics*, 10e, Ch. 5
- 전충환 교수 강의자료, 2026-04-02
