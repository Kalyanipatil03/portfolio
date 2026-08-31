import { Globe } from "lucide-react";

const languages = [
  { name: "English", level: "Professional" },
  { name: "Marathi", level: "Native" },
  { name: "Hindi", level: "Fluent" },
];

const Languages = () => (
  <section id="languages" className="py-24 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-4">
        Language <span className="text-primary">Proficiency</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
        Languages I communicate fluently in
      </p>

      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {languages.map((lang) => (
          <div
            key={lang.name}
            className="bg-card rounded-2xl p-7 shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 text-center group"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Globe size={24} className="text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-card-foreground">{lang.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{lang.level}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Languages;
