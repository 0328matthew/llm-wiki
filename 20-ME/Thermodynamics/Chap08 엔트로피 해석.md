---
title: "Chap08 — 엔트로피 해석 (Entropy Analysis)"
tags: [note, me, thermodynamics, chapter]
domain: ME
subject: Thermodynamics
chapter: 8
source: "Cengel & Boles, *Thermodynamics: An Engineering Approach*, 10e — Prof. 전충환 (PNU)"
created: 2026-05-19
---

⬅︎ [[Chap07 엔트로피]] · [[ME-MOC]] · 다음 → (Ch. 9 — 가스파워사이클로)

## 한 줄 요약
엔트로피를 **공학 장치 해석**에 사용. 가역 정상유동 일의 표현, 등엔트로피 효율, 닫힌계·CV 엔트로피 평형까지.

## 8-1 가역 정상유동 일 (Reversible Steady-Flow Work)
**Tds = dh − vdP** + 가역 + 정상유동 + $\Delta KE, \Delta PE$ 무시:
$$
\boxed{\;w_\text{rev} = -\int_1^2 v\,dP\;}
$$
- **터빈/펌프/압축기** 가역 일을 비체적과 압력 변화로 표현
- 액체 펌프 (비압축성): $w_\text{pump,rev} = v(P_2 - P_1)$
- 이상기체 등온 정상유동 압축: $w_\text{rev} = RT\ln(P_2/P_1)$

**중요**: 같은 압력 변화에 대해 $v$ 가 작은 액체를 펌핑하는 것이 기체를 압축하는 것보다 훨씬 적은 일을 요구 — 랭킨 사이클이 응축수를 펌프로 다루는 이유.

## 8-2 압축기 일의 최소화
다단 압축 + **중간냉각(intercooling)**:
- 단일 압축(단열) > 다단 압축 + 중간냉각 > 등온 압축
- 최적 단간 압력비: 각 단의 압력비를 동일하게
$$
\frac{P_x}{P_1} = \frac{P_2}{P_x} = \sqrt{\frac{P_2}{P_1}}
$$

## 8-3 정상유동 장치의 등엔트로피 효율
**기준**: 동일 입구 상태와 동일 출구 압력에서의 등엔트로피(이상) 과정.

### 터빈
$$
\eta_T = \frac{w_a}{w_s} = \frac{h_1 - h_{2a}}{h_1 - h_{2s}}
$$

### 압축기 (액체→펌프 포함)
$$
\eta_C = \frac{w_s}{w_a} = \frac{h_{2s} - h_1}{h_{2a} - h_1}
$$
펌프: $\eta_P = \dfrac{v(P_2 - P_1)}{h_{2a} - h_1}$

### 노즐
$$
\eta_N = \frac{V_{2a}^2}{V_{2s}^2} = \frac{h_1 - h_{2a}}{h_1 - h_{2s}}
$$

> 실제 효율 < 1. 비가역성 → $h_{2a} > h_{2s}$ (터빈), $h_{2a} > h_{2s}$ (압축기에서도 더 많은 일 필요).

## 8-4 엔트로피 평형 (Entropy Balance)
$$
\boxed{\;\underbrace{S_\text{in} - S_\text{out}}_{\text{transfer by heat \& mass}} + \underbrace{S_\text{gen}}_{\ge 0} = \Delta S_\text{system}\;}
$$

전달 메커니즘:
- **열에 의한 엔트로피 전달**: $S_Q = \int \delta Q / T_b$
- **질량에 의한 엔트로피 전달**: $S_m = m s$
- **일에 의한 엔트로피 전달**: **없음** (일은 엔트로피를 전달하지 않음)

## 8-5 닫힌계 엔트로피 평형
$$
\sum_k \frac{Q_k}{T_k} + S_\text{gen} = \Delta S_\text{sys} = m(s_2 - s_1)
$$
- $T_k$: $k$번째 경계의 온도 (열이 통과하는 곳)
- 단열: 열항 0 → $S_\text{gen} = \Delta S_\text{sys} \ge 0$

## 8-6 검사체적 엔트로피 평형
$$
\sum_k \frac{\dot Q_k}{T_k} + \sum_\text{in} \dot m s - \sum_\text{out} \dot m s + \dot S_\text{gen} = \frac{dS_\text{CV}}{dt}
$$
정상유동·단일 입출구·단열:
$$
\dot S_\text{gen} = \dot m (s_2 - s_1) \ge 0
$$

**활용**:
- 비가역성 정량화 ($\dot S_\text{gen}$ 큰 곳이 손실 큰 곳)
- 실제 장치 평가, 후속 [[Exergy]] 분석의 발판

## 핵심 표 정리
| 식 | 의미 |
|---|---|
| $w_\text{rev} = -\int v\,dP$ | 가역 정상유동 일 |
| $\eta_T = (h_1-h_{2a})/(h_1-h_{2s})$ | 터빈 효율 |
| $\eta_C = (h_{2s}-h_1)/(h_{2a}-h_1)$ | 압축기 효율 |
| $\eta_N = (h_1-h_{2a})/(h_1-h_{2s})$ | 노즐 효율 |
| $\dot S_\text{gen} \ge 0$ | 엔트로피 발생 부등식 |

## 자주 하는 실수
- 등엔트로피 출구 상태 $(P_2, s_1)$ 로 표에서 $h_{2s}$ 읽는 순서 헷갈림
- 펌프 일을 등엔트로피 가정 없이 $v\Delta P$로만 쓰는 것 (실제는 효율 나눠야 함)
- $\dot S_\text{gen}$ 양수 강제하다가 부호 실수
- 열항에서 $T_b$로 **계 평균 T가 아니라 열이 통과하는 경계 T**를 써야 함
- 다단 압축 최적 압력비 공식을 다른 비등엔트로피 효율 경우에 그대로 적용

## LLM × 이 주제
- 사이클(Rankine, Brayton, 냉동) 컴포넌트별 $\eta_\text{is}$ 입력 → 사이클 효율 자동 도출
- $\dot S_\text{gen}$ 분포 시각화 → 가장 비가역성이 큰 컴포넌트 추천

## 관련 개념
- [[Chap07 엔트로피]]
- [[열역학 제2법칙과 엔트로피]]
- [[이상기체 사이클]]

## 참고
- Cengel & Boles, *Thermodynamics*, 10e, Ch. 8
- 전충환 교수 강의자료, 2026-05-01
