---
title: Bandwidth Utilization
category: Data_communications
tags:
  - Data_communications
---

# Multiplexing

멀티플렉싱은 단일 데이터 링크를 통해 여러 신호를 동시에 전송할 수있는 기술 집합입니다.

- frequency-division ultiplexing (FDM)
  여러 주파수 합쳐서(mux) 보낸뒤 filter로 demux한다.
- wavelength division multiplexing (WDM)
  광케이블을 프리즘으로 합치고 나눠서 multiplexing 한다. (FDM과 유사)
- time-division multiplexing (TDM)
  - Synchronous
    한 라인에서 빈공간이 생기면 그만큼 비효율적
  - Statistical
    헤더를 붙여서 보냄
  시간단위로 나눠서 -> 단일코어 멀티프로세싱과 유사

# Spectrum spreading

- Frequency hopping spread spectrum (FHSS)
- direct sequence spread spectruemm (DSSS)