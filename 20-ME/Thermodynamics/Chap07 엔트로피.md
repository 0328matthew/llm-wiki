---
title: "Chap07 — 엔트로피"
tags: [note, me, thermodynamics, chapter]
domain: ME
subject: Thermodynamics
chapter: 7
source: "Cengel & Boles, *Thermodynamics: An Engineering Approach*, 10e — Prof. 전충환 (PNU)"
created: 2026-05-19
---

⬅︎ [[Chap06 열역학 제2법칙]] · [[Thermodynamics]] · 다음 → [[Chap08 엔트로피 해석]]

## 한 줄 요약
2법칙을 **상태량**으로 정량화한 것이 **엔트로피 $S$**. 자연 과정 방향성을 식으로: $\Delta S_\text{universe} \ge 0$.

## 7-1 Clausius 부등식과 엔트로피
**Clausius 부등식**: 임의 사이클에서
$$
\oint \frac{\delta Q}{T} \le 0
$$
가역이면 등호. 가역 사이클이라는 사실로부터 **엔트로피**를 정의:
$$
\boxed{\;dS \equiv \left(\frac{\delta Q}{T}\right)_\text{int rev}\;}\qquad [\text{kJ/K}]
$$
$S$는 **상태함수** — 경로와 무관.

## 7-2 엔트로피 생성과 엔트로피 증가 원리
일반(비가역 포함) 과정:
$$
dS_\text{sys} \ge \frac{\delta Q}{T}_\text{boundary}
$$
**엔트로피 평형**:
$$
\boxed{\;\Delta S_\text{sys} = \int \frac{\delta Q}{T_b} + S_\text{gen}\;},\qquad S_\text{gen} \ge 0
$$
- $S_\text{gen} = 0$: 가역  
- $S_\text{gen} > 0$: 비가역  
- $S_\text{gen} < 0$: **불가능**

**고립계**: $\Delta S_\text{isolated} \ge 0$. 우주 = 가장 큰 고립계 → 엔트로피 증가 원리.

## 7-3 순물질의 엔트로피 변화
- 증기표/냉매표에서 $s$ 직접 읽음
- 포화 혼합물: $s = s_f + x\,s_{fg}$
- 압축액: $s \approx s_f(T)$

## 7-4 등엔트로피 과정 (Isentropic)
가역 + 단열 = **등엔트로피** ($\Delta s = 0$)
- 이상화된 노즐·터빈·압축기·펌프의 기준
- 실제 성능은 [[Chap08 엔트로피 해석]]의 등엔트로피 효율로 측정

## 7-5 엔트로피 관련 상태량 선도
- **T–s 선도**: 가역 과정에서 곡선 아래 면적 = $q = \int T\,ds$
- **Mollier 선도(h–s)**: 터빈·노즐 해석에 유용 (수직 거리 = $\Delta h$, 수평 = $\Delta s$)
- 등엔트로피 = T-s 선도 위 수직선

## 7-6 엔트로피란 무엇인가
- **무질서(disorder)의 척도** — 통계역학적 해석 (Boltzmann): $S = k\ln W$
- 분자 배치 가능 수 ↑ → $S$ ↑
- 결정고체 0 K → $S = 0$ (제3법칙)

## 7-7 미분 엔트로피 관계 — **Tds 식**
$$
\boxed{\;T\,ds = du + P\,dv\;}\qquad \boxed{\;T\,ds = dh - v\,dP\;}
$$
순수 압축성계에 보편적용 (가역·비가역 무관, 상태량 사이 관계이므로).

## 7-8 액체·고체의 엔트로피 변화
**비압축성**: $du = c\,dT$, $dv = 0$
$$
\Delta s = \int_1^2 \frac{c(T)}{T}\,dT \approx c_\text{avg}\ln\frac{T_2}{T_1}
$$
- 등엔트로피 + 비압축성 → 등온

## 7-9 이상기체의 엔트로피 변화
$$
ds = c_v(T)\frac{dT}{T} + R\frac{dv}{v} = c_p(T)\frac{dT}{T} - R\frac{dP}{P}
$$
- **일정 비열**:
$$
\Delta s = c_v\ln\frac{T_2}{T_1} + R\ln\frac{v_2}{v_1} = c_p\ln\frac{T_2}{T_1} - R\ln\frac{P_2}{P_1}
$$
- **가변 비열**(표 A-17): $s_2^\circ - s_1^\circ$ 사용 + $-R\ln(P_2/P_1)$

### 이상기체 등엔트로피 관계 (일정 비열)
$$
\left(\frac{T_2}{T_1}\right) = \left(\frac{v_1}{v_2}\right)^{k-1} = \left(\frac{P_2}{P_1}\right)^{(k-1)/k}
$$
$$
P v^k = \text{const}, \quad k = c_p/c_v
$$

### 가변 비열용 — **상대 압력 $P_r$, 상대 비체적 $v_r$**
표에서 $P_r(T), v_r(T)$를 읽어
$$
\frac{P_2}{P_1} = \frac{P_{r2}}{P_{r1}},\qquad \frac{v_2}{v_1} = \frac{v_{r2}}{v_{r1}}
$$

## 자주 하는 실수
- 비가역 단열에 $\Delta s = 0$ 적용 (단열일 뿐 등엔트로피 아님 — 비가역이면 $\Delta s > 0$)
- 부호: $S_\text{gen}$은 **계 + 주위**의 발생량 합산이지 계만 계산하면 X
- T-s 곡선 아래 면적 = $q$는 **가역**일 때만
- 일정 비열 가정 큰 ΔT에서 사용
- $\ln(P_2/P_1)$ 항에서 P는 절대압

## LLM × 이 주제
- "이 과정이 가능한가?" → $S_\text{gen}$ 부호 검토 자동화
- T-s, h-s 선도 위 사이클(Rankine, Brayton) 시각화 + LLM 해설

## 관련 개념
- [[열역학 제2법칙과 엔트로피]]
- [[Chap06 열역학 제2법칙]]
- [[Chap08 엔트로피 해석]]

## 참고
- Cengel & Boles, *Thermodynamics*, 10e, Ch. 7
- 전충환 교수 강의자료, 2026-05-01
