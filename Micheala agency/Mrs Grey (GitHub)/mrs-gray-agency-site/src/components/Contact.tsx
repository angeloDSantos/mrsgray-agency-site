import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Instagram, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (formData.phone && !/^[\d\s\-+()]*$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/movpgjgp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent",
          description: "Thank you for reaching out. We'll respond within 48 hours.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-foreground text-primary-foreground"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-xs tracking-widest uppercase text-primary-foreground/60 mb-4 block">
              Contact
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight mb-8">
              Let's Work Together
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-12">
              For athlete representation, partnerships or media enquiries, contact
              us. We typically respond within 48 hours.
            </p>

            {/* Contact Links */}
            <div className="space-y-6">
              <a
                href="mailto:info@mrsgray.agency"
                className="flex items-center gap-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <Mail size={20} />
                <span className="border-b border-transparent group-hover:border-primary-foreground/50">
                  info@mrsgray.agency
                </span>
              </a>
              <a
                href="https://www.instagram.com/mrsgrayagency/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <Instagram size={20} />
                <span className="border-b border-transparent group-hover:border-primary-foreground/50">
                  @mrsgrayagency
                </span>
              </a>
              <a
                href="https://www.linkedin.com/company/mrs-gray-sports-agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <Linkedin size={20} />
                <span className="border-b border-transparent group-hover:border-primary-foreground/50">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold h-12"
                />
                {errors.name && (
                  <p className="text-gold text-xs mt-2">{errors.name}</p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address *"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold h-12"
                />
                {errors.email && (
                  <p className="text-gold text-xs mt-2">{errors.email}</p>
                )}
              </div>

              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold h-12"
                />
                {errors.phone && (
                  <p className="text-gold text-xs mt-2">{errors.phone}</p>
                )}
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your message *"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold resize-none"
                />
                {errors.message && (
                  <p className="text-gold text-xs mt-2">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-foreground text-foreground hover:bg-gold hover:text-foreground h-12 font-sans tracking-wide"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
