const pageHeaderToggle = document.querySelector(".page-header__toggle");
const mainNav = document.querySelector(".main-nav");
mainNav.classList.add("main-nav--closed");
const pageHeaderToggleOnClick = () => {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    pageHeaderToggle.classList.remove("page-header__toggle--open");
    pageHeaderToggle.classList.add("page-header__toggle--close");
  } else {
    mainNav.classList.add("main-nav--closed");
    pageHeaderToggle.classList.remove("page-header__toggle--close");
    pageHeaderToggle.classList.add("page-header__toggle--open");
  }
}
pageHeaderToggle.addEventListener("click", pageHeaderToggleOnClick);
