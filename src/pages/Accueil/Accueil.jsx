import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { projets } from '../../data/projets'

function Accueil() {
  return (
    <>
      <Helmet>
        <title>Corentin Leroy - Développeur web full stack - Grenoble</title>
        <meta name="description" content="À rédiger." />
      </Helmet>

      <section className="section conteneur hero">
        <h1 className="hero__titre">Corentin Leroy</h1>
        <p className="hero__role">Développeur web full stack — Grenoble</p>
        <p className="hero__accroche lecture">
          Je construis des applications web complètes, du schéma de base de données
          à l’interface. Je code, je teste, je déploie, et je documente ce que je
          fais, y compris ce qui ne marche pas encore.
        </p>
        <p className="hero__actions">
          <a href="#projets" className="bouton bouton--plein">Voir mes projets</a>
          <Link to="/a-propos" className="bouton bouton--contour">En savoir plus</Link>
        </p>
      </section>

      <section id="projets" className="section conteneur">
        <h2>Projets</h2>

        <ul className="grille-projets">
          {projets.map((projet) => (
            <li key={projet.slug}>
              <article className="carte">
                <h3 className="carte__titre">
                  <Link to={`/projets/${projet.slug}`} className="carte__lien">
                    {projet.titre}
                  </Link>
                </h3>
                <p className="carte__resume">{projet.resume}</p>
                <ul className="carte__etiquettes">
                  {projet.stack.map((techno) => (
                    <li key={techno} className="etiquette">{techno}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="section conteneur">
        <h2>Compétences</h2>
      </section>

      <section className="section conteneur">
        <h2>Parcours</h2>
      </section>

      <section id="contact" className="section conteneur">
        <h2>Contact</h2>
      </section>
    </>
  )
}

export default Accueil