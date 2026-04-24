import { useState } from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  Eye,
  EyeOff,
  Contact,
  MonitorCheck,
  ShieldPlus,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/admin/dashboard");
  };

  return (
    <div className="h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      {/* Left Column: Visual/Branding */}
      <div className="md:w-1/2 relative overflow-hidden bg-[#E0F2F1]">
        {/* Background Image with Blur Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
            alt="Clinical Setting"
            className="w-full h-full object-cover grayscale-[20%] brightness-90"
          />
          <div className="absolute inset-0 bg-[#004D40]/10 backdrop-blur-[2px]"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full p-10 md:p-16 flex flex-col justify-between text-white">
          <div>
            {/* Branding Tag */}
            <Link to="/" className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-2 rounded-2xl border border-white/30 mb-10">
              <ShieldPlus size={22} className="text-white" />
              <span className="font-bold text-lg tracking-tight">The Empathetic Guardian</span>
            </Link>

            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 drop-shadow-sm">
                Smart Diagnostics<br />for Rural Resilience.
              </h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed font-medium max-w-md">
                Bridging the gap between specialized care and remote communities through advanced mobile clinical intelligence.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[
                  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=100",
                ].map((src, i) => (
                  <div key={i} className="w-11 h-11 rounded-full border-4 border-white/20 overflow-hidden shadow-lg">
                    <img src={src} className="w-full h-full object-cover" alt="Pro" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-bold text-white/90">Trusted by 250+ rural health professionals</span>
            </div>

            {/* Operational Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full text-[10px] font-bold tracking-[0.1em] border border-white/10 uppercase">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              System Operational
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Login Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-white">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-teal-950 mb-3">Administrator Login</h2>
            <p className="text-gray-500 font-medium leading-relaxed mb-8 text-sm">
              Enter your credentials to access the Diagnostic Management Suite.
            </p>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Admin ID field */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-teal-950 tracking-tight">Admin ID / Email</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Contact size={18} />
                  </div>
                  <input
                    type="text"
                    placeholder="e.g. AD-98234-X"
                    required
                    className="w-full bg-[#F5F8FA] border-none rounded-xl py-3.5 pl-12 pr-4 text-teal-950 font-bold placeholder:text-gray-300 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-teal-950 tracking-tight">Password</label>
                  <Link to="/admin/forgot-password" className="text-xs font-bold text-blue-600 hover:underline px-1">Forgot Password?</Link>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock size={18} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="........"
                    required
                    className="w-full bg-[#F5F8FA] border-none rounded-xl py-3.5 pl-12 pr-12 text-teal-950 font-bold placeholder:text-gray-300 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-900 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Checkbox */}
              <div
                className="flex items-center gap-3 group cursor-pointer w-fit"
                onClick={(e) => {
                  const target = e.currentTarget.querySelector("input");
                  if (target) target.checked = !target.checked;
                }}
              >
                <input type="checkbox" className="w-4 h-4 rounded border-2 border-gray-200 text-teal-700 focus:ring-teal-500 cursor-pointer" />
                <span className="text-xs font-medium text-gray-500 group-hover:text-teal-900 transition-colors">Remember session for 24 hours</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#00695C] text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#004D40] transition-all shadow-xl shadow-teal-900/10 group mt-2 overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Secure Login
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </form>

            {/* Footer Links Area */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <Link to="/login" className="flex items-center gap-3 text-brand-dark font-bold hover:text-teal-900 transition-all group text-sm">
                  <div className="w-9 h-9 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                    <MonitorCheck size={18} />
                  </div>
                  Switch to Patient Portal
                </Link>

                <div className="flex gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <Link to="#" className="hover:text-teal-700 transition-colors underline-offset-4 hover:underline">Privacy Policy</Link>
                  <Link to="#" className="hover:text-teal-700 transition-colors underline-offset-4 hover:underline">Support Hub</Link>
                </div>
              </div>
            </div>

            {/* Final Security Badge */}
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] select-none">
                <ShieldCheck size={14} className="text-gray-300" />
                AES-256 CLOUD ENCRYPTED CONNECTIVITY
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
