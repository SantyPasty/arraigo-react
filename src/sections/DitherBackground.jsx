import { lazy, Suspense } from 'react'

// three.js pesa bastante: se carga aparte para que la página aparezca primero.
const Dither = lazy(() => import('@/components/Dither'))

// Colores de la marca en RGB de 0 a 1 (así los recibe el shader).
const GROUND = [8 / 255, 32 / 255, 29 / 255] // --ground #08201D
const MINT_DEEP = [0.16, 0.5, 0.43] // menta oscurecida para no competir con el texto

export default function DitherBackground() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return (
    <div className="dither-bg" aria-hidden="true">
      <Suspense fallback={null}>
        <Dither
          backgroundColor={GROUND}
          waveColor={MINT_DEEP}
          colorNum={4}
          pixelSize={2}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.03}
          disableAnimation={reduce}
          enableMouseInteraction={!reduce}
          mouseRadius={0.3}
          eventSource={document.body}
        />
      </Suspense>
    </div>
  )
}
