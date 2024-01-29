// script.js

// Selecting the burger menu button
const burger = document.querySelector('.burger');
// Selecting the navigation links
const navLinks = document.querySelector('.nav__links__left');

// Add event listener for burger menu click
burger.addEventListener('click', () => {
    // Toggle 'nav-active' class on navLinks to show/hide the dropdown
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('burger-active'); // Toggle the active class for the burger
});

// Parallax effect JavaScript
document.addEventListener("mousemove", parallax);
function parallax(event) {
    document.querySelectorAll(".parallax-wrap > *").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}