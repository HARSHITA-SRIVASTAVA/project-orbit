import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import OrbitStatus from "./OrbitStatus";
import AvailabilityBadge from "./AvailabilityBadge";
import ProfileCard from "./ProfileCard";

import Link from "next/link";

import TechStack from "./TechStack";

export default function Hero() {
  return (
    <section className="pt-6 pb-12">
      <Container>
        <AvailabilityBadge />
        <div className=" mt-4 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

          {/* Left Side */}

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              Project Orbit
            </p>

            <h1 className="mt-6 max-w-3xl text-6xl font-black tracking-tight text-slate-950 lg:text-7xl">
              Harshita Srivastava
            </h1>

            <p className="mt-4 text-2xl font-bold text-blue-600">
              Backend Engineer · Full Stack Developer
            </p>

            <p className="mt-3 text-base font-medium text-slate-800">
                9.5 CGPA • RV Institute of Technology and Management
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
            <Link href="/engineering">
                <Button>View Engineering</Button>
            </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Button variant="secondary">
                    View Resume ↗
                </Button>
                </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
  <ProfileCard />
  <OrbitStatus />
</div>

        </div>
      </Container>
    </section>
  );
}