---
title: 데이터베이스 정의
category: Database
tags:
  - Database
  - Table_space
  - DDL
---

# 데이터베이스 정의

1. 테이블스페이스
2. 사용자 계정
3. 권한과 역할
4. 테이블 정의
5. 데이터 사전

![Alt text](/assets/img/database_set.jpg)

## 테이블 스페이스 정의

~~~sql
create tablespace firstbank datafile 'c:\app\sksuk\oradata\orcl\first01.dbf' size 10M;
~~~

## 사용자 계정

~~~sql
CREATE USER user IDENTIFIED  
[BY password | EXTERNALLY]  
[DEFAULT TABLESPACE tablespace]  
[TEMPORARY TABLESPACE tablespace]  
[QUOTA [integer [K | M] | UNLIMITED] ON tablespace]  
[PROFILE profile]
~~~

## 권한

~~~sql
GRANT [시스템 권한] TO [User] WITH ADMIN OPTION;

REVOKE [시스템 권한] FROM [User];

GRANT [객체권한] (컬럼 1, 컬럼 2…) ON [객체명 | ALL] TO [사용자명 |PUBLIC] WITH GRANT OPTION;

REVOKE [객체권한] ON [객체명] FROM [사용자명 | PUBLIC] CASCADE CONSTRAINTS;
~~~

## 역할

~~~sql
CREATE ROLE 역할명 [NOT IDENTIFIED | IDENTIFIED BY [암호명]];  
ALTER ROLE 역할이름  [NOT IDENTIFIED | IDENTIFIED BY [암호]];  
GRANT 역할(ROLE) TO 사용자;  
REVOKE 역할(ROLE) FROM 사용자;
~~~

종류

- CONNECT : create session, create table, create index 등 8가지의 권한으로 생성
- RESOURCE : create table 등 약 20여 가지 권한으로 생성
- DBA : 데이터베이스의 모든 권한을 가짐
- SYSOPER : SYSDBA 권한과 데이터베이스를 생성할 수 있는 역할
- SYSDBA : 데이터베이스 시작과 종료 및 관리를 하기 위해 필요한 역할

## 테이블 정의

DDL : CREATE, ALTER, DROP, RENAME, TRUNCATE

데이터베이스의 구조를 생성, 갱신, 삭제하는 데에 사용되는 SQL 명령의 부분 집합
즉각적으로 데이터베이스에 영향을 미치며, 데이터 사전(data dictionary)에 정보를 기록

테이블생성

~~~sql
CREATE TABLE [schema].table_name  
  (column_name Datatype [DEFAULT 식] [column 제약 조건] ,  
  ...  
  [table 제약 조건]);
~~~

~~~sql
SQL> CREATE TABLE customer(
  2> c_no  VARCHAR2(14) NOT NULL,
  3> c_name  VARCHAR2(20) NOT NULL,
  4> c_addr  VARCHAR2(60),
  5> c_phone          VARCHAR2(16),
  6> c_dist  CHAR(2),
  7> CONSTRAINT cu_no_pk PRIMARY KEY(c_no));
~~~

desc table로 테이블 속성 확인

![Alt text](/assets/img/constraint.jpg)