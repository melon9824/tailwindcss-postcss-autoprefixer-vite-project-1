/**
 * ! light / dark theme ===
 */
const html = document.getElementById("html");
const themeBtn1 = document.getElementById("theme-btn-1");
const themeBtn2 = document.getElementById("theme-btn-2");

themeBtn1.addEventListener("click", () => {
    html.classList.toggle("dark");
});

themeBtn2.addEventListener("click", () => {
    html.classList.toggle("dark");
});


/**
 * ! scroll section active link ===
 */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};