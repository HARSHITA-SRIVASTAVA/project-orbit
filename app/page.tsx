import OrbitLogo from "@/components/layout/OrbitLogo";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <OrbitLogo />
        </div>

        <h1 className="text-5xl font-bold text-slate-900">
          Mission Control
        </h1>

        <p className="mt-4 text-slate-600">
          Initializing portfolio systems...
        </p>
      </div>
    </main>
  );
}