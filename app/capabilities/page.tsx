import type { Metadata } from "next";
import Link from "next/link";
import { pillars } from "@/data/roles";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Technical capabilities",
  description: "Skills and tools, each linked to the work that shows it.",
};

const titleOf = (slug: string) => projects.find((p) => p.slug === slug)?.title ?? slug;

export default function Capabilities() {
  return (
    <>
      <section className="project-head">
        <div className="crumbs mono">
          <Link href="/">Index</Link>
          <span>/</span>
          <span>For hiring managers</span>
        </div>
        <h1>Technical capabilities</h1>
        <p className="summary">Every skill here links to the work that shows it.</p>
      </section>

      {pillars.map((pillar) => (
        <section key={pillar.title} className="split">
          <h2 className="mono">{pillar.title}</h2>
          <dl className="skills">
            {pillar.skills.map((c) => (
              <div key={c.skill}>
                <dt>{c.skill}</dt>
                <dd className="mono">{c.tools.join(", ")}</dd>
                <dd className="proof">
                  {c.proof.map((slug) => (
                    <Link key={slug} href={`/work/${slug}`}>
                      {titleOf(slug)}
                    </Link>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}

      <nav className="next" aria-label="More">
        <Link className="back" href="/">
          Back to index
        </Link>
      </nav>
    </>
  );
}
