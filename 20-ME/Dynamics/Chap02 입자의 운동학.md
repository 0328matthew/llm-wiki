---
title: "Chap02 — 입자의 운동학"
tags: [note, me, dynamics, lecture]
domain: ME
subject: Dynamics
created: 2026-09-22
source_pdf: "https://drive.google.com/file/d/1WHLNlWQRT6tFXrYVIzraLGHObR3Ng5r9/view"
---

⬅︎ [[Chap01 동역학의 기초]] · [[Dynamics]]

## 한 줄 요약
입자의 위치를 시간에 따라 미분하면 속도와 가속도가 되며, 운동 경로에 맞는 좌표계를 골라야 성분의 의미가 드러난다.

---

## 직선 운동
기준선 위의 부호 있는 좌표 $s(t)$를 쓰면 $v=\dot s$, $a=\dot v=\ddot s$다. 가속도가 시간·속도·위치의 함수 중 무엇으로 주어졌는지에 따라 다음 식을 고른다.

| 주어진 관계 | 적분에 쓰는 식 | 얻는 것 |
|---|---|---|
| $v(t)$ | $ds=v\,dt$ | 변위 |
| $a(t)$ | $dv=a\,dt$ | 속도 |
| $a(s)$ | $a\,ds=v\,dv$ | 위치에 따른 속도 |

가속도가 일정하면 $v=v_0+at$, $s=s_0+v_0t+\tfrac12at^2$, $v^2=v_0^2+2a(s-s_0)$다. 속도–시간 그래프의 **부호 있는 면적**은 변위이며, 가속도–시간 그래프의 면적은 속도 변화다. 이동 거리는 방향이 바뀌는 시각을 나눠 $\int|v|dt$로 계산한다.

## 곡선 운동과 직교좌표
$\mathbf r=x\mathbf e_x+y\mathbf e_y+z\mathbf e_z$에서 단위벡터가 고정되어 있으므로 $\mathbf v=\dot x\mathbf e_x+\dot y\mathbf e_y+\dot z\mathbf e_z$, $\mathbf a=\ddot x\mathbf e_x+\ddot y\mathbf e_y+\ddot z\mathbf e_z$다. 발사체에서 위쪽을 양으로 잡으면 $a_x=0$, $a_y=-g$이므로 $x=x_0+v_{0x}t$, $y=y_0+v_{0y}t-\tfrac12gt^2$다(공기저항 무시).

## 법선·접선 좌표
진행 방향의 접선 $\mathbf e_t$와 곡률 중심 방향의 법선 $\mathbf e_n$을 쓰면
$$\mathbf v=v\mathbf e_t,\qquad \mathbf a=\dot v\mathbf e_t+\frac{v^2}{\rho}\mathbf e_n.$$
$\rho$는 경로의 곡률반경이다. 접선 성분은 속력 변화를, 법선 성분은 방향 변화를 나타낸다. 원운동에서는 $\rho=r$이고, 일정한 속력이어도 $v^2/r$의 구심가속도가 존재한다.

## 극좌표와 원통좌표
평면 극좌표 $(r,\theta)$의 단위벡터는 회전하므로 $\dot{\mathbf e}_r=\dot\theta\mathbf e_\theta$, $\dot{\mathbf e}_\theta=-\dot\theta\mathbf e_r$이다. 따라서
$$\mathbf v=\dot r\mathbf e_r+r\dot\theta\mathbf e_\theta,$$
$$\mathbf a=(\ddot r-r\dot\theta^2)\mathbf e_r+(r\ddot\theta+2\dot r\dot\theta)\mathbf e_\theta.$$
원통좌표에서는 여기에 $\dot z\mathbf e_z$와 $\ddot z\mathbf e_z$를 각각 더한다. 구면좌표도 필기에 소개되지만 각도의 정의가 관례마다 다르므로 실제 성분식은 해당 그림의 $\theta,\phi$ 정의를 먼저 확인한다.

## 상대 운동과 구속 조건
회전하지 않는 병진 기준틀에서는 $\mathbf r_A=\mathbf r_B+\mathbf r_{A/B}$를 미분하여 $\mathbf v_A=\mathbf v_B+\mathbf v_{A/B}$, $\mathbf a_A=\mathbf a_B+\mathbf a_{A/B}$를 얻는다. 회전 기준틀에서는 단위벡터의 시간 변화와 회전항을 추가해야 한다.

도르래 줄의 전체 길이가 일정하면 움직이는 구간의 길이 합 $L=\mathrm{const}$를 먼저 적고 한 번 미분해 속도 관계, 다시 미분해 가속도 관계를 얻는다. 예를 들어 같은 양의 방향으로 측정한 길이가 $L=s_A+2s_B+C$면 $v_A+2v_B=0$, $a_A+2a_B=0$이다. 계수 2는 움직이는 도르래를 지지하는 줄의 두 구간에서 나온다.

## 필기 예제 검산
필기의 2/9 예제에 적힌 $\theta(t)=0.2t+0.02t^3$을 그대로 미분하면 $\dot\theta=0.2+0.06t^2$, $\ddot\theta=0.12t$이다. 필기에 사용된 $0.2+0.04t^2$, $0.04$와 다르므로 문제의 원래 $\theta(t)$ 또는 필기 전개를 다시 확인해야 한다. 이 예제의 최종 숫자는 그대로 옮기지 않았다.

## 자주 하는 실수
- 법선 가속도를 속력이 변할 때에만 있다고 생각하는 것.
- 극좌표에서 $\mathbf e_r,\mathbf e_\theta$를 고정 벡터처럼 미분하는 것.
- 줄 길이의 각 구간과 양의 방향을 명시하지 않고 속도 부호만 외우는 것.
- 속도–시간 그래프의 부호 있는 면적을 이동 거리로 바로 읽는 것.

## 관련 개념
- [[Chap01 동역학의 기초]]
- [[Newton 운동방정식]]
- [[Dynamics]]

## 참고
- [동역학 2장 필기 PDF](https://drive.google.com/file/d/1WHLNlWQRT6tFXrYVIzraLGHObR3Ng5r9/view)
- 도르래 배치와 곡선 좌표의 방향은 원본 그림을 함께 확인한다.
