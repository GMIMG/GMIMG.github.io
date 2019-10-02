---
title: Advanced-C
category: Embedded
tags:
 - C
 - Embedded
toc : true
---
# Advenced C

## 데이터타입과 형변환

### 데이터 타입

- int 상수의 크기는 컴파일러 마다 다르다(CPU 의존적) -> 한번에 처리할 수 있는 단위
- 상수도 타입을 가지고 있음 -> 명확히하기위해 suffix 이용
- little, big endian
- 구조체의 크기는 예측하지말고 sizeof사용

```c
#include <stdio.h>

struct st
{
	int a;
	char b;
}x;

int main(void)
{
	int a = -1;

	printf("%d\n", sizeof(a));
	printf("%d\n", sizeof(int));
	printf("%d\n", sizeof(-1));
	printf("%d\n", sizeof a);
	printf("%d\n", sizeof - 1);
	printf("%d\n", sizeof(char));
	printf("%d\n", sizeof(int));
	printf("%d\n", sizeof x);
    return 0;
}
/*
4
4
4
4
4
1
4
8
*/
//데이터 align 때문에 int와 char형 두개의 변수를 포함한 구조체의 크기가 8이다.
```

### 형변환

C에서는 다음 4가지 경우에 형변환이 발생한다

1. 연산 : 큰 타입에 맞춰짐
2. 대입 : 좌변의 타입으로 변경
3. 호출 : argument가 parameter 타입으로 변경
4. Casting : ()안의 타입으로 변경

**데이터 타입들의 대.소 판정**

C에서 데이터 타입들의 크기를 판단하는 기준 : 더 큰수를 표현하는 타입의 크기가 더큼

- 정수 승격 : int 보다 작은 정수타입은 무조건 signed int로 승격된다.

  (signed, unsigned)char, short -> signed int로 변환 (단, int가 4B일 때만)

- unsigned int 우선 : signed 와 unsigned int는 unsigned int를 크게본다.

- 실수 우선 : 실수 타입이 정수 타입보다 크고 같은 타입끼리는 크기로 판단

  int < long int < long long int < float < double < long double

- 큰타입이 작은 타입으로 변환될때 truncation이 발생함(경고 발생).

- signed 형의 음수 표현은 [2의 보수](https://ko.wikipedia.org/wiki/2%EC%9D%98_%EB%B3%B4%EC%88%98)를 이용함.

- (signed -> unsigned)형변환 

```C
#include <stdio.h>

int main(void)
{
	unsigned char c = 0xff;

	if(c == 0xff) // (signed int) 0x000000ff == (signed int) 0x000000ff
		printf("%x\n",c+1);
	else
		printf("%x\n",c-1);
		return 0;
}
// 100
```

```c
#include <stdio.h>

int main(void)
{
	signed char c = 0xff;

	if(c == 0xff) //(signed int) 0xffffffff != (signed int) 0x000000ff
		printf("%x\n",c+1);
	else
		printf("%x\n",c-1);
    return 0;
}
// fffffffe
```

```c
#include <stdio.h>

int main(void)
{
	char c = 0xff;

	if(c == 0xff) 
    //(signed int) 0xffffffff != (signed int) 0x000000ff 
	// => 컴파일러에 따라 char의 default값이 다름. VS : signed, RVDS : unsigned
		printf("%x\n",c+1);
	else
		printf("%x\n",c-1);
    return 0;
}
// fffffffe (VS에서 실행)
```

![casting_extention](\assets\img\Embedded\typecasting_extention.jpg)

unsigned char, singed char가 더큰 타입의 signed int 와 비교하기위해 signed int 로 승격되는데 unsigned char는 나머지가 0으로 채워지는 반면, 같은 signed형인 signed char는 최상위 바이트로 채워진다.

```c
#include <stdio.h>

int main(void)
{
	signed short ss = -1; 
	unsigned short us = -1;
	//상수는 signed int형 이므로 0xffffffff가 작은 데이터타입으로 
	//형변환 돼서 들어감 -> ss = 0xffff = -1, us = 0xffff = 65,535 
	if(ss < us) printf("UNSIGNED SHORT\n");
    // 조건문의 비교를 위해 다시 signed int로 형변환
    // (singed int)0xffffffff < (signed int) 0x0000ffff
    // -1 < 65,535
	else if(ss > us) printf("SIGNED SHORT\n");
	else printf("SAME\n");
    return 0;
}
//UNSIGNED SHORT 
```



```c
#include <stdio.h>

int main(void)
{
	int a[4] = {1,2,3,4};

	if(a[0]-a[1] < sizeof(a)) 
    // (unsigned int) 0xffffffff < (unsigned int) 0x00000001
		printf("%d\n", a[sizeof(char)]);
	else
		printf("%d\n", a[sizeof(short)]);
    return 0;
}
```

sizeof 연산자 반환값 type은 size_t인데 unsigned int 과 같으므로 왼쪽항은 signed int에서 unsigned int 로 형변환 돼서 비교한다. 



**실수형 상수**

실수(float, double, long double)는 모두 signed 이다.

long double 크기는 컴파일러 의존적이다.

float는 부동소수점(float point)에서 파생됨.(고정 소수점은 메모리 비효율적)

| Type   | 메모리 크기 | 유효자릿수                 | 최소값                    | 최대값                      |
| ------ | ----------- | -------------------------- | ------------------------- | --------------------------- |
| float  | 4 Byte      | 6~7 자리(컴파일러 의존적)  | 1.175494351 e-38          | 3.402823 466 e+38           |
| double | 8 Byte      | 15~16 자리(float의 약 2배) | 2.250738 585072 014E -308 | 1.797693 134862 3158E + 308 |

참고 [C언어의 데이터 타입](/posts/embedded-c#C언어의-데이터-타입)

| Type   | 부호부 (sign bit) | 지수부 (exponent bits) | 가수부 (mantissa bits) | 유효자릿수 (precision) |
| ------ | ----------------- | ---------------------- | ---------------------- | ---------------------- |
| float  | 1                 | 8                      | 23(부호포함 24)        | 6-7                    |
| double | 1                 | 11                     | 52(부호포함 53)        | 15-16                  |



예시) 3.5 를 이진수로 바꾸면 11.1(2) (소수점은 2로 계속 곱해서 정수부분을 취함, 0.625 => 0.101(2))

float 일때 유효숫자 1.11 * 2^(127+n)

0 100/0000/0 110/0000/... == 0x4060/0000









## 고급포인터







피연산자 - 연산자 - statement - function - file - program