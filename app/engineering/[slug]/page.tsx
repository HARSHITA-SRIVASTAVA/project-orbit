import { projects } from "@/data/projects";
import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import Button from "@/components/ui/Button";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
            Engineering Mission
          </p>

          <h1 className="mt-5 text-5xl font-black text-slate-950">
            {project.title}
          </h1>

          <p className="mt-4 text-xl font-semibold text-slate-600">
            {project.subtitle}
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
<div className="mt-16 space-y-14">

  <section>
    <h2 className="text-2xl font-bold text-slate-950">
      Problem
    </h2>

    <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
      {project.problem}
    </p>
  </section>


  <section>
    <h2 className="text-2xl font-bold text-slate-950">
      Solution
    </h2>

    <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
      {project.solution}
    </p>
  </section>


  <section>
    <h2 className="text-2xl font-bold text-slate-950">
      Features
    </h2>

    <ul className="mt-5 space-y-3">
      {project.features.map((feature) => (
        <li
          key={feature}
          className="text-slate-600"
        >
          ✓ {feature}
        </li>
      ))}
    </ul>
  </section>


  <section>
    <h2 className="text-2xl font-bold text-slate-950">
      Challenges
    </h2>

    <ul className="mt-5 space-y-3">
      {project.challenges.map((challenge) => (
        <li
          key={challenge}
          className="text-slate-600"
        >
          • {challenge}
        </li>
      ))}
    </ul>
  </section>


  <section>
    <h2 className="text-2xl font-bold text-slate-950">
      Learnings
    </h2>

    <ul className="mt-5 space-y-3">
      {project.learnings.map((learning) => (
        <li
          key={learning}
          className="text-slate-600"
        >
          → {learning}
        </li>
      ))}
    </ul>
  </section>

</div>


          <div className="mt-10 flex flex-wrap gap-4">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank">
                <Button variant="secondary">GitHub ↗</Button>
              </a>
            )}

            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank">
                <Button>Live Demo ↗</Button>
              </a>
            )}
          </div>
        </Container>   
      </main>
      <Footer />
    </>
  );
}