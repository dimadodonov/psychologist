export default () => {
    document.querySelector('.header-menu').addEventListener('click', (e) => {
        const hamburger = document.querySelector('.header-menu .hamburger');
        hamburger.classList.toggle('animate');
    });
};
