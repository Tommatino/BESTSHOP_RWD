const inputNumber = document.querySelectorAll(".form__input")
const selectPackage = document.querySelector(".select__input")
const inputCheckboxes = document.querySelectorAll("input[type = checkbox]")

const productList = document.querySelector("li[data-id = products]")
const productCalc = document.querySelector("li[data-id = products] .item__calc")
const productPrice = document.querySelector("li[data-id = products] .item__price")

const orderList = document.querySelector("li[data-id = orders]")
const orderCalc = document.querySelector("li[data-id = orders] .item__calc")
const orderPrice = document.querySelector("li[data-id = orders] .item__price")

inputNumber.forEach(function (inputNumber){
    inputNumber.addEventListener("input", handleAddNumber)
    productCalc.innerText = 0
    productPrice.innerText = 0
    orderCalc.innerText = 0
    orderPrice.innerText = 0
    function handleAddNumber () {
        if (inputNumber.id === "products") {
            productCalc.innerText = inputNumber.value + " * $0.5";
            productPrice.innerText = "$" + inputNumber.value * 0.5;
            productList.classList.add("open");
        }
        if (inputNumber.id === "orders") {
            orderCalc.innerText = inputNumber.value + " * $0.5";
            orderPrice.innerText = "$" + inputNumber.value * 0.5;
            orderList.classList.add("open");
        }
    }
})