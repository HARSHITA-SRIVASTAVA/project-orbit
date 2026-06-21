import Navbar from "@/components/layout/Navbar";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Project Orbit
          </p>

          <h1 className="mt-4 text-5xl font-bold text-slate-900">
            Mission Control
          </h1>

          <p className="mt-4 text-slate-600">
            Initializing portfolio systems...
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button>View Engineering</Button>

            <Button variant="secondary">
              Download Resume
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}