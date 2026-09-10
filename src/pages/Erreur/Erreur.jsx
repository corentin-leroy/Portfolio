import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

function Erreur() {
  return (
    <section className="section conteneur">
      <Helmet>
        <title>Page introuvable — Corentin Leroy</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <h1>Page introuvable</h1>
      <p className="lecture">
        Cette page n’existe pas ou a été déplacée.
      </p>
      <p>
        <Link to="/" className="bouton bouton--contour">Retour à l’accueil</Link>
      </p>
    </section>
  )
}

export default Erreur