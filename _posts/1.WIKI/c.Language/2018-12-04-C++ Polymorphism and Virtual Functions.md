---
# title: 
# tags : -
category: Language
toc: false
notice: false
---

# 2018-12-04-C++ Polymorphism and Virtual Functions

# Virtual function

다형성(Polymorphism) : 하나의 기능에 많은 의미를 연계

부모클래스의 함수를 overiding한것과 같다. 참고로 virtual funtion을 사용하지 않고 그냥 사용하면 redefine된다. 모든함수를 virtual function으로 사용 하지 않는 이유는 OVERHEAD! 더 많은 저장공간을 필요로한다.

만약 부모클래스에서 사용하지 않는 함수를 가상함수로 상속할 때 Pure virtual function을 사용한다. 이때 부모클래스를 Abstract base class라고한다.

Make all destructors virtual.

Derived class objects can be assigned to base class objects. Base class members are lost; slicing problem. Pointer assignments and dynamic objects : Allow “fix” to slicing problem.

```cpp
virtual void draw() = 0; //Not needed to give any definition.
```

```cpp
//This is the header file sale.h.
//This is the interface for the class Sale.
//Sale is a class for simple sales.
#ifndef SALE_H
#define SALE_H
namespace SavitchSale
{
class Sale
{
public:
Sale( );
Sale(double thePrice);
double getPrice( ) const;
void setPrice(double newPrice);
virtual double bill( ) const;
double savings(const Sale& other) const;
//Returns the savings if you buy other instead of the calling object.
private:
double price;
};
bool operator < (const Sale& first, const Sale& second);
//Compares two sales to see which is larger.
}//SavitchSale
#endif // SALE_H
```