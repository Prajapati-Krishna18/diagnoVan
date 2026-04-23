import { motion } from "motion/react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "I used to travel 4 hours for my diabetes checkup. Now, the Guardian van comes to my street. It's a miracle for us.",
    author: "Roni Devi",
    role: "Farmer, Bihar",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    color: "border-brand-primary"
  },
  {
    quote: "The tech is incredible. I saw my ultrasound on a big screen while the doctor in the city explained everything live.",
    author: "Samuel K.",
    role: "Teacher, Jharkhand",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    color: "border-blue-500"
  },
  {
    quote: "The clinical authority is evident. The reports were accepted by my city specialist without any questions.",
    author: "Priya Sharma",
    role: "Health Volunteer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    color: "border-orange-500"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-brand-primary mb-4"
          >
            Voices from the Field
          </motion.h2>
          <p className="text-gray-500">Trust is earned in every mile we travel and every life we touch.</p>
        </div>
        
        <div className="flex gap-4">
           <button className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-all text-brand-primary cursor-pointer">
              <ArrowLeft size={20} />
           </button>
           <button className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center hover:bg-brand-secondary transition-all text-white cursor-pointer shadow-lg shadow-brand-primary/20">
              <ArrowRight size={20} />
           </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-10 rounded-[32px] bg-brand-light border-t-8 ${t.color} shadow-sm hover:shadow-md transition-all flex flex-col h-full`}
          >
            <div className="mb-8">
              <Quote className="text-brand-primary/20 scale-150 transform -translate-x-2" size={32} />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-bold text-brand-primary">{t.author}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
