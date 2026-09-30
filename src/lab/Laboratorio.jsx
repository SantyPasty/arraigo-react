import { useState } from 'react'
import { BACKGROUNDS } from '@/backgrounds/PageBackground'
import useReveal from '@/hooks/useReveal'
import { LogoMark } from '@/sections/Logo'
import BlurText from '@/components/BlurText'
import SplitText from '@/components/SplitText'
import MaskedHeading from '@/components/MaskedHeading'
import CountUp from '@/components/CountUp'
import RotatingText from '@/components/RotatingText'
import DecryptedText from '@/components/DecryptedText'
import TrueFocus from '@/components/TrueFocus'
import ScrollReveal from '@/components/ScrollReveal'
import ShinyText from '@/components/ShinyText'
import MetallicPaint from '@/components/MetallicPaint'
import ElectricLogo from '@/components/ElectricLogo'
import StrokeText from '@/components/StrokeText'
import CircularText from '@/components/CircularText'
import TechText from '@/components/TechText'
import SpotlightCard from '@/components/SpotlightCard'
import Magnet from '@/components/Magnet'
import GlareHover from '@/components/GlareHover'
import './laboratorio.css'

const BASE = import.meta.env.BASE_URL
const cmd = name => `npx shadcn@latest add @react-bits/${name}-JS-CSS`

// ---------------------------------------------------------------------------
// Catálogo del laboratorio. Para probar otra animación: instalarla y sumar un
// objeto a la categoría que corresponda.
//   fit: dónde encajaría en la landing (la recomendación).
// ---------------------------------------------------------------------------
const categories = [
  {
    id: 'texto',
    title: 'Texto',
    intro: 'Animaciones para títulos y cifras, probadas con los textos reales de la landing.',
    demos: [
      {
        name: 'CountUp',
        fit: 'Franja de cifras Gallup (50–200 %, 75 %, 31 %). Las cifras son el argumento de venta: que cuenten solas.',
        pick: true,
        render: () => (
          <div className="lab-stats">
            {[
              { to: 200, pre: '50–', label: 'del salario anual cuesta reemplazar a alguien' },
              { to: 75, label: 'de las renuncias son prevenibles' },
              { to: 31, label: 'menos rotación con reconocimiento fuerte' },
            ].map(s => (
              <div key={s.to}>
                <div className="lab-stat-n">
                  {s.pre}
                  <CountUp to={s.to} duration={1.6} /> %
                </div>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        ),
      },
      {
        name: 'RotatingText',
        fit: 'Hero: nombrar a cada rol operativo, uno tras otro. Hace concreto a quién se refiere Arraigo.',
        pick: true,
        render: () => (
          <p className="lab-h">
            Cada{' '}
            <RotatingText
              texts={['vigilante', 'auxiliar de aseo', 'operario', 'conductor']}
              mainClassName="lab-rot"
              splitLevelClassName="lab-rot-split"
              staggerFrom="last"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2200}
            />{' '}
            que renuncia se lleva hasta el 200 % de su salario.
          </p>
        ),
      },
      {
        name: 'DecryptedText',
        fit: 'Frase "no aparece en ninguna cuenta": el costo oculto que se descifra. Refuerza la idea de lo invisible.',
        pick: true,
        render: () => (
          <p className="lab-h">
            El costo de su rotación{' '}
            <DecryptedText
              text="no aparece en ninguna cuenta."
              animateOn="view"
              sequential
              revealDirection="start"
              speed={40}
              className="lab-dec"
              encryptedClassName="lab-dec-enc"
            />
          </p>
        ),
      },
      {
        name: 'TrueFocus',
        fit: 'Sección "La solución": enfoca uno por uno los tres verbos del servicio.',
        render: () => (
          <div className="lab-truefocus">
            <TrueFocus
              sentence="Medir Escuchar Retener"
              blurAmount={4}
              borderColor="#5EE3C6"
              glowColor="rgba(94, 227, 198, 0.55)"
              animationDuration={0.6}
              pauseBetweenAnimations={1.2}
            />
          </div>
        ),
      },
      {
        name: 'ScrollReveal',
        fit: 'La cita del empresario: la frase se aclara palabra por palabra al hacer scroll. Da peso al testimonio.',
        replay: false,
        render: () => (
          <ScrollReveal baseOpacity={0.12} enableBlur baseRotation={2} blurStrength={5} textClassName="lab-quote">
            Pierdo cerca del 20 % de mis ingresos al año solo por la rotación de mi personal operativo.
          </ScrollReveal>
        ),
      },
      {
        name: 'ShinyText',
        fit: 'Etiquetas pequeñas o la nota "Diagnóstico de dos semanas". Detalle sutil, no para párrafos.',
        replay: false,
        render: () => (
          <p className="lab-eye">
            <ShinyText text="DIAGNÓSTICO DE DOS SEMANAS · SIN CAMBIAR SUS SISTEMAS" color="#3BBFA5" shineColor="#E6F5F1" speed={3} />
          </p>
        ),
      },
      {
        name: 'BlurText',
        fit: 'Alternativa para el título principal: entrada suave palabra por palabra.',
        render: () => (
          <BlurText
            text="El costo de su rotación operativa no aparece en ninguna cuenta."
            animateBy="words"
            direction="top"
            delay={120}
            className="lab-h"
          />
        ),
      },
      {
        name: 'SplitText',
        fit: 'Títulos de sección o el cierre, letra por letra.',
        render: () => (
          <SplitText
            text="Ya sabe que le cuesta. Falta dejar de estimarlo."
            tag="h2"
            className="lab-h"
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
        fit: 'Sección nueva de "declaración" con foto propia de campo. Muy fuerte con una foto real.',
        render: () => (
          <MaskedHeading
            text="Gente que se queda"
            // TODO: reemplazar por foto propia de campo (con permiso de las personas).
            src={`${BASE}operativos.jpg`}
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
    ],
  },
  {
    id: 'logo',
    title: 'Logo',
    intro: 'Efectos para las cuatro barras y la palabra ARRAIGO. Pensados para el hero, el cierre o una pantalla de carga.',
    demos: [
      {
        name: 'StrokeText',
        fit: 'La palabra ARRAIGO se dibuja con trazo menta y se rellena. Ideal para el cierre o una intro.',
        pick: true,
        render: () => (
          <StrokeText
            text="ARRAIGO"
            strokeColor="#5EE3C6"
            fillColor="#E6F5F1"
            fontSize={120}
            fontWeight={700}
            letterSpacing={2}
            drawDuration={1.8}
            style={{ fontFamily: 'Lexend, sans-serif', maxWidth: '100%' }}
          />
        ),
      },
      {
        name: 'CircularText',
        fit: 'El lema girando alrededor del logo: sello tipo "insignia". Encaja junto al contador del hero.',
        pick: true,
        replay: false,
        render: () => (
          <div className="lab-seal">
            <CircularText text="RECONOCIMIENTO*QUE SE QUEDA*" spinDuration={24} onHover="slowDown" className="lab-circ" />
            <LogoMark className="lab-seal-mark" />
          </div>
        ),
      },
      {
        name: 'MetallicPaint',
        fit: 'El logo en metal líquido. Llamativo: para una portada o una presentación, no para cada página.',
        replay: false,
        render: () => (
          <div className="lab-logo-box">
            <MetallicPaint imageSrc={`${BASE}logo-mark.svg`} tintColor="#5EE3C6" lightColor="#E6F5F1" darkColor="#08201D" speed={0.25} />
          </div>
        ),
      },
      {
        name: 'ElectricLogo',
        fit: 'El logo con contorno eléctrico que sigue el cursor. Muy tecnológico; puede chocar con el tono cálido de la marca.',
        replay: false,
        render: () => (
          <div className="lab-logo-box">
            <ElectricLogo src={`${BASE}logo-mark.svg`} color="#BFF5E8" glowColor="#5EE3C6" scale={0.7} intensity={0.9} />
          </div>
        ),
      },
      {
        name: 'TechText',
        fit: 'ARRAIGO interactivo: las letras se vuelven trazos bajo el cursor y se pueden arrastrar. Divertido para el laboratorio o un 404.',
        replay: false,
        render: () => (
          <TechText
            text="ARRAIGO"
            fontFamily="Lexend, sans-serif"
            fontSize={110}
            color="#E6F5F1"
            accentColor="#F59E0B"
            style={{ maxWidth: '100%' }}
          />
        ),
      },
    ],
  },
  {
    id: 'interaccion',
    title: 'Interacción',
    intro: 'Efectos al pasar el mouse sobre tarjetas y botones.',
    demos: [
      {
        name: 'SpotlightCard',
        fit: 'Las 4 tarjetas de "El costo invisible" y los 3 mecanismos: una luz menta sigue al mouse. Sutil y elegante.',
        pick: true,
        replay: false,
        render: () => (
          <SpotlightCard className="lab-spot" spotlightColor="rgba(94, 227, 198, 0.18)">
            <span className="pct">≈ 43 % del costo</span>
            <h3>Curva de productividad</h3>
            <p>El puesto vacío, las horas extra que lo cubren y los meses que tarda el reemplazo en rendir como quien se fue.</p>
          </SpotlightCard>
        ),
      },
      {
        name: 'Magnet',
        fit: 'El botón "Agendar diagnóstico": se acerca al cursor. Invita a hacer clic sin gritar.',
        pick: true,
        replay: false,
        render: () => (
          <div className="lab-center">
            <Magnet padding={80} magnetStrength={3}>
              <a className="btn btn-primary" href="#contacto">
                Agendar diagnóstico gratuito
              </a>
            </Magnet>
          </div>
        ),
      },
      {
        name: 'GlareHover',
        fit: 'Un reflejo que cruza la tarjeta del contador de pérdidas al pasar el mouse.',
        replay: false,
        render: () => (
          <GlareHover
            width="100%"
            height="auto"
            background="linear-gradient(160deg,#12403A,#0E2E2A)"
            borderColor="rgba(94,227,198,.28)"
            borderRadius="20px"
            glareColor="#5EE3C6"
            glareOpacity={0.25}
            glareSize={220}
            className="lab-glare"
          >
            <div className="lab-glare-in">
              <p className="lab-eye">Ha perdido, desde que abrió esta página</p>
              <p className="lab-stat-n">$ 1.284</p>
            </div>
          </GlareHover>
        ),
      },
    ],
  },
]

function Demo({ demo }) {
  // Cambiar la key vuelve a montar el componente y repite la animación.
  const [run, setRun] = useState(0)
  return (
    <article className="lab-card rv">
      <header className="lab-card-head">
        <h3>
          {demo.name}
          {demo.pick && <span className="lab-pick">Recomendado</span>}
        </h3>
        {demo.replay !== false && (
          <button type="button" className="btn btn-ghost btn-sm" onClick={() => setRun(r => r + 1)}>
            Repetir
          </button>
        )}
      </header>
      <p className="lab-note">{demo.fit}</p>
      <div className="lab-stage" key={run}>
        {demo.render()}
      </div>
      <code className="lab-cmd">{cmd(demo.name)}</code>
    </article>
  )
}

function BackgroundPicker({ bg, setBg }) {
  return (
    <section className="lab-cat" id="fondos" aria-labelledby="fondos-t">
      <h2 id="fondos-t" className="lab-cat-title">Fondo de la página</h2>
      <p className="lab-cat-intro">
        Cambia el fondo de <strong>todo el sitio</strong>. Elige uno y vuelve a la landing para verlo detrás del contenido
        real. Queda guardado en este navegador.
      </p>
      <div className="lab-bgs" role="radiogroup" aria-label="Fondo de la página">
        {Object.entries(BACKGROUNDS).map(([id, b]) => (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={bg === id}
            className={`lab-bg${bg === id ? ' on' : ''}`}
            onClick={() => setBg(id)}
          >
            <b>{b.label}</b>
            <span>{b.about}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default function Laboratorio({ bg, setBg }) {
  // El laboratorio se carga aparte, después del useReveal de App: activa sus propias tarjetas.
  useReveal([])
  return (
    <main className="lab">
      <div className="wrap">
        <div className="head">
          <p className="eye">Laboratorio</p>
          <h2>Animaciones de React Bits, probadas con el contenido de Arraigo.</h2>
          <p className="lede">
            Cada tarjeta es un componente instalado con un solo comando. Las marcadas como <em>Recomendado</em> son las
            que mejor encajan con una consultora seria que habla en cifras.
          </p>
          {/* Botones y no enlaces: un "#fondos" cambiaría la ruta y sacaría del laboratorio. */}
          <nav className="lab-toc" aria-label="Categorías">
            {[{ id: 'fondos', title: 'Fondos' }, ...categories].map(c => (
              <button key={c.id} type="button" onClick={() => document.getElementById(c.id)?.scrollIntoView()}>
                {c.title}
              </button>
            ))}
          </nav>
        </div>

        <BackgroundPicker bg={bg} setBg={setBg} />

        {categories.map(c => (
          <section className="lab-cat" id={c.id} key={c.id} aria-labelledby={`${c.id}-t`}>
            <h2 id={`${c.id}-t`} className="lab-cat-title">
              {c.title}
            </h2>
            <p className="lab-cat-intro">{c.intro}</p>
            <div className="lab-grid">
              {c.demos.map(d => (
                <Demo key={d.name} demo={d} />
              ))}
            </div>
          </section>
        ))}

        <p className="lab-back">
          <a className="btn btn-ghost" href="#top">
            ← Volver a la landing
          </a>
        </p>
      </div>
    </main>
  )
}
