import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import CurrentOrbit from "@/components/home/CurrentOrbit";

import FeaturedMissions from "@/components/home/FeaturedMissions";
import ExperiencePreview from "@/components/home/ExperiencePreview";
import MilestonesPreview from "@/components/home/MilestonesPreview";
import Footer from "@/components/layout/Footer";

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
        <Footer />
      </main>
    </>
  );
}