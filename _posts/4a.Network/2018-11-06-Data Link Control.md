---
category: Network
tags:
  - Network
---

# Data Link Control

1. general serviece DLC Sublayer
2. Data link protocols
3. HDLC
4. PPP

## General service DLC Sublayer

| DLC |
|:---:|
| MAC |
| PHY |

DLC,MAC -> 2계층 -> pack bits into 'frames'
PHY-> 1계층 -> bit synchronization  

frames 에는 sender와 recevier의 addresses가 정의된다. Fixed-size framing과 Variable-size framing으로 나뉜다.

| Flag | Header | DATA from upper layer | Trailer | Flag |
|:----:|--------|-----------------------|---------|------|

### Charater-Oriented(byte-oriented) Framing

byte단위로 보내준다. 8-bit Charater로 data를 보낸다. Header는 8bits의 배수이다.
내용에 Flag와 같은 패턴의 bit가 들어갔을 때 ESC(special byte)를 해당 bit앞에 붙여줌, ESC가 들어가도 ESC를 붙여준다. 
Trailer에는 CRC가 들어간다.

### Bit-Oriented Framing

'Bit stuffing and unstuffing'

Data에 Flag와 같은 패턴의 bit가 들어갔을 때 extra bits를 붙여준다. Flag가 01111110인 경우(FDLC, PPP) 11111이 나왔을때 다음에 0비트를 붙여서 송신해서 Flag와 같은 패턴이 나올 수 없게 방지한다.

'Flow Control'

Balancing between proudction and consumption rates. Feedback from the receiving node to the sending node to stop or slow down pushing frames.

-> Buffers가 발생

'Error Control'

CRC is added to the frame by the sender and checked by the receiver.

보통 수신자에서 송신자로 보내는 Acknowledgment(ACK)로 둘을 한꺼번에 하게된다.

- Connection-Oriented Protocol

  계속 Data를 주고받으며 연결이 되어있어야 한다.

- Connectionless Protocol
  
  Wifi같이 필요할 때에 Data를 주고받으며 연결이 된다.

## Data-link layer protocols

- Simple
- Stop-and-Wait
- Go-Back-N
- Selective-Report

Protocol을 표현하는 방법은 다음과 같다.

- FSM (Finite state machine)

  FSM은 오직 ready state만 가지고있다. sending machine은 request가 오기전까지 ready state에 남아있다.

- MSC (Message sequence chart)




### Stop-and-Wait

Using both flow and error control. Sender sends one frame at a time and waits for an acknowledgment before sending the next one.

![StopAndWaitFSM](/assets/img/Data_communication/StopAndWaitFSM.jpg)

![StopAndWaitFSM](/assets/img/Data_communication/StopAndWaitMSC.jpg)

Sequence and ACK에 Numbering을 하여 duplicate packets을 방지 한다.

'Piggybacking'

양방향 통신에서 ack자체의 헤더와 CRC가 큰 data를 차지해서 send data안에 ack 자리를 내주어 같이보냄.

## HDLC

High-level Data Link Control (HDLC) is a bit-oriented protocl for communication over point-to-point and multipoint links. It implements the Stop-and-Wait protocol

Configuration and Transfer Modes

- Normal response mode (NRM)
  
  요청과을 하면 대답을 하는 방식

- Asynchronous balanced mode (ABM)

  요청과 대답을 동시에 보냄

### Framing

- Information frames (I-frames)
  
  Used to data-link user data and control information relating to user data (piggybacking)

- Supervisory frames (S-frames)

  Used only to transport contol information

- Unnumbered frames (U-frames)

  Reserved for system management  
  information carried by U-frames is intended for managing the link itself

| Flag | Address | Control | (Information) | FCS | Flag |

- Flag field

  synchronization pattern

- Address field

  the address of the secondary station.

  - primary station : to address
  - secondary station : from address

- Control field

  flow and error control

- Information field

  user's data

- FCS field
  
  2- or 4-byte CRC

## Point-to-Point Protocol (PPP)

| Flag | Address | Control | Protocol | Payload | FCS | Flag |

PPP defines the format of the frame to be exchanged between devices.

PPP does not provide flow contol.
