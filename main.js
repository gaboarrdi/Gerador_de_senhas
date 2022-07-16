let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassworld = document.querySelector("#valor");
let passworld = document.querySelector("#passworld");

let containerPassworld = document.querySelector("#container-passworld");


let charset = "abcdefghijklmnopqrstuvwxyzABCDFGHIJKLMNOPRSTUVWXUZ1234567890!@#$%¨&*";
let novaSenha = "";

sizePassworld.innerHTML = sliderElement.value;
sliderElement.oninput = function(){
    sizePassworld.innerHTML = this.value;
}

function generatePassworld(){
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassworld.classList.remove("hide");
    passworld.innerHTML = pass;
    novaSenha = pass;
}


function copyPassworld(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novaSenha);
}
