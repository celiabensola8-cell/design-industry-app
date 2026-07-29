document.getElementById("checkoutBtn").onclick = () => {

if (panier.length === 0) {
    alert("Votre panier est vide.");
    return;
}

let message = "🛒 Nouvelle commande Design Industry\n\n";

let total = 0;

panier.forEach(item => {
    message += "• " + item.nom + " - " + item.prix + " €\n";
    total += item.prix;
});

message += "\n💰 Total : " + total + " €";

Telegram.WebApp.sendData(message);

};