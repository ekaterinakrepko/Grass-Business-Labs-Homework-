const doc = document;
const menu = doc.querySelector(".header-box-burgerMenu__burger");
const menuAdapt = doc.querySelector(".header-box-burgerMenu__adapt");
const menuClose = doc.querySelector(".header-box-menu__img"); 


// doc.querySelector(".header-box-burgerMenu__burger").onclick = function(){
//     console.log("111111");
//     // doc.querySelector(".header-box-burgerMenu__adapt").classList.toggle("header-box-burgerMenu__adapt_unVisible");
// }


menu.addEventListener(
    "click", function(){
        menuAdapt.classList.add("header-box-burgerMenu__adapt_unVisible");
    }
)

menuClose.addEventListener(
    "click", function(){
        menuAdapt.classList.remove("header-box-burgerMenu__adapt_unVisible");
    }
)
