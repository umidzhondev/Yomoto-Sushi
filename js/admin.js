// * Settings Modal
const settingsModalBtns = document.querySelectorAll(".main__card-button");
const settingsModal = document.querySelector(".settings__modal");
const mainSectionMenu = document.querySelector(".main__section-menu");
const menuSectionCards = document.querySelector(".menu__section-cards");
const settingsModalCloseBtn = document.querySelector("#settings__modal-close");
const newCardButton = document.querySelector(".add__card-button");
const exitBtn = document.querySelector(".exit");

exitBtn.addEventListener('click',() => {
    window.location = "index.html"
});


// ? Settings Modal Open
settingsModalBtns.forEach((btn)=>{
    btn.addEventListener('click',() => {
        settingsModal.classList.add("open__settings--modal");
        if(mainSectionMenu){
            mainSectionMenu.classList.add("open__settings--modal");
        }
        menuSectionCards.classList.add("open__settings--modal");
    });
})
// ? Settings Modal Open
settingsModalCloseBtn.addEventListener('click',() => {
    settingsModal.classList.remove("open__settings--modal");
    if(mainSectionMenu){
        mainSectionMenu.classList.remove("open__settings--modal");
    }
    menuSectionCards.classList.remove("open__settings--modal");
});
newCardButton.addEventListener('click',() => {
    settingsModal.classList.add("open__settings--modal");
    if(mainSectionMenu){
        mainSectionMenu.classList.add("open__settings--modal");
    }
    menuSectionCards.classList.add("open__settings--modal");
});