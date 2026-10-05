import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function DefilementAncre() {
  const { hash, pathname, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const cible = document.querySelector(hash)
    const reduire = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (cible) cible.scrollIntoView({ behavior: reduire ? 'auto' : 'smooth' })
  }, [hash, pathname, key])

  return null
}

export default DefilementAncre