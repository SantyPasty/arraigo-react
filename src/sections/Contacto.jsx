const MAIL = 'santimunoz23205@gmail.com'
const mailto = `mailto:${MAIL}?subject=Diagn%C3%B3stico%20Arraigo&body=Hola%2C%20quiero%20agendar%20el%20diagn%C3%B3stico%20de%20costo%20de%20rotaci%C3%B3n%20para%20mi%20empresa.`

export default function Contacto() {
  return (
    <section className="close" id="contacto">
      <div className="wrap">
        <div className="close-in rv">
          <p className="eye">El siguiente paso</p>
          <h2>Ya sabe que le cuesta. Falta dejar de estimarlo.</h2>
          <p className="lede">
            Diagnóstico inicial con sus cifras reales: dos semanas, sin cambiar sus sistemas y sin pedirle nada nuevo a
            su personal operativo.
          </p>
          <div className="close-cta">
            <a className="btn btn-primary" href={mailto}>
              Agendar diagnóstico gratuito
            </a>
            <a className="btn btn-ghost" href="#costo">
              Volver a ver el costo
            </a>
          </div>
        </div>
        <div className="contact wrap" style={{ padding: 0 }}>
          <div>
            <p className="w">Escríbanos</p>
            <a href={`mailto:${MAIL}`}>{MAIL}</a>
          </div>
          <div>
            <p className="w">Equipo</p>
            <p>Santiago Muñoz y Rommy Gómez</p>
          </div>
          <div>
            <p className="w">Dónde estamos</p>
            <p>Bogotá · Universidad EAN</p>
          </div>
        </div>
      </div>
    </section>
  )
}
