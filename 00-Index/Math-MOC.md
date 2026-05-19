---
title: Math MOC
tags: [moc, math]
---

# 📐 Applied Math Map of Content

> 공학에 쓰이는 응용수학 노트의 허브.

⬅︎ 돌아가기: [[Home]]

## Numerical Analysis — 수치해석
> 위치: `25-Math/NumericalAnalysis/`
- [[부동소수점과 오차]] — 절단오차 / 반올림오차
- [[비선형 방정식 풀이]] — Bisection, Newton-Raphson, Secant
- [[선형계 풀이]] — Gauss 소거, LU 분해, 반복법
- [[보간법과 곡선 적합]] — Lagrange, Spline, 최소제곱
- [[수치적분]] — 사다리꼴, Simpson, Gauss quadrature
- [[ODE 수치해법]] — Euler, RK4

## Differential Equations — 미분방정식
> 위치: `25-Math/DifferentialEquations/` · Zill 교재 기반, 양민진 교수 강의 (PNU)
- [[Ch1 미분방정식 입문]] — 분류·해·IVP
- [[Ch2 1계 미분방정식 풀이법]] — 분리·선형·완전·치환·Euler
- [[Ch3 1계 미분방정식 응용]] — 붕괴/냉각/RC/혼합/logistic/Lotka-Volterra
- [[Ch4 고계 선형 미분방정식]] — 특성방정식·미정계수·매개변수 변환·Cauchy-Euler
- [[Ch5 고계 ODE 모델링]] — 스프링/질량·RLC·공명·BVP·좌굴
- [[Ch7 Laplace 변환]] — 정의·평행이동·δ함수·컨볼루션·연립 ODE

## 왜 이걸 LLM 위키에 두는가?
- 수치해석 → **시뮬레이션 결과 해석** + **LLM에게 수치 문제 위임**할 때 한계 이해
- 미분방정식 → 동역학/유체/열전달의 언어, [[ME-MOC|기계공학]]의 거의 모든 모델
- LLM은 정확한 수치 풀이에 약함 → Tool Use(Python, SymPy, NumPy)로 보강 → [[Tool Use]] 참고
