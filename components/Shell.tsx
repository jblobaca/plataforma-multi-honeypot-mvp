import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Shell({
  current,
  children,
}: {
  current: string;
  children: React.ReactNode;
}) {
  return (
    <div className="shell">
      <aside className="sidebar">
        <Link href="/" className="logo">
          <span className="mark" aria-hidden />
          <span>
            <strong>{site.name}</strong>
            <small>Threat Intelligence</small>
          </span>
        </Link>
        <nav>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={current === item.href ? "active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="tenant">
          Tenant: {site.org}
          <br />
          Red simulada · datos demo
        </p>
      </aside>
      <div className="workspace">{children}</div>
    </div>
  );
}
