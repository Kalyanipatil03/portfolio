import { Clock, Sparkles, ThumbsUp, Users } from "lucide-react";

const softSkills = [
  { icon: Clock, name: "Time Management", desc: "Efficient planning and meeting deadlines consistently" },
  { icon: Sparkles, name: "Adaptability", desc: "Quick to adjust to new environments and challenges" },
  { icon: ThumbsUp, name: "Positive Thinking", desc: "Maintaining optimism and constructive attitude" },
  { icon: Users, name: "Team Collaboration", desc: "Working effectively in cross-functional teams" },
];

const SoftSkills = () => (
  <section id="softskills" className="py-24 bg-secondary">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-4">
        Soft <span className="text-primary">Skills</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
        Interpersonal strengths I bring to every team
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {softSkills.map(({ icon: Icon, name, desc }) => (
          <div
            key={name}
            className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 text-center group"
          >
            <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
              <Icon size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-card-foreground text-sm mb-2">{name}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SoftSkills;
