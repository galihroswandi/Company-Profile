// // Horizontal scroll
// const container = document.querySelector('#container-carousel');
// let scrollLine = document.querySelector('#scrollLine');

// container.addEventListener('wheel', e => {
//     e.preventDefault();
//     const value = container.scrollLeft += e.deltaY;
//     value <= 4511 ? container.scrollLeft += e.deltaY : null;
// })


// Navbar Toggle
const toggleButton = document.querySelector('nav>footer>.toggle');
const navList = document.querySelector('nav>footer>ul');

toggleButton.addEventListener('click', () => {
    if (navList.classList.contains('active')) {
        navList.classList.remove('active')
        navList.style.marginTop = '-5rem';
        navList.style.transition = 'all .25s cubic-bezier(0.71, 0, 0.44, 1.46)';
        navList.style.opacity = 0;
        navList.style.transform = 'scale(.5)';
    } else {
        navList.classList.add('active')
        navList.style.marginTop = '0';
        navList.style.transition = 'all .25s cubic-bezier(0.71, 0, 0.44, 1.46)';
        navList.style.opacity = 1;
        navList.style.transform = 'scale(1)';
    }
})



// Carousel
const carousel = Array.from(document.querySelectorAll('#container-carousel>figure'));

let transformValue = 0;
let trailValue = 0;
let interval = 4000;

const slide = (condition) => {

    // hapus interval ketika tombol di klik
    // clearInterval(start);

    condition === "next" ? nextSlide() : prevSlide();

    move(transformValue, trailValue);

}

// let start = setInterval(() => slide('next'), interval);

const nextSlide = () => {

    transformValue === 50 ? transformValue = 0 : transformValue += 425;
}

const prevSlide = () => {
    console.log('prev slide active');
}

const move = (tValue, trail) => {
    // console.log(Math.floor(window.innerWidth));
    if (Math.floor(window.innerWidth) >= 1440) {
        
        for(let i = 0; i <= carousel.length; i++){
            i >= 0 && i < 4 ? console.log(carousel[i]) : null;
            carousel[i].style.transform = `translateX(-${tValue}%)`;
        }

        // newSlide.style.transform = `translateX(-${tValue}%)`;
        // console.log(newSlide);
    }
}

document.querySelectorAll('svg').forEach(nop => {
    nop.addEventListener('click', () => nop.classList.contains('next') ? slide('next') : slide('prev'));
})