// ==========================
// DESIGN INDUSTRY V4
// ==========================

const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
}

window.addEventListener("load", () => {

    // Splash Screen
    const splash = document.getElementById("splash");
    const app = document.getElementById("app");

    setTimeout(() => {
        if (splash) splash.remove();

        if (app) {
            app.classList.remove("hidden");
        }
    }, 2000);

    // Bienvenue Telegram
    const welcome = document.getElementById("welcome");
    const profileName = document.getElementById("profileName");

    if (tg?.initDataUnsafe?.user) {
        const name = tg.initDataUnsafe.user.first_name;

        if (welcome) {
            welcome.textContent = `Bienvenue ${name} 👋`;
        }

        if (profileName) {
            profileName.textContent = name;
        }
    }
});

// ==========================
// Navigation
// ==========================

const pages = document.querySelectorAll(".page");

function showPage(id) {

    pages.forEach(page => page.classList.remove("active"));

    document.getElementById(id)?.classList.add("active");

}

document.querySelectorAll(".bottom-nav button").forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".bottom-nav button")
            .forEach(b => b.classList.remove("active"));

        button.classList.add("active");

        showPage(button.dataset.page);

        tg?.HapticFeedback?.impactOccurred("light");

    });

});

// Bouton Boutique
document
.getElementById("shopBtn")
?.addEventListener("click", () => showPage("shop"));

// ==========================
// Modal commande
// ==========================

const orderBtn = document.getElementById("orderBtn");
const orderModal = document.getElementById("orderModal");
const closeModal = document.getElementById("closeModal");

orderBtn?.addEventListener("click", () => {

    orderModal?.classList.remove("hidden");

    tg?.HapticFeedback?.impactOccurred("medium");

});

closeModal?.addEventListener("click", () => {

    orderModal?.classList.add("hidden");

});
// ==========================
// CIEL ÉTOILÉ ANIMÉ
// ==========================

const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = [];

for(let i=0;i<900;i++){

    stars.push({

    x: Math.random() * canvas.width,

    y: Math.random() * canvas.height,

    r: Math.random() * 2.8 + 0.3,

    a: Math.random(),

    s: (Math.random() * 0.03) + 0.004,

    layer: Math.random(),

    hue: 190 + Math.random() * 70

});

}

const shootingStars=[];

function createShootingStar(){

    shootingStars.push({

        x:Math.random()*canvas.width,

        y:Math.random()*250,

        vx:12,

        vy:6,

        life:0

    });

}

setInterval(createShootingStar,7000);

function animateSpace(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(star=>{

        star.a+=star.s;

        if(star.a>1||star.a<0){

            star.s*=-1;

        }

        ctx.beginPath();

ctx.fillStyle = `hsla(${star.hue},100%,90%,${star.a})`;

        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);

        ctx.fill();

    });

    shootingStars.forEach((s,index)=>{

        ctx.beginPath();

        ctx.strokeStyle="rgba(255,255,255,.9)";

        ctx.lineWidth=2;

        ctx.moveTo(s.x,s.y);

        ctx.lineTo(s.x-90,s.y-45);

        ctx.stroke();

        s.x+=s.vx;

        s.y+=s.vy;

        s.life++;

        if(s.life>35){

            shootingStars.splice(index,1);

        }

    });

    requestAnimationFrame(animateSpace);

}

animateSpace();