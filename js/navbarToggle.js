const NavToggle = () => {
    const navList = document.querySelector('nav>footer>ul');

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
}

export default NavToggle;