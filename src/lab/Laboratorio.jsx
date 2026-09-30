import { useState } from 'react'
import BlurText from '@/components/BlurText'
import MaskedHeading from '@/components/MaskedHeading'
import SplitText from '@/components/SplitText'
import './laboratorio.css'

// Cada demo es una animación de React Bits instalada con shadcn.
// Para agregar otra: instalarla (ver README) y sumar un objeto a esta lista.
const demos = [
  {
    name: 'BlurText',
    install: 'npx shadcn@latest add @react-bits/BlurText-JS-CSS',
    note: 'El título principal de la landing, entrando palabra por palabra desde el desenfoque.',
    render: () => (
      <BlurText
        text="El costo de su rotación operativa no aparece en ninguna cuenta."
        animateBy="words"
        direction="top"
        delay={120}
        className="lab-blur"
      />
    ),
  },
  {
    name: 'SplitText',
    install: 'npx shadcn@latest add @react-bits/SplitText-JS-CSS',
    note: 'El título del cierre, letra por letra subiendo desde abajo.',
    render: () => (
      <SplitText
        text="Ya sabe que le cuesta. Falta dejar de estimarlo."
        tag="h2"
        className="lab-split"
        splitType="chars"
        delay={30}
        duration={0.9}
        textAlign="left"
        rootMargin="0px"
      />
    ),
  },
  {
    name: 'MaskedHeading',
    install: 'npx shadcn@latest add @react-bits/MaskedHeading-JS-CSS',
    note: 'Una foto que se ve a través de las letras. Mueva el mouse encima: la imagen se desplaza.',
    render: () => (
      <MaskedHeading
        text="Gente que se queda"
        // TODO: reemplazar por foto propia de campo (con permiso de las personas).
        src={`${import.meta.env.BASE_URL}operativos.jpg`}
        tag="h2"
        weight={700}
        textScale={0.14}
        brightness={1.15}
        saturation={1.1}
        reveal="rise"
        trigger="view"
      />
    ),
  },
]

function Demo({ demo }) {
  // Cambiar la key vuelve a montar el componente y repite la animación.
  const [run, setRun] = useState(0)
  return (
    <article className="lab-card rv">
      <header className="lab-card-head">
        <h3>{demo.name}</h3>
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => setRun(r => r + 1)}>
          Repetir
        </button>
      </header>
      <p className="lab-note">{demo.note}</p>
      <div className="lab-stage" key={run}>
        {demo.render()}
      </div>
      <code className="lab-cmd">{demo.install}</code>
    </article>
  )
}

export default function Laboratorio() {
  return (
    <main className="lab">
      <div className="wrap">
        <div className="head">
          <p className="eye">Laboratorio</p>
          <h2>Animaciones de React Bits, probadas con el contenido de Arraigo.</h2>
          <p className="lede">
            Cada tarjeta es un componente instalado con un solo comando. Si una convence, se pasa a la landing.
          </p>
        </div>
        <div className="lab-grid">
          {demos.map(d => (
            <Demo key={d.name} demo={d} />
          ))}
        </div>
        <p className="lab-back">
          <a className="btn btn-ghost" href="#top">
            ← Volver a la landing
          </a>
        </p>
      </div>
    </main>
  )
}
