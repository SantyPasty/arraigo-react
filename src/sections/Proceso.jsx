const steps = [
  {
    when: 'Semanas 1–2',
    title: 'Diagnóstico del costo',
    text: 'Tomamos sus cifras reales de salidas y reemplazos y reemplazamos la estimación por el costo verificado de su empresa.',
  },
  {
    when: 'Semanas 3–6',
    title: 'Línea base del Índice',
    text: 'Primera medición con la Encuesta Pulso, turno por turno, en los canales que su personal operativo sí usa.',
  },
  {
    when: 'Semanas 7–12',
    title: 'Plan y primera comparación',
    text: 'Acciones priorizadas por impacto, ejecución acompañada y segunda medición para ver el movimiento en pesos.',
  },
]

export default function Proceso() {
  return (
    <section id="proceso" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="head rv">
          <p className="eye">Cómo funciona</p>
          <h2>Del primer número a la primera comparación: un trimestre.</h2>
        </div>
        <div className="steps rv">
          {steps.map(s => (
            <div className="st" key={s.when}>
              <p className="w">{s.when}</p>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
