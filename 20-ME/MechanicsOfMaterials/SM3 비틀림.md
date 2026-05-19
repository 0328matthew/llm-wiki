---
title: "SM-3 — Torsion"
tags: [note, me, solid-mechanics, lecture]
domain: ME
subject: SolidMechanics
section: 3
source: "이태경 교수 강의 (PNU 기계공학부)"
created: 2026-05-19
---

⬅︎ [[SM2 축 하중]] · [[ME-MOC]] · 다음 → [[SM4 굽힘과 처짐]]

## 한 줄 요약
원형축을 비트는 토크 → 단면에 **전단응력**과 **비틀림각**이 발생. 축하중과 평행한 구조: **응력 = 내력 × 거리 / 모멘트** + **변형 = 내력 × 길이 / (강성 × 단면특성)**.

---

## 기본 개념
- **Torsion(비틀림)**: 종축 주위로 회전시키는 모멘트로 인한 변형
- **Torque(토크)**: 비틀림을 일으키는 모멘트
- **Angle of Twist** $\phi$: 한 끝이 다른 끝에 대해 회전한 각

---

## 원형축의 비틀림 변형

### 외표면 전단변형률
$$
\gamma_\text{max} = r\,\frac{d\phi}{dx}
$$
**순수 비틀림(pure torsion)** ($\phi$가 $x$에 선형):
$$
\gamma_\text{max} = \frac{r\phi}{L}
$$

### 축 내부 (반경 $\rho$)
$$
\gamma = \frac{\rho}{r}\gamma_\text{max}
$$
→ 변형률이 **반경에 선형**으로 증가.

### 원형 튜브
- 외표면: $\gamma_\text{max} = r_2\phi/L$
- 내표면: $\gamma_\text{min} = r_1\phi/L$

---

## 선형탄성 — Hooke 법칙
$$
\tau = G\gamma \implies \tau_\text{max} = G r\,\frac{d\phi}{dx},\quad \tau(\rho) = \frac{\rho}{r}\tau_\text{max}
$$

---

## **Torsion Formula** (비틀림 응력식)

내부 토크와 응력의 관계:
$$
T = \int_A \rho\,(\tau\,dA) = \frac{\tau_\text{max}}{r}\int_A \rho^2\,dA = \frac{\tau_\text{max}}{r}I_p
$$

$$
\boxed{\;\tau_\text{max} = \frac{Tr}{I_p},\quad \tau(\rho) = \frac{T\rho}{I_p}\;}
$$

### 극단면 2차모멘트 $I_p$
- **속이 찬 원형축(solid)**:
$$
I_p = \frac{\pi r^4}{2} = \frac{\pi d^4}{32}
$$
- **속 빈 원형축(hollow)**:
$$
I_p = \frac{\pi}{2}(r_2^4 - r_1^4) = \frac{\pi}{32}(d_2^4 - d_1^4)
$$
- **얇은 튜브(thin)**: $I_p \approx 2\pi r_\text{ave}^3 t = \pi d^3 t / 4$

> 같은 무게에서 hollow가 solid보다 $I_p$가 커서 **비틀림 강성이 효율적** — 그래서 자동차 드라이브샤프트는 hollow.

---

## 비틀림각 (Angle of Twist)
**$\tau = T\rho/I_p$와 $\tau_\text{max} = Gr\phi/L$ 결합** →
$$
\boxed{\;\phi = \frac{TL}{GI_p}\;}
$$
- **비틀림 강성도(torsional rigidity)**: $GI_p$
- **비틀림 강성(stiffness)**: $k_T = GI_p/L$
- **비틀림 유연성**: $f_T = L/GI_p$

### 비균일/가변 단면
$$
\phi = \sum_i \frac{T_i L_i}{G_i I_{p,i}},\quad \phi = \int_0^L \frac{T(x)}{G I_p(x)}\,dx
$$

---

## TMD & TDD (Torque Moment Diagram & Twist Displacement Diagram)
- **TMD**: 축방향 위치별 내부 토크
- **TDD**: 축방향 위치별 비틀림각
- 관계:
  - TDD 기울기 = TMD / $GI_p$
  - 두 점 사이 비틀림각 변화 = TMD 곡선 아래 면적 / $GI_p$
- 부호 규약: 벡터 방향이 단면에서 **나가면 (+)**, 들어가면 (−)

---

## 부정정 비틀림 구조

절차:
1. 평형방정식
2. 적합조건 ($\phi$ 일치)
3. 토크-각 관계로 결합
4. 연립 풀이

### 예: 양단 고정 축에 중간 토크 $T$
$$
T_1 + T_2 = T,\quad \phi_1 = \phi_2 \Rightarrow \frac{T_1 L_1}{G_1 I_{p,1}} = \frac{T_2 L_2}{G_2 I_{p,2}}
$$

---

## 경사면 응력 (Torsion + 45°)
순수 비틀림 상태 — Mohr 원 분석 결과:
- **최대 수직응력**: $\sigma_\text{max} = +\tau$ (45°)
- **최소 수직응력**: $\sigma_\text{min} = -\tau$ (−45°)
- **취성 재료(예: 분필)** 가 비틀림에서 45° 나선으로 파괴되는 이유 — 최대 인장응력 평면이 45°에 있기 때문.

---

## 변형에너지
$$
U = \frac{T\phi}{2} = \frac{T^2 L}{2GI_p} = \frac{GI_p \phi^2}{2L}
$$

분할/가변 단면도 축하중과 같은 형태로 누적.

---

## 동력 전달 (Power Transmission)
회전 축이 전달하는 동력:
$$
P = T\omega = 2\pi n T
$$
- $\omega$: 각속도 [rad/s]
- $n$: 회전속도 [rev/s] (또는 rpm을 60으로 나눠)
- 단위: $P$ [W = N·m/s], $T$ [N·m]

설계: 허용 전단응력 $\tau_\text{allow}$ 조건에서 직경 결정.

---

## 비원형 단면
- 직사각형, 타원형 등: **단면이 평면을 유지하지 않음**(warping) → 위의 simple 공식 무효
- 대안: Saint-Venant 비틀림 이론 / **Prandtl stress function**
- 얇은 단면(개·폐단면)은 **Bredt 공식**으로 근사

---

## 자주 하는 실수
- $I_p$ 단위 ($\text{mm}^4$) — 인치 단위 환산 실수
- 토크의 부호 규약 (오른손 법칙) 일관성
- Solid와 hollow에서 $\tau$ 분포가 다른데 같은 식 적용
- 동력 전달에서 $n$이 rpm일 때 $2\pi/60$ 곱하기 누락
- 비원형 단면에 원형 비틀림 공식 그대로 적용

## LLM × 이 주제
- 축 직경 설계 — 토크·rpm·재료 → 최소 직경 계산기
- TMD/TDD 자동 작도 (분할 토크 → 누적 적분)

## 관련 개념
- [[SM2 축 하중]] — 평행한 구조
- [[SM4 굽힘과 처짐]]
- [[Lecture02 확산과 기계적 성질]] — 전단 항복·G·재료 측면

## 참고
- 이태경 교수 강의자료 TL-SM-3
- Beer/Hibbeler, *Mechanics of Materials*, Ch. 3
