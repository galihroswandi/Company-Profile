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
const carousel_wrapper = document.getElementById('container-carousel');

let transformValue = 0;
let trailValue = 0;
let interval = 4000;

const slide = (condition) => {

    // hapus interval ketika tombol di klik
    clearInterval(start);

    condition === "next" ? nextSlide() : prevSlide();

    move(transformValue, trailValue);

    start = setInterval(() => slide('next'), interval);

}

let start = setInterval(() => slide('next'), interval);

const nextSlide = () => {
    nextXTransform();
}

const prevSlide = () => {
    prevXTransform();
}

const nextXTransform = () => {
    if (Math.floor(window.innerWidth) >= 1440) {
        transformValue === 850 ? transformValue = 0 : transformValue += 425;
    } else if ((Math.floor(window.innerWidth) < 1440) && (Math.floor(window.innerWidth) >= 1095)) {
        transformValue === 630 ? transformValue = 0 : transformValue += 315;
    } else if ((Math.floor(window.innerWidth) < 1095) && (Math.floor(window.innerWidth) >= 830)) {
        transformValue === 856 ? transformValue = 0 : transformValue += 214;
    } else if ((Math.floor(window.innerWidth) < 830) && (Math.floor(window.innerWidth) >= 364)) {
        transformValue === 856 ? transformValue = 0 : transformValue += 100;
    }
}

const prevXTransform = () => {
    if (Math.floor(window.innerWidth) >= 1440) {
        transformValue === 0 ? transformValue = 850 : transformValue -= 425;
    } else if ((Math.floor(window.innerWidth) < 1440) && (Math.floor(window.innerWidth) >= 1095)) {
        transformValue === 0 ? transformValue = 630 : transformValue -= 315;
    } else if ((Math.floor(window.innerWidth) < 1095) && (Math.floor(window.innerWidth) >= 830)) {
        transformValue === 0 ? transformValue = 856 : transformValue -= 214;
    } else if ((Math.floor(window.innerWidth) < 830) && (Math.floor(window.innerWidth) >= 364)) {
        transformValue === 0 ? transformValue = 856 : transformValue -= 100;
    }
}

const move = (tValue, trail) => {
    carousel.forEach(el => {
        el.style.transform = `translateX(-${tValue}%)`;
    })
}

document.querySelectorAll('svg').forEach(nop => {
    nop.addEventListener('click', () => nop.classList.contains('next') ? slide('next') : slide('prev'));
})


const touchSlide = (() => {
    let start, move, change, sliderWidth;

    carousel_wrapper.addEventListener('touchstart', e => {
        start = e.touches[0].clientX;
        sliderWidth = carousel_wrapper.clientWidth / 4;
    })

    carousel_wrapper.addEventListener('touchmove', e => {
        e.preventDefault();
        move = e.touches[0].clientX;
        change = start - move;
    })

    const mobile = (e) => {
        change > (sliderWidth / 4) ? slide('next') : null;
        (change * -1) > (sliderWidth / 4) ? slide('prev') : null;
        [start, move, change, sliderWidth] = [0, 0, 0, 0];
    }

    carousel_wrapper.addEventListener('touchend', mobile);
})();