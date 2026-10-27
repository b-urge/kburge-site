import Link from "next/link";
import { roles } from "@/data/roles";

export function HiringDoors() {
  return (
    <section className="doors" aria-labelledby="doors-title">
      <span className="mono">For hiring managers</span>
      <h2 id="doors-title">The same work, sorted by the role you&rsquo;re hiring for.</h2>
      <div className="door-grid">
        <Link href="/capabilities" className="door">
          <span className="mono">Skills</span>
          <span>Technical capabilities</span>
        </Link>
        {roles.map((r) => (
          <Link key={r.slug} href={`/for/${r.slug}`} className="door">
            <span className="mono">{r.label}</span>
            <span>{r.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
