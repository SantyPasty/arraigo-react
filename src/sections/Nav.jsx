import Brand from './Logo'

export default function Nav({ onLab }) {
  return (
    <nav>
      <div className="nav-in">
        <Brand label="Arraigo, inicio" />
        <div className="nav-links">
          <a href="#costo">El costo</a>
          <a href="#solucion">La solución</a>
          <a href="#proceso">Cómo funciona</a>
          <a href="#nosotros">Por qué nosotros</a>
          <a href="#/laboratorio" aria-current={onLab ? 'page' : undefined}>
            Laboratorio
          </a>
        </div>
        <a className="btn btn-primary btn-sm nav-cta" href="#contacto">
          Agendar diagnóstico
        </a>
      </div>
    </nav>
  )
}
