# 2018-10-02-Analog Transmission

# Analog Transmission

## Digital-to-analog conversion

- Amplitude shift keying (ASK)
- Frequency shift keying (FSK)
- Phase shift keying (PSK)
- Quadrature amplitude modulation (QAM)

Data rate (bit rate, N bps) & signal rate (baud rate, s baud/sec)

S = N x 1/r baud

r: the number of data elements carried in one signal element

FSK를 제외하고 bandwidth는 신호속도에 비례한다.

아나로그를 전송하기 위해 고주파 신호를 생성하고 이를 Carrier signal이라고 한다. 수신 장치는 그 주파수에 맞춰 조정한다.

Carrier signal을 (진폭, 주파수, 위상)중 하나이상을 변조한 Modulated signal을 보낸다.

### Amplitude shift keyin g (ASK)

디지털 신호에 Carrier signal을 Multiplier 해줘서 보낸다.

![image0_Untitled](/assets/img/2018-10-02-Analog Transmission/Untitled.png)
### Frequency shift keying (FSK)

주파수가 여러개 필요. 안정적이지만 느림.

### Phase shift keying (PSK)

- BASK
- BPSK
- QPSK

요즘은 ASK와 함께 쓰는 QAM 방식을 주로씀

`**Constellation Diagram`

f는 주어져있고, A와 P를 좌표로 나타냄.

Length : amplitude

Angle : phase

1의 점이 1QAM이라고 볼 수 있다.

### Quadrature Amplitude Modulation (QAM)

직교 진폭 변조

ASK와 PSK를 결합한느낌.

대역폭은 같다.

## Analog-to-analog conversion

- Amplitude modulation (AM)
- Frequency modulation (FM)
- Phase modulation (PM)