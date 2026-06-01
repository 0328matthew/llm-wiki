---
title: "SM-1 — Review of Statics: Equilibrium"
tags: [note, me, solid-mechanics, lecture]
domain: ME
subject: SolidMechanics
section: 1
source: "이태경 교수 (PNU 기계공학부, 금속설계연구실) Solid Mechanics"
created: 2026-05-19
---

⬅︎ [[Mechanics of Materials]] · 다음 → [[SM2 축 하중]]

## 한 줄 요약
고체역학은 **변형(deformation)** 을 다루지만 출발점은 정역학의 **평형(equilibrium)**. FBD를 그리고 $\sum F = 0, \sum M = 0$을 풀어 반력·내력을 구하는 것이 모든 분석의 1단계.

## 다루는 범위
> "응용역학의 한 분야로, 다양한 하중을 받는 고체의 **변형 거동**을 다룬다."

가정 (이상화):
- **완전 탄성, 고정, 균질(homogeneous), 등방(isotropic), 비파괴**

## 하중 — Newton의 법칙
- $\sum \mathbf F = 0 \Leftrightarrow \mathbf a = 0$ (정역학적 평형)
- $\sum \mathbf F = m \mathbf a$ (동역학)
- $\mathbf F_{12} = -\mathbf F_{21}$ (작용-반작용)

## 힘과 모멘트

### 종류
- **외력(External force)**: 외부 하중
  - 표면력(Surface) vs 체적력(Body, 예: 중력)
- **내력(Internal force)**: 입자/단면 사이 힘 (계 내부에서 평형)
- **반력(Reaction force)**: 지지점에서 발생

### 하중 형태
| 형태 | 단위 |
|---|---|
| **집중하중(Concentrated)** | N |
| **분포하중(Distributed)** | N/m |
| **모멘트/짝힘(Couple/Moment)** | N·m |

## 평형방정식
공간(3D) — 벡터:
$$
\sum \mathbf F = 0,\quad \sum \mathbf M = 0
$$
스칼라(축별):
$$
\sum F_x = \sum F_y = \sum F_z = 0,\quad \sum M_x = \sum M_y = \sum M_z = 0
$$
평면 문제(2D): $\sum F_x = \sum F_y = \sum M_z = 0$ — 3개 방정식.

## 지지 종류
| 지지 | 구속 | 반력 |
|---|---|---|
| **Fixed (= Clamped)** | 모든 병진 + 회전 | $R_x, R_y, M$ |
| **Pin (= Hinge)** | 모든 병진 | $R_x, R_y$ |
| **Roller** | 한 방향 병진 | $R_n$ (수직만) |

## 자유물체도 (FBD) 절차
1. 분석 대상 분리, 외곽선만 그림
2. 모든 외력·반력·연결력·모멘트 표시
3. 좌표축 설정 (부호 규약)
4. 평형방정식 적용
5. 미지수 풀이

### 활용 예
- 케이블 인장응력: $\sigma = W \sin\alpha / A$
- 허용응력 조건에서 최대 경사각: $\alpha_\text{max} = \arcsin(A\sigma_\text{allow}/W)$
- 트러스 반력: 절점법(method of joints) / 단면법(method of sections)

## 자주 하는 실수
- 분포하중을 합력으로 환산할 때 **작용점(중심)** 계산 누락
- FBD에서 내력·외력 혼동
- 부호 규약 (인장 +, 압축 −) 일관성 결여
- 3D 문제를 2D로 단순화하면서 모멘트 평형 누락
- 마찰력 방향을 운동 방향과 같게 그림 (반대로 그려야 함)

## 관련 개념
- [[Free Body Diagram]]
- [[힘과 모멘트]]
- [[트러스 해석]]
- [[SM2 축 하중]] — 내력 → 응력으로 자연 확장

## 참고
- 이태경 교수 강의자료 TL-SM-1SR
- Beer & Johnston, *Mechanics of Materials*
