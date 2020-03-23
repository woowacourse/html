
## 🚀 미션: 90년생 HTML 소개하기

이번 미션의 주제는 바로 90년생 HTML을 주제로 웹페이지를 작성하는 것입니다.
작성방식은 자유입니다. 
신문기사, 블로그, 위키백과 같은 사전 등 여러가지 형태로 남길 수도 있을텐데요. 본인이 원하는 형태로 작성해주시면 됩니다. 
90년생 HTML의 이야기를 담아내면서 글, 링크, 사진, 동영상, 구독 메일 등을 담을 수 있을텐데요. 그 과정에서 필요한 HTML 태그들을 [MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element) 링크를 통해 직접 찾아보시길 바랍니다.

<img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/2020-03-16T10:41:53.786image.png" width="400">

<br/>

## 안내사항

- 위 미션은 [Repository](https://github.com/woowacourse/html)에서 기존의 미션을 진행하던 방식과 동일하게 진행합니다.
- PR을 보내면 **@eastjun**이 확인 후 merge할 예정입니다.
- 마감기한은 **2020년 3월 23월 월요일 23:59분** 까지입니다.
- 작성한 html은  **@eastjun**이 웹핸드북으로 제작하여 배포할 예정입니다. 예쁘게 만들 필요는 없지만 내용에 성의를 보여주세요 😀

<br/>

## 요구사항 

- [x]  `<html>` `<head>` `<title>`  `<body>` 태그를 반드시 포함한다. 
- [x]  `<head>` 태그 안에는 `<meta charset="utf-8">` 를 삽입한다.
- [x]  위 5개의 태그를 제외하고 최소 10개 이상의 태그를 이용한다.
- [x]  1개 이상의 이미지 또는 비디오를 삽입한다.
- [x]  댓글을 작성하는 `input` 또는 `textarea` 태그를 사용한다. (실제 동작할 필요는 없음)
- [x]  자신이 사용한 태그들의 기능을 README.md에 작성한다.

<br/>

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br/>

## 태그 기능 목록

```
<!DOCTYPE html> - DOCTYPE, 문서에 대한 버전 정의
<html lang=""></html> - HTML문서의 루트에 해당하며, 문서의 기본 요소
<head></head> - 문서에 사용되는 메타데이터 집합
<meta charset=""> - title, base, link, style, script 요소로 표현할수 없는 다양한 종류의 메타데이터를 표현
<title></title> - HTML문서의 타이틀을 지정, 브라우저의 타이틀바에 표시
<body></body> - 문서의 메인 컨텐트
<header></header> - 네비게이션을 돕거나 소개를 나타내는 그룹을 표현
<nav></nav> - 다른 페이지나 같은 페이지 안에 다른 부분으로 이어주는 네비게이션 링크로 구성된 섹션을 표현
<h1></h1><h2></h2><h3></h3> - 각 섹션의 제목을 나타냄
<ol></ol> - 순서가 있는 목록을 나타냄
<ul></ul> - 아이템의 순서가 중요하지 않은 목록을 나타냄
<li></li> - 목록 아이템을 나타냄
<a href="" target=""></a> - 텍스트에 링크를 설정, href : 링크 주소를 지정, target : 링크를 어떤 프레임에 열것인지를 결정
<img/> - 이미지 삽입
<br/> - 한 줄 띄우기
<p></p> - 문단설정
<section></section> - 문서나 응용프로그램의 일반적인 섹션을 표현
<article></article> - 문서내에서 독립적인 컨텐츠를 나타냄
<table></table> - 1차원 이상의 데이터를 표의 형태로 나타냄
<thead></thead> - 테이블의 헤더행을 그룹화 하기 위해 지정
<th></th> - 제목 셀 정의
<tbody></tbody> - 데이터행을 그룹화하기 위해 지정
<tr></tr> - 행 정의
<td colspan=""></td> - 데이터 셀 정의, colspan : 해당 셀이 미치는 범위의 열 수를 지정
<tfoot></tfoot> - 테이블의 푸터행을 그룹화하기 위한 요소
<iframe></iframe> - 문서내에 다른 문서를 내포할 수 있게 해줌
<footer></footer> - 주로 저작권 정보나 서비스 제공자 정보등을 나타냄
```