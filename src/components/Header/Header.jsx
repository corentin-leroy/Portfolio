import { Link, NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <header className="entete">
      <div className="conteneur entete__interieur">
        <Link to="/" className="entete__marque">Corentin Leroy</Link>
        <nav aria-label="Navigation principale">
          <ul className="entete__liens">
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><Link to="/#projets">Projets</Link></li>
            <li><NavLink to="/a-propos">À propos</NavLink></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header