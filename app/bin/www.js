"use strict";

const app = require("../app");
const logger = require("../src/config/logger");

const PORT = process.env.PORT || 3000; //환경변수로 셋팅해 env폴더의 토트값을 사용하고 없으면 3000으로 실행하겠다는 의미

app.listen(PORT, () => { 
  logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});
