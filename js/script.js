// // Horizontal scroll
// const container = document.querySelector('#container-carousel');
// let scrollLine = document.querySelector('#scrollLine');

// container.addEventListener('wheel', e => {
//     e.preventDefault();
//     const value = container.scrollLeft += e.deltaY;
//     value <= 4511 ? container.scrollLeft += e.deltaY : null;
// })


// slides in a container
const slider = document.querySelector('.slider');
// all trails
const trail = document.querySelectorAll('.trail>div');


// transform value
let transformValue = 0;

// trail index number
let trailValue = 0;

// inverval duration
let interval = 4000;

// function slides
const slide = (condition) => {

    // reset interval
    clearInterval(start);

    // ubah transform value dan trailValue
    condition === "meningkatkan" ? Peningkatan() : Penurunan();

    // pindah slide
    move(transformValue, trailValue);

    // restart animation
    // animate();

    // Start interval untuk slide kembali
    start = setInterval(() => slide("meningkatkan"), interval);
}

// function untuk peningkatan (maju, berikutnya)
const Peningkatan = () => {

    // hapus class active dari semua trails
    trail.forEach(cur => cur.classList.remove('active'));

    // tambahkan tranform value
    transformValue === 80 ? transformValue = 0 : transformValue += 20;

    // ubah trailValue berdasarkan nilai tersebut
    trailUpdate();
}


// funtion untuk penurunan (mundur, sebelumnya)
const Penurunan = () => {

    // hapus class active dari semua trails
    trail.forEach(cur => cur.classList.remove('active'));

    // penurunan transform value
    transformValue === 0 ? transformValue = 80 : transformValue -= 20;

    // ubah trailValue berdasarkan nilai tersebut
    trailUpdate();
}


// Funtion untuk mengubah slide
const move = (S, T) => {

    // transform slider
    slider.style.transform = `translateX(-${S}%)`;

    // tambahkan class active ke jejak saat ini
    trail[T].classList.add('active');
}


// function untuk mengubah trailValue berdasarkan transform value
const trailUpdate = () => {
    if (transformValue === 0) {
        trailValue = 0
    } else if (transformValue === 20) {
        trailValue = 1
    } else if (transformValue === 40) {
        trailValue = 2
    } else if (transformValue === 60) {
        trailValue = 3
    } else {
        trailValue = 4
    }
}

// interval mulai untuk slides
let start = setInterval(() => slide('meningkatkan'), interval);

// tombol berikutnya dan sebelumnya (svg icon dengan kelas berbeda)
document.querySelectorAll('svg').forEach(cur => {
    cur.addEventListener('click', () => {
        cur.classList.contains('next') ? slide('meningkatkan') : slide('penurunan');
    })
})

// function untuk slide ketika trail di klik
const clickCheck = (e) => {

    // hapus interval
    clearInterval(start);

    // hapus class active dari trails
    trail.forEach(cur => cur.classList.remove('active'));

    // ambil trail yang di klik
    const check = e.target;

    // tambahkan class active
    check.classList.add('active');

    // update nilai slide berdasarkan trail yang di klik
    if (check.classList.contains('box1')) {
        transformValue = 0;
    } else if (check.classList.contains('box2')) {
        transformValue = 20;
    } else if (check.classList.contains('box3')) {
        transformValue = 40;
    } else if (check.classList.contains('box4')) {
        transformValue = 60;
    } else {
        transformValue = 80;
    }

    // update trail berdasarkan nilai tersebut
    trailUpdate();

    // transform slide
    move(transformValue, trailValue);

    // start animation
    // animate();

    start = setInterval(() => slide('meningkatkan'), interval);
}

// tambahkan function untuk semua trails
trail.forEach(cur => cur.addEventListener('click', (ev) => clickCheck(ev)));