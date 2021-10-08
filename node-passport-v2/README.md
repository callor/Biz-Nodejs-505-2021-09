# nodejs + express + mongoDB를 사용하여 인증서버 만들기

- passport 모듈을 사용하여 oAuth2.0 방식으로 인증서버 구현하기
- open API 방식으로 인증을 수행하는 표준 모델
- 카카오, 구글, 페이스북, 트위터 등에서 로그인을 공통으로 사용하는 표준방식

## 인증구조

- 로그인 시도 : 정상사용자인지 검사하는 과정 (id, password)
- 정상적인 사용자 : passport 발행, accessToken 발행

## dependency

- npm intall mongoose
- npm install passport
- npm install express-session
- npm install cors
- npm install passport-local

- npm install passport-kakao
- npm install passport-google
- npm install passport-facebook
