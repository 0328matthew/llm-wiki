---
title: Ch06 예제 - Open Methods 실습
chapter: 6
type: exercise
tags:
  - numerical-analysis
  - exercise
  - newton-raphson
  - secant
---

# Ch6 예제 — Open Methods

대상 함수 (반복 등장): $f(x) = e^{-x} - x$, 참 근 $\bar{x} = 0.56714329$.

## Ex 6.1 — Fixed-Point Iteration
$x_{i+1} = e^{-x_i}$, $x_0 = 0$
- $|\varepsilon_t|_i / |\varepsilon_t|_{i-1}$이 일정한 비율 → **선형 수렴**

## Ex 6.2 — Newton-Raphson
$f'(x) = -e^{-x} - 1$이므로
$$x_{i+1} = x_i - \frac{e^{-x_i} - x_i}{-e^{-x_i} - 1}$$

→ $E_{t,i+1} \propto E_{t,i}^2$ (이차 수렴, 약 4~5회 만에 수렴)

## Ex 6.3 — Newton-Raphson의 함정: $f(x) = x^{10} - 1$
$x_0 = 0.5$ 출발:
$$x_{i+1} = x_i - \frac{x_i^{10} - 1}{10 x_i^9}$$

| $i$ | $x_i$ | $\varepsilon_a$ (%) |
| --- | --- | --- |
| 0 | 0.5 | — |
| 1 | 51.65 | 99.032 |
| 2 | 46.485 | 11.111 |
| ... | ... | ... |
| 42 | 1.0 | 0.002 |

→ 초기 추정값이 평탄한 영역(small $f'$)에 있어 첫 점프가 매우 크다. **그래프부터 그려보고 시작점 선정**.

## Ex 6.4 — Bungee jumper 질량 (Newton-Raphson)
```matlab
>> y  = @(m) sqrt(9.81*m/0.25)*tanh(sqrt(9.81*0.25/m)*4) - 36;
>> dy = @(m) (1/2)*sqrt(9.81*(m/0.25))*tanh((9.81*0.25/m)^(1/2)*4) ...
       - 9.81/(2*m)*sech(sqrt(9.81*0.25/m)*4)^2;
>> newtraph(y, dy, 140, 0.00001)
ans = 140.1543
```

## Secant 예제 — $f(x) = e^{-x} - x$
$x_0 = 0.0$, $x_1 = 0.1$ → 약 5~6회 반복으로 0.5671에 수렴.

## Modified Secant 예제
$x_0 = 0.1$, $\delta = 10^{-3}$
$$x_{i+1} = x_i - \frac{\delta x_i (e^{-x_i} - x_i)}{e^{-x_i(1+\delta)} - x_i(1+\delta) - (e^{-x_i} - x_i)}$$

## Müller / Brent 예제
$f(x) = e^{-x} - x = 0$, 초기 (0.0, 0.2, 0.4)에서 다음 추정값 계산.
- Müller: 3점 통과 포물선의 $x$절편
- Brent: bracketing + inverse quadratic의 안전 결합

---

← 본문 [[Ch06 Open Methods]]

#numerical-analysis #ch06 #exercise
