# 📚 Ma Bibliothèque

Petite application web pour gérer une liste de livres : ajout, marquage "lu / non lu", suppression, avec sauvegarde automatique dans le navigateur (`localStorage`).

## Fonctionnalités

- Ajouter un livre (titre + auteur)
- Marquer un livre comme lu / non lu
- Supprimer un livre
- Les livres restent enregistrés même après fermeture ou rechargement de la page (`localStorage`)

## Structure du projet

```
Bibliothèque/
├── index.html          # Structure de la page (formulaire + liste des livres)
├── css/
│   └── style.css        # Thème visuel "bibliothèque" (bois/marron)
└── js/
    ├── Livre.js          # Classe représentant un livre (titre, auteur, lu)
    ├── Bibliotheque.js   # Classe gérant la liste des livres + sauvegarde localStorage
    └── main.js           # Lien entre l'interface (HTML) et la logique (classes JS)
```

## Fonctionnement du code

- **`Livre.js`** : un livre est un simple objet avec trois propriétés (`titre`, `auteur`, `lu`).
- **`Bibliotheque.js`** : contient le tableau de tous les livres et les actions possibles
  (`ajouterLivre`, `supprimerLivre`, `changerEtat`). Chaque action appelle `sauvegarder()`,
  qui transforme le tableau en texte (`JSON.stringify`) et l'enregistre dans `localStorage`.
  À la création de la bibliothèque, `charger()` relit ce texte (`JSON.parse`) pour retrouver
  les livres enregistrés précédemment.
- **`main.js`** : récupère les éléments du formulaire, écoute les clics, et met à jour
  l'affichage (`afficherLivres`) à chaque changement.

## Utiliser le projet

Aucune installation nécessaire : ouvrez simplement `index.html` dans un navigateur.

> Remarque : certains navigateurs restreignent les modules JS (`type="module"`) en ouverture
> directe via `file://`. Si la page semble ne rien faire, lancez un petit serveur local, par
> exemple :
> ```
> python -m http.server 8000
> ```
> puis ouvrez `http://localhost:8000`.

## Prochaines idées possibles

- Recherche / filtre par titre ou auteur
- Tri (par titre, par statut lu/non lu)
- Export / import de la bibliothèque (fichier JSON)
