class UserStorage {
    static #users = {//스태틱을 사용해서 정적 변수로 만들어주면 new같은 인스턴스를 만들지 않아도 접근이 가능하다
        id: ["ckgksdnf", "ansdlswn", "rlatjsals"],
        psword: ["1234", "1234", "12345"],
        name: ['한울', '인주', '선민']
    };

    static getUsers(...fields) {//이 스프레드변수엔 전달해준 파라미터들을 전부 배열로 가져온다
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers ;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;