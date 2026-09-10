import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer() {
  const annee = new Date().getFullYear()

  return (
    <footer className="pied">
      <div className="conteneur pied__interieur">
        <p className="pied__mention">© {annee} Corentin Leroy</p>

        <nav aria-label="Liens externes">
          <ul className="pied__liens">
            <li>
              <a href="https://github.com/corentin-leroy" className="lien"
                 target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/corentin-leroy-b19152400/" className="lien"
                 target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>

        <p className="pied__liens-internes">
          <Link to="/a-propos">À propos</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer