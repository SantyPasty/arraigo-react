import { lazy, Suspense, useEffect } from 'react'
import useHashRoute from './hooks/useHashRoute'
import useReveal from './hooks/useReveal'
import PageBackground, { useBackgroundChoice } from './backgrounds/PageBackground'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Proof from './sections/Proof'
import Costo from './sections/Costo'
import Quote from './sections/Quote'
import Solucion from './sections/Solucion'
import Proceso from './sections/Proceso'
import Nosotros from './sections/Nosotros'
import Contacto from './sections/Contacto'
import Footer from './sections/Footer'
// El laboratorio trae muchas librerías: se descarga solo cuando alguien lo abre.
const Laboratorio = lazy(() => import('./lab/Laboratorio'))

export default function App() {
  const route = useHashRoute()
  const onLab = route === 'laboratorio'
  const [bg, setBg] = useBackgroundChoice()
  useReveal([route])

  // Al volver del laboratorio con un ancla (#costo), bajar a esa sección ya renderizada.
  useEffect(() => {
    if (onLab) return
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [onLab])

  return (
    <>
      <PageBackground bg={bg} />
      <Nav onLab={onLab} />
      {onLab ? (
        <Suspense fallback={<main className="lab" />}>
          <Laboratorio bg={bg} setBg={setBg} />
        </Suspense>
      ) : (
        <>
          <Hero />
          <Proof />
          <Costo />
          <Quote />
          <Solucion />
          <Proceso />
          <Nosotros />
          <Contacto />
        </>
      )}
      <Footer />
    </>
  )
}
