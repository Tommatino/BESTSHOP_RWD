const inputNumber = document.querySelectorAll(".form__input");
const productList = document.querySelector("li[data-id = products]");
const productCalc = document.querySelector("li[data-id = products] .item__calc");
const productPrice = document.querySelector("li[data-id = products] .item__price");
const productType = document.querySelector("li[data-id = products] .item__type");
const orderList = document.querySelector("li[data-id = orders]");
const orderCalc = document.querySelector("li[data-id = orders] .item__calc");
const orderPrice = document.querySelector("li[data-id = orders] .item__price");
const orderType = document.querySelector("li[data-id = orders] .item__type");
const selectPackage = document.querySelector(".select__input");
const packageItems = document.querySelectorAll(".select__dropdown > li");
const packageContainer = document.querySelector(".calc__select");
const packageCalc = document.querySelector("li[data-id = package] .item__calc");
const packagePrice = document.querySelector("li[data-id = package] .item__price");
const packageList = document.querySelector("li[data-id = package]");
const inputCheckboxes = document.querySelectorAll(".calc__form .form__checkbox input[type = checkbox]");
const accountingList = document.querySelector("li[data-id = accounting]");
const accountingPrice = document.querySelector("li[data-id = accounting] .item__price");
const terminalList = document.querySelector("li[data-id = terminal]");
const terminalPrice = document.querySelector("li[data-id = terminal] .item__price");
const totalPriceList = document.querySelector(".summary__total");
const totalPrice = document.querySelector("span.total__price");
inputNumber.forEach(function(inputNumber) {
    inputNumber.addEventListener("input", handleAddNumber);
    productPrice.innerText = 0;
    orderPrice.innerText = 0;
    function handleAddNumber(e) {
        if (inputNumber.id === "products") {
            productCalc.innerText = inputNumber.value + " * $0.5";
            productPrice.innerText = "$" + inputNumber.value * 0.5;
            productList.classList.add("open");
            if (productPrice.innerText.slice(1) <= 0) {
                productType.innerText = "Wrong value";
                productCalc.innerText = "Enter correct value";
                productPrice.innerText = "$";
            }
        }
        if (inputNumber.id === "orders") {
            orderCalc.innerText = inputNumber.value + " * $0.5";
            orderPrice.innerText = "$" + inputNumber.value * 0.5;
            orderList.classList.add("open");
            if (orderPrice.innerText.slice(1) <= 0) {
                orderType.innerText = "Wrong value";
                orderCalc.innerText = "Enter correct value";
                orderPrice.innerText = "$";
            }
        }
        sumCalculation();
    }
});
selectPackage.addEventListener("click", handleOpen);
function handleOpen(e) {
    packageContainer.classList.toggle("open");
    packageItems.forEach(function(item) {
        item.addEventListener("click", handleAddPackage);
        function handleAddPackage(event) {
            if (event.target.dataset.value === "basic") {
                packageCalc.innerText = "Basic";
                packagePrice.innerText = "$4";
                packageList.classList.add("open");
                sumCalculation();
            }
            if (event.target.dataset.value === "professional") {
                packageCalc.innerText = "Professional";
                packagePrice.innerText = "$7";
                packageList.classList.add("open");
                sumCalculation();
            }
            if (event.target.dataset.value === "premium") {
                packageCalc.innerText = "Premium";
                packagePrice.innerText = "$10";
                packageList.classList.add("open");
                sumCalculation();
            }
        }
    });
}
inputCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener("input", handleCheck);
    function handleCheck(event) {
        if (event.target.id === "accounting") {
            accountingList.classList.toggle("open");
            accountingPrice.innerText = "$15";
            sumCalculation();
        }
        if (event.target.id === "terminal") {
            terminalList.classList.toggle("open");
            terminalPrice.innerText = "$12";
            sumCalculation();
        }
    }
});
const sumCalculation = function() {
    const totalProducts = Number(productPrice.innerText.slice(1));
    console.log(totalProducts);
    const totalOrders = Number(orderPrice.innerText.slice(1));
    console.log(totalOrders);
    const totalPackage = Number(packagePrice.innerText.slice(1));
    console.log(totalPackage);
    const totalAccounting = Number(accountingPrice.innerText.slice(1));
    console.log(totalAccounting);
    const totalTerminal = Number(terminalPrice.innerText.slice(1));
    console.log(totalTerminal);
    let sum = totalProducts + totalOrders + totalPackage + totalAccounting + totalTerminal;
    totalPrice.innerText = sum;
    totalPriceList.classList.add("open");
};

//# sourceMappingURL=index.cea00a9b.js.map
