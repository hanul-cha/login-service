
const express = require("express");
const app = express();

app.set('views', './views');// 두번째 파라미터는 뷰로 연결해줄 파일이름으로 넣어준다
app.set('view engine', 'ejs');//뷰엔진으로 ejs를 사용한다는뜻 html과 비슷한환경


app.get('/', (req, res) => {
    res.render("home/index");
});
app.get('/login', (req, res) => {
    res.render('home/login');
})
app.listen(3000, () => {
    console.log('서버가동');
});