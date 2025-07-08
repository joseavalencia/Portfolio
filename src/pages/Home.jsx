import { ThemeToggle } from "../componenets/ThemeToggle";
import { StarBackground } from "@/componenets/StarBackground";
import { Navbar } from "../componenets/Navbar";
import { HeroSection } from "../componenets/HeroSection";
import { AboutSection } from "../componenets/AboutSection";
import { SkillsSection } from "../componenets/SkillsSection";
import { ProjectsSection } from "../componenets/ProjectsSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground /> 

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      {/* Footer */}
    </div>
  );
}

