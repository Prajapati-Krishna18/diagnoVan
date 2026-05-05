import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  XCircle,
  ShieldPlus,
  Globe,
  HelpCircle
} from "lucide-react";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [tokenValid, setTokenValid] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

  // Verify token on mount
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await fetch(`${API_URL}/api/auth/admin/verify-token`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });
        const data = await response.json();
        if (data.success) {
          setTokenValid(true);
        } else {
          setError(data.message || "Invalid or expired reset link.");
        }
      } catch (err) {
        setError("Could not verify reset link. Is backend running?");
      } finally {
        setVerifying(false);
      }
    };
    verifyToken();
  }, [token, API_URL]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      return setError("Passwords do not match.");
    }
    if (newPassword.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/api/auth/admin/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await response.json();
      if (data.success) {
        setMessage("Password reset successful! Redirecting to login...");
        setTimeout(() => navigate("/admin-login"), 3000);
      } else {
        setError(data.message || "Failed to reset password.");
      }
    } catch (err) {
      setError("Server connection error.");
    } finally {
      setLoading(false);
    }
  };

  if (verifying) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center font-sans">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-teal-100 border-t-teal-600 rounded-full animate-spin"></div>
          <p className="text-teal-950 font-bold text-sm">Verifying secure link...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-white px-8 h-20 flex items-center justify-between border-b border-gray-100 shrink-0">
        <Link to="/admin-login" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#004D40] rounded-lg flex items-center justify-center">
            <ShieldPlus size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg text-teal-950">Guardian Admin</span>
        </Link>
        <div className="flex items-center gap-6 text-gray-400">
          <HelpCircle size={22} className="cursor-pointer hover:text-teal-900 transition-colors" />
          <Globe size={22} className="cursor-pointer hover:text-teal-900 transition-colors" />
        </div>
      </header>

      <main className="flex flex-col md:flex-row flex-grow">
        {/* Left Column: Visual */}
        <div className="md:w-1/2 relative overflow-hidden bg-[#004D40]">
           <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
                alt="Secure Access" 
                className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#004D40] via-[#00695C]/80 to-transparent"></div>
           </div>

           <div className="relative z-10 h-full p-12 md:p-16 flex flex-col justify-center max-w-xl mx-auto md:mx-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-10 w-fit"
              >
                <ShieldCheck size={14} className="text-[#81C784]" />
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">End-to-End Encrypted</span>
              </motion.div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
                Secure Password<br/>Recovery System.
              </h1>
              <p className="text-base text-white/60 leading-relaxed font-medium mb-10 max-w-md">
                We use bank-grade encryption to ensure your new password remains private and secure across the entire diagnostic network.
              </p>
           </div>
        </div>

        {/* Right Column: Reset Form */}
        <div className="md:w-1/2 flex items-center justify-center bg-white p-8 md:p-20">
           <div className="w-full max-w-md">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                 {!tokenValid ? (
                   <div className="text-center">
                     <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-500 mx-auto mb-6 border border-red-100">
                       <XCircle size={32} />
                     </div>
                     <h2 className="text-xl font-bold text-teal-950 mb-3">Link Invalid or Expired</h2>
                     <p className="text-gray-400 text-xs mb-8 leading-relaxed">
                       The reset link you followed is no longer valid. Password reset links expire after 15 minutes or after being used once.
                     </p>
                     <Link to="/forgot-password" size="sm" className="inline-flex items-center gap-2 bg-[#00695C] text-white px-6 py-3 rounded-lg font-bold text-xs hover:bg-[#004D40] transition-all">
                       Request New Link
                     </Link>
                   </div>
                 ) : message ? (
                   <div className="text-center">
                     <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-6 border border-emerald-100">
                       <CheckCircle2 size={32} />
                     </div>
                     <h2 className="text-xl font-bold text-teal-950 mb-3">Success!</h2>
                     <p className="text-gray-400 text-xs mb-8 leading-relaxed">
                       {message}
                     </p>
                     <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3 }}
                        className="h-full bg-emerald-500"
                       />
                     </div>
                   </div>
                 ) : (
                   <>
                     <div className="w-12 h-12 bg-[#E0F2F1] rounded-xl flex items-center justify-center text-[#00695C] mb-6 shadow-sm border border-teal-50">
                        <Lock size={24} />
                     </div>

                     <h2 className="text-xl font-bold text-teal-950 mb-2 tracking-tight">Create New Password</h2>
                     <p className="text-gray-400 font-medium leading-relaxed mb-8 text-[11px] max-w-[280px]">
                       Set a secure, unique password to protect your admin access.
                     </p>

                     <form onSubmit={handleResetPassword} className="space-y-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold text-teal-900/40 tracking-wider uppercase">New Password</label>
                           <div className="relative">
                              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                 <Lock size={18} />
                              </div>
                              <input 
                                type={showPassword ? "text" : "password"} 
                                required
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Min 6 characters"
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-lg py-3.5 pl-12 pr-12 text-teal-950 font-bold placeholder:text-gray-300 focus:border-teal-500/20 focus:bg-white transition-all outline-none text-xs"
                              />
                              <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600 transition-colors"
                              >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                              </button>
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label className="text-[10px] font-bold text-teal-900/40 tracking-wider uppercase">Confirm New Password</label>
                           <div className="relative">
                              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                 <Lock size={18} />
                              </div>
                              <input 
                                type={showPassword ? "text" : "password"} 
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Re-enter password"
                                className="w-full bg-gray-50/50 border border-gray-100 rounded-lg py-3.5 pl-12 pr-4 text-teal-950 font-bold placeholder:text-gray-300 focus:border-teal-500/20 focus:bg-white transition-all outline-none text-xs"
                              />
                           </div>
                        </div>
                        
                        {error && (
                           <div className="bg-red-50 text-red-600 p-3.5 rounded-xl text-[10px] font-bold text-center border border-red-100">
                              {error}
                           </div>
                        )}

                        <button 
                          type="submit"
                          disabled={loading}
                          className={`w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00695C] hover:bg-[#004D40] shadow-lg shadow-teal-900/5'} text-white py-3.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all group`}
                        >
                           {loading ? "Updating password..." : "Update Password"}
                           {!loading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                        </button>
                     </form>
                   </>
                 )}
              </motion.div>
           </div>
        </div>
      </main>

      {/* Footer Area */}
      <footer className="bg-[#F1F3F5] px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-gray-400 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-teal-950">Guardian Admin</span>
          <span className="opacity-50">|</span>
          <span>© 2024 Rural Diagnostic Systems • The Digital Sanctuary</span>
        </div>
      </footer>
    </div>
  );
}
