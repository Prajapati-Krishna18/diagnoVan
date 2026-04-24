import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-light/80 backdrop-blur-md border-b border-brand-primary/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="font-semibold text-xl tracking-tight text-brand-primary">The Empathetic Guardian</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-dark/70">
          <Link to="/?section=how-it-works" className="hover:text-brand-primary transition-colors">How it Works</Link>
          <Link to="/?section=services" className="hover:text-brand-primary transition-colors">Services</Link>
          <Link to="/?section=impact" className="hover:text-brand-primary transition-colors">Impact</Link>
          <Link to="/?section=network" className="hover:text-brand-primary transition-colors">Join the Network</Link>
          <Link
            to="/login"
            className="bg-brand-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20"
          >
            Connect Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl"
        >
          <Link to="/?section=how-it-works" className="font-medium text-brand-dark/80" onClick={() => setIsOpen(false)}>How it Works</Link>
          <Link to="/?section=services" className="font-medium text-brand-dark/80" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/?section=impact" className="font-medium text-brand-dark/80" onClick={() => setIsOpen(false)}>Impact</Link>
          <Link to="/?section=network" className="font-medium text-brand-dark/80" onClick={() => setIsOpen(false)}>Join the Network</Link>
          <Link
            to="/login"
            className="bg-brand-primary text-white px-6 py-3 rounded-full font-semibold text-center"
            onClick={() => setIsOpen(false)}
          >
            Connect Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
