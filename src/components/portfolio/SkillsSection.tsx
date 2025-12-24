import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML", "CSS", "Java", "Ruby", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Ruby on Rails", "Node.js", "TailwindCSS", "Bootstrap"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "VS Code", "Microsoft Office", "Figma", "Linux", "Windows"],
    },
    {
      title: "Soft Skills",
      skills: ["Teamwork", "Problem Solving", "Time Management", "Communication", "Fast Learner", "Creativity"],
    },
  ];

  const languages = [
    { name: "Macedonian", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Serbian", level: "Fluent" },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-medium text-primary uppercase tracking-widest"
            >
              Tech Stack
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-foreground"
            >
              Skills & <span className="gradient-text">Technologies</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground mt-4 max-w-lg mx-auto"
            >
              A curated selection of technologies I've mastered through projects, 
              coursework, and continuous self-improvement.
            </motion.p>
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                    >
                      <Badge variant="skill" className="text-sm">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <Badge variant="gradient" className="text-sm">
                    {lang.name}
                  </Badge>
                  <span className="text-sm text-muted-foreground">({lang.level})</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
