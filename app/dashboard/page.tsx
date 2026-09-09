import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const stats = [
  { label: "Servicios honeypot activos (Ns)", value: "14 / 15", note: "Meta H1: ≥ 12" },
  { label: "Tasa de atracción (TA)", value: "78%", note: "Meta H1: > 70%" },
  { label: "IOCs únicos / 30 días", value: "612", note: "Meta H2: > 500" },
  { label: "Precisión de correlación (P)", value: "88%", note: "Meta H2: > 85%" },
  { label: "MTTD estimado", value: "4,2 h", note: "Meta H3: −50% vs. baseline" },
  { label: "Eventos capturados", value: "18 430", note: "Censo T-Pot (demo)" },
];

const events = [
  { time: "21:04", sev: "alta", title: "Fuerza bruta SSH en Cowrie", detail: "IOC: 185.x.x.12 · T1110 · 142 intentos" },
  { time: "20:51", sev: "alta", title: "Carga de binario en Dionaea", detail: "Hash SHA-256 correlacionado · T1204" },
  { time: "20:33", sev: "media", title: "Reconocimiento SMTP Mailoney", detail: "Banner grabbing · T1595" },
  { time: "19:18", sev: "media", title: "Escaneo HTTP en honeypot web", detail: "User-agent anomalía · scoring 0.74" },
  { time: "18:02", sev: "baja", title: "Conexión RDP sin payload", detail: "Descartado por panel (FP potencial)" },
];

export default function DashboardPage() {
  return (
    <>
      <Header current="/dashboard" />
      <main>
        <section className="hero">
          <div className="wrap">
            <p className="kicker">Capa de inteligencia · prototipo</p>
            <h1>Dashboard de Threat Intelligence</h1>
            <p className="lead">
              Vista mínima que un analista SOC usaría para priorizar IOCs
              propios. Las cifras ilustran las hipótesis del plan; no son
              resultado del experimento de 30 días.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="wrap">
            <p className="demo-note">
              Datos de demostración. Este MVP no captura tráfico real ni
              despliega honeypots. El experimento se ejecutará solo en la red
              simulada de Intercert Latam, con autorización formal.
            </p>
            <div className="grid-3">
              {stats.map((item) => (
                <article className="stat" key={item.label}>
                  <b>{item.label}</b>
                  <p style={{ fontSize: 28, fontFamily: "Georgia, serif" }}>{item.value}</p>
                  <p className="muted">{item.note}</p>
                </article>
              ))}
            </div>
            <h2 style={{ margin: "36px 0 8px" }}>Cola de eventos (demo)</h2>
            <p className="muted" style={{ marginBottom: 8 }}>
              Priorización por scoring. El analista del mapa de empatía necesita
              esta cola, no el log crudo.
            </p>
            {events.map((event) => (
              <div className="event" key={event.time + event.title}>
                <strong>{event.time}</strong>
                <span>
                  <strong>{event.title}</strong>
                  <br />
                  <span className="muted">{event.detail}</span>
                </span>
                <span className={`sev-${event.sev}`}>{event.sev.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
