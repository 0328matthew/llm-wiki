---
title: "엑서지"
tags: [note, me, applied-thermodynamics, lecture]
domain: ME
subject: AppliedThermodynamics
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1j4eDyzwchHeYsImMEh1UwUjm9rivcyUx/view"
---

⬅︎ [[Lecture01 열역학 복습]] · [[Applied Thermodynamics]]

## 한 줄 요약
엑서지는 기준 환경에 비해 얻을 수 있는 최대 유용 일을 나타내며 비가역성이 이를 파괴한다.

---

## 에너지와 엑서지
에너지는 보존되지만 **엑서지(exergy)** 는 환경과 평형에 이를 때 얻을 수 있는 최대 유용 일을 나타내며 비가역성으로 파괴된다. 기준 환경의 온도 $T_0$, 압력 $P_0$ 등을 먼저 정해야 한다. 사상태(dead state)에 도달하면 그 환경에 대한 엑서지가 0이다.

## 형태별 엑서지
속도와 높이의 영향은 각각 $V^2/2$, $gz$다. 화학 조성이 중요하면 화학 엑서지까지 고려한다. 강의는 열·일·질량흐름의 엑서지를 구분한다.

닫힌계의 단위 질량 **물리 엑서지**(환경과 평형인 상태 0 기준):
$$\phi=(u-u_0)+P_0(v-v_0)-T_0(s-s_0)+\frac{V^2}{2}+gz.$$
흐름계의 대응 식은
$$\psi=(h-h_0)-T_0(s-s_0)+\frac{V^2}{2}+gz.$$
화학 엑서지나 기준 높이가 필요하면 해당 항을 별도로 포함한다.

## 전달과 파괴
온도 $T$에서 계로 전달되는 열 $Q$의 엑서지는 일정한 경계 온도일 때 $(1-T_0/T)Q$다. 일 전달은 환경을 밀어내는 일을 제외한 **유용 일**로 계산한다.
$$X_{\rm in}-X_{\rm out}-X_{\rm destroyed}=\Delta X_{\rm system},
\qquad X_{\rm destroyed}=T_0S_{\rm gen}\ge0.$$
두 번째 식은 Gouy–Stodola 관계다. 가역적인 경우 파괴량이 0이다.

## 강의의 장치 예
- **벽을 통한 열전도**: 유한한 온도차가 엔트로피를 생성해 엑서지를 파괴한다.
- **증기터빈**: 입출구의 흐름 엑서지와 축일을 비교해 제2법칙 효율을 계산한다.
- **혼합**: 두 흐름의 에너지 보존만으로는 혼합에 따른 일 잠재력 감소를 설명할 수 없다.

## 자주 하는 실수
- 엑서지를 에너지처럼 보존량이라고 취급하거나 기준 환경을 빼놓는 것.
- 열린계에 $u+P_0v$ 형태를 그대로 적용해 엔탈피 $h$에 들어 있는 유동일을 누락하는 것.
- 열의 양 $Q$를 그대로 열의 엑서지로 놓는 것.

## 관련 개념
- [[Thermodynamics]]
- [[ME-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1j4eDyzwchHeYsImMEh1UwUjm9rivcyUx/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
