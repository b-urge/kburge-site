import { WorkIndex } from "@/components/WorkIndex";

export default function Home() {
  return (
    <>
      <h1 className="hero">
        I make technical things easier to learn through interactive applications, courses,
        documentation, and explainer videos. I&rsquo;m also a builder who experiments with hardware.
      </h1>

      <section className="howto" aria-labelledby="howto-title">
        <h2 id="howto-title" className="mono">
          How to browse
        </h2>
        <ol>
          <li>
            <span className="mono">1</span>
            <span>Filter by type of work, or browse everything.</span>
          </li>
          <li>
            <span className="mono">2</span>
            <span>Click a title to open the project.</span>
          </li>
          <li>
            <span className="mono">3</span>
            <span>Courses have sound, so turn your volume up.</span>
          </li>
        </ol>
      </section>

      <WorkIndex />

      <section id="about" className="about" aria-labelledby="about-title">
        <h2 id="about-title" className="mono">
          About
        </h2>
        <div className="about-body">
          <p className="lead">
            I&rsquo;m a learning developer and technical writer with 10+ years of experience making
            complex technical concepts easier to understand.
          </p>
          <p>
            My background is in instructional design and enablement, but my work extends into
            developer education, cloud infrastructure, AI, and building interactive tools. I&rsquo;m
            driven by curiosity and enjoy figuring out how things work, experimenting with new
            technologies, and documenting what I learn along the way.
          </p>
          <p>
            I&rsquo;m currently open to roles in enablement, developer education, and technical
            writing.
          </p>
          <p>
            Outside of work, I love all things radio, I&rsquo;m a big fan of movies, hackathons, and I
            run <a href="https://luma.com/mia-hardware-meetup">Hardware Meetup Miami</a>.
          </p>
          <p>
            Want to demo something, or just say hi? Email me at{" "}
            <a href="mailto:k@burge.world">k@burge.world</a>.
          </p>
          <div className="elsewhere">
            <span className="mono">Elsewhere</span>
            <a href="https://github.com/b-urge/Blase-Plaza-Archives">Blase Plaza Archives</a>
          </div>
        </div>
        <figure className="portrait">
          <picture>
            <source srcSet="/images/portrait-still.jpg" media="(prefers-reduced-motion: reduce)" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/portrait.webp" alt="Engraved portrait of Katherine Burge" width={400} height={400} />
          </picture>
        </figure>
      </section>
    </>
  );
}
