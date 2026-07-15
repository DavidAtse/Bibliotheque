import Livre from "./Livre.js";
import Bibliotheque from "./Bibliotheque.js";

const titreInput = document.getElementById("titreLivre");
const auteurInput = document.getElementById("auteurLivre");
const bouton = document.getElementById("ajouterLivre");
const listeLivres = document.getElementById("listeLivres");

const bibliotheque = new Bibliotheque();

// Au chargement de la page, "bibliotheque" contient déjà les livres
// relus depuis le localStorage (voir Bibliotheque.js -> charger()).
// Il faut donc les afficher tout de suite, sans attendre un clic.
afficherLivres();

function afficherLivres() {

    listeLivres.innerHTML = "";

    bibliotheque.livres.forEach((livre, index) => {

        const carte = document.createElement("div");
        carte.classList.add("livre");

        carte.innerHTML = `

            <h2>${livre.titre}</h2>

            <p>Auteur : ${livre.auteur}</p>

            <p>${livre.lu ? "✅ Lu" : "❌ Non lu"}</p>

            <div class="actions">

                <button class="lu">
                    ${livre.lu ? "Non lu" : "Lu"}
                </button>

                <button class="supprimer">
                    Supprimer
                </button>

            </div>

        `;

        carte.querySelector(".lu").addEventListener("click", () => {

            bibliotheque.changerEtat(index);

            afficherLivres();

        });

        carte.querySelector(".supprimer").addEventListener("click", () => {

            bibliotheque.supprimerLivre(index);

            afficherLivres();

        });

        listeLivres.appendChild(carte);

    });

}

bouton.addEventListener("click", () => {

    const titre = titreInput.value.trim();
    const auteur = auteurInput.value.trim();

    if (titre === "" || auteur === "") {

        alert("Veuillez remplir tous les champs.");

        return;

    }

    const livre = new Livre(titre, auteur);

    bibliotheque.ajouterLivre(livre);

    afficherLivres();

    titreInput.value = "";
    auteurInput.value = "";

});