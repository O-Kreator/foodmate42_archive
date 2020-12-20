> 이 레포지토리는 42 Seoul 해커톤에 제출한 Foodmate42 웹 어플리케이션 파일들을 아카이브합니다.
> 해커톤 당시의 결과물을 보여드리는 것이 목적이므로 본 레포지토리는 유지보수되지 않습니다.

# Foodmate42 🍽
42 서울 카뎃분들이 밥을 먹고 싶을 때 같이 먹을 사람을 모집하거나 찾을 수 있는 웹 서비스 어플리케이션입니다.

## Installation
1. Ecole 42의 인트라넷에 접속해 어플리케이션을 등록합니다.
2. 등록한 어플리케이션의 정보를 이용해 서버의 환경 변수를 다음과 같이 설정해주세요.
```
export FORTYTWO_CLIENT_ID="[Your app's client ID]"
export FORTYTWO_CLIENT_SECRET="[Your app's client secret]"
```
3. 데이터베이스 서버에 FoodMate42라는 데이터베이스를 작성해주세요. (데이터베이스의 이름은 `config/db.js`를 수정해 변경할 수 있습니다.)
4. 데이터베이스 서버의 정보를 이용해 서버의 환경 변수를 다음과 같이 설정해주세요.
```
export RDS_HOSTNAME="[Your database server's host name]"
export RDS_USERNAME="[Your database server's user name]"
export RDS_PASSWORD="[Your database server's password]"
export RDS_PORT="[Your database server's port]"
```
5. 프로젝트의 최상위 폴더에서 다음 명령어를 실행해주세요.
```
yarn start
```

## Feature
[x] Node.js와 Express.js를 이용한 기본적인 웹 서버 구현.
[x] Passport.js, Passport-42, 42 API를 활용한 로그인 구현.
[x] 로그인한 유저가 데이터베이스 내에 없을 경우 데이터베이스에 username 추가.
[ ] 식사 모임을 모집하는 게시글 목록 리스트 출력 및 게시글 열람 기능.
[ ] 게시글 열람 시 참여 버튼을 이용해 모임에 선착순으로 참여 가능.
[ ] 게시글 작성 기능.

# Developers
- sochoi<sochoi@student.42seoul.kr> : Frontend.
- sean<sean@student.42seoul.kr> : DB.
- dongkang<dongkang@student.42seoul.kr> : Backend.

# Thanks to
- Every 42 Seoul Kadet