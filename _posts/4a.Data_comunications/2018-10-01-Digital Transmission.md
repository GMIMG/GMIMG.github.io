---
title: Digital Transmission
category: Data_communications
tags:
  - Data_communications
---

# Digital Transmission

1. Digital-to-digital
2. Analog-to-digital
3. transmission modes

## Digital-to-digital

Digital signal -> Digital data

- line coding
- block coding
- scrambling

### Line coding

converts a sequence of bits to a digital signal

Data => 'incoding' => Line coding => 'decoding' => Data

- Data element: the smallest entity that can represent a piece of information; this is the bit; Data rate (bps) -> 0과 1의 갯수
- Signal element: the shortest unit (timewise) of a digital signal; signal rate (baud rate) -> 전압의 높낮이 갯수

*구분할줄 알아야함

Define a ratio `r` which is the `number of data elements carried by each signal element` (1개의 signal element로 몇개의 bit를 표현할 수 있는지)

![Alt text](/assets/img/line_coding1.jpg)

Relationship between data rate (N) and signal rate (S)

`S = N/r`  
S_ave = c x N x (1/r) baud  
c: case factor (0 <= c <= 1)

Baud rate와 Band width는 비례한다.  
B_min= c x N x (1/r)

`문제점`

- Baseline Wandering  
  0이 연속으로 나올때 구분  
  drift in the baseline  
  difficult for the receiver to decode correctly.
- DC Components  
  Frequencies around zero  
  주파수가 0에 가까워지면(연속적인 신호) DC가 되어 구리선으로 보내기 힘들어진다.
- Self-synchronization  
  receiver’s bit intervals must correspond exactly to the sender’s bit intervals  
  송신자와 수진자의 비트간격이 정확하게 일치해야한다.

`lack of synchronization`
>example)  
>Receiver clock is 0.1 percent faster.
>How many extra bits per second does the receiver receive if the data rate is 1 kbps?  
>1000 bits sent -> 1001 bits receive  
>1000000 bits sent -> 1001000 bits receive

Line coding scheme

- Unipolar(단극)  
  All the signal levels are on one side of the time axis, either above or below  
  NRZ(Non-Return-to-Zero) : Signal does not return to zero at the middle of the bit.

  ![Alt text](/assets/img/unipolar.jpg)

- Polar  
  Voltages are on both sides of the time axis.  
  Unipolar보다 에너지 효율이 좋음.

  ![Alt text](/assets/img/polar.jpg)

  NRZ-L : 0과 1이 반대의 level을가짐.  
  NRZ-I : 0이면 그대로 1이면 신호를 역전시킴

  The main problem with NRZ encoding occurs when the sender and receiver clocks are not synchronized. The receiver does not know when one bit has ended and the next bit is starting. ->  

  RZ(Return-to-Zero) : 무조건 중간에 0으로 돌아감. 수신기가 송신기의 bit시작 타이밍을 알수있다.(동기화)  
  uses three values: positive, negative, and zero.  
  1의 데이터를 2의 signal로 보내기 때문에 NRZ 보다 더 고주파 성분이 필요하다.  
  No DC component problem.  
  요즘 사용하진 않음

  ![Alt text](/assets/img/RZ.jpg)  

  biphase : RZ + NRZ-L
  - Manchester : 전압이 상반기동안은 일정하고 하반기에 다른레벨로 이동한다. 중간의 비트전환이 동기화를 제공.
  - Differential Manchester
  중간에 비트전환을 해주고, 다음비트가 0이면 비트시작을 반전하고 1이면 그대로간다.

  ![Alt text](/assets/img/biphase.jpg)

- Bipolar(양극)  
  DC component는 없으나 동기화문제가 있음.
  - AMI(Alternate mark invesion)  
    0은 volage 0, 1은 번갈아서 1역전
  - Pseudoternary  
    AMI의 반대

  ![Alt text](/assets/img/bipolar.jpg)

- Multilevel

  전압의 level을 나눠 date를 보내줌. 1 baud당 보내는 bit의 수를 증가시킴.  
  mBnL : m data elements, n signal elements `2^m <= L^n`  
  2B1Q => 2^2 bits, 4^1 signal  
  8B6T => 2^8 bits, 3^6 signal -> 남은 signal은 synchronization, error detection, and DC balance

  2B1Q

  ![Alt text](/assets/img/2B1Q.jpg)

  8B6T

  ![Alt text](/assets/img/8B6T.jpg)

- Multitransition

line coding summary
![Alt text](/assets/img/line_coding2.jpg)

### block coding

### Scrambling

규칙을 만들어서 기존 error를(baseline같은) 잡아줌

## Analog-to-digital

- Pulse code modulation(PCM)  
  - sampling  
    sine파는 2개의 sampling으로 복원가능  
    이상적으로 최대 주파수의 2배를 sampling
  - quantizing  
    실수를 잘라줌
  - encoding  
    디지털화해줌

- Delta modulation

## transmission modes

- parallel  
  속도가 빠름
- serial transmission  
  - Asynchronous  
    키보드처럼 시작-끝 반복, 데이터 단위가 작음.
  - Synchronous  
    연속적인 Data
  - Isochronous