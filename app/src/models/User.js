
const UserStorage = require("./UserSrorage");

class User {
    constructor(body) {
        this.body = body; // input에 입력한 값들
    }

    async login() {
        const client = this.body;
        const { id, psword } = await UserStorage.getUserInfo(client.id);//여기의 배열은 userStorage에 저장된 유저들 내용
        console.log(client.psword, psword, client.id, id);
        if (id) {
            if ( id === client.id && psword === client.psword ){
                return { success: true };
            }
            return { success: false , msg: "비밀번호가 틀렸습니다" };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다" }
    }

    async register() {
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
        return response;
        } catch(err) {
            return { success: false, msg: err };
        }
        
    }
}

module.exports = User;