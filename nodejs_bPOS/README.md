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
