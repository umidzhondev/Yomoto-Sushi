const closeRegisterModalBtn = document.querySelector(".back__icon");
const openRegisterModalBtn = document.querySelector("#closeRegisterModal");
const registerModal = document.querySelector(".register__modal");


openRegisterModalBtn.addEventListener('click',() => {
    registerModal.classList.add("register--open");
});
closeRegisterModalBtn.addEventListener('click',() => {
    registerModal.classList.remove("register--open")
});