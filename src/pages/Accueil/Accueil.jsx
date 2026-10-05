import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { projets } from '../../data/projets'
import Contact from '../../components/Contact/Contact'
import CadreNavigateur from '../../components/CadreNavigateur/CadreNavigateur'
import { useRevele } from '../../hooks/useRevele'

// Disposition de chaque projet sur l'accueil (voir .projet-ligne dans _composants.scss)
const DISPOSITIONS = {
  cockpit: 'vedette',
  'nina-carducci': 'chiffres',
  kasa: 'image-texte',
}

const cockpit = projets.find((projet) => projet.slug === 'cockpit')

// « 65 → 96 » : la flèche est masquée aux lecteurs d'écran, qui lisent « 65 à 96 »
function Fleche() {
  return (
    <>
      {' '}<span aria-hidden="true">→</span><span className="sr-only"> à</span>{' '}
    </>
  )
}

function Ecart({ valeur }) {
  if (valeur === '=') {
    return (
      <span className="score__ecart">
        <span aria-hidden="true">=</span><span className="sr-only"> inchangé</span>
      </span>
    )
  }
  return <span className="score__ecart">{valeur}</span>
}

function Chiffres({ chiffres }) {
  return (
    <div className="chiffres">
      <dl className="chiffres__scores">
        {chiffres.scores.map((score, rang) => (
          // Les {' '} gardent des mots séparés dans le texte extrait de la page
          <div key={score.libelle} className="score revele" style={{ '--rang': rang }}>
            <dt className="score__libelle">{score.libelle}</dt>{' '}
            <dd className="score__valeurs">
              <span className="score__avant">{score.avant}<Fleche /></span>
              <span className="score__apres">{score.apres}</span>{' '}
              <Ecart valeur={score.ecart} />{' '}
            </dd>
          </div>
        ))}
      </dl>

      <ul className="chiffres__faits">
        {chiffres.faits.map((fait, rang) => (
          <li key={fait.libelle} className="fait revele" style={{ '--rang': rang }}>
            <span className="fait__nombre">{fait.nombre}</span>{' '}
            <span className="fait__libelle">
              {fait.libelle}
              {fait.avant && (
                <> : {fait.avant}<Fleche />{fait.apres}</>
              )}
            </span>{' '}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Accueil() {
  useRevele()

  return (
    <>
      <Helmet>
        <title>Corentin Leroy - Développeur web full stack — Grenoble</title>
        <meta
          name="description"
          content="Développeur web full stack à Grenoble. Applications complètes du back à l’interface, testées et documentées. Python, FastAPI, React, accessibilité."
        />
      </Helmet>

      <section className="section section--serre conteneur hero">
        <div className="hero__texte">
          {/* Un seul nœud texte avec une vraie espace : le retour à la ligne
              vient de la largeur de colonne, jamais de deux blocs collés */}
          <h1 className="hero__titre">Corentin Leroy</h1>
          <div className="hero__corps">
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
          </div>
        </div>

        {/* Visuel décoratif : la même capture est décrite plus bas, dans Cockpit */}
        <div className="hero__visuel" aria-hidden="true">
          <CadreNavigateur largeur={cockpit.imageLargeur} hauteur={cockpit.imageHauteur}>
            <img
              src={cockpit.image}
              alt=""
              width={cockpit.imageLargeur}
              height={cockpit.imageHauteur}
              fetchPriority="high"
            />
          </CadreNavigateur>
        </div>
      </section>

      <section id="projets" className="section section--serre section--filet conteneur revele">
        <h2 className="titre-section">Projets</h2>

        <ul className="projets-liste">
          {projets.map((projet) => {
            const disposition = DISPOSITIONS[projet.slug] ?? 'image-texte'
            return (
              <li key={projet.slug}>
                <article
                  className={`projet-ligne projet-ligne--${disposition}${disposition === 'chiffres' ? ' bande' : ''}`}
                >
                  <div className="projet-ligne__texte">
                    <h3 className="projet-ligne__titre">
                      <Link to={`/projets/${projet.slug}`} className="projet-ligne__lien">
                        {projet.titre}
                      </Link>
                    </h3>
                    <p className="projet-ligne__resume">{projet.resume}</p>
                    <ul className="projet-ligne__etiquettes">
                      {projet.stack.map((techno) => (
                        <li key={techno} className="etiquette">{techno}</li>
                      ))}
                    </ul>
                  </div>

                  {disposition === 'vedette' && (
                    <CadreNavigateur
                      className="projet-ligne__cadre"
                      largeur={projet.imageLargeur}
                      hauteur={projet.imageHauteur}
                    >
                      <img
                        src={projet.image}
                        alt={projet.imageAlt}
                        width={projet.imageLargeur}
                        height={projet.imageHauteur}
                        loading="lazy"
                      />
                    </CadreNavigateur>
                  )}

                  {disposition === 'chiffres' && <Chiffres chiffres={projet.chiffres} />}

                  {disposition === 'image-texte' && (
                    <figure className="projet-ligne__visuel">
                      <img
                        src={projet.image}
                        alt={projet.imageAlt}
                        width={projet.imageLargeur}
                        height={projet.imageHauteur}
                        loading="lazy"
                      />
                    </figure>
                  )}
                </article>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="section section--serre section--filet conteneur revele">
        <h2 className="titre-section">Compétences</h2>

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

      <div className="section section--serre section--filet conteneur duo">
        <section className="revele">
          <h2 className="titre-section">D’où je viens</h2>

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

        <section id="contact" className="revele">
          <h2 className="titre-section">Contact</h2>
          <Contact />
        </section>
      </div>
    </>
  )
}

export default Accueil