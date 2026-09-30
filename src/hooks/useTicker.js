import { useEffect, useState } from 'react'

const fmt = new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 })

// Pesos perdidos desde que se abrió la página, a `rate` pesos por segundo.
export default function useTicker(rate = 16.4) {
  const [value, setValue] = useState('0')

  useEffect(() => {
    const t0 = Date.now()
    const paint = () => setValue(fmt.format(Math.floor(((Date.now() - t0) / 1000) * rate)))
    paint()
    const id = setInterval(paint, 120)
    return () => clearInterval(id)
  }, [rate])

  return value
}
