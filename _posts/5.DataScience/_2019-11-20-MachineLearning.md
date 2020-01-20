---
category : DataScience
tags :
- DataScience
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








