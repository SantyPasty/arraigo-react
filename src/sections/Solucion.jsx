const mechanisms = [
  {
    tag: 'Puerta de entrada',
    title: 'Simulador de Costo de Rotación',
    text: 'Traduce su rotación a pesos en menos de un minuto. Deja de ser un tema «de clima laboral» y pasa a ser una cifra del P&G.',
    role: 'Le habla en números desde el primer minuto',
    icon: (
      <>
        <path d="M4 12 L14 21 L22 16 L32 29" fill="none" stroke="#5EE3C6" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 21 V29 H24" fill="none" stroke="#F59E0B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    tag: 'Recolección',
    title: 'Encuesta Pulso para roles operativos',
    text: 'Papel, WhatsApp y líder de turno. Llega a quien no tiene correo corporativo ni acceso a las apps de oficina — que es justamente quien nunca responde las encuestas.',
    role: 'Llega al colaborador, no solo lo mide',
    icon: (
      <>
        <path d="M3 20 H11 M25 20 H37" fill="none" stroke="#5EE3C6" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M11 20 L15 10 L21 30 L25 20" fill="none" stroke="#F59E0B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    tag: 'Servicio recurrente',
    title: 'Índice de Cultura Invisible',
    text: 'Puntaje de 0 a 100, medido cada trimestre y comparable con otras empresas de su sector, más un plan de acción priorizado.',
    role: 'Convierte el diagnóstico en seguimiento',
    icon: (
      <>
        <path d="M6 29 A14 14 0 0 1 34 29" fill="none" stroke="#5EE3C6" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M20 29 L28 19" fill="none" stroke="#F59E0B" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="20" cy="29" r="2.4" fill="#5EE3C6" />
      </>
    ),
  },
]

export default function Solucion() {
  return (
    <section id="solucion">
      <div className="wrap">
        <div className="head rv">
          <p className="eye">La solución</p>
          <h2>Medir el costo, medir la causa, y escuchar a quien nadie escucha.</h2>
          <p className="lede">
            Tres mecanismos que trabajan juntos y convierten el reconocimiento en un dato que su gerencia puede seguir
            trimestre a trimestre.
          </p>
        </div>
        <div className="mech">
          {mechanisms.map(m => (
            <article className="m rv" key={m.title}>
              <svg className="gl" viewBox="0 0 40 40" aria-hidden="true">
                {m.icon}
              </svg>
              <span className="tg">{m.tag}</span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
              <div className="role">{m.role}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
