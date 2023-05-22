const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navlinks");

let isNavOpen = false; // Variable to track if the navigation is open or closed

function toggleNav() {
  if (!isNavOpen) {
    // Slide in the navigation links
    navLinks.style.transform = "translateX(0)";
    isNavOpen = true;
  } else {
    // Slide out the navigation links
    navLinks.style.transform = "translateX(-100%)";
    isNavOpen = false;
  }
}

menuBtn.addEventListener("click", toggleNav);

window.addEventListener("click", function (event) {
  if (event.target !== menuBtn && isNavOpen) {
    // Slide out the navigation links if clicked outside menuBtn
    navLinks.style.transform = "translateX(-100%)";
    isNavOpen = false;
  }
});
