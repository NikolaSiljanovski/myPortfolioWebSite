import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "PetLink",
    description: "The all-in-one platform for pet owners.",
    longDescription: "A comprehensive platform designed to connect pet owners with all the services they need. Features include pet profiles, health tracking, appointment scheduling, and community features for pet enthusiasts.",
    techStack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/NikolaSiljanovski/PetLink",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "VibeStrings - Guitar Shop",
    description: "🎸 Modern, responsive single-page React app for browsing guitars.",
    longDescription: "A sleek online guitar shop featuring brand filtering, detailed guitar views, and artist highlights. Built with React for a smooth, responsive browsing experience across all devices.",
    techStack: ["JavaScript", "React", "CSS", "JSON"],
    githubUrl: "https://github.com/NikolaSiljanovski/guitar-shop-react",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "WeWantWaste",
    description: "A redesign of a real website with modern aesthetics.",
    longDescription: "Complete UI/UX redesign project transforming an existing website into a modern, user-friendly experience. Focused on improved navigation, visual hierarchy, and responsive design principles.",
    techStack: ["CSS", "HTML", "UI/UX Design"],
    githubUrl: "https://github.com/NikolaSiljanovski/WeWantWaste",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Move-With-Joy",
    description: "Complete moving service website for home or business.",
    longDescription: "Professional website for a moving company providing complete moving services for homes and businesses. Features service listings, quote requests, and information about the experienced team ensuring safe and efficient deliveries.",
    techStack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/NikolaSiljanovski/Move-With-Joy",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "TinDog",
    description: "Tinder for dogs - find the perfect match for your pet! 🐕",
    longDescription: "A fun, playful website concept inspired by Tinder, designed to help dog owners find suitable matches for their pets. Features include pet profiles, matching interface, and a charming design.",
    techStack: ["HTML", "CSS", "Bootstrap"],
    githubUrl: "https://github.com/NikolaSiljanovski/TinDog-Project",
    gradient: "from-rose-500 to-red-500",
  },
  {
    title: "University Private Project",
    description: "Full-stack web application for university professor (Freelance).",
    longDescription: "A comprehensive web application built in collaboration with a university professor. This project involves both frontend and backend development, with a focus on delivering a production-ready solution.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    gradient: "from-indigo-500 to-violet-500",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow bg-card h-full">
        {/* Gradient accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
        
        <CardContent className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mt-2">
                {project.description}
              </p>
            </div>
          </div>

          {/* Expandable content */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 my-4">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
            {project.liveUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </a>
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-auto"
            >
              {isExpanded ? (
                <>
                  Less <ChevronUp className="w-4 h-4 ml-1" />
                </>
              ) : (
                <>
                  More <ChevronDown className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-medium text-primary uppercase tracking-widest"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-foreground"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground mt-4 max-w-lg mx-auto"
            >
              A showcase of projects that demonstrate my skills in full-stack 
              development and creative problem-solving.
            </motion.p>
          </div>

          {/* Projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
