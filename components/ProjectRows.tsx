import Link from "next/link";
import { projects, projectNumber } from "@/data/projects";

export function ProjectRows({ slugs }: { slugs: string[] }) {
  const list = slugs.map((s) => projects.find((p) => p.slug === s)!).filter(Boolean);
  return (
    <div className="rows">
      {list.map((p) => (
        <Link key={p.slug} href={`/work/${p.slug}`} className="row">
          <span className="mono">{projectNumber(p.slug)}</span>
          <span className="title">{p.title}</span>
          <span className="discipline">{p.discipline}</span>
          <span className="context">{p.context}</span>
        </Link>
      ))}
    </div>
  );
}
