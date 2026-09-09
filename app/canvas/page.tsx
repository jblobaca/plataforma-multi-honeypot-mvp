import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const blocks = [
  {
    title: "Problema",
    className: "a-problem",
    items: [
      "Detección tardía: el MTTD llega cuando el atacante ya exploró la red.",
      "Threat Intelligence genérica de terceros, poco accionable para Intercert.",
      "Fatiga de alertas y defensa perimetral reactiva, sin telemetría propia.",
    ],
    extra: "Alternativas actuales: firewall, antivirus, SIEM ruidoso y feeds IoC.",
  },
  {
    title: "Solución (MVP)",
    className: "a-solution",
    items: [
      "Dashboard web de Threat Intelligence con métricas Ns, TA, IOC_u, P y MTTD.",
      "Canvas e informe públicos para validar el relato con docente y caso.",
      "Arquitectura objetivo: 15 honeypots T-Pot, ELK, LSTM/CNN ligeros y MISP.",
    ],
  },
  {
    title: "Propuesta de valor única",
    className: "a-uvp",
    items: [
      "Inteligencia de amenazas propia y temprana para empresas ISO, sin depender de cloud caro.",
    ],
    extra: "Concepto: T-Pot + ML + ELK on-premises = SIEM que escucha al atacante antes del activo real.",
  },
  {
    title: "Ventaja injusta",
    className: "a-advantage",
    items: [
      "Acceso al caso Intercert y al contexto ISO 27001 en Perú.",
      "Vacío de literatura: multi-honeypot + ML + ELK en enterprise Latam.",
      "Dataset latinoamericano de ataques, hoy escaso en la región.",
    ],
  },
  {
    title: "Segmentos de cliente",
    className: "a-customers",
    items: [
      "Early adopter: Intercert Latam (certificadora ISO en Lima).",
      "Usuario diario: analista SOC / Threat Intelligence.",
      "Comprador: CISO o gerencia de TI de empresas ISO 27001.",
    ],
    extra: "Early adopters: SOC de certificadoras y empresas Latam con recursos moderados.",
  },
  {
    title: "Métricas clave",
    className: "a-metrics",
    items: [
      "Cobertura ≥ 12 servicios honeypot y tasa de atracción > 70%.",
      "> 500 IOCs únicos / 30 días con precisión > 85%.",
      "Reducción del MTTD ≥ 50% frente a controles convencionales.",
    ],
  },
  {
    title: "Canales",
    className: "a-channels",
    items: [
      "GitHub + Vercel para revisión académica y demostración.",
      "Presentación al caso Intercert Latam y al asesor USIL.",
      "Comunidades SOC / ISO 27001 en Latam.",
    ],
  },
  {
    title: "Estructura de costos",
    className: "a-costs",
    items: [
      "Presupuesto del plan: S/ 1 518 (directos + 10% imprevistos).",
      "Tiempo del investigador, laboratorio, dataset Mendeley y panel de 20 analistas.",
      "Software de código abierto: T-Pot, ELK, MISP, Next.js.",
    ],
  },
  {
    title: "Flujos de ingreso",
    className: "a-revenue",
    items: [
      "Fase académica: validación sin cobro (tesis / DSR).",
      "Fase posterior: POC on-premises para certificadoras e ISO 27001.",
      "Servicio de feed de IOCs contextualizados y dashboards SOC.",
    ],
  },
];

export default function CanvasPage() {
  return (
    <>
      <Header current="/canvas" />
      <main>
        <section className="hero">
          <div className="wrap">
            <p className="kicker">Lean / MVP Canvas · Ash Maurya</p>
            <h1>MVP Canvas</h1>
            <p className="lead">
              Una página para deconstruir la idea del plan de trabajo en
              hipótesis verificables. El bloque de solución se mantiene
              deliberadamente pequeño: el producto mínimo es el dashboard de
              inteligencia, no los 15 honeypots de la tesis completa.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <div className="canvas">
              {blocks.map((block) => (
                <article key={block.title} className={`block ${block.className}`}>
                  <span className="tag">{block.title}</span>
                  <ul>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {block.extra ? <p className="muted" style={{ marginTop: 10, fontSize: 13 }}>{block.extra}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
