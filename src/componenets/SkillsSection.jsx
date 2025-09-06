import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Database, Palette, Zap, Globe } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: <Globe className="h-6 w-6" />,
    description: "Creating modern, responsive, and interactive user interfaces",
    skills: [
      { name: "React/Next.js", level: 90, color: "from-blue-500 to-cyan-500" },
      { name: "TypeScript/JavaScript", level: 90, color: "from-blue-600 to-blue-800" },
      { name: "Tailwind/Bootstrap", level: 90, color: "from-cyan-500 to-blue-500" },
      { name: "Redux/Context", level: 85, color: "from-purple-500 to-purple-700" },
      { name: "UI/UX Design", level: 90, color: "from-pink-500 to-rose-500" },
      { name: "HTML/CSS", level: 95, color: "from-blue-500 to-cyan-600" },
    ]
  },
  {
    id: "backend",
    name: "Backend & Systems",
    icon: <Database className="h-6 w-6" />,
    description: "Building scalable server-side applications and APIs",
    skills: [
      { name: "Node.js/Express", level: 85, color: "from-green-500 to-green-700" },
      { name: "REST/GraphQL", level: 85, color: "from-pink-500 to-purple-500" },
      { name: "PostgreSQL/SQLite", level: 85, color: "from-blue-500 to-blue-700" },
      { name: "AWS/Cloud", level: 75, color: "from-orange-400 to-red-500" },
      { name: "System Design", level: 80, color: "from-cyan-500 to-blue-500" },
      { name: "Docker/Kubernetes", level: 75, color: "from-pink-500 to-purple-600" },
    ]
  },
  {
    id: "cs",
    name: "Computer Science",
    icon: <Code className="h-6 w-6" />,
    description: "Strong foundation in CS principles and advanced concepts",
    skills: [
      { name: "Algorithms", level: 85, color: "from-indigo-500 to-indigo-700" },
      { name: "OS/Systems", level: 80, color: "from-blue-500 to-blue-700" },
      { name: "Software Engineering Principles", level: 80, color: "from-green-500 to-emerald-500"},
      { name: "Computer Networks", level: 80, color: "from-cyan-500 to-blue-500"},
      { name: "Databases", level: 85, color: "from-amber-500 to-yellow-600"},
      { name: "Security/Cryptography", level: 70, color: "from-green-300 to-emerald-600"},
    ]
  },
  {
    id: "ai",
    name: "AI & Innovation",
    icon: <Zap className="h-6 w-6" />,
    description: "Experience with cutting-edge AI and emerging technologies",
    skills: [
      { name: "LLM Integration", level: 80, color: "from-green-500 to-emerald-500" },
      { name: "NLP/ML", level: 85, color: "from-blue-500 to-blue-700" },
      { name: "Python/TensorFlow", level: 85, color: "from-yellow-500 to-orange-500" },
      { name: "Embedded Systems", level: 75, color: "from-red-500 to-rose-600" },
      { name: "API Design", level: 85, color: "from-cyan-500 to-blue-500" },
      { name: "Computer Vision", level: 75, color: "from-green-500 to-emerald-500" },

    ]
  },
  {
    id: "tools",
    name: "Development Tools",
    icon: <Zap className="h-6 w-6" />,
    description: "Proficiency in modern development and deployment tools",
    skills: [
      { name: "Git/GitHub", level: 85, color: "from-gray-400 to-gray-700" },
      { name: "Docker/K8s", level: 75, color: "from-blue-500 to-blue-600" },
      { name: "CI/CD", level: 85, color: "from-green-500 to-emerald-500" },
      { name: "Testing", level: 85, color: "from-amber-500 to-orange-600" },
      { name: "Agile", level: 80, color: "from-blue-500 to-indigo-600" },
      { name: "ESLint/Prettier", level: 75, color: "from-green-500 to-emerald-500" },
    ]
  }
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const currentCategory = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-16 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          As a front-end focused engineer with full-stack capabilities, I bring a comprehensive skill set spanning modern web technologies, 
          computer science fundamentals, and cutting-edge AI/ML tools. My UCSC education and practical experience enable me to tackle complex technical challenges.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-primary/10 hover:scale-105"
              )}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills List */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">{currentCategory.name}</h3>
              <p className="text-muted-foreground">{currentCategory.description}</p>
            </div>
            
            <div className="space-y-4">
              {currentCategory.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary/50 h-3 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r",
                        skill.color,
                        hoveredSkill === skill.name ? "scale-105" : ""
                      )}
                      style={{ 
                        width: `${skill.level}%`,
                        transform: hoveredSkill === skill.name ? "scaleY(1.2)" : "scaleY(1)"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Representation */}
          <div className="relative">
            <div className="bg-card p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  {currentCategory.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{currentCategory.name}</h4>
                <p className="text-muted-foreground">{currentCategory.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {currentCategory.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={cn(
                      "p-4 rounded-lg border transition-all duration-300 hover:scale-105",
                      "bg-gradient-to-br from-card to-secondary/30"
                    )}
                  >
                    <div className="text-center">
                      <div className={cn(
                        "w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-sm",
                        `bg-gradient-to-r ${skill.color}`
                      )}>
                        {skill.level}%
                      </div>
                      <h5 className="font-medium text-sm">{skill.name}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm passionate about continuous learning and staying current with technology trends. Currently exploring 
            <span className="text-primary font-medium"> Web3/Blockchain</span>, 
            <span className="text-primary font-medium"> Advanced System Design</span>, and 
            <span className="text-primary font-medium"> Cloud-Native Architecture</span>.
          </p>
        </div>
      </div>
    </section>
  );
};


