const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");


loginBtn.addEventListener('click',login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())//프라미스로 반환됨 그래서 아래에 then을 한번더 불러줌
    .then((res) => {
        if(res.success) {
            location.href = '/';
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error('로그인중 에러 발생');
    })
}