---
title: Ch11 Matrix Inverse and Condition
chapter: 11
part: 3
tags:
  - numerical-analysis
  - matrix-inverse
  - condition-number
  - norm
---

# Ch11. Matrix Inverse and Condition

## 11.1 The Matrix Inverse

### 정의
$[A]$가 정방 비특이행렬이면:
$$[A][A]^{-1} = [A]^{-1}[A] = [I]$$

### LU 분해로 역행렬 구하기
$[A][A]^{-1} = [I]$를 열별로 쪼개면:
$$[A]\{x_1\} = \{1, 0, 0\}^T$$
$$[A]\{x_2\} = \{0, 1, 0\}^T$$
$$[A]\{x_3\} = \{0, 0, 1\}^T$$
→ $[A]^{-1} = [\{x_1\}\;\{x_2\}\;\{x_3\}]$

→ **LU 분해**를 한 번만 하고 $n$개의 forward/backward substitution으로 역행렬 계산.

### Gauss-Jordan 방식
$[A \mid I] \to [I \mid A^{-1}]$ 형태로 행 연산을 통해 직접 변환.

#### 예제
$$[A] = \begin{bmatrix} 1 & 2 & 1 \\ 2 & 3 & 3 \\ 3 & 2 & 2 \end{bmatrix}, \quad [A]^{-1} = \begin{bmatrix} 0 & -2/5 & 3/5 \\ 1 & -1/5 & -1/5 \\ -1 & 4/5 & -1/5 \end{bmatrix}$$

## 11.2 Error Analysis and System Condition

### Vector Norms
**Euclidean (2-norm)**:
$$\|X\|_e = \sqrt{\sum_{i=1}^{n} x_i^2}$$

**일반 p-norm**:
$$\|X\|_p = \left(\sum_{i=1}^{n} |x_i|^p\right)^{1/p}$$

| $p$ | 이름 | 식 |
| --- | --- | --- |
| 1 | 1-norm | $\sum_i |x_i|$ |
| 2 | Euclidean | $\sqrt{\sum x_i^2}$ |
| $\infty$ | maximum / uniform | $\max_i |x_i|$ |

### Matrix Norms
**Frobenius**:
$$\|A\|_f = \sqrt{\sum_{i=1}^{n}\sum_{j=1}^{n} a_{ij}^2}$$

**Spectral (induced 2-norm)**:
$$\|A\|_2 = \sqrt{\mu_{\max}}$$
($\mu_{\max}$ = $[A]^T[A]$의 최대 고유값)

**Column-sum norm (induced 1-norm)**:
$$\|A\|_1 = \max_{1 \le j \le n} \sum_{i=1}^{n} |a_{ij}|$$

**Row-sum norm (induced $\infty$-norm)**:
$$\|A\|_\infty = \max_{1 \le i \le n} \sum_{j=1}^{n} |a_{ij}|$$

### Matrix Condition Number
$$\boxed{\text{Cond}[A] = \|A\| \cdot \|A^{-1}\| \quad (\ge 1)}$$

오차 전파 한계:
$$\frac{\|\Delta X\|}{\|X\|} \le \text{Cond}[A]\,\frac{\|\Delta A\|}{\|A\|}$$

→ Cond[A]가 크면 $[A]$의 작은 변화에도 해 $X$가 크게 흔들림 → **ill-conditioned**.

#### 해석
- Cond[A] = 1: 완벽 (직교행렬)
- Cond[A] $\sim 10^t$: 해가 약 $t$ 자리 유효숫자 손실
- Cond[A] = $\infty$ (또는 매우 큰 값): 거의 특이 → 신뢰 불가

### Ex 11.3 — Hilbert Matrix
Hilbert 행렬 $H_{ij} = \dfrac{1}{i+j-1}$은 **대표적인 ill-conditioned 시스템**.

3×3:
$$[A] = \begin{bmatrix} 1 & 1/2 & 1/3 \\ 1/2 & 1/3 & 1/4 \\ 1/3 & 1/4 & 1/5 \end{bmatrix}$$

각 행의 최대값으로 정규화하면:
$$\tilde{A} = \begin{bmatrix} 1 & 1/2 & 1/3 \\ 1 & 2/3 & 1/2 \\ 1 & 3/4 & 3/5 \end{bmatrix}$$

행합 노름: $\|\tilde A\|_\infty = 1 + 3/4 + 3/5 = 2.35$

역행렬:
$$\tilde A^{-1} = \begin{bmatrix} 9 & -18 & 10 \\ -36 & 96 & -60 \\ 30 & -90 & 60 \end{bmatrix}, \quad \|\tilde A^{-1}\|_\infty = 36+96+60 = 192$$

$$\text{Cond}[\tilde A] = 2.35 \times 192 = 451.2$$

### Ex 11.4 — MATLAB norm/cond
```matlab
>> A = [1 1/2 1/3; 1 2/3 1/2; 1 3/4 3/5];
>> norm(A, inf)        % row-sum norm
ans = 2.3500
>> cond(A, inf)        % row-sum norm 기반 조건수
ans = 451.2000
>> cond(A, 'fro')      % Frobenius
ans = 368.0866
>> cond(A)             % 기본: spectral (p=2)
ans = 366.3503
>> cond(A, 2)
ans = 366.3503
```

## 정리
- 역행렬은 **개념적**으로는 유용하지만, $[A]\{x\}=\{b\}$를 풀려고 $A^{-1}b$를 명시적으로 계산하지 말 것 (정확도/속도 모두 손해)
- 조건수가 크면 **반올림 오차 민감도가 높다** → 해의 신뢰도 의심
- 실무에서는 `cond(A)`로 시스템 건강 진단

---

← [[Ch10 LU Factorization]] | → [[Ch12 Iterative Methods]]

#numerical-analysis #ch11 #condition-number #norm
