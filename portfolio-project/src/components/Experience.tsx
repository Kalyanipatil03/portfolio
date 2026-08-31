import { Briefcase } from "lucide-react";

const Experience = () => (
  <section id="experience" className="py-24 bg-secondary">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-4">
        Work <span className="text-primary">Experience</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
        Professional experience in the IT industry
      </p>

      <div className="max-w-2xl mx-auto">
        <div className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full gradient-accent" />

          <div className="bg-card rounded-2xl p-7 shadow-card border border-border">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Briefcase size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-card-foreground">
                  Software Engineering Intern
                </h3>
                <p className="text-primary font-semibold">Capgemini</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1">▸</span>
                Gained hands-on experience in enterprise software development processes
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">▸</span>
                Collaborated with cross-functional teams on real client projects
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">▸</span>
                Applied software engineering best practices and agile methodologies
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">▸</span>
                Completed the She Arise 2.0 program for professional development
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
