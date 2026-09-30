import Brand from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-in">
          <Brand />
          <p className="tag">Reconocimiento que se queda, resultados que se miden.</p>
        </div>
        <p className="f-legal">
          Santiago Muñoz y Rommy Gómez · Sandbox para Emprendedores, Universidad EAN · 2026. Las cifras de referencia
          son de Gallup. El contador y los porcentajes de desglose son estimaciones ilustrativas para una empresa de 80
          colaboradores operativos con rotación anual del 45 %; no constituyen asesoría financiera.
        </p>
        {/* En celular el nav oculta sus enlaces, así que el laboratorio también se enlaza aquí. */}
        <a className="f-lab" href="#/laboratorio">
          Laboratorio de animaciones →
        </a>
      </div>
    </footer>
  )
}
