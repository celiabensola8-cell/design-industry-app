const logoBtn = document.getElementById("logoBtn");

if (logoBtn) {
    logoBtn.addEventListener("click", () => {
        alert(
`🎨 Logo Premium

💰 Prix : 15 €

⏱ Livraison : 30 à 60 min

✔️ 3 propositions
✔️ PNG + SVG + PDF
✔️ Modifications incluses`
        );
    });
}