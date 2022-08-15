let burger = document.querySelector(".site-header__burger")
let nav = document.querySelector(".header-inner__nav")

burger.addEventListener("click", function(){
    nav.classList.toggle("active")
    burger.classList.toggle("close")

})

