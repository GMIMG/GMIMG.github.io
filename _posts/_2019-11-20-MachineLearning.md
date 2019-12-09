---

---



Term Frequency (TF)
단어 빈도(tf)는 특정 단어 t가 특정 문서 d내에 등장하는 빈도

tf 값이 클수록 문서에 많이 등장하는 단어, 정보가 부족한 단어 -> 문서를 구분하는 척도로 사용하기에 부적절

드물게 등장하는 단어(tf가 적은 단어)가 중요한 정보를 가지고있음 (back-propagation)





Inverse Document Frequency(IDF)

df는 document frequency로 단어 t가 등장한 문장의 수

df는 단어 t의 중요도의 역수와 같음

즉, df 값이 낮은 단어가 중요함

idf는 단어t의 중요도를 나타내는 척도





$$
\begin{align*}
idf(t) &= \log \Big( \frac{1+n}{1+df(t)} \Big)  + 1 \\
\end{align*}
$$

n : 모든문장수

df(t) : 단어나온문장수







TF-IDF (Term Frequency - Inverse Document Frequency)

tf와 idf의 곱

문서군 내에서 특정 단어의 중요도를 수치화한 값

tf-idf값은 단어의 빈도가 높아질 수록, 희박하게 등장할 수록 커짐



$$
\begin{align*}
{tf - idf}_{term1} = tf \times idf
\end{align*}
$$



정규화

$$
\begin{align*}
v_{norm} = \frac{v}{||v||_2} = \frac{v}{\sqrt{ {v_1}^2 + {v_2}^2 + \dots + {v_n}^2} } \\ 
\end{align*}
$$








## Machine learning

### 지도학습(supervised learning)

- 의사결정 나무

  의사결정 규칙을 나무구조 표현을 통해 분류와 예측을 수행

Decision Tree의 분리기준(Split Criterion)은 생성된 자식 노드에 속하는 자료의 순수도(Purity)를 가장 크게 증가하도록 트리를 형성

입력 변수를 이용해 목표 변수의 분포를 얼마나 잘 구별하는 정도를 파악해 자식 마디가 형성되는데, 목표 변수의 구별 정도를 불순도(Impurity, 다양한 범주들의 개체들이 포함되어 있는 정도)에 의해 측정



지니 지수(Gini Index)

데이터 집합의 불순도를 측정

0~1 사이의 값이며, 어떤 데이터 집합에 속한 개체(레코드)들이 같은 범주(클래스)로 구성되어 있으면 지니지수는 0, 지니 지수가 작을수록 잘 분류된 것


$$
\begin{align*}
G &= 1 - \Sigma_{j=1}^c P(j)^2 \\
  &= 1 - \Sigma_{j=1}^c \big( \frac{n_j}{n} \big)^2 \\
\end{align*}
$$

C	: 범주(클래스)의 수

P(j)	: j번째 범주(클래스)에 분류될 확률

n	: 노드에 속하는 개체 수

$n_j$	: 노드에 속하는 수 중 j번째 범주(클래스)에 속하는 개체 수
