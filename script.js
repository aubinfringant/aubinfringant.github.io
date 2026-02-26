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
.socials {
    margin-top: 20px;
}

.socials a {
    margin: 10px;
    text-decoration: none;
    color: #38bdf8;
    font-weight: bold;
    transition: 0.3s;
}

.socials a:hover {
    color: white;
}
@media (max-width: 768px) {

    nav {
        padding: 20px;
    }

    nav ul {
        display: none;
    }

    .cards {
        flex-direction: column;
        align-items: center;
    }

    .card {
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(10px);
    padding: 30px;
    border-radius: 15px;
    width: 250px;
    transition: 0.3s;
    border: 1px solid rgba(255,255,255,0.1);
}

    .section {
        padding: 80px 20px;
    }

}
