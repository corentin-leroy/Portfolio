import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function APropos() {
  return (
    <article className="section conteneur">
      <Helmet>
        <title>À propos - Corentin Leroy, développeur web à Grenoble</title>
        <meta
          name="description"
          content="Développeur web full stack basé à Grenoble. Formation OpenClassrooms, bases en mathématiques et informatique, projets front et back livrés en production."
        />
      </Helmet>

      <h1>À propos</h1>

      <div className="lecture prose">
        <p className="prose__chapo">
          Je suis Corentin Leroy, développeur web full stack à Grenoble. Ce qui
          me plaît dans ce métier, c’est de pouvoir matérialiser une idée : la
          distance entre « et si on faisait ça » et quelque chose qui tourne
          vraiment est plus courte ici que partout ailleurs.
        </p>

        <h2>D’où je viens</h2>
        <p>
          J’ai commencé par des études de mathématiques et d’informatique à
          l’Université Grenoble Alpes. C’était très théorique, sans les outils
          d’aujourd’hui pour mâcher le travail, et ça m’a donné deux choses que
          j’utilise encore tous les jours : de la logique algorithmique, et
          l’habitude de décomposer un problème avant de le résoudre. C’est aussi
          là que j’ai appris Python, qui est resté mon langage de prédilection
          côté serveur. J’ai ensuite suivi la formation Développeur Web
          d’OpenClassrooms pour passer de la théorie à la pratique : huit projets
          livrés, du front statique à l’API sécurisée.
        </p>

        <h2>Comment je travaille</h2>
        <p>
          Face à un bug, je procède par élimination, j’isole les hypothèses
          jusqu’à ce qu’il n’en reste qu’une. Face à une fonctionnalité que je ne
          sais pas encore faire, je croise les sources jusqu’à comprendre la
          logique sous-jacente, en m’appuyant sur l’IA comme accélérateur plutôt
          que comme réponse.
        </p>

        <blockquote className="prose__exergue">
          Ce qui compte est de comprendre pourquoi une solution marche, pas
          seulement qu’elle marche.
        </blockquote>

        <h2>Le projet qui m’a le plus appris</h2>
        <p>
          Le projet qui m’a le plus fait progresser est{' '}
          <Link to="/projets/cockpit" className="lien">Cockpit</Link>,
          une application de suivi de candidatures que j’ai conçue, développée et
          déployée seul. L’écart est considérable entre suivre le cahier des
          charges d’un projet de formation et devoir tout décider soi-même : le
          schéma de données, la gestion des sessions, ce qu’on teste, ce qu’on
          refuse de faire pour des raisons de sécurité. C’est là que j’ai appris
          le plus, et c’est le projet dont je peux défendre chaque ligne.
        </p>

        <h2>Ce que je cherche</h2>
        <p>
          Je cherche aujourd’hui un poste de développeur, en CDI ou en CDD, dans
          une équipe où je pourrai apprendre au contact de personnes plus
          expérimentées et prendre progressivement en charge des sujets complets.
          PHP est ma prochaine priorité d’apprentissage : il revient dans une
          grande partie des offres de la région grenobloise, et venant de Python
          et de JavaScript, c’est un terrain que je sais aborder.
        </p>
      </div>
    </article>
  )
}

export default APropos