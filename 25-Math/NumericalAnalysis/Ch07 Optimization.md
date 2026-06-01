---
title: Ch07 Optimization
chapter: 7
part: 2
tags:
  - numerical-analysis
  - optimization
  - golden-section
  - parabolic-interpolation
---

# Ch7. Optimization

> 함수의 **최대/최소**(극값)를 찾는 문제. 근(root)이 $f=0$인 곳이라면, 최적값은 $f'=0$이면서 $f''$의 부호로 max/min을 판정.

## 7.1 Introduction & Background

### 근 vs 극값
| 위치 | 조건 |
| --- | --- |
| Root | $f(x) = 0$ |
| Maximum | $f'(x) = 0$ and $f''(x) < 0$ |
| Minimum | $f'(x) = 0$ and $f''(x) > 0$ |

### 1차원 vs 다차원
- **1-D**: $f(x)$ 위의 최저/최고점 (max는 $-f(x)$의 min과 동치)
- **2-D 이상**: $f(x,y)$의 등고선(contour) 위 극값

### 용어
- **Global optimum**: 정의역 전체에서 최고/최저
- **Local optimum**: 주변보다만 큰/작은 점
- **Unimodal**: 최적값 1개, **Multimodal**: 여러 개

## 7.2 One-Dimensional Optimization

### Golden-Section Search

#### Euclid의 황금비
$$\frac{\ell_1 + \ell_2}{\ell_1} = \frac{\ell_1}{\ell_2}, \quad \phi = \frac{\ell_1}{\ell_2} = \frac{1+\sqrt{5}}{2} \approx 1.61803398874989\ldots$$

#### 알고리즘 (최솟값 탐색 가정)
1. $[x_l, x_u]$ 안에 두 내부 점 $x_1, x_2$ 설정:
   $$d = (\phi - 1)(x_u - x_l)$$
   $$x_1 = x_l + d, \quad x_2 = x_u - d$$
2. $f(x_1) < f(x_2)$ → 최저점은 $x_2 \sim x_u$. 새 구간으로 갱신:  
   $x_l \leftarrow x_2$, $x_2 \leftarrow x_1$ (값 재사용)
3. $f(x_2) < f(x_1)$ → 최저점은 $x_l \sim x_1$:  
   $x_u \leftarrow x_1$, $x_1 \leftarrow x_2$
4. 반복

#### 장점
- **매 반복 단 1개의 함수 평가**만 새로 수행 (이전 값 재사용)
- Bisection-like 신뢰성 + 효율적

### Parabolic Interpolation

#### 아이디어
극값 근처에서 함수가 포물선 모양에 가까움. 3점 $x_1, x_2, x_3$의 함수값에 맞춰 포물선 피팅 → 그 정점이 새 추정값:

$$\boxed{x_4 = x_2 - \frac{1}{2}\,\frac{(x_2-x_1)^2[f(x_2)-f(x_3)] - (x_2-x_3)^2[f(x_2)-f(x_1)]}{(x_2-x_1)[f(x_2)-f(x_3)] - (x_2-x_3)[f(x_2)-f(x_1)]}}$$

- $x_4$와 인접 두 점을 다음 반복의 초기값으로
- 극값 근처에서 빠른 수렴 (이차)
- 단, 초기값이 멀거나 함수가 비대칭이면 잘못 수렴 가능

### Newton's Method for Optimization
$f'(x) = 0$의 근을 [[Ch06 Open Methods|Newton-Raphson]]으로:
$$x_{i+1} = x_i - \frac{f'(x_i)}{f''(x_i)}$$

이차 수렴, 단 $f'$/$f''$ 필요.

### MATLAB 도구
- `fminbnd(f, xl, xu)` — 1차원 최소화 (Golden + Parabolic 혼합)
- `fminsearch(f, x0)` — 다변수 (Nelder-Mead simplex)

## 정리
- 1-D 최적화는 root finding과 닮은 꼴 — Golden Section (= Bisection), Parabolic (= secant/Müller), Newton (= NR)
- Golden ratio 사용 → 함수 호출 회수를 절반으로 줄임
- 다차원은 다음 학기/심화 과목에서

---

← [[Ch06 Open Methods]] | → [[Ch08 선형방정식과 행렬]]

#numerical-analysis #ch07 #optimization
