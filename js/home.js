// ? Telephone
const orderBtn = document.querySelector(".order__btn");
orderBtn.addEventListener('click',() => {
    window.href = "tel:0555737787";
    console.log("Working...");
});