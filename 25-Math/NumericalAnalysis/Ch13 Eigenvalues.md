---
title: Ch13 Eigenvalues (Power Method)
chapter: 13
part: 3
tags:
  - numerical-analysis
  - eigenvalue
  - power-method
---

# Ch13. Eigenvalues

> 진동·안정성·구조해석 등에서 핵심이 되는 고유값 문제 $[A]\{x\} = \lambda\{x\}$를 수치적으로 푸는 법.

## 13.1 Mathematical Background

### 정의
$$[A]\{x\} = \lambda\{x\}$$

- $\{x\}$ ($\ne 0$): **고유벡터(eigenvector)**
- $\lambda$: **고유값(eigenvalue)**

예시 (2×2):
$$\begin{bmatrix} 10 & -5 \\ -5 & 10 \end{bmatrix}\begin{Bmatrix} x_1 \\ x_2 \end{Bmatrix} = \lambda \begin{Bmatrix} x_1 \\ x_2 \end{Bmatrix}$$

### 특성방정식 (Characteristic Equation)
$([A] - \lambda[I])\{x\} = 0$이 자명하지 않은 해를 가지려면:
$$\boxed{\det([A] - \lambda[I]) = 0}$$

위 예시에서:
$$\begin{vmatrix} 10-\lambda & -5 \\ -5 & 10-\lambda \end{vmatrix} = 0 \Rightarrow (10-\lambda)^2 = 25 \Rightarrow \lambda = 5, 15$$

### 한계
큰 $n$에서는 $\det([A] - \lambda[I]) = 0$이 고차 다항식 → **계산 어려움**.  
→ 수치 알고리즘이 필요.

## 13.4 Power Method

### 목적
**가장 큰 크기의(dominant) 고유값**과 그에 대응하는 고유벡터를 찾는 반복법.  
(작은 고유값은 $[A]^{-1}$에 적용하는 **Inverse Power Method**로)

### 알고리즘
1. 초기 추정 $\{x\}^{(0)}$ (보통 $[1, 1, \ldots, 1]^T$)
2. $[A]\{x\}^{(i)}$ 계산
3. 결과 벡터에서 **가장 큰 원소를 1로 정규화**, 그때의 스칼라가 $\lambda^{(i+1)}$
4. 수렴할 때까지 2~3 반복

### Ex 13.2 — Power Method
$$[A] = \begin{bmatrix} 40 & -20 & 0 \\ -20 & 40 & -20 \\ 0 & -20 & 40 \end{bmatrix}$$

초기 $\{x\}^{(0)} = (1,1,1)^T$.

| 반복 | $[A]\{x\}$ | $\lambda$ 추정 | 정규화 $\{x\}$ | $|\varepsilon_a|$ |
| --- | --- | --- | --- | --- |
| 1 | $(20, 0, 20)$ | 20 | $(1, 0, 1)$ | — |
| 2 | $(40, -40, 40)$ | 40 | $(1, -1, 1)$ | 50% |
| 3 | $(60, -80, 60)$ | -80 | $(-0.75, 1, -0.75)$ | 150% |
| 4 | $(-50, 70, -50)$ | 70 | $(-0.714, 1, -0.714)$ | 214% |
| 5 | $(-48.57, 68.57, -48.57)$ | 68.57 | $(-0.708, 1, -0.708)$ | 2.08% |

→ 결국 $\lambda \to 68.28427$, 고유벡터 $(-\tfrac{1}{\sqrt 2}, 1, -\tfrac{1}{\sqrt 2})^T \approx (-0.707, 1, -0.707)^T$.

### 수렴
- $|\lambda_1| > |\lambda_2|$ (dominant gap)일 때 수렴
- 수렴률 ~ $|\lambda_2 / \lambda_1|^k$
- 부호가 번갈아 나오면 음의 dominant eigenvalue를 가짐 (위 예시처럼)

## 13.5 MATLAB Function: `eig`

```matlab
e = eig(A)       % 고유값 벡터만
[V, D] = eig(A)  % V: 고유벡터(열), D: 대각화된 고유값
```

### Ex 13.3
```matlab
>> A = [40 -20 0; -20 40 -20; 0 -20 40];
>> e = eig(A)
e = 11.7157   40.0000   68.2843
>> [v, d] = eig(A)
v = [0.5000  -0.7071  -0.5000;
     0.7071  -0.0000   0.7071;
     0.5000   0.7071  -0.5000]
d = diag([11.7157, 40, 68.2843])
```

세 개의 고유값 $11.72,\,40.00,\,68.28$ 중 최대값이 power method 결과와 일치!

## 응용
- **진동 모드 해석** — 구조물의 자연 진동수 ($\sqrt{\lambda}$가 angular frequency)
- **안정성 분석** — 동적 시스템의 안정/불안정 판정
- **주성분 분석(PCA)** — 공분산행렬의 고유값/벡터
- **양자역학** — 해밀토니안의 고유값 = 에너지 준위

---

← [[Ch12 Iterative Methods]] | → [[Ch14 Curve Fitting — Linear Regression]]

#numerical-analysis #ch13 #eigenvalue #power-method
