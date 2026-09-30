const stats = [
  { n: '50–200 %', t: 'del salario anual cuesta reemplazar a un colaborador.' },
  { n: '75 %', t: 'de las renuncias son prevenibles por el empleador.' },
  { n: '31 %', t: 'menos rotación voluntaria en empresas con reconocimiento fuerte.' },
]

export default function Proof() {
  return (
    <section className="proof" style={{ padding: 0 }}>
      <div className="wrap" style={{ padding: 0 }}>
        <div className="proof-grid">
          {stats.map(s => (
            <div className="pf" key={s.n}>
              <div className="n">{s.n}</div>
              <p className="t">{s.t}</p>
              <p className="s">Gallup</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
