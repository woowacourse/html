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
- 작성한 html은 **@eastjun**이 웹핸드북으로 제작하여 배포할 예정입니다. 예쁘게 만들 필요는 없지만 내용에 성의를 보여주세요 😀

<br/>

## 요구사항

- [x] `<html>` `<head>` `<title>` `<body>` 태그를 반드시 포함한다.
- [x] `<head>` 태그 안에는 `<meta charset="utf-8">` 를 삽입한다.
- [ ] 위 5개의 태그를 제외하고 최소 10개 이상의 태그를 이용한다.
- [ ] 1개 이상의 이미지 또는 비디오를 삽입한다.
- [ ] 댓글을 작성하는 `input` 또는 `textarea` 태그를 사용한다. (실제 동작할 필요는 없음)
- [ ] 자신이 사용한 태그들의 기능을 README.md에 작성한다.

<br/>

## 사용한 HTML 태그들

- [x] `<h1> ~ <h6>`
  - 각 section의 제목을 나타태는 태그
  - 하나의 section당 하나의 h1 태그를 사용하는 것을 권장
  - 계층 구조에 맞게 순서대로 작성되는 것이 좋음
- [x] `<a>`
  - 텍스트에 링크를 설정하는 태그
  - `target="_blank`를 사용하면 링크를 새 창으로 띄울 수 있음
- [x] `<header>`
  - 네비게이션을 돕거나 소개를 나타내는 그룹을 표현
  - 일반적으로 section의 제목을 표현
- [x] `<footer>`
  - 주로 저작권 정보나 서비스 제공자 정보등을 나타냄
  - 주로 사이트 하단에 위치
- [x] `<ol>`
  - 순서가 있는 목록을 나타냄
  - `<li>` 속성을 포함하고 있음
- [x] `<li>`
  - 목록 아이템을 나타냄
  - 부모가 `<ol>`이라면 순서가 있는 목록 아이템
  - 부모가 `<ul>`라면 순서가 없는 목록 아이템
- [x] `<section>`
  - 문서나 응용프로그램의 일반적인 section을 표현
  - 제목으로 시작하는 컨텐츠를 의미적으로 그룹핑하기 위해 사용
- [x] `<article>`
  - 문서내의 독립적인 콘텐츠
  - 하나의 문서안에 여러개의 article이 올 수 있습니다.
- [x] `<nav>`
  - 다른 페이지나 같은 페이지 안에 다른 부분으로 이어주는 네비게이션 링크로 구성된 section을 표현
  - 주요 네비게이션 블록을 구성하는 section
- [x] `<textarea>`
  - 여러줄의 텍스트를 편집할 수 있는 컨트롤을 생성

<br/>

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.
