import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer className="pied">
      <div className="conteneur pied__interieur">
        <p className="pied__mention">© {annee} Corentin Leroy</p>

        <nav aria-label="Liens de bas de page">
          <ul className="pied__liens">
            <li><Link to="/a-propos">À propos</Link></li>
            <li><a href="/#contact">Contact</a></li>
            <li>
              <a href="https://github.com/corentin-leroy"
                 target="_blank" rel="noopener noreferrer">
                GitHub <span className="sr-only">(nouvel onglet)</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/corentin-leroy-b19152400/"
                 target="_blank" rel="noopener noreferrer">
                LinkedIn <span className="sr-only">(nouvel onglet)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer