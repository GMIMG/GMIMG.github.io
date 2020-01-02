

## Numpy

파이썬의 추가 라이브러리중 하나로, 수치계산에 유용하게 쓰인다. 특히 벡터나 행렬 연산에 매우 편리하다. 파이썬의 라이브러리중 pandas나 matplotlib 등 여러 라이브러리가 numpy를 기반으로 만들어졌다.

numpy에서 자료형으로 array를 기본적으로 쓰는데 c언어의 배열과 유사하다.

```python
import numpy as np
# array 만들기
arr1 = np.array([1,2,3])
# => array([1, 2, 3])

arr1.shape
# => (5,)

arr1.dtype
# => dtype('int32')

np.zeros((3,5))
# => array([[0., 0., 0., 0., 0.], 
#		   [0., 0., 0., 0., 0.], 
# 		   [0., 0., 0., 0., 0.]])

np.ones(9)
# => array([1., 1., 1., 1., 1., 1., 1., 1., 1.])
```

array는 기본적으로 같은 shape끼리 원소간 사칙연산이 가능하다. 또한, 브로드캐스트라능 기능을 통해 다른 크기의 array와의 연산도 가능하며 스칼라 값과 연산도 가능하다.



인덱싱

```python
arr1 = np.arange(12)
arr1
# => array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
arr1[3]
# => 3
arr2 = arr1.reshape((3,4))
arr2
# array([[ 0,  1,  2,  3],
#       [ 4,  5,  6,  7],
#       [ 8,  9, 10, 11]])
arr2[2,3]
# => 10
```

array는 조건을 사용한 boolean 인덱싱(마스크)가 가능하다. 

```python
num = np.array([1,1,2,3,4,5,2,1,1,2,1])
num == 1
# => array([ True,  True, False, False, False, False, False,  True,  True, False,  True])
num[num != 1] = 0
num
# array([1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1])
```



| 함수                                       | 설명              |
| ------------------------------------------ | ----------------- |
| abs                                        | 절대값            |
| sqrt                                       | 루트              |
| square                                     | 제곱              |
| log, log2. log10                           | 로그              |
| sign                                       | 부호              |
| ceil                                       | 반올림            |
| add, subtract, multiply, divide(arr1,arr2) | 사칙연산          |
| random.*                                   | 난수생성          |
| maximum, minimum                           | 최대, 최소값      |
| sum, mean, std, min                        |                   |
| argmin, argamx                             | 최소, 최대값 위치 |
| cumsum, cumprod                            | 누적합, 누적곱    |
| sort                                       |                   |
|                                            |                   |

여러행 또는 열간 연산해주는 함수는 보통 axis 인자를 가지고 있고 axis = 0 이면 행방향, axis = 1 이면 열방향 연산을 해준다. (default는 0)

출처 : https://doorbw.tistory.com/171





## pandas

### 기본 속성 및 메소드

```python
import pandas as pd
df = pd.read_csv('../data/gapminder.tsv', sep='\t')

df.head()
```

![df_gapminder](/assets/img/df_gapminder.png)

```python
df.info()
# =>
"""
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 1704 entries, 0 to 1703
Data columns (total 6 columns):
country      1704 non-null object
continent    1704 non-null object
year         1704 non-null int64
lifeExp      1704 non-null float64
pop          1704 non-null int64
gdpPercap    1704 non-null float64
dtypes: float64(2), int64(2), object(2)
memory usage: 80.0+ KB
"""

df.shape
# => (1704, 6)

df.columns
# => Index(['country', 'continent', 'year', 'lifeExp', 'pop', 'gdpPercap'], dtype='object')

df.dtypes
# =>
"""
country       object
continent     object
year           int64
lifeExp      float64
pop            int64
gdpPercap    float64
dtype: object
"""
```

### 인덱싱

```python
# loc : 인덱스 기준으로 행 데이터 추출
# 판다스에서 인덱스는 바꿀수 있음
# iloc : 행 번호를 기준으로 행 데이터 추출

df[['country', 'continent', 'year']]
# 5번째 행까지 가져오기
df.loc[:5]
# 모든행, 0, 4번째 열 가져오기
df.iloc[:,[0, 4]]

# 뒤에서 2번째 행까지 가져오기
df.tail(n=2)
```

![df_gapminder2](/assets/img/df_gapminder2.png)

### groupby

```python
# year열을 묶어서 lifeExp 열의 평균
df.groupby('year')['lifeExp'].mean()
# =>
"""
year
1952    49.057620
1957    51.507401
1962    53.609249
1967    55.678290
1972    57.647386
1977    59.570157
1982    61.533197
1987    63.212613
1992    64.160338
1997    65.014676
2002    65.694923
2007    67.007423
Name: lifeExp, dtype: float64
"""

df.groupby(['year', 'continent'])[['lifeExp', 'gdpPercap']].mean()
# =>
"""
                  lifeExp     gdpPercap
year continent                         
1952 Africa     39.135500   1252.572466
     Americas   53.279840   4079.062552
     Asia       46.314394   5195.484004
     Europe     64.408500   5661.057435
     Oceania    69.255000  10298.085650
1957 Africa     41.266346   1385.236062
     Americas   55.960280   4616.043733
     Asia       49.318544   5787.732940
     Europe     66.703067   6963.012816
     Oceania    70.295000  11598.522455
1962 Africa     43.319442   1598.078825
     Americas   58.398760   4901.541870
     Asia       51.563223   5729.369625
     Europe     68.539233   8365.486814
     Oceania    71.085000  12696.452430
1967 Africa     45.334538   2050.363801
     Americas   60.410920   5668.253496
     Asia       54.663640   5971.173374
     Europe     69.737600  10143.823757
     Oceania    71.310000  14495.021790
1972 Africa     47.450942   2339.615674
     Americas   62.394920   6491.334139
     Asia       57.319269   8187.468699
     
...

2007 Africa     54.806038   3089.032605
     Americas   73.608120  11003.031625
     Asia       70.728485  12473.026870
     Europe     77.648600  25054.481636
     Oceania    80.719500  29810.188275
"""

print(df.groupby('continent')['country'].nunique())
# =>
"""
continent
Africa      52
Americas    25
Asia        33
Europe      30
Oceania      2
Name: country, dtype: int64
"""
```



### 시리즈와 데이터프레임 만들기

**시리즈만들기**

```python
import pandas as pd
s = pd.Series(['banana', 42])
"""
0    banana
1        42
dtype: object
"""

s = pd.Series(['Wes McKinney', 'Creator of Pandas'])
"""
0         Wes McKinney
1    Creator of Pandas
dtype: object
"""

s = pd.Series(['Wes McKinney', 'Creator of Pandas'], index=['Person', 'Who'])
"""
Person         Wes McKinney
Who       Creator of Pandas
dtype: object
"""
```



**데이터프레임 만들기**

```python
# dictionary 형식으로 넣으면 정해진 열에 넣음
scientists = pd.DataFrame({ 
    'Name': ['Rosaline Franklin', 'William Gosset'], 
    'Occupation': ['Chemist', 'Statistician'], 
    'Born': ['1920-07-25', '1876-06-13'], 
    'Died': ['1958-04-16', '1937-10-16'], 
    'Age': [37, 61]})
"""
                Name    Occupation        Born        Died  Age
0  Rosaline Franklin       Chemist  1920-07-25  1958-04-16   37
1     William Gosset  Statistician  1876-06-13  1937-10-16   61
"""
scientists.set_index('Name')
```

![df_create](/assets/img/df_create.png)

```python
# 직접 index와 columns 지정
scientists2 = pd.DataFrame( 
    data=[['Chemist', '1920-07-25', '1958-04-16', 37],
           ['Statistician', '1876-06-13', '1937-10-16', 61]],
    index=['Rosaline Franklin', 'William Gosset'],
    columns=['Occupation', 'Born', 'Age', 'Died']) 
"""
                     Occupation        Born         Age  Died
Rosaline Franklin       Chemist  1920-07-25  1958-04-16    37
William Gosset     Statistician  1876-06-13  1937-10-16    61
"""
scientists2.reset_index()
```

![df_create2](/assets/img/df_create2.png)

```python
scientists2.reset_index().rename({'index':'Name'},axis=1)
```

![df_create3](/assets/img/df_create3.png)

```python
first_row = scientists.loc['William Gosset'] 
# =>
"""
Occupation    Statistician
Born            1876-06-13
Died            1937-10-16
Age                     61
Name: William Gosset, dtype: object
"""

first_row.index
# => Index(['Occupation', 'Born', 'Died', 'Age'], dtype='object')
first_row.values
# => ['Statistician' '1876-06-13' '1937-10-16' 61]
first_row.keys()
# => Index(['Occupation', 'Born', 'Died', 'Age'], dtype='object')
```



**데이터프레임 연산**

```python
ages = scientists['Age'] 
"""
0    37
1    61
2    90
3    66
4    56
5    45
6    41
7    77
Name: Age, dtype: int64
"""

print(ages > ages.mean())
"""
0    False
1     True
2     True
3     True
4    False
5    False
6    False
7     True
Name: Age, dtype: bool
"""

print(ages[ages > ages.mean()])
"""
1    61
2    90
3    66
7    77
Name: Age, dtype: int64
"""

# 인덱스를 기준으로 더해줌
ages[:4] + ages[-4:]
"""
0   NaN
1   NaN
2   NaN
3   NaN
4   NaN
5   NaN
6   NaN
7   NaN
Name: Age, dtype: float64
"""

ages[:4].add(ages[-4:], fill_value=0)
"""
0    37.0
1    61.0
2    90.0
3    66.0
4    56.0
5    45.0
6    41.0
7    77.0
Name: Age, dtype: float64
"""

rev_ages = ages.sort_index(ascending=False) 
"""
7    77
6    41
5    45
4    56
3    66
2    90
1    61
0    37
Name: Age, dtype: int64
"""

```



**결합**

```
scientists
```

![df_scientist](/assets/img/df_scientist.png)

```python
pd.concat([scientists,scientists],axis=1)
```

![df_concat](/assets/img/df_concat.png)

```python
pd.concat([scientists,scientists]).reset_index(drop=True)
```

![df_concat2](/assets/img/df_concat2.png)



**삭제**

```python
# scientists에는 Age열이 그대로남음
scientists_dropped = scientists.drop(['Age'], axis=1)
# inplace = True 로 원래테이블에 반영
scientists.drop(['Born'], axis=1, inplace=True)
```



### 데이터 시각화

 [시각화.html](\assets\html\04_시각화.html)

[matplotlib gallery](https://matplotlib.org/3.1.0/gallery/index.html)



### 데이터 연결

 [데이터연결.html](\assets\html\05_데이터연결.html)



### 누락값처리

 [결측처리.html](\assets\html\06_결측처리.html)



### 데이터정재

 [데이터정재.html](\assets\html\07_데이터정재.html)



### 판다스 자료형

 [판다스자료형.html](\assets\html\08_판다스자료형.html)



### 문자열 처리

[문자열처리.html](\assets\html\09_문자열처리.html) 



### apply활용

 [apply활용.html](\assets\html\10_apply활용.html) 



참조 : Doit! 데이터 분석을 위한 판다스 입문(Chen, Daniel Y. 지음, 이지스퍼블리싱)