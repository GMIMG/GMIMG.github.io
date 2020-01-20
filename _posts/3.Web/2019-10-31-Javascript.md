---
category : Web
tags :
- Web
---

# Javascript



## 변수

기존 var 키워드는 함수 scope를 가지고 있고 중복선언이 가능했습니다. ES 2015 (ES 6) 부터는 block scope를 가진 let, const 키워드 추가하여 let은 변수, const는 상수를 저장합니다. 즉, let은 한번 선언한뒤에(중복선언 안됨) 값을 변경해서 저장할 수 있습니다. 반면 const는 한번 값을 설정하면 변경 할 수 없습니다. var은 더이상 안쓰는걸 권장합니다.



## 연산자

+,-,*,/,++,--,! && || 

== 타입이 다른 값도 비교가능

=== 타입이 같은 값비교

!=

<,<=.>,>=



## 내장함수

consol.log();

onclick

over



## 특징

+문자열 붙이기 가능

배열에 타입과 상관 없이 넣을 수 있음



index named : 인덱스에 이름을 붙일 수 있음.

```javascript
let namearray = new Array("지민","황지민")
for (var index in namearray){
	document.write(namearray[index]);
}
```



```javascript
function funcname (a,b){
	let c;
	c = a + b;
	return (c);
}
```



익명함수,콜백함수



### 객체지향

객체생성 방법

- 객체 상수를 이용 -> 한개, 메서드가 필요없을떄 좋습니다.

  ```javascript
  let person = {
  	name: "jimin"
  	birth: 930530
  }
  ```

- Object() 객체생성자 함수를 이용

  ```javascript
  let person = new Object(); //빈객체생성
  person.name = "jimin";
  person.birth = 930530;
  ```

- 내장 객체생성자 함수 이용 -> Number(), String(), Array(), Date() 등 내장되어있는 객체를 생성할 수 있습니다. 이 객체들은 각자 내장 함수를 제공합니다.

  ```javascript
  let x1 = new String();
  let x2 = new Array();
  let x3 = new Date();
  ```

- 사용자정의 객체 생성자 사용

  ```javascript
  function person (name, birth){
  	this.name = name;
  	this.birth = birth;
  }
  let person1 = new person("jimin",930530);
  ```



객체생성자를 이용해서 객체를 생성하면, 각 객체는 메모리들을 개별적으로 확보한다. 자바 스크립트는 사용되지 않는 객체들을 자동으로 수거하는 가비지 컬렉션 기능을 제공합니다.



## jQuery

jQuery의 일반적인 사용 구조

```javascript
$(document).ready(function(){	//document가 준비되고
    $('#b1').on('click',function(){	//id='b1'인 태그에서 click 이벤트가 발생했을때
        $('#t1').html('jQuery 프로그래밍');	//id='t1'인 태그의 요소내용을 'jQuery 프로그래밍'으로 변경
    });
});
```

