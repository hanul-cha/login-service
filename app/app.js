// 모듈
const express = require("express");
/* const bodyParser = require("body-parser"); 익스4.16이상부턴 익스안에 바디파서가 내장됨 */
const app = express();

// 라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set('views', './src/views');// 두번째 파라미터는 뷰로 연결해줄 파일이름으로 넣어준다
app.set('view engine', 'ejs');//뷰엔진으로 ejs를 사용한다는뜻 html과 비슷한환경
app.use(express.static(`${__dirname}/src/public`));//static메서드는 정적생성한 html의 js파일 연결을 도와준다.앞에 디렉토리 네임은 현재 폴더의 경로를 연결해준것임

app.use(express.json());//제이슨파일로 파싱
app.use(express.urlencoded({ extended: true }));//url을 통해 전달되는 데이터에 한글 공백같은 문자를 인식 못하는 문제를 해결해줌

app.use('/', home); // use는 미들웨어를 연결해주는 메서드 = '/'(첫페이지)로 연결하면 home의 라우터들을 탐색, 동일한 주소를 렌더링해줌

module.exports = app;