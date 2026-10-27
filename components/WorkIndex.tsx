"use client";

import Link from "next/link";
import { useState } from "react";
import { disciplines, formatOf, projects, type Discipline } from "@/data/projects";

type Filter = "All" | Discipline;

export function WorkIndex() {
  const [filter, setFilter] = useState<Filter>("All");
  const [hovered, setHovered] = useState<string | null>(null);

  const numbered = projects.map((p, i) => ({ ...p, no: String(i + 1).padStart(2, "0") }));
  const visible = numbered.filter((p) => filter === "All" || p.discipline === filter);
  const current = numbered.find((p) => p.slug === hovered) ?? visible[0];
  const filters: Filter[] = ["All", ...disciplines];

  return (
    <div className="index">
      <section aria-label="Work index">
        <div className="filters">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={f === filter}
              onClick={() => {
                setFilter(f);
                setHovered(null);
              }}
            >
              {f}{" "}
              <span className="count">
                {f === "All" ? projects.length : projects.filter((p) => p.discipline === f).length}
              </span>
            </button>
          ))}
        </div>

        <div className="row row-head" aria-hidden="true">
          <span>No.</span>
          <span>Title</span>
          <span className="discipline">Category</span>
          <span className="context">Format</span>
        </div>
        <div className={`rows${hovered ? " is-hovering" : ""}`} onMouseLeave={() => setHovered(null)}>
          {visible.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className={`row${p.slug === hovered ? " is-active" : ""}`}
              onMouseEnter={() => setHovered(p.slug)}
              onFocus={() => setHovered(p.slug)}
            >
              <span className="mono">{p.no}</span>
              <span className="title">{p.title}</span>
              <span className="discipline">{p.discipline}</span>
              <span className="context">{formatOf(p)}</span>
            </Link>
          ))}
        </div>
      </section>

      {current && (
        <aside className="preview" aria-hidden="true">
          <div className="plate">
            {current.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={current.image} alt="" />
            ) : (
              <span className="mono">{current.title}</span>
            )}
          </div>
          <div className="preview-meta mono">
            <span>{current.no}</span>
            <span>{current.context}</span>
          </div>
          <p>{current.summary}</p>
        </aside>
      )}
    </div>
  );
}
