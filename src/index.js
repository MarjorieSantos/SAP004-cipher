
import cipher from './cipher.js';

const btn_back = document.getElementById("btn-back")
const page1 = document.getElementById("page1")
const page2 = document.getElementById("page2")
const btn_inicio = document.getElementById("btn-start")
const message = document.getElementById("msg")
const offset = document.getElementById("offset")
const choice = document.getElementById("choice")
const choice2 = document.getElementById("choice2")
const result = document.getElementById("result")
const result_name = document.getElementById("result-name")

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