import Hero from "@/components/sections/Hero";
import WhatIBuild from "@/components/sections/WhatIBuild";
import RAGExperience from "@/components/sections/RAGExperience";
import Projects from "@/components/sections/Projects";
import MLExperience from "@/components/sections/MLExperience";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero />
      <WhatIBuild />
      <RAGExperience />
      <Projects />
      <MLExperience />
      <Journey />
      <Contact />
    </main>
  );
}
