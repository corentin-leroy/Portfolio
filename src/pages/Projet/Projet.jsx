import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { trouverProjet } from '../../data/projets'
import './Projet.scss'
import { useEffect } from 'react'

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
  useEffect(() => {
    if (projet) document.title = `${projet.titre} - Corentin Leroy`
  }, [projet])

  if (!projet) return <Navigate to="/introuvable" replace />

  const rendreRubrique = ({ cle, titre }) =>
    projet[cle] ? (
      <section key={cle} className="projet__rubrique lecture">
        <h2>{titre}</h2>
        <p>{projet[cle]}</p>
      </section>
    ) : null

  return (
    <article className="section conteneur projet">
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
            Voir la démo <span className="sr-only">(nouvel onglet)</span>
          </a>
        )}
        {projet.urlExtension && (
          <a href={projet.urlExtension} className="bouton bouton--contour"
             target="_blank" rel="noopener noreferrer">
            Installer l’extension <span className="sr-only">(nouvel onglet)</span>
          </a>
        )}
        {projet.urlRepo && (
          <a href={projet.urlRepo} className="bouton bouton--contour"
             target="_blank" rel="noopener noreferrer">
            Voir le code <span className="sr-only">(nouvel onglet)</span>
          </a>
        )}
      </p>

      {RUBRIQUES.slice(0, 2).map(rendreRubrique)}

      {projet.image && (
        <figure className="projet__visuel">
          <img
            src={projet.image}
            alt={projet.imageAlt}
            width="1200"
            height="750"
            loading="lazy"
          />
        </figure>
      )}

      {RUBRIQUES.slice(2).map(rendreRubrique)}
    </article>
  )
}

export default Projet