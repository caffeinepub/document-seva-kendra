const logos = [
  "Coca-Cola",
  "Brillon",
  "Deemarks",
  "Fortis",
  "GHCL",
  "Machino",
  "Brewforce",
  "Orient Technologies",
];

const marqueeItems = [
  ...logos.map((logo) => ({ logo, key: logo })),
  ...logos.map((logo) => ({ logo, key: `${logo}-copy` })),
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-card border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <div className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Our Clients
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Trusted By Leading Brands
          </h2>
          <div className="mt-4 w-16 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-track gap-6 px-4">
          {marqueeItems.map(({ logo, key }) => (
            <div
              key={key}
              className="flex-shrink-0 bg-card border border-border rounded-xl px-8 py-4 font-bold text-muted-foreground text-sm hover:border-brand-orange hover:text-brand-orange transition-all cursor-default"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
