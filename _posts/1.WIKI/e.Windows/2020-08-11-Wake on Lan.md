# 2020-08-11-Wake on Lan

## Bios 설정

메인보드사에 따른 WOL 켜는 법 상이함.

## 랜카드 설정

장치 관리자 → 네트워크 어댑터 → intel(R) Ethernet Connection (2) I219-V

![image0_Untitled](/assets/img/2020-08-11-Wake on Lan/Untitled.png)
고급 탭 Wake on ** 활성화

![image1_Untitled 1](/assets/img/2020-08-11-Wake on Lan/Untitled 1.png)
전원 관리 탭 전원을 절약하기 위해 컴퓨터가 이 장치를 끌수 있음 체크 해제

![image2_Untitled 2](/assets/img/2020-08-11-Wake on Lan/Untitled 2.png)
## 윈도우설정

windows 10 기준

빠른 시작 켜기 체크 해제

![image3_Untitled 3](/assets/img/2020-08-11-Wake on Lan/Untitled 3.png)
## 공유기 설정

iptime 기준 관리자 메뉴(192.168.0.1)에서 고급설정-특수기능-WOL 기능에서 PC 추가

![image4_Untitled 4](/assets/img/2020-08-11-Wake on Lan/Untitled 4.png)
NAT/라우터 관리 에서 포트포워드 설정 3389포트 포워딩

![image5_Untitled 5](/assets/img/2020-08-11-Wake on Lan/Untitled 5.png)
보안기능-공유기 접속/보안관리 에서 원격 관리 포트 사용

![image6_Untitled 6](/assets/img/2020-08-11-Wake on Lan/Untitled 6.png)