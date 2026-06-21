import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import { milestones } from "@/data/milestones";

import Footer from "@/components/layout/Footer";


export default function MilestonesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
            Mission Milestones
          </p>

          <h1 className="mt-5 text-5xl font-black text-slate-950">
            Growth Beyond Projects
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            A curated record of coding progress, certifications, cloud learning,
            community involvement, and personal growth.
          </p>

          <section className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {milestones.map((milestone) => (
              <article
                key={milestone.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/10"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {milestone.category} · {milestone.year}
                </p>

                <h2 className="mt-4 text-2xl font-black text-slate-950">
                  {milestone.title}
                </h2>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {milestone.description}
                </p>
              </article>
            ))}
          </section>
        </Container>
       
      </main>
       <Footer />
    </>
  );
}