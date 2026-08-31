import { Building2, Landmark, UtensilsCrossed, CreditCard } from "lucide-react";

const projects = [
  {
    icon: Building2,
    title: "Construction ERP System",
    desc: "A comprehensive enterprise resource planning system for the construction industry. Manages projects, resources, budgeting, and workforce allocation with real-time dashboards.",
    tags: ["Java", "SQL", "ERP", "Project Management"],
  },
  {
    icon: Landmark,
    title: "Banking Application",
    desc: "Full-featured banking application supporting account management, fund transfers, transaction history, and balance inquiries with secure authentication.",
    tags: ["Java", "MS SQL", "OOP", "Database Management"],
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Website",
    desc: "A responsive restaurant website featuring an interactive menu, online reservation system, and a modern UI designed to attract customers.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    icon: CreditCard,
    title: "ATM System",
    desc: "Simulated ATM system implementing withdrawal, deposit, balance check, and PIN management with proper validation and error handling.",
    tags: ["C++", "OOP", "Logic", "Exception Handling"],
  },
];

const Projects = () => (
  <section id="projects" className="py-24 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-4">
        My <span className="text-primary">Projects</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
        Real-world applications I've built during my academic journey
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map(({ icon: Icon, title, desc, tags }) => (
          <div
            key={title}
            className="bg-card rounded-2xl p-7 shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5">
              <Icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
