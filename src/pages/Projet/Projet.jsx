import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { trouverProjet } from '../../data/projets'
import './Projet.scss'

const RUBRIQUES = [
  { cle: 'contexte', titre: 'Contexte' },
  { cle: 'objectifs', titre: 'Objectifs' },
  { cle: 'stackTechnique', titre: 'Stack technique' },
  { cle: 'competences', titre: 'Compétences développées' },
  { cle: 'resultats', titre: 'Résultats et impact' },
  { cle: 'perspectives', titre: "Perspectives d'amélioration" },
]

function Projet() {
  const { slug } = useParams()
  const projet = trouverProjet(slug)

  if (!projet) return <Navigate to="/introuvable" replace />

  return (
    <article className="section conteneur projet">
      <Helmet>
        <title>{projet.titre} — Corentin Leroy</title>
        <meta name="description" content={projet.resume} />
      </Helmet>

      <p className="projet__retour">
        <Link to="/#projets" className="lien">Retour aux projets</Link>
      </p>

      <h1>{projet.titre}</h1>
      <p className="projet__resume lecture">{projet.resume}</p>

      <ul className="projet__etiquettes">
        {projet.stack.map((techno) => (
          <li key={techno} className="etiquette">{techno}</li>
        ))}
      </ul>

      <p className="projet__actions">
        {projet.urlDemo && (
          <a href={projet.urlDemo} className="bouton bouton--plein"
             target="_blank" rel="noopener noreferrer">
            Voir la démo
          </a>
        )}
        {projet.urlRepo && (
          <a href={projet.urlRepo} className="bouton bouton--contour"
             target="_blank" rel="noopener noreferrer">
            Voir le code
          </a>
        )}
      </p>

      {RUBRIQUES.map(({ cle, titre }) =>
        projet[cle] ? (
          <section key={cle} className="projet__rubrique lecture">
            <h2>{titre}</h2>
            <p>{projet[cle]}</p>
          </section>
        ) : null
      )}
    </article>
  )
}

export default Projet