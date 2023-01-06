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

