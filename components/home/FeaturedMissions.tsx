import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";
import MissionCard from "@/components/engineering/MissionCard";

export default function FeaturedMissions() {
  const featuredProjects = projects.filter((project) => project.featured);
  const experiments = projects.filter((project) => !project.featured);

  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
            Engineering Missions
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-950">
            Projects built with engineering intent.
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            A focused collection of full-stack, backend, and machine learning
            projects that reflect my current software engineering journey.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <MissionCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8 grid gap-6">
          {experiments.map((project) => (
            <MissionCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}