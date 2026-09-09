"use client";

import { useMemo, useState } from "react";
import { Shell } from "@/components/Shell";
import { alerts, type Severity } from "@/lib/data";

const filters: Array<"todas" | Severity> = ["todas", "alta", "media", "baja"];

export default function AlertasPage() {
  const [sev, setSev] = useState<(typeof filters)[number]>("todas");
  const rows = useMemo(
    () => (sev === "todas" ? alerts : alerts.filter((a) => a.sev === sev)),
    [sev],
  );

  return (
    <Shell current="/alertas">
      <header className="top">
        <div>
          <p className="kicker">Motor ML</p>
          <h1>Alertas puntuadas</h1>
          <p className="lead">
            Eventos correlacionados y ordenados por score. LSTM, CNN y Naive
            Bayes clasifican la sesión; el analista solo ve lo accionable.
          </p>
        </div>
      </header>
      <div className="filters">
        {filters.map((item) => (
          <button
            key={item}
            className={sev === item ? "on" : undefined}
            onClick={() => setSev(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <article className="card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Hora</th>
              <th>Título</th>
              <th>Origen</th>
              <th>Modelo</th>
              <th>TTP</th>
              <th>Score</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((alert) => (
              <tr key={alert.id}>
                <td className="mono">{alert.id}</td>
                <td className="mono">{alert.time}</td>
                <td>
                  {alert.title}
                  <div className="hint">{alert.sensor}</div>
                </td>
                <td className="mono">{alert.src}</td>
                <td>{alert.model}</td>
                <td className="mono">{alert.ttp}</td>
                <td className={`sev ${alert.sev}`}>{alert.score.toFixed(2)}</td>
                <td>
                  <span className={`status ${alert.status}`}>
                    {alert.status === "triage" ? "en triage" : alert.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </Shell>
  );
}
