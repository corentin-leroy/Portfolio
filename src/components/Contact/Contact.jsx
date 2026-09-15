import { useState } from 'react'
import './Contact.scss'

const CLE_ACCES = '310427d3-41d1-4f84-a872-d11bb4a0976f'

function Contact() {
  const [statut, setStatut] = useState('repos')
  const [erreurs, setErreurs] = useState({})

  const valider = (donnees) => {
    const trouvees = {}
    if (!donnees.nom.trim()) trouvees.nom = 'Merci d’indiquer votre nom.'
    if (!donnees.email.trim()) {
      trouvees.email = 'Merci d’indiquer votre adresse e-mail.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donnees.email)) {
      trouvees.email = 'Cette adresse e-mail ne semble pas valide.'
    }
    if (!donnees.message.trim()) {
      trouvees.message = 'Merci d’écrire un message.'
    }
    return trouvees
  }

  const envoyer = async (evenement) => {
    evenement.preventDefault()
    const formulaire = evenement.target
    const donnees = Object.fromEntries(new FormData(formulaire))

    const trouvees = valider(donnees)
    setErreurs(trouvees)
    if (Object.keys(trouvees).length > 0) return

    setStatut('envoi')
    try {
      const reponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_key: CLE_ACCES, ...donnees }),
      })
      const resultat = await reponse.json()
      if (resultat.success) {
        setStatut('succes')
        formulaire.reset()
      } else {
        setStatut('erreur')
      }
    } catch {
      setStatut('erreur')
    }
  }

  return (
    <form className="contact" onSubmit={envoyer} noValidate>
      <p className="contact__champ">
        <label htmlFor="nom">Nom</label>
        <input
          id="nom" name="nom" type="text" autoComplete="name"
          aria-describedby={erreurs.nom ? 'erreur-nom' : undefined}
          aria-invalid={erreurs.nom ? 'true' : undefined}
        />
        {erreurs.nom && (
          <span id="erreur-nom" className="contact__erreur">{erreurs.nom}</span>
        )}
      </p>

      <p className="contact__champ">
        <label htmlFor="email">Adresse e-mail</label>
        <input
          id="email" name="email" type="email" autoComplete="email"
          aria-describedby={erreurs.email ? 'erreur-email' : undefined}
          aria-invalid={erreurs.email ? 'true' : undefined}
        />
        {erreurs.email && (
          <span id="erreur-email" className="contact__erreur">{erreurs.email}</span>
        )}
      </p>

      <p className="contact__champ">
        <label htmlFor="message">Message</label>
        <textarea
          id="message" name="message" rows="6"
          aria-describedby={erreurs.message ? 'erreur-message' : undefined}
          aria-invalid={erreurs.message ? 'true' : undefined}
        />
        {erreurs.message && (
          <span id="erreur-message" className="contact__erreur">{erreurs.message}</span>
        )}
      </p>

      {/* Piège à robots : masqué aux humains, rempli par les bots */}
      <input
        type="checkbox" name="botcheck" className="sr-only"
        tabIndex="-1" autoComplete="off"
      />

      <p>
        <button type="submit" className="bouton bouton--plein" disabled={statut === 'envoi'}>
          {statut === 'envoi' ? 'Envoi en cours…' : 'Envoyer'}
        </button>
      </p>

      <p className="contact__statut" role="status" aria-live="polite">
        {statut === 'succes' && 'Message envoyé. Je vous réponds rapidement.'}
        {statut === 'erreur' && 'L’envoi a échoué. Vous pouvez me joindre sur LinkedIn.'}
      </p>
    </form>
  )
}

export default Contact