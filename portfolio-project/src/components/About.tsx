import { GraduationCap, Lightbulb } from "lucide-react";

const About = () => (
  <section id="about" className="py-24 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-4">
        About <span className="text-primary">Me</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
        A motivated and conscientious Computer Engineering graduate, eager to take on challenges 
        and build a career in software development. Enthusiastic fresher with hands-on project 
        experience and a Capgemini internship under my belt.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {[
          { icon: GraduationCap, title: "B.Tech CSE", desc: "Computer Engineering Graduate" },
          { icon: Lightbulb, title: "Quick Learner", desc: "Eager for new technologies" },
        ].map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon size={22} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-card-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
