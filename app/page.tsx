import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import CurrentOrbit from "@/components/home/CurrentOrbit";

import FeaturedMissions from "@/components/home/FeaturedMissions";


export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CurrentOrbit />
        <FeaturedMissions />
      </main>
    </>
  );
}