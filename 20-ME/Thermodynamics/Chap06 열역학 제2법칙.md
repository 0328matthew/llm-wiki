---
title: "Chap06 — 열역학 제2법칙"
tags: [note, me, thermodynamics, chapter]
domain: ME
subject: Thermodynamics
chapter: 6
source: "Cengel & Boles, *Thermodynamics: An Engineering Approach*, 10e — Prof. 전충환 (PNU)"
created: 2026-05-19
---

⬅︎ [[Chap05 검사체적의 질량·에너지 해석]] · [[Thermodynamics]] · 다음 → [[Chap07 엔트로피]]

## 한 줄 요약
1법칙은 **양**, 2법칙은 에너지의 **질과 방향**. 열기관·냉동기의 효율 한계를 **Carnot**으로 정량화.

## 6-1 제2법칙 도입
- 1법칙으로는 막을 수 없는 자연 위반: 뜨거운 커피 → 더 뜨거워지지 않음, 공기가 저절로 풍선에 모이지 않음
- **2법칙**: 과정의 진행 방향과 가역성 한계를 규정

## 6-2 열에너지 저장조
- **Thermal reservoir**: 유한한 에너지를 주고받아도 T 변화가 무시되는 가상의 큰 매체 (대양, 대기, 산업 노)
- **Source**(공급) vs **Sink**(흡수)

## 6-3 열기관 (Heat engine)
4가지 특징:
1. 고온 열원에서 $Q_H$ 흡수
2. 일부를 일 $W_\text{net,out}$ 으로
3. 나머지 $Q_L$ 을 저온부로 방출
4. 사이클로 동작

$$
W_\text{net,out} = Q_H - Q_L
$$
$$
\boxed{\;\eta_\text{th} = \frac{W_\text{net,out}}{Q_H} = 1 - \frac{Q_L}{Q_H}\;}
$$

**Kelvin–Planck 표현**: 단일 열저장조와 작용하면서 일을 생성하는 사이클은 존재할 수 없다. — 100 % 효율 열기관 불가.

## 6-4 냉동기와 열펌프
**Clausius 표현**: 저온부에서 고온부로 열을 자발적으로 옮길 수 있는 장치는 존재할 수 없다.

- **냉동기 COP**:
$$
\text{COP}_R = \frac{Q_L}{W_\text{net,in}} = \frac{1}{Q_H/Q_L - 1}
$$
- **열펌프 COP**:
$$
\text{COP}_{HP} = \frac{Q_H}{W_\text{net,in}} = \text{COP}_R + 1
$$

Kelvin–Planck ⟺ Clausius (서로 등가)

## 6-5 영구운동기관 (Perpetual-motion machines)
- **PMM1**: 1법칙 위반 (에너지 무에서 생성) — 불가능
- **PMM2**: 2법칙 위반 (단일 저장조에서 100% 일) — 불가능

## 6-6 가역과 비가역 과정
- **가역(Reversible)**: 흔적 없이 역으로 진행 가능 (이상화)
- **비가역 원인**: 마찰, 자유팽창, 비가역 열전달(유한 ΔT), 비탄성 변형, 화학반응, 혼합, 점성소산

**Internally reversible**: 계 내부에서만 가역  
**Totally reversible**: 계 + 주위 모두 가역

## 6-7 Carnot 사이클
가역 사이클 (열기관용, 시계방향):
1. **등온 가열** ($T_H$): 가역 등온 팽창, $Q_H$ 흡수
2. **단열 팽창**: $T_H \to T_L$
3. **등온 냉각** ($T_L$): 가역 등온 압축, $Q_L$ 방출
4. **단열 압축**: $T_L \to T_H$

**Carnot 원리**:
1. 두 열저장조 사이의 비가역 열기관 효율 ≤ 가역 열기관 효율
2. 두 열저장조 사이 모든 가역 열기관 효율은 동일

## 6-8 열역학적 온도 척도
Carnot 원리 → 열기관 효율은 **두 저장조 온도만의 함수**.
$$
\left(\frac{Q_H}{Q_L}\right)_\text{rev} = \frac{T_H}{T_L}
$$
이로부터 켈빈(절대) 척도 정의.

## 6-9 Carnot 열기관 효율
$$
\boxed{\;\eta_\text{Carnot} = 1 - \frac{T_L}{T_H}\;}\quad (T \text{ in K})
$$
- 실제 효율 < $\eta_\text{Carnot}$ (모든 실기관)
- $T_L \uparrow$ 보다 $T_H \uparrow$ 가 효율 향상에 더 효과적이지만, 재료 한계가 있음

## 6-10 Carnot 냉동기·열펌프
$$
\text{COP}_{R,\text{Carnot}} = \frac{1}{T_H/T_L - 1},\qquad \text{COP}_{HP,\text{Carnot}} = \frac{1}{1 - T_L/T_H}
$$

## 자주 하는 실수
- Carnot 효율 계산에 °C 그대로 대입 (반드시 **절대온도 K**)
- $\eta_\text{th}$와 COP 부호·정의 혼동 ($Q_L$이 분자인지 분모인지)
- 가역 = 준평형으로만 이해 (마찰 등 소산이 추가로 없어야 함)
- "에너지가 보존되니까 100% 변환 가능" — 2법칙 무시

## 관련 개념
- [[열역학 제2법칙과 엔트로피]]
- [[Chap07 엔트로피]]
- [[이상기체 사이클]]

## 참고
- Cengel & Boles, *Thermodynamics*, 10e, Ch. 6
- 전충환 교수 강의자료, 2026-04-27
