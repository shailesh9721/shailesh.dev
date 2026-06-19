import { ArrowUp, Code2 } from "lucide-react";
import { config } from "../config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-bg border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Logo and Description */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#home" className="flex items-center gap-2 font-heading font-bold text-lg tracking-wider text-white">
            <Code2 className="h-5 w-5 text-primary" />
            <span>
              SHAIL<span className="text-primary font-light">ESH</span>
            </span>
          </a>
          <p className="font-sans text-xs text-dark-muted text-center md:text-left">
            Crafting premium web experiences with React & Tailwind CSS.
          </p>
        </div>

        {/* Copyright */}
        <p className="font-sans text-xs text-dark-muted text-center md:text-left order-3 md:order-2">
          &copy; {currentYear} {config.personal.name}. All rights reserved.
        </p>

        {/* Back to Top */}
        <button
          onClick={handleScrollToTop}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-card border border-white/5 text-dark-muted hover:text-white hover:border-white/10 transition-all duration-300 scale-100 hover:scale-105 order-2 md:order-3"
          aria-label="Back to Top"
        >
          <span className="font-sans text-xs font-semibold">Back to Top</span>
          <ArrowUp className="h-3.5 w-3.5 text-primary" />
        </button>
      </div>
    </footer>
  );
}
