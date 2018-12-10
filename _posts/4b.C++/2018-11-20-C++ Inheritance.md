---
category : C++
tags :
    - Inheritance
---

# Inheritance
class DERIVED_CLASS: public BASE_CLASS

'Derived class' derived 'member variables', 'member functions' from 'base class'

NOT inherited

- Constructor
- 

~~~C++
//construct
HourlyEmployee :: HourlyEmployee ()
    : Employee() , wageRate (0), hours(0) 
{
    //Deliberately empty
}
HourlyEmployee :: HourlyEmployee(string theName, string theNumber, double theWageRate)
    : Employee(theName, theNumber), wageRate (theWageRate), hours(theHours)
{
    //Deliberately empty 
}
~~~


# Protected

![img](/assets/img/C++/InhariteProtected.JPG)
