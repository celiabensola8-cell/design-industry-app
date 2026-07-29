let panier = [];

const addCartBtn = document.getElementById("addCartBtn");

if (addCartBtn) {

  addCartBtn.addEventListener("click", () => {

    const produit = {
      titre: document.getElementById("productTitle").textContent,
      prix: document.getElementById("productPrice").textContent,
      delai: document.getElementById("productDelay").textContent
    };

    panier.push(produit);

    Telegram.WebApp.HapticFeedback.notificationOccurred("success");

    Telegram.WebApp.showAlert(
      "🛒 Produit ajouté au panier !\n\nArticles : " + panier.length
    );

    console.log(panier);

  });

}