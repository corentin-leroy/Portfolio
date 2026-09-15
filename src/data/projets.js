export const projets = [
  {
    slug: 'cockpit',
    titre: 'Cockpit',
    resume:
      "Application web de suivi de candidatures, avec une extension Chrome qui capture une offre en un clic depuis n'importe quel site d'emploi.",
    stack: ['React', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Chrome MV3', 'Railway'],
    urlDemo: 'https://cockpit-front-production.up.railway.app/',
    urlRepo: 'https://github.com/corentin-leroy/Cockpit',
    contexte:
      "Pendant ma recherche d'alternance, je suivais mes candidatures dans un tableur qui devenait vite illisible et que je ne pouvais pas mettre à jour depuis une offre ouverte dans le navigateur.",
    objectifs:
      "Construire un SaaS complet, de l'authentification au déploiement, capable de capturer une offre en un clic depuis n'importe quel site d'emploi et de la classer dans un kanban.",
    stackTechnique:
      "React 19 côté client, FastAPI et SQLAlchemy côté serveur, PostgreSQL managé en production et SQLite en développement, extension Chrome en Manifest V3, le tout déployé sur Railway en région européenne.",
    competences:
      "J'ai traité des problèmes que la formation n'aborde pas : la chaîne de propriété des ressources entre utilisateurs, l'expiration des jetons de session, la suppression de compte en cascade au niveau du schéma, et une décision de sécurité que je peux défendre — refuser une URL d'API configurable dans l'extension, parce qu'un champ modifiable devient un canal d'exfiltration du jeton d'authentification.",
    resultats:
      "Application en production avec 36 tests pytest couvrant l'authentification et les règles métier, quatre scénarios d'attaque validés manuellement (énumération de comptes, rejeu de jeton, confusion entre réinitialisation et vérification, contournement des plafonds), design system en tokens CSS conforme WCAG AA et lisible en vision daltonienne.",
    perspectives:
      "Publication de l'extension sur le Chrome Web Store, et suppression de la duplication des tokens CSS dans la popup, aujourd'hui synchronisée à la main.",
  },
  {
    slug: 'nina-carducci',
    titre: 'Nina Carducci',
    resume:
      "Optimisation complète d'un site de photographe existant : performance, accessibilité et référencement, avec des scores Lighthouse mesurés avant et après.",
    stack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Python', 'Schema.org'],
    urlDemo:
      'https://corentin-leroy.github.io/Amelioration-du-site-web-de-Nina-Carducci',
    urlRepo:
      'https://github.com/corentin-leroy/Amelioration-du-site-web-de-Nina-Carducci',
    contexte:
      "Nina Carducci est une photographe professionnelle bordelaise dont le site en ligne était lent, mal référencé et partiellement inaccessible ; la mission consistait à l'optimiser sans en refaire le design.",
    objectifs:
      "Atteindre au moins 90 sur les axes performance, accessibilité et SEO de Lighthouse, mettre en place le référencement local, et corriger les bugs fonctionnels laissés dans le code existant.",
    stackTechnique:
      "HTML, CSS, JavaScript et jQuery sur un code que je n'avais pas écrit, avec un script Python utilisant Pillow pour le traitement par lot des images, et des données structurées Schema.org en JSON-LD.",
    competences:
      "J'ai appris à diagnostiquer dans du code tiers plutôt qu'à construire du neuf : trois bugs corrigés, dont une erreur d'index dans la navigation de la galerie modale qui renvoyait toujours la même image. Sur l'accessibilité, la correction la plus instructive a porté sur le contraste des filtres, où j'ai remplacé la couleur d'origine par un ton plus sombre pour franchir le ratio de 4,5:1 exigé, et sur les libellés du carrousel, où j'ai substitué des attributs aria-label à des éléments masqués visuellement.",
    resultats:
      "Performance de 65 à 96, accessibilité de 68 à 100, SEO de 70 à 100, WAVE sans aucune erreur avec un score AIM de 10 sur 10. Le poids des images est passé de 30,9 Mo à 848,9 Ko, soit une réduction de 94 %, par conversion en WebP et redimensionnement adapté à chaque usage. Le balisage LocalBusiness est validé par l'outil de test des résultats enrichis de Google.",
    perspectives:
      "Automatiser le pipeline de conversion d'images dans le processus de build plutôt que par script manuel, et servir des tailles multiples via srcset pour affiner le gain sur mobile.",
  },
  {
    slug: 'kasa',
    titre: 'Kasa',
    resume:
      "Front-end complet d'une plateforme de location entre particuliers, développé en React à partir de maquettes Figma.",
    stack: ['React', 'React Router', 'Sass', 'Vite'],
    urlDemo: 'https://corentin-leroy.github.io/Kasa/',
    urlRepo: 'https://github.com/corentin-leroy/Kasa',
    contexte:
      "Kasa est une plateforme de location d'appartements entre particuliers dont l'agence refondait le site ; les maquettes Figma m'étaient fournies et j'avais à développer l'intégralité du front en React.",
    objectifs:
      "Livrer une application monopage avec routage côté client, des composants réutilisables entre plusieurs pages et des animations conformes aux maquettes, sans back-end ni appel réseau.",
    stackTechnique:
      "React avec React Router, build Vite, styles en Sass modularisé avec le système @use et une convention BEM, données servies depuis un fichier JSON intégré au bundle.",
    competences:
      "J'ai conçu un composant Collapse générique piloté par un état local et alimenté par children, réutilisé sans variante sur deux pages, avec un contenu maintenu dans le DOM et animé en CSS. J'ai également géré les cas d'erreur du routage : un identifiant de logement absent des données déclenche une redirection vers la page 404 en mode replace, ce qui évite à la fois le crash de rendu et l'empilement de l'URL fautive dans l'historique.",
    resultats:
      "Site complet et fidèle aux maquettes, carrousel à index cyclique dont la navigation disparaît automatiquement quand un logement n'a qu'une photo, aucun écran blanc possible sur URL invalide.",
    perspectives:
      "Rendre les contrôles interactifs accessibles au clavier avec des éléments natifs et les attributs ARIA correspondants, remplacer le plafond de hauteur fixe du Collapse par une solution qui s'adapte au contenu, et factoriser les media queries dupliquées dans un mixin.",
  },
]

export function trouverProjet(slug) {
  return projets.find((projet) => projet.slug === slug)
}