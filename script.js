const hamburgerIcon = document.getElementById("icon")
const menuItems = document.getElementById("drop")

hamburgerIcon.addEventListener('click',()=> {
    menuItems.classList.toggle("show-nav-dropdown")
})