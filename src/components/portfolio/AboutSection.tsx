import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Lightbulb, Rocket } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, label: "Full-Stack Dev", description: "Frontend & Backend expertise" },
    { icon: Cpu, label: "QA Engineering", description: "Ensuring quality at every step" },
    { icon: Lightbulb, label: "Problem Solver", description: "Creative solutions to challenges" },
    { icon: Rocket, label: "Fast Learner", description: "Always exploring new tech" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-medium text-primary uppercase tracking-widest"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-foreground"
            >
              Passionate about building
              <span className="gradient-text"> impactful software</span>
            </motion.h2>
          </div>

          {/* Content grid with photo */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left side: Photo + Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Photo */}
              <div className="flex justify-center md:justify-start mb-6">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-gradient-mid/30 shadow-glow">
                  <img 
                    src={profilePhoto} 
                    alt="Nikola Siljanovski" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                A dynamic soon-to-be graduate in Software Engineering with a strong 
                foundation in full-stack development and a proven track record of 
                delivering innovative solutions. Currently pursuing a Bachelor's degree 
                at European University-Skopje, complemented by a certificate in 
                Full-Stack Development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proficient in JavaScript, TypeScript, HTML/CSS, React, with experience in Ruby on Rails 
                and Java. Dedicated to continuous professional growth, enhancing both 
                frontend and backend capabilities while thriving in collaborative, 
                forward-thinking environments.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm text-muted-foreground italic">
                  "Committed to excellence in every line of code."
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
            </motion.div>

            {/* Highlight cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="group p-4 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gradient-start/20 to-gradient-end/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
