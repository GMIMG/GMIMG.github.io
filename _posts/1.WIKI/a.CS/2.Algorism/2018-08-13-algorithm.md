---
# title: 
# tags : -
category: Algorism
toc: false
notice: false
---

# 2018-08-13-algorithm

## binary_search

```python
#linear search
def linear_search(li,target):
    for idx in range(len(li)):
        if target==li[idx]:
            return idx
```

알고리즘 성능 평가시 최악의 경우 몇번의 연산(비교)를 하는가?, 평균의 경우?

최악의 경우 연산횟수 T(n) = n

```python
#binary_search
li=[1,3,6,8,12]
def binary_search(li, target):
    start_idx=0
    end_idx=len(li)-1
    while start_idx<=end_idx:
        mid_idx=(end_idx+start_idx)//2
        print(start_idx, mid_idx, end_idx)
        print(li[start_idx], li[mid_idx], li[end_idx])
        if li[mid_idx]>target:
            end_idx = mid_idx-1
        elif li[mid_idx]<target:
            start_idx = mid_idx+1
        else:
            return mid_idx

    return None

print(binary_search(li, 2)) # None
```

## big O

big O 는 최고차수만 따짐

O(1) > O(logn) > O(n) >> O(nlogn) >>>>> O(n^2)

- O(1) : 상수시간
- O(logn) : 로그시간
    - 데이터가 증가할 수록 수렴함.
    - 트리(BST)의 데이터 삽입,탐색,삭제
- O(n) : 선형시간
    - linked list(연결리스트)의 탐색
- O(nlogn)
    - ex) 퀵 소트, merge sort
- O(n^2) : 지수증가
    - ex) 버블 소트 포함 단순정렬

**big O는 상대시간 비교**

*이 알고리즘은 데이터 갯수가 늘어날 때 연산횟수가 O를 보장한다*