import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, projectNumber, type Project } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

const toolsLabel: Record<Project["view"]["kind"], string> = {
  course: "Format",
  video: "Format",
  document: "Format",
  app: "Format",
  build: "Event",
};

function Launch({ project }: { project: Project }) {
  const { view } = project;
  if (view.kind !== "course" && view.kind !== "app") return null;
  const course = view.kind === "course";
  return (
    <div className="actions">
      <a className="button" href={view.url} target="_blank" rel="noreferrer">
        {course ? "Launch the course" : "Open the app"} <span aria-hidden="true">↗</span>
      </a>
      <span className="mono">
        {course
          ? "Opens in a new tab. Sound on. Use the player\u2019s Next button. Best on a laptop."
          : "Opens in a new tab."}
      </span>
    </div>
  );
}

function Stage({ project }: { project: Project }) {
  const { view } = project;

  if (view.kind === "course" || view.kind === "app") {
    if (!project.image) return null;
    return (
      <figure className="stage">
        <a className="shot" href={view.url} target="_blank" rel="noreferrer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${view.kind === "course" ? "Opening screen" : "Screenshot"} of ${project.title}`}
          />
        </a>
      </figure>
    );
  }

  if (view.kind === "video") {
    return <Video id={view.youtubeId} title={project.title} />;
  }

  if (view.kind === "document") {
    const open = `https://drive.google.com/file/d/${view.driveId}/view`;
    return (
      <figure className="stage">
        <iframe
          className="frame doc"
          src={`https://drive.google.com/file/d/${view.driveId}/preview`}
          title={project.title}
          loading="lazy"
          allow="autoplay"
        />
        <div className="actions">
          <a className="button" href={open} target="_blank" rel="noreferrer">
            Open the PDF <span aria-hidden="true">↗</span>
          </a>
        </div>
      </figure>
    );
  }

  return view.youtubeId ? <Video id={view.youtubeId} title={project.title} /> : null;
}

function Video({ id, title }: { id: string; title: string }) {
  return (
    <figure className="stage">
      <iframe
        className="frame"
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </figure>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const { view } = project;

  return (
    <>
      <section className="project-head">
        <div className="crumbs mono">
          <Link href="/">Index</Link>
          <span>/</span>
          <span>{projectNumber(slug)}</span>
          <span>{project.discipline}</span>
        </div>
        <h1>{project.title}</h1>
        <p className="summary">{project.summary}</p>
        <Launch project={project} />
        <dl className="meta">
          <div>
            <dt className="mono">{toolsLabel[view.kind]}</dt>
            <dd>{project.context}</dd>
          </div>
          <div>
            <dt className="mono">Made with</dt>
            <dd>{project.tools.join(", ")}</dd>
          </div>
          {view.kind === "build" && (
            <div>
              <dt className="mono">Code</dt>
              <dd>
                <a href={view.repo}>GitHub ↗</a>
              </dd>
            </div>
          )}
        </dl>
      </section>

      <Stage project={project} />

      {project.notes && project.notes.length > 0 && (
        <section className="split">
          <h2 className="mono">Notes</h2>
          <div className="prose">
            {project.notes.map((n) => (
              <p key={n}>{n}</p>
            ))}
          </div>
        </section>
      )}

      <nav className="next" aria-label="More work">
        <Link className="back" href="/">
          Back to index
        </Link>
        <Link className="forward" href={`/work/${next.slug}`}>
          <span className="mono">Next {projectNumber(next.slug)}</span>
          {next.title}
        </Link>
      </nav>
    </>
  );
}
