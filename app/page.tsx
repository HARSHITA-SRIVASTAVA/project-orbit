import Navbar from "@/components/layout/Navbar";
import Button from "@/components/ui/Button";

import Hero from "@/components/home/Hero";
import CurrentOrbit from "@/components/home/CurrentOrbit";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        {/* Hero */}
        <Hero />
        <CurrentOrbit />

      </main>
    </>
  );
}