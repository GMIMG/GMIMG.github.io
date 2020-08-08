# 2018-11-06-C++ C-string and String

# C-String

c언어에서 쓰던 것과 같다. 1byte type인 char의 배열이라고 볼수있다. 그리고 크기는 글자수 + 1 byte 이상인데 이 1byte는 null character(‘’)로 구성되어있어야 C-String으로 인식하고 내장함수를 사용할 수 있다. Array with base type char, End of string marked with null, “\0”. If null overwritten, c-string no longer “acts” like c-string!

char ourString[5] = “Hi”; // char ourString[] = “Hi”; => legal // char ourString = “Hi”; => illegal

- ourString[1] => “H”
- ourString[2] => “i”
- ourString[3] => “\0”
- ourString[4] => ?
- ourString[5] => ?

Require library <cstring>

cannot use operator ‘==’

- strcmp(a, b) : ==
- strcat(a, b, [limit]) : +
- strcpy(a, b, [limit]) : copy
- strlan(a) : length

```cpp
cin.getline(a, 80);
char nextSymbol;
cin.get(nextSymbol);
cout.put("a");
```

- cin.putback()
- peekChar = cin.peek();
- cin.ignore(1000, “”);

```cpp
#include <cctype>
char c = toupper('a');
char c = tolower('A');
// isupper();
// islower();
// isalpha(); (alphabat)
// isdigit();
// isalnum();
// isspace();
// ispunct(); (?)
// isprint();
// isgraph();
// isctrl();
```

# Class string

```cpp
#include <iostream>
#include <string>
using namespace std ;
void newLine();

int main(){
string s1, s2, s3, s4, s5, s6;
s3 = s1 + s2; //Concatenation
s3 = "Hello Mom!" //Assignment
getline(cin, s4);
cin >> s5;
newLine();
}
void newLine() //clear buffer
{
	char nextChar ;
	do
	{
	cin.get (nextChar );
	} while (nextChar != '\n');
}
```

- .at(i)
- .substr(position, length)
- .length()
- .empty()
- .insert(pos, str2)
- .remove(pos, length)
- .find(str1, [start_pos])
- .find_first_of(str1, pos)
- =,+=

```cpp
//class string => c-String
char aCString[]= "my C-string";
string stringVar;
stringVar = aCstring;
strcpy(aCString, stringVar.c_str());
```

```cpp
int i;
double d;
string s;
i = stoi("35");
d = stod("2.5");
s = to_string(d*2);
```

```cpp
//Demonstrates getline and cin.get.
#include <iostream>
#include <string>
using namespace std;
void just(string firstString, string secondString);
 
int main()
{
	string firstString, secondString;
	cout << "Enter two strings." << endl;
	getline(cin, firstString);
	getline(cin, secondString);
	just(firstString, secondString);
	return 0;
}

void just(string firstString, string secondString)
{
	char c;
	int j=0;
	int c1[25] = {}, c2[25] = {};
	for (int i = 0; i < firstString.length(); i++)
	{
		c = firstString[i];
		if (c > 64 && c < 91) {
			c1[c - 65]++;
		}
		else if (c > 96 && c < 123) {
			c1[c - 97]++;
		}
	}

	for (int i= 0; i < secondString.length(); i++)
	{
		c = secondString[i];
		if (c > 64 && c < 91) {
			c2[c - 65]++;
		}
		else if (c > 96 && c < 123) {
			c2[c - 97]++;
		}
	}
	for (int i = 0; i < 25; i++)
	{
		if (c1[i] != c2[i])
		{
			j = 1;
		}
	}

	if (j)
	{
		cout << "They are not anagrams." << endl;
	}
	else
	{
	cout << "They are anagrams!" << endl;
	}
}
```