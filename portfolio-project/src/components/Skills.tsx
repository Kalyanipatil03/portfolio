const skills = [
  "C",
  "C++",
  "Java",
  "MS SQL",
  "HTML & CSS",
  
];

const Skills = () => (
  <section id="skills" className="py-24 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-4">
        Technical <span className="text-primary">Skills</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
        Programming languages and technologies I work with
      </p>

      <div className="flex flex-wrap justify-center gap-5 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-2.5 h-2.5 rounded-full gradient-accent group-hover:scale-125 transition-transform duration-300" />
            <span className="text-base font-semibold text-card-foreground">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
