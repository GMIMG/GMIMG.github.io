# 2018-10-11-Bandwidth Utilization

# Multiplexing

멀티플렉싱은 단일 데이터 링크를 통해 여러 신호를 동시에 전송할 수있는 기술 집합입니다.

- frequency-division ultiplexing (FDM) 여러 주파수 합쳐서(mux) 보낸뒤 filter로 demux한다.예제(No Guard band)

![image0_Untitled](/assets/img/2018-10-11-Bandwidth Utilization/Untitled.png)

![image1_Untitled 1](/assets/img/2018-10-11-Bandwidth Utilization/Untitled 1.png)

- wavelength division multiplexing (WDM)
광케이블을 프리즘으로 합치고 나눠서 multiplexing 한다. (FDM과 유사)

![image2_Untitled 2](/assets/img/2018-10-11-Bandwidth Utilization/Untitled 2.png)

- time-division multiplexing (TDM)
시간단위로 나눠서 -> 단일코어 멀티프로세싱과 유사
    - Synchronous TDM
    한 라인에서 빈공간이 생기면 그만큼 비효율적 One or more synchronization bits are usually added to the beginning of each frame.

        ![2018-10-11-Bandwidth%20Utilization%202a9cfa5ac6ff448685b11acdbf5e5629/Untitled%203.png](2018-10-11-Bandwidth%20Utilization%202a9cfa5ac6ff448685b11acdbf5e5629/Untitled%203.png)

    - Statistical TDM
    헤더를 붙여서 보냄

# Spectrum spreading(SS)

무선 응용 프로그램(LAN and WANs)에 사용됩니다.
확장된 스펙트럼을 사용하여 원본을 보다 안전한 전송을 위해 보호 봉투에 보관할 수 있습니다.

먼저 서로 다른 채널을 결합하기 전에보다 안전한 전송을 위해 신호의 대역폭을 분산시킵니다.

- Frequency hopping spread spectrum (FHSS)
A pseudorandome cod generator를 이용하여 랜덤 패턴을 만드로 Frequency table에 매칭시켜 주파수를 맞춘다.
- direct sequence spread spectruemm (DSSS) Original signal의 bit를 Spreading code를 이용해 Spread signal로 만들어 정보를 보호 할 수 있게한다.