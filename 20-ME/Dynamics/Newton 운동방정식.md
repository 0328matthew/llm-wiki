---
title: Newton 운동방정식
tags: [concept, me, dynamics]
domain: ME
subject: Dynamics
created: 2026-05-19
---

## 정의
> $\vec{F} = m\vec{a}$ — 물체에 작용하는 알짜힘은 질량 × 가속도와 같다 (Newton 제2법칙).

## 직관
- 정역학($\sum F = 0$)의 자연스러운 확장: 평형이 깨지면 **가속도가 생긴다**
- "힘의 원인 = 운동 상태의 변화"
- 좌표계와 [[Free Body Diagram]]을 먼저 잡는 게 핵심

## 형태

### 입자 (Particle)
$$
\sum \vec{F} = m\,\vec{a}
$$

### 강체의 병진 + 회전
$$
\sum \vec{F} = m\,\vec{a}_G, \qquad \sum M_G = I_G\,\alpha
$$
- $\vec{a}_G$: 질량중심 가속도
- $I_G$: 질량중심 주위 관성모멘트

### 곡선 운동 (n-t 좌표)
$$
\sum F_n = m\,\frac{v^2}{\rho}, \qquad \sum F_t = m\,\dot v
$$
- $\rho$: 곡률반경, $v^2/\rho$: 구심가속도

## 풀이 절차
1. FBD 작도 → [[Free Body Diagram]]
2. 좌표계 선택 (직교 / 극 / n-t)
3. 운동방정식 작성
4. 운동학(kinematics) 관계로 미지수 줄이기
5. 적분 or 대수로 풀이

## 일·에너지 / 충격·운동량 vs Newton
- **Newton**: 시간 영역에서 가속도·힘
- **일-에너지**: 위치-속도 관계 (시간 없이) → [[일-에너지 정리]]
- **충격-운동량**: 짧은 시간 큰 힘 (충돌)

문제 유형에 따라 가장 짧은 길을 골라야 함.

## LLM × 이 주제
- 자유낙하·발사체·진자 문제 → CoT + SymPy로 즉시 풀이
- 운동방정식 ODE 자동 적분 (RK4) → [[ODE 수치해법]]
- 시뮬레이션 결과를 자연어로 해설

## 관련 개념
- [[Free Body Diagram]]
- [[일-에너지 정리]]
- [[강체의 회전 운동]]
- [[ODE 수치해법]]

## 참고
- Hibbeler, *Dynamics*, Ch. 13
