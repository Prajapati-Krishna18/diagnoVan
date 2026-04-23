import { motion } from "motion/react";


export default function CallToAction() {
  return (
    <section id="network" className="py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-7xl mx-auto bg-brand-primary rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden"
      >
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-2xl mx-auto">
            Ready to empower your community?
          </h2>
          <p className="text-brand-accent/80 text-lg mb-12 max-w-xl mx-auto font-medium">
            Join our growing network of rural health guardians and bring world-class diagnostics to your village.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#"
              className="bg-brand-dark text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-black transition-all shadow-xl"
            >
              Launch a Van
            </a>
            <a 
              href="#"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
            >
              Become a Partner
            </a>
          </div>
        </div>


        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
      </motion.div>
    </section>
  );
}
