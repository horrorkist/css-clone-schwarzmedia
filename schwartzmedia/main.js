const sidebarBtn = document.querySelector(".sidebar-btn");
const sidebar = document.querySelector(".sidebar");
const lowbar = document.querySelector(".content-lowbar");
const btnImg = sidebarBtn.querySelector(".fas.fa-bars");
const main = document.querySelector("main");
const header = document.querySelector("header");
const lowbarBtn = document.querySelector(".lowbar-btn");

let isSidebarActive = false;

const handleClick = () => {

    isSidebarActive = !isSidebarActive;

    btnImg.classList = isSidebarActive ? "fas fa-times" : "fas fa-bars";

    sidebar.classList.toggle("active");
    main.classList.toggle("active");
    sidebarBtn.classList.toggle("active");
    lowbar.classList.toggle("active");
}

const handleScroll = () => {
    let scrolled = window.pageYOffset;
    header.classList.toggle("scrolled", scrolled > 100);
    sidebarBtn.classList.toggle("scrolled", scrolled > 100);
}

const handleLowbarBtnClick = () => {
    const location = document.querySelector(".about").offsetTop;
    window.scrollTo({top: location, behavior: "smooth"});
}

sidebarBtn.addEventListener("click", handleClick);
document.addEventListener("scroll", handleScroll);
lowbarBtn.addEventListener("click", handleLowbarBtnClick);