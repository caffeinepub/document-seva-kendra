import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

export default function ContactForm() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!actor) {
      toast.error("Unable to connect to server. Please try again.");
      return;
    }
    setIsSubmitting(true);
    try {
      await actor.submitEnquiry(name, email, phone, message);
      toast.success("Message sent! Our team will contact you shortly.");
      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Talk to Our Experts
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base">
            Have a question or need assistance? Our team of experts is ready to
            help you with all your legal and taxation needs.
          </p>
          <div className="mt-4 w-16 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 bg-card rounded-2xl border border-border shadow-card p-8">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center py-16 text-center"
                data-ocid="contact.success_state"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <svg
                    className="w-10 h-10 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.form"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-sm font-semibold text-foreground mb-1.5 block"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="border-border focus:border-brand-orange focus:ring-brand-orange/20"
                      data-ocid="contact.name.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-semibold text-foreground mb-1.5 block"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-border focus:border-brand-orange focus:ring-brand-orange/20"
                      data-ocid="contact.email.input"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className="text-sm font-semibold text-foreground mb-1.5 block"
                  >
                    Contact Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="border-border focus:border-brand-orange focus:ring-brand-orange/20"
                    data-ocid="contact.phone.input"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-sm font-semibold text-foreground mb-1.5 block"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Describe your requirement..."
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="border-border focus:border-brand-orange focus:ring-brand-orange/20 resize-none"
                    data-ocid="contact.message.textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
                  data-ocid="contact.submit.button"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-brand-dark rounded-2xl p-7 text-white">
              <h3 className="font-bold text-lg mb-6 text-white">
                Get In Touch
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-300 mb-0.5">
                      Address
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      C8/181 Ground Floor, Nearby MCD School Keshav Puram,
                      Keshav Puram Metro Station, Kolkata - 700152
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-300 mb-0.5">
                      Phone
                    </div>
                    <a
                      href="tel:+916290051399"
                      className="text-gray-400 text-sm hover:text-brand-orange transition-colors"
                      data-ocid="contact.phone.link"
                    >
                      +91 6290051399
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-300 mb-0.5">
                      Email
                    </div>
                    <a
                      href="mailto:DOCUMENTSEVAHELP@GMAIL.COM"
                      className="text-gray-400 text-sm hover:text-brand-orange transition-colors break-all"
                      data-ocid="contact.email.link"
                    >
                      DOCUMENTSEVAHELP@GMAIL.COM
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="font-semibold text-sm text-gray-300 mb-4">
                  Follow Us
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/people/KG-TAX/61561719392391/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white transition-all"
                    aria-label="Facebook"
                    data-ocid="contact.facebook.link"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="https://www.youtube.com/@kgtax"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white transition-all"
                    aria-label="YouTube"
                    data-ocid="contact.youtube.link"
                  >
                    <YoutubeIcon />
                  </a>
                  <a
                    href="https://www.instagram.com/kgtax_consultants/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white transition-all"
                    aria-label="Instagram"
                    data-ocid="contact.instagram.link"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Office hours */}
            <div className="bg-card rounded-2xl border border-border p-7">
              <h3 className="font-bold text-base text-foreground mb-4">
                Office Hours
              </h3>
              <div className="space-y-2">
                {[
                  { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
                  { day: "Saturday", time: "10:00 AM - 5:00 PM" },
                  { day: "Sunday", time: "Closed" },
                ].map((row) => (
                  <div key={row.day} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{row.day}</span>
                    <span className="font-semibold text-foreground">
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
