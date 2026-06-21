import Container from "@/components/layout/Container";
import { milestones } from "@/data/milestones";

export default function MilestonesPreview() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
            Mission Milestones
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-950">
            Signals of growth beyond projects.
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            A curated snapshot of coding, cloud, certification, community, and
            learning milestones.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {milestones.slice(0, 6).map((milestone) => (
            <article
              key={milestone.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                {milestone.category} · {milestone.year}
              </p>

              <h3 className="mt-4 text-xl font-black text-slate-950">
                {milestone.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {milestone.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}