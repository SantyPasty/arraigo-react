import { LogoMark } from './Logo'
import useTicker from '../hooks/useTicker'

export default function Hero() {
  const amount = useTicker(16.4)
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <LogoMark className="hero-mark" />
          <p className="eye en" style={{ animationDelay: '.62s' }}>
            Para empresas con personal operativo
          </p>
          <h1 className="en" style={{ animationDelay: '.72s' }}>
            El costo de su rotación operativa <span className="u">no aparece en ninguna cuenta</span>.
          </h1>
          <p className="lede en" style={{ animationDelay: '.86s' }}>
            Cada vigilante, auxiliar de aseo u operario que renuncia se lleva entre el 50 % y el 200 % de su salario
            anual. Arraigo lo mide en pesos, lo reduce con reconocimiento que sí llega al turno, y se lo entrega en una
            cifra que usted puede llevar al comité.
          </p>
          <div className="hero-cta en" style={{ animationDelay: '.98s' }}>
            <a className="btn btn-primary" href="#contacto">
              Agendar diagnóstico gratuito
            </a>
            <a className="btn btn-ghost" href="#costo">
              Ver dónde se esconde el costo
            </a>
          </div>
          <p className="hero-note en" style={{ animationDelay: '1.08s' }}>
            Diagnóstico de dos semanas · Sin cambiar sus sistemas
          </p>
        </div>

        <aside className="ticker en" style={{ animationDelay: '.9s' }} aria-label="Estimación de pérdida acumulada">
          <p className="cap">
            <span className="dot" aria-hidden="true"></span> Empresa tipo
            <br />
            80 colaboradores operativos
          </p>
          <p className="sub">Ha perdido, desde que usted abrió esta página:</p>
          <p className="amt">
            <span aria-hidden="true">$</span> <span>{amount}</span>
          </p>
          <p className="foot">
            Alrededor de <strong className="money">$16</strong> por segundo, todo el año, solo en reemplazar gente que se
            va. Ese dinero ya está saliendo: nadie lo ve porque no tiene una línea propia en el P&amp;G.
          </p>
        </aside>
      </div>
    </header>
  )
}
