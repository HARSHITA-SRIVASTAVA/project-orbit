import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import MissionCard from "@/components/engineering/MissionCard";
import { projects } from "@/data/projects";

// for browser top title
export const metadata = {   
  title: "Engineering Missions",
};


export default function EngineeringPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Container>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
            Engineering Missions
          </p>

          <h1 className="mt-5 text-5xl font-black text-slate-950">
            Software projects built with intent.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            A focused collection of full-stack, backend, and machine learning
            projects that reflect my software engineering journey.
          </p>

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <MissionCard key={project.id} project={project} />
            ))}
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
}