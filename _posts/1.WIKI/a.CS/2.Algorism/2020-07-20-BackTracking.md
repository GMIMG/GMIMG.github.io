---
# title: 
# tags : -
category: Algorism
toc: false
notice: false
---

# 2020-07-20-BackTracking

1. 상태 공간 트리에 대한 깊이 우선 탐색
2. 방문하는 노드가 유망한지 여부 점검
    - 노드의 유망성 판단 방법은 해를 찾으려는 문제에 따라 달라짐
3. 만일 선택한 노드가 유망하지 않을 경우, 해당 노드의 부모 노드로 돌아가서 검색 계속 진행

```python
def checknode(v):
	if promissing(v):
		if there is a solution at v:
			write the solution
		else:
			for u in each child of v:
				checknode(u)
```