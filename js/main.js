
const html = document.getElementById("html");
const btn = document.getElementById("theme-btn");

btn.addEventListener("click", () => {
    html.classList.toggle("dark");
});