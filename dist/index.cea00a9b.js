const inputNumber = document.querySelectorAll(".form__input");
const productList = document.querySelector("li[data-id = products]");
const productCalc = document.querySelector("li[data-id = products] .item__calc");
const productPrice = document.querySelector("li[data-id = products] .item__price");
const orderList = document.querySelector("li[data-id = orders]");
const orderCalc = document.querySelector("li[data-id = orders] .item__calc");
const orderPrice = document.querySelector("li[data-id = orders] .item__price");
const selectPackage = document.querySelector(".select__input");
const packageItems = document.querySelectorAll(".select__dropdown > li");
const packageContainer = document.querySelector(".calc__select");
const packageCalc = document.querySelector("li[data-id = package] .item__calc");
const packagePrice = document.querySelector("li[data-id = package] .item__price");
const packageList = document.querySelector("li[data-id = package]");
const inputCheckboxes = document.querySelectorAll(".calc__form .form__checkbox input[type = checkbox]");
const accountingList = document.querySelector("li[data-id = accounting]");
const terminalList = document.querySelector("li[data-id = terminal]");
inputNumber.forEach(function(inputNumber) {
    inputNumber.addEventListener("input", handleAddNumber);
    productCalc.innerText = 0;
    productPrice.innerText = 0;
    orderCalc.innerText = 0;
    orderPrice.innerText = 0;
    function handleAddNumber() {
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
});
selectPackage.addEventListener("click", handleOpen);
function handleOpen(event) {
    packageContainer.classList.toggle("open");
    packageItems.forEach(function(item) {
        item.addEventListener("click", handleAddPackage);
        function handleAddPackage(event) {
            if (event.target.dataset.value === "basic") {
                packageCalc.innerText = "Basic";
                packagePrice.innerText = "$4";
                packageList.classList.add("open");
            }
            if (event.target.dataset.value === "professional") {
                packageCalc.innerText = "Professional";
                packagePrice.innerText = "$7";
                packageList.classList.add("open");
            }
            if (event.target.dataset.value === "premium") {
                packageCalc.innerText = "Premium";
                packagePrice.innerText = "$10";
                packageList.classList.add("open");
            }
        }
    });
}
inputCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener("input", handleCheck);
    function handleCheck(event) {
        if (event.target.id === "accounting") accountingList.classList.toggle("open");
        if (event.target.id === "terminal") terminalList.classList.toggle("open");
    }
});

//# sourceMappingURL=index.cea00a9b.js.map
