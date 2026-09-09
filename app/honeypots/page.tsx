import { Shell } from "@/components/Shell";
import { honeypots } from "@/lib/data";

const activos = honeypots.filter((h) => h.status === "activo").length;

export default function HoneypotsPage() {
  return (
    <Shell current="/honeypots">
      <header className="top">
        <div>
          <p className="kicker">Capa de captura</p>
          <h1>Flota multi-honeypot</h1>
          <p className="lead">
            {activos} de {honeypots.length} señuelos en línea. Cada instancia
            emula un servicio distinto para registrar interacción no solicitada
            en la red simulada.
          </p>
        </div>
      </header>
      <article className="card">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Señuelo</th>
              <th>Servicio</th>
              <th>Estado</th>
              <th>Eventos</th>
              <th>Último visto</th>
            </tr>
          </thead>
          <tbody>
            {honeypots.map((hp) => (
              <tr key={hp.id}>
                <td className="mono">{hp.id}</td>
                <td>{hp.name}</td>
                <td>{hp.service}</td>
                <td>
                  <span className={`status ${hp.status}`}>{hp.status}</span>
                </td>
                <td className="mono">{hp.events.toLocaleString("es-PE")}</td>
                <td className="hint">{hp.last}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </Shell>
  );
}
