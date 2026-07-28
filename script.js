const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

const welcome = document.getElementById("welcome");

if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
    const user = tg.initDataUnsafe.user;
    welcome.innerHTML = `👋 Bonjour <b>${user.first_name}</b><br>Bienvenue dans votre studio de création graphique.`;
}

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        tg.HapticFeedback.impactOccurred("light");
    });
});