import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Header current="/" />
      <main>
        <section className="hero">
          <div className="wrap">
            <p className="kicker">Plan de trabajo · MVP académico · USIL 2026</p>
            <h1>{site.title}</h1>
            <p className="lead">
              Prototipo mínimo viable del trabajo de investigación de{" "}
              {site.author}. Traduce el plan académico a un producto
              demostrable: canvas, informe con análisis de clase y un dashboard
              de Threat Intelligence para {site.org}.
            </p>
            <div className="meta-row">
              <article className="stat">
                <b>Autor</b>
                {site.author}
              </article>
              <article className="stat">
                <b>Asesor</b>
                {site.advisor}
              </article>
              <article className="stat">
                <b>Organización</b>
                {site.org}, {site.city}
              </article>
              <article className="stat">
                <b>ODS</b>
                9 · Infraestructura resiliente (9.1 / 9.5)
              </article>
            </div>
            <div className="actions">
              <Link className="btn" href="/canvas">
                Ver MVP Canvas
              </Link>
              <Link className="btn ghost" href="/informe">
                Leer informe
              </Link>
              <Link className="btn ghost" href="/dashboard">
                Abrir dashboard
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <p className="kicker">Entregables de la clase</p>
            <h2>Lo que pide el curso y dónde está</h2>
            <div className="grid-3" style={{ marginTop: 20 }}>
              <article className="card">
                <h3>1. MVP Canvas</h3>
                <p className="muted">
                  Lean Canvas de nueve bloques aplicado a Intercert Latam:
                  problema, cliente, propuesta de valor, solución mínima y
                  métricas del experimento.
                </p>
                <div className="links">
                  <Link className="pill" href="/canvas">
                    Abrir canvas
                  </Link>
                </div>
              </article>
              <article className="card">
                <h3>2. Informe en GitHub</h3>
                <p className="muted">
                  Repositorio público con el código del MVP, el README y el
                  informe. Incluye el análisis de lo visto en clase.
                </p>
                <div className="links">
                  <a className="pill" href={site.github} target="_blank" rel="noreferrer">
                    {site.github.replace("https://", "")}
                  </a>
                </div>
              </article>
              <article className="card">
                <h3>3. Despliegue en Vercel</h3>
                <p className="muted">
                  El prototipo está publicado para revisión del docente y del
                  caso de estudio, sin necesidad de instalar nada en local.
                </p>
                <div className="links">
                  <a className="pill" href={site.vercel} target="_blank" rel="noreferrer">
                    {site.vercel.replace("https://", "")}
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section paper">
          <div className="wrap">
            <p className="kicker">Del plan de trabajo al producto</p>
            <h2>Hipótesis que este MVP pone a prueba</h2>
            <p>
              El plan de investigación plantea que una plataforma multi-honeypot
              asistida por inteligencia artificial mejora la generación de
              Threat Intelligence accionable en la red de Intercert Latam,
              reduce la latencia de detección y produce IOCs propios. Este
              prototipo no sustituye el experimento de 30 días: muestra la
              interfaz, las métricas y el relato de valor con los que se
              validará esa hipótesis.
            </p>
            <div className="grid-2" style={{ marginTop: 20 }}>
              <article className="card" style={{ background: "#fff", borderColor: "#d7c7a3" }}>
                <h3>Problema central</h3>
                <p>
                  Detección tardía de amenazas por falta de inteligencia
                  proactiva. Los controles reactivos (firmas, antivirus, logs
                  sin señuelo) llegan cuando el atacante ya exploró la red.
                </p>
              </article>
              <article className="card" style={{ background: "#fff", borderColor: "#d7c7a3" }}>
                <h3>Solución mínima</h3>
                <p>
                  Dashboard de inteligencia que explica cobertura de honeypots,
                  tasa de atracción, IOCs únicos, precisión de correlación y
                  MTTD, listo para conectar luego a T-Pot, ELK y modelos ML.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
