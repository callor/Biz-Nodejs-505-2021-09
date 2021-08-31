# Nodejs + Express + Pug 연동 POS Project

## prject 생성

- express --view=pug nodejs_bPOS

## package.jon dependency update

- 설정되어있는 dependency의 모든 버전번호를 별표(\*) 로 변경
- dependency update 실행
  npm install cookie-parser
  npm install debug
  npm install express
  npm install http-errors
  npm install morgan
  npm install pug
  npm install

## 우리동네 김밥천국 프로젝트 요구사항

- 첫화면에서 매장의 table layout 보여주기
- table layout에서 table을 클릭하면 주문서 작성화면으로 전환
- 주문서 작성화면에서 상품(메뉴)항목을 클릭하면 주문서에 추가
- 결제(현금, 카드)를 수행하면 결제 화면이 PopUP
- 결제화면에서 결제 수행을 "결제 완료"메시지 보여주기

### 첫화면의 table layout 보여주기

- 어떤 UI(table, div 등) tag로 화면을 그릴것인가
- 클릭을했을때 어떻게 서버로 데이터를 보내고 다음화면으로 전환을 할 것인가  
  a tag를 이용하기, script를 이용하기 등이 있는데 여기에서는 script 이용하자

### 주문서 작성화면 보여주기

- 이미 table에 주문내용이 있으면, 주문 내용을 보여주고, 메뉴 추가 가능
- 비어있는 table이면 새로운 메뉴를 추가 가능

- 주문 메뉴를 클릭하면, 메뉴ID를 fetch를 사용하여 서버로 전송하고, 상품(메뉴)테이블에서 상품을 검색하고, 해당되는 상품정보를 수신하여, 주문리스트에 표현하기

### 도메인주도형 개발

- 데이터 주도형 개발 : 데이터베이스를 먼저 설계하고, 데이터를 사용하여 view 등을 구현하는 코드
- 데이터 주도형은 데이터베이스 설계가 잘못되면 중간에 다시 재 설계하는 비용이 막대하게 소모되는 경우가 많다
- 도메인주도형 개발을 선호하는 추세
- 도메인주도형 : 어떤일을 어떻게 어떤 방식으로 어떤 순서로 처리할 것인가를 먼저 설계하고, 코드를 만든 다음, 필요한 데이터를 입혀가는 방식

### mysql 연동을 위하여 dependency 설치

- npm install sequelize
- npm install mysql2

### sequelize-cli를 이용한 초기화

프로젝트폴더> sequelize init

### 주문서 처리하기

1. 주문서 화면에서 메뉴를 클릭하면 menu_id 가 서버로 전송되고
2. menu_id로 상품테이블에서 데이터를 조회하고
3. 가상의 배열에 담아 view로 가져왔다
4. 가상의 배열에 담긴 리스트를 주문 list에 보여준다

5. 임시 order table에 데이터를 insert하고

- table_id, menu_id, 가격, 수량, 주문일자, 주문시각 등의 정보가 저장되는 임시 order table 이 있어야 할 것이다.
- 결제가 이루어 진다면 해당 데이터에 결제가 완료되었다는 표식을 하고
- 그렇지 않다면 해당 데이터는 주문 진행중이므로
- 이후에 해당 table_id가 전달되면 리스트를 언제든지 다시 보여주줄수 있어야 한다.

5. 임시 order table에 담긴 데이터를 select 하여 view 로 보내고

6. view에서 데이터를 보여준다
