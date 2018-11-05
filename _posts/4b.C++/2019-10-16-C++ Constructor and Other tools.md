---
title: C++ Constructor and Other tools
category: C++
tags:
  - Constructor
---

# Constructors

Initialization of objects  

- Initialize some or all member variables
- Same name as class itself
- Declaration has no return-type(not even void)
- In public section

~~~c++
class DayOfYear
{
  public: 
    DayOfYear (int monthValue, int dayValue );
      //Constructor initializes month and day 
    void input();
    void output();
  private:
    int month;
    int day;
    void testData();
}

int main()
{
  DayOfYear date1, date2(2, 21);
  date3 = DayofYear(10,31);

  date1.input();
  date3.output();
}


DayOfYear :: DayOfYear (int monthValue , int dayValue )
{
  testDate();
  month = monthValue;
  day = dayValue ;
}

//available like next
//DayOfYear :: DayOfYear (int monthValue , int dayValue )
//            : month(monthValue), day(dayValue)
//{
//  testDate();
//}

void DayOfYear :: testDate( )
{
  if ((month < 1) || (> 12))
  {
    cout << "Illegal month value! \n";
    exit(1);
  }
  if ((day < 1) || (> 31))
  {
    cout << "Illegal day value! \n";
    exit(1);
  }
}

void DayOfYear ::input( )
{
  cout << "Enter the month as a number: ";
  cin >> month;
  cout << "Enter the day of month: ";
  cin >> day;
  if ((month < 1) || (month > 12) || (day < 1) || (day > 31))
  {
    cout << "Illegal date! Program aborted. \n";
    exit(1);
  }
}

void DayOfYear ::output( )
{
  cout << month << day;
}
~~~

# Constant parameter

place keyword `const` before type

"read-only"



const + call by reference 와 call by value의 차이
[참고](https://hashcode.co.kr/questions/2212/c-const-reference-%EB%B3%80%EC%88%98%EC%99%80-%EA%B7%B8%EB%83%A5-%EB%B3%80%EC%88%98%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90)

# statics

# Vector

arrays that grow and shrink

