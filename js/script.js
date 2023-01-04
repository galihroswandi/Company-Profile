// Horizontal scroll
const container = document.querySelector('#container-carousel');
let scrollLine = document.querySelector('#scrollLine');

container.addEventListener('wheel', e => {
    e.preventDefault();
    const value = container.scrollLeft += e.deltaY;
    value <= 4511 ? container.scrollLeft += e.deltaY : null;
})

console.log('COba');