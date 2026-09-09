import { Shell } from "@/components/Shell";
import { models } from "@/lib/data";

export default function ModelosPage() {
  return (
    <Shell current="/modelos">
      <header className="top">
        <div>
          <p className="kicker">Aprendizaje automático</p>
          <h1>Modelos en producción</h1>
          <p className="lead">
            Arquitecturas ligeras pensadas para hardware on-premises. Validación
            cruzada k-fold (k=5). No sustituyen el juicio del analista: priorizan.
          </p>
        </div>
      </header>
      <section className="grid three">
        {models.map((model) => (
          <article className="card" key={model.name}>
            <b>{model.name}</b>
            <p className="metric">{model.f1.toFixed(2)}</p>
            <p className="hint">F1-score · AUC {model.auc.toFixed(2)}</p>
            <p style={{ marginTop: 12 }}>{model.task}</p>
            <p className={`status ${model.status}`} style={{ marginTop: 10 }}>
              {model.status === "produccion" ? "en producción" : model.status}
            </p>
          </article>
        ))}
      </section>
    </Shell>
  );
}
