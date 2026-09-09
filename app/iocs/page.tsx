import { Shell } from "@/components/Shell";
import { iocs } from "@/lib/data";

export default function IocsPage() {
  return (
    <Shell current="/iocs">
      <header className="top">
        <div>
          <p className="kicker">Feed propio</p>
          <h1>Indicadores de compromiso</h1>
          <p className="lead">
            IOCs extraídos de los señuelos, listos para exportar a MISP en
            STIX/TAXII. Direcciones de documentación (RFC 5737), no tráfico real.
          </p>
        </div>
      </header>
      <article className="card">
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Confianza</th>
              <th>Fuente</th>
              <th>Primera vez</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {iocs.map((ioc) => (
              <tr key={ioc.value}>
                <td className="mono">{ioc.type}</td>
                <td className="mono">{ioc.value}</td>
                <td className="mono">{Math.round(ioc.conf * 100)}%</td>
                <td>{ioc.src}</td>
                <td>{ioc.first}</td>
                <td className="hint">{ioc.tags.join(" · ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </Shell>
  );
}
