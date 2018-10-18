---
title: Recursion(재귀)
category: Python
tags:
  - Python
---

# data structure

## recursion

~~~python
def func(n):
    print(n)
    #base case --> 기저조건
    #탈출조건 --> 재귀를 탈출하는 조건

    if n==0:
        return
    func(n-1)
func(5)
~~~

~~~python
#factorial
def factorial(n):
    #탈출 조건
    if n <= 1:
        return 1
    return n*fatorial(n-1)
for i in range(1,6):
    print(factorial(i),end= ' ')
~~~

~~~python
#fibonacci
def fibonacci(n):
    """
    n번째 fibonacci 수
    """
    if n==1:
        return 0
    elif n==2:
        return 1
    return fibonacci(n-1) + fibonacci(n-2)
print(fibonacci(10))
~~~