---
# title: 
# tags : -
category: Language
toc: false
notice: false
---

# 2018-11-20-C++ Inheritance

# Inheritance

class DERIVED_CLASS: public BASE_CLASS

‘Derived class’ derived ‘member variables’, ‘member functions’ from ‘base class’

NOT inherited

- Constructor

```cpp
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
```

# Protected

![image0_Untitled](/assets/img/2018-11-20-C++ Inheritance/Untitled.png)

img