const hbutton=document.querySelector(".header__button");

const menu=document.querySelector(".main-nav")

const cont=document.querySelector(".main-nav__cont");


cont.classList.add("absolute");
hbutton.classList.remove("hidden");
menu.classList.add("hidden");


hbutton.addEventListener("click", function(){
  hbutton.classList.toggle("header__button-close");
  menu.classList.toggle("hidden");
})
