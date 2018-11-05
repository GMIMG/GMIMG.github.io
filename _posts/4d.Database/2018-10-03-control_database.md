---
title: 데이터베이스 조작
category: Database
tags:
  - SQL
  - DML
  - 뷰
---

# 데이터베이스 조작

1. SQL DML
2. SQL 질의어
3. 뷰

## DML(Data Manipulation Language)

SQL의 데이터 조작어

INSERT INTO 테이블 [(column [, column...])] VALUES  (값 [,값]) ;

NULL값은 `[빈칸]`, `''`, `null`로

```sql
SELECT [distinct] {*, column [alias]...}
FROM 테이블명
[WHERE Query조건(들)]
[ORDER BY {column, 표현식} [ASC | DESC]] ;
```