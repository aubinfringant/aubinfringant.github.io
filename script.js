const text = "Aubin Fringant";
let index = 0;
const speed = 100;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;


/* Animation au scroll */
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

hiddenElements.forEach(el => observer.observe(el));
function toggleTheme() {
    document.body.classList.toggle("light");
}
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}
const bars = document.querySelectorAll('.progress-bar');

const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute("style").replace("width:", "");
        }
    });
});

bars.forEach(bar => skillObserver.observe(bar));
