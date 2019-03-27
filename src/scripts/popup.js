const button = document.querySelector(".menu-link");
const popup=document.querySelector(".header__middle");
const close=document.querySelector(".popup__close");
const socials=document.querySelector(".socials-menu-link");

button.addEventListener("click", e => {
    popup.classList.add("opened");
    socials.classList.add("active");
    

});
button.addEventListener('click', function() {
    document.body.classList.add('testClass');
});

close.addEventListener('click', e=>{
    popup.classList.remove("opened");
    socials.classList.remove("active");
});
close.addEventListener('click', function() {
    document.body.classList.remove('testClass');
});





