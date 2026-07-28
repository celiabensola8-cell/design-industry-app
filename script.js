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