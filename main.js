
hamburger = document.querySelector('.burger-menu');
contentToBlur = document.querySelector('.content-to-blur');
footerToBlur = document.querySelector("footer");

hamburger.onclick = function () {
    menuBurg = document.querySelector(".menu-burg");
    menuBurg.classList.toggle("active");
}

hamburger.onclick = function () {
    menuBurg = document.querySelector(".menu-burg");
    menuBurg.classList.toggle("active");
    hamburger.style.display = 'none';
    contentToBlur.classList.toggle("blur");
    footerToBlur.classList.toggle("blur");
}



document.addEventListener('click', function (event) {

    if (!menuBurg.contains(event.target) && !hamburger.contains(event.target)) {
        menuBurg.classList.remove('active');
        hamburger.style.display = 'block';
        contentToBlur.classList.remove("blur");
        footerToBlur.classList.remove("blur");
    }
});


