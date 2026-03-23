import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Reema Doshi",
    role: "Business Owner",
    text: "I was struggling with documentation related to registering for AD code. They were very quick and completed formalities in 3 hrs. Highly recommended and trustworthy. Reasonably priced too.",
  },
  {
    name: "Fahim Ansari",
    role: "Entrepreneur",
    text: "Exceptional service! Mr. Nishant at KG Consultation ensured flawless documentation. Highly recommended!",
  },
  {
    name: "Chitaranjen Nayackh",
    role: "Food Business Owner",
    text: "KG Tax Consultants helped us in getting FSSAI license and Communication with them is always clear and transparent. They have a strong commitment to customer satisfaction and success.",
  },
  {
    name: "Sudhanandha Babu",
    role: "Exporter",
    text: "Immediate response if any queries raised, excellent work, on time and no delays, I am from Tamilnadu and kg tax helped me with ireps registration.",
  },
];

const dotKeys = ["dot-0", "dot-1", "dot-2", "dot-3"];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20" style={{ backgroundColor: "#EEF1F4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-4">
          <div className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            What Our Clients Say
          </h2>
          <div className="mt-4 w-16 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        {/* Google rating */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-card border border-border">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="font-bold text-foreground text-base">4.9/5</span>
            <span className="text-muted-foreground text-sm">Google Rating</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={t.name}
                  className="w-full flex-shrink-0 px-4"
                  data-ocid={`testimonials.item.${idx + 1}`}
                >
                  <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-card p-8 sm:p-10 border border-border">
                    <Quote className="w-10 h-10 text-brand-orange/30 mb-4" />
                    <p className="text-foreground text-lg leading-relaxed font-medium mb-8 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-orange-light flex items-center justify-center text-brand-orange font-bold text-lg">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-foreground">
                          {t.name}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {t.role}
                        </div>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-card border border-border rounded-full p-2.5 shadow-card hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all"
            aria-label="Previous testimonial"
            data-ocid="testimonials.prev.button"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-card border border-border rounded-full p-2.5 shadow-card hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all"
            aria-label="Next testimonial"
            data-ocid="testimonials.next.button"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {dotKeys.map((key, idx) => (
            <button
              key={key}
              type="button"
              onClick={() => setActive(idx)}
              className={`rounded-full transition-all ${
                idx === active
                  ? "w-8 h-2.5 bg-brand-orange"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-brand-orange/50"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
              data-ocid={`testimonials.dot.${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
