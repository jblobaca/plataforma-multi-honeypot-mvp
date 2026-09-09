import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>
          {site.author} · {site.career} · {site.university} · {site.year}
        </p>
        <p>
          Asesor: {site.advisor}. Caso de aplicación: {site.org}. El dashboard
          usa datos de demostración; no captura tráfico real.
        </p>
      </div>
    </footer>
  );
}
