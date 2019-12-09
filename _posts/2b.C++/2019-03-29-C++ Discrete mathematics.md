---
title: Discrete mathematics(이산수학)
category: C++
tags:
    - C++
    - 이산수학
##toc : true
---

이산수학을 들으면서 까먹었던 c++ 사용법을 다시 공부하게 됐다. 1차 과제는 생각한 숫자를 n장의 카드에서 있나 없나 확인으로 맞추는 과제였는데 배열의 동적할당 정도 사용한것 같다.

이번 2차 과제는

- 교재 1장의 프로그래밍 실습에 있는 가우스 제거 방법으로 역행렬을 구하는 프로그램을 참조하여 역행렬을 구하라.  
- 단, 행렬은 n 값을 받아서 n×n에 대해서 가우스 제거 방법과 가우스-조던 방법을 이용한 해석적 방법으로 역행렬을 구하여 서로 값들을 비교하라.

함수인자로 2차원 배열을 할당하기 위해 2중 포인터를 사용하였다.
~~~c++
void matrixout(float **matrix, int MAX);
~~~

2차원 배열을 동적으로 할당하는 방법
~~~c++
// allocate 2nd dimension matrix
int MAX;
cin >> MAX;
float **matrix = new float*[MAX];
for (int i = 0; i < MAX; ++i)
    matrix[i] = new float[MAX];
~~~