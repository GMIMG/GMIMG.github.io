---
category : C++

---

1. Operator overloading
2. Friend function, friend class
3. Reference (&)

# Operator overloading

+, -, %, ++, --, >>, <<, and []. Operator 는 사실 function과 같다. +(x,7) 에서 +는 함수 이름, x와 7은 arguments이고 Function "+"는 arguments의 sum을 return한다. 그리고 이는 x + 7 이라는 syntax로 호출 할 수 있다.

+, -, = , %, ==, /, * 과 같은 연산자가 이미 C++에 built-in 되어있으며 우리는 이를 overload 할 수 있다.[Parameter and overloading 참조] (단, 당연히 유사한 기능을 할 때 overload하는게 좋다.)

~~~c++
//example declaration
const Money operator +( const Money& amount1,
const Money& amount2);
~~~

constant를 사용하는 이유 : 클래스의 객체에서 기본 할당 연산자는 두 객체를 같은 객체로 만들지 않고 하나의 객체에서 다른 객체로만 구성원 변수의 값을 복사합니다. Constant functions not allowed to alter class member data. Constant objects can ONLY call constant member functions. Any member function that will NOT modify data should be made const. Use keyword const after function declaration and heading.

unary operation(단항 연산자) : y= -x, x++ 같은 항이 하나인 연산을 말한다.

## Friend function of a class

멤버 함수가 아니다. private 멤버에 직접적인 접근을 가진다. overhead 없어서 더욱 효율적이다. 모든 함수에 사용할 수 있고, Operator overload에 주로 사용한다. Avoids need to call accessor/mutator member functions

![Friend function](/assets/img/C++/Friend_function.JPG)

## References(참조)

변수에 별칭을 지정합니다. Name of a storage location. Similar to "pointer". 


~~~C++
//class, operator overloading 예제
#include <iostream>
#include <cstdlib>
#include <cmath>
using namespace std;
//Class for amounts of money in U.S. currency.
class Money
{
public:
	Money();
	Money(double amount);
	Money(int theDollars, int theCents);
	Money(int theDollars);
	double getAmount() const;
	int getDollars() const;
	int getCents() const;

	friend bool operator<(const Money& amt1, const Money& amt2);
	friend bool operator<=(const Money& amt1, const Money& amt2);
	friend bool operator>(const Money& amt1, const Money& amt2);
	friend bool operator>=(const Money& amt1, const Money& amt2);
	const Money percent(int percentFigure) const;
	//Returns percentFigure percent of Money.
	//Example: If percentFigure is 10, a Money object is returned that
	//represents 0.1 of the amount of money of the calling object
	//If purse is a Money object representing $100.20, purse.percent(10)
	//is a Money object representing $10.02.

	friend const Money operator +(const Money& amount1, const Money& amount2);
	friend const Money operator -(const Money& amount1, const Money& amount2);
	friend bool operator ==(const Money& amount1, const Money& amount2);
	friend const Money operator -(const Money& amount);
	friend ostream& operator <<(ostream& outputStream, const Money& amount);
	friend istream& operator >>(istream& inputStream, Money& amount);
private:
	int dollars; //A negative amount is represented as negative dollars and
	int cents; //negative cents. Negative $4.50 is represented as -4 and -50
	int dollarsPart(double amount) const;
	int centsPart(double amount) const;
	int round(double number) const;
};
int main()
{
	int percen;
	Money yourAmount, myAmount(10, 9);
	cout << "Enter an amount of money: ";
	cin >> yourAmount;
	cout << "a percent you wish to take of your amount\n";
	cin >> percen;

	Money yourperAmount = yourAmount.percent(percen);
	cout << "Your amount is " << yourAmount << endl;
	cout << "My amount is " << myAmount << endl;

	cout << percen << "% of your amount is" << yourperAmount << endl;
	cout << "15% of your amount is" << myAmount.percent(15) << endl << endl;

	if (yourAmount == myAmount)
		cout << "We have the same amounts.\n";
	else
		cout << "One of us is richer.\n";
	Money ourAmount = yourAmount + myAmount;
	cout << yourAmount << " + " << myAmount
		<< " equals " << ourAmount << endl;
	Money diffAmount = yourAmount - myAmount;
	cout << yourAmount << " - " << myAmount
		<< " equals " << diffAmount << endl;

	if (ourAmount >= diffAmount)
	{
		cout << "Your amount is greater than or equal to my Amount" << endl;
		cout << "The sum of our Amounts is greater than the difference." << endl;
	}
	if (ourAmount > diffAmount)
	{
		cout << "Your amount is greater than my Amount" << endl;
		cout << "The sum of our Amounts is greater than the difference." << endl;
	}
	if (ourAmount <= diffAmount)
	{
		cout << "My amount is greater than or equal to your Amount" << endl;
		cout << "The sum of our Amounts is greater than the difference." << endl;
	}
	if (ourAmount <= diffAmount)
	{
		cout << "My amount is greater than or equal to your Amount" << endl;
		cout << "The sum of our Amounts is greater than the difference." << endl;
	}
	return 0;
}
bool operator ==(const Money& amount1, const Money& amount2)
{
	return ((amount1.dollars == amount2.dollars)
		&& (amount1.cents == amount2.cents));
}
bool operator<(const Money& amt1, const Money& amt2)
{
	return ((amt1.dollars < amt2.dollars)
		|| ((amt1.dollars == amt2.dollars) && (amt1.cents < amt2.cents)));
}
bool operator<=(const Money& amt1, const Money& amt2)
{
	return (((amt1.dollars == amt2.dollars) && (amt1.cents == amt2.cents))
		|| (amt1.dollars < amt2.dollars)
		|| ((amt1.dollars == amt2.dollars) && (amt1.cents < amt2.cents)));
}
bool operator>(const Money& amt1, const Money& amt2)
{
	return ((amt1.dollars > amt2.dollars)
		|| ((amt1.dollars == amt2.dollars) && (amt1.cents > amt2.cents)));
}
bool operator>=(const Money& amt1, const Money& amt2)
{
	return (((amt1.dollars == amt2.dollars) && (amt1.cents == amt2.cents))
		|| (amt1.dollars > amt2.dollars)
		|| ((amt1.dollars == amt2.dollars) && (amt1.cents > amt2.cents)));
}
const Money Money::percent(int percentFigure) const
{
	double percent = 0.01*percentFigure;

	double old = getAmount();
	double newmon = old * percent;
	int dollor = int(newmon);
	int cent = int(newmon*100) % 100;
	Money newmoney(dollor, cent);
	return newmoney;
}

ostream& operator <<(ostream& outputStream, const Money& amount)
{
	int absDollars = abs(amount.dollars);
	int absCents = abs(amount.cents);
	if (amount.dollars < 0 || amount.cents < 0)
		//accounts for dollars == 0 or cents == 0
		outputStream << "$-";
	else
		outputStream << '$';
	outputStream << absDollars;
	if (absCents >= 10)
		outputStream << '.' << absCents;
	else
		outputStream << '.' << '0' << absCents;
	return outputStream;
}
//Uses iostream and cstdlib:
istream& operator >>(istream& inputStream, Money& amount)
{
	char dollarSign;
	inputStream >> dollarSign; //hopefully
	if (dollarSign != '$')
	{
		cout << "No dollar sign in Money input.\n";
		exit(1);
	}
	double amountAsDouble;
	inputStream >> amountAsDouble;
	amount.dollars = amount.dollarsPart(amountAsDouble);
	amount.cents = amount.centsPart(amountAsDouble);
	return inputStream;
}
const Money operator +(const Money& amount1, const Money& amount2)
{
	int allCents1 = amount1.cents + amount1.dollars * 100;
	int allCents2 = amount2.cents + amount2.dollars * 100;
	int sumAllCents = allCents1 + allCents2;
	int absAllCents = abs(sumAllCents); //Money can be negative.
	int finalDollars = absAllCents / 100;
	int finalCents = absAllCents % 100;
	if (sumAllCents < 0)
	{
		finalDollars = -finalDollars;
		finalCents = -finalCents;
	}
	return Money(finalDollars, finalCents);
}
//Uses cstdlib:
const Money operator -(const Money& amount1, const Money& amount2)
{
	int allCents1 = amount1.cents + amount1.dollars * 100;
	int allCents2 = amount2.cents + amount2.dollars * 100;
	int diffAllCents = allCents1 - allCents2;
	int absAllCents = abs(diffAllCents);
	int finalDollars = absAllCents / 100;
	int finalCents = absAllCents % 100;
	if (diffAllCents < 0)
	{
		finalDollars = -finalDollars;
		finalCents = -finalCents;
	}
	return Money(finalDollars, finalCents);
}
const Money operator -(const Money& amount)
{
	return Money(-amount.dollars, -amount.cents);
}
Money::Money() : dollars(0), cents(0)
{/*Body intentionally empty.*/
}
Money::Money(double amount)
: dollars(dollarsPart(amount)), cents(centsPart(amount))
{/*Body intentionally empty*/
}
Money::Money(int theDollars)
: dollars(theDollars), cents(0)
{/*Body intentionally empty*/
}
//Uses cstdlib:
Money::Money(int theDollars, int theCents)
{
	if ((theDollars < 0 && theCents > 0) || (theDollars > 0 && theCents < 0))
	{
		cout << "Inconsistent money data.\n";
		exit(1);
	}
	dollars = theDollars;
	cents = theCents;
}
double Money::getAmount() const
{
	return (dollars + cents*0.01);
}
int Money::getDollars() const
{
	return dollars;
}
int Money::getCents() const
{
	return cents;
}
int Money::dollarsPart(double amount) const
{
	return static_cast<int>(amount);
}
int Money::centsPart(double amount) const
{
	double doubleCents = amount * 100;
	int intCents = (round(fabs(doubleCents))) % 100;//% can misbehave on negatives
	if (amount < 0)
		intCents = -intCents;
	return intCents;
}
int Money::round(double number) const
{
	return static_cast<int>(floor(number + 0.5));
}
~~~