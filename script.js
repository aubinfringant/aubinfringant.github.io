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
const ctx = document.getElementById('skillsChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JS', 'PHP', 'SQL'],
        datasets: [{
            label: 'Niveau (%)',
            data: [90, 85, 75, 80, 70],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: "white"
                }
            }
        },
        scales: {
            y: {
                ticks: { color: "white" }
            },
            x: {
                ticks: { color: "white" }
            }
        }
    }
});
function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
fetch("https://api.github.com/users/aubinfringant/repos")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("github-projects");

    data.slice(0, 6).forEach(repo => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description ? repo.description : "Projet personnel"}</p>
        <a href="${repo.html_url}" target="_blank">Voir sur GitHub</a>
      `;

      container.appendChild(card);
    });
  });
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
});
document.getElementById("contact-form")
  .addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("TON_SERVICE_ID", "TON_TEMPLATE_ID", this)
      .then(() => alert("Message envoyé avec succès !"));
});
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = "rgba(99,102,241,0.7)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  const count = Math.min(window.innerWidth / 10, 120);

  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}
initParticles();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.update();
    p.draw();
  });

  requestAnimationFrame(animate);
}

animate();
