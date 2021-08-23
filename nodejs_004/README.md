# nodejs + express + mysql CRUD 프로젝트

## mysql 프로젝트에서 필요한 dependency

npm install mysql2
npm install sequelize
npm install moment

## dependency upgrade

npm install cookie-parser
npm install debug
npm install ejs
npm install express
npm install http-errors
npm install morgan

## sequelize를 사용한 MySQL DB 생성하기

1. sequelize-cli를 global로 설치한다
   npm install -g sequelize-cli 명령실행

2. sequelize 프로젝트 설정
   프로젝트폴더>sequelize init 명령실행

3. config/config.json, models/index.js 파일이 생성되는지 확인

4. config/config.json 파일에 mysql 접속 정보 수정
5. models 폴더에 Table 구조 파일 생성
6. app 실행 >> table을 자동 생성
