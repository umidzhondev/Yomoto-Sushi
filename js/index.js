// * Navigation Link Active
const navigationLinks = document.querySelectorAll(".header__navigation-link");
addActive(navigationLinks, "active--link")

// * Menu Section Menu Active
const menuItems = document.querySelectorAll(".menu__section-menu__item");
addActive(menuItems, "active--menuItem")



// * Card Price Counter
const cardDecrementers = document.querySelectorAll(".card__decrement");
const cardIncrementers = document.querySelectorAll(".card__increment");
const cardCounts = document.querySelectorAll(".card__count")

cardIncrementers.forEach((item, index) => {
    item.addEventListener("click", () => {
        +cardCounts[index].textContent++
    })
})
cardDecrementers.forEach((item, index) => {
    item.addEventListener("click", () => {
        if(+cardCounts[index].textContent == 0){
            cardCounts[index].textContent = 0;
        }else{
            +cardCounts[index].textContent--
        }
    })
})

// * Functions
function addActive(items, className) {
    items.forEach(link => {
        link.addEventListener("click", () => {
            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove(className)
            }
            link.classList.add(className);
        })
    })
}