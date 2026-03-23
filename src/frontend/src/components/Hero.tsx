import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const words = ["Simple", "Reliable", "Efficient", "Accessible"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center pt-28"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-brand-orange text-sm font-semibold tracking-wide">
              Simplifying Legal & Taxation Services Since 2011
            </span>
          </div>

          {/* Animated headline */}
          <h1 className="text-white font-extrabold leading-tight mb-6">
            <span className="block text-5xl sm:text-6xl lg:text-7xl">
              Making Legal
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl">
              Services
            </span>
            <span
              key={wordIndex}
              className="word-animate block text-5xl sm:text-6xl lg:text-7xl text-brand-orange"
            >
              {words[wordIndex]}
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
            DSK has a team of around 24 members, which includes more than 3
            Chartered Accountants, Cost Accountant as senior associates having
            expertise and immense knowledge in dealing with matters relating to
            Domestic and International Taxation, GST, Import Export, Book
            Keeping, Outsourcing and various other services.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-brand-orange/30"
              data-ocid="hero.explore_services.button"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-white/60 hover:border-brand-orange text-white hover:text-brand-orange font-bold px-8 py-4 rounded-full text-base transition-all"
              data-ocid="hero.contact.button"
            >
              Talk to an Expert
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/20">
            {[
              { value: "13+", label: "Years of Experience" },
              { value: "24+", label: "Expert Team Members" },
              { value: "5000+", label: "Happy Clients" },
              { value: "4.9★", label: "Google Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-brand-orange font-extrabold text-3xl">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
