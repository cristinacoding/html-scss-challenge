const rightToggleBtn = document.querySelector(".right-sidebar__arrow");
const rightSidebar = document.querySelector(".right-sidebar");

const leftToggleBtn = document.querySelector(".left-sidebar__arrow");
const leftSidebar = document.querySelector(".left-sidebar");

const navText = document.querySelectorAll(".nav__text");

const middleSection = document.querySelector(".middle");
const body = document.body;

rightToggleBtn.addEventListener("click", () => {
  if (rightSidebar.classList.contains("right-sidebar--closed")) {
    rightSidebar.classList.remove("right-sidebar--closed");
    rightToggleBtn.classList.remove("right-sidebar__arrow--closed");
    body.classList.remove("body--closed");
    middleSection.classList.remove("middle--closed");
  } else {
    rightSidebar.classList.add("right-sidebar--closed");
    rightToggleBtn.classList.add("right-sidebar__arrow--closed");
    body.classList.add("body--closed");
    middleSection.classList.add("middle--closed");
  }
});

leftToggleBtn.addEventListener("click", () => {
  if (leftSidebar.classList.contains("left-sidebar--closed")) {
    leftSidebar.classList.remove("left-sidebar--closed");
    leftToggleBtn.classList.remove("left-sidebar__arrow--closed");
    middleSection.classList.add("middle--overlay");

    navText.forEach((element) => {
      element.classList.remove("nav__text--closed");
    });
  } else {
    leftSidebar.classList.add("left-sidebar--closed");
    leftToggleBtn.classList.add("left-sidebar__arrow--closed");
    middleSection.classList.remove("middle--overlay");
    navText.forEach((element) => {
      element.classList.add("nav__text--closed");
    });
  }
});
