import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL without the hash
      window.history.pushState({}, "", window.location.pathname);
    }
  };
  return (
    <section id="about" className="py-16 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> 
          <div className="space-y-6"> 
            <h3 className="text-2xl font-semibold"> 
              Front-End Focused Software Engineer
            </h3>

            <p className="text-muted-foreground"> 
              I'm a Computer Science graduate from UC Santa Cruz, specializing in front-end development while maintaining strong full-stack capabilities. My comprehensive background spans modern web technologies, systems architecture, and emerging tech like AI/ML. I combine academic excellence with practical experience, having built everything from responsive web apps to embedded systems, while also managing digital operations for a successful family business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a 
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="cosmic-button"
              > 
                Get in Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 card-hover shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div> 
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Modern Web Development</h4>
                  <p className="text-muted-foreground">
                    Crafting exceptional user experiences with React, Next.js, and modern front-end technologies, while maintaining full-stack proficiency.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 card-hover shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Innovation & Business</h4>
                  <p className="text-muted-foreground">
                    Bridging technology and business needs through innovative solutions, from AI integration to scalable web applications and digital transformation.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 card-hover shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Engineering Excellence</h4>
                  <p className="text-muted-foreground">
                    Strong foundation in computer science fundamentals, from algorithms to systems design, complemented by hands-on experience in AI/ML and embedded systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

