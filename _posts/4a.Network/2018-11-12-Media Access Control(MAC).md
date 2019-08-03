---
category: Network
tags:
  - Network
---

# MAC

- Random access
- Controlled access
- Channelization

## Random access Protocols

Each station can transmit when it desires on the condition that it follows the predefined procedure. including testing the state of the medium. If more than one station tries to send, there is an access conflict. i.e., collision.

- ALOHA
- CSMA
- CSMA/CD
- CSMA/CA

### ALOHA protocol

'Pure ALOHA'

Each station sends a frame whenever it has a frame to send (multiple access), but possibility of collision. If collided need to resend the frames that have been destroyed during transmission. Pure ALOHA protocol relies on acknowledgments from the receiver. If the acknowledgment does not arrive after a time-out period. the station assumes that the frame (or the acknowledgment) has been destoryed and resends the frame.

'Binary exponential backoff'

For each retransmission, a multiplier R = 0 to 2^k -1 is randomly chosen and multiplied by t(p)(maximum propagation time) or T(fr)(the average time required to send out a frame) to find T(B).

![BinaryExponentialBackoff](/assets/img/Data_communication/BinaryExponentialBackoff.jpg)

'Vulnerable time'

Length of time in which there is a possibility of collision.

![VulnerableTime](/assets/img/Data_communication/VulnerableTime.jpg)


'Throughput'

The throughput for pure ALOHA is S= G x e^(-2G)
The maximum throughput S(max)= 1/(2e) = 0.184 when G=(1/2)

'Slotted ALOHA'

Invented to improve the efficiency of pure ALOHA. Divide the time into slots of T(fr) seconds and force the station to send only at the beginning of the time slot. 시작지점을 정해줌. Vulnerable time = T(fr), Throughput S = G x E^(-G), S(max) = 0.368 when G=1

![img](/assets/img/Data_communication/VulnerableTime.jpg)

### CSMA

Carrier sense multiple access (CSMA)

To minimize the chance of collision and, therefore, increase the performance. 눈치를 보고 보냄. 

- 1-persistent
- Nonpersistent
- p-persistent

### CSMA/CD

### CSMA/CA

For wireless networks. Collisions are avoided through the use of CSMA/CA's three strategies: Interframe space, Contention window, and Acknowledgments.

## Controlled access

- Reservation
- Polling
- Token passing
  
## Channelization

- FDMA
- TDMA
- CDMA
