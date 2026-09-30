const cards = [
  {
    pct: '≈ 18 % del costo',
    title: 'Reclutamiento y selección',
    text: 'Publicación, filtro de hojas de vida, entrevistas, estudio de seguridad, exámenes médicos. Horas de RRHH y del líder de turno que no se facturan a nadie.',
  },
  {
    pct: '≈ 12 % del costo',
    title: 'Contratación y dotación',
    text: 'Afiliaciones, contrato, carnet, uniformes, elementos de protección y equipo que hay que reponer con cada entrada.',
  },
  {
    pct: '≈ 27 % del costo',
    title: 'Capacitación e inducción',
    text: 'Inducción al puesto, protocolos, acompañamiento del supervisor y el tiempo del colaborador experimentado que enseña en vez de producir.',
  },
  {
    pct: '≈ 43 % del costo',
    title: 'Curva de productividad',
    text: 'El puesto vacío, las horas extra que lo cubren y los meses que tarda el reemplazo en rendir como quien se fue. Es la porción más grande y la más invisible.',
  },
]

export default function Costo() {
  return (
    <section id="costo">
      <div className="wrap">
        <div className="head rv">
          <p className="eye">El costo invisible</p>
          <h2>La rotación no aparece como gasto. Aparece repartida.</h2>
          <p className="lede">
            Cuando un vigilante o un auxiliar de aseo renuncia, el costo no se registra en ninguna cuenta llamada
            «rotación». Se diluye en cuatro lugares donde nadie lo suma.
          </p>
        </div>
        <div className="cards">
          {cards.map(c => (
            <article className="c rv" key={c.title}>
              <span className="pct">{c.pct}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
