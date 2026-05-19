---
title: "Chap01 — 서론과 기본 개념"
tags: [note, me, thermodynamics, chapter]
domain: ME
subject: Thermodynamics
chapter: 1
source: "Cengel & Boles, *Thermodynamics: An Engineering Approach*, 10e — Prof. 전충환 (PNU, PCERI)"
created: 2026-05-19
---

⬅︎ [[ME-MOC]] · 다음 → [[Chap02 에너지와 에너지 전달]]

## 한 줄 요약
열역학의 언어(계·상태·과정·평형)와 단위·온도·압력을 정의하고, 이후 모든 분석의 출발점을 깐다.

## 학습 목표
- 계(system), 상태(state), 평형(equilibrium), 과정(process), 사이클(cycle) 개념 정립
- SI 단위와 단위 변환(차원 동질성, unity conversion ratio)
- 밀도·비중·비중량 정의
- 온도척도(°C, K, °F, R)와 0번째 법칙
- 절대압·게이지압·진공압, 유체정역학적 압력, 압력측정기기

## 1-1 열역학과 에너지
- **Thermodynamics** = therme(열) + dynamis(동력)
- **에너지 보존**: 형태만 바뀌고 총량은 일정 → 제1법칙
- **제2법칙**: 에너지는 양뿐 아니라 **질(quality)** 도 있고, 자연 과정은 질이 감소하는 방향으로 진행
- 거시(classical) vs 통계(statistical) 열역학

## 1-2 차원과 단위
- 1차 차원: $L, M, t, T, I, \text{cd}, \text{mol}$
- $F = ma$ → 1 N = 1 kg·m/s², 1 lbf = 32.174 lbm·ft/s²
- $W = mg$ (무게는 위치 의존, 질량은 불변)
- **차원 동질성**: 모든 항의 단위가 일치해야 함
- **Unity conversion ratio**: 항상 1인 무차원 비 → 단위 변환에 끼워 넣음

## 1-3 계와 검사체적
- **계(System)** / 주위(Surroundings) / 경계(Boundary)
- **닫힌계(Closed)** = control mass — 질량 못 넘음, 에너지는 가능
- **열린계(Open)** = control volume(CV) — 질량·에너지 모두 통과
- 경계는 고정/이동, 실재/가상 어느 것이든 가능

## 1-4 계의 성질
- **Intensive**: 질량 무관 (T, P, ρ)
- **Extensive**: 질량에 비례 (V, m, E)
- **Specific**: extensive ÷ m  (예: $v = V/m$)
- **Continuum 가정**: 원자 구조 무시, 연속 매질로 취급

## 1-5 밀도와 비중
- 밀도 $\rho = m/V$, 비체적 $v = 1/\rho$
- 비중 $SG = \rho / \rho_{H_2O}$
- 비중량 $\gamma_s = \rho g$ [N/m³]

## 1-6 상태와 평형
- 평형 종류: 열적, 역학적, 상(phase), 화학적
- **상태 가설(State postulate)**: 단순 압축성계의 상태는 서로 독립인 두 intensive 성질로 완전히 결정됨

## 1-7 과정과 사이클
- **Process**: 한 평형 상태 → 다른 평형 상태
- **Quasi-equilibrium(준평형)**: 무한히 천천히 진행 — 이론적 이상화
- iso- 접두사: isothermal(T), isobaric(P), isochoric(v)
- **Cycle**: 초기상태 = 최종상태
- **Steady-flow process**: 시간에 따라 CV 내부 성질 불변(위치별로는 변할 수 있음)

## 1-8 온도와 0번째 법칙
- **Zeroth law**: A↔C, B↔C 열평형 → A↔B 열평형
- 척도: Celsius/Kelvin (SI), Fahrenheit/Rankine (E)
- $T(K) = T(°C) + 273.15$
- $T(R) = T(°F) + 459.67 = 1.8\,T(K)$
- 2018년 SI 재정의: 켈빈은 Boltzmann 상수 $k = 1.380649 \times 10^{-23}$ J/K로 정의

## 1-9 압력
- $P = F/A$, 1 Pa = 1 N/m², 1 atm = 101.325 kPa
- **절대압 / 게이지압 / 진공압**
  - $P_\text{gage} = P_\text{abs} - P_\text{atm}$
  - $P_\text{vac} = P_\text{atm} - P_\text{abs}$
- 정지유체 깊이에 따른 압력: $\Delta P = \rho g \Delta z$
- **파스칼 법칙**: 밀폐 유체에 가한 압력은 모든 방향으로 동일 → 유압잭

## 1-10 압력 측정
- **Barometer**: $P_\text{atm} = \rho g h$ (수은주 760 mm @ 0 °C = 1 atm)
- **Manometer**: 적층 유체층마다 $\rho g h$ 누적
- 기타: Bourdon tube, 다이어프램(스트레인 게이지), 압전 트랜스듀서

## 1-11 문제 해결 절차
1. 문제 진술 → 2. 개략도 → 3. 가정·근사 → 4. 물리법칙 → 5. 물성 → 6. 계산 → 7. 검토

## 자주 하는 실수
- 단위 혼용 (특히 lbm vs lbf, kPa vs MPa)
- 게이지압을 그대로 이상기체 식 $PV=mRT$에 대입 (절대압을 써야 함)
- 비평형/비정상 과정에 정상유동 가정 적용
- T(°C) ↔ T(K) 변환에서 273.15 누락

## 관련 개념
- [[열역학 제1법칙]]
- [[Chap02 에너지와 에너지 전달]]

## 참고
- Cengel & Boles, *Thermodynamics*, 10e, Ch. 1
- 전충환 교수 강의자료 (PNU, PCERI), 2026
