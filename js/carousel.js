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
        transformValue === 800 ? transformValue = 0 : transformValue += 100;
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
        transformValue === 0 ? transformValue = 800 : transformValue -= 100;
    }
}

const move = (tValue, trail) => {
    carousel.forEach(el => {
        el.style.transform = `translateX(-${tValue}%)`;
    })
}


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

export default slide;