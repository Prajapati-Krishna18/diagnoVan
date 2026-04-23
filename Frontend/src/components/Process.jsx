import { motion } from "motion/react";

const steps = [
  {
    number: "1",
    title: "Request a Visit",
    description: "Simple one-tap booking via our user-friendly mobile app or local village coordinator."
  },
  {
    number: "2",
    title: "Van Arrives",
    description: "Our clinical team reaches your village. Quick check-ins with zero wait time."
  },
  {
    number: "3",
    title: "Digital Results",
    description: "Receive certified reports on your phone. Prescription and follow-up plan included."
  }
];

export default function Process() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-brand-light">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-brand-primary"
        >
          Your Journey to Wellness
        </motion.h2>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Connection Line */}
        <div className="absolute top-10 left-0 right-0 h-0.5 bg-brand-primary/20 hidden md:block border-t-2 border-dashed border-brand-primary/20"></div>
        
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="w-20 h-20 bg-brand-primary rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold border-8 border-brand-light shadow-xl mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
