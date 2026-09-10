import { Helmet } from 'react-helmet-async'

function APropos() {
  return (
    <article className="section conteneur">
      <Helmet>
        <title>À propos — Corentin Leroy, développeur web à Grenoble</title>
        <meta name="description" content="À rédiger." />
      </Helmet>

      <h1>À propos</h1>

      <div className="lecture">
        <p>Pitch à rédiger.</p>
      </div>

      <section className="lecture">
        <h2>Parcours</h2>
        <p>À rédiger.</p>
      </section>
    </article>
  )
}

export default APropos