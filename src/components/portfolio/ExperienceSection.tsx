import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

interface TimelineItem {
  type: "work" | "education" | "certificate";
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

const timelineData: TimelineItem[] = [
  // Education
  {
    type: "education",
    title: "B.S. Software Engineering",
    organization: "European University-Skopje",
    period: "Sep 2022 – Present",
    description: "Currently pursuing Bachelor's degree in Software Engineering with focus on full-stack development.",
  },
  {
    type: "education",
    title: "Computer Science Studies",
    organization: "FINKI - Faculty of Computer Science and Engineering",
    period: "Sep 2021 – Jun 2022",
    description: "Studied at the Faculty of Computer Science and Engineering in Skopje, Macedonia.",
  },
  {
    type: "education",
    title: "High School",
    organization: "OSTU Gostivar",
    period: "Sep 2017 – Jun 2021",
    description: "Completed secondary education in Gostivar, North Macedonia.",
  },
  // Work Experience
  {
    type: "work",
    title: "QA Engineer & Full Stack Developer",
    organization: "University Private Project (Freelance)",
    period: "Oct 2024 – Present",
    description: "Working with university professor on a private project as a freelance developer and QA engineer.",
    highlights: ["Full-stack development", "Quality assurance testing", "Collaborating with academic team"],
  },
  {
    type: "work",
    title: "Full Stack Web Developer Intern",
    organization: "European University-Skopje",
    period: "Oct 2024 – Present",
    description: "Working on real projects as an intern with fellow students from the university.",
    highlights: ["Building real-world applications", "Team collaboration", "Agile development"],
  },
  {
    type: "work",
    title: "Barista",
    organization: "BabyBlue DOOEL",
    period: "Nov 2024 – Mar 2025",
    description: "Delivered exceptional customer experience while crafting high-quality beverages in a fast-paced café environment.",
    highlights: ["Customer service excellence", "Team collaboration", "Time management"],
  },
  // Certificates
  {
    type: "certificate",
    title: "Cisco Packet Tracer",
    organization: "Cisco Networking Academy",
    period: "Oct 2024",
    description: "Successfully completed 'Getting Started with Cisco Packet Tracer' certification.",
  },
  {
    type: "certificate",
    title: "Full-Stack Web Development Bootcamp",
    organization: "Udemy",
    period: "Completed",
    description: "The Complete Full-Stack Web Development Bootcamp covering modern web technologies.",
  },
  {
    type: "certificate",
    title: "Beginner Computer Programming",
    organization: "TechUP / USAID",
    period: "Apr 2018",
    description: "Certificate for successful completion of the beginner computer programming course.",
  },
];
const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return Briefcase;
      case "education":
        return GraduationCap;
      case "certificate":
        return Award;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="section-container relative z-10" ref={ref}>
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
              Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-foreground"
            >
              Experience & <span className="gradient-text">Education</span>
            </motion.h2>
            
            {/* Color Legend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mt-8"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-sm text-muted-foreground">Education</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-sm text-muted-foreground">Certificate</span>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gradient-start via-gradient-mid to-gradient-end opacity-30" />

            {timelineData.map((item, index) => {
              const Icon = getIcon(item.type);
              return (
                <motion.div
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-8 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full z-10 mt-6 ${
                    item.type === "work" ? "bg-primary" : item.type === "education" ? "bg-accent" : "bg-amber-500"
                  }`} />
                  
                  {/* Content card */}
                  <div className={`flex-1 ml-10 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className={`group p-6 rounded-2xl bg-card border transition-all duration-300 ${
                      item.type === "work" 
                        ? "border-primary/20 hover:border-primary/50" 
                        : item.type === "education" 
                        ? "border-accent/20 hover:border-accent/50" 
                        : "border-amber-500/20 hover:border-amber-500/50"
                    }`}>
                      {/* Icon and type */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          item.type === "work" 
                            ? "bg-primary/20" 
                            : item.type === "education" 
                            ? "bg-accent/20" 
                            : "bg-amber-500/20"
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            item.type === "work" 
                              ? "text-primary" 
                              : item.type === "education" 
                              ? "text-accent" 
                              : "text-amber-500"
                          }`} />
                        </div>
                        <span className="text-sm text-muted-foreground">{item.period}</span>
                      </div>

                      {/* Title and organization */}
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                      <p className={`font-medium ${
                        item.type === "work" 
                          ? "text-primary" 
                          : item.type === "education" 
                          ? "text-accent" 
                          : "text-amber-500"
                      }`}>{item.organization}</p>
                      
                      {/* Description */}
                      <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
                      
                      {/* Highlights */}
                      {item.highlights && (
                        <ul className="mt-3 space-y-1">
                          {item.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-gradient-mid" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
