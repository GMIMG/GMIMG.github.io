---
title: C++ Parameter and overloading
category: C++
tags:
  - C++
  - Call-by-value
  - Call-by reference
  - Overloading
---

# Call-by-value & Call-by reference

교재

>With call-by-value parameters, only the value of the argument is plugged in.  
>With call-by-reference parameters, the argument is a variable, and the variable itself is plugged in.

매개변수(Parameter) : 함수에게 특정 항목의 위치를 식별하는데 필요한 변수나 상수를 제공한다. 이를 전체적인 틀인 함수가 정보를 토대로 함수를 실행시키고 산출합니다.

parameter는 formal paramter(형식 매개 변수)와 actual parameter(실제 매개 변수)로 나눈다.
formal parameter는 함수 선언부에서 쓰이는 parameter를 의미.
actual parameter는 실제 함수가 호출될 때 formal parameter 자리에 들어갈 실제(actual) parameter를 의미. 즉 formal parameter는 actual parameter의 Place holder 역할이고 서브루틴이나 프로시저를 호출하면 formal parameter에 actual parameter를 full-in한다.

교재에선 actual parameter를 argument 용어로 사용함.

A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters.

Formal parameter(가인수) -> 함수 선언(declaration)나 정의(definition)에 쓰임  
Arguments(인수) -> 함수를 호출(call)할때, formal parameter를 fill-in하는 데이터 값

~~~C++
double foo(int bar);
//에서 (int bar)라는 이름 자체는 가인수이고 
//bar이라는 인수가 가르키는 값(포인터)이 실인수 이다.
~~~

## call-by-value parameter

call-by-value parameter는 함수안에서 선언(declaration)되는 지역 변수이다.
함수는 실인수에 접근할 수 없다.

## call-by-reference parameter

caller의 실인수에 접근을 제공한다. 즉 서브루틴에서 밖의 인수값을 바꾼다.
C++ 에선 가인수의 type 다음에 &을 붙여서 사용한다.

~~~C++
ex) int foo(int& bar);
~~~

~~~c++
#include <iostream>
using namespace std;
void getNumbers(int& input1, int& input2);
//Reads two integers from the keyboard.
void swapValues(int& variable1, int& variable2);
//Interchanges the values of variable1 and variable2.
void showResults(int output1, int output2);
//Shows the values of variable1 and variable2, in that order.
intmain( )
{
int firstNum, secondNum;
getNumbers(firstNum, secondNum);
swapValues(firstNum, secondNum);
showResults(firstNum, secondNum);
return 0;
}
void getNumbers(int& input1, int& input2)
{
cout<< "Enter two integers: ";
cin>> input1
>> input2;
}
void swapValues(int& variable1, int& variable2)
{
int temp;
temp = variable1;
variable1 = variable2;
variable2 = temp;
}
void showResults(int output1, int output2)
{
cout<< "In reverse order the numbers are: "
<< output1 << " " << output2 << endl;
}
~~~

>Sample Dialogue
>Enter two integers: 5 6
>In reverse order the numbers are: 6 5

reference는 실인수의 memory의 위치(주소)를 언급한다.
Reference arguments는 좋을 때도 있지만 데이터보호측면에서 위험하다.
데이터를 보호하기위해 const를 이용한다.

~~~c++
void foo(const int& par1);
~~~

# Overloading

- Same function name Different parameter lists
- Two separate function definitions
- ...
- 반환형식으로 구분된 함수는 오버로드 되지않음.

## Resolving Overloading

1. Exact match
  실인수의 갯수와 type이 정의와 정확하게 match하는지 판단하고
2. 맞지 않으면 type conversion을 통해 맞춘다.

# Debugging

- Lots of cout
- Compiler Debugger
- [assert Macro](https://ko.wikipedia.org/wiki/Assert.h)

-> Assertion is a statement that is either ture or false.
프로그램이 실행될 때 assert() 는 조건에 오류가 있을 경우 표준오류(stderr)를 통해 실패한 호출의 정보를 출력하고, abort()를 호출한다.
쉽게말해 추정에러내용과 함께 프로그램을 정지시킴.

stderr - 소스파일명: 소스라인넘버: 소스함수: false로 추정된 텍스트

~~~c
#include <stdio.h>
#include <assert.h>

int test_assert ( int x )
{
   assert( x <= 4 );
   return x;
}

int main ( void ) 
{
  int i;

    for (i=0; i<=9; i++)
    {
        test_assert( i );
        printf("i = %d\n", i);
    }

  return 0;
}
~~~

Stubs : 프로그램이 완성되지 않았을 때 임시로 돌아가게 만들어 놓은 상태
Drivers : 어떤 모듈을 테스트하기 위한 메인함수 형태

invoke : 호출하다.
선언(declare)
정의(definition)