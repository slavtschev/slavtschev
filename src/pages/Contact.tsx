import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="container-wide py-24 md:py-32">
      <div className="max-w-xl">
        <h1 className="text-display mb-6">Contact</h1>
        <p className="text-body-lg mb-12">
          Interested in discussing systems, workflows, or potential
          collaboration? I'd enjoy the conversation.
        </p>

        {/* Email Direct */}
        <a
          href="mailto:hello@marasantos.com"
          className="inline-flex items-center gap-3 mb-16 group"
        >
          <span className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            <Mail size={20} />
          </span>
          <span className="text-lg group-hover:text-accent transition-colors">
            hello@marasantos.com
          </span>
        </a>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-muted-foreground"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-muted-foreground"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
              required
            />
          </div>

          <Button type="submit" size="lg">
            Send message
            <ArrowRight size={16} />
          </Button>
        </form>
      </div>
    </section>
  );
}
