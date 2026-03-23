import {
  ArrowRight,
  Award,
  Banknote,
  Building2,
  Calculator,
  ClipboardList,
  FileCheck,
  Globe,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Private Limited Company",
    description:
      "A Private Limited Company (Pvt Ltd) is a business structure where ownership is privately held with limited liability protection, making it ideal for startups and growing businesses seeking scalability and funding.",
  },
  {
    icon: Shield,
    title: "Digital Signature Class 3",
    description:
      "A Class 3 Digital Signature Certificate (DSC) is a secure digital key used to electronically sign documents for legal and regulatory purposes, ensuring authenticity and data integrity.",
  },
  {
    icon: Globe,
    title: "Import & Export Registration",
    description:
      "IEC (Import Export Code) is a 10-digit identification number issued by the DGFT, mandatory for businesses engaged in importing or exporting goods and services in India.",
  },
  {
    icon: FileCheck,
    title: "LMPC Certificate",
    description:
      "An LMPC (Legal Metrology Packaged Commodities) Certificate is a mandatory approval for importers, manufacturers, and packers of packaged goods in India.",
  },
  {
    icon: Award,
    title: "ISO Certification",
    description:
      "ISO Certification verifies that a business adheres to international standards for quality, safety, and efficiency, enhancing credibility and customer satisfaction.",
  },
  {
    icon: ClipboardList,
    title: "RCMC Registration",
    description:
      "RCMC (Registration Cum Membership Certificate) is a mandatory certificate for exporters issued by Export Promotion Councils.",
  },
  {
    icon: Calculator,
    title: "Income Tax & GST",
    description:
      "Income Tax & GST are essential tax systems in India where Income Tax applies to individual and business earnings, while GST is a comprehensive tax on the supply of goods and services.",
  },
  {
    icon: Banknote,
    title: "AD Code Registration",
    description:
      "AD Code (Authorized Dealer Code) is a 14-digit code issued by a bank, mandatory for exporters to clear shipments through customs and receive foreign payments.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Your All-In-One Business Solution
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base">
            Comprehensive legal and taxation services tailored to meet every
            business need across all stages of growth.
          </p>
          <div className="mt-4 w-16 h-1 bg-brand-orange mx-auto rounded-full" />
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="services.list"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                data-ocid={`services.item.${idx + 1}`}
              >
                {/* Icon tile */}
                <div className="w-12 h-12 rounded-xl bg-brand-orange-light flex items-center justify-center mb-4 flex-shrink-0">
                  <Icon className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-brand-orange font-semibold text-sm mt-4 hover:gap-2 transition-all"
                  data-ocid={`services.read_more.button.${idx + 1}`}
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
