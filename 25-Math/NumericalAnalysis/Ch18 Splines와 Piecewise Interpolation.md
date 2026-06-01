---
title: Ch18 Spline and Piecewise Interpolation
chapter: 18
part: 4
tags:
  - numerical-analysis
  - interpolation
  - spline
  - cubic-spline
---

# Ch18. Spline and Piecewise Interpolation

## 18.1 Introduction to Splines

### 왜 Spline인가?
[[Ch17 Polynomial Interpolation|고차 다항식 보간]]은 데이터 끝에서 진동(**Runge 현상**)과 반올림 오차에 취약.

**대안**: 데이터 사이를 **저차 다항식 조각**으로 부드럽게 연결 → **Spline 함수**.

### Spline의 핵심 아이디어
- $n$개 데이터 → $n-1$개 구간
- 각 구간에 자체 다항식 $s_i(x)$
- **knots**(매듭, 데이터 점)에서 연속성 / 도함수 연속성 조건 부여

## 18.2 Linear Spline (1차)

각 구간을 **직선**으로 연결:
$$s_i(x) = a_i + b_i(x - x_i) = f_i + \frac{f_{i+1} - f_i}{x_{i+1} - x_i}(x - x_i)$$

- = **Piecewise Linear Interpolation**
- 단점: 매듭에서 **꺾임(첨점)** 발생 → 1차 도함수 불연속

## 18.3 Quadratic Spline (2차)

각 구간에 2차 다항식:
$$s_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2$$

### 조건 개수
- 미지수: $3(n-1) = 3n-3$ (구간마다 $a,b,c$)
- 조건:
  1. 매듭에서의 함수값: $2(n-1) = 2n-2$
  2. **내부 매듭**에서 1차 도함수 연속: $n-2$
  - 합 $3n-4$ → 1개 부족
- 추가 조건: **첫 매듭의 2차 도함수 = 0** ($c_1 = 0$)

### 한계
실용성 낮음 — Cubic이 표준.

## 18.4 Cubic Spline (3차) — 표준

가장 널리 쓰임. 4차 이상은 oscillation으로 사용 X.

$$s_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3$$

### 조건 (총 $4(n-1)$ 계수)
1. **각 구간 함수값** 통과: $a_i = f_i$ → ($n-1$ 조건)
2. **인접 다항식 함수값 일치** (knot에서): $f_i + b_i h_i + c_i h_i^2 + d_i h_i^3 = f_{i+1}$ → ($n-1$)
3. **내부 knot에서 1차 도함수 일치**: $b_i + 2c_i h_i + 3d_i h_i^2 = b_{i+1}$ → ($n-2$)
4. **내부 knot에서 2차 도함수 일치**: $c_i + 3d_i h_i = c_{i+1} \Rightarrow d_i = \dfrac{c_{i+1} - c_i}{3h_i}$ → ($n-2$)

총 $4n-6$ → 2개 부족 → **양 끝 조건** 필요.

### 양끝 조건 (End Conditions)

| 종류 | 조건 |
| --- | --- |
| **Natural** | $c_1 = 0,\; c_n = 0$ (양끝 곡률 0) |
| **Clamped** | $s'(x_1) = f_1'$, $s'(x_n) = f_n'$ (양끝 기울기 지정) |
| **Not-a-knot** | 첫·끝 두 구간이 같은 cubic을 공유 (MATLAB 기본값) |

### Natural Cubic Spline의 최종 방정식
내부 $c_i$를 풀기 위한 **대각우세 삼중대각 시스템**:

$$h_{i-1}c_{i-1} + 2(h_{i-1} + h_i)c_i + h_i c_{i+1} = 3(f[x_{i+1}, x_i] - f[x_i, x_{i-1}])$$
$i = 2, 3, \ldots, n-1$, 그리고 $c_1 = c_n = 0$.

행렬:
$$\begin{bmatrix}
1 & & & & \\
h_1 & 2(h_1+h_2) & h_2 & & \\
 & \ddots & \ddots & \ddots & \\
 & & h_{n-2} & 2(h_{n-2}+h_{n-1}) & h_{n-1} \\
 & & & & 1
\end{bmatrix}\begin{Bmatrix} c_1 \\ c_2 \\ \vdots \\ c_{n-1} \\ c_n \end{Bmatrix} = \begin{Bmatrix} 0 \\ 3(f[x_3,x_2]-f[x_2,x_1]) \\ \vdots \\ \vdots \\ 0 \end{Bmatrix}$$

→ tridiagonal → [[Ch09 Gauss Elimination#9.4 Tridiagonal System|Thomas 알고리즘]]으로 $O(n)$에 풀이.  
$c_i$ 결정 후 $b_i, d_i$는 명시적 공식으로 계산.

### Ex 18.3 — Natural Cubic Spline
$(3.0, 2.5), (4.5, 1.0), (7.0, 2.5), (9.0, 0.5)$로 적합 후 $x=5$ 추정.

$h_1=1.5, h_2=2.5, h_3=2.0$, $f[x_2,x_1]=-1$, $f[x_3,x_2]=0.6$, $f[x_4,x_3]=-1$

삼중대각 시스템 풀이:
$$\begin{bmatrix} 1 & & & \\ 1.5 & 8 & 2.5 & \\ & 2.5 & 9 & 2 \\ & & & 1 \end{bmatrix}\{c\} = \{0,\,4.8,\,-4.8,\,0\}^T$$

결과:
- $c_1 = 0$, $c_2 = 0.840$, $c_3 = -0.767$, $c_4 = 0$
- $b_1 = -1.420$, $b_2 = -0.160$, $b_3 = 0.022$
- $d_1 = 0.187$, $d_2 = -0.214$, $d_3 = 0.128$

$x=5$는 구간 2에 있으므로:
$$f(5) \approx s_2(5) = f_2 + b_2(0.5) + c_2(0.5)^2 + d_2(0.5)^3$$

### End Condition 비교

| 조건 | First/Last 방정식 |
| --- | --- |
| Natural | $c_1 = 0,\; c_n = 0$ |
| Clamped | $2h_1 c_1 + h_1 c_2 = 3f[x_2,x_1] - 3f_1'$<br>$h_{n-1} c_{n-1} + 2h_{n-1} c_n = 3f_n' - 3f[x_n,x_{n-1}]$ |
| Not-a-knot | $h_2 c_1 - (h_1+h_2)c_2 + h_1 c_3 = 0$<br>$h_{n-1}c_{n-2} - (h_{n-2}+h_{n-1})c_{n-1} + h_{n-2}c_n = 0$ |

세 가지 곡선은 **양끝 근처에서만** 차이가 나고, 중앙부는 거의 동일.

### MATLAB
```matlab
yi = spline(x, y, xi)         % cubic spline (not-a-knot 기본)
% Clamped 시: x, y, x' 끝 도함수 같이 넘기기 — y의 양끝에 도함수 값 추가
yi = interp1(x, y, xi, 'spline')   % 동일 기능
yi = interp1(x, y, xi, 'pchip')    % piecewise cubic Hermite (smoother shape)
```

## 정리
- Linear spline: 빠르지만 매끄럽지 않음 (꺾임)
- Quadratic spline: 거의 안 씀
- **Cubic spline**: 실무 표준 — $C^2$ 연속, 적당한 매끈함, 안정
- 양 끝 조건은 문제에 따라 선택: 물리적 끝 기울기 있으면 Clamped, 없으면 Natural 또는 Not-a-knot
- 추가 보간 기법: PCHIP (단조 보존, 오버슈팅 방지)

---

← [[Ch17 Polynomial Interpolation]] | → [[Ch19 Numerical Integration]]

#numerical-analysis #ch18 #spline #cubic-spline
