let menu = document.querySelector('[data-menu]');
let burger = document.querySelector('[data-burger]');
burger.addEventListener('click', ()=>{
    document.querySelector('body').classList.add('active')
});
menu.addEventListener('click', ()=>{
    if(!event.target.closest('.menu-burg')){
        document.querySelector('body').classList.remove('active')
    }
});