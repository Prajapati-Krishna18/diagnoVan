import { Globe, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-primary/95 text-white/70 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-accent rounded-lg"></div>
              <span className="font-bold text-xl text-white">The Empathetic Guardian</span>
            </Link>
            <p className="text-sm leading-relaxed mb-8">
              © 2024 The Empathetic Guardian. Bridging rural health gaps with clinical authority.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 text-sm">
            <div className="flex flex-col gap-4">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              <Link to="/network" className="hover:text-white transition-colors">Rural Network</Link>
            </div>
            <div className="hidden lg:block"></div>
            <div className="flex gap-4 items-center">
               <button className="p-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <Globe size={18} />
               </button>
               <button className="p-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <Share2 size={18} />
               </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Hand-crafted for clinical authority and human-centered care.</p>
          <div className="flex gap-6">
            <span>Powered by SmartVans™</span>
            <span>AI Diagnostics v4.2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
