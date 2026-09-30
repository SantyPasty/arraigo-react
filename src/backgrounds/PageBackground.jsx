import { lazy, Suspense, useEffect, useState } from 'react'

// Cada fondo se carga solo cuando se elige (three.js y ogl pesan).
const Dither = lazy(() => import('@/components/Dither'))
const Threads = lazy(() => import('@/components/Threads'))
const Topography = lazy(() => import('@/components/Topography'))
const DarkVeil = lazy(() => import('@/components/DarkVeil'))
const Silk = lazy(() => import('@/components/Silk'))
const DotGrid = lazy(() => import('@/components/DotGrid'))

const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Colores de marca. Los shaders reciben RGB de 0 a 1.
const GROUND_RGB = [8 / 255, 32 / 255, 29 / 255] // --ground #08201D
const MINT_RGB = [94 / 255, 227 / 255, 198 / 255] // --mint #5EE3C6

// veil: opacidad del velo oscuro encima (más alto = fondo más discreto, texto más legible).
export const BACKGROUNDS = {
  dither: {
    label: 'Dither',
    about: 'Ondas pixeladas estilo retro. Sigue el mouse.',
    veil: 0.58,
    render: () => (
      <Dither
        backgroundColor={GROUND_RGB}
        waveColor={[0.16, 0.5, 0.43]}
        waveSpeed={0.03}
        disableAnimation={reduce()}
        enableMouseInteraction={!reduce()}
        mouseRadius={0.3}
        eventSource={document.body}
      />
    ),
  },
  threads: {
    label: 'Threads',
    about: 'Hilos que ondulan como una tela: la idea de "tejido" del equipo.',
    veil: 0.2,
    render: () => <Threads color={MINT_RGB} amplitude={1} distance={0} />,
  },
  topography: {
    label: 'Topography',
    about: 'Curvas de nivel que se mueven: terreno, raíces, "arraigo".',
    veil: 0.35,
    render: () => (
      <Topography
        lowColor="#08201D"
        midColor="#1E6B5B"
        highColor="#5EE3C6"
        speed={reduce() ? 0 : 0.25}
        glow={0.4}
        mouseInteraction={false}
      />
    ),
  },
  darkveil: {
    label: 'Dark Veil',
    about: 'Velo oscuro que se mueve lento. El más sobrio de todos.',
    veil: 0.3,
    render: () => <DarkVeil hueShift={-110} speed={reduce() ? 0 : 0.4} />,
  },
  silk: {
    label: 'Silk',
    about: 'Seda con luz suave. Elegante, muy corporativo.',
    veil: 0.25,
    render: () => <Silk color="#1E6B5B" speed={reduce() ? 0 : 3} scale={1} noiseIntensity={1.2} />,
  },
  dotgrid: {
    label: 'Dot Grid',
    about: 'Cuadrícula de puntos que se ilumina alrededor del mouse. Técnico, de datos.',
    veil: 0,
    render: () => <DotGrid dotSize={4} gap={22} baseColor="#15463F" activeColor="#5EE3C6" proximity={140} />,
  },
  none: {
    label: 'Sin fondo',
    about: 'El verde plano de la landing original.',
    veil: 0,
    render: () => null,
  },
}

const KEY = 'arraigo-bg'
export const DEFAULT_BG = 'dither'

// Recuerda el fondo elegido en este navegador (si el almacenamiento está bloqueado, usa el de siempre).
export function useBackgroundChoice() {
  const [bg, setBg] = useState(() => {
    try {
      const saved = localStorage.getItem(KEY)
      return saved in BACKGROUNDS ? saved : DEFAULT_BG
    } catch {
      return DEFAULT_BG
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(KEY, bg)
    } catch {
      /* sin almacenamiento: solo dura esta visita */
    }
  }, [bg])
  return [bg, setBg]
}

export default function PageBackground({ bg }) {
  const option = BACKGROUNDS[bg] ?? BACKGROUNDS[DEFAULT_BG]
  return (
    <div className="page-bg" aria-hidden="true" style={{ '--veil': option.veil }}>
      <Suspense fallback={null}>
        {/* key: al cambiar de fondo se desmonta el anterior y libera su canvas */}
        <div className="page-bg-layer" key={bg}>
          {option.render()}
        </div>
      </Suspense>
    </div>
  )
}
