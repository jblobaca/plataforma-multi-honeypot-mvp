import { Shell } from "@/components/Shell";
import { alerts, kpis, pipeline } from "@/lib/data";
import { site } from "@/lib/site";

export default function OverviewPage() {
  return (
    <Shell current="/">
      <header className="top">
        <div>
          <p className="kicker">{site.org}</p>
          <h1>Overview de amenazas</h1>
          <p className="lead">
            Consola de Threat Intelligence sobre señuelos multi-protocolo.
            El motor ML prioriza eventos y genera IOCs propios antes de que
            el atacante toque activos reales.
          </p>
        </div>
        <span className="badge">DEMO · red simulada</span>
      </header>

      <section className="grid kpis">
        {kpis.map((item) => (
          <article className="card" key={item.label}>
            <b>{item.label}</b>
            <p className="metric">{item.value}</p>
            <p className="hint">{item.hint}</p>
          </article>
        ))}
      </section>

      <section className="grid two" style={{ marginTop: 16 }}>
        <article className="card">
          <h2>Cola priorizada</h2>
          <table>
            <thead>
              <tr>
                <th>Hora</th>
                <th>Alerta</th>
                <th>Score</th>
                <th>Sev.</th>
              </tr>
            </thead>
            <tbody>
              {alerts.slice(0, 5).map((alert) => (
                <tr key={alert.id}>
                  <td className="mono">{alert.time}</td>
                  <td>
                    {alert.title}
                    <div className="hint">{alert.sensor} · {alert.src}</div>
                  </td>
                  <td className="mono">{alert.score.toFixed(2)}</td>
                  <td className={`sev ${alert.sev}`}>{alert.sev}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
        <article className="card">
          <h2>Pipeline</h2>
          <ol className="pipeline">
            {pipeline.map((item) => (
              <li key={item.step}>
                <strong>{item.step}</strong>
                {item.detail}
              </li>
            ))}
          </ol>
        </article>
      </section>
    </Shell>
  );
}
