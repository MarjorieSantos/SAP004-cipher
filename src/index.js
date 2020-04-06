import cipher from './cipher.js';

let btn_back = document.getElementById("btn-back")
let page1 = document.getElementById("page1")
let page2 = document.getElementById("page2")
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
    btn_back.style.display = "block"
}

btn_back.onclick = function(){
    page1.style.display = "block"
    page2.style.display = "none"
    btn_back.style.display = "none"
    message.value = ""
    offset.value = ""
    result_name = ""
    result.style.display = "none"
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






