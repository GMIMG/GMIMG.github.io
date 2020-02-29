---
title: Process & Thread
category: ComputerScience
tags:
  - Process
  - Thread
---

# process & thread

## process

- 스케줄링
  1. 새로운 프로세스를 실행 or 종료
  2. 실행 중이던 프로세스가 => I/O작업
  3. Time slice(라운드 로빈 알고리즘 사용)가 끝났을 때

  - 스케줄링 알고리즘
    1. 우선순위
        프로세스의 우선순위대로 실행하고, 우선순위가 낮은 프로세스를 위해 aging(우선순위를 높여줌)을해줌
    2. 라운드 로빈
        작업 중에 다른 프로세스도 실행시키기위해 time slice를 이용한다.

process 우선순위

- 선점형 스케줄링
  새치기
- 비선점형 스케줄링
  명시적으로 양보

### context switching

- context : cpu가 가지고 있는 register 정보
- CPU에 실행중이던 프로세스의 reg정보를 PCB에 내리고 다른 프로세스를 실행하는 작업

- process 안에서 분리된 작업을 thread 로 만들 수 있다.
- CPU가 multi core일 때 시간 단축이 된다.
- 한 프로세스는 code, data, heap은 공통으로 갖고, stack만 thread로 나누어짐
- 동시성 프로그래밍을 할 땐 multi thread로 해야함.


### example

- race condition (경쟁조건) => mutual ~~~ 상호
- 교착상태



