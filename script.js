let menuBtn = document.querySelector(".items-menu-mobile");
menuBtn.addEventListener('click', () => {
    let itemsMenu = document.querySelector('.menu-mobile')
    if (itemsMenu.classList.contains('show')) {
        itemsMenu.classList.remove("show");
        itemsMenu.classList.add("hide");
    } else {
            itemsMenu.classList.remove("hide");
            itemsMenu.classList.add("show");
    }
    
})

