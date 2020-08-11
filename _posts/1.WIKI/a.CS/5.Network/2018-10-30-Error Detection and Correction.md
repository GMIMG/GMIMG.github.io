# 2018-10-30-Error Detection and Correction

- Block coding
- Cyclic coding
- Checksum
- Forward error correction

Error => bit가 깨짐

- Single-bit error
- Burst error

`Redundancy` : Error 탐지를 위해 부가적으로 붙이는 bit

# Block coding

Codewords(n) = datawords(k) + redundant(r)

2^n - 2^k = codeword가 남아서 invalid 코드를 판단한다.

Hamming Distance : 두 bits를 exclusive or해서 1의 갯수를 샌것 (즉, 두 words의 거리)

## Linear Block Codes

각 비트를 exclusive or 해서 redundancy를 붙여줌.

ex) 00 -> 000, 10 -> 101, 01 -> 011, 11 -> 110

Minimum Hanning distance is 2.

## Parity-check code

하나의 linear bock code

detect an odd number of errors

# Cyclic coding

## CRC

![image0_Untitled](/assets/img/2018-10-30-Error Detection and Correction/Untitled.png)

CRC

![image1_Untitled 1](/assets/img/2018-10-30-Error Detection and Correction/Untitled 1.png)

CRC2

어떤값을 나눠서 남은 나머지를 붙여서 보냄

수신측과 송신측은 어떤 값을 나눴는지 미리 정해야함.

수신측에서 받은 codeword를 그수로 나누면 나누어 떨어져야한다.

### Polynomial

binary -> 다항식으로 차수를 적용

Generator 생성에 유리

**dataword를 주고 CRC값 찾기

# Checksum

블럭을 일정한 bit인 여러 유닛으로 나누어 다 더한값을 Redundancy로 사용

유닛의 범위를 넘어가면 넘어간 범위를 그냥 더해줌

**풀어볼것

# Chunk Interleaving

패킷별로 보내는게 아니라 다른 유닛으로 보내준다 -> 미디어전송에 유리(손실돼도 큰 지장 없음)