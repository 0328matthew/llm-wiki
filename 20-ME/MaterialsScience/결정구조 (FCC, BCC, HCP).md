---
title: 결정구조 (FCC, BCC, HCP)
tags: [concept, me, materials]
domain: ME
subject: Materials Science
created: 2026-05-19
---

## 정의
> 결정성 고체에서 원자가 3D 공간에서 주기적으로 배열된 패턴.
> 금속 대부분은 FCC / BCC / HCP 중 하나.

## 직관
- 같은 원소라도 결정구조에 따라 **연성·강도·열·전기 특성**이 달라짐
- 예: 철(Fe)은 온도에 따라 BCC ↔ FCC 변태 → 열처리의 근간

## 세 가지 구조 비교

| 항목 | FCC | BCC | HCP |
|---|---|---|---|
| 단위격자 원자수 | 4 | 2 | 6 |
| 조밀도(APF) | 0.74 | 0.68 | 0.74 |
| 배위수 | 12 | 8 | 12 |
| 슬립계 (slip systems) | 12 | 48 | 3 |
| 연성 | 높음 | 중간 | 낮음 |
| 대표 금속 | Al, Cu, Ni, γ-Fe, Au | α-Fe, Cr, W, Mo | Mg, Zn, Ti, Co |

## 왜 슬립계 수가 중요한가
- **슬립계 = 변형이 일어나는 면+방향 조합**
- 많을수록 변형 경로가 많음 → **연성↑**
- FCC가 가장 연성 좋고 (구리·알루미늄 가공성), HCP는 잘 깨짐 (마그네슘 압연 어려움)

## 단위격자 (격자상수 a 기준)

### FCC
- 꼭짓점 8개 + 면중심 6개
- 한 면의 대각선 = $4r$ → $a = \dfrac{4r}{\sqrt{2}} = 2\sqrt{2}\,r$

### BCC
- 꼭짓점 8개 + 체심 1개
- 공간대각선 = $4r$ → $a = \dfrac{4r}{\sqrt{3}}$

### HCP
- 두 격자상수 $a, c$ — 이상비 $c/a = 1.633$

## Fe의 동소변태 (강의 열처리)
- 910°C 이하: α-Fe (BCC, 페라이트)
- 910~1400°C: γ-Fe (FCC, 오스테나이트)
- 1400°C 이상: δ-Fe (BCC)
- FCC가 탄소 고용도↑ → 담금질의 기초 → [[Fe-C 상태도]]

## LLM × 이 주제
- 결정구조 시각화 (matplotlib 3D / py3Dmol) 자동 코드
- 격자상수 ↔ 원자반경 계산 보조
- 슬립면/방향 ([111], (111) 등) Miller index 자동 변환

## 관련 개념
- [[Fe-C 상태도]]
- [[Stress-Strain Curve]]

## 참고
- Callister, *Materials Science and Engineering*, Ch. 3
