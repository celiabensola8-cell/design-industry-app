let panier = [];

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function afficherPanier() {

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    panier.forEach((article, index) => {

        const prix = parseFloat(article.prix.replace(/[^\d.,]/g, "").replace(",", "."));

        total += prix;

        cartItems.innerHTML += `
            <div class="card">
                <h3>${article.titre}</h3>
                <p>${article.prix}</p>
                <button onclick="supprimerArticle(${index})">
                    ❌ Supprimer
                </button>
            </div>
        `;
    });

    cartTotal.textContent = `Total : ${total.toFixed(2)} €`;
}

function supprimerArticle(index) {
    panier.splice(index, 1);
    afficherPanier();
}

const addCartBtn = document.getElementById("addCartBtn");

if (addCartBtn) {
    addCartBtn.onclick = () => {

        panier.push({
            titre: document.getElementById("productTitle").textContent,
            prix: document.getElementById("productPrice").textContent
        });

        afficherPanier();

        Telegram.WebApp.showAlert("🛒 Produit ajouté au panier !");
    };
}