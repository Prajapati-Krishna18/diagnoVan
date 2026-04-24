import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-secondary px-3 py-1 rounded-full text-xs font-bold mb-6 border border-brand-accent/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-secondary"></span>
            </span>
            Live in 500+ Districts
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-brand-primary leading-[1.1] mb-8 tracking-tight">
            Bridging the Healthcare Gap in <span className="text-brand-secondary">Rural Communities</span>
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-lg">
            Our smart diagnostic vans bring clinical authority to the last mile, combining advanced AI technology with human-centered care for those who need it most.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/login" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-secondary transition-all shadow-xl shadow-brand-primary/20 group">
              Book a Van Visit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="bg-gray-200 text-brand-dark px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-300 transition-all">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Play className="w-4 h-4 fill-brand-primary text-brand-primary" />
              </div>
              Watch how it works
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=1200" 
              alt="Medical Diagnostic Van" 
              className="w-full aspect-[4/3] object-cover"
            />
            {/* Quote Overlay */}
            <div className="absolute bottom-8 left-8 right-8 glass-card p-6 border-white/30">
              <p className="text-white font-medium italic text-lg leading-relaxed">
                "The clinic came to our doorstep. My mother received her results in minutes."
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
