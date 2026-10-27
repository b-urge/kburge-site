import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectRows } from "@/components/ProjectRows";
import { roles } from "@/data/roles";

type Props = { params: Promise<{ role: string }> };

export function generateStaticParams() {
  return roles.map((r) => ({ role: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { role } = await params;
  const r = roles.find((x) => x.slug === role);
  return r ? { title: r.title, description: r.pitch } : {};
}

export default async function RolePage({ params }: Props) {
  const { role } = await params;
  const r = roles.find((x) => x.slug === role);
  if (!r) notFound();

  return (
    <>
      <section className="project-head">
        <div className="crumbs mono">
          <Link href="/">Index</Link>
          <span>/</span>
          <span>For hiring managers</span>
        </div>
        <h1>{r.title}</h1>
        <p className="summary">{r.pitch}</p>
      </section>

      <section>
        <h2 className="mono section-label">The work</h2>
        <ProjectRows slugs={r.proof} />
      </section>

      <nav className="next" aria-label="More">
        <Link className="back" href="/">
          Back to index
        </Link>
        <Link className="forward" href="/capabilities">
          <span className="mono">Skills</span>
          Technical capabilities
        </Link>
      </nav>
    </>
  );
}
