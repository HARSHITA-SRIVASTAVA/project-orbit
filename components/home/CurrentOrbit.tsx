import Container from "@/components/layout/Container";

export default function CurrentOrbit() {
  return (
    <section className="pb-20">
      <Container>
        <div className="rounded-3xl border border-slate-200 p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Current Orbit
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Building Project Orbit
          </h2>

          <p className="mt-4 max-w-2xl text-slate-600">
            Currently focused on building a professional engineering portfolio,
            improving backend development skills, and preparing for software
            engineering opportunities.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm text-slate-500">Status</p>
              <p className="font-medium text-green-600">
                Active Development
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Current Focus</p>
              <p className="font-medium text-slate-900">
                MERN & Backend Systems
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Next Objective</p>
              <p className="font-medium text-slate-900">
                New Flagship Project
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}