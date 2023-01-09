import NavToggle from "./navbarToggle.js";
import slide from "./carousel.js";


const toggleButton = document.querySelector('nav>footer>.toggle');
toggleButton.addEventListener('click', NavToggle);


// Carousel
document.querySelectorAll('svg').forEach(nop => {
    nop.addEventListener('click', () => nop.classList.contains('next') ? slide('next') : slide('prev'));
})