const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const user = tg.initDataUnsafe?.user;

if (user) {
    document.getElementById("welcome").textContent =
        `Bienvenue ${user.first_name} 👋`;
}

const pages = {
    "🏠": "Accueil",
    "🛍️": "Boutique",
    "📦": "Packs",
    "🛒": "Panier",
    "👤": "Profil"
};

const title = document.querySelector(".services h2");

document.querySelectorAll(".bottom-nav button").forEach(button => {
    button.addEventListener("click", () => {

        const icon = button.textContent.trim().split("\n")[0];

        if (pages[icon]) {
            title.textContent = pages[icon];
        }

        tg.HapticFeedback.impactOccurred("light");
    });
});
// ===== Splash Screen =====

window.addEventListener("load", () => {

    const splash = document.getElementById("splash");

    if (!splash) return;

    setTimeout(() => {

        splash.style.transition = "opacity .8s ease";
        splash.style.opacity = "0";

        setTimeout(() => {
            splash.remove();
        }, 800);

    }, 2000);

});