# MOTION 프로젝트 (https://academy.dream-coding.com/)

## 2021-11-09
1. tsconfig.ts 설정
2. 기본 style 지정

## 2021-11-22
1. 페이지 컴포넌트 생성
2. 앱 컴포넌트에서 페이지 컴포넌트를 불러내어, 화면에 표시

### 페이지 컴포넌트 구조
1. 엘리먼트(ul) 을 멤버로 가지고있음.
2. 엘리먼트 멤버에 클래스 및 하위 엘리먼트 추가
3. attachTo 메소드로 부모 엘리먼트에 붙여넣기
4. 해당 클래스를 export

### App 컴포넌트 구조
1. 페이지 컴포넌트를 가져온다.
2. App constructor에서 가져온 페이지 컴포넌트의 인스턴스를 생성하고 attachTo 를 실행한다.

## 2021-11-23
1. 이미지 컴포넌트 생성

### 이미지 컴포넌트 구조
1. template 태그를 이용하여 컨텐츠를 생성
2. 컨텐츠를 생성한 이후 클래스와 이미지 url을 부여
3. attachTo 태그를 가지고있다.


## 2021-11-24
1. 베이스 컴포넌트 생성 (컴포넌트 부모)

## 베이스 컴포넌트 구조
1. HTMLElement 를 인자로 받아서 element 멤버변수에 할당
2. attachTo 메소드 생성(원하는 위치에 삽입 가능)

## 2021-11-25
1. video, note, todo 컴포넌트 생성
2. video: youtube 링크, note: 단순한 메모, todo: checkbox 리스트

## 2021-12-08
1. 컴포넌트들을 감쌀 pageItemComponent 생성(page.ts에 작성)
2. pageItemComponent 은 addChild() 라는 메소드가 있다.
3. appChild 는 BaseComponent 를 받아서 BaseComponent 의 attachTo 메소드를 사용 pageItemComponent 에 붙여넣기
4. 기존 PageComponent 컴포넌트에도 addChild() 메소드를 생성 addChild 에서 받아온 컴포넌트를 PageItemComponent 에 붙여넣기하고, this.element에 PageItemComponent을 붙여넣기.


## 2021-12-10
1. 컴포넌트 삭제 버튼 생성
2. PageItemComponent 에서는 자신한테 붙인 컴포넌트를 삭제를 하지 못한다.
3. BaseComponent 자기자신을 삭제하는 removeForm 메소드 생성
4. PageItemComponent 의 .close 에 .onclick 이벤트 를 생성
5. PageItemComponent 에 components 에서 받아온 removeFrom 함수를 멤버변수에 넣고 실행할수있도록 하는 setBtnCloseOnClick 메소드 생성
5. PageItemComponent 을 정의하는 PageComponent 에서 setBtnCloseOnClick 사용