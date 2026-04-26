import { motion } from "motion/react";
import {
  Bell,
  Moon,
  User,
  ArrowRight,
  Home as HomeIcon,
  Calendar,
  MapPin,
  Clock,
  Download,
  PhoneCall,
  Search,
  Stethoscope,
  Droplets,
  PlusCircle,
  Headset,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function UserDashboard() {
  const location = useLocation();
  const user = location.state?.user || {};
  const phone = user.phone || "+91 XXXXX XXXXX";

  return (
    <div className="min-h-screen bg-[#F8FAFB] text-brand-dark">
      {/* Dashboard Navbar */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-brand-primary">Empathetic Guardian</span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <Link to="/dashboard" className="text-brand-primary font-bold">Home</Link>
            <Link to="#" className="text-gray-500 font-medium hover:text-brand-primary transition-colors">Bookings</Link>
            <Link to="#" className="text-gray-500 font-medium hover:text-brand-primary transition-colors">My Health</Link>
          </nav>

          <div className="flex items-center gap-6">
            <button className="text-brand-dark cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-all">
              <Moon size={20} />
            </button>
            <Link to="/profile" className="text-brand-dark cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-all border border-gray-100">
              <User size={20} />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] text-brand-primary mb-2">GOOD MORNING</div>
            <h1 className="text-5xl font-bold mb-4">Welcome, User</h1>
            <p className="text-gray-500 max-w-lg leading-relaxed font-medium">
              Your health remains our priority. The diagnostic van is currently touring your district with advanced imaging services.
            </p>
            {phone && (
              <p className="text-sm text-gray-400 mt-2 font-medium">
                Logged in as: <span className="text-brand-primary font-bold">{phone}</span>
              </p>
            )}
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-full text-xs font-bold whitespace-nowrap">
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
            Live Sync: Connectivity High
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Main Booking Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:col-span-2 bg-[#00695C] rounded-[32px] p-10 text-white relative overflow-hidden group shadow-xl shadow-teal-900/10"
          >
            <div className="relative z-10 max-w-md">
              <h2 className="text-4xl font-bold mb-4">Book Diagnostic<br />Van Visit</h2>
              <p className="text-teal-50/70 mb-10 leading-relaxed font-medium">
                Schedule a comprehensive health screening at the nearest rural hub today.
              </p>
              <Link to="/book-service" state={{ user }} className="inline-flex bg-white text-teal-900 px-8 py-4 rounded-2xl font-bold items-center gap-2 hover:bg-teal-50 transition-all group/btn">
                Find Next Visit
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Abstract Van Icon Background */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-64 h-64">
                <path d="M19 15c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM5 15c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm16.5-6l-2-4L14 3H3v12h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2V9l-.5-3z" />
              </svg>
            </div>
          </motion.div>

          {/* Home Collection Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-[32px] p-10 border border-gray-100 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center mb-6">
                <HomeIcon className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Home Sample Collection</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                Certified phlebotomist will arrive at your doorstep for lab tests.
              </p>
            </div>
            <Link to="/book-service" state={{ user }} className="text-brand-primary font-bold flex items-center gap-2 group/link hover:underline mt-6">
              Book Home Collection
              <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Stats and Bookings Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Upcoming Bookings */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Upcoming Bookings</h2>
              <button className="text-brand-primary font-bold text-sm hover:underline">View All History</button>
            </div>

            <div className="space-y-4">
              {/* Booking Item 1 */}
              <div className="bg-white p-6 rounded-[24px] border border-gray-50 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center">
                    <Stethoscope className="text-brand-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Full Body Diagnostic Screening</h4>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mt-1 font-medium">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        Oct 24, 2023
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        Van Unit #04 - Rampur
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#E8F5E9] text-brand-secondary px-4 py-1.5 rounded-full text-xs font-bold">
                  Confirmed
                </div>
              </div>

              {/* Booking Item 2 */}
              <div className="bg-white p-6 rounded-[24px] border border-gray-50 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#E3F2FD] rounded-xl flex items-center justify-center">
                    <Droplets className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Diabetes Profile - HbA1c</h4>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mt-1 font-medium">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        Pending Schedule
                      </div>
                      <div className="flex items-center gap-1">
                        <HomeIcon size={14} />
                        Home Collection
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FFF3E0] text-orange-500 px-4 py-1.5 rounded-full text-xs font-bold">
                  Pending
                </div>
              </div>
            </div>
          </div>

          {/* Last Checkup */}
          <div className="bg-[#ECF1F4]/50 rounded-[32px] p-8">
            <h2 className="text-2xl font-bold mb-8">Last Checkup</h2>

            <div className="space-y-8 mb-10">
              <div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-2">BLOOD PRESSURE</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">118/76</span>
                  <span className="text-xs text-gray-400 font-bold uppercase">mmHg</span>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 mb-2">HEART RATE</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">72</span>
                  <span className="text-xs text-gray-400 font-bold uppercase">bpm</span>
                </div>
              </div>
            </div>

            {/* Simulated Chart */}
            <div className="relative mb-8 pt-4">
              <div className="bg-teal-900/5 aspect-video rounded-2xl overflow-hidden relative border border-teal-900/10">
                <svg viewBox="0 0 100 40" className="absolute bottom-0 w-full h-full stroke-brand-primary stroke-[1.5] fill-brand-primary/10">
                  <path d="M0 30 Q 15 25, 30 35 T 60 15 T 100 20 L 100 40 L 0 40 Z" fill="url(#gradient)" />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00695C" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#00695C" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute -bottom-6 right-0">
                <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-900/20 cursor-pointer hover:bg-brand-secondary transition-all">
                  <PlusCircle size={24} />
                </div>
              </div>
            </div>

            <button className="w-full bg-white text-brand-dark py-4 rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all">
              Download Report
            </button>
          </div>
        </div>

        {/* Assistance Banner */}
        <div className="mt-12 bg-[#D1EBD0] rounded-[48px] p-12 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Need Urgent Assistance?</h2>
            <p className="text-brand-primary/70 max-w-sm font-medium mb-10">
              Connect with our on-call medical coordinator for immediate guidance on diagnostic availability.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-xl hover:bg-black transition-all">
                <PhoneCall size={20} />
                Call Support
              </button>
              <button className="bg-transparent border border-brand-primary/20 text-brand-primary px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                Locate Van
              </button>
            </div>
          </div>

          <div className="relative z-10 w-full md:w-auto flex justify-center">
            <div className="w-64 h-64 bg-white/40 rounded-[64px] flex items-center justify-center relative shadow-inner">
              <Headset size={100} strokeWidth={1} className="text-brand-primary opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
            </div>
          </div>

          {/* Background pattern */}
          <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-primary/5 rounded-tl-[100px] pointer-events-none"></div>
        </div>
      </main>
    </div>
  );
}
