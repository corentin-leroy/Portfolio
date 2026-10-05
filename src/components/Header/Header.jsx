import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Moon, Sun } from '@phosphor-icons/react'
import './Header.scss'

const REQUETE_SOMBRE = '(prefers-color-scheme: dark)'

// Thème effectif : le choix explicite (data-theme) sinon la préférence système
const themeEffectif = () =>
  document.documentElement.dataset.theme ??
  (window.matchMedia(REQUETE_SOMBRE).matches ? 'dark' : 'light')

function Header() {
  const classeActive = ({ isActive }) => (isActive ? 'active' : undefined)
  const [theme, setTheme] = useState(themeEffectif)

  // Sans choix explicite, le bouton suit les changements du système
  useEffect(() => {
    const requete = window.matchMedia(REQUETE_SOMBRE)
    const suivre = () => setTheme(themeEffectif())
    requete.addEventListener('change', suivre)
    return () => requete.removeEventListener('change', suivre)
  }, [])

  const basculer = () => {
    const suivant = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = suivant
    try {
      localStorage.setItem('theme', suivant)
    } catch {
      // stockage indisponible : le choix vaut pour cette visite seulement
    }
    setTheme(suivant)
  }

  const sombre = theme === 'dark'

  return (
    <header className="entete">
      <div className="conteneur entete__interieur">
        <Link to="/" className="entete__marque">Corentin Leroy</Link>

        <div className="entete__droite">
          <nav aria-label="Navigation principale">
            <ul className="entete__liens">
              <li>
                <NavLink to="/" end className={classeActive}>Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/a-propos" className={classeActive}>À propos</NavLink>
              </li>
            </ul>
          </nav>

          {/* Interrupteur : nom fixe « Thème sombre » + aria-pressed.
              L'icône montre le thème vers lequel on bascule (lune en clair,
              soleil en sombre) ; la clé relance la petite rotation d'entrée. */}
          <button
            type="button"
            className="entete__theme"
            onClick={basculer}
            aria-pressed={sombre}
            title={sombre ? 'Passer au thème clair' : 'Passer au thème sombre'}
          >
            <span key={theme} className="entete__icone" aria-hidden="true">
              {sombre ? <Sun size={20} weight="bold" /> : <Moon size={20} weight="bold" />}
            </span>
            <span className="sr-only">Thème sombre</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
