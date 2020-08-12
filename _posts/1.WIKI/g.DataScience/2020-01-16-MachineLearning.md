---
# title: 
# tags : -
category: DataScience
toc: false
notice: false
---

# 2020-01-16-MachineLearning

# Machine learning

**알고리즘 유형**

- 지도학습(supervised learning)
- 준지도학습
- 비지도학습
- 강화학습

## 지도학습

입력과 출력 데이터(훈련 데이터)가 있고 이를 모델화하여 새로운 데이터에 대해 정확한 출력을 예측하는 것. **분류**와 **회귀**가 있다.

회귀 : A집단이 어떠한 경향을 갖는지 알아냄

분류 : A와 B의 차이를 구분

### 선형회귀분석

연속적으로 존재하는(실수인) 데이터의 경향을 분석하고 예측하기위해서 선형회귀분석 방법을 쓴다. 다양하게 산포하는 데이터의 경향을 찾기위해 각 데이터들과의 차이를 최소화 하는 선을 찾는다.

선형회귀는 단순하게 생각하면 다음 그림과같이 데이터를 1차다항식으로 회귀하는 방법을 생각할 수 있다.

![image0_Untitled](/assets/img/2020-01-16-MachineLearning/Untitled.png)

linear_regression1

하지만 1차 다항식 외에도 다차원 다항식을 여러 독립변수(예를 들면 , *y* = *ax*2 + *bx* + *c* 에서 *x*2 를 하나의 독립변수 *x*2)로 변환해서 생각하면 결국 **다중선형회귀분석**으로 바꿀 수 있다. 이러한 방법을 다항회귀(Polynomial regression)이라 한다. 단, 다항회귀의 차수를 높일 수록 overfitting이 일어날 가능성이 높아진다.

참고 : https://brunch.co.kr/@gimmesilver/18

이처럼 여러 독립변수로 나누거나 로그를 씌우는 등의 방법으로 식을 변환해서 1차 다항식으로 만들 수 있으면 선형회귀가 가능하다. 그렇지 못할 때 비선형회귀 방법을 사용하는데 보통 딥러닝을 이용한다.

참고 : https://brunch.co.kr/@gimmesilver/38

참고 : [선형 회귀 위키](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%98%95_%ED%9A%8C%EA%B7%80)

**다중 선형 회귀 분석 모델**

*f*(*x*) = *w*0 + *w*1*x*1 + *w*2*x*2 + …

### 분석

### 데이터 셋 구성방법

- Holdout : 데이터 셋의 일부를 훈련용 데이터, 나머지 일부를 테스트용 데이터로 구성 (train set, test set), train set이 작으면 모델 정확도의 분산이 커지고, train set이 커지면 test set의 정확도의 신뢰도가 하락
- Cross validation : 중복되지 않는 k개의 부분 셋으로 나누어 구성
- K fold cross validation : data set을 K개의 fold로 나누어 사용. K번의 실험을 진행하여 k-1개 fold는 training set, 1개는 test set으로 사용.
- Stratified sampling : 각 클래스로부터 일정 비율의 샘플 추출 하는 층별 표집 방법. 데이터를 클래스에 따라 그룹으로 분리하고, 각 그룹으로 일정 비율 샘플을 무작위로 추출. 전체 데이터에서 표본이 특정 클래스에 편중될 수 있는 단점을 보완.

### 적합도 검증

표본회귀식이 종소변수의 값을 어느 정도 정확하게 예측할 수 있는지 검증 (모델 성능 평가 척도)

- Confusion matrix : 모델의 성능을 통계적인 수치로 시각화. 실제값과 예측값의 빈도를 표로 나타내줌

    [적합도 검증](2020-01-16-MachineLearning%20675fb690b9784fe594286e1895fd685d/%E1%84%8C%E1%85%A5%E1%86%A8%E1%84%92%E1%85%A1%E1%86%B8%E1%84%83%E1%85%A9%20%E1%84%80%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%B3%E1%86%BC%2092ebb052ac3e42ccbc072c4e0484b72f.csv)

- Accuracy : 모델이 정확하게 분류 또는 예측하는 데이터의 비율. 가장 직관적이지만 domain bias 고려해야함.

    $$Accuracy = \frac{TP + TN}{TP + TN + FP + FN}$$

- Precision(정밀도) : 모델이 True라고 분류한것중 실제 True의 비율

    $$Precision = \frac{TP}{TP + FP}$$

- Recall(재현율) : 실제 True중 모델이 True라고 예측한 비율

    $$Recall = \frac{TP}{TP+FN}$$

- **F-Measure** : Precision과 Recall을 통합(조화평균)해 나타내는 정확도

    $$ F-measure = \frac{2rp}{r+p} = \frac{2TP}{2TP+FN+FP}$$

- ROC Curve : 민감도와 특이도의 관계 파악하는 그래프

    TPR / FPR 그래프

    $$TPR=\frac{T P}{P}$$, $$FPR =\frac{FP}{FP +TN}$$

- AUC
- Residual(잔차) : 회귀 분석 모델의 예측값과 실제 값의 차이
- MSE : 평균제곱오차
- RMSE : 모델 예측값의 오차 계산

참고 : https://sumniya.tistory.com/26

- 추정의 표준오차
- 결정계수

### 추정의 표준오차

추정의 표준오차 : 표본들의 실제 값들이 표본회귀선 주위로 흩어진 변동 측정

표준편차 : 표본의 실제 값들이 평균주위로 흩어진 변동 측정

잔차들의 표준편차를 구함

$$
S_e = \sqrt\frac{ \sum(y_i - \hat{y}_i)^2}{n-2} = \sqrt\frac{SSE}{n-2} = \frac{\sum{y^2} - a \sum{y}- b \sum{xy}}{n-2}
$$

SSE : 오차(잔차)제곱합 : (진짜값 - 예측값)^2

*SSE* = ∑(*yi* − *ŷi*)2

추정 표준오차 계산 기준은 회귀직선, 절편과 기울기의 두 통게량에 의해 결정되므로 자유도는 2만큼 감소

### 결정계수

결정계수를 구하기 위해서는 아래 값을 먼저 알아야한다.

- SST : 실제 값 *y* 들이 이들의 평균 *ȳ* 로부터 흩어진 정도

    *i*

- SSR : 예측치와 실제 값 *y* 들의 평균 *ȳ* 의 차이의 제곱의 합

    *i*

- SSE : 예측치와 실제 값의 차이의 제곱의 합

*SST* = ∑(*yi* − *ȳ*)2

*SSR* = ∑(*ŷi* − *ȳ*)2

*SSE* = ∑(*yi* − *ŷi*)2

SST는 다음과 같은 과정을 통해

$$
\begin{align}
(y_i - \bar y)^2 &= (y_i - \hat y_i + \hat y_i - \bar y )^2 \\ &= ((y_i - \hat y_i) + (\hat y_i - \bar y) )^2 \\ &= (y_i - y)^2 + (\hat y_i - \bar y)^2 + 2 (y_i - y) (\hat y_i - \bar y) \\ &\approx (y_i - y)^2 + (\hat y_i - \bar y)^2 \\ &(\because 2 (y_i - y) (\hat y_i - \bar y) \approx 0)
\end{align}
$$

아래와 같이 나타낼 수 있다.

$$
\begin{align}
SST = SSE + SSR
\end{align}
$$

즉, 총제곱합(SST) = 회귀제곱합(SSR) + 잔차제곱합(SSE)

SST 는 항상 SSE보다 크거나 같다

![image1_Untitled 1](/assets/img/2020-01-16-MachineLearning/Untitled 1.png)

SSESSR

$$Rsqure = \frac{SSR}{SST} = \frac{(예측 - 진짜평균)^2}{(진짜-진짜평균)^2}$$

$$ r^2 = \frac{SST - SSE}{SST} = 1 - \frac{SSE}{SST}$$

이때 $$\frac{SSE}{SST}$$ 이

0 일때 : SSE가 0이면 => 다맞춤

1 일때 : SSE == SST 일때 => 최대로 틀렸을때

그래서 결정계수 R_square은 0부터 1값을 갖고, 1에 가까울 수록 좋다는 것을 알 수 있다.

**조정 결정계수**

결정계수에 독립변수와 레코드의 수를 고려해서 조정 결정계수를 만듦. 데이터 개수 n 이 많고 독립변수 수 K 가 작을수록 좋음.

$$
R_a^2 = 1 - (1 - R^2) (\frac{n-1}{n-k-1})
$$

### 상관계수와 상관관계

### Overfitting

학습데이터를 과다하게 최적화 시킬 경우 새로운 데이터를 예측하기 힘듦

![image2_Untitled 2](/assets/img/2020-01-16-MachineLearning/Untitled 2.png)

overfitting

> 보다 적은 수의 논리로 설명이 가능한 경우, 많은 수의 논리를 세우지말라 -Occam’s razor

Train 데이터의 정확도는 높지만 Test 데이터롤 테스트시 정확도가 낮게나온다.

Overfitting을 줄이기 위해서 다음과 같은 방법이있다.

- 데이터를 많이 활용
- feature의 개수를 줄임
- 적절히 parameter를 선정

### 다중공선성(multicollinearity)

독립 변수의 일부가 다르 독립 변수의 조합으로 표현될 수 있는 경우. 독립 변수들이 서로 독립이 아니라 상호상관관계가 강한 경우에 발생

-> Overfitting 발생

2개의 인자가 각각 특성값에 영향을 미치는 정도가 A, B 라고 했을 때 2개의 인자가 동시에 특성값에 영향을 미치는 정도는 A + B정도 되어야하는데 서로 촉매 작용을 하여 그것보다 훨씬 높은 영향이 있는 것처럼 보일때 다중 공선성이 있다고 한다.

다중공선성의 척도로 VIF(Variance Influence Factor)를 사용한다.

$$
VIF_i = \frac{1}{1-R_i^2}
$$

보통 VIF > 10 일때 다중 공선성이 존재한다고 판단하고 인자를 제거 후 회귀분석을 한다.

### 주성분분석(PCA)

Principal component analysis 는 서로 연관 가능성이 있는 고차원 공간의 표본들을 선형 연관성이 없는 저차원 공간의 표본으로 변환하기 위해 직교 변환으로 환원시키는 방법이다. 다중공선성 문제를 해결한다.

예를 들면, 2차원을 1차원으로 줄일때 점들의 분산이 가장 넓은 곳을 직선으로 표시하고, 점들을 직선에 투영하면 각 점들이 퍼져 있는 정도를 확인 할 수 있다. 고차원에서는 이러한 단계를 반복해서 직교하는 축들을 차원만큼 찾는다.

![image3_Uv2dlsH](/assets/img/2020-01-16-MachineLearning/Uv2dlsH.gif)

참고 이미지 : https://imgur.com/Uv2dlsH

PCA를 구하기 위해서 공분산과 고유벡터, 고유값을 이용하면 쉽게 구할 수 있다.

즉, *Ce⃗* = *λe⃗* 를 만족하는 *e⃗*가 분산 *Var*[*Xe⃗*] 를 최대화한다. *e⃗*는 공분산 C의 고유벡터(eigenvector)이고, *λ* 는 C의 고유값(eigenvalue)이다.

출처 : https://excelsior-cjh.tistory.com/167

### 분류 알고리즘

- K-최근접 이웃 알고리즘(KNN)
- 나이브 베이즈 분류
- 서포트 벡터 머신(SVM)
- 결정 트리 학습(Decision Tree)
- 랜텀 포레스트

### 선형분류함수

처음에 랜덤한 a 기울기로 분류 선을 그림

*y* = *ax*

목표 값은 다음과 같음

*t* = (*a* + *Δa*)*x*

오차(E)와 기울기(a)와의 관계

$$
\begin{align}
E &= t - y \\
&= (a + \Delta a)x -ax \\
&= ax + \Delta ax - ax \\
&= \Delta ax
\end{align}
$$

즉, $$ \Delta a = \frac E x $$ 이므로

$$y = (a + \frac E x ) x$$ 으로 업데이트 할 수 있다.

이와 같은 방법은 마지막 데이터의 영향력이 너무 강해지기 때문에 학습률(Learing rate)를 적용하여 다음과 같이 학습한다.

*t* = *η*(*a* + *Δa*)*x*

### 로지스틱 회귀모델

**From Linear regression**

다중선형회귀분석모델의 함수는 다음과 같다.

*f*(*x*) = *w*0 + *w*1*x*1 + *w*2*x*2 + …

각각의 데이터를 분류하는 직선들의 합으로 볼 수 있음.

**To Logistic regression**

**범주형 종속 변수**에 다중선형회귀 모델을 적용하기 위해서 y를 변형하여 로지스틱 회귀모델을 만들수 있다.

로지스틱 함수에 대해 이해하기 위해 승산(Odds)에 대해 알고 로짓을 알아야한다. 확률의 비율인 **승산(odds)**이라는 개념은 사건 A가 발생하지 않을 확률 대비 일어날 확률의 비율이다.

$$ odds = \frac {P(A)}{P(A^c)} = \frac {P(A)}{1-P(A)}$$

승산의 범위는 (0, ∞) 이기 때문에 로그를 취해서 범위가 ( − ∞, ∞) 인 **로짓**으로 조정한다.

*logit*(*p*) = *loge*(*Odds*)

이러한 로짓을 다중선형회귀의 좌항으로 놓으면 다음과 같다.

*logit*(*p*) = *βiXi*

위 식을 확률(P)에 대해 풀면 다음과 같다.

$$ logistic function = \frac {e^{\beta_i X_i}}{1 + e^{\beta_i X_i}} $$

로지스틱 함수는 독립변수 X가 주어졌을 때 종속 변수가 1인 범주에 속할 확률을 의미한다.

![image4_Untitled 3](/assets/img/2020-01-16-MachineLearning/Untitled 3.png)

Logistic-curve

이러한 로지스틱 함수는 인공신경망에서 활성화함수인 **sigmoid**라고도 불립니다.

참고 : [https://ratsgo.github.io/machine%20learning/2017/04/02/logistic/](https://ratsgo.github.io/machine%20learning/2017/04/02/logistic/)

참고 : [https://ko.wikipedia.org/wiki/%EB%A1%9C%EC%A7%80%EC%8A%A4%ED%8B%B1_%ED%9A%8C%EA%B7%80](https://ko.wikipedia.org/wiki/%EB%A1%9C%EC%A7%80%EC%8A%A4%ED%8B%B1_%ED%9A%8C%EA%B7%80)

### 의사결정 나무

의사결정 규칙을 나무구조 표현을 통해 분류와 예측을 수행

Decision Tree의 분리기준(Split Criterion)은 생성된 자식 노드에 속하는 자료의 순수도(Purity)를 가장 크게 증가하도록 트리를 형성. 입력 변수를 이용해 목표 변수의 분포를 얼마나 잘 구별하는 정도를 파악해 자식 마디가 형성되는데, 목표 변수의 구별 정도를 불순도(Impurity, 다양한 범주들의 개체들이 포함되어 있는 정도)에 의해 측정.

### 불순도 측정

- 지니 지수
- 엔트로피

**지니 지수(Gini Index)**

데이터 집합의 불순도를 측정

0~1 사이의 값이며, 어떤 데이터 집합에 속한 개체(레코드)들이 같은 범주(클래스)로 구성되어 있으면 지니지수는 0, 지니 지수가 작을수록 잘 분류된 것

$$
\begin{align*}
G &= 1 - \Sigma_{j=1}^c P(j)^2 \\ &= 1 - \Sigma_{j=1}^c \big( \frac{n_j}{n} \big)^2 \\
\end{align*}
$$

C : 범주(클래스)의 수

P(j) : j번째 범주(클래스)에 분류될 확률

n : 노드에 속하는 개체 수

*nj* : 노드에 속하는 수 중 j번째 범주(클래스)에 속하는 개체 수

**엔트로피(Entropy)**

*entropy* = − *p*1*log*(*p*1) − *p*2*log*(*p*2) − …

어떤 집합에 대한 무질서 정도를 측정 하기 위해서 물리학의 엔트로피 개념 도입. 잘섞여있을 수록 1(stable)에 가깝고, 잘 분류될수록 0에 가까워짐.

**정보 증가량(Information Gain)** $$
\begin{align}
IG(parents, children) = &entropy(parents) \\
&- [p(c_1) * entropy(c_1) + p(c_2) * entropy(c_2) + \dots]
\end{align}
$$

어떤 속성의 순서에 따라 분류할 때 엔트로피가 감소할지 수치화함.

### Random Forest

Decision Tree의 확장

특징

- 여러개의 Deciesion 트리를 결합
- Over-fitting 문제가 적음
- 구현이 간단
- 병렬 계산 간편

부트스트랩 기법으로 샘플 데이터 선택은 중복가능한 n개, feature 선택 개수는 Sqrt 또는 Log2 등 중 하나로 뽑아 여러개의 decision트리를 만든다. 그러고 어떤 데이터를 생성한 decision트리에 넣어서 가장 많이 voting된 결과값이 최종 분류값으로 추정하는 방법이다.

[앙상블(Ensengbles)](https://bkshin.tistory.com/entry/%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D-11-%EC%95%99%EC%83%81%EB%B8%94-%ED%95%99%EC%8A%B5-Ensemble-Learning-%EB%B0%B0%EA%B9%85Bagging%EA%B3%BC-%EB%B6%80%EC%8A%A4%ED%8C%85Boosting) : 여러개의 분류기를 생성하여 예측한 결과를 결합해서 정확한 예측을 도출 (정형데이터 분류에 좋음)

- 배깅
- 부스팅

배깅 : 부트스트랩을 이용해서 나온 여러 모델을 종합해서 추론하는 방법

![image5_Untitled 4](/assets/img/2020-01-16-MachineLearning/Untitled 4.png)

bagging

[부트스트랩](https://bkshin.tistory.com/entry/DATA-12?category=1042793) : 표본을 복원추출하여 여러개의 표본을 만드는 방법

### XGBoost

분류 문제에서 오차(Residual)를 가중치를 두고 부스팅 방법으로 줄여가는 방법