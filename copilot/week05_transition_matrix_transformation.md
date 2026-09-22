# 05주차: 좌표계, 전이 행렬 및 선형 변환 (Coordinates, Transition Matrix & Linear Transformation)

## 1. 좌표와 순서기저(Ordered Basis)
* **순서기저(Ordered Basis)**: 원소들의 순서가 정해진 기저 $B = (v_1, v_2, ..., v_n)$를 의미합니다 [84].
* **좌표 벡터(Coordinate Vector, $[w]_B$)**: 벡터 공간 $V$의 순서기저 $B$에 대해 임의의 벡터 $w$가 $w = a_1v_1 + a_2v_2 + \cdots + a_nv_n$으로 유일하게 표현될 때, 스칼라 계수들의 열벡터 $[a_1, a_2, ..., a_n]^T$를 기저 $B$에 대한 $w$의 좌표 벡터라고 부릅니다 [84].
* **좌표화 방법**: 순서기저 $B$의 벡터들을 열로 하는 행렬 $A$와 구하고자 하는 벡터 $v$를 합쳐 첨가 행렬 $[A | v]$를 만들고, 이를 RREF로 변환하여 $[I_k | y]$ 형태를 만들면 좌표 벡터 $[v]_B = y$를 얻을 수 있습니다 [85, 86].

## 2. 전이 행렬(Transition Matrix)
* **정의**: 동일한 $n$차원 벡터 공간 $V$에 두 순서기저 $B = (b_1, ..., b_n)$와 $C = (c_1, ..., c_n)$가 있을 때, $B$에 대한 좌표 $[x]_B$를 $C$에 대한 좌표 $[x]_C$로 직접 매핑해주는 $n \times n$ 행렬 $P$를 **$B$에서 $C$로의 전이 행렬**이라고 정의합니다 [88]:
  $$[x]_C = P_{C \leftarrow B} [x]_B$$
  여기서 전이 행렬 $P$의 $i$번째 열은 $B$의 $i$번째 기저 벡터 $b_i$를 $C$의 좌표계로 표현한 벡터 $[b_i]_C$입니다 [88, 91]:
  $$P_{C \leftarrow B} = \begin{bmatrix} [b_1]_C & [b_2]_C & \cdots & [b_n]_C \end{bmatrix}$$
* **전이 행렬 계산법 (Transition Matrix Method)**: 첨가 행렬 $[C | B]$ (왼쪽은 $C$ 기저 벡터들을 열로, 오른쪽은 $B$ 기저 벡터들을 열로)를 구성한 후, 왼쪽이 단위 행렬이 되도록 기약 행사다리꼴(RREF)로 연산합니다 [90]. 성공적으로 완수되면 오른쪽 부분이 바로 전이 행렬이 됩니다 [90]:
  $$[C \mid B] \xrightarrow{\text{RREF}} [I_n \mid P_{C \leftarrow B}]$$
* **성질**:
  1. 세 기저 $B, C, D$에 대해 연쇄 법칙이 성립합니다: $P_{D \leftarrow B} = P_{D \leftarrow C} P_{C \leftarrow B}$ [92].
  2. 전이 행렬은 항상 가역 행렬(Nonsingular)이며, 역행렬은 반대 방향으로의 전이 행렬입니다: $(P_{C \leftarrow B})^{-1} = P_{B \leftarrow C}$ [93].

## 3. 선형 변환(Linear Transformation)
* **정의**: 두 벡터 공간 $V, W$ 사이의 함수 $f: V \to W$가 모든 벡터 $v_1, v_2 \in V$와 스칼라 $c \in \mathbb{R}$에 대해 다음 두 성질을 만족할 때, 이를 선형 변환이라 합니다 [95]:
  1. $f(v_1 + v_2) = f(v_1) + f(v_2)$ (가산성)
  2. $f(cv) = c f(v)$ (동차성)
* **선형 연산자(Linear Operator)**: 정의역(Domain)과 공역(Codomain)이 동일한 선형 변환 $T: V \to V$를 선형 연산자라고 부릅니다 [95].
* **기하학적 선형 연산자 ($\mathbb{R}^3$)**:
  * **반사(Reflection)**: 예) $xy$평면 대칭 변환 $L([x,y,z]^T) = [x,y,-z]^T$ [98]
  * **수축/팽창(Contraction/Dilation)**: $L(v) = cv$ (스칼라 배) [98, 99]
  * **투영(Projection)**: 예) $xy$평면 위로의 사영 $L([x,y,z]^T) = [x,y,0]^T$ [99]
  * **회전(Rotation)**: $z$축 기준 $\theta$ 만큼의 회전 변환 [100]
  * **전단(Shear)**: $z$방향 전단 변환 등 [100]

## 4. 선형 변환의 행렬 표현
* **정역과 공역이 $\mathbb{R}^n$일 때의 표준 행렬(Standard Matrix, $A$)**:
  $$A = \begin{bmatrix} T(e_1) & T(e_2) & \cdots & T(e_n) \end{bmatrix}$$
  여기서 $e_i$는 표준 단위 기저 벡터입니다 [96, 97].
* **일반적인 행렬 표현 ($A_{BC}$)**: $n$차원 공간 $V$와 $m$차원 공간 $W$에 각각 순서기저 $B$와 $C$가 주어질 때, 선형 변환 $L: V \to W$의 행렬 표현 $A_{BC}$는 다음 관계를 만족하는 $m \times n$ 크기의 고유한 행렬입니다 [104]:
  $$A_{BC} [v]_B = [L(v)]_C$$
  이 때 $A_{BC}$의 $i$번째 열은 $V$의 기저 벡터 $v_i$에 선형 변환을 적용한 결과를 $C$의 좌표로 바꾼 벡터입니다 [105]:
  $$A_{BC} = \begin{bmatrix} [L(v_1)]_C & [L(v_2)]_C & \cdots & [L(v_n)]_C \end{bmatrix}$$
* **기저 변환과 행렬 변환의 관계 (Theorem 5.6)**: $V, W$의 다른 순서기저 $D$와 $E$가 있고, $B \to D$ 전이 행렬을 $P$, $C \to E$ 전이 행렬을 $Q$라 할 때, 새로운 기저 조합 하의 선형 변환 행렬 $A_{DE}$는 다음과 같습니다 [105]:
  $$A_{DE} = Q A_{BC} P^{-1}$$
* **합성 변환의 행렬**: 선형 변환 $L_1: V_1 \to V_2$와 $L_2: V_2 \to V_3$가 각각 순서기저 $B, C, D$에 대해 행렬 표현 $A_{BC}$, $A_{CD}$를 가질 때, 합성 변환 $L_2 \circ L_1: V_1 \to V_3$의 행렬 표현 $A_{BD}$는 두 행렬의 곱입니다 [106]:
  $$A_{BD} = A_{CD} A_{BC}$$
