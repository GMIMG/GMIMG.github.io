# 2020-08-09-Web server와 WAS

[서버](https://ko.wikipedia.org/wiki/%EC%84%9C%EB%B2%84)는 클라이언트에서 정보(Service)를 제공하는 장치이다. 예를들어 내가 네이버 사이트를 접속하면 나는 클라이언트, 네이버컴퓨터는 서버이다. 웹서버는 말그대로 [웹(Web)](https://ko.wikipedia.org/wiki/%EC%9B%94%EB%93%9C_%EC%99%80%EC%9D%B4%EB%93%9C_%EC%9B%B9)을 서비스단위로 전달하는 서버이다. 대부분의 웹서버는 http 프로토콜을 사용한다. 웹서버를 간단히 분류하면 html(Text)이나 미디어같은 파일을 제공 하는 정적인 웹서버와 사용자의 요청에 의해 데이터베이스에서 정보를 처리하는 동적인 웹서버([웹어플리케이션 서버(WAS)](https://ko.wikipedia.org/wiki/%EC%9B%B9_%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98_%EC%84%9C%EB%B2%84))가 있다.

정적인 웹서버는 대표적으로 [Apache HTTP서버](https://ko.wikipedia.org/wiki/%EC%95%84%ED%8C%8C%EC%B9%98_HTTP_%EC%84%9C%EB%B2%84)(httpd라고도 쓰임-정확히 말하면 다름)와 최근 많이 쓰이는 [Nginx](https://ko.wikipedia.org/wiki/Nginx)가 있다.

WAS에는 [Apache Tomcat](https://ko.wikipedia.org/wiki/%EC%95%84%ED%8C%8C%EC%B9%98_%ED%86%B0%EC%BA%A3)이 있다. (Apache HTTP서버와 Apache tomcat은 같은 Apache사에서 만들어졌지만 명확하게 다르다.)

WAS와 방식은 다르지만 비슷한 역할을 하는 WSGI가 있다. [CGI, WSGI, WAS 차이](https://brownbears.tistory.com/350)

대부분 웹서비스 인프라는 WAS 앞단에 웹서버를 구성되어있다.

[was와 웹서버의 차이 - 톰캣과 아파치를 구별하지 못하는 사람을 위해](http://sungbine.github.io/tech/post/2015/02/15/tomcat%EA%B3%BC%20apache%EC%9D%98%20%EC%97%B0%EB%8F%99.html)