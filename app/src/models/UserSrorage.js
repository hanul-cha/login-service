
const fs = require('fs').promises;

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
    

    static getUsers(...fields) {//이 스프레드변수엔 전달해준 파라미터들을 전부 배열로 가져온다
        /* const users = this.#users; */
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers ;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) { 
        return fs
            .readFile("./src/databases/user.json")
            .then((data) => {
                return this.#getUserinfo(data, id);
            })
            .catch(console.error);
    }

    static save(userInfo) {
        /* const user = this.#users; */
        user.id.push(userInfo.id);
        user.name.push(userInfo.name);
        user.psword.push(userInfo.psword);
        return { success: true };
    }
}

module.exports = UserStorage;