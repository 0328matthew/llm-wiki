---
title: "Chap05 — 열출력과 원자로 물리"
tags: [note, me, nuclear-engineering, chapter]
domain: ME
subject: NuclearEngineering
chapter: 5
source: "원자력공학개론 강의자료 (PNU)"
created: 2026-06-01
---

⬅︎ [[Chap04 원자로와 원자력계통]] · [[ME-MOC]] · 다음 → [[Chap06 핵연료주기와 사용후핵연료 처분]]

## 한 줄 요약
원자로 열출력 = $\kappa \Sigma_f \phi$ 의 노심 적분. **중성자속 $\phi$를 풀어야 출력을 안다** → 1군 확산방정식 + 경계조건으로 형상별 $\phi(\vec r)$ 도출. 운전 중 변수(온도·압력·기포)는 **궤환(feedback)** 으로 반응도를 흔든다.

## 5-1 원자로 열출력
### 정의식
단위시간·단위체적당 핵분열 반응 수: $\Sigma_f(\vec r)\phi(\vec r)$
단위시간·단위체적당 발생 열에너지 (출력 밀도):
$$
\boxed{\;P(\vec r) = \kappa\,\Sigma_f(\vec r)\,\phi(\vec r)\;}
$$
- $\kappa$ = 핵분열당 발생 열에너지 (≈ 200 MeV)

원자로 총 열출력:
$$
P = \int_{V_R} \kappa\,\Sigma_f(\vec r)\,\phi(\vec r)\,dV
$$

### 핵심 의존성
$\Sigma_f(\vec r) = N_f(\vec r)\,\sigma_f$ — $N_f$는 노심 내 배치에 따라 결정, $\sigma_f$는 핵종으로 정해짐. **결국 $\phi(\vec r)$ 을 풀어야 출력을 구할 수 있다.**

## 5-2 1군 근사 중성자 확산 방정식
### 노심 내 중성자 평형
$$
\underbrace{\text{누설 손실}}_{(I)} + \underbrace{\text{흡수 손실}}_{(II)} = \underbrace{\text{핵분열 생성}}_{(III)}
$$

### 각 항의 수식화
**(I) 누설**: 중성자류 $\vec J$ 의 표면 적분 → Divergence 정리 → Fick's law
$$
\vec J(\vec r) = -D\,\nabla\phi(\vec r),\qquad (I) = -\int_{V_R} \nabla \cdot D \nabla \phi\,dV
$$

**(II) 흡수**: $(II) = \int_{V_R}\Sigma_a\,\phi\,dV$

**(III) 분열 생성**:
$$
(III) = \int_{V_R}\nu\,\varepsilon\,p\,L_f\,\Sigma_f\,\phi\,dV
$$

### 1군 확산방정식 (미분형)
$$
\boxed{\;-\nabla \cdot D\nabla\phi(\vec r) + \Sigma_a\,\phi(\vec r) = \nu\,\varepsilon\,p\,L_f\,\Sigma_f\,\phi(\vec r)\;}
$$

균질로 ($D, \Sigma_a, \Sigma_f$ 위치 무관)인 경우:
$$
\nabla^2\phi + B^2\phi = 0,\qquad B^2 = \frac{\nu\,\varepsilon\,p\,L_f\,\Sigma_f - \Sigma_a}{D}
$$

### Material vs Geometric Buckling
| | 정의 | 임계 조건 |
|---|---|---|
| **Material Buckling** $B_m^2$ | $(\nu\varepsilon pL_f\Sigma_f - \Sigma_a)/D$ | 물질이 결정 |
| **Geometric Buckling** $B_g^2$ | 노심 형상이 결정 | **$B_m^2 = B_g^2$일 때 임계** |

### 좌표계별 Laplacian
| 좌표계 | $\nabla^2$ |
|---|---|
| 직각 | $\partial_x^2 + \partial_y^2 + \partial_z^2$ |
| 원통 | $\frac{1}{r}\partial_r(r\partial_r) + \frac{1}{r^2}\partial_\varphi^2 + \partial_z^2$ |
| 구 | $\frac{1}{r^2}\partial_r(r^2\partial_r) + \frac{1}{r^2\sin\theta}\partial_\theta(\sin\theta\,\partial_\theta) + \frac{1}{r^2\sin^2\theta}\partial_\varphi^2$ |

### 경계조건
**외부 경계 (진공)**: $\phi(\hat r_s) = 0$ — 외삽 경계면 $\hat r_s = r_s + d$, $d = 0.71\,\lambda_\text{tr}$
$$
D = \frac{1}{3}\lambda_\text{tr},\qquad \lambda_\text{tr} = \frac{1}{\Sigma_\text{tr}} = \frac{1}{\Sigma_s(1-\bar\mu_0)}
$$

**내부 경계 (매질 접촉면)**:
$$
\phi_A(r_i) = \phi_B(r_i),\qquad -D_A\frac{\partial\phi_A}{\partial\eta} = -D_B\frac{\partial\phi_B}{\partial\eta}
$$
(연속 + 미분 가능 조건)

## 5-3 균질로의 열출력 분포
형상별 $\nabla^2\phi + B^2\phi = 0$ 풀이 결과:

| 형상 | $B_g^2$ | $\phi(\vec r)$ |
|---|---|---|
| **무한 평판** (두께 $a$) | $(\pi/\hat a)^2$ | $\phi_0\cos(\pi x/\hat a)$ |
| **육면체** ($a\times b\times c$) | $(\pi/\hat a)^2 + (\pi/\hat b)^2 + (\pi/\hat c)^2$ | $\phi_0\cos\frac{\pi x}{\hat a}\cos\frac{\pi y}{\hat b}\cos\frac{\pi z}{\hat c}$ |
| **구** (반경 $R$) | $(\pi/\hat R)^2$ | $\dfrac{\phi_0}{r}\sin(\pi r/\hat R)$ |
| **유한 원통** ($R, H$) | $(2.405/\hat R)^2 + (\pi/\hat H)^2$ | $\phi_0 J_0(2.405r/\hat R)\cos(\pi z/\hat H)$ |

($\hat a = a + 2d$ 등 외삽 보정)

### 풀이 흐름 (평판 예)
1. 일반해: $\phi(x) = A\cos Bx + C\sin Bx$
2. **대칭성** $\phi(x) = \phi(-x) \Rightarrow C = 0$
3. **경계조건** $\phi(\pm\hat a/2) = 0 \Rightarrow B_n = n\pi/\hat a$ ($n$ 홀수)
4. 시간이 지나면 $B_3$ 이상 모드 소멸, **$B_1 = \pi/\hat a$만 잔존**
5. 따라서 $\phi(x) = A\cos(\pi x/\hat a)$, $A$는 총출력 $P$로 결정

### 첨두출력인자 (Peaking Factor, $P_f$)
$$
\boxed{\;P_f = \frac{\text{노심 최대 출력치}}{\text{노심 평균 출력치}}\;}
$$
- 평판형 외삽 무시: $P_f = \pi/2 \approx 1.57$
- **출력이 평탄해야 핵연료가 고르게 연소** → 핵연료 배치 최적화로 낮춤

### 형상별 중성자속 비교
- **구형** > 무한 원통 > **평판형** (중심 대비 외곽 감소율)
- 노심 가장자리는 누설 확률↑ → 분열 기여↓ → $\phi$ 낮음

## 5-4 궤환 효과 (Feedback Effect)
### 정의
$$
\boxed{\;\text{구성물질의 온도·밀도 변화} \to \text{반응도 변화} \to \text{열출력 변화} \to (\text{loop})\;}
$$
고출력 원자로에서 본질적, **안전성과 직결**.

### Feedback Mechanism의 시정수
| 궤환 현상 | 기호 | 시정수 |
|---|---|---|
| 1차계통 압력 | $P$ | 0.01~0.1 초 |
| 기포 발생 | $\upsilon$ | 0.05~0.1 초 |
| **핵연료 온도** | $T_f$ | **0.1~10 초 (즉발)** |
| 감속재 온도 | $T_m$ | 0.1~1000 초 (지발) |
| Xe·Sm 독작용 | $X_e, S_m$ | 10 시간 |
| 핵연료 소모 | $B$ | 1~16 개월 |

(Xe-135 생성 경로: ${}^{135}\text{Te} \to {}^{135}\text{I} \to {}^{135}\text{Xe} \to {}^{135}\text{Cs}$)

### 반응도 계수
$$
\alpha_x = \frac{\partial\rho}{\partial x} \approx \frac{1}{k}\frac{\partial k}{\partial x}\quad (k\approx 1)
$$
- $\alpha_P$ = 압력계수, $\alpha_{T_f}$ = 연료온도계수, $\alpha_{T_m}$ = 감속재온도계수, $\alpha_\upsilon$ = 기포계수 ...

### 반응도 결손 (Reactivity Defect)
$$
\Delta\rho(T_i \to T_f) = \int_{T_i}^{T_f}\alpha_{T_f}\,dT
$$
온도 등 궤환변수가 큰 폭으로 변할 때 누적된 반응도 변화량. 평균 계수 $\langle\alpha_{T_f}\rangle = \Delta\rho/\Delta T_f$.

## 5-4.3 주요 반응도 계수 상세

### (1) 연료온도계수 $\alpha_{T_f}$ — **Doppler Feedback**
$$
\alpha_{T_f} = \partial\rho/\partial T_f
$$
- **항상 음**의 값 (LWR ≈ $-10^{-5}/{}^\circ\text{C}$) — 원자로 고유 안전 특성의 핵심
- **즉발(Prompt) 계수** — 출력 변화에 가장 빠르게 반응

#### Doppler Broadening 원리
- 정지 핵은 에너지 $E_0$의 중성자만 공명 흡수
- 핵이 멀어지면 → 중성자가 $E_0$보다 큰 에너지 필요, 가까워지면 작은 에너지로도 흡수
- 온도↑ → 핵의 격자 진동↑ → **공명 흡수 가능한 에너지 폭이 넓어짐** (브로드닝)
- → resonance broadens → cross section peak↓ but **에너지 self-shielding ↓** → flux↑ in resonance → **net capture ↑**
- → **음 반응도 효과**

LWR에서 주된 기여: **U-238** (초기), Pu-240 (말기). U-235·Pu-239는 미미.

### (2) 감속재 온도계수 $\alpha_{T_m}$
- 설계에 따라 **양 또는 음** 가능
- **안전상 음이 바람직**
- 지발(Delayed) — 연료 온도 변화가 선행한 후 감속재로 전달
- PWR은 출력 변동 용이를 위해 초기에 약간의 양 허용, 연소 후 음
- **CANDU**는 천연 U + D₂O라 감속재 온도↑ → 중성자 스펙트럼 경화 → $k$↑ 가능성, 세심한 설계 필요

### (3) 감속재 밀도계수 $\alpha_{d_m}$ · 기포계수 $\alpha_\upsilon$
$$
\alpha_{d_m} = \partial\rho/\partial d_m,\qquad \alpha_\upsilon = \partial\rho/\partial\upsilon
$$
- **PWR**: 노심 비등 허용하지 않음 → 밀도/기포 효과 작음, 음
- **BWR**: 비등 활용 → 큰 음의 궤환
  - 온도↑ → 기포율↑ → 감속 효과↓ → $k$↓ → 출력↓

### (4) 압력계수 $\alpha_P$
- **PWR**: 매우 작음, 무시 가능
- **BWR**:
  - 노심압력↑ → 감속재 내 기포 붕괴 → 액체 감속재 밀도↑ → 감속효과↑ → 반응도↑

### (5) 출력계수 $\alpha_P$ (열출력 P 기준)
$$
\alpha_P = \frac{\partial\rho}{\partial P} = \alpha_{T_f}\frac{\partial T_f}{\partial P} + \alpha_{T_m}\frac{\partial T_m}{\partial P}
$$
모든 궤환의 합성. 출력 변화 → 반응도 결손 계산 가능.

## 온도 궤환 부호와 안전성
$$
\rho = (k-1)/k
$$

### $\alpha_T > 0$ 인 경우 — **건설허가 불가**
- 온도↑ → $k$↑ → 출력↑ → 온도 더 ↑ → 발산
- **Core meltdown 가능**
- 인위적 제동이 반드시 필요한 불안정 상태

### $\alpha_T < 0$ 인 경우 — **안전**
- 온도↑ → $k$↓ → 핵분열율↓ → 출력↓ → 온도↓
- 원래 값으로 복귀 (self-regulating)
- $|\alpha_T|$가 클수록 더 빠르게 안정화

## 자주 하는 실수
- 1군 확산방정식 풀이에서 외삽 보정 $\hat a = a + 2d$ 무시 — 큰 노심에서는 영향 작지만 작은 노심/연구로에서 중요
- Doppler 효과를 "온도↑ → 흡수단면적↓ → 반응도↑" 로 단순화 — broadening으로 **resonance 내 flux self-shielding이 풀려** net capture가 증가한다는 점 누락
- BWR과 PWR의 압력계수를 같다고 가정 — BWR은 기포율 변화로 크게 작용
- 첨두출력인자 $P_f = \pi/2$를 모든 형상에 적용 — 평판형 한정값

## LLM × 이 주제
- 형상별 $\phi(\vec r)$ + 출력분포 시각화 도구 (sympy/numpy) — buckling 입력만으로 자동 풀이
- 반응도 궤환 시뮬레이터 — $\alpha_T$ 부호 토글로 안정/발산 거동 비교
- Doppler broadening 애니메이션 + LLM 설명

## 관련 개념
- [[Chap04 원자로와 원자력계통]] — 6-인자 공식, $k_\text{eff}$
- [[Chap06 핵연료주기와 사용후핵연료 처분]]
- [[열역학 제1법칙]] — 출력→증기 사이클 측면
