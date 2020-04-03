import cipher from './cipher.js';

let btn_inicio = document.getElementById("btn-start")
let message = document.getElementById("msg")
let offset = document.getElementById("offset")
let choice = document.getElementById("choice")
let choice2 = document.getElementById("choice2")
let result = document.getElementById("result")
let result_name = document.getElementById("result-name")

btn_inicio.onclick = function(){
    page1.style.display = "none"
    page2.style.display = "block"
}

choice.onclick = function(){
        if (message.value == "" || offset.value == ""){
            alert("Por favor, preencha o campo requerido")
        } else {
            result_name.innerHTML = cipher.encode(offset.value, message.value)
            result.style.display = "block"
        }
}

choice2.onclick = function (){
    if (message.value == "" || offset.value == ""){
        alert("Por favor, preencha o campo requerido")
    } else {
        result_name.innerHTML = cipher.decode(offset.value, message.value)
        result.style.display = "block"
    }
}






