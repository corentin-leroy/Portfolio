import { useEffect } from 'react'

// Apparition des éléments .revele au défilement, en amélioration progressive :
// la classe qui autorise l'état masqué (.revele-actif sur <html>) n'est posée
// qu'à la fin, une fois l'observateur en place. Si quoi que ce soit échoue
// avant, rien n'est caché. Styles associés dans _composants.scss.
export function useRevele() {
  useEffect(() => {
    const mouvementAccepte = window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    if (!mouvementAccepte || !('IntersectionObserver' in window)) return

    const observateur = new IntersectionObserver((entrees) => {
      for (const entree of entrees) {
        if (entree.isIntersecting) {
          entree.target.classList.add('est-visible')
          observateur.unobserve(entree.target)
        }
      }
    })
    document.querySelectorAll('.revele').forEach((el) => observateur.observe(el))
    document.documentElement.classList.add('revele-actif')

    return () => {
      observateur.disconnect()
      document.documentElement.classList.remove('revele-actif')
    }
  }, [])
}
