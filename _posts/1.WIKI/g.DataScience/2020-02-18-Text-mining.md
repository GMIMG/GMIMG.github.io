---
# title: 
# tags : -
category: DataScience
toc: false
notice: false
---

# 2020-02-18-Text-mining

# 텍스트 분석 (텍스트 마이닝)

자연어 처리(NLP, Natural Language Processing)에 기반하고 있음. 비정형 데이터로부터 정보 추출.

- 텍스트 정규화 : 텍스트의 형태를 일관되게 변형
    - 토큰화 (Tokenization)
    - 어간 추출 (Stemming)
- 형태소 분석 (POS-Tagging) : 토큰의 형태소 파악
- 텍스트 분석의 종류
    - 정보 추출
    - 문서 분류
    - 감성 분석

## 텍스트 정규화

### 토큰화

텍스트를 의미 단위로 분할.

- Type : 단어 요소, 어간
- Token : 텍스트 내부 원소

Type은 공백기준으로 단순 분할한 Token을 중복제외 및 어간이 같은 단어 중복 제외 한 것.

언어마다 다름.

### 어간추출

형태가 변형된 단어에 대해 접사 등을 제거하고 어간 분리.

## 형태소 분석

POS-Tagging (Part-Of-Speech Tagging)

토큰의 품사 정보를 추출

## 정보추출

**Term Frequency (TF)** 단어 빈도(tf)는 특정 단어 t가 특정 문서 d내에 등장하는 빈도

tf 값이 클수록 문서에 많이 등장하는 단어, 정보가 부족한 단어 -> 문서를 구분하는 척도로 사용하기에 부적절

드물게 등장하는 단어(tf가 적은 단어)가 중요한 정보를 가지고있음 (back-propagation)

**Inverse Document Frequency(IDF)**

df는 document frequency로 단어 t가 등장한 문장의 수

df는 단어 t의 중요도의 역수와 같음

즉, df 값이 낮은 단어가 중요함

idf는 단어t의 중요도를 나타내는 척도

$$
\begin{align*}
idf(t) &= \log \Big( \frac{1+n}{1+df(t)} \Big) + 1 \\
\end{align*}
$$

n : 모든문장수

df(t) : 단어나온문장수

**TF-IDF (Term Frequency - Inverse Document Frequency)**

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

RNN (Recurrent Neural Network)

앞서 나온 입력에 대한 결과가 뒤에 나오는 입력값에 영향

-> Vanishing Gradient Problem 발생Weight가 업데이트 되는 과정에서 gradient가 1보다 작은 값이 계속 곱해져서, gradient가 사라지는 현상

- LSTM(Long Short Term Memory)
- GRU(Gated Recurrent Unit)

LSTM

입력 기억 출력의 정도를 조절하는 세개의 게이트로 구성된 Cell이 추가돼있음

- Forget Gate
- Input Gate
- Output Gate