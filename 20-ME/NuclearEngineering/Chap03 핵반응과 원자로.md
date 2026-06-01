---
title: "Chap03 — 핵반응과 원자로"
tags: [note, me, nuclear-engineering, chapter]
domain: ME
subject: NuclearEngineering
chapter: 3
source: "원자력공학개론 강의자료 (PNU, 이준엽 교수)"
created: 2026-06-01
---

⬅︎ [[Chap02 원자 및 핵물리]] · [[ME-MOC]] · 다음 → [[Chap04 원자로와 원자력계통]]

## 한 줄 요약
중성자와 핵의 상호작용을 **단면적 $\sigma$**(미시), **거시 단면적 $\Sigma = N\sigma$**, **중성자속 $\phi = nv$** 세 양으로 정량화한다. 이 값들로 반응률, 감속, 흡수, 공명 흡수, 누설을 모두 계산하고, 마지막에 6인자 공식 $k = \eta f \varepsilon p L_f L_t$로 원자로 임계를 결정한다.

## 3-1 중성자와의 핵반응 유형

### 표기법 (incident, emitted)
| 입사 → 방출 | 명칭 | 예 |
|---|---|---|
| (n, n) | 산란 | elastic / inelastic |
| (n, α) | α 방출 반응 | |
| (n, β) | β 방출 반응 | |
| (n, γ) | 방사 포획 (radiative capture) | (n,γ) → 가장 흔함 |
| (n, p) | 양성자 방출 | |
| (n, fission) | 핵분열 | U-235 + n → 분열 |
| (α, n) | 중성자원 반응 | $^9$Be(α,n)$^{12}$C |
| (γ, n) | 광핵분리 | $^9$Be(γ,n)$^8$Be |

### 중성자원 (Neutron sources)
- **Po-Be source**: $^9_4$Be + $^4_2$He → $^{12}_6$C + $^1_0$n + 5.65 MeV
- $^9$Be(γ,n)$^8$Be: 광중성자원

## 3-2 단면적 (Cross Section)

### 중성자속 (Neutron Flux) $\phi$
- 정의: 단위면적·단위시간당 통과하는 중성자 수
$$
\phi = \frac{N}{S \cdot t} = n \cdot v\quad [\text{n/cm}^2 \cdot \text{s}]
$$
- $n$: 중성자 밀도 (n/cm³), $v$: 속도 (cm/s)

### 미시 단면적 (Microscopic) $\sigma$
- 표적핵 하나에 대한 **유효 단면적** (확률에 비례)
- 단위: **barn (b)** = $10^{-24}$ cm²
- 분류:
$$
\sigma_t = \sigma_s + \sigma_a = \sigma_e + \sigma_i + \sigma_c + \sigma_f
$$
| 기호 | 의미 |
|---|---|
| $\sigma_s$ | scattering (산란) = $\sigma_e + \sigma_i$ |
| $\sigma_e$ | elastic |
| $\sigma_i$ | inelastic |
| $\sigma_a$ | absorption = $\sigma_c + \sigma_f$ |
| $\sigma_c$ | capture |
| $\sigma_f$ | fission |
| $\sigma_t$ | total |

### 거시 단면적 (Macroscopic) $\Sigma$
$$
\boxed{\;\Sigma = N \sigma\;}\quad [\text{cm}^{-1}]
$$
- $N$: 표적핵 밀도 (atoms/cm³)
- 단위 체적당 반응률:
$$
\boxed{\;\Sigma \phi = \text{reactions/cm}^3 \cdot \text{s}\;}
$$
| 양 | 의미 |
|---|---|
| $\Sigma_a \phi$ | Absorption/cm³·s |
| $\Sigma_f \phi$ | Fissions/cm³·s |
| $\Sigma_t \phi$ | Total nuclear reactions/cm³·s |

## 3-3 중성자 감속 (Attenuation)

### 감속 방정식
$$
\frac{dI}{dx} = -\Sigma_t \cdot I \;\;\Rightarrow\;\; \boxed{\;I(x) = I_0 e^{-\Sigma_t x}\;}
$$

### 평균 자유 행로 (Mean Free Path)
$$
\boxed{\;\lambda = \frac{1}{\Sigma_t}\;}
$$

## 3-4 복합핵 형성 (Compound Nucleus Formation)

> 중성자가 핵에 흡수되면 일단 들뜬 상태의 **복합핵**을 형성한 뒤 다양한 경로로 붕괴

예: $^{56}$Fe + n → $^{57}$Fe* → 산란/포획/분열 등

## 3-5 산란 충돌에서의 에너지 손실 (Energy Loss in Scattering Collisions)

### 질량중심계 (CM system)
- 환산 질량: $\mu = \frac{mM}{m+M}$
- CM 속도: $v_{cm} = \frac{mv}{m+M}$ (lab에서 표적핵 $V=0$ 가정)

### 산란 후 에너지비
$$
\frac{E'}{E} = \frac{M^2 + m^2 + 2mM\cos\varphi}{(m+M)^2}
$$
- $A = M/m$ (입사입자 대비 표적핵 질량비)로 정의:
$$
\frac{E'}{E} = \frac{1 + A^2 + 2A\cos\varphi}{(1+A)^2}
$$

### α 파라미터
$$
\boxed{\;\alpha = \frac{(A-1)^2}{(A+1)^2}\;}\quad 0 \le \alpha \le 1
$$
$$
\frac{E'}{E} = \frac{1+\alpha}{2} + \frac{1-\alpha}{2}\cos\varphi
$$
- $\varphi = 0$일 때 **최대** $E$ (산란 없음)
- $\varphi = \pi$일 때 **최소** $\alpha E$ (정면 충돌, 최대 에너지 손실)

### 평균 산란 후 에너지
- CM에서 모든 각이 같은 확률 (등방 산란):
$$
\boxed{\;\overline{E'} = \frac{1+\alpha}{2} E\;}
$$

### n회 충돌 후 (로그 평균)
$$
E_n = c_1 c_2 \cdots c_n E_0 \;\;\Rightarrow\;\; \ln E_n = n\langle \ln c_i\rangle + \ln E_0
$$
$$
\boxed{\;n = \frac{\ln E_0 - \ln E_n}{-\langle \ln c_i\rangle}\;}
$$

### Lethargy $\xi$ (충돌당 평균 에너지 손실, 로그 스케일)
$$
\xi = \overline{\ln(E/E')} = 1 + \frac{\alpha}{1-\alpha}\ln\alpha = 1 - \frac{(A-1)^2}{2A}\ln\!\left(\frac{A+1}{A-1}\right)
$$

### 속중성자 → 열중성자 평균 충돌 횟수
$$
\bar n = \frac{\ln E_i - \ln E_f}{\xi}
$$

### 감속 성능 지표
- **감속능 (Slowing-down power)**: $\xi \Sigma_s$ — 클수록 좋음
- **감속비 (Slowing-down ratio, Moderation ratio)**: $\frac{\xi \Sigma_s}{\Sigma_a}$ — 감속하면서 흡수가 적을수록 좋음

### 주요 감속재 비교

| 핵종 | A | $\alpha$ | $\xi$ |
|---|---|---|---|
| **Hydrogen** | 1 | **0** | **1.000** |
| H₂O | — | * | 0.920 |
| Deuterium | 2 | 0.111 | 0.725 |
| D₂O | — | * | 0.509 |
| Beryllium | 9 | 0.640 | 0.209 |
| Carbon (graphite) | 12 | 0.716 | 0.158 |
| Oxygen | 16 | 0.779 | 0.120 |
| Uranium | 238 | 0.983 | 0.00838 |

### 경수(H₂O) vs 중수(D₂O)

| 특성 | H₂O | D₂O | D₂O/H₂O |
|---|---|---|---|
| $\Sigma_a$ | 0.022 | 0.000085 | 0.0039 |
| $\Sigma_s$ | 1.64 | 0.35 | 0.213 |
| $\xi$ | 0.93 | 0.51 | 0.548 |
| $\xi\Sigma_s/\Sigma_a$ (감속비) | **72** | **12,000** | 166.67 |

→ D₂O의 감속비가 약 **166배 우수** → CANDU가 천연 우라늄 사용 가능한 이유

## 3-6 핵분열 (Nuclear Fission)

### 역사
- **1932 Chadwick**: Be에 α 조사 중 새 입자(중성자) 발견 → 양으로 대전된 원자핵 쉽게 투과
- **1934 Fermi**: 느린 중성자로 U 조사 → 4가지 β-emitter 검출
- **1939 Hahn & Strassman**: U + n → 두 개 원소로 분리 확인 → 핵분열 발견

### 핵분열 과정
1. **자발적 핵분열 (Spontaneous Fission)**: 외부 자극 없이 핵분열
2. **중성자 유도 핵분열 (Neutron-Induced Fission)**: 충분한 에너지의 중성자 흡수
3. **임계 에너지 (Critical Energy, Threshold)**: 핵분열에 필요한 최소 에너지 — 핵종별로 다름

### 임계에너지 vs 마지막 중성자 결합에너지

> 결합에너지(B.E.) > 임계에너지(C.E.) → 정지 중성자도 흡수 후 핵분열 가능 → **핵분열성 (Fissile)**

| 핵종 (복합핵) | C.E. (MeV) | 마지막 n의 B.E. (MeV) | 비고 |
|---|---|---|---|
| $^{232}$Th | 5.9 | — | |
| $^{233}$Th | 6.5 | 5.1 | |
| $^{233}$U | 5.5 | — | |
| $^{234}$U | 4.6 | 6.6 | |
| **$^{235}$U** | 5.75 | — | |
| **$^{236}$U = U-235 + n** | **5.3** | **6.4** | B.E. > C.E. → fission! |
| $^{238}$U | 5.85 | — | |
| $^{239}$U | 5.5 | 4.9 | |
| $^{239}$Pu | 5.5 | — | |
| $^{240}$Pu | 4.0 | 6.4 | |

### Fissionable vs Fissile

| 분류 | 정의 | 예 |
|---|---|---|
| **Fissionable (핵분열 가능)** | 중성자 흡수 시 분열 가능성 있는 핵종 | Th-232, U-233, U-235, U-238, Pu-239 |
| **Fissile (핵분열성)** | **어떤 에너지의 중성자라도** 흡수 시 분열 (특히 열중성자 OK) | **U-233, U-235, Pu-239, Pu-241** |
| **Fertile (핵분열성 원료)** | 흡수 후 fissile로 변환 | **U-238, Th-232** |

- 동력로(열중성자로)의 대부분 핵분열 = **열중성자 흡수에 의한 유도 핵분열**

### U-235 핵분열 과정
$$
n + ^{235}_{92}U \to {}^{236}_{92}U^* \to \text{Fission Fragments} + 2\sim 3 n + \gamma + \sim 200\,\text{MeV}
$$
- U-235 + n → 여기된 U-236 → γ 방출하며 잉여에너지 → 아령 모양 변형 → 핵력 < 정전기적 척력 → **두 단편으로 분리**
- 분열 파편(Fission Fragments)은 양(+)으로 대전 → 추가 반발력
- 분열 직후(10⁻⁸초 이내) **즉발중성자(Prompt Neutron)** 방출 + **즉발 γ선(Prompt γ-ray)** 방출

### Prompt vs Delayed Neutron

| | Prompt Neutron | Delayed Neutron |
|---|---|---|
| 시점 | 핵분열 즉시 (< 10⁻⁸ s) | 핵분열 후 0.1초~1분 |
| 비율 | **≥ 99%** | < 1% |
| 메커니즘 | 핵분열 파편의 중성자 과잉 해소 | 핵분열 생성물의 β붕괴 후 중성자 방출 |
| 중요성 | 주된 연쇄반응 동인 | **원자로 제어의 핵심** (반응시간 확보) |

### 지발중성자 선행 핵종 (Delayed Neutron Precursors)
- 약 20여 종 발견, **반감기 유사한 것끼리 6군**으로 분류
- 예: $^{87}$Br (55 s) → $^{87}$Kr* → n + $^{86}$Kr

### U-235 핵연료 6군 지발중성자 특성

| 군 | 반감기 (s) | $\lambda_i$ (s⁻¹) | 에너지 (keV) | 핵분열당 생성 | $\beta_i$ |
|---|---|---|---|---|---|
| 1 | 55.72 | 0.0124 | 250 | 0.00052 | 0.000215 |
| 2 | 22.72 | 0.0305 | 560 | 0.00346 | 0.001424 |
| 3 | 6.22 | 0.111 | 405 | 0.00310 | 0.001274 |
| 4 | 2.30 | 0.301 | 450 | 0.00624 | 0.002568 |
| 5 | 0.610 | 1.14 | — | 0.00182 | 0.000748 |
| 6 | 0.230 | 3.01 | — | 0.00066 | 0.000273 |

## 3-7 원자로 내 중성자

### 중성자 에너지 분류
| 분류 | 영역 |
|---|---|
| **속중성자 (Fast)** | 핵분열에서 생성, **~ 2 MeV** |
| **열외중성자 (Epithermal)** | 중간 에너지, 공명 영역 (1 eV ~ 수백 keV) |
| **열중성자 (Thermal)** | 0.025 eV (300K 평형), 주위 원자 운동에너지와 평형 |

### Fission Neutron 변수
- **ν (nu)**: 핵분열성 물질이 핵분열 시 새로 생성되는 중성자의 **평균 수**
- **η (eta)**: 핵연료에 중성자 1개가 흡수될 때 핵분열에 의해 새로 생성되는 중성자 수
$$
\boxed{\;\eta = \nu\,\frac{\sigma_f}{\sigma_a}\;}
$$

### 열중성자 데이터 (0.0253 eV)

| 핵종 | $\sigma_a$ (barn) | $\sigma_f$ (barn) | $\eta$ | $\nu$ |
|---|---|---|---|---|
| $^{233}$U | 578.8 | 531.1 | 2.287 | 2.492 |
| **$^{235}$U** | **680.8** | **582.2** | **2.068** | **2.418** |
| $^{239}$Pu | 1011.3 | 742.5 | 2.108 | 2.871 |
| $^{241}$Pu | 1377 | 1009 | 2.145 | 2.927 |

### 열중성자 vs 속중성자 $\nu, \eta$ 비교

| 핵종 | $\nu$ (0.0253 eV) | $\eta$ (0.0253 eV) | $\nu$ (1 MeV) | $\eta$ (1 MeV) |
|---|---|---|---|---|
| $^{233}$U | 2.492 | 2.287 | 2.58 | 2.40 |
| $^{235}$U | 2.418 | 2.068 | 2.51 | 2.35 |
| $^{239}$Pu | 2.871 | 2.108 | 3.04 | 2.90 |

### 핵분열 스펙트럼 $\chi(E)$
$$
\chi(E)\,dE = \text{핵분열 시 나오는 중성자 중 } E \sim E+dE \text{ 사이의 비율}
$$
$$
\int_0^\infty \chi(E)\,dE = 1
$$
- 실험식: $\chi(E) = 0.453\,e^{-1.0362E}\sinh\sqrt{2.29E}$
- **평균 에너지**: $\bar E = \int_0^\infty E\chi(E)\,dE \approx 1.98\,\text{MeV}$ → **약 2 MeV 속중성자**

## 3-8 핵분열 생성물 (Fission Products)

### 정의
> 핵연료물질이 핵분열하면서 새로이 생성되는 원자핵종.

### 특징
- 핵분열당 보통 **2개** 생성 (ternary fission 제외)
- 중성자 과잉 → 일련의 **β붕괴** 거치며 안정화
- 예: $^{115}$Pd → $^{115}$Ag → $^{115}$Cd → $^{115}$In (stable)
- 현재까지 발견 **약 300여 종**

### 핵분열 수율 분포 ($^{235}$U)
- **2 peak 분포** (mass number 90 부근과 140 부근에서 최대) — 비대칭 분열 선호
- 열중성자 분열은 더 깊은 골, 14 MeV 분열은 비교적 평탄

### 공학적 중요성
- 대부분 **방사성** → 핵연료에 축적
- 방사성 붕괴로 **열 발생** → 지속적 냉각 필요
- 누출 시 환경 오염 → 원자력 안전의 핵심
- 사용후핵연료 장기 처분이 요구되는 근거

### 정지 후 잔열 (Decay Heat)
- β선, γ선 방출 → 원자로 내 흡수 → 열로 변환
$$
\beta(t) = 1.26 \times t^{-1.2}\,\text{MeV/sec}
$$
$$
\gamma(t) = 1.40 \times t^{-1.2}\,\text{MeV/sec}
$$
- 정지 후에도 잔열로 인한 과열 위험 → **잔열제거계통(RHR)** 필수

### 핵분열 에너지 분배 ($^{235}$U)

| Form | Emitted (MeV) | Recoverable (MeV) |
|---|---|---|
| Fission fragments | 168 | 168 |
| Fission product decay β-rays | 8 | 8 |
| Fission product decay γ-rays | 7 | 7 |
| **Neutrinos** | **12** | **— (도주)** |
| Fission neutrons | 5 | 5 |
| Prompt γ-rays | 7 | 7 |
| Capture γ-rays | — | 3~12 |
| **Total** | **207** | **198~207** |

- **중성미자(12 MeV)**: 투과력 강해 원자로 내 흡수 X → 미회수
- 평균 핵분열당 **약 200 MeV** 회수 가능

## 3-9 공명 흡수 (Resonance Absorption)

### 에너지별 흡수 단면적 특성
1) **속중성자 (Fast)**: 핵 주위를 살짝 굴절, 충분히 근접 시에만 흡수 → **작고 불변**
2) **열중성자 (Thermal)**: 핵력에 의해 끌림, 느릴수록 흡수 확률↑ → **에너지 감소에 따라 흡수단면적 증가 (1/v 영역)**
3) **열외중성자 (Epithermal, 중간 영역)**: 원자핵의 **discrete 에너지 준위에 대응하는 중성자**가 입사될 때 흡수 확률 급증 → **공명 (Resonance)**

### 공명 영역 = 1 eV ~ 수백 keV
- U-238의 공명 영역에서 흡수 단면적 매우 큼 ($\sim 10^3$ b 피크)
- U-235도 공명 영역 존재하지만 U-238만큼 크지 않음

### 공명 흡수의 중요성
> 핵분열 시 나온 ν개의 중성자가 감속 도중 모두 공명흡수되면 연쇄반응 불가능
> → **연쇄반응 지속을 위해 감속 도중 공명흡수 손실 최소화 필요**
> → 4-인자 공식의 **공명흡수도피확률 $p$**가 이를 정량화

## 3-10 중성자 누설 (Leakage of Neutrons)

### 정의
> 중성자가 원자로 표면을 통해 밖으로 새어나가는 현상.
> 과도하게 많으면 연쇄반응 지속 불가.

### 중성자류 $\vec j$
$$
\vec j = \text{어떤 방향에 수직인 단위면적·단위시간당 지나가는 총 중성자 수}
$$
- 어떤 면적 $dS$를 단위시간당 지나가는 중성자 수 = $\vec j \cdot d\vec S$
- 원자로 표면 전체에 대해 적분:
$$
\boxed{\;\int_S \vec j \cdot d\vec S = \text{단위시간당 원자로 표면을 새어나가는 총 중성자 수}\;}
$$

## 3-11 증배계수와 원자로 임계 (Multiplication Factor & Reactor Critical)

### 원자로 노심 내 중성자 사이클

```
N (초기 속중성자)
   │ 속핵분열 인자 ε
   ▼
εN ─── 속중성자 누설 (1-L_f) → εN(1-L_f)
   │ 누설 안 함 L_f
   ▼
εL_f N ─── 공명흡수 (1-p) → εL_f N(1-p)
   │ 공명흡수 도피 p
   ▼
εL_f p N (열중성자) ─── 열중성자 누설 (1-L_t) → εL_f p N(1-L_t)
   │ 누설 안 함 L_t
   ▼
εL_f p L_t N ─── 비핵분열 흡수 (1-f) → εL_f p L_t N(1-f)
   │ 핵연료 흡수 f
   ▼
εL_f p L_t f N (핵연료에 흡수)
   │ 중성자 재생 η (새 분열 → 다음 세대)
   ▼
εL_f p L_t f η N (다음 세대 속중성자)
```

### 6가지 변수의 정의

| 기호 | 명칭 | 정의 |
|---|---|---|
| **$\varepsilon$** | 속핵분열 인자 (Fast fission factor) | (열핵분열에 의해 생긴 중성자 + 속핵분열에 의해 생긴 중성자) / 열핵분열에 의해 생긴 중성자 |
| **$L_f$** | 속중성자 비누설확률 | 속중성자가 원자로 밖으로 새어나가지 않을 확률 |
| **$p$** | 공명흡수 도피확률 | 속중성자가 공명흡수를 피하고 무사히 열중성자가 될 확률 |
| **$L_t$** | 열중성자 비누설확률 | 열중성자가 원자로 밖으로 새어나가지 않을 확률 |
| **$f$** | 열중성자 이용확률 (Thermal utilization factor) | 핵연료 물질에 흡수되는 열중성자 수 / 원자로 물질에 흡수되는 총 열중성자 수 |
| **$\eta$** | 중성자 재생인자 | 핵연료에 1개 중성자 흡수될 때마다 핵분열에 의해 새로 생성되는 중성자 수 |

### 증배계수 (Multiplication factor) $k$
$$
\boxed{\;k = \frac{\text{다음 세대의 중성자 수}}{\text{어느 세대의 중성자 수}}\;}
$$

### 6인자 공식 — 유효증배계수
$$
\boxed{\;k_\text{eff} = \eta \cdot f \cdot \varepsilon \cdot p \cdot L_f \cdot L_t\;}
$$

### 4인자 공식 — 무한증배계수 (누설 없음)
$$
\boxed{\;k_\infty = \eta \cdot f \cdot \varepsilon \cdot p\;}
$$
- 크기가 무한대인 가상적인 원자로: $L_f = L_t = 1$

### 잉여증배계수
$$
k_{ex} = k_\text{eff} - 1
$$

### 원자로 상태 ($k$ 값에 따른 분류)

| $k$ | 상태 | 의미 |
|---|---|---|
| $k > 1$ | **초임계 (Super critical)** | 중성자/출력 시간에 따라 증가 |
| $k = 1$ | **임계 (Critical)** | 출력 일정 유지 |
| $k < 1$ | **미임계 (Sub critical)** | 중성자/출력 감소 |

## 3-12 γ선 물질 상호작용 (γ-ray Interaction with Matter)

### Compton 효과 (Photo-Electron Scattering)
- γ선이 전자와 반응 → 에너지 일부를 전자에 전달
- 에너지 잃은 γ선은 파장↑, 전자는 자유전자 됨

### 광전 효과 (Photoelectric Effect)
- γ선 에너지를 전자가 흡수 → 원자 포텐셜 극복하고 전자 방출
- 전자 KE = γ에너지 - 결합에너지

### 쌍 생성 (Pair Production)
- γ선 + 핵 → e⁻ + e⁺ (양전자) 생성
- **최소 1.02 MeV** ($2 \times m_e c^2 = 2 \times 0.511$ MeV) 이상 필요
- 역과정 (Pair Annihilation): e⁻ + e⁺ 만나면 → 2γ로 소멸 (질량 → 에너지)

## 자주 하는 실수
- 미시 단면적 $\sigma$ (cm²)와 거시 단면적 $\Sigma$ (cm⁻¹) 단위 혼동
- "barn"이 큰 단위라고 착각 — 실제로는 $10^{-24}$ cm²로 매우 작음
- Fissile/Fissionable/Fertile 구별 — fissile은 fissionable의 부분집합, fertile은 흡수 후 fissile로 변환
- α 파라미터를 "에너지 손실률"로 착각 — 실제로는 "최소 잔존 비율"
- 6인자 공식에서 누설 vs **비누설** 확률 헷갈림 ($L_f, L_t$는 비누설 = 살아남을 확률)
- 즉발/지발 비율을 핵분열 종류로 착각 — 둘 다 같은 핵분열에서 나오지만 시점만 다름
- "공명흡수가 작아야 좋다" — Fissile은 공명에서 분열 가능하지만 핵연료성(U-238) 공명은 손실

## LLM × 이 주제
- 단면적 데이터 RAG (ENDF/B 핵 데이터 → 사용자 질의)
- 감속재 추천 시스템 ($\xi\Sigma_s/\Sigma_a$ 자동 계산 + 비용/가용성)
- 6인자 공식 단계별 설명 챗봇 (학부 시험 대비)
- γ선 차폐 계산기 (Compton/광전/쌍생성 적분)

## 관련 개념
- [[Chap02 원자 및 핵물리]] — 결합에너지, Q-value
- [[Chap04 원자로와 원자력계통]] — 6인자 공식 응용, 반응도 제어
- [[Chap05 열출력과 원자로 물리]] — 1군 확산방정식, 열출력 $P=\kappa\Sigma_f\phi$

## 참고
- "원자력공학개론" 강의자료, 이준엽 교수 (PNU), 2026 봄학기
- Lamarsh & Baratta, *Introduction to Nuclear Engineering*, Ch. 3~4
- ENDF/B-VIII evaluated nuclear data
