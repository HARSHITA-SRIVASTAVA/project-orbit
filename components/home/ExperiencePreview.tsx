import Container from "@/components/layout/Container";
import { experiences } from "@/data/experience";

export default function ExperiencePreview() {
  const experience = experiences[0];

  return (
    <section className="py-10">
      <Container>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
            Flight Log
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-4xl font-black text-slate-950">
                {experience.company}
              </h2>

              <p className="mt-3 text-lg font-semibold text-blue-600">
                {experience.role}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {experience.duration} · {experience.location}
              </p>

              <p className="mt-6 leading-relaxed text-slate-600">
                {experience.summary}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {experience.projects.slice(0, 4).map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-600/10"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {project.type}
                  </p>

                  <h3 className="mt-3 font-bold text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    {project.contribution[0]}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}