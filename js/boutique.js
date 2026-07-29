// ===== Boutique Design Industry =====

let produitSelectionne = null;

const produitsMap = {
  logo: {
    nom: "🎨 Logo Premium",
    prix: "15 €",
    delai: "30 à 60 min",
    description: "✔ 3 propositions\n✔ PNG + SVG + PDF\n✔ Modifications incluses"
  },
  flyer: {
    nom: "📄 Flyer",
    prix: "10 €",
    delai: "30 à 60 min",
    description: "✔ Format HD\n✔ Prêt pour impression"
  },
  banniere: {
    nom: "🖼️ Bannière",
    prix: "12 €",
    delai: "30 à 60 min",
    description: "✔ Facebook\n✔ Instagram\n✔ Discord"
  }
};

function afficherProduit(id){

    produitSelectionne = produitsMap[id];

    if(!produitSelectionne) return;

    document.getElementById("productTitle").textContent =
        produitSelectionne.nom;

    document.getElementById("productPrice").textContent =
        "💰 Prix : " + produitSelectionne.prix;

    document.getElementById("productDelay").textContent =
        "⏱ Livraison : " + produitSelectionne.delai;

    document.getElementById("productDescription").innerText =
        produitSelectionne.description;

    document.getElementById("productModal")
        .classList.remove("hidden");
}

document.getElementById("closeProduct")
.addEventListener("click",()=>{

    document.getElementById("productModal")
    .classList.add("hidden");

});