import { GraduationCap } from "lucide-react";

const education = [
  { level: "Bachelor Of Technology", course: "Computer Engineering", score: "CGPA: 7.83", institution: "College Name" },
  { level: "HSC", course: "Science", score: "82.46%", institution: "College Name" },
  { level: "SSC", course: "Secondary School", score: "85.40%", institution: "School Name" },
];

const Education = () => (
  <section id="education" className="py-24 bg-secondary">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-4">
        Education <span className="text-primary">Background</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
        My academic journey and qualifications
      </p>

      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((edu, i) => (
          <div
            key={edu.level}
            className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex items-center gap-6"
          >
            <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center shrink-0">
              <GraduationCap size={24} className="text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-bold text-card-foreground">{edu.level}</h3>
              <p className="text-sm text-muted-foreground">{edu.course} — {edu.institution}</p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-xl font-bold font-heading text-primary">{edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
