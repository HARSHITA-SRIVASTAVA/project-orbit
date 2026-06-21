import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Side */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              Project Orbit
            </p>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
              Harshita Srivastava
            </h1>

            <p className="mt-4 text-lg font-medium text-slate-700">
              Software Engineer · Full Stack Developer
            </p>

            <p className="mt-8 text-xl leading-relaxed text-slate-600">
              Software Engineer focused on building reliable backend systems,
              scalable web applications, and products that create real-world
              impact.
            </p>

            <p className="mt-4 text-slate-600">
              Turning ideas into reliable software through backend engineering,
              full-stack development, and continuous learning.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>View Engineering</Button>

              <Button variant="secondary">
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="rounded-3xl border border-slate-200 p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Orbit Status
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm text-slate-500">Status</p>
                <p className="font-medium text-green-600">Active</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Primary Focus</p>
                <p className="font-medium text-slate-900">
                  Software Engineering
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Current Orbit</p>
                <p className="font-medium text-slate-900">
                  Backend Systems · MERN Development
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Latest Mission</p>
                <p className="font-medium text-slate-900">
                  Project Orbit
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}