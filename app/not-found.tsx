import Link from "next/link";

export default function NotFound() {
  return (
    <section className="project-head">
      <h1>Nothing here.</h1>
      <p className="summary">
        That page doesn&rsquo;t exist. <Link href="/">Back to the index</Link>.
      </p>
    </section>
  );
}
