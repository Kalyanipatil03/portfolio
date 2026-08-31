import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-14">
          I'd love to hear from you. Let's connect!
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "kalyani@example.com" },
              { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
              { icon: MapPin, label: "Location", value: "Maharashtra, India" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {(["name", "email"] as const).map((field) => (
              <div key={field}>
                <input
                  type={field === "email" ? "email" : "text"}
                  placeholder={field === "name" ? "Your Name" : "Your Email"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                />
                {errors[field] && <p className="text-destructive text-xs mt-1">{errors[field]}</p>}
              </div>
            ))}
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="gradient-accent text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
