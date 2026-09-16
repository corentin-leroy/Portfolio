# Portfolio - Corentin Leroy

Site portfolio personnel présentant trois projets de développement web, réalisé
dans le cadre du parcours Développeur Web d'OpenClassrooms.

**En ligne :** https://corentin-leroy.vercel.app

## Stack

React 19, Vite, React Router, Sass. Déploiement sur Vercel.

## Installation

```bash
npm install
npm run dev
```

Le site est servi sur `http://localhost:5173`.

Autres commandes : `npm run build` pour la production, `npm run lint` pour
l'analyse statique.

## Structure

```
public/images/     Visuels des projets et image de partage
src/components/    Composants réutilisables (en-tête, pied de page, formulaire)
src/pages/         Une page par route
src/data/          Contenu des fiches projet
src/styles/        Variables, mixins, composants, styles globaux
```

Le contenu des projets est centralisé dans `src/data/projets.js`. Les pages
projet sont générées à partir d'une route unique avec paramètre, chaque fiche
suivant les six mêmes rubriques.

## Choix techniques

**React + Vite plutôt qu'un générateur statique.** Astro aurait été plus adapté
à un site de contenu, notamment pour le rendu des métadonnées côté serveur. J'ai
retenu React pour tenir le délai avec une stack que je maîtrise, en acceptant
la limite qui en découle : les balises de partage social sont écrites en dur
dans `index.html` et ne varient pas par page.

**Métadonnées sans bibliothèque.** React 19 remonte nativement les balises
`title` et `meta` dans le `head`. `react-helmet-async` s'est révélé inopérant
avec cette version et a été retiré.

**Palette validée par mesure.** Chaque couple de couleurs a été vérifié au
contrôleur de contraste WebAIM avant intégration. Les ratios obtenus sont
documentés en commentaire dans `src/styles/_variables.scss`. La couleur d'accent
initiale atteignait 3,19:1 et a été assombrie pour franchir le seuil AA.

**Aucune information portée par la couleur seule.** Les liens de contenu sont
soulignés, les étiquettes de technologie portent du texte, l'état actif de la
navigation combine couleur et graisse, et le focus clavier est matérialisé par
un contour visible sur tous les éléments interactifs.

**Polices auto-hébergées.** Inter et Outfit sont servies depuis le domaine du
site via `@fontsource`, sans requête vers un service tiers.

**Formulaire de contact sans back-end.** L'envoi passe par Web3Forms. Les
champs sont associés à leurs libellés, la validation est gérée côté client avec
des messages liés par `aria-describedby`, et un champ piège filtre les envois
automatisés.

## Résultats

Lighthouse : 100 en performance, accessibilité, bonnes pratiques et SEO sur la
page d'accueil en production.

WAVE : aucune erreur.

## Auteur

Corentin Leroy | [GitHub](https://github.com/corentin-leroy) ·
[LinkedIn](https://www.linkedin.com/in/corentin-leroy-b19152400/)