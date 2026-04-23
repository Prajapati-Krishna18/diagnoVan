import { motion } from "motion/react";
import { Monitor, Camera, Droplets, Sun } from "lucide-react";

import teleConsultingImage from "../assets/tele-consulting.png";

export default function Features() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-brand-primary mb-4"
        >
          Precision Engineering for Rural Resilience
        </motion.h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Every Smart Diagnostic Van is a fully-equipped clinical laboratory on wheels, designed to navigate the toughest terrains.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Tele-consulting (L-Shaped/Wide) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 bg-brand-light rounded-[32px] p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-all h-[400px]"
        >
          <div className="relative z-10 max-w-md">
            <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Monitor className="text-brand-primary w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-brand-primary mb-3">Real-time Tele-consulting</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Instantly connect with top-tier specialists from city hospitals. HD video links and live data streaming ensure expert oversight for every patient.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 top-1/2 p-4">
            <img 
              src={teleConsultingImage} 
              className="w-full h-full object-cover rounded-2xl shadow-lg border-2 border-white grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Tele-consulting" 
            />
          </div>
        </motion.div>

        {/* Card 2: Advanced Imaging */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-brand-light rounded-[32px] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all h-[400px]"
        >
          <div>
            <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Camera className="text-brand-primary w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-brand-primary mb-3">Advanced Imaging</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Equipped with low-radiation X-Ray and portable 4D Ultrasound machines for comprehensive internal diagnostics.
            </p>
          </div>
          <div className="bg-gray-200 aspect-video rounded-2xl flex items-center justify-center border-2 border-white overflow-hidden">
             <div className="animate-pulse w-12 h-12 rounded-full border-4 border-brand-primary/20 flex items-center justify-center">
                 <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-primary animate-ping"></div>
                 </div>
             </div>
          </div>
        </motion.div>

        {/* Card 3: Blood Reports */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-brand-light rounded-[32px] p-8 h-[300px] flex flex-col justify-between shadow-sm"
        >
          <div>
            <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Droplets className="text-brand-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-primary mb-2">Instant Blood Reports</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Onboard dry chemistry analyzers provide 30+ vital parameters within 15 minutes of collection.
            </p>
          </div>
          <div className="space-y-3">
             <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "80%" }} className="h-full bg-brand-primary"></motion.div>
             </div>
             <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "65%" }} transition={{ delay: 0.1 }} className="h-full bg-brand-secondary"></motion.div>
             </div>
             <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "90%" }} transition={{ delay: 0.2 }} className="h-full bg-brand-accent"></motion.div>
             </div>
          </div>
        </motion.div>

        {/* Card 4: Cold Chain (Wide) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-brand-primary rounded-[32px] p-10 flex items-center justify-between text-white relative overflow-hidden h-[300px]"
        >
          <div className="relative z-10 max-w-sm">
             <h3 className="text-3xl font-bold mb-4">Solar-Powered Cold Chain</h3>
             <p className="text-brand-accent/80 leading-relaxed font-medium">
               Maintaining sample integrity even in extreme temperatures with zero-carbon footprint.
             </p>
          </div>
          <div className="relative z-10 opacity-20">
             <Sun size={120} strokeWidth={1} />
          </div>
          <div className="absolute top-0 right-0 p-8">
             <div className="w-4 h-4 bg-brand-accent rounded-full animate-pulse"></div>
          </div>
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
             <div className="grid grid-cols-12 gap-4 h-full">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="border-r border-white"></div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
