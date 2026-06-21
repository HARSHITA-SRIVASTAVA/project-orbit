import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import OrbitStatus from "./OrbitStatus";

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
              scalable web applications, and products that create real-world impact.
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
          <OrbitStatus />

        </div>
      </Container>
    </section>
  );
}