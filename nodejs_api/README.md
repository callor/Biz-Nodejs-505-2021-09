# Nodejs + Express + MongoDB API Server

- view와 독립적인(상관없는) 순수 API Server 실습
- 순수 \*.html에서 서버에 RESTFull 요청을 수행하는 실습

## nodejs + express 프로젝트 생성후 할일 들

1. dependency upgrade

npm install cookie-parser
npm install debug
npm install ejs
npm install express
npm install http-errors
npm install morgan

## nodejs + MongoDB 연동

- native방식 , ORM 방식이 있다
- native 방식 : mongoDB Client를 설정하여 직접 명령을 전달하기
- ORM 방식 : mongoose를 사용하여 modeling방식으로 사용하기
- mongoose dependency를 설정 : npm install mongoose

### mongoDB Atlas 접속정보

mongodb+srv://callor:<password>@cluster0.rn2oo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
