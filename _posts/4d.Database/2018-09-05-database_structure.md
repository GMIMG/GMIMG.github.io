---
title: Database programming
category: Database
tags:
  - Database
---

# 데이터베이스 프로그래밍

교재 : 데이터베이스 프로그래밍, 학산미디어, 석상기

java 설치
oracle 11g(Grid computing(분산시스템)) - DBMS(Database Managemint System)설치
-> a collection of interelated data
-> a set of programs to use database

## Database

데이터베이스
테이블스페이스의 집합
테이블 스페이스
테이블, 인덱스, 뷰 등의 집합
세그먼트
테이블, 인덱스, 뷰
익스텐트
하나의 세그먼트를 구성하는 조각
블록
하나의 익스텐트를 구성하는 최소 입출력단위

1. physical
    data file
    - 사용자 데이터 저장
    redo log
    - 두개 이상의 리두 로그파일이 있어야 하며, 변경된 데이터베이스의 데이터들에 대한 정보
    control file
    parameter file
    - 오라클 환경을 구성하는 파라메터에 대한 설정 값 저장

- main memory의 구성(오라클 인스턴스)
  - SGA(System Global Area) :background process가 사용하는 메모리공간(시스템 버퍼)
    - data buffer cache
    - log buffer
    - library
    - D.D
    - shared pool area
    - Large pool area
    - Java pool area
  - background process
  사용자의 파일이 원할하게 운용될 수 있도록 설계된 프로세스
    - DBWR
    - LGWR
    - SMON
    - PMON

User process(client)에서 source code(SQL)를 이용해서 server에 보내면 syntax를 확인하고 로딩함 -> source code가 기계어로 PGA(program global area)에 들어감.

2. logical
    1. block
    2. extent
    3. segment
    4. tablespace
        system, sysAux, undo, Temp, Users





# 데이터베이스 구조

환경 : 오라클 데이터베이스 11g

- 데이터베이스 - 테이블스페이스의 집합
- 테이블 스페이스 - 세그먼트의 집합
- 세그먼트 - 테이블, 인덱스, 뷰
- 익스텐스 - 세그먼트를 구성하는 조각
- 블록 - 하나의 익스텐스를 구성하는 최소 입출력단위

## 물리 영역

- Data file  
  사용자 데이터를 저장하는 파일
- Re-do log  
  데이터베이스 인스턴스에는 두개 이상의 리두 로그 파일 필수  
  변경된 데이터베이스 하나 하나의 데이터들에 대한 정보
- control  
  데이터베이스 이름과 데이터 파일 및 리두 로그 파일의 이름과 위치 정보가 있는 파일
- parameter  
  오라클 환경을 구성하는 파라메터에 대한 설정 값을 저장하는 파일

## 논리 영역

### 오라클 인스턴스

SGA와 Background process로 구성  
서버가 기동되면 SGA가 할당되고 백그라운드 프로세서가 기동
parameter파일이 인스턴스 특성 결정

#### SGA

- Data buffer  
  오라클 데이터를 읽고 수정하기 위해 디스크의 데이터를 읽어 저장

- log buffer  
  오브젝트 및 데이터 변경 시 생성되는 로그를 저장  
  데이터 베이스의 영속성을 유지하기 위한 파일의 메모리영역
- 공유풀
  SGA를 관리하는 메커니즘 파라메터 정보 등 오라클 오브젝트 정보 저장
  - L.A(Library cache)
    가장 최근에 실행한 SQL문 저장  
    공통으로 사용되는 명령문 공유
  - D.A
    데이터베이스 파일, 권한 파라메터 정보 저장
- 대형 풀
- 자바 풀

#### Background process

사용자의 파일이 원할하게 운용될 수 있도록 설계된 프로세스

- DBWR
  데이터 버퍼 캐시에 저장되어 있는 데이터 블록 중 변경된 데이터 블록의 내용을 디스크로 저장
- LGWR
  데이터베이스에서 발생한 모든 변화를 리두 로그파일에 저장
- SMON
- PMON

### PGA

User process(client)에서 source code(SQL)를 이용해서 server에 보내면 syntax를 확인하고 로딩함 -> source code가 기계어로 PGA(program global area)에 들어감.

오라클 데이터베이스에 접속하는 모든 사용자 프로세스에게 할당되는 각각의 서버 프로세스가 독자적으로 사용하는 오라클 메모리 영역

프로세스가 생성될때 할당되고 종료될 때 할당이 해제