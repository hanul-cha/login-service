// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require('./routes/home');

// 앱 세팅
app.set('views', './views');// 두번째 파라미터는 뷰로 연결해줄 파일이름으로 넣어준다
app.set('view engine', 'ejs');//뷰엔진으로 ejs를 사용한다는뜻 html과 비슷한환경

app.use('/', home); // use는 미들웨어를 연결해주는 메서드 = '/'(첫페이지)로 연결하면 home의 라우터들을 탐색 동일한 주소를 렌더링해줌

module.exports = app;