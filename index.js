const navbar = document.querySelector("nav");
const navButton = document.querySelector("nav button");

function changeColorsOnScroll() {
  const headerSection = document.querySelector(".headerSection");
  const buttonInSection = document.querySelector(".headerSection .lastButton");

  const buttonTopOffset = buttonInSection.offsetTop - window.scrollY;

  if (buttonTopOffset < window.innerHeight && buttonTopOffset > 0) {
    navbar.style.backgroundColor = "#ffc017";

    navButton.style.backgroundColor = "black";
  } else {
    navbar.style.backgroundColor = "white";
    navButton.style.backgroundColor = "green";
  }
}

window.addEventListener("scroll", changeColorsOnScroll);
