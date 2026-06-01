---
title: "Chap04 — 닫힌계의 에너지 해석"
tags: [note, me, thermodynamics, chapter]
domain: ME
subject: Thermodynamics
chapter: 4
source: "Cengel & Boles, *Thermodynamics: An Engineering Approach*, 10e — Prof. 전충환 (PNU)"
created: 2026-05-19
---

⬅︎ [[Chap03 순물질의 상태량]] · [[Thermodynamics]] · 다음 → [[Chap05 검사체적의 질량·에너지 해석]]

## 한 줄 요약
경계가 움직이는 닫힌계에 1법칙을 적용해 **boundary work**와 **에너지 평형**을 푸는 챕터. 비열 $c_v, c_p$ 의 의미와 이상기체·고체·액체 근사가 핵심.

## 4-1 이동 경계일 (Moving Boundary Work, $W_b$)
준평형 과정에서:
$$
\boxed{\;W_b = \int_1^2 P\,dV\;}
$$
P–V 선도 아래 면적 = 경계일.

### 대표 과정별 결과
| 과정 | 조건 | $W_b$ |
|---|---|---|
| **등적(Isochoric)** | $V$ = const | $0$ |
| **등압(Isobaric)** | $P$ = const | $P(V_2 - V_1)$ |
| **등온(이상기체)** | $T$ = const | $mRT \ln(V_2/V_1) = P_1V_1\ln(V_2/V_1)$ |
| **폴리트로픽** | $PV^n =$ const, $n\ne1$ | $\dfrac{P_2V_2 - P_1V_1}{1-n}$ |

- 비가역 과정에 $\int P\,dV$를 그대로 쓰면 안 됨 (압력이 잘 정의되지 않음)

## 4-2 닫힌계 에너지 평형
$$
\boxed{\;Q_\text{net,in} - W_\text{net,out} = \Delta U + \Delta KE + \Delta PE\;}
$$
정지 닫힌계: $Q - W = \Delta U = m(u_2 - u_1)$

단위질량/율 형식:
- $q - w = \Delta u$
- $\dot Q - \dot W = dE/dt$

**일반적 형태**: $E_\text{in} - E_\text{out} = \Delta E_\text{sys}$ — 모든 형태의 에너지 (열·일·질량·전기·자기 등) 포함.

## 4-3 비열 (Specific Heats)
정의:
$$
c_v = \left(\frac{\partial u}{\partial T}\right)_v,\quad c_p = \left(\frac{\partial h}{\partial T}\right)_p
$$
- 단위: kJ/(kg·K) 또는 kJ/(kmol·K)
- 일반적으로 **물질·온도의 함수**
- $c_p \ge c_v$ (정압에서 팽창 일까지 해야 하므로)

## 4-4 이상기체의 $u, h, c_v, c_p$
- **Joule 실험**: 이상기체의 $u$는 **$T$만의 함수** → $h = u + Pv = u + RT$도 $T$만의 함수
$$
du = c_v(T)\,dT,\qquad dh = c_p(T)\,dT
$$

핵심 관계:
$$
\boxed{\;c_p - c_v = R\;}\qquad \boxed{\;k = c_p/c_v\;}
$$
- 단원자(He, Ar): $c_v = \tfrac32 R$, $c_p = \tfrac52 R$, $k = 5/3$
- 이원자(공기, $N_2$, $O_2$): 상온에서 $k \approx 1.4$

### $\Delta u, \Delta h$ 계산 3가지
1. **표(이상기체표 A-17 등)** — 가장 정확
2. **평균 비열 $c_v|_\text{avg}, c_p|_\text{avg}$** 적용 — 일반적
3. **상온 비열** 상수 가정 — 온도 변화 작을 때

## 4-5 고체와 액체의 $u, h, c$
**비압축성(incompressible)** 가정: $v \approx$ const → $c_p = c_v = c$

$$
\Delta u = \int c(T)\,dT \approx c_\text{avg}\,\Delta T
$$
$$
\Delta h = \Delta u + v\,\Delta P
$$
- 고체: $\Delta h \approx \Delta u$
- 액체:
  - 등압 가열: $\Delta h = c_p\,\Delta T$
  - 등온 압축: $\Delta h \approx v\,\Delta P$

## 자주 하는 실수
- 폴리트로픽 식에서 $n=1$일 때 일반식 적용 (로그 식을 따로 써야 함)
- 비가역 팽창에 $W = \int P\,dV$
- 이상기체에 대해 $\Delta h = c_p \Delta T$ 쓸 때, $c_p$가 사실 $T$ 함수임을 잊고 큰 $\Delta T$에 상수 적용
- $c_p - c_v = R$를 실제기체에 무비판적으로 적용
- $KE, PE$가 무시 가능하지 않은데 무시

## LLM × 이 주제
- 다양한 과정(등압/등온/폴리트로픽)에 대한 일·열 계산기 — 표 lookup + sympy 통합
- "이 가정 하에서" 결과가 어떻게 달라지는지 설명하는 [[Tool Use]] 데모로 좋음

## 관련 개념
- [[열역학 제1법칙]]
- [[Chap05 검사체적의 질량·에너지 해석]]

## 참고
- Cengel & Boles, *Thermodynamics*, 10e, Ch. 4
- 전충환 교수 강의자료, 2026-03-17
