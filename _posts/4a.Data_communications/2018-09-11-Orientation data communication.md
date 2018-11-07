---
title: Orientation data communication
category: Data_communications
tags:
  - Data_communications
---
# 데이터 통신

Data communication => sharing information (transmission media(매개체))

10p.**
simplex, Harf-duplex, Full duplex
시험 -> **기본용어**, **현재쓰고있는것**

12p.
X

15p.**
Mesh, star Bus, Ring topology(시험) 
현재는 보통 star topology

25p.
LAN
Hub => Switch(today) - 허브를 집약함

27p.
WAN

30p.
internetwork - network간의 통신 - Switch가있음  
성적은 성실함에 비례, 최소 3.5이상

32p.
Circuit-switched  
Packet-switched(today) packet으로 나눠서 전송함, 사용하지 않을 때 siwtching

36p.
internet - 네트워크를 하는것  
Internet - Tcp/ip 프로토콜을 이용한 internet

38p.
ISP - 유선망(kt, skt)  
DSL - 유럽이나 미국에서 쓰는 전화 구리선으로 통신(100Mbs)

47p.**
Protocol Standard  
RFC - Internet protocol  
TCP/IP  
IEEE 802 standards - wifi  
3GPP - 통신사 시장

## Chapter 2

49p.

- Fisrt section
  protocol Layering

- Second section
  Tcp/IP protocol suite

- Third section
  OSI Model

53p.
single-layer  
직접전달  
Three-layer protocol  
Layer3 - 내용  
Layer2 - 암호화 복호화  
Layer1 - 전송  

60p.**

65p.
TCP/IP의 5개의 계층(외워야함)  
Layer1 - Physical - bits - 전기적 신호  
Layer2 - Data link - frame - Scaduling(Switch) - Mac address(48bit)  
Layer3 - Network - 가까운 Router까지 보냄 - IP address(IPv4-32bit) - 게이트웨이???  
Layer4 - Transport  
Layer5 - Application (Email, Web, FTP) - host

주로 1, 2계층 배움
1계층 배울게 굉장히 많지만 하드웨어이므로 대충

DHCP - IP를 줬다 뺐었다.

68p.
Network layer

- Internet Protocol(IP)
  - Connetionless protocol
    - Unicast (one-to-one)
    - Multicast (one-to-many)

ICMP - ping  
IGMP  
DHCP  
ARP

Transport layer

Transmission Control Protocol (TCP)

User Datagram protocol (UDP)

- 헤더가 작음
- 실시간 서비스

Application layer
HTTP  
SMTP(mail send) - POP3(제목과내용전부),IMAP(제목과 헤더)  
FTP  
TELNET  
SNMP  
DNS

71p.
Encapsulation & decapsulation

76p.
Multiplexing, Demultiplexing

책읽기 추천
