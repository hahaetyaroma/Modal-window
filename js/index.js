window.addEventListener("DOMContentLoaded", () => {
    const close = document.querySelector(".close"),
        sendBtn = document.querySelector(".send-btn"),
        inputItem = document.querySelectorAll(".input-item"),
        toggleBtn = document.querySelectorAll(".toggle-button"),
        producteSelect = document.querySelector(".producte-select"),
        modalPrice = document.querySelector(".modal__price-value"),
        modalWindow = document.querySelector(".modal-window");
    let sum = 0;

    close.addEventListener("click", () => {
        modalWindow.style.display = "none";
    });

    producteSelect.addEventListener("change", function () {
        toggleBtn.forEach(element => {
            if (element.checked) {
                element.checked = false;
            }
        });
        sum = Number(this.value);
        modalPrice.textContent = `${sum}$`;
    });

    toggleBtn.forEach((element) => {
        element.addEventListener("click", function () {
            if (element.checked) {
                sum += Number(this.dataset.price);
            } else if (!element.checked) {
                sum -= Number(this.dataset.price);
            }
            modalPrice.textContent = `${sum}$`;
        });
    });

    sendBtn.addEventListener("click", () => {
        inputItem.forEach((element) => {
            let correctStr = element.value.trim();
            if (correctStr == "") {
                element.setAttribute("required", true);
            } else {
                // console.log('OK');
            }
        });
    });
});