import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Accueil from './pages/Accueil/Accueil'
import Projet from './pages/Projet/Projet'
import APropos from './pages/APropos/APropos'
import Erreur from './pages/Erreur/Erreur'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <a href="#contenu" className="saut-contenu">Aller au contenu</a>
        <Header />
        <main id="contenu">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/projets/:slug" element={<Projet />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="*" element={<Erreur />} />
            <Route path="/introuvable" element={<Erreur />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App