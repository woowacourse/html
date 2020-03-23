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
- [x] 위 5개의 태그를 제외하고 최소 10개 이상의 태그를 이용한다.
- [x] 1개 이상의 이미지 또는 비디오를 삽입한다.
- [x] 댓글을 작성하는 `input` 또는 `textarea` 태그를 사용한다. (실제 동작할 필요는 없음)
- [x] 자신이 사용한 태그들의 기능을 README.md에 작성한다.

<br/>

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

link: 문서와 외부 resource를 연결할 때 사용. 외부 css 파일을 연결할 때 사용하는 태그.  
script: 내부에 javascript를 포함하거나 외부 javascript 파일에 연결할 수 있음  
div: division의 약자로 레이아웃을 나누는데 주로 쓰임. 다른 태그와 다르게 특별한 기능을 가지고 있지 않으며, 가상의 레이아웃을 설계하는데 주로 사용됨  
a: anchor 태그, 닻을 달아 놓는 느낌으로 이동에 대한 url을 걸 수 있음. 기본적으로 클릭시 href라는 속성으로 입력된 곳으로 이동  
span: div 태그와 같이 특별한 기능을 가지고 있지 않음. div와 다른점은 display 기본 속성이 block이 아닌 inline인 점이 차이점  
img: 이미지 요소를 불러올 때 사용. src속성에 이미지 url을 입력하면 해당 이미지를 불러옴. alt라는 속성으로 이미지가 어떤 내용인지를 설명해줄 수 있음   
h1~6: HTML heading을 정의할 때 쓰임. h1이 가장 중요한 heading을 정의할 때 쓰이고, h6가 가장 덜 중요한 heading을 정의할 때 쓰임  
strong: 강조하는 태그. 중요한 텍스트를 정의한다. deprecated 되지 않았고, CSS랑 함께 쓰면 더 풍부한 효과를 낼 수 있음  
form: user input을 위한 HTML 태그를 만들 때 사용되는 태그<input>,<textarea>,<button>,<select>,<option>,<optgroup>,<fieldset>,<label>,<output> 등의 태그를 사용할 수 있다  
input: 유저가 데이터를 입력할 수 있는 input field. input 태그는 유저 입력에 대해 컨트롤하기 위해 form 태그 안에서 정의될 수 있다. type에 따라 text, checkbox, radio, file, password 등 다양하게 사용될 수 있다  

Todo//
modal 구현해보다가 다음으로...
