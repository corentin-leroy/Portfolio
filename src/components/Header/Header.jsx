import { Link, NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {
  const classeActive = ({ isActive }) => (isActive ? 'active' : undefined)

  return (
    <header className="entete">
      <div className="conteneur entete__interieur">
        <Link to="/" className="entete__marque">Corentin Leroy</Link>

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
      </div>
    </header>
  )
}

export default Header