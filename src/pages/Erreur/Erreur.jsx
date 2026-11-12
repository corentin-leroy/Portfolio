import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './Erreur.scss'

function Erreur() {
  return (
    <section className="section conteneur erreur">
      <Helmet>
        <title>Page introuvable — Corentin Leroy</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <header className="erreur__entete">
        <p className="erreur__code">Erreur 404</p>
        <h1 className="erreur__titre">Page introuvable</h1>
      </header>
      <p className="erreur__chapo lecture">
        Cette page n’existe pas ou a été déplacée.
      </p>
      <p className="erreur__actions">
        <Link to="/" className="bouton bouton--contour">Retour à l’accueil</Link>
      </p>
    </section>
  )
}

export default Erreur
