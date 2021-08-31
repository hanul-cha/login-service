const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("home/index");
});
router.get('/login', (req, res) => {
    res.render('home/login');
});

module.exports = router; // 리덕스나 리엑트를 쓸때 export하는것과 똑같은것