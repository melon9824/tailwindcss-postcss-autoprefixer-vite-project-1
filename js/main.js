/**
 * ! mobile menu ===
 */
const menuBtn = document.querySelector('#menu-btn');
const navLists = document.querySelector('#nav-lists');
const faIcon = document.querySelector('.fas');
const hLink = document.querySelectorAll('#hLink');

menuBtn.addEventListener('click', () => {
    navLists.classList.toggle('opacity-0');
    faIcon.classList.toggle('fa-times');
})

// ! hidden menu on click link
hLink.forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.toggle('opacity-0');
        faIcon.classList.toggle('fa-times');
    })
})



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


/**
 * ! pricing
 */
const toggleBtn = document.getElementById('toggleBtn');

const card_1_front = document.querySelector('#card_1_front');
const card_1_back = document.querySelector('#card_1_back');

const card_2_front = document.querySelector('#card_2_front');
const card_2_back = document.querySelector('#card_2_back');

const card_3_front = document.querySelector('#card_3_front');
const card_3_back = document.querySelector('#card_3_back');

toggleBtn.addEventListener('change', () => {
    card_1_front.classList.toggle('-rotate-y-180');
    card_1_back.classList.toggle('rotate-y-180');

    card_2_front.classList.toggle('-rotate-y-180');
    card_2_back.classList.toggle('rotate-y-180');

    card_3_front.classList.toggle('-rotate-y-180');
    card_3_back.classList.toggle('rotate-y-180');
})


/**
 * ! show scroll up
 */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    this.scrollY >= 150 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);