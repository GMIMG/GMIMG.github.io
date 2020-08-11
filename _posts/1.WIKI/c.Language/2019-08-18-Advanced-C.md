# 2019-08-18-Advanced-C

## Advenced C

## C 문법 재정립

### 데이터타입과 형변환

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
```

```
4
4
4
4
4
1
4
8
//데이터 align 때문에 int와 char형 두개의 변수를 포함한 구조체의 크기가 8이다.
```

### 형변환

C에서는 다음 4가지 경우에 형변환이 발생한다

1. 연산 : 큰 타입에 맞춰짐
2. 대입 : 좌변의 타입으로 변경
3. 호출 : argument가 parameter 타입으로 변경
4. Casting : ()안의 타입으로 변경

##데이터 타입들의 대.소 판정##

C에서 데이터 타입들의 크기를 판단하는 기준 : 더 큰수를 표현하는 타입의 크기가 더큼

- 정수 승격 : int 보다 작은 정수타입은 무조건 signed int로 승격된다.

    (signed, unsigned)char, short -> signed int로 변환 (단, int가 4B일 때만)

- unsigned int 우선 : signed 와 unsigned int는 unsigned int를 크게본다.
- 실수 우선 : 실수 타입이 정수 타입보다 크고 같은 타입끼리는 크기로 판단

    int < long int < long long int < float < double < long double

- 큰타입이 작은 타입으로 변환될때 truncation이 발생함(경고 발생).
- signed 형의 음수 표현은 [2의 보수](https://ko.wikipedia.org/wiki/2%EC%9D%98_%EB%B3%B4%EC%88%98)를 이용함.
- (signed -> unsigned)형변환

```c
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

![image0_Untitled](/assets/img/2019-08-18-Advanced-C/Untitled.png)
casting_extention

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

##실수형 상수##

실수(float, double, long double)는 모두 signed 이다.

long double 크기는 컴파일러 의존적이다.

float는 부동소수점(float point)에서 파생됨.(고정 소수점은 메모리 비효율적)

| ﻿Type  | 메모리 크기 | 유효자릿수                 | 최소값                       | 최대값                         |
| ------ | ------ | --------------------- | ------------------------- | --------------------------- |
| float  | 4 Byte | 6~7 자리(컴파일러 의존적)      | 1.175494351 e-38          | 3.402823 466 e+38           |
| double | 8 Byte | 15~16 자리(float의 약 2배) | 2.250738 585072 014E -308 | 1.797693 134862 3158E + 308 |

| ﻿Type  | 부호부 (sign bit) | 지수부 (exponent bits) | 가수부 (mantissa bits) | 유효자릿수 (precision) |
| ------ | -------------- | ------------------- | ------------------- | ----------------- |
| float  | 1              | 8                   | 23(부호포함 24)         | 6-7               |
| double | 1              | 11                  | 52(부호포함 53)         | 15-16             |

예시) 3.5 를 이진수로 바꾸면 11.1(2) (소수점은 2로 계속 곱해서 정수부분을 취함, 0.625 => 0.101(2))

float 일때 유효숫자 1.11 * 2^(127+n)

0 100/0000/0 110/0000/… == 0x4060/0000

### 포인터와 힙

C언어에서 힙영역을 사용하기위해 표준라이브러리인 <stdlib.h>의 malloc, calloc 등의 함수를 사용한다.

힙은 다음과 같은 단점이있다.

- linked list로 설계되어있어 할당 시간이 선형적으로 증가
- 할당 공간 관리를 위한 Header 메모리를 낭비
- 메모리 단편화(fragmentation)에 의한 누수(leakage)

`void *`는 가급적 다음 경우로만 사용을 제한한다.

- 함수의 리턴을 어떤 포인터 타입이 대입 받을지 알 수 없을 때

    ```c
    int * ip = malloc(...);
    char * cp = malloc(...);
    ```

- 함수를 호출할 때 어떤 타입의 주소를 전달할 지 알 수 없을 때

    ```c
    void func(void *p, int n)
    {
    	char *cp = p;
    	...
    	cp[n] = x;
    }
    ```

## 고급포인터 분석 및 설계

### 배열과 메모리 분석

버퍼의 데이터 수량 계산

```c
int a[10];
int i;
for(i=0; i < sizeof(a)/sizeof(a[0]);i++)
{
    ...
}
```

주소연산

주소끼리의 뺄셈은 offset 연산이 된다.

```c
int *p, *q;
p = (int *)0x1008;
q = (int *)0x1000;
p-q; //
q-p;
```

타입 승계

```c
int *p = (int *)0x1008;
p-1; //0x1004
p+1; //0x100C;
*(p-1); //
*(p+1); //
```

메모리 표현 규칙과 *, & 연산자

`*` : 내용참조 연산사 (indirect or content of)

`&` : 주소참조 연산자 (address of)

선언할 때 선언자 *와* 연산자는 다르다. 선언자 *는 포인터를 선언하기 위해 쓰이고,* 연산자는 주소의 내용을 return한다. 또한 &연산자는 변수이름에 붙이면 주소를 return한다.

1차원 배열의 이해

| ﻿name | value | adress |
| ----- | ----- | ------ |
| a[0]  | 10    | 0x1000 |
| a[1]  | 20    | 0x1004 |
| a[2]  | 30    | 0x1008 |
| a[3]  | 40    | 0x100C |

```c
int a[4] = {10,20,30,40};
//a[0] -> 10
//&a[0] -> 0x1000
//a -> 1000

//a[0]+1 -> 11
//a+1 -> 0x1004
//*a -> 
//*(a+1) -> 

//&a ->
//*&a ->
//&a + 1 ->
```

### 배열 1공식 : 정의식

배열명은 배열의 첫 요소의 주소다.

a == &a[0]

배열의 양면성 : 배열 이름은 데이터 타입이 무엇일까?

배열(int [4]) 이면서 포인터(int *)

-> 배열은 address of(&)와 sizeof 연산을 만날 때만 배열 타입으로 쓰인다.

sizeof(a) -> 16

&a -> 0x1000

함수의 parameter가 배열일때 다음식은 모두 똑같이 작용한다.

```
int sum(int b[5]); //활용이 쉬움
int sum(int b[]);
int sum(int b[100]); //요소수는 무의미하다.
int sum(int * b); //의미가 적절함
//매개변수로서 배열은 배열의 주소값이 전달된다.
```

### 배열 2공식 : 활용식

![image1_Untitled 1](/assets/img/2019-08-18-Advanced-C/Untitled 1.png)
array

a[2] == *(a+2) == 2

### 배열 3공식 : 특성식

모든 배열은 배열명과 배열의 주소 값이 같은 특성이 있다.

int a[4];

-> a == &a

단 값만 같고, 타입은 전혀 다르다.

a의 타입은 int [4] 이므로,

&a의 타입은 int (*)[4] 이다.

### 무한확장형 변수의 해석

Modifier : 변수의 원래 기능을 변경하는 것

`*` : 포인터 변수

`[]` : 집합화

`()` : 함수화

```c
int *(*a[4])(int *);
// a는 4개짜리 배열이고 주소값을 저장하는데 함수 주소이고,
// 이 함수는 (int *) 를 인자로하고 int *를 return해준다.
```

### 깡통이론과 대처법

C에서 자체적으로 주소타입인것은 다음 4가지이다.

- 배열명
- 함수명
- 문자열 상수
- 포인터 변수

주소값의 변경이 가능한 것(좌변에 올 수 있는 수식)은 포인터 변수 뿐이다.

이 4가지 외에 타입은 &을 붙여야 주소 타입이 된다.

포인터의 역할 2가지

- 함수,배열, 문자열이 불가능한 것을 가능하게 한다.
- Heap 메모리에 접근하게 한다.

깡통이론이란 주소성격을 갖는 무한확장형 변수 이해를 돕기 위한 방법이다. 무한확장형 변수는 일반 변수와 달리 스스로 주소화 되고 그 안에 데이터를 넣는다. 그래서 배열,함수, 문자열은 그 자체의 깡통(메모리를 감싸는 박스)을 갖는다.

배열명과 함수명은 곧 배열, 함수의 주소다.

문자열은 문자열 자체를 배열의 이름으로 사용한다.

포인터 깡통은 배열, 문자열, 함수와 달리 가리키는 대상이 깡통이다.

모든포인터 p가 가리키는 것은 이름이 (*p)이다.

### 배열 등가포인터와 양파이론

### 함수 등가포인터와 직관적 코드 설계

### 힙과 메모리 직접 액세스

### Type Qualifier

const

volatile

### 고급 포인터 타입 캐스팅

## 유도형 변수와 데이터 모델링

### 유도형 변수와 포인터

### 비트필드 구조체