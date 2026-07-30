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