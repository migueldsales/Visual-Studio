const toggleMenu = document.querySelector(".toggle-menu");
const headNav= document.querySelector(".header-mobile");
// const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("open");
    // blurr.classList.toggle("open");
    headNav.classList.toggle("open");
    // header.classList.toggle("open");
});