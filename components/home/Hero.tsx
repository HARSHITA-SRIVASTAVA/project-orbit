import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import OrbitStatus from "./OrbitStatus";
import AvailabilityBadge from "./AvailabilityBadge";

import TechStack from "./TechStack";

export default function Hero() {
  return (
    <section className="pt-10 pb-10">
      <Container>
        <AvailabilityBadge />
        <div className=" mt-8 grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left Side */}

          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-slate-500">
              Project Orbit
            </p>

            <h1 className="mt-6 max-w-3xl text-6xl font-black tracking-tight text-slate-950 lg:text-7xl">
              Harshita Srivastava
            </h1>

            <p className="mt-4 text-2xl font-bold text-blue-600">
              Backend Engineer · Full Stack Developer
            </p>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600">
              Turning ideas into reliable software through backend engineering,
full-stack development, and continuous learning.
            </p>

            <p className="mt-4 text-slate-600">
              Currently building projects with Java, Spring Boot, MERN, and modern web technologies while continuously improving problem-solving and system design skills.
            </p>

            <TechStack />

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