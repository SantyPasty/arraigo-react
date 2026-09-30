import { useEffect } from 'react'
import useHashRoute from './hooks/useHashRoute'
import useReveal from './hooks/useReveal'
import DitherBackground from './sections/DitherBackground'
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
import Laboratorio from './lab/Laboratorio'

export default function App() {
  const route = useHashRoute()
  const onLab = route === 'laboratorio'
  useReveal([route])

  // Al volver del laboratorio con un ancla (#costo), bajar a esa sección ya renderizada.
  useEffect(() => {
    if (onLab) return
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [onLab])

  return (
    <>
      <DitherBackground />
      <Nav onLab={onLab} />
      {onLab ? (
        <Laboratorio />
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
