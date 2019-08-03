---
title: Wired LANs Ethernet & Other Wired Networks
category: Network
tags:
  - Network
---

# Ehternet

IEEE Project 802

## Ethernet protocol

- TCP/IP protocol
- Local area network(LAN)

IEEE standard for LANs

![img](/assets/img/Data_communication/IEEE802LAN.JPG)


## Standard Ehternet

: data rate of 10 Mbps

### Characteristics

connectionless and Unrealiable Service

- Each frame sent is independent of the previous or next frame

Ethernet frame

| Preamble | SFD | Destination address | Source address | Type | Data and padding | CRC |
|:--------:|-----|---------------------|----------------|------|------------------|-----|


### Addressing

The Ethernet address is 6 bytes (48bits)

첫번째 Byte에는 Unicast, Multicast, BroadCast Addresses 정보가 들어있음.

- Unicast : 짝수
  
  All stations will receive the frame, the intended recipient keeps and handles the frame; the rest discard it.

- Multicast : 홀수
  
  All stations will receive the frame, the stations that are members of the group keep and handle it; the rest discard it.

- Broadcast : FF
  
  All stations (except the sender) will receive the frame and all stations (except the sender) keep and handle it.

### Access Method

The standard Ethernet chose CSMA/CD with 1-persistent method.

최소프레임길이 예제

### Implementation

10BaseX

- Data rate 10 Mbps
- Base means baseband (digital) signal
- X
  approximately defines either the maximum size of the cable in 100 meters. Or, the type of cable, T for unshielded twisted pair cable (UTP) and F for fiber-optic.

10Base5 : Thick Ethernet
10Base2 : Thin Ethernet
10Base-T : Twisted-Pair Ethernet
10Base-F : Fiber Ethernet

## FAST Ethernet

## GIGABIT Ethernet

## 10-GIGABIT Ethernet

# Other wired Networks

## telephone network

## The cable network

## Synchronous Optical Network (SONET)

a wide area network(WAN), SONET, that is used as a transport network to carry loads from other WANs.

SONET/SDH is a synchronous network using synchronous TDM multiplexing.

SONET 


## ATM