const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl')

router.get('/', ctrl.home);
router.get('/login', ctrl.login);

module.exports = router; // 리덕스나 리엑트를 쓸때 export하는것과 똑같은것