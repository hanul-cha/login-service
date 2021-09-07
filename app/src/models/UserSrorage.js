
const db = require("../config/db");

class UserStorage {

    static #getUserinfo(data, id) {
        const users = (JSON.parse(data));
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static #getUsers(data, isAll, fields) {
        /* const users = this.#users; */
        const users = JSON.parse(data);
        if(isAll) return users
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers ;
        }, {});
        return newUsers;
    }
    

    static getUsers(isAll, ...fields) {//이 스프레드변수엔 전달해준 파라미터들을 전부 배열로 가져온다
        
    }

    static getUserInfo(id) { 
        db.query("SELECT * FROM users", (err, data) => {
            console.log(data);
        })
    }

    static async save(userInfo) {
        
    }
}

module.exports = UserStorage;