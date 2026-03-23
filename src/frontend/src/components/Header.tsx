import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Business Setup",
    items: [
      "Proprietorship Firm Registration",
      "Partnership Firm Registration",
      "Limited Liability Partnership",
      "Private Limited Company",
      "One Person Company",
    ],
  },
  {
    label: "Digital Signature",
    items: [
      "Class 3 Individual Signature",
      "Class 3 Individual Encryption",
      "Class 3 Individual Combo",
      "Class 3 Organisation Encryption",
      "Class 3 Organisation Signature",
      "Class 3 Organisation Combo",
      "E-Tender DSC",
      "DGFT DSC",
      "Trademark DSC",
    ],
  },
  {
    label: "LMPC",
    items: [
      "LMPC Registration",
      "LMPC for Weight and Measurement",
      "LMPC Certificate for E-commerce",
      "LMPC Certificate for Repacker",
      "LMPC Certificate for Manufacturer",
      "LMPC Certificate for Manufacturer and Packer",
    ],
  },
  {
    label: "Import & Export",
    items: [
      "IEC Registration",
      "IEC Renewal",
      "IEC Modification",
      "IEC Activation",
      "ICEGATE Registration",
      "AD Code Registration",
      "Duty Drawback/IFSC Registration",
      "RCMC Registration",
      "EPR for Plastic Packaging",
      "EPR Certificate for Importers",
    ],
  },
  {
    label: "ISO",
    items: [
      "ISO 9001:2015",
      "ISO 14001:2015",
      "ISO 22000:2018",
      "ISO 27001:2013",
      "ISO 21001:2018",
      "CE Certificate",
      "GMP",
    ],
  },
  {
    label: "RCMC",
    items: [
      "APEDA",
      "FIEO",
      "EEPC",
      "EPCH",
      "CAPEXIL",
      "CHEMEXCIL",
      "AEPC",
      "CEPC",
      "CLE",
      "GJEPC",
      "SHEFEXIL",
      "Coffee Board RCMC",
      "Spices Board RCMC",
      "Tea Board RCMC",
      "Coconut Development Board",
    ],
  },
  {
    label: "Income Tax & GST",
    items: [
      "GST Registrations",
      "GST Modification",
      "GST Surrender",
      "GST Refund",
      "GST Return",
      "LUT",
      "Final Return GSTR-10",
      "Annual Return GSTR-9",
      "Income Tax Return",
      "TDS Return",
    ],
  },
  {
    label: "Others",
    items: [
      "FSSAI Registrations",
      "FSSAI State License",
      "FSSAI Central License",
      "FSSAI Modification",
      "FSSAI Renewal",
      "FSSAI Annual Return",
      "Trademark Registration",
      "Trademark Objection Filing",
      "MSME",
      "IREPS Registration",
    ],
  },
];

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
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
      className="w-4 h-4"
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
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function navigateTo(hash: string) {
    window.location.hash = hash;
    setMobileOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Orange top bar */}
      <div className="bg-brand-orange text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="mailto:DOCUMENTSEVAHELP@GMAIL.COM"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              data-ocid="header.email.link"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-xs font-medium">
                DOCUMENTSEVAHELP@GMAIL.COM
              </span>
            </a>
            <a
              href="tel:+916290051399"
              className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
              data-ocid="header.phone.link"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">+91 6290051399</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/people/KG-TAX/61561719392391/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Facebook"
              data-ocid="header.facebook.link"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.youtube.com/@kgtax"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="YouTube"
              data-ocid="header.youtube.link"
            >
              <YoutubeIcon />
            </a>
            <a
              href="https://www.instagram.com/kgtax_consultants/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Instagram"
              data-ocid="header.instagram.link"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`bg-brand-dark transition-all duration-300 ${
          scrolled ? "shadow-2xl" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-3 flex-shrink-0"
              data-ocid="header.logo.link"
            >
              <img
                src="https://lh3.googleusercontent.com/d/1diNb1FLp3Fgr2LaE2-hCSDrz7xhi9VwE"
                alt="Document Seva Kendra"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const fallback = e.currentTarget
                    .nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "block";
                }}
              />
              <span
                className="hidden text-white font-bold text-lg"
                style={{ display: "none" }}
              >
                DSK
              </span>
              <div className="hidden sm:block">
                <div className="text-white font-bold text-sm leading-tight">
                  DOCUMENT SEVA
                </div>
                <div className="text-brand-orange font-bold text-sm leading-tight">
                  KENDRA
                </div>
              </div>
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.items ? (
                  <div key={item.label} className="relative group">
                    <button
                      type="button"
                      className="flex items-center gap-1 text-gray-300 hover:text-brand-orange text-sm font-medium px-3 py-2 rounded transition-colors"
                      data-ocid={`nav.${item.label.toLowerCase().replace(/[^a-z0-9]/g, "-")}.toggle`}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 hidden group-hover:block z-50">
                      <div className="dropdown-menu bg-brand-dark-2 border border-gray-700 rounded-xl shadow-2xl min-w-[220px] py-2">
                        {item.items.map((sub) => (
                          <a
                            key={sub}
                            href="#contact"
                            className="block px-4 py-2 text-gray-300 hover:text-brand-orange hover:bg-brand-dark-3 text-sm transition-colors"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-300 hover:text-brand-orange text-sm font-medium px-3 py-2 rounded transition-colors"
                    data-ocid="nav.home.link"
                  >
                    {item.label}
                  </a>
                ),
              )}
            </div>

            {/* CTA + mobile menu */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
                data-ocid="header.cta.button"
              >
                Get Free Consultation
              </a>

              {/* Mobile menu trigger */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="lg:hidden text-gray-300 hover:text-white p-2"
                    aria-label="Open menu"
                    data-ocid="header.mobile_menu.button"
                  >
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-80 bg-brand-dark border-brand-dark-3 p-0 overflow-y-auto"
                >
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
                    <span className="text-white font-bold text-lg">
                      DSK Menu
                    </span>
                    <button
                      type="button"
                      onClick={() => setMobileOpen(false)}
                      className="text-gray-400 hover:text-white"
                      data-ocid="header.mobile_menu.close_button"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <nav className="px-4 py-4 space-y-1">
                    {navItems.map((item) =>
                      item.items ? (
                        <Collapsible
                          key={item.label}
                          open={openMobileSection === item.label}
                          onOpenChange={(open) =>
                            setOpenMobileSection(open ? item.label : null)
                          }
                        >
                          <CollapsibleTrigger className="flex items-center justify-between w-full text-gray-300 hover:text-brand-orange text-sm font-medium py-3 px-3 rounded-lg hover:bg-brand-dark-3 transition-colors">
                            {item.label}
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                openMobileSection === item.label
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-brand-orange pl-3">
                              {item.items.map((sub) => (
                                <button
                                  key={sub}
                                  type="button"
                                  className="block w-full text-left text-gray-400 hover:text-brand-orange text-xs py-1.5 transition-colors"
                                  onClick={() => navigateTo("contact")}
                                >
                                  {sub}
                                </button>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block text-gray-300 hover:text-brand-orange text-sm font-medium py-3 px-3 rounded-lg hover:bg-brand-dark-3 transition-colors"
                          onClick={() => setMobileOpen(false)}
                          data-ocid="nav.home.mobile.link"
                        >
                          {item.label}
                        </a>
                      ),
                    )}
                    <div className="pt-4">
                      <button
                        type="button"
                        className="block w-full text-center bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 rounded-full transition-colors"
                        onClick={() => navigateTo("contact")}
                        data-ocid="header.mobile_cta.button"
                      >
                        Get Free Consultation
                      </button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
