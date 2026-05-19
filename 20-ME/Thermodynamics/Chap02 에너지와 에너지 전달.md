---
title: "Chap02 — 에너지, 에너지 전달, 일반적인 에너지 해석"
tags: [note, me, thermodynamics, chapter]
domain: ME
subject: Thermodynamics
chapter: 2
source: "Cengel & Boles, *Thermodynamics: An Engineering Approach*, 10e — Prof. 전충환 (PNU)"
created: 2026-05-19
---

⬅︎ [[Chap01 서론과 기본 개념]] · [[ME-MOC]] · 다음 → [[Chap03 순물질의 상태량]]

## 한 줄 요약
에너지의 **형태**와 그 **전달 메커니즘**(열·일)을 정리하고, 에너지 보존 = 제1법칙을 식으로 쓴다.

## 2-2 에너지의 형태
$$
E = U + KE + PE = U + \tfrac12 m V^2 + m g z
$$
비에너지: $e = u + \tfrac12 V^2 + gz$

- **거시적(macroscopic)**: KE, PE — 외부 기준에 대한 운동·위치 에너지
- **미시적(microscopic)** → 내부에너지 $U$
  - 감지에너지 (sensible): 분자 운동
  - 잠재에너지 (latent): 분자 간 결합
  - 화학·핵 에너지
- **유동에너지(Flow energy)**: 유체가 CV로 들어올 때 동반하는 $Pv$ → 엔탈피 $h = u + Pv$

## 2-3 열에 의한 에너지 전달
- **열(Heat)**: 온도 차에 의해 경계를 넘는 에너지 전달
- **단열(Adiabatic)**: $Q = 0$  (열 절연 또는 동일 온도)
- 단위: J, kJ;  비열 $q = Q/m$
- 전달 메커니즘: **전도(conduction), 대류(convection), 복사(radiation)**

## 2-4 일에 의한 에너지 전달
- **일(Work)**: 열이 아닌 형태로 경계를 넘는 에너지 전달
- 부호 규약 (이 책): 계가 흡수한 열 $Q_\text{in} > 0$, 계가 한 일 $W_\text{out} > 0$
- 열·일은 **경로함수(path function)** — 상태함수가 아님 → 불완전 미분 $\delta Q, \delta W$

## 2-5 역학적 일의 형태
- **축일(Shaft work)**: $W_\text{sh} = 2\pi n \mathcal{T}$
- **스프링 일**: $W_\text{spring} = \tfrac12 k(x_2^2 - x_1^2)$
- **탄성 고체 일, 표면장력 일**
- **중력 일**: $W_g = m g (z_2 - z_1)$
- **가속 일**: $W_a = \tfrac12 m(V_2^2 - V_1^2)$
- 경계 일(이동경계 일)은 [[Chap04 닫힌계의 에너지 해석]]에서.

## 2-6 열역학 제1법칙
**에너지 보존**: 에너지는 생성·소멸되지 않고 형태만 바뀐다.

$$
\boxed{\;E_\text{in} - E_\text{out} = \Delta E_\text{system}\;}
$$

- 열·일·질량 흐름을 모두 합쳐 경계 통과 에너지 = 내부 에너지 변화
- 닫힌계: $Q_\text{net,in} - W_\text{net,out} = \Delta U + \Delta KE + \Delta PE$
- 사이클: $\oint dE = 0 \Rightarrow Q_\text{net} = W_\text{net}$

## 2-7 에너지 변환 효율
- 일반 정의: $\eta = \dfrac{\text{useful output}}{\text{input}}$
- **연소기기**: $\eta_\text{comb} = \dfrac{Q_\text{out}}{m_\text{fuel}\,\text{HV}}$ (HV: heating value, HHV/LHV 구분)
- **열기관(Heat engine)**: $\eta_\text{th} = W_\text{net}/Q_\text{in}$
- **펌프**: $\eta_\text{pump}$;  **모터**: $\eta_\text{motor}$;  **결합 효율**: 곱
- **조명·전기기기 효율**, **전력 발전기 효율**

## 2-8 에너지와 환경
- 대기오염: $\text{CO}, \text{NO}_x, \text{SO}_x, \text{PM}, \text{VOC}$
- 산성비, 스모그, 온실효과(주범: $\text{CO}_2, \text{CH}_4, \text{N}_2\text{O}$)
- 에너지 효율 향상 = 직접적인 환경 개선

## 핵심 수식 정리
| 양 | 식 |
|---|---|
| 비내부에너지 | $u = U/m$ |
| 비엔탈피 | $h = u + Pv$ |
| 운동에너지 | $KE = \tfrac12 m V^2$ |
| 위치에너지 | $PE = m g z$ |
| 축일 | $W_\text{sh} = 2\pi n \mathcal{T}$ |
| 1법칙 | $Q - W = \Delta E_\text{sys}$ |

## 자주 하는 실수
- 열·일을 상태량처럼 취급 ($Q_1, Q_2$ 같은 표기 X — $\Delta Q$도 X)
- 부호 규약 혼용 (화학에서는 $W$ 부호가 반대)
- HHV/LHV 구분 안 함 (응축수 잠열 포함 여부)

## 관련 개념
- [[열역학 제1법칙]]
- [[Chap04 닫힌계의 에너지 해석]]
- [[Chap05 검사체적의 질량·에너지 해석]]

## 참고
- Cengel & Boles, *Thermodynamics*, 10e, Ch. 2
- 전충환 교수 강의자료, 2026-03-09
