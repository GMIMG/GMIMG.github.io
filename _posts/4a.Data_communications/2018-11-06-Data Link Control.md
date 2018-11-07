---
---

# Data Link Control

1. general serviece DLC Sublayer
2. Data link protocols
3. HDLC
4. PPP

## 
|---|
|DLC|
|---|
|MAC|
|---|
|PHY|
|---|

PHY-> 1계층 -> bit synchronization  
DLC,MAC -> 2계층 -> pack bits into 'frames'

frames 에는 sender와 recevier의 addresses가 정의된다. Fixed-size framing과 Variable-size framing으로 나뉜다.


##

### Charater-Oriented(byte-oriented) Framing

| Flag | Header | DATA from upper layer | Trailer | Flag |

byte단위로 보내준다. 8-bit Charater로 data를 보낸다. Header는 8bits의 배수이다.
내용에 Flag와 같은 패턴의 bit가 들어갔을 때 ESC(special byte)를 해당 bit앞에 붙여줌, ESC가 들어가도 ESC를 붙여준다. 
Trailer에는 CRC가 들어간다.

### Bit-Oriented Framing

| Flag | Header | DATA from upper layer | Trailer | Flag |

Data에 Flag와 같은 패턴의 bit가 들어갔을 때 extra bits를 붙여준다.

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

