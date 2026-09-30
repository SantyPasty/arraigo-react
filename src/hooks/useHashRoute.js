import { useEffect, useState } from 'react'

// Router mínimo: '#/laboratorio' abre el laboratorio; cualquier otro hash es la landing.
export default function useHashRoute() {
  const read = () => (window.location.hash.startsWith('#/') ? window.location.hash.slice(2) : '')
  const [route, setRoute] = useState(read)

  useEffect(() => {
    const onChange = () => {
      const next = read()
      setRoute(prev => {
        if (prev !== next) window.scrollTo(0, 0)
        return next
      })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}
