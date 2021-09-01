const id = document.querySelector("#id"),
    psword = document.querySelector("#pasword"),
    loginBtn = document.querySelector("button");


loginBtn.addEventListener('click',login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch('./login', {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        bldy: JSON.stringify(req),
    });
}




