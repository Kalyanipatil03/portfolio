import { Award } from "lucide-react";

const certs = [
  { title: "Java Training", org: "R3Sys" },
  { title: "MERN-Stack Training", org: "R3Sys" },
  { title: "Avishkar Program", org: "University Level" },
  { title: "Wipro TalentNext Certification", org: "Wipro" },
  { title: "Soft Skill Development Program", org: "Naandi Foundation" },
  { title: "She Arise 2.0", org: "Capgemini" },
];

const Certifications = () => (
  <section id="certifications" className="py-24 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-4">
        Certifications & <span className="text-primary">Achievements</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
        Programs and certifications that shaped my professional growth
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c) => (
          <div
            key={c.title}
            className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated hover:border-primary/30 transition-all duration-300 group flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <Award size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-card-foreground text-sm">{c.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{c.org}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
