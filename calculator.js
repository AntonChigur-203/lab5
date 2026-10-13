window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    let button = document.getElementById("calculate-button");
    
    button.addEventListener("click", function (event) {
        event.preventDefault();
        
        let quantityInput = document.getElementById("quantity-input").value;
        let productSelect = document.getElementById("product-select").value;
        let resultDiv = document.getElementById("calculator-result");
        let errorDiv = document.getElementById("error-message");
        let match = quantityInput.match(/^\d+$/);
        
        resultDiv.textContent = "";
        errorDiv.textContent = "";
        
        if (match !== null) {
            let price = parseInt(productSelect, 10);
            let quantity = parseInt(quantityInput, 10);
            resultDiv.textContent = "Стоимость заказа: " + (price * quantity) + " рублей";
        } else {
            errorDiv.textContent = "Ошибка: введите корректное количество (используйте только цифры).";
        }
    });
});