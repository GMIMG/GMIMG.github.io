# 2018-10-16-C++ Structure and Classs

# Structure

Array와 비슷하지만 different types 의 값의 모음이다.

먼저 전역적(global)으로 정의해야한다

```cpp
struct WeatherData
{
  double temperature;
  double windVelocity;
  int number;
} Weather1, Weather2;

Weather1.temperature = 23.3;
WeatherData Weather3 = {32.1, 5.1, 3};
```

# Classes

Structure와 비슷하지만 Member Function이 추가됨

```cpp
Class DayOfYear
{
  public:
        void output();
        int month;
        int day
  private:
        t
}
```

Dot operator는 member of particular object를 지정할때 사용, Scope resolution operator(::)는 class의 function 지정할때 사용.

Class is full-fledged type

Can have variables of a class type -> simply call them “object”

OOP의 원리

- Inheritance (상속)
- Abstract (추상화) 무엇을 하는지와, 어떻게 수행하는지 구별.
- Encapsulation (캡슐화) 내부표현을 사용자가 알 수 없다.(Information Hiding)
- Polymorphism(다형성)