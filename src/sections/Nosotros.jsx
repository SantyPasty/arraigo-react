const rows = [
  {
    them: 'Gallup Q12 · Great Place to Work',
    themText: 'Miden el clima general agregado de toda la empresa.',
    us: 'Medimos la brecha específica en los roles operativos invisibles.',
  },
  {
    them: 'Bonusly · Kudos · Nectar',
    themText: 'Asumen que el colaborador tiene acceso digital constante.',
    us: 'Llegamos a personal de turno, sin correo corporativo ni apps.',
  },
  {
    them: 'Consultoras de RRHH genéricas',
    themText: 'Aplican una encuesta estandarizada comprada.',
    us: 'Partimos de investigación primaria propia, hecha en campo.',
  },
]

export default function Nosotros() {
  return (
    <section id="nosotros" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="head rv">
          <p className="eye">Por qué nosotros</p>
          <h2>Nadie más está midiendo esta brecha.</h2>
        </div>
        <div className="vs">
          {rows.map(r => (
            <div className="row rv" key={r.them}>
              <div className="them">
                <p className="w">{r.them}</p>
                <p>{r.themText}</p>
              </div>
              <div className="mid">Frente a</div>
              <div className="us">
                <p className="w">Arraigo</p>
                <p>{r.us}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
