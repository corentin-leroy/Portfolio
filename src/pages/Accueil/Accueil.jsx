import { Helmet } from 'react-helmet-async'

function Accueil() {
  return (
    <>
      <Helmet>
        <title>Corentin Leroy — Développeur web full stack — Grenoble</title>
        <meta name="description" content="À rédiger." />
      </Helmet>

      <section className="section conteneur">
        <h1>Corentin Leroy</h1>
      </section>

      <section id="projets" className="section conteneur">
        <h2>Projets</h2>
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