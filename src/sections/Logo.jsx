// Las cuatro barras de Arraigo: la última (naranja) es la rotación que se escapa.
export function LogoMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="13" width="48" height="8" rx="4" fill="#5EE3C6" />
      <rect x="8" y="26" width="36" height="8" rx="4" fill="#5EE3C6" opacity=".72" />
      <rect x="8" y="39" width="24" height="8" rx="4" fill="#5EE3C6" opacity=".42" />
      <rect x="8" y="52" width="14" height="8" rx="4" fill="#F59E0B" />
    </svg>
  )
}

export default function Brand({ href = '#top', label }) {
  return (
    <a className="brand" href={href} aria-label={label}>
      <LogoMark />
      <b>
        ARRAIG<i>O</i>
      </b>
    </a>
  )
}
