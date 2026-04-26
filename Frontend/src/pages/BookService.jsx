import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Moon, 
  User, 
  Droplets, 
  Scan, 
  Zap, 
  MapPin, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Compass, 
  Crosshair,
  CheckCircle2,
  Truck
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function BookService() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user || {};
  
  const [selectedService, setSelectedService] = useState("blood");
  const [selectedDate, setSelectedDate] = useState(14);
  const [selectedTime, setSelectedTime] = useState("09:00 AM");

  const services = [
    { id: "blood", title: "Blood Test", desc: "Comprehensive pathology screening and labs.", icon: <Droplets size={20} className="text-teal-700" />, bgColor: "bg-teal-50" },
    { id: "xray", title: "X-ray", desc: "Digital imaging for fractures and lung health.", icon: <Scan size={20} className="text-gray-700" />, bgColor: "bg-gray-50" },
    { id: "ultrasound", title: "Ultrasound", desc: "Internal abdominal and obstetric imaging.", icon: <Zap size={20} className="text-gray-700" />, bgColor: "bg-gray-50" }
  ];

  const dates = [
    { day: "M", date: 12 },
    { day: "T", date: 13 },
    { day: "W", date: 14 },
    { day: "T", date: 15 },
    { day: "F", date: 16 },
    { day: "S", date: 17 },
    { day: "S", date: 18 }
  ];

  const times = ["09:00 AM", "11:30 AM", "02:15 PM", "04:45 PM"];

  return (
    <div className="min-h-screen bg-[#F8FAFB] text-brand-dark">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <button onClick={() => navigate(-1)} className="hover:bg-gray-100 p-2 rounded-full transition-all md:hidden">
                <ArrowLeft size={20} />
             </button>
             <Link to="/dashboard" className="font-bold text-xl text-brand-primary">Empathetic Guardian</Link>
          </div>

          <div className="flex items-center gap-6">
            <Link 
               to="/tracking" 
               state={{ user }}
               className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-brand-primary transition-colors pr-6 border-r border-gray-100"
            >
               <Truck size={18} />
               Track Status
            </Link>
            <button className="text-brand-dark cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-all">
              <Moon size={20} />
            </button>
            <Link to="/profile" state={{ user }} className="text-brand-dark cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-all border border-gray-100">
              <User size={20} />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#004D40] mb-4">Request a Diagnostic Visit</h1>
          <p className="text-gray-500 max-w-2xl leading-relaxed font-medium">
            Schedule a specialized medical van to your rural location. Professional clinical care, delivered directly to your doorstep.
            {user.phone && <span className="block mt-2 text-brand-primary font-bold">Booking for: {user.phone}</span>}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Form Area */}
          <div className="flex-grow space-y-10">
            {/* 1. Select Service */}
            <section className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 bg-[#004D40] text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <h3 className="text-xl font-bold">Select Service Type</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className={`relative p-8 rounded-[24px] text-left border-2 transition-all group ${
                      selectedService === s.id 
                      ? "border-teal-600 bg-teal-50/50" 
                      : "border-gray-50 bg-[#F8FAFB] hover:border-teal-200"
                    }`}
                  >
                    <div className="absolute top-4 right-4">
                       <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedService === s.id ? "border-teal-600 bg-teal-600" : "border-gray-300"}`}>
                          {selectedService === s.id && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                       </div>
                    </div>
                    <div className={`w-10 h-10 ${selectedService === s.id ? "bg-teal-100" : "bg-white"} rounded-xl flex items-center justify-center mb-6 transition-colors`}>
                      {s.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-2">{s.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed font-medium">
                      {s.desc}
                    </p>
                  </button>
                ))}
              </div>
            </section>

            {/* 2. Service Location */}
            <section className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 bg-[#004D40] text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <h3 className="text-xl font-bold">Service Location</h3>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <MapPin size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Enter village name or street address"
                      className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 text-brand-dark font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-teal-500/20 outline-none"
                    />
                  </div>
                  <button className="bg-[#D1EBD0] text-teal-900 px-6 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#c2e2c0] transition-all whitespace-nowrap min-w-fit">
                    <Crosshair size={18} />
                    Auto-detect
                  </button>
                </div>

                <div className="h-[280px] bg-[#E8F5E9] rounded-[24px] overflow-hidden relative group">
                   {/* Simulated Map View with Terrain texture */}
                   <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none"></div>
                   <div className="absolute inset-0 flex flex-col">
                      <div className="flex-grow bg-[#B9D9B7] mix-blend-multiply"></div>
                      <div className="h-20 bg-[#A8C9A6]"></div>
                   </div>
                   {/* Map Marker */}
                   <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl relative"
                      >
                         <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                            <MapPin className="text-white" size={24} />
                         </div>
                         <div className="absolute -bottom-2 w-4 h-1 bg-black/10 rounded-full blur-[2px]"></div>
                      </motion.div>
                   </div>
                </div>
              </div>
            </section>

            {/* 3. Schedule Appointment */}
            <section className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 bg-[#004D40] text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <h3 className="text-xl font-bold">Schedule Appointment</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                 <div>
                    <h4 className="text-sm font-bold text-brand-dark mb-4 uppercase tracking-widest text-[#004D40]">Select Date</h4>
                    <div className="flex justify-between gap-2 overflow-x-auto pb-2">
                       {dates.map((d) => (
                         <button 
                          key={d.date}
                          onClick={() => setSelectedDate(d.date)}
                          className={`flex flex-col items-center justify-center min-w-[50px] aspect-[4/5] rounded-xl transition-all ${
                            selectedDate === d.date 
                            ? "bg-[#004D40] text-white shadow-lg" 
                            : "bg-gray-50 text-gray-400 hover:bg-gray-100"
                          }`}
                         >
                            <span className="text-[10px] font-bold uppercase mb-1">{d.day}</span>
                            <span className="text-lg font-bold">{d.date}</span>
                         </button>
                       ))}
                    </div>
                 </div>

                 <div>
                    <h4 className="text-sm font-bold text-brand-dark mb-4 uppercase tracking-widest text-[#004D40]">Available Slots</h4>
                    <div className="grid grid-cols-2 gap-3">
                       {times.map((t) => (
                         <button 
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`py-4 rounded-xl font-bold text-sm transition-all text-center ${
                            selectedTime === t 
                            ? "bg-[#004D40] text-white shadow-md" 
                            : "bg-gray-50 text-brand-dark hover:bg-gray-100"
                          }`}
                         >
                            {t}
                         </button>
                       ))}
                    </div>
                 </div>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:w-[400px]">
            <div className="sticky top-32 space-y-6">
              <div className="bg-[#E5EEF1]/50 rounded-[32px] p-8">
                 <h3 className="text-2xl font-bold mb-8 text-[#004D40]">Booking Summary</h3>
                 
                 <div className="space-y-6 mb-10">
                    {/* Summary Item: Service */}
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-[#81C784]/30 rounded-xl flex items-center justify-center shrink-0">
                          <Droplets className="text-[#004D40]" size={22} />
                       </div>
                       <div>
                          <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-1 uppercase">Service</div>
                          <div className="font-bold text-lg">Blood Test Panel</div>
                       </div>
                    </div>
  
                    {/* Summary Item: Schedule */}
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-teal-200/50 rounded-xl flex items-center justify-center shrink-0">
                          <Calendar className="text-[#004D40]" size={22} />
                       </div>
                       <div>
                          <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-1 uppercase">Schedule</div>
                          <div className="font-bold text-lg">Wed, 14 Oct • 09:00 AM</div>
                       </div>
                    </div>
  
                    {/* Summary Item: Connectivity */}
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-teal-100/50 rounded-xl flex items-center justify-center shrink-0">
                          <MapPin className="text-[#004D40]" size={22} />
                       </div>
                       <div>
                          <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-1 uppercase">Connectivity</div>
                          <div className="flex items-center gap-2">
                             <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                             <span className="font-bold text-lg">Van En-route Area</span>
                          </div>
                       </div>
                    </div>
                 </div>
  
                 <div className="border-t border-teal-900/10 pt-8 mb-8 flex items-center justify-between">
                    <span className="text-gray-500 font-medium">Estimated Fee</span>
                    <span className="text-3xl font-bold text-[#004D40]">$45.00</span>
                 </div>
  
                 <button 
                    onClick={() => navigate("/booking-confirmation", { state: { bookingData: { service: selectedService, date: selectedDate, time: selectedTime }, user } })}
                    className="w-full bg-[#004D40] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#00382e] transition-all shadow-xl shadow-teal-900/20 mb-6"
                 >
                    Confirm Booking
                 </button>
  
                 <div className="text-[10px] text-gray-400 text-center leading-relaxed font-medium">
                    By confirming, you agree to our <span className="text-teal-600 underline">Health Service Terms</span> and rural area visit policies.
                 </div>
              </div>
  
              <div className="bg-[#E3F2FD] rounded-2xl p-6 flex items-center gap-4">
                 <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <ShieldCheck className="text-blue-600" size={24} />
                 </div>
                 <div>
                    <div className="text-sm font-bold text-blue-900">Safe & Secure Care</div>
                    <div className="text-[10px] text-blue-900/60 font-medium">Your diagnostic data is encrypted and handled only by certified professionals.</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
