---
title: 프로젝트 분석 및 데이터베이스 설계, 데이터베이스 시동과 접속
category: Database
tags:
  - Database
  - E-R
---

# 프로젝트 분석 및 데이터베이스 설계

- 사용자 요구분석
- 개념적 데이터베이스 설계
  DB에 저장해야 할 데이터를 모형으로 표현
  E-R모델, 객체지향 모델
- 논리적 데이터베이스 설계
  특정 DBMS를 사용하기 위한 논리적 구조 설계
- 물리적 데이터베이스 설계
  데이터베이스 스키마 구축

E-R 모델

엔티티라는 객체와 객체간의 관계 집합으로 구성

에트리뷰트 : 엔티티가 가지는 속성

![Alt text](/assets/img/erd.jpg)

`테이블 설계`

![Alt text](/assets/img/design_table.jpg)

`주키와 외래키`

![Alt text](/assets/img/PK_FK.JPG)

# 데이터베이스 시동과 접속

Startup 옵션

![Alt text](/assets/img/startup.jpg)

NOMOUNT 단계  
 init<SID>.ora 파라미터 파일을 읽어서 데이터베이스가 사용하게 될 메모리 영역의 크기, 사용자 접속 수, 프로세스 수, 생성 가능한 파일 수 등을 결정
인스턴스 시작

MOUNT 단계  
 컨트롤 파일을 읽어서 데이터베이스명과 데이터베이스를 구성하는 파일의 경로와 파일명이 일치하는지를 확인하고 파일들의 현재 사용 가능 여부를 확인

OPEN 단계  
 일반 사용자들이 데이터베이스에 접속하여 정보를 조작할 수 있게 해줌

Sql plus 특징

![Alt text](/assets/img/sqlplus.jpg)

sql plus 명령어

![Alt text](/assets/img/plus_commend.jpg)

Set 명령

![Alt text](/assets/img/set_commend.jpg)