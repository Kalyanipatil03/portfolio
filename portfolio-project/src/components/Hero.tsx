import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
    </div>

    <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1 text-center md:text-left">
        <p className="text-primary font-medium mb-3 tracking-wider uppercase text-sm">Hello, I'm</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 font-heading">
          Kalyani <br />
          <span className="text-gradient">Patil</span>
        </h1>
        <p className="text-lg text-primary-foreground/70 mb-2 font-medium">
          B.Tech — Computer Engineering
        </p>
        <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto md:mx-0">
          Motivated software developer with hands-on internship experience at Capgemini. 
          Passionate about building impactful solutions and eager to grow in the tech industry.
        </p>

        <div className="flex items-center gap-4 justify-center md:justify-start mb-8">
          <a
            href="#contact"
            className="gradient-accent text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border border-primary-foreground/20 text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
          >
            View Projects
          </a>
        </div>

        <div className="flex items-center gap-4 justify-center md:justify-start">
          {[
            { icon: Mail, href: "mailto:kalyani@example.com", label: "Email" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Github, href: "#", label: "GitHub" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-2 rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:text-primary hover:border-primary transition-colors"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="order-1 md:order-2 flex justify-center">
        <div className="relative">
          <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-elevated">
            <img src={profilePhoto} alt="Kalyani Patil" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-3 -right-3 gradient-accent text-primary-foreground text-xs font-bold px-4 py-2 rounded-full">
            Open to Work
          </div>
        </div>
      </div>
    </div>

    <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40 animate-bounce">
      <ArrowDown size={24} />
    </a>
  </section>
);

export default Hero;
