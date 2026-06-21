import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import CurrentOrbit from "@/components/home/CurrentOrbit";

import FeaturedMissions from "@/components/home/FeaturedMissions";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import MilestonesPreview from "@/components/home/MilestonesPreview";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CurrentOrbit />
        <FeaturedMissions />
        <ExperiencePreview />
        <MilestonesPreview />
      </main>
    </>
  );
}