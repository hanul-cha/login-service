
const UserStorage = require("./UserSrorage");

class User {
    constructor(body) {
        this.body = body; // input에 입력한 값들
    }

    login() {
        const body = this.body;
        const { id, psword } = UserStorage.getUserInfo(body.id);//여기의 배열은 userStorage에 저장된 유저들 내용
        
        if (id) {
            if ( id === body.id && psword === body.psword ){
                return { success: true };
            }
            return { success: false , msg: "비밀번호가 틀렸습니다" };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다" }

    }
}

module.exports = User;