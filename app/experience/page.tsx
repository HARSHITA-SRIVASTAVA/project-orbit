import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import { experiences } from "@/data/experience";

import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  const experience = experiences[0];

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Container>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
            Flight Log
          </p>

          <h1 className="mt-5 text-5xl font-black text-slate-950">
            Mission Experience
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Real-world website design experience through internship work,
            client collaboration, mentor reviews, and responsive website
            delivery.
          </p>

          <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-4xl font-black text-slate-950">
              {experience.company}
            </h2>

            <p className="mt-3 text-xl font-bold text-blue-600">
              {experience.role}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {experience.duration} · {experience.location}
            </p>

            <p className="mt-6 max-w-3xl leading-relaxed text-slate-600">
              {experience.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {experience.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-black text-slate-950">
              Websites Delivered
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {experience.projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    {project.type}
                  </p>

                  <h3 className="mt-4 text-2xl font-black text-slate-950">
                    {project.title}
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {project.contribution.map((item) => (
                      <li key={item} className="text-slate-600">
                        ✓ {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    View Website ↗
                  </a>
                </article>
              ))}
            </div>
          </section>
        </Container>
        
      </main>
      <Footer />
    </>
  );
}