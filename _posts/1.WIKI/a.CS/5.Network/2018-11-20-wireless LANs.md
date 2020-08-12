---
# title: 
# tags : -
category: Network
toc: false
notice: false
---

# 2018-11-20-wireless LANs

# Wireless LANs

## Introduction

### Characteristics

- 감쇠

    모든 방향으로 분산되기 때문에 강도가 빠르게 감소

- 간섭

    동일한 주파수 대역을 사용하는 경우 신호 수신이 힘듦

- 다중 경로 전파

    반사되는 신호때문에 동일한 발신자로부터 하나 이상의 신호를 수신 할 수 있음.

- 오류

### Access Control

- CSMA/CD
    1. 충돌이 감지되면

        프레임이 수신되지 않았으므로 다시 보내야 함을 의미합니다.

    2. 충돌이 감지되지 않으면

        프레임이 수신되었음을 ack로 알립니다.

    다음과 같은 세가지 이유로 CSMA/CD는 Wireless LANs에 적합하지 않다.

    - 동시에 sending과 또는 receiving
    - Hidden station problem
    - 경로 손실, 신호 페이딩(fading)으로 인한 매우 약한 감쇄
- CSMA/CA

    반송파 감지 다중 접속

## IEEE 802.11

IEEE 802.11, which covers the physical and data-link layers. Sometimes called wireless Ethernet

- Basic sericee set (BSS)

    와이파이처럼 하나의 AP에 연결 또는 직접연결

- Extended service set (ESS)

    두개 이상의 BSS를 AP로 구성

![image0_Untitled](/assets/img/2018-11-20-wireless LANs/Untitled.png)

‘Network Allocation Vector’ (네트워크 할당 벡터) (NAV)

![image1_Untitled 1](/assets/img/2018-11-20-wireless LANs/Untitled 1.png)

Source에서 DIFS시간동안 탐색하고 RTS를 Destination을 보낸다 여기에 채널 점유 시간을 포함합니다. 그러면 Destination에서 SIFS동안 기다렸다가 모든 기기에 CTS로 응답하면 Source가 아닌 기기들은 NAV로 아무 동작을 하지않는다. 그러고 Source와 Destination간의 Data 정보 교환을 한다.

DIFS : 아무도 안쓰는지 확인하는 시간 Handshaking : RTS or CTS를 합친 시간

*Hidden-Station Problem*

The solution to the hidden station problem is the use of the handshake frames (RTS and CTS)

![image2_IEEE802.11Problem](/assets/img/2018-11-20-wireless LANs/IEEE802.11Problem.jpg)

‘Point Coordination Function’ (PCF)

AP가 스테이션에 대해 폴링을 수행, 차례대로 폴링되어 AP에 데이터를 전송.

Addressing mechanisms

![image3_Untitled 2](/assets/img/2018-11-20-wireless LANs/Untitled 2.png)

![image4_Untitled 3](/assets/img/2018-11-20-wireless LANs/Untitled 3.png)

*Exposed Station Problem*

![image5_Untitled 4](/assets/img/2018-11-20-wireless LANs/Untitled 4.png)

## Bluetooth