const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("button");

const submit = document.querySelector("form");

function onSubmit(e) {
    e.preventDefault();
}

submit.addEventListener("submit",onSubmit);

registerBtn.addEventListener('click',register);

function register() {
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
    };
    

    fetch('/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())//프라미스로 반환됨 그래서 아래에 then을 한번더 불러줌
    .then((res) => {
        if(res.success) {
            location.href = '/login';
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error('회원가입 중 에러 발생');
    });
}




