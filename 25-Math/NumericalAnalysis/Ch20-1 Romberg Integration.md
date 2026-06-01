---
title: Ch20-1 Numerical Integration of Functions — Romberg
chapter: 20
part: 5
tags:
  - numerical-analysis
  - romberg-integration
  - richardson-extrapolation
---

# Ch20-1. Romberg Integration

## 20.1 Introduction

두 가지 형태의 수치적분:
1. **Table of values** (이산 데이터)
2. **Function** (해석적 함수 — 임의 점에서 평가 가능)

함수 형태일 때는 더 정교한 기법 사용 가능:
- **Richardson extrapolation / Romberg integration**: 같은 trapezoidal 결과를 조합해 정확도 끌어올리기
- **Gauss Quadrature**: 특별한 점을 선택해 적분의 정확도 극대화
- **Adaptive Quadrature**: 영역에 따라 segment 크기를 자동 조절

## 20.2 Romberg Integration

### Richardson Extrapolation 아이디어
참값과 trapezoidal 결과:
$$I = I(h) + E(h)$$
- $I$: 참값
- $I(h)$: $n$-segment composite trapezoidal 결과 ($h = (b-a)/n$)
- $E(h)$: 절단 오차

Composite trapezoidal의 오차: $E \approx -\dfrac{b-a}{12}h^2 \bar f''$, 즉 $E \propto h^2$.

### 두 추정치 조합
$I(h_1), I(h_2)$에 대해:
$$\frac{E(h_1)}{E(h_2)} \approx \frac{h_1^2}{h_2^2}$$

두 식 $I = I(h_1) + E(h_1) = I(h_2) + E(h_2)$에서 $E$ 소거:
$$\boxed{I \approx I(h_2) + \frac{1}{(h_1/h_2)^2 - 1}[I(h_2) - I(h_1)]}$$

### $h_2 = h_1 / 2$의 경우 (자주 쓰는 case)
$$\boxed{I \approx \frac{4}{3}I(h_2) - \frac{1}{3}I(h_1)}$$

→ 오차 차수 $O(h^2) \to O(h^4)$ (Simpson 1/3과 같은 정확도!)

### Ex 20.1 — Richardson Extrapolation
$f(x) = 0.2 + 25x - 200x^2 + \cdots$, $[0, 0.8]$  
참값: 1.640533

Composite Trapezoidal 결과:

| $n$ | $h$ | $I(h)$ | $\varepsilon_t$ |
| --- | --- | --- | --- |
| 1 | 0.8 | 0.1728 | 89.5% |
| 2 | 0.4 | 1.0688 | 34.9% |
| 4 | 0.2 | 1.4848 | 9.5% |

Richardson 조합:
- $n=1, 2$: $I = \tfrac{4}{3}(1.0688) - \tfrac{1}{3}(0.1728) = 1.367467$ ($\varepsilon_t = 16.6\%$, $O(h^4)$)
- $n=2, 4$: $I = \tfrac{4}{3}(1.4848) - \tfrac{1}{3}(1.0688) = 1.623467$ ($\varepsilon_t = 1.0\%$, $O(h^4)$)

→ 단순히 trapezoidal 두 개 조합으로 Simpson 1/3과 동일 정확도!

### 더 높은 차수로 확장 (Romberg)
두 개의 $O(h^4)$ 추정치를 다시 조합:
$$I = \frac{16}{15} I_m - \frac{1}{15} I_l \quad \to \quad O(h^6)$$

두 개의 $O(h^6)$를 조합:
$$I = \frac{64}{63} I_m - \frac{1}{63} I_l \quad \to \quad O(h^8)$$

### Romberg 일반 점화식
$$\boxed{I_{j,k} = \frac{4^{k-1} I_{j+1, k-1} - I_{j, k-1}}{4^{k-1} - 1}}$$
- $k$: 정확도 레벨 ($k=1$이 trapezoidal, $k=2$가 $O(h^4)$, ...)
- $j$: 추정치 인덱스

### Ex 20.2 — Higher-order Correction
$O(h^4)$ 두 추정치 $1.367467$, $1.623467$ 조합:
$$I = \frac{16}{15}(1.623467) - \frac{1}{15}(1.367467) = 1.640533 \;(O(h^6))$$

→ 참값과 일치!

### Romberg Table
$n=1,2,3,4$로 trapezoidal 결과를 만들고 점차 조합:

```
k=1 ($O(h^2)$)   k=2 ($O(h^4)$)   k=3 ($O(h^6)$)   k=4 ($O(h^8)$)
0.172800
                  1.367467
1.068800                          1.640533
                  1.623467                          1.640533
1.484800                          1.640533
                  1.639467
1.600800
```

### 정지 조건
$$\varepsilon_a = \left|\frac{I_{1,k} - I_{2,k-1}}{I_{1,k}}\right| \times 100\%$$

### 효율성
- Simpson rule이 7자리 정확도를 위해 48 segments 필요
- Romberg는 1, 2, 4, 8 segments만으로 같은 정확도

### MATLAB 구현
```matlab
function intg = romberg(func, a, b, es, maxit)
if nargin < 5, maxit = 30; end
if nargin < 4, es = 0.00001; end
n = 1;
I(1,1) = trap(func, a, b, n);
iter = 0;
while iter < maxit
    iter = iter + 1;
    n = 2^iter;
    I(iter+1, 1) = trap(func, a, b, n);
    for k = 2:iter+1
        j = 2 + iter - k;
        I(j, k) = (4^(k-1)*I(j+1, k-1) - I(j, k-1)) / (4^(k-1) - 1);
    end
    ea = abs((I(1, iter+1) - I(2, iter)) / I(1, iter+1)) * 100;
    if ea <= es, break, end
end
intg = I(1, iter+1);
```

### 사용 예
```matlab
>> function y = fun1(x)
>>     y = 0.2 + 25*x - 200*x.^2 + 675*x.^3 - 900*x.^4 + 400*x.^5;
>> end
>> format long
>> int1 = romberg('fun1', 0, 0.8)
int1 = 1.64053333333334
```

## 다음: Gauss Quadrature
[[Ch20-2 Gauss Quadrature]]

---

← [[Ch19 Numerical Integration — Advanced]] | → [[Ch20-2 Gauss Quadrature]]

#numerical-analysis #ch20 #romberg-integration
