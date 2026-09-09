import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Header({ current }: { current: string }) {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand">
          <img src="/usil-logo.png" alt="USIL" />
          <span>
            <small>{site.university}</small>
            <strong>{site.shortTitle}</strong>
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
      </div>
    </header>
  );
}
