import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { projets } from '../../data/projets'
import Contact from '../../components/Contact/Contact'

function Accueil() {
  return (
    <>
      <Helmet>
        <title>Corentin Leroy - Développeur web full stack — Grenoble</title>
        <meta
          name="description"
          content="Développeur web full stack à Grenoble. Applications complètes du back à l’interface, testées et documentées. Python, FastAPI, React, accessibilité."
        />
      </Helmet>

      <section className="section conteneur hero">
        <h1 className="hero__titre">Corentin Leroy</h1>
        <p className="hero__role">Développeur web full stack - Grenoble</p>
        <p className="hero__accroche lecture">
          Je construis des applications web complètes, du schéma de base de
          données à l’interface. Je code, je teste, je déploie, et je documente
          ce que je fais, y compris ce qui ne marche pas encore.
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

        <div className="competences">
          <article className="competences__groupe">
            <h3>Back-end et données</h3>
            <ul className="competences__liste">
              <li className="etiquette">Python</li>
              <li className="etiquette">FastAPI</li>
              <li className="etiquette">SQL</li>
              <li className="etiquette">PostgreSQL</li>
              <li className="etiquette">Node.js</li>
              <li className="etiquette">Express</li>
              <li className="etiquette">MongoDB</li>
            </ul>
            <p className="competences__preuve">
              Mis en œuvre sur{' '}
              <Link to="/projets/cockpit" className="lien">Cockpit</Link>.
            </p>
          </article>

          <article className="competences__groupe">
            <h3>Front-end</h3>
            <ul className="competences__liste">
              <li className="etiquette">HTML</li>
              <li className="etiquette">CSS</li>
              <li className="etiquette">Sass</li>
              <li className="etiquette">JavaScript</li>
              <li className="etiquette">React</li>
              <li className="etiquette">React Router</li>
            </ul>
            <p className="competences__preuve">
              Mis en œuvre sur{' '}
              <Link to="/projets/kasa" className="lien">Kasa</Link> et sur ce site.
            </p>
          </article>

          <article className="competences__groupe">
            <h3>Qualité et outillage</h3>
            <ul className="competences__liste">
              <li className="etiquette">Git</li>
              <li className="etiquette">Tests (pytest)</li>
              <li className="etiquette">Accessibilité WCAG</li>
              <li className="etiquette">Optimisation des performances</li>
              <li className="etiquette">SEO technique</li>
            </ul>
            <p className="competences__preuve">
              Mis en œuvre sur{' '}
              <Link to="/projets/nina-carducci" className="lien">Nina Carducci</Link>{' '}
              et <Link to="/projets/cockpit" className="lien">Cockpit</Link>.
            </p>
          </article>
        </div>
      </section>

      <section className="section conteneur">
        <h2>D’où je viens</h2>

        <div className="lecture prose">
          <p>
            Des études de mathématiques et d’informatique à l’Université Grenoble
            Alpes m’ont donné les fondations : logique algorithmique, Python, et
            l’habitude de décomposer un problème avant de le résoudre. La
            formation Développeur Web d’OpenClassrooms m’a fait passer de la
            théorie à la pratique, avec huit projets livrés du front statique à
            l’API sécurisée.
          </p>
          <p>
            <Link to="/a-propos" className="lien">Le parcours complet</Link>
          </p>
        </div>
      </section>

      <section id="contact" className="section conteneur">
        <h2>Contact</h2>
        <Contact />
      </section>
    </>
  )
}

export default Accueil