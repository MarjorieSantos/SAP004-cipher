
import cipher from './cipher.js';

const btn_back = document.querySelector(".js-btn-back")
const page1 = document.querySelector("#page1")
const page2 = document.querySelector("#page2")
const btn_inicio = document.querySelector(".js-btn-start")
const message = document.querySelector(".js-msg")
const offset = document.querySelector(".js-offset")
const choice = document.querySelector(".js-encode")
const choice2 = document.querySelector(".js-decode")
const result = document.querySelector(".js-result")
const result_name = document.querySelector("#result-name")

btn_inicio.addEventListener("click", function () {
    page1.classList.add("hidden-content")
    page2.classList.add("show-content")
    btn_back.classList.add("show-content")
    result.classList.add("hidden-content")
    result.classList.remove("show-content")
})

btn_back.addEventListener("click", function () {
    page1.classList.remove("hidden-content")
    page2.classList.add("hidden-content")
    page2.classList.remove("show-content")
    btn_back.classList.add("hidden-content")
    btn_back.classList.remove("show-content")
    result.classList.add("hidden-content")
    message.value = ""
    offset.value = ""
})

choice.addEventListener("click", function () {
    if (message.value == "" || offset.value == "") {
        alert("Por favor, preencha o campo requerido")
    } else {
        result_name.innerHTML = cipher.encode(offset.value, message.value)
        result.classList.add("show-content")
        result.classList.remove("hidden-content")
    }
})

choice2.addEventListener("click", function () {
    if (message.value == "" || offset.value == "") {
        alert("Por favor, preencha o campo requerido")
    } else {
        result_name.textContent = cipher.decode(offset.value, message.value)
        result.classList.add("show-content")
        result.classList.remove("hidden-content")
    }
})