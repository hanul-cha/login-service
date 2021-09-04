
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
        
        return fs
            .readFile("./src/databases/user.json")
            .then((data) => {
                return this.#getUsers(data, isAll, fields);
            })
            .catch(console.error);
    }

    static getUserInfo(id) { 
        return fs
            .readFile("./src/databases/user.json")
            .then((data) => {
                return this.#getUserinfo(data, id);
            })
            .catch(console.error);
    }

    static async save(userInfo) {
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디 입니다"
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/user.json", JSON.stringify(users));
        return { success: true };
    }
}

module.exports = UserStorage;