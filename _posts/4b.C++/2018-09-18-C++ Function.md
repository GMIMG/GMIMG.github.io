---
title: C++ Function
category: C++
tags:
    - C++
---

# Flow of Control

[![Alt text](/assets/img/short-circuit.JPG)][cplusplus]

~~~c++
//case문 예제
int vehicleClass;
double toll;
cout << "Enter vehicle class: ";
cin >> vehicleClass

switch (vehicleClass)
{
  case 2:
    cout << "Passenger Car.";
    toll = 0.50;
    break; //<- if you foreget this break, will pay $1.50.
  case 2:
    cout << "Bus.";
    toll = 1.50;
    break;
  case 3:
    cout << "Truck.";
    toll = 2.00;
    break;
  default:
    cout << "Unknown vehicle class!";
}
~~~

~~~c++
#include <iostream> #include <iostream>
#include < #include <fstream >
#include <string> #include <string>
using namespace using namespace using std;
int main()
{
string firstName , lastName ;
int score;
fstream inputStream ;

inputStream.open ("player.txt");

inputStream >> score;
inputStream >> firstName >> lastName ;

cout << " Name: << firstName << " " << lastName << endl ;
cout << " Score: " << score << endl ;

inputStream.close ();
return 0;
}
~~~

`Name: Gordon Freeman`

`Score:100510`

# Function


[cplusplus]: http://www.cplusplus.com/doc/tutorial/variables/