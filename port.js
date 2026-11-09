// JavaScript source code
console.log("hope i pass this by 11 59 ahhhh")


window.addEventListener("load", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("show"); 
});

let currentPage = 1;

function nextPage() {
    if (currentPage <= 3) {
        document.querySelector(".page" + currentPage).classList.add("flipped");
        currentPage++;
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        document.querySelector(".page" + currentPage).classList.remove("flipped");
    }
}
function flipCard() {
    const box = document.getElementById("flipBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
}

const text = "Email me at: yourname@email.com";
let i = 0;

// Camera scroll animation
const camera = document.querySelector(".camera-scroll");
const paint = document.querySelector(".paint-scroll");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            camera.classList.add("visible");
            paint.classList.add("visible");// drops in when scrolled to
        } else {
            camera.classList.remove("visible");
            paint.classList.remove("visible");// resets when scrolled away
        }
    });
}, { threshold: 0.3 }); // triggers when 30% of section is visible

observer.observe(document.querySelector("#projects"));








document.querySelectorAll(".film-item").forEach(item => {
    const desc = item.getAttribute("data-desc");
    if (desc) {
        const overlay = document.createElement("div");
        overlay.classList.add("film-desc");
        overlay.textContent = desc;
        item.appendChild(overlay);
    }
});




document.addEventListener("mousemove", (e) => {
    const star = document.createElement("div");
    star.className = "cursor-star";
    star.innerText = "✦";

    star.style.left = e.pageX + "px";
    star.style.top = e.pageY + "px";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 1000);
});






document.addEventListener("click", (e) => {
    for (let i = 0; i < 6; i++) {
        const star = document.createElement("div");
        star.className = "burst-star";
        star.innerText = "★";

        star.style.left = e.pageX + "px";
        star.style.top = e.pageY + "px";

        document.body.appendChild(star);

        const angle = Math.random() * 360;
        const distance = Math.random() * 50;

        star.style.setProperty("--x", Math.cos(angle) * distance + "px");
        star.style.setProperty("--y", Math.sin(angle) * distance + "px");

        setTimeout(() => star.remove(), 600);
    }
});






function createShootingStar() {
    const star = document.createElement("div");
    star.className = "shooting-star";
    star.innerText = "✦";

    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(star);

    star.style.animation = "shoot 1s ease-out forwards";

    setTimeout(() => star.remove(), 1000);
}

// random trigger
setInterval(createShootingStar, 4000);







const symbols = ["✦", "★", "✧", "♡"];

setInterval(() => {
    const el = document.createElement("div");
    el.className = "floaty";
    el.innerText = symbols[Math.floor(Math.random() * symbols.length)];

    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = (10 + Math.random() * 20) + "px";

    document.body.appendChild(el);

    setTimeout(() => el.remove(), 6000);
}, 800);





window.addEventListener("load", () => {
    const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {
        if (!cursor) return; // prevents error
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    document.addEventListener("mousedown", () => {
        if (!cursor) return;
        cursor.style.backgroundImage = "url('cursor2.png')";
    });

    document.addEventListener("mouseup", () => {
        if (!cursor) return;
        cursor.style.backgroundImage = "url('cursor1.png')";
    });
});



const music = document.getElementById("bg-music");

document.addEventListener("click", () => {
    music.volume = 0.3;
    music.play();
}, { once: true });

const clickSFX = document.getElementById("click-sfx");

function playClickSound() {
    clickSFX.currentTime = 0; // allows rapid clicking
    clickSFX.play();
}

// play on ANY click
document.addEventListener("click", playClickSound);




const sections = document.querySelectorAll(".section");

const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.filter = "drop-shadow(0 0 20px rgba(255,255,255,0.4))";
        } else {
            e.target.style.filter = "none";
        }
    });
});

sections.forEach(s => obs.observe(s));










document.querySelectorAll(".polaroid-card, .film-item").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y / rect.height - 0.5) * 10;
        const rotateY = (x / rect.width - 0.5) * -10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});




