---

---

# 딥러닝



## 경사하강법(회귀)

Gradient Descent

통계학에서는 선형회귀를 **최소제곱법**을 사용하여 추정하지만 회귀계수(가중치)의 조합이 많이질수록 연산속도가 길어진다. 그래서 기계학습에서는 경사하강법을 주로 사용한다.-> Error 존재

참고 : https://doublekpark.blogspot.com/2019/01/6-gradient-descent.html



선형회기식의 목표는 $$ \hat y = w x + b $$ 으로 예측한 예측값과 실제값 $$ y $$ 차의 제곱이 0이 되는 w와 b를 구한다. 이때 예측값과 실제값의 차이를 수치로 나타내기위해 Cost함수라는것을 만들어 보통 차이의 제곱으로 사용한다. Cost는 제곱함수이므로 기울기가 0인곳이 최소임을 알 수 있다. 기울기가 0인곳을 찾아가기위해서 반복학습을 한다.


$$
\begin{align}
Cost(W,b) &= \frac{1}{2m} \sum_{i=1}^{m} (H(x_i) - y_i)^2 \\
&= \frac 1 {2m} \sum_{i=1}^m (wx_i + b - y_i)^2
\end{align}
$$

행렬을 사용해서 다음과 같이 나타낼 수 있다. (계산 편의상 2m으로 나눔)

$$
\begin{align}
Cost(W,b) &= \frac{1}{2m} (H(x) - y)^2 \\
&= \frac{1}{2m} (H(x)^2 - 2H(x)y + y^2) \\
&= \frac 1 {2m} ((Wx + b)^2 - 2(Wx+b)y + y^2) \\
&= \frac 1 {2m} ((W^2x^2 + 2Wxb + b^2) - 2Wxy+2by + y^2) \\
\end{align}
$$

W에 대한 편미분

$$
\begin{align}
\frac {\partial E} {\partial w} &= \frac 1 {2m} (2Wx^2 + 2xb - 2xy) \\
&= \frac 1 {2m} (2Wx^2 + 2xb - 2xy) \\
&= \frac 1 {2m} 2(Wx^2 + xb - xy) \\
&= \frac 1 {m} (Wx + b - y)x \\
&= \frac 1 {m} (H(x) - y)x
\end{align}
$$

b에 대한 편미분

$$
\begin{align}
\frac {\partial E} {\partial b} &= \frac 1 {2m} (2Wx + 2b - 2y) \\
&= \frac 1 {2m} 2(Wx + b - y) \\
&= \frac 1 {m} (H(x) - y)
\end{align}
$$

즉 다음과 같다.

$$
W_{update} = W - \frac {\part E}{\part w} \\
b_{update} = b - \frac {\part E}{\part b}
$$



## 인공신경망(분류)

신경세포의 동작을 컴퓨터로 구현

### 퍼셉트론

인공신경망 종류 중 하나로 각 노드의 가중치와 입력치를 곱한 것을 모두 합한 값이 활성함수에 의해 판단된다.

이진 분류할때 log를 이용해서 Cost함수를 구현한다.

$$
C(H(x),y) = \left\{
\begin{array}{ll}
 -log(H(x)) &:y=1\\
 -log(1-H(x)) &:y=0
\end{array}
\right.
$$

간단하게 나타내면 다음과 같다.

$$
C(H(x),y) = -y log(H(x)) - (1-y)log(1-H(x))
$$



### 활성화 함수

활성화 함수는 쉽게 말해 **분류를 하면서 망을 깊게 만들어주는 함수**다. 여러 입력을 받아 하나의 출력 신호로 처리한다. 딥러닝에서는 레이어를 여러층 쌓아서(multi-layer) 결론을 추론하는데, 이때 필요한 비선형함수를 활성화 함수라고한다.

아래는 선형함수를 활성화 함수로 안쓰는이유

> 선형함수인 h(x)=cx를 활성화함수로 사용한 3층 네트워크를 떠올려 보세요. 이를 식으로 나타내면 y(x)=h(h(h(x)))가 됩니다. 이는 실은 y(x)=ax와 똑같은 식입니다. a=c^3이라고만 하면 끝이죠. 즉, 은닉층이 없는 네트워크로 표현할 수 있습니다. 뉴럴네트워크에서 층을 쌓는 혜택을 얻고 싶다면 활성화함수로는 반드시 비선형 함수를 사용해야 합니다. - 밑바닥부터 시작하는 딥러닝 -

#### 스텝함수

![stepfunc](/assets/img/stepfunc.png)

보통 1층의 퍼셉트론에서는 망을 깊게 할 필요가 없으므로 스텝함수를 사용한다.

#### 시그모이드

![sigmoid](\assets\img\sigmoid.png)

$$
S(t) = \frac 1 {1 + e^{-t}}
$$

활성화 함수중 하나인 시그모이드이다.

#### tanh

![tanhfunc](/assets/img/tanhfunc.png)

#### ReLU

![ReLufunc](/assets/img/ReLufunc.png)

참고 : https://sacko.tistory.com/10





### Single layer perceptron

1. 가중치(weight)와 절편(bias) 초기값 설정
2. 하나의 학습벡터에 대한 출력층 뉴런 net 값 계산
3. 활성화함수를 통해 계산된 net 값으로부터 출력 값 계산
4. 목표값이 출력 값과 일치하지 않으면 가중치 조정
5. 반복

2 ~ 3 의 과정을 1Epoch라고 한다.



가중치 조정(update) 과정

$$ w_i = w_{i} + \eta x_i (T -f(net)) \because \Delta w = \frac E x $$

- $$ \eta $$ : learning rate
- T : target value
- T-f(net) : error(E)

