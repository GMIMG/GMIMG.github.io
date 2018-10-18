---
title: Writing jekyll posts
category: Blog
tags:
  - Jekyll
  - Blogging
---

# Blog 생성
[github pages] + [jekyll] 을 이용

## [github pages]

[GitHub]에 가입하고 'username'.github.io 라는  repo(저장소)를 만든다. (블로그전용)

무료 웹 호스팅 서버가 만들어졌다. static contents만 사용가능 하지만 정적 사이트 생성기([jekyll])를 사용한다.
소스(주로 Markdown)를 Github에 올리면 Jekyll을 실행해서 정적 사이트를 생성하는 과정을 Github 서버가 자동으로 수행하고, 그것을 웹 페이지로 서비스합니다.  
[kakao 기술 블로그] 참조

## [jekyll]

jekyll을 사용하기 위해 Ruby+devkit를 설치한다.

리눅스는 쉘에서 설치가 가능하나, 윈도우는 [ruby설치 사이트]에서 설치한다. (add path 체크)
cmd에서 set PATH=%PATH%;C:\Ruby200-x64\bin
설치하면 ruby와 gem 명령어를 사용 할 수 있다.
[jekyll]공식사이트에 있는 Quick-start Instructions에 따라

- $ gem install bundler jekyll # jekyll 자동으로 jekyll의 버전을 맞춰주는 bundle 설치
- $ jekyll 'new site'
- $ cd 'new site'
- $ bundle install # 로컬에서 Gemfile에 있는 플러그인을 사용하기 위해 터미널에서 bundle install 명령어를 이용해 플러그인을 설치
- $ chcp 65001 # cp 949에러가 날때 사용(ruby 설치시 utp-8 자동설정 체크)
- $ cd /new site 
- $ bundle exec jekyll serve
  => Now browse to <http://localhost:4000>



그리고 원하는 [jekyll theme]를 설치하면 된다.

Makrdown : 일반 텍스트 문서의 양식을 편집하는 간단한 문법이다. 쉽게 HTML 등 다른 문서형태로 변환이 가능하다.  
jekyll : GitHub Pages가 기본으로 지원하는 ruby로 작성된 정적 사이트 생성기  

참조 : [help.github.com](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/) , [jekyllrb-ko.github.io](https://jekyllrb-ko.github.io/)

[github pages]:https://pages.github.com/
[jekyll]:https://jekyllrb.com/
[github]:https://github.com/
[kakao 기술 블로그]:http://tech.kakao.com/2016/07/07/tech-blog-story/
[ruby설치 사이트]:https://rubyinstaller.org/downloads/
[jekyll theme]:https://github.com/topics/jekyll-theme
