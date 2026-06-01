---
title: "Chap06 — 핵연료주기와 사용후핵연료 처분"
tags: [note, me, nuclear-engineering, chapter]
domain: ME
subject: NuclearEngineering
chapter: 6
source: "원자력공학개론 강의자료 (PNU)"
created: 2026-06-01
---

⬅︎ [[Chap05 열출력과 원자로 물리]] · [[ME-MOC]]

## 한 줄 요약
핵연료주기 = **광석 → 정련 → 변환 → 농축 → 성형 → 발전 → 저장 → (재처리) → 처분** 의 산업 사이클. **Open(직접 처분) vs Closed(재처리)** 정책 선택이 후행 단계 전부를 결정한다.

## 6-1 핵연료주기 개요
### 정의
> The series of industrial processes which involve the production of electricity from uranium in nuclear power reactors — all activities related to the use of fissile materials in fission reactors.

### Front-end vs Back-end
| Front-End Cycle | Back-End Cycle |
|---|---|
| Exploration | Interim Storage |
| Mining & Milling | Transportation |
| Uranium Conversion | Reprocessing |
| Enrichment | Partitioning & Transmutation |
| Fabrication | Waste Disposal |

(중간에 **Nuclear Reactor**)

### 사이클 형태
- **Open Cycle (열린 핵연료주기)**: 사용후핵연료 → 임시저장 → 영구처분 (재처리 없음)
- **Closed Cycle (닫힌 핵연료주기)**: 재처리 → Pu 회수 → **MOX 연료** 재이용 → 폐기물만 처분

## 6-2 Front-End: 광석에서 핵연료까지

### Uranium Mining
우라늄 광석 농도 (World Nuclear Association):
| 종류 | 농도 |
|---|---|
| Very high-grade (Canada) | 200,000 ppm (20%) |
| High-grade | 20,000 ppm (2%) |
| Low-grade | 1,000 ppm (0.1%) |
| Very low-grade (Namibia) | 100 ppm (0.01%) |
| 화강암 | 3~5 ppm |
| 지구 지각 | 2.8 ppm |
| 해수 | 0.003 ppm |

채광법: **Open pit** (지표) / **Underground** (>100 m, 라돈 환기 주의) / **In-situ Leaching** (약산 주입 → 용해)

### 세계 U 매장량 (2017, kton)
1. 호주 1,818 (30%) — 2. 카자흐스탄 842 (14%) — 3. 캐나다 514 (8%) — 4. 러시아 485 (8%) — 5. 나미비아 442 (7%)

### Milling (정련)
- 원광 → **U₃O₈ (Yellowcake)** 농축물 (80~90% U)
- 1) 분쇄 → 2) 황산(또는 알칼리) **Leaching** → 3) U₃O₈ 침전 → 4) 하소·분쇄 (200 L 드럼 포장)

### Conversion & Enrichment
- 천연 U-235는 **0.7%**. 대부분 원자로는 **3.5~5%** 농축 필요
- 농축 방법: Gaseous Diffusion, **Gas Centrifuge** (현재 ~100%), Aerodynamic, Electromagnetic, Chemical, **Laser**

#### Centrifuge Process
- 공급: **UF₆ 기체** (T_boil = 56 °C, 비교: UCl₆ = 75 °C)
- 진공 튜브 (3~5 m × 20 cm) 내 로터를 **50,000~70,000 rpm**으로 회전
- 무거운 U-238 → 외벽 / U-235 → 중심
- 출력: enriched stream + depleted tails

#### Fluorine의 특수성
- F는 **단일 동위원소**(¹⁹F)만 자연 존재 → UF₆의 질량 차이는 전적으로 U 동위원소만 반영
- Cl은 ³⁵Cl(76%)과 ³⁷Cl(24%)이 섞여 부적합

### Fabrication
- UF₆ → UO₂ → 세라믹 펠릿 소결 → Zircaloy 피복관 충전 → 다발 조립
- 한국: 연간 경수로 550 톤, 중수로 400 톤 생산
- 1 다발 = 인구 5만 도시의 1년 전력 (~150,000 MWh)

## 6-3 원자로 운전과 연소 후 변화

### 원자로 운전 효율
- 1 톤 천연 U = 44 GWh
- 같은 전기량: **천연가스 5,670 t**, **흑탄 20,000 t**

### 3년 연소 후 핵연료 성분 변화
| 사용 전 | → | 사용 후 |
|---|---|---|
| U-235 4% | | U-235 1% |
| U-238 96% | | U-238 94.6% |
| | | **FP 3.4%** |
| | | **TRU 1%** (Pu 0.9% + Minor Actinides 0.1%) |

세부:
- 0.1% — 장반감기 핵종 (요오드, 테크네튬)
- 0.3% — 고방열 반감기 핵종 (세슘, 스트론튬)
- 3.0% — 단반감기 핵종 (기타 FP)
- 0.9% — **Plutonium**
- 0.1% — Minor Actinides (Np, Am, Cm) — **고독성 장반감기**

## 6-4 Back-End: 저장과 처분

### 사용후핵연료 (Spent Fuel) 특성
- 발열: 핵분열 생성물 + Actinide 붕괴
- 강한 방사선 → 사람이 직접 다룰 수 없음
- **시간이 지나면 자체 감쇠**

### 붕괴열 감소 (UOX₂ 1 집합체 기준)
| 5년 | 35년 | 55년 | 100년 | 300년 |
|---|---|---|---|---|
| 1220 W | 470 W | 350 W | 200 W | 85 W |

기여 핵종: Strontium / Caesium (초기) → Plutonium / Americium / Curium (후기)

### 방사능 감소
- 1년 후: ~50,000 mSv/h (차폐 없이 표면 1 m)
- 100년 후: ~70 mSv/h (1/700 감소)
- 비교: 작업자 연간 한도 50 mSv, 피폭 증상 1000 mSv, 사망 8000 mSv
- **세슘·스트론튬**(강감마) 100년 후 1/60 — 단반감기 FP는 빠르게 감소
- **Pu, Minor Actinides**는 장반감기 → 1Ma까지 잔존

### 소내 저장 (At-reactor Storage)
#### 습식 저장 (Spent Fuel Pool)
- 발전소 내 12 m 깊이 수조 (수온 60 °C 이하)
- 차폐 + 냉각
- 10년 보관 시 방사능·발열 약 **1/1000**로 감소
- 건물 벽 두께 1 m 이상, 원자로건물과 동급 내진

#### 건식 저장 (Dry Storage)
- 수조 → 금속/콘크리트 용기 → 공기 냉각
- **월성**: 사일로 300기 (1992년부터 16.2만 다발), 맥스터 7기 운영 + 14기 계획
- 중수로 핵연료는 열·방사능 1/10 수준 → 건식 적합

### 국내 사용후핵연료 저장 현황 (2018.9 기준)
| | 저장용량 | 현재량 | 포화율 |
|---|---|---|---|
| 경수로 (고리·한빛·한울·신월성·새울) | 26,024 | 18,460 | 70.9% |
| 중수로 (월성 + 건식) | 499,632 | 444,760 | 89.0% |
| **합계** | 525,656 | 459,590 | **87.4%** |

포화 예상: 한빛·고리 '24년, 한울 '37년, 신월성 '38년

### 해외 중간저장 시설 — 14개국 운영 중
- **콘크리트 용기**: 미 ANO·Main Yankee 등 17 ISFSI (HI-STORM, VSC-24, NAC-UMS)
- **금속 용기**: 미 Praise Island·Peach Bottom 등 4 ISFSI (HI-STAR, TN-32/40/68, CASTOR)
- **수평 모듈**: 미 Rancho Seco 등 11 ISFSI (NUHOMS)
- **볼트 (MVDS)**: Fort St. Vrain HTGR
- 일본 무츠시: 130×60×30 m, 288 metal cask, 50년 5,000 톤 (2018 운영 승인 대기)
- 스위스 Zwilag, 네덜란드 HABOG (방사선 감소로 색 변화: 100년 후 자원으로 가치 상승)

### Spent Fuel 관리 전략 (국가별)
| 국가 | 정책 | 위치 | 방식 |
|---|---|---|---|
| 미국 (DOE) | 직접 처분, Yucca 중단, BlueRibbon | 소내 | 건식 |
| 프랑스 (ANDRA) | **재처리** | 소외 | 습식 |
| 일본 (NUMO) | 재처리 (로카쇼무라) + 무츠 중간저장 | 소외 | 습식+건식 |
| 캐나다 (NWMO) | 직접 처분 | 소내 | 건식 |
| 독일 (BfS) | 직접 처분 | 소내+소외 | 건식 |
| **핀란드 (POSIVA)** | 직접 처분, **지하처분 최선두** | 소내 | 습식 |
| 스웨덴 (SKB) | 직접 처분, CLAB 중앙집중 | 소외 | 습식 |
| 영국 (NDA) | 재처리 (셀라필드) | 소내+소외 | 습식+건식 |

### Reprocessing (재처리)
#### 습식 (Wet-process)
- **PUREX** → 순수 Pu 분리 → **MOX** 연료 → LWR/SFR 재이용
- **핵확산 우려**

#### 건식 (Dry-process / Pyroprocessing)
- "Dirty Fuel" (Pu + MA + FP) — 순수 Pu 분리하지 않음 → **핵확산저항성 우수**
- 금속핵연료 → SFR / ADS

#### 한국 동향
- 1977년 프랑스로부터 도입 시도 → 미국 반대로 취소
- 1991~ **DUPIC** 기술 자체 개발
- 1997~ **Pyroprocess** 개발 중

### Partitioning & Transmutation (P&T)
- 장수명 핵종(MA)을 분리 → 핵변환으로 단수명화
- ADS(Accelerator-Driven System) 등

### 영구 처분 (Final Disposal)
#### 핀란드 — 세계 최초
- 지하 450 m **화강암반** 내 격리
- 10만년 안전성 평가 후 시공 허가
- **2023년 운영 시작**, 100년 후 밀봉 예정

#### KBS-3 다중 방호 개념 (스웨덴 SKB)
$$
\text{소결체} \to \text{피복관} \to \text{주철 캐니스터} \to \text{구리 5 cm} \to \text{Bentonite 점토} \to \text{암반 (400~500 m)}
$$

#### 진행 현황
- 핀란드 → 스웨덴, 프랑스 → 스위스(2후보), 독일(2020~ 탐색), 미국(Yucca 재개 신청)

### 지질 처분 시 고려 반응
**Near-field 화학과정** — 캐니스터 ↔ 지하수
- Corrosion · Leaching
- Dispersion · Dissolution
- Redox · Hydrolysis · Complexation · Colloid formation

**Radionuclide Migration**
- Immobile phase: Precipitation, Mineralization, Sorption
- Mobile phase: Aqueous complexation, Colloid formation

**Actinide behavior** (groundwater near repository): Redox · Complexation · Sorption · Transport · Bioavailability — 환경 거동 평가의 핵심.

### Radiotoxicity Contributors (< 1 Ma)
- **Plutonium** — 양은 1%지만 $T_{1/2}$ = 24,110 yr
- **Minor Actinides** — 0.1%, $^{241}$Am $T_{1/2}$ = 432 yr
- **Fission Products** — 4%
- 시간이 지날수록 FP는 빠르게 감쇠, **Pu·MA가 장기 위험 주도**

## 자주 하는 실수
- "사용후핵연료 = 폐기물" 로 단정 — 정책 시각에 따라 **자원**(재처리) 으로 보면 관리방안이 완전히 다름
- 농축 방법으로 Gaseous Diffusion 우선 떠올리기 — 현재는 거의 **Centrifuge**, Laser 등장 중
- 핀란드처럼 한국도 처분장이 가능하다고 가정 — 한국은 부지/사회적 합의 미해결, 임시저장 포화 임박
- Pu 분리(PUREX) = 친환경 — 핵확산 우려로 한국은 채택하지 못함, **Pyroprocess가 대안**
- 사용후핵연료 1년/100년 방사능 차이를 과소평가 — 1/700 수준으로 줄어 자체 차폐 가능

## LLM × 이 주제
- 사용후핵연료 시간별 방사능·발열 계산기 (반감기 lookup + 핵종 별 기여도 합산)
- 처분장 다중방벽 개념 시각화 (KBS-3 단면도)
- 국가별 정책 비교 챗봇 — 부지/방식/현황 자동 표 + 시뮬레이션

## 관련 개념
- [[Chap04 원자로와 원자력계통]] — 농축도, MOX, 노형별 사용 연료
- [[Chap05 열출력과 원자로 물리]] — 붕괴열은 운전 정지 후도 잔존
