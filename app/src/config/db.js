const mysql = require("mysql");

const db = mysql.createConnection({
    host: "database-login-lecture.cjw24lhl7b64.ap-northeast-2.rds.amazonaws.com",
    user: "ckgksdnf",
    password: "ch973014",
    database: "login_lecture",
});

db.connect();

module.exports = db;