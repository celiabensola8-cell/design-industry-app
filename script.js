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