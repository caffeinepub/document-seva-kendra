import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Affordable",
    description:
      "Our dedicated experts provide the best in class services at the most affordable rates.",
  },
  {
    title: "On Time",
    description:
      "We take precautionary measures to ensure that our clients never miss a single deadline.",
  },
  {
    title: "Compliance Ensured",
    description:
      "We ensure that our client always stays compliant with all applicable laws and regulations.",
  },
  {
    title: "Instant Response",
    description:
      "Get instant responses to all your queries within a few minutes.",
  },
  {
    title: "Simplified Process",
    description:
      "Our process is extremely simplified because our dedicated experts handhold you throughout each process.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: features */}
          <div>
            <div className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
              Why Our Customers Love Us
            </h2>
            <div className="w-16 h-1 bg-brand-orange rounded-full mb-8" />

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div
                  key={feature.title}
                  className="flex gap-4 items-start"
                  data-ocid={`why_us.item.${idx + 1}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
              data-ocid="why_us.cta.button"
            >
              Get Started Today
            </a>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange-light rounded-full opacity-60" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-orange/10 rounded-full" />
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80"
              alt="Professional team at work"
              className="relative z-10 w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
              loading="lazy"
            />
            {/* Floating badge */}
            <div className="absolute z-20 bottom-6 -left-6 bg-brand-dark text-white rounded-xl px-5 py-4 shadow-2xl hidden sm:block">
              <div className="text-3xl font-extrabold text-brand-orange">
                13+
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                Years of Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
