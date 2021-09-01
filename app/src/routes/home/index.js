const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl')

router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.post('/login', ctrl.process.login);

module.exports = router; // 리덕스나 리엑트를 쓸때 export하는것과 똑같은것