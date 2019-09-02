---
title: Embedded-C
category: Embedded
tags:
    - Embedded
    - C
toc : true
notice : true
---

이 포스팅은 2019년 여름 멀티캠퍼스에서 '청년취업아카데미 스마트 디바이스 프로그래밍' 과정을 수강하며 배운것을 정리하는 것을 목적으로 합니다. 임베디드 회사 윌텍(Willtek)에서 강사님을 모셔서 배웠습니다. IDE는 visual stdio 2005 입니다.

1주차에서 3주차는 C언어와 자료구조, 알고리즘을 공부했습니다. 틀린 내용이 있을 수 있으므로 지적이나 피드백은 감사하게 받겠습니다.

# Embedded C Programming

## 임베디드 시스템

임베디드 시스템은 다양한 분야에서 사용되는 만큼 각자 다른 목적을 가지고있다. 대부분은 몇가지 기능만을 수행하도록 설계된다. 또한 수백개의 규모로 양산되기 때문에 가격도 중요하다. 즉 메모리를 최대한 활용하고 적당한 속도의 싼 마이크로 프로세서를 사용하는게 좋다. 또한 신뢰성(안정성)을 중요시한다.

[임베디드 시스템](https://ko.wikipedia.org/wiki/%EC%9E%84%EB%B2%A0%EB%94%94%EB%93%9C_%EC%8B%9C%EC%8A%A4%ED%85%9C)



## C언어

하드웨어에 가장 가까운 코드는 **기계어**로 0과 1로 이루어져있고, 이것을 인간의 관점에서 이해하기 쉽게 기계어와 1:1 매칭 구성한것이 **어셈블리어**이다.  여기까지는 인간의 설계 보단 기계의 인식과정에 중점을 두어 <u>Low-Level 언어</u>로 불린다. 기계어와 어셈블리어는 CPU 아키텍처마다 다르다. 예를들어 인텔과 AMD의 CPU에서 사용하는 어셈블리어는 다르다. 

같은 프로그램이어도 다른 기계어와 어셈블리어를 만들어야하는 불필요한 과정을 생략하기위해 C언어가 만들어졌다. C언어는 같은 코드에도 컴파일러가 플랫폼에 맞는 다른 어셈블리어로 전환해준다. 이로서 인간은 플랫폼과 상관없이 자신이 설계하고자하는 프로그램을 설계할 수있게 되었고, <u>High-Level 언어</u>로 불린다. 참고로 High-Level 언어로는 JAVA와 C언어 기반으로 짜여진 Python이있다.

High-Level 언어는 Low-Level의 언어에 비해 생산성은 매우 높으나, 자원활용(메모리,시간) 효율성이 떨어진다. 일반 개발자가 Low-Level 언어를 사용할 일은 거의 없으나, 임베디드 업계에서는 자원활용이 매우 중요하고, 또 컴파일러가 개발되지 않은 환경에서 어셈블리어를 다루는 개발자가 많다고 한다. 



참고로 같은 C언어도 버전(컴파일러)에 따라 오류와 경고가 달라질 수 있다. 안정성, 신뢰성이 매우 중요한 항공,군사 업계에서는 이러한 충돌 가능성을 줄이기 위해 [MISRA](https://ko.wikipedia.org/wiki/MISRA_C) 같은 개발 표준을 사용한다. 

(컴파일러에 대한 이야기)



참고

[C 언어](https://ko.wikipedia.org/wiki/C_(%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4))

[컴퓨터 구조](https://ko.wikipedia.org/wiki/%EC%BB%B4%ED%93%A8%ED%84%B0_%EA%B5%AC%EC%A1%B0)

[시스템 아키텍처](https://ko.wikipedia.org/wiki/%EC%8B%9C%EC%8A%A4%ED%85%9C_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98)

[x86](https://ko.wikipedia.org/wiki/X86)

[파이썬](https://ko.wikipedia.org/wiki/%ED%8C%8C%EC%9D%B4%EC%8D%AC)

[컴파일러](https://ko.wikipedia.org/wiki/%EC%BB%B4%ED%8C%8C%EC%9D%BC%EB%9F%AC)

[GCC](https://ko.wikipedia.org/wiki/GNU_%EC%BB%B4%ED%8C%8C%EC%9D%BC%EB%9F%AC_%EB%AA%A8%EC%9D%8C)




## 상수

CPU는 0과 1이라는 2진수를 사용하기 때문에 우리가 일상생활에서 사용하는 10진수와 다르다. 수에 대해 이해 할 수록 프로그래밍 할 때 도움이된다. 또한 2진수는 보기가 불편하여 4자리씩 묶어서 16진수로 표현한다.  ( 0001(2) == 0x1)

[bit](https://ko.wikipedia.org/wiki/%EB%B9%84%ED%8A%B8)는 CPU가 인식할수 있는 최소단위이다. 즉 0과 1 이므로 2진수 한자리를 bit로 정의한다.

[byte](https://ko.wikipedia.org/wiki/%EB%B0%94%EC%9D%B4%ED%8A%B8)(B)는 일정한 갯수의 비트로 이루어진 비트열로 주소로 표현할 수 있는 가장 작은 단위라고 생각하면 된다. 대부분은 8bit이다. 그러므로 8bit는 16진수 두자리로 표현할 수 있다. (1byte == 0x00)

변환법 참고 : [2진수](https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84%EB%B2%95) - 10진수 - [16진수](https://ko.wikipedia.org/wiki/%EC%8B%AD%EC%9C%A1%EC%A7%84%EB%B2%95)



### C언어의 데이터 타입

정수의 데이터 타입

|    데이터 타입     | 크키(B) |                        최소값 |                        최대값 |
| :----------------: | :-----: | ----------------------------: | ----------------------------: |
|        char        |    1    |                             0 |                           127 |
|    signed char     |    1    |                          -128 |                           127 |
|   unsigned char    |    1    |                             0 |                           255 |
|    signed short    |    2    |                       -32,768 |                        32,768 |
|   unsigned short   |    2    |                             0 |                        65,535 |
|     signed int     |    4    |               -2,147, 483,648 |                2,147, 483,648 |
|    unsigned int    |    4    |                             0 |                4,294, 967,295 |
|    signed long     |    4    |               -2,147, 483,648 |                2,147, 483,648 |
|   unsigned long    |    4    |                             0 |                4,294, 967,295 |
|  signed long long  |    8    | -9, 223,372, 036,854, 775,808 |  9, 223,372, 036,854, 775,808 |
| unsigned long long |    8    |                             0 | ‭18, 446,744, 073,709, 551,615 |

integer(정수)는 시스템의 기본연산 단위를 사용하여 컴파일러에 따라 다르다. (16bit =>2byte, 32=>4byte, 64=>4byte) 대부분의 경우는 4byte이다.

실수의 데이터 타입

| Type   | 크기 | 최소값                    | 최대값                      | 유효 자릿수   |
| ------ | ---- | ------------------------- | --------------------------- | ------------- |
| float  | 4B   | 1.175494 351E - 38        | 3.402823 466E + 38          | 10진수 6자리  |
| double | 8B   | 2.250738 585072 014E -308 | 1.797693 134862 3158E + 308 | 10진수 15자리 |

실수를 메모리에 저장하는 방법은 IEEE754 표준.

실수는 unsigned type이 없다.



### suffix

c언어에서 사용하는 숫자(100,10.1)은 시스템의 기본 정수,실수를 따른다. 

시스템의 기본 정수 : 100 => signed integer
시스템의 기본 실수 : 10.1 => double

숫자의 타입 바꾸기 위해서 suffix 사용

100 -> signed int

100U -> unsigned int

100L -> long

100UL -> unsigned long

100LL -> long long

100ULL -> unsinged long long

 float 유효자릿수 10진수 6자리
double 유효자릿수 10진수 15자리

float(4B) -> 3.14f, -712.34E2f 

long double(8B) -> 3.14L, -712.34e2l



### 문자열

c언어에서 <stdio.h>라는 표준 입출력 라이브러리 문자를 입출력한다. 문자열을 저장하는 방법은 char형 배열에 아스키([ASCII](https://ko.wikipedia.org/wiki/ASCII))코드 대응하는 숫자를 저장한다. 즉 개발자는 문자를 넣지만 컴퓨터는 자동으로 숫자로 변환하여 저장한다는 뜻이다.

~~~c
#include <stdio.h>
int main(void)
{
	printf("Hello");
}
~~~
#### printf

printf 함수는 아스키코드로 이루어진 문자열상수를 콘솔에 문자로 변환해서 보여준다.
"Hello" => 문자열 상수
 : char str[]= "Hello" -> str은 char 형 배열로 6개가 들어감 5개문자('H', 'e', 'l', 'l', 'o') + '\0'(0x00)

char형 배열이 문자열로 인식되기 위해서는 '\0' 문자를 포함해야한다.


'0' 문자는 아스키코드로 0x20 값이다.

> '\0'은 아스키코드로 0x00(NUL)을 의미한다.
>
> NULL은 헤더파일에 정의된 매크로로 null pointer constant, 즉 (void *)0 인 포인터 타입이다.
>
>   NULL - 0x00000000 or 0x00000000'00000000 (32 vs 64 bit)
>
>   char *ptr = NULL 과 char *ptr = 0 은 **같은 의미**
>
>   int a = NULL 과 int a = 0 의 의미는 **다릅**니다.
>
> 출처: https://noirstar.tistory.com/16

문자열에는 다음과같은 특수문자들이 있다.

| Escape Sequence | ASCII | 기능                              |
| :-------------: | :---: | :-------------------------------- |
|       \a        | 0x07  | 경고음, Alarm                     |
|       \b        | 0x08  | New line, 줄 바꿈                 |
|       \t        | 0x09  | 탭(TAB)                           |
|       \n        | 0x0a  | 줄 바꾸기, New Line               |
|       \r        | 0x0d  | 줄 처음으로 가기, Carriage Return |
|       \\\       | 0x5c  | 백슬레쉬                          |
|       \\'       | 0x27  | 홑따옴표                          |
|      \\''       | 0x22  | 겹따옴표                          |
|       \o        | 0x00  | NULL, 문자열의 끝                 |



**형식지정자**

printf 함수에서 변수에 저장된 상수를 출력할 수 있는데 이때 타입에 따라 다음과같은 형식지정자를 써주면 된다.

integer : %d

unsigned int : %u

long : %ld

unsigned long : %lu

char : %c

문자열 배열 : %s

float, double : %f(부동소숫점), %e(지수표기법)

long double : %lf, %le



#### scanf와 scanf_s

scanf는 ("%s", 주소값)을 인자로 받는다.

최신버전의 컴파일러에서는 scanf 함수 대신 scanf_s를 사용 하도록 권유(거의 강요) 하고있다. 기존에 쓰던 scanf가 지정된 버퍼의 크기보다 많은양의 문자를 넣을 수 있기때문(**버퍼 오버플로우**)에 보안상문제로 업데이트 한것이다. scanf_s 는 ("%s", **배열의 주소, 배열의 크기**) 를 인자로 받는다. 일정 버전(VS2010) 이상의 컴파일러에서 에러없이 scanf 를 사용하기위해 '#pragma warning (disable:4996)' 또는 '#define _CRT_NO_SECURE_WARNINGS'을 코드 최상단에 선언해주면 된다.

| 서식문자 | 입력데이터          | 대응되는 인수형                 |
| -------- | ------------------- | ------------------------------- |
| d, D     | 10진 정수           | int *, long *                   |
| o, O     | 8진 정수            | int *, long *                   |
| i, I     | 정수                | int *, long *                   |
| u, U     | 부호 없는 10진 정수 | unsigned int *, unsigned long * |
| x, X     | 16진 정수           | int *                           |
| e, E     | 부동 소수점         | double *                        |
| f        | 부동 소수점         | double *                        |
| g, G     | 부동 소수점         | double *                        |
| s        | 문자열              | char *                          |
| c        | 문자                | char *                          |
| n        |                     | int *                           |
| p        | 포인터              | far * or near *                 |

**fflush(stdin)**

scanf에서 지정된 입력 개수보다 더 많이 입력 받으면 입력버퍼에 남는데 이 버퍼를 지워주기위해 사용되는 함수이다.



## 변수

**변수의 선언**

specifier + modifier + identifier ;

- spcifier : 변수의 모양, 유효범위와 기억클래스 지정해줌
  - Type specifier : 변수의 모양을 지시(char, short, int, long, float, double, long double)
  - Type qualifier : 변수의 기능 제한 (const, volatile)
  - **[Storage class specifier](#유효범위와-기억클래스)** : 변수가 저장되는 공간(등급)을 지정 (extern, static, auto, resgister, 미지정(default))
- modifier : 변수의 타입을 변경
  - `*` : 포인터라고 읽으며 기본형 변수를 주소 타입으로 변경
  - `[]` : [배열(array)](#배열)이라 읽으며 기본형변수를 집합형으로 변경
  - `()` : 함수(function)라고 읽으며 기본형변수를 함수로 변경



Type 변수이름;

선언과 함께 초기화하는 방법은 다음과 같다.

Type 변수이름 = xxx; //변수가 선언되어있지 않을때만 가능



변수의 종류는 전역변수와 지역변수로 크게 두가지이다.

컴파일러 버전에 따라 다르지만 [c99](https://ko.wikipedia.org/wiki/C99) 이전 표준(gcc 2.x 버전까지)에서 지역변수의 변수 선언은 항상 선두에 있어야한다.

지역변수의 수명은 블록({ }, brace) 에서 사용가능하다.



어떤 변수의 메모리를 호출하기 위해 &(ampersand)(address of)연산자를 사용한다.



주소는 1B메모리 마다 붙이며 주소값은 메모리 크기에 따라 다르다. (32bit-> 4byte)

sizeof 연산자는 변수의 type의 크기(byte)를 반환해준다.



정수가 메모리에 저장되는 순서는 프로세서 제조사별로 다르다.

예를들어 인텔은 Littel Endian, 모토롤라는 Big Endian 방식이다.

[Littel Endian](https://ko.wikipedia.org/wiki/%EC%97%94%EB%94%94%EC%96%B8)은 변수가 높은 메모리주소에서 낮은메모리주소로 쌓이는 방식이다.



## 디버깅

IDE 마다 다른 디버깅 모드를 지원한다. VS에서 디버깅은 간단하게 F5(디버깅), F9(중단점), F10(프로시저단위실행), F11(한단계씩 코드실행) 와 조사식, 메모리 덤프로 진행한다.

직접해보는게 더 빨리 익힐 수 있다.











## 연산자

[연산자 우선순위](https://dojang.io/mod/page/view.php?id=188) 를 잘 알면 여러줄의 코드를 짧게 줄일 수 있고, 연산 효율을 높일 수 있다. 

| 우선순위 | 연산자                   | 설명                                          | 결합 방향 |
| -------- | ------------------------ | --------------------------------------------- | --------- |
| 1        | (postfix) `++` `--`      | 후위 증가와 감소                              | →         |
|          | `()`                     | 함수 호출                                     |           |
|          | `[]`                     | 배열 첨자                                     |           |
|          | `.`                      | 참조로 요소 선택                              |           |
|          | `->`                     | 포인터를 통해 요소 선택                       |           |
| 2        | (prefix) `++` `--`       | 전위 증가와 감소                              | ←         |
|          | (sign) `+` `-`           | 단항 증가감소 연산자                          |           |
|          | `!` `~`                  | 논리 NOT, 비트NOT                             |           |
|          | `(type)`                 | 타입 캐스트                                   |           |
|          | `*`                      | 역참조                                        |           |
|          | `&`                      | 주소값                                        |           |
|          | `sizeof`                 | 자료형의 크기                                 |           |
| 3        | `*` `/` `%`              | 곱셈 나눗셈 나머지                            | →         |
| 4        | `+` `-`                  | 덧셈 뺄셈                                     | →         |
| 5        | `<<` `>>`                | 비트 왼쪽 쉬프트와 오른쪽 쉬프트              | →         |
| 6        | `<` `<=` `>` `>=`        | 작음, 작거나 같음, 큼, 크거나 같음            | →         |
| 7        | `==` `!=`                | 관계 = 와 ≠                                   | →         |
| 8        | `&`                      | 비트 AND                                      | →         |
| 9        | `^`                      | 비트 XOR                                      | →         |
| 10       | `|`                      | 비트 OR                                       | →         |
| 11       | `&&`                     | 논리 AND                                      | →         |
| 12       | `||`                     | 논리 OR                                       | →         |
| 13       | `? :`                    | 삼항 연산자                                   | ←         |
| 14       | `=`                      | 직접 할당                                     | ←         |
|          | `+=` `-=` `*=` `/=` `%=` | 덧셈, 뺄셈, 곱셈, 나눗셈, 나머지 연산 후 할당 |           |
|          | `<<=` `>>=`              | 비트를 왼쪽, 오른쪽으로 시프트한 후 할당      |           |
|          | `&=` `^=` `|=`           | 비트 AND, XOR, OR 연산 후 할당                |           |
| 15       | `,`                      | 콤마                                          | →         |

% 의 피연산자는 양의 정수이어야함 (음수면 컴파일러 의존) 실수를 피연산자로 취할 수 없음.



## 함수

#include 뒤에 파일은 <> 또는 ""을 사용하여 지정하게 된다.

<> 는 컴파일러를 설치할 때 만들어진 표준 폴더에서 해당 파일을 찾아서 복사하고, "" 는 현재 작업중인 폴더에서 찾고 없으면 표준 폴더에서 찾는다.

표준 라이브러리 폴더는 'C:\Program Files (x86)\Windows Kits\10\Include' 에 있다



함수의 입력을 parameter(인자), 출력을 return(반환), 작업을 operation(기능)이라고 함. 함수에 넣어주는 값을 argument(인수)라하고 이 값이 parameter로 전달 됨.

함수 만드는 형식

return type + 함수명 + (parameter list) + { code }

함수를 쓰겠다고 형식을 알려주는 것이 선언, 함수 본체를 만드는 것은 정의.



## 분기문

### if문

if(조건식) 실행문;



**숏서킷 원리**

(A `&&` B) 에서 A가 false면 B는 생략한다, (A `||` B) 에서 A가 True면 B는 생략한다.

즉, 조건문에서는 연산을 하지 않는게 좋고, 조건의 확률을 따져서 조건식을 배치하면 효율이좋다.



### 조건연산자

A ? B : C

if는 문장을 만들고, ? : 는 식을 만든다.



### switch ~ case문

~~~c
switch(a)
{
    case 1: printf("1번\n"); break; //break가 없으면 다음 case문으로 들어간다.
    case 2: printf("2번\n"); break;
    case 3: printf("3번\n"); break;
}
~~~

switch의 조건식은 정수식(실수식 불가). case의 비교 값은 상수식만 가능(변수식 불가능). 보통 enum 과 함께 사용한다.



## 반복문

### for문

for(초기화식;조건식;후처리식) 실행문;

for(;;) : 무한루프.

break : 루프를 빠져나옴.

continue : 코드를 중단하고 후처리식으로 돌아감.

### while문

while(조건식) 실행문;



## 유효범위와 기억클래스

**컴파일과정**

![compile](/assets/img/Embedded/compile.jpg)

그림에서 알 수 있다시피  헤더(.h)파일과 c(.c)파일은 전처리기와 컴파일러에 의해 어셈블리어로 변환되고 어셈블리어는 어셈블러에의해 이진파일(.obj)로 바뀐다. 이 이진파일은 링커로 합쳐져서 하나의 파일이 된다.

![Scope_Lifetime](/assets/img/Embedded/Scope_Lifetime.png)

extern : 변수를 다른 공간을 공유, 여러 .c 파일간 같은 함수나, 변수를 호출할 때 사용.

static : 지역변수에서 사용했을 때 전역변수와 이름이 같더라도 다른 변수를 생성. 또한 static 변수가 선언된 함수가 두번이상 사용되었을 때 두번째 부터는 초기화를 하지않고, 전에 사용했던 값을 불러옴(초기화 안했을때 0). 전역변수로 사용했을 때 해당 소스파일 내에서만 사용 가능.

[변수](#변수) 참조

```c
#include <stdio.h>

int a;
static int b = 10;

void func(void)
{
	static int b = 20;
	a++; b++;
	printf("a=%d, b=%d\n", a, b);
}

int main(void)
{
	a++; b++;
	func();
	func();
	printf("a=%d, b=%d\n", a, b);
    return 0;
}
/*
a=2, b=21
a=3, b=22
a=3, b=11
*/
```



## 배열

배열은 같은 타입의 데이터 여러개를 집합으로 관리해 준다.

```c
int a[4];
int b[5] = {'A',}//초기화자가 부족할경우 0으로 채워진다(일부 컴파일러에서는 쓰레기 값)
int c[] = "ABCD"//초기화자가 많으면 에러발생. 단, 문자열로 초기화할때는 나머지를 버림
sizeof(a)/sizeof(a[0]);
```

![array_a](\assets\img\Embedded\array_a.jpg)

a 는 배열의 이름이면서, 배열의 첫번째 데이터의 주소를 가르키는 포인터이기도 하다. 즉, a == &a[0]

## 포인터

```c
#include <stdio.h>

int main(void)
{
	int a = 100;
	int *p;

	p = &a;
	*p = 200;

	printf("%#.8x %#.8x\n", p, &a);
	printf("%d %d\n", *p, a);
    return 0;
}
```

포인터는 메모리주소를 저장하는 **변수**이다.

포인터 변수는 *(포인터) modifier를 사용해서 선언하고 포인터로 메모리를 접근하기위해 *(간접(indirect)) 연산자를 이용한다. (같은 기호를 쓰지만 선언할때와 사용할때는 다른의미로 사용된다)

별개로 &(ampersand) 연산자는 변수의 주소값을 가져온다.

### 포인터의 역할

- Call by address에 의한 원본 메모리(변수)를 수정할 수 있도록 한다. (예를들면 scanf)
- 함수에 전달되는 배열 및 문자열을 parameter로 받을 수 있다.
- 공유메모리인 Heap영역에서 메모리를 할당 받는다. (malloc, calloc, free, realloc 함수사용([stdlib.h](https://ko.wikipedia.org/wiki/Stdlib.h)))
- 특정 주소의 메모리를 접근한다. (하드웨어에서 필수적)



포인터를 이용해 배열의 요소에 접근할수 있다.

```c
#include <stdio.h>

int main(void)
{
	int a[4] = {10, 20, 30, 40 };
	int *p;

	printf("%#.8x, %#.8x\n", a, &a[0]);
	printf("%d, %d\n", a[0], *a);
	printf("%d, %d\n", a[1], *(a+1));

	p = &a[0];
	printf("%#.8x, %#.8x\n", &a[0], p);
	printf("%d, %d, %d, %d\n", *&a[0], *p, a[0], p[0]);
	printf("%#.8x, %#.8x\n", &a[0] + 1, p + 1);
	printf("%d, %d, %d, %d\n", *(&a[0]+1), *(p+1), a[1], p[1]);

	p = a;
	printf("%#.8x, %#.8x\n", a, p);
	printf("%d, %d, %d, %d\n", a[0], *a, *p, p[0]);
	printf("%#.8x, %#.8x\n", a + 1, p + 1);
	printf("%d, %d, %d, %d\n", a[1], *(a+1), *(p+1), p[1]);
    return 0;
}
```



#### 공유메모리 Heap영역 할당하기

```c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
	int i;
	int * p;

	p = malloc(10 * sizeof(int));
	if (p == 0x0) return;

	for (i = 0; i < 10; i++)
	{
		p[i] = i; // == *(p + i) = i;
	}

	for (i = 0; i < 10; i++)
	{
		printf("%d\n", p[i]);
	}
	free(p);
    return 0;
}
```



## 구조체와 공용체

### 구조체

여러타입의 데이터들로 새로운 타입을 만듦

```c
#include <stdio.h>

int main(void)
{
	struct st //템플릿(template)이라는 집합을 이룰 모양을 정하는것, st는 tag라고 부름
	{
		int a; //구조체 멤버
		char b;
	} y, z; //구조체 y,z 선언

	struct st x = { 100, 'A' }; //구조체 x 초기화

	printf("a=%d b=%c\n", x.a, x.b);

	x.a = 200;
	x.b = 'B';

	printf("a=%d b=%c\n", x.a, x.b);
    
    y=x; // 구조체 y에 x 복사
    printf("a=%d b=%c\n", y.a, y.b);
    return 0;
}
```

![struct_template](\assets\img\Embedded\struct_template.jpg)

구조체의 멤버에 접근하는 방법은 .(dot)연산자를 이용한다.



구조체의 포인터는 Advanced-C 에서 다루기로한다.



### 공용체

공용체는 같은 메모리를 여러 타입의 멤버가 공동으로 사용한다.

```c
#include <stdio.h>

int main(void)
{
	union uni
	{
		int a;
		unsigned char b;
	} x = { 0x12345678 };

	printf("a=%#x	b=%#x\n", x.a, x.b);
	printf("&x.a=%#.8x	&x.b=%#.8x\n", &x.a, &x.b);
	printf("sizeof x.a=%d	sizeof x.b=%d\n", sizeof(x.a), sizeof(x.b));
	printf("&x=%#.8x	sizeof x=%d\n", &x, sizeof(x));

	x.b = 0xEF;
	printf("a=%#x	b=%#x\n", x.a, x.b);
    return 0;
}
```

![union_ex](\assets\img\Embedded\union_ex.jpg)

![union_x](\assets\img\Embedded\union_x.jpg)

공용체(union)의 선언은 구조체와 거의 동일하다. 



공용체 활용

```c
#include <stdio.h>

int main(void)
{
	struct st {
		unsigned char alpha;
		unsigned char blue;
		unsigned char green;
		unsigned char red;
	};
	union uni
	{
		unsigned int color;
		struct st rgb;
	};
	union uni A;

	A.color = 0xA1B1C155;
	printf("%X\n", A.color);
	printf("%X %X %X %X\n", A.rgb.red, A.rgb.green, A.rgb.blue, A.rgb.alpha);
	A.rgb.red = 0xA9;
	printf("%X %X\n", A.color, A.rgb.red);
    return 0;
}
```

![union_ex2](\assets\img\Embedded\union_ex2.jpg)



## 기타

### 열거형

```c
#include <stdio.h>

enum color1 { WHITE, BLACK, YELLOW, RED };
//enum color2 { BLACK, BROWN }; //같은 멤버이름 에러
enum value   { A = -1, B = 1, C, D = 1}; // 초기화 없으면 뒤에 있는 멤버+1

void main(void)
{
	printf("%d %d %d %d\n", WHITE, BLACK, YELLOW, RED);
	printf("%d %d %d %d\n", A, B, C, D);
}
/*
0 1 2 3
-1 1 2 1
*/
```

### 매크로

간단한 구문의 반복을 함수대신 매크로의 적절한 활용으로 속도를 개선시킨다.

주의할점

- ;을 붙이지 않는다. (전처리기에서 실행하기때문)
- 매개변수는 ()로 묶는다.
- 전체를 괄호로 묶는다.
- 과도한 사용은 코드 가독성을 떨어뜨리며, typecasting 문제때문에 웬만하면 매크로사용을 자제하는것이 권장됨.

```
#define ARR_SIZE(x) (sizeof(x) / sizeof(x[0]))
#define PRT(x) printf("%d\n",x)
#define SQR(x) ((x)*(x))
```

### typedef

새로운 타입의 별명을 설정하는 명령어다. 구조체에서 많이 사용한다.

```c
#include <stdio.h> 

#define ARR_SIZE(x)	(sizeof(x)/sizeof((x)[0]))

typedef unsigned int UI; //UI라는 unsigned int 타입을 만듦.
typedef UI * UIP; // 

UI a[4] = { 1,2,3,4 };

int main(void)
{
	int i;
	UIP b = a;

	for (i = 0; i < ARR_SIZE(a); i++)
	{
		printf("%d\n", b[i]);
	}
    return 0;
}
```



### 표준라이브러리

[표준라이브러리](https://ko.wikipedia.org/wiki/C_%ED%91%9C%EC%A4%80_%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC)

자주쓰는 라이브러리 정리

```c
#include <stdlib.h>
void * malloc ( size_t size );	//size 바이트의 메모리를 힙에서 할당하여 반환한다.
void * calloc ( size_t num, size_t size );	//(num * size) 바이트의 메모리를 힙에서 할당하여 반환한다.
void * realloc ( void * ptr, size_t size );	//ptr이 가리키는 메모리를 size 바이트만큼 힙에서 재할당하여 반환한다.
void free ( void * ptr );	//ptr이 가리키는 메모리를 해제한다.(할당했으면 반드시 해제해야 한다.)
```

```c
#include <string.h>
char *strcpy(char *dest, const char* src); //문자열 복사
char *strncpy(char *dest, const char *src, size_t n); //문자열을 글자수만큼 복사
char * strcat ( char * destination, const char * source );	//source를 destination뒤에 붙인다.
char * strncat ( char * destination, char * source, size_t num );	//source에서 destination뒤에 처음 num개의 문자들을 붙인다.
size_t strlen ( const char * str );	//str의 길이를 반환한다.
```



C언어 공부에 좋은 사이트

http://tcpschool.com/c/intro