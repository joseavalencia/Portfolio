import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL without the hash
      window.history.pushState({}, "", window.location.pathname);
    }
  };
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20"
    > 
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">
              Hi, I'm{" "}
              <span className="text-primary">Jose</span>{" "}
              <span className="text-gradient">Valencia</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-1">
            Front-end focused Software Engineer with full-stack expertise. UCSC Computer Science graduate specializing in modern web applications, while bringing deep knowledge in AI/ML, systems architecture, and innovative technologies. I craft engaging user experiences backed by robust engineering principles.
          </p>
          <div className="pt-8 opacity-0 animate-fade-in-delay-2"> 
            <a 
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="cosmic-button"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div 
        onClick={() => scrollToSection('projects')}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
      > 
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}
