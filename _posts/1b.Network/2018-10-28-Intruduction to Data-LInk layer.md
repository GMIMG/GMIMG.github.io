---
category: Network
tags:
  - Network
---

links and nodes

# Data-link layer

Communication at the data-link layer is node-to-node.

## Services

The datalink layer provides `services` to the network layer. It also receives services from the physical layer.

데이터링크층은 데이터그램을 다음노드로 전달한다.

Sending node의 Data-link layer는 네트워크로부터 받은 데이터그램을 encapsulate 하는게 필요하다.


- Framing
  
  데이터링크 층에서 첫 번째로 제공되는 서비스는 framing이다.

- Flow control

  만약 소비되는 프레임속도보다 제공되는 프레임의 속도가 높으면 멈추거나 속도를 늦추라고 요구한다.

- Error control
- congestion control

## Link

- point-to-point link
- Broadcast link

## Sublayers

- Data link control (DLC) sublayer
- Media access control (MAC) sublayer
  Data-link layer of a broadcast link

# Link-layer addressing

Mac address(physical aaress)(link address)는 장치를 지날때마다 바뀌지만 IP address는 목적지에 도착할 때 까지 바뀌지 않는다. 즉 맥주소는 최종목적지가 아닌 바로 다음 목적지를 가리킨다.

- Unicast address
- Multicast address
- Broadcast address

## Address Resolution Protocol (ARP)

![Alt text](/assets/img/Network/ARP.jpg)

![Alt text](/assets/img/Network/ARP2.jpg)

![Alt text](/assets/img/Network/ARP3.jpg)

![Alt text](/assets/img/Network/ARP_example.jpg)

![Alt text](/assets/img/Network/ARP_example1.jpg)

![Alt text](/assets/img/Network/ARP_example2.jpg)

![Alt text](/assets/img/Network/ARP_example3.jpg)

![Alt text](/assets/img/Network/ARP_example4.jpg)
