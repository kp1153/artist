// File: app/page.js

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FolkArtSection from "@/components/FolkArtSection";
import ContemporarySection from "@/components/ContemporarySection";
import ExhibitionsSection from "@/components/ExhibitionsSection";
import AcademicSection from "@/components/AcademicSection";
import PublicationsSection from "@/components/PublicationsSection";
import AwardsSection from "@/components/AwardsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FolkArtSection />
      <ContemporarySection />
    <ExhibitionsSection />
      <AcademicSection />
      <PublicationsSection />
      <AwardsSection />
    </>
  );
}