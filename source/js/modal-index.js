const button=document.querySelector(".week-product__button")
const videobutton=document.querySelector(".video__button")
const modal=document.querySelector(".modal")



button.addEventListener("click",function(){
  modal.classList.remove("visually-hidden");
})

videobutton.addEventListener("click",function(){
  modal.classList.remove("visually-hidden");
})
