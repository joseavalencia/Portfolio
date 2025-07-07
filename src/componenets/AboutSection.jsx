import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> 
          <div className="space-y-6"> 
            <h3 className="text-2xl font-semibold"> 
              Passionate Web Developer & Business Owner
            </h3>

            <p className="text-muted-foreground"> 
              With over 5 years of experience in web development, I've worked with a wide range of clients, from small businesses to large corporations. I've built websites, web applications, and e-commerce platforms.
            </p>

            <p className="text-muted-foreground">
              I'm a passionate web developer with a strong focus on creating user-friendly and efficient websites. I've worked with a wide range of clients, from small businesses to large corporations. I've built websites, web applications, and e-commerce platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button"> 
                {" "}
                Get in Touch
              </a>

              <a 
                href="" 
                className="px-6 py-2 rounded-full border border-primary text-primary hober:bg-primary/10 transition-colors duration-300"
                download="Jose_Valencia_CV.pdf"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div> 
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive and user-friendly websites using modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing user-friendly and efficient interfaces for websites and applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> 
                      Project Management
                  </h4>
                  <p className="text-muted-foreground">
                    Leading and managing projects to ensure they are completed on time and within budget.
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

