---
title: markdown
category: Programming
---

# Markdown 사용법

## Markdown

### List

un-ordered list(순서가 없는 리스트)

- ㅎㅎ
- ㅋㅋ

ordered list(순서가 있는 리스트)

1. 하하
2. 호호
   1. tab을 누르면 안쪽으로 세부항목을 작성할 수 있다.
   2. 엔터를 치면 자동으로 다음 항목을 작성할 수 있다.

### Code block

> 코드 블럭은 작성한 코드를 정리하거나 강조하고 싶을 때 사용합니다.
>
> '>' 기호를 통해서 인용구를 쓸 수 있습니다.

- inline
  - `인라인 블럭`으로 처리하고 싶은 부분을 `(백틱)으로 감싸줍니다.
- block
  - `(백틱)을 3번 입력하여 블럭을 설정합니다.

```python
def hello():
    print('hello')
```

```sql
SELECT * FROM table;
```

### Image

- ![]() 을 작성하고 () 사이에 이미지 주소를 입력합니다.

![soganji](\assets\img\soganji.jpg)

![hoganji](\assets\img\hoganji.jpg)

### Link

- []()을 작성하고 () 안에 링크 주소를 입력한다.

[네이버](https://www.naver.com), [구글](https://google.com)

### Table

| 제목       | 내용        |
| ---------- | ----------- |
| 안뇽하세요 | 반갑습니다. |

### 수평선

- `---`,`***`,`___` 세개씩 적어준다.

---

### 강조

- _이탤릭체_는 `*`혹은 `_`로 묶어줍니다.
- **굵은 글씨**는 `**`혹은 `__`로 묶어줍니다.
- ~~취소선~~은 `~~`로 묶어줍니다.
