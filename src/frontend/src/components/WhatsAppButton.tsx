export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/916290051399"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1ebe5d] transition-colors px-4 py-3"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-6 h-6"
      />
      <span className="text-sm font-semibold hidden sm:inline">
        +91 6290051399
      </span>
    </a>
  );
}
