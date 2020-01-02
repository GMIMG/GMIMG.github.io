---
category: ComputerScience
tags:
  - DataStructure
---

# 자료구조

- insert(저장)
- Search(탐색)
- Delete(삭제)

프로그램을 짤 때 가장 먼저 할 일 -> 어떤 자료구조에 넣을 것 인가?

연결리스트
싱크 링크드 리스트
더미 싱글 링크드 리스트
더미 더블 링크드 리스트
선형 비선형

ADT(Abstract Data Type) 추상데이터타입
-> 자료구조 책 살 때 ADT가 있는 책을 사라

데이터를 삽입 탐색 삭제하고 자료구조의 메서드의 함수 사용법
->인터페이스 (함수 시그니처)

## Node

-> 데이터를 저장하는 틀

- data - 우리가 저장하려는 데이터
- next - 다음 노드를 가리키는 참조

## ADT

인터페이스(함수 사용법)

추상화로 구분해놈

1. 삽입 -> add
    - s.add(data) -> None
2. 삭제 -> delete
    - s.delete() -> Node(삭제된 노드)
3. 탐색 -> search
    - s.search(target) -> Node, None

가비지 컬렉션 = 사용하지 않는 메모리를 언어,OS 차원에서 알아서 지워주는 것

python은 Reference count 을 사용해서 가비지 컬렉션을 구현함.
Reference count는 참조하는 값이 0이되면 삭제.

```python
import sys
a="i'm jimin"
sys.getrefcount(a)
```

## 배열

- 같은 데이터 타입(자료형)을 가진 변수의 모음
- 모든 메모리가 붙어있다(연결)
- CPU cache hit확률이 높음
- 단점 : 크기가 고정되어있음.

## 동적 배열(dynamic array)(가변배열)

- 길이가 변할 수 있다.
- heap
- 메모리가 붙어있다.

- 종단 삽입, 삭제 O(1)
- 단점 : 일반 삽입, 삭제 O(N)
- 탐색 indexing -> O(1)

1. 메모리 할당
2. 복사

## (double)Linked_list(연결리스트)

- 붙어있지 않음
- cache miss가 많이날 수 있음
- page fault 생길 수 있음
- 끝삽입, 처음삽입 O(1)
- 종단 삽입 삭제 -> O(1)
- 일반 삽입삭제 -> O(1)
- 단점 : 탐색 O(N)

## 자료구조의 사용

탐색 삽입 삭제를 적절히 쓰면 tree
탐색을 많이하고 삽입삭제가 적으면 동적배열
삽입 삭제를 많이쓰고 탐색이 적으면 연결리스트

Amortized analysis (분할 상환 기법)
worst case

- stack
- 큐
- tree -BST
- bubble sort

## stack

- Last in first out(LIFO)(선입후출)

- ADT
  - s.empty() -> boll(True or False)
  - s.push(data) -> None
  - s.pop() -> data(뽑고 삭제함)
  - s.peek() -> data(삭제하지 않고 뽑음)

## Queue

- enqueue(데이터 쌓음)
- dequeue

- First in first out(FIFO)(선입선출)

- ADT
  - empty() -> bool
  - enqueue(data) -> None
  - dequeue() -> data
  - peek() -> data

## Tree

- 어떤 노드에서 출발하여 cycle을 이룰 수 있으면 Graph, 아니면 Tree

- 이진트리는 노드의 자식이 2개보다 많으면 안됨.
- 자식이 없는 노드를 리프노드 있는노드를 인터널 노드 가장 상위에있는 노드를 루트 노드 선을 엣지, 자식을 서브트리 

- 가장상위를 Level0 차례로 올라감 (Height -> 최대 Level)
- 꽉차있는게 포화 이진트리
- 위부터 아레로, 왼쪽부터 오른쪽으로 채워져있으면 완전 이진 트리 -> heap을 구성 **

- 순회(traversal)
- 전위 순회
- 중위 순회 - 왼쪽부터 오른쪽으로 엣지를 따라서
- 후위 순회 - 맨아래 왼쪽부터 오른쪽으로

### BST 

- 규칙
  - key의 중복 X (key : BST의 index같은 느낌 organizing)
  - 왼쪽자식의 key는 자신의 key보다 작아야하고, 오른쪽자식의 key는 자신의 key보다 커야한다.

- ADT
  - empty() -> bool
  - insert(data) -> None
  - search(target) -> Node, None
  - remove(target) -> Node(deleted), None
    - leaf node
    - 자식노드가 1개인 노드
    - 자식노드가 2개일 때

