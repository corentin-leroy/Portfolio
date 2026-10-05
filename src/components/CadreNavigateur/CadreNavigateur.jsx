import './CadreNavigateur.scss'

// Cadre de navigateur autour d'un média de démonstration.
// Le ratio est réservé à partir de `largeur` et `hauteur` : remplacer l'<img>
// passée en enfant par une <video> courte (même ratio, attribut poster)
// ne change pas la mise en page. Penser alors à ne pas lancer la lecture
// automatique quand prefers-reduced-motion est actif.
function CadreNavigateur({ largeur, hauteur, className = '', children }) {
  return (
    <div className={`cadre ${className}`.trim()}>
      <div className="cadre__barre" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="cadre__media" style={{ aspectRatio: `${largeur} / ${hauteur}` }}>
        {children}
      </div>
    </div>
  )
}

export default CadreNavigateur
