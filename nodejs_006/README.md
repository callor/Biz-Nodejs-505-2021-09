## nodejs + express 프로젝트 생성후 할일 들

1. dependency upgrade

npm install cookie-parser
npm install debug
npm install ejs
npm install express
npm install http-errors
npm install morgan

## mysql 프로젝트에서 필요한 dependency

npm install mysql2
npm install sequelize
npm install moment

## sequelize를 사용하여 자동으로 Table Create 할때 주의

    sequelize("테이블이름", {   테이블 칼럼 구조들  })

테이블이름을 단수로 지정하면 실제 테이블이름은 복수로 설정되어 만들어진다

tbl_bbs : tbs_bbs 로 table이 생성되었고
tbl_replay : tbl_replays 로 table이 생성되었다
tbl_reply : tbl_replies 로 table이 생성될 것이다

## table과 table을 asssociate(연관)하여 SELECT를 했을때

    view 에서 처리하는 방법

findOne()을 실행하면서 include로 연관된 list를 포함한다
view에서는 부모 table은 단수 구조로 VO.변수 형식으로 출력하고
include 된 list는 VO.실제테이블이름 list를
forEach로 반복 하면서 값을 추출하여 사용해야 한다
