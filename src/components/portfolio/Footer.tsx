import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/NikolaSiljanovski", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nikola-siljanovski-29693026a/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:siljanovski0@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold gradient-text">NS</span>
            <p className="text-sm text-muted-foreground mt-1">
              Building the future, one commit at a time.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary hover:bg-primary/10"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Nikola Siljanovski. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
