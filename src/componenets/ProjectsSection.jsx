import { ExternalLink, Github, ArrowRight, Eye } from "lucide-react";
import { useState } from "react";
import { ImageModal } from "./ui/ImageModal";

const projects = [
  {
    id: 1,
    title: "Certified Tree Service Inc",
    description: "A modern web application built with React, TypeScript, and Tailwind CSS. Features responsive design, dynamic content management, Netlify Forms integration, and optimized performance. Demonstrates expertise in modern front-end architecture and deployment workflows.",
    image: "/projects/CertifiedTreeServiceInc.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "HTML", "JavaScript", "Netlify"],
    demoUrl: "https://github.com/joseavalencia",
    githubUrl: "https://github.com/joseavalencia",
  },
  {
    id: 2,
    title: "Custom Recipe Manager",
    description: "A comprehensive full-stack application showcasing database design, API integration, and modern web architecture. Features include user authentication, real-time search, RESTful API endpoints, and third-party service integration. Built with React, Python, and SQL, demonstrating full-stack development capabilities.",
    image: "/projects/Mealzi.png",
    tags: ["React", "Py4web", "SQLite", "Python", "Node.js", "Tailwind CSS"],
    demoUrl: "https://github.com/joseavalencia",
    githubUrl: "https://github.com/joseavalencia",
  },
  {
    id: 3,
    title: "Computer Graphics Projects",
    description: "An advanced computer graphics portfolio showcasing expertise in low-level graphics programming. Implements complex rendering algorithms, shader programming, and 3D transformations using WebGL and GLSL. Features interactive demonstrations of graphics concepts, optimized performance, and seamless Three.js integration.",
    image: "/projects/ComputerGraphicProjects.png",
    tags: ["WebGL", "JavaScript", "HTML","CSS", "GLSL Shaders", "Three.js"],
    demoUrl: "https://github.com/joseavalencia",
    githubUrl: "https://github.com/joseavalencia",
  },
];

export const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image, title) => {
    setSelectedImage({ image, title });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some highlighted projects that showcase my diverse technical expertise. 
          From polished front-end applications to full-stack solutions, these projects demonstrate 
          my ability to deliver complete, scalable software solutions using modern technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                  onClick={() => openModal(project.image, project.title)}
                />
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openModal(project.image, project.title)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 text-black rounded-full hover:bg-white transition-colors"
                  >
                    <Eye size={16} />
                    Quick View
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Want to see more of my work? Check out my GitHub for additional projects, 
            experiments, and contributions.
          </p>
          <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-2" 
            target="_blank"
            href="https://github.com/joseavalencia"
          >
            View All Projects on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage?.image}
        title={selectedImage?.title}
      />
    </section>
  );
};
