class Bibliotheque {

    constructor() {

        this.livres = [];

        this.charger();

    }

    ajouterLivre(livre) {

        this.livres.push(livre);

        this.sauvegarder();

    }

    supprimerLivre(index) {

        this.livres.splice(index, 1);

        this.sauvegarder();

    }

    changerEtat(index) {

        this.livres[index].lu = !this.livres[index].lu;

        this.sauvegarder();

    }

    sauvegarder() {

        // JSON.stringify transforme le tableau d'objets en texte,
        // seul format que localStorage sait stocker.
        localStorage.setItem("livres", JSON.stringify(this.livres));

    }

    charger() {

        const donnees = localStorage.getItem("livres");

        // localStorage renvoie null si la clé n'existe pas encore
        // (par exemple lors de la toute première visite).
        if (donnees) {

            this.livres = JSON.parse(donnees);

        }

    }

}

export default Bibliotheque;