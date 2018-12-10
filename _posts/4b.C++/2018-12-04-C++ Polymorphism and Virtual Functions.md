---
category : Data_communications
---

# Virtual function

다형성(Polymorphism) : 하나의 기능에 많은 의미를 연계

부모클래스의 함수를 overiding한것과 같다. 참고로 virtual funtion을 사용하지 않고 그냥 사용하면 redefine된다. 모든함수를 virtual function으로 사용 하지 않는 이유는 OVERHEAD! 더 많은 저장공간을 필요로한다.

만약 부모클래스에서 사용하지 않는 함수를 가상함수로 상속할 때 Pure virtual function을 사용한다. 이때 부모클래스를 Abstract base class라고한다.

Make all destructors virtual.

Derived class objects can be assigned to base class objects. Base class members are lost; slicing problem. Pointer assignments and dynamic objects : Allow "fix" to slicing problem.

~~~C++
virtual void draw() = 0; //Not needed to give any definition.
~~~

~~~c++
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

//This is the file sale.cpp.
//This is the implementation for the class Sale.
//The interface for the class Sale is in the file sale.h.
#include <iostream>
#include "sale.h"
using std::cout;
namespace SavitchSale
{
Sale::Sale( ) : price(0)
{
//Intentionally empty
}
Sale::Sale(double thePrice)
{
if (thePrice >= 0)
price = thePrice;
else
{
cout << "Error: Cannot have a negative price!\n";
exit(1);
}
}
double Sale::bill( ) const
{
return price;
}
double Sale::getPrice( ) const
{
return price;
}
void Sale::setPrice(double newPrice)
{
if (newPrice >= 0)
price = newPrice;
else
{
cout << "Error: Cannot have a negative price!\n";
exit(1);
}
}
double Sale::savings(const Sale& other) const
{
return (bill( ) - other.bill( ));
}
bool operator < (const Sale& first, const Sale& second)
{
return (first.bill( ) < second.bill( ));
}
}//SavitchSale

//This is the file discountsale.h.
//This is the interface for the class DiscountSale.
#ifndef DISCOUNTSALE_H
#define DISCOUNTSALE_H
#include "sale.h"
namespace SavitchSale
{
class DiscountSale : public Sale
{
public:
DiscountSale( );
DiscountSale(double thePrice, double theDiscount);
//Discount is expressed as a percent of the price.
//A negative discount is a price increase.
double getDiscount( ) const;
void setDiscount(double newDiscount);
double bill( ) const;
private:
double discount;
};
}//SavitchSale
#endif //DISCOUNTSALE_H

//This is the implementation for the class DiscountSale.
//This is the file discountsale.cpp.
//The interface for the class DiscountSale is in the header file discountsale.h.
#include "discountsale.h"
namespace SavitchSale
{
DiscountSale::DiscountSale( ) : Sale( ), discount(0)
{
//Intentionally empty
}
DiscountSale::DiscountSale(double thePrice, double theDiscount)
: Sale(thePrice), discount(theDiscount)
{
//Intentionally empty
}
double DiscountSale::getDiscount( ) const
{
return discount;
}
void DiscountSale::setDiscount(double newDiscount)
{
discount = newDiscount;
}
double DiscountSale::bill( ) const
{
double fraction = discount/100;
return (1 - fraction)*getPrice( );
}
}//SavitchSale

//This is the file SaleMain.cpp
//Demonstrates the performance of the virtual function bill.
#include <iostream>
#include "sale.h" //Not really needed, but safe due to ifndef.
#include "discountsale.h"
using std::cout;
using std::endl;
using std::ios;
using namespace SavitchSale;
int main( )
{
Sale simple(10.00);//One item at $10.00.
DiscountSale discount(11.00, 10);//One item at $11.00 with a 10% discount.
cout.setf(ios::fixed);
cout.setf(ios::showpoint);
cout.precision(2);
if (discount < simple)
{
cout << "Discounted item is cheaper.\n";
cout << "Savings is $" << simple.savings(discount) << endl;
}
else
cout << "Discounted item is not cheaper.\n";
return 0;
}
~~~