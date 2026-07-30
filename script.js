// ===========================
// DESIGN INDUSTRY V3
// ===========================

const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
}

window.addEventListener("load", () => {

    // Message de bienvenue
    const welcome = document.getElementById("welcome");

    if (tg && tg.initDataUnsafe?.user && welcome) {
        welcome.textContent =
            `Bienvenue ${tg.initDataUnsafe.user.first_name} 👋`;
    }

    // Splash Screen
    const splash = document.getElementById("splash");
    const app = document.getElementById("app");

    setTimeout(() => {

        if (splash) {
            splash.style.opacity = "0";

            setTimeout(() => {
                splash.remove();
                if (app) {
                    app.classList.remove("hidden");
                }
            }, 700);
        }

    }, 2000);

    // Boutons
    document.querySelectorAll(".btn").forEach(btn => {

        btn.addEventListener("click", () => {

            if (tg?.HapticFeedback) {
                tg.HapticFeedback.impactOccurred("light");
            }

        });

    });

});
// ===== Fenêtre de commande =====

const orderBtn = document.getElementById("orderBtn");
const orderModal = document.getElementById("orderModal");
const closeModal = document.getElementById("closeModal");

if (orderBtn && orderModal) {
    orderBtn.addEventListener("click", () => {
        orderModal.classList.remove("hidden");

        if (tg?.HapticFeedback) {
            tg.HapticFeedback.impactOccurred("medium");
        }
    });
}

if (closeModal && orderModal) {
    closeModal.addEventListener("click", () => {
        orderModal.classList.add("hidden");
    });
}
const pages = document.querySelectorAll(".page");

function showPage(id) {
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

document.querySelector(".bottom-nav button:nth-child(1)").onclick = () => showPage("homePage");
document.querySelector(".bottom-nav button:nth-child(2)").onclick = () => showPage("shopPage");
document.querySelector(".bottom-nav button:nth-child(3)").onclick = () => showPage("packsPage");
document.querySelector(".bottom-nav button:nth-child(4)").onclick = () => showPage("cartPage");
document.querySelector(".bottom-nav button:nth-child(5)").onclick = () => showPage("profilePage");

// Boutons de la page d'accueil
document.getElementById("shopBtn")?.addEventListener("click", () => {
    showPage("shopPage");
});

document.getElementById("packsBtn")?.addEventListener("click", () => {
    showPage("packsPage");
});

document.getElementById("homeBtn")?.addEventListener("click", () => {
    showPage("homePage");
});

document.getElementById("profileBtn")?.addEventListener("click", () => {
    showPage("profilePage");
});

document.getElementById("cartBtn")?.addEventListener("click", () => {
    showPage("cartPage");
});