const businessSetup = [
  "Proprietorship Firm Registration",
  "Partnership Firm Registration",
  "Limited Liability Partnership",
  "Private Limited Company",
  "One Person Company",
];

const digitalSignature = [
  "Class 3 Individual Signature",
  "Class 3 Individual Encryption",
  "Class 3 Individual Combo",
  "Class 3 Organisation Encryption",
  "Class 3 Organisation Signature",
  "Class 3 Organisation Combo",
  "E-Tender DSC",
  "DGFT DSC",
  "Trademark DSC",
];

const importExport = [
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
];

const quickLinks = [
  { label: "LMPC Registration" },
  { label: "ISO 9001:2015" },
  { label: "RCMC - APEDA" },
  { label: "GST Registrations" },
  { label: "Income Tax Return" },
  { label: "FSSAI Registrations" },
  { label: "Trademark Registration" },
  { label: "MSME Registration" },
  { label: "IREPS Registration" },
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

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-brand-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://lh3.googleusercontent.com/d/1diNb1FLp3Fgr2LaE2-hCSDrz7xhi9VwE"
                alt="DSK Logo"
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div>
                <div className="text-white font-bold text-sm">
                  DOCUMENT SEVA
                </div>
                <div className="text-brand-orange font-bold text-sm">
                  KENDRA
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              DSK is one of India&apos;s leading legal services platforms,
              dedicated to empowering entrepreneurs by simplifying the process
              of starting, managing, and growing their businesses affordably.
              Since 2011, we have been providing expert legal and taxation
              services.
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-sm text-gray-400">
                C8/181 Ground Floor, Keshav Puram Metro Station, Kolkata -
                700152
              </p>
              <a
                href="tel:+916290051399"
                className="block text-sm text-gray-400 hover:text-brand-orange transition-colors"
                data-ocid="footer.phone.link"
              >
                +91 6290051399
              </a>
              <a
                href="mailto:DOCUMENTSEVAHELP@GMAIL.COM"
                className="block text-sm text-gray-400 hover:text-brand-orange transition-colors break-all"
                data-ocid="footer.email.link"
              >
                DOCUMENTSEVAHELP@GMAIL.COM
              </a>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/KG-TAX/61561719392391/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-orange flex items-center justify-center transition-colors"
                aria-label="Facebook"
                data-ocid="footer.facebook.link"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.youtube.com/@kgtax"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-orange flex items-center justify-center transition-colors"
                aria-label="YouTube"
                data-ocid="footer.youtube.link"
              >
                <YoutubeIcon />
              </a>
              <a
                href="https://www.instagram.com/kgtax_consultants/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-brand-orange flex items-center justify-center transition-colors"
                aria-label="Instagram"
                data-ocid="footer.instagram.link"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Business Setup */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Business Setup
            </h4>
            <ul className="space-y-2">
              {businessSetup.map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-sm text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Signature */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Digital Signature
            </h4>
            <ul className="space-y-2">
              {digitalSignature.map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-sm text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Import & Export */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Import &amp; Export
            </h4>
            <ul className="space-y-2">
              {importExport.map((item) => (
                <li key={item}>
                  <a
                    href="#contact"
                    className="text-sm text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href="#contact"
                    className="text-sm text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <p className="text-gray-500 text-sm">
              Copyright &copy; {year} DOCUMENT SEVA KENDRA. All rights reserved
            </p>
            <a
              href="/#/admin"
              className="text-gray-600 hover:text-brand-orange text-xs transition-colors flex items-center gap-1"
              data-ocid="footer.admin.link"
            >
              Admin
            </a>
          </div>
          <p className="text-gray-600 text-xs">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-orange transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
