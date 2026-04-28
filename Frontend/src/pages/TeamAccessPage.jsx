import { 
  UserPlus, 
  Truck, 
  FileUp, 
  Users, 
  FileCheck, 
  HelpCircle, 
  Bell, 
  ArrowRight,
  Stethoscope,
  Car,
  CheckCircle2,
  PlusSquare
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TeamAccessPage() {
  const navigate = useNavigate();

  const sidebarItems = [
    { icon: UserPlus, label: 'Registration', active: false, path: '/onboarding' },
    { icon: Truck, label: 'Van Specs', active: false, path: '/van-specs' },
    { icon: FileUp, label: 'Document Upload', active: false, path: '/document-upload' },
    { icon: Users, label: 'Team Access', active: true, path: '/team-access' },
    { icon: FileCheck, label: 'Review', active: false, path: '/review' },
  ];

  const teamMembers = [
    { name: 'Dr. Sarah Jenkins', role: 'Lead Clinician', id: 'MED-89921', initials: 'SJ', color: 'bg-blue-50' },
    { name: 'Marcus Reed', role: 'Van Operator', id: 'CDL-9281A', initials: 'MR', color: 'bg-indigo-50' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] font-sans antialiased text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-[#F2F4F7] border-r border-gray-200 flex flex-col p-6 sticky top-0 h-screen">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3 mb-10">
          <div className="bg-red-500/10 p-2 rounded-lg">
             <Truck className="text-red-500 w-5 h-5 fill-red-500/20" />
          </div>
          <div>
            <h1 className="text-[#004D40] font-bold text-[14px] leading-tight">Partner Onboarding</h1>
            <p className="text-gray-400 text-[10px] font-semibold tracking-wide">Step progress: 20%</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.path !== '#' && navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                item.active 
                  ? 'bg-blue-50/50 text-blue-600 border border-blue-100/50' 
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              <item.icon className={`w-5 h-5 ${item.active ? 'text-blue-600' : 'text-gray-400'}`} />
              <span className={`text-[13px] font-bold ${item.active ? 'text-gray-800' : 'text-gray-500'}`}>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Navbar */}
        <header className="bg-white border-b border-gray-100 px-10 py-4 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-lg font-bold text-[#004D40]">Empathetic Guardian</h2>
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-[#004D40] transition-colors">
              <HelpCircle className="w-6 h-6" />
            </button>
            <div className="relative">
              <button className="text-gray-400 hover:text-[#004D40] transition-colors">
                <Bell className="w-6 h-6" />
              </button>
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
            </div>
            <button className="w-10 h-10 rounded-full bg-[#1A1C1E] border border-gray-200 overflow-hidden flex items-center justify-center p-1">
               <div className="w-full h-full rounded-full bg-gray-500/20 overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-full h-full object-cover" />
               </div>
            </button>
          </div>
        </header>

        <div className="p-10 max-w-6xl mx-auto">
          <div className="flex justify-between items-start mb-10">
            <div className="max-w-2xl">
              <h2 className="text-[36px] font-bold text-[#003D33] mb-3 leading-tight">Step 4: Team Access</h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                Assign mandatory clinical and operational staff to your diagnostic van. This ensures community readiness and maintains our high standards of care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-64">
               <div className="flex justify-between items-end mb-4">
                 <span className="text-sm font-bold text-gray-500">Overall Completion</span>
                 <span className="text-2xl font-bold text-[#003D33]">80%</span>
               </div>
               <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                 <div className="bg-[#004D40] h-full w-[80%] rounded-full"></div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-8">
              {/* Add Lead Clinician */}
              <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-[#D1FAE5] p-3 rounded-xl">
                    <Stethoscope className="w-6 h-6 text-[#059669]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#003D33]">Add Lead Clinician</h3>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">Mandatory medical oversight for diagnostics.</p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Full Legal Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Dr. Sarah Jenkins"
                      className="w-full px-5 py-4 bg-[#F0F5FA] border-none rounded-2xl text-sm placeholder-gray-400"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Medical ID / License</label>
                      <input 
                        type="text" 
                        placeholder="e.g. MED-89921"
                        className="w-full px-5 py-4 bg-[#F0F5FA] border-none rounded-2xl text-sm placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Specialization</label>
                      <input 
                        type="text" 
                        placeholder="e.g. General Practice"
                        className="w-full px-5 py-4 bg-[#F0F5FA] border-none rounded-2xl text-sm placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <button className="flex items-center gap-2 px-6 py-3.5 bg-[#E4E7EC] hover:bg-[#D0D5DD] transition-colors rounded-xl text-sm font-bold text-gray-800">
                  <PlusSquare className="w-4 h-4 fill-gray-800 text-white" />
                  Save Clinician
                </button>
              </section>

              {/* Add Driver / Operator */}
              <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-[#E0E7FF] p-3 rounded-xl">
                    <Car className="w-6 h-6 text-[#4F46E5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#003D33]">Add Driver / Operator</h3>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">Certified personnel for vehicle and equipment operation.</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Full Legal Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Marcus Reed"
                      className="w-full px-5 py-4 bg-[#F0F5FA] border-none rounded-2xl text-sm placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">Commercial License Number</label>
                    <input 
                      type="text" 
                      placeholder="e.g. CDL-9281A"
                      className="w-full px-5 py-4 bg-[#F0F5FA] border-none rounded-2xl text-sm placeholder-gray-400"
                    />
                  </div>
                </div>

                <button className="flex items-center gap-2 px-6 py-3.5 bg-[#E4E7EC] hover:bg-[#D0D5DD] transition-colors rounded-xl text-sm font-bold text-gray-800">
                  <PlusSquare className="w-4 h-4 fill-gray-800 text-white" />
                  Save Operator
                </button>
              </section>
            </div>

            <div className="lg:col-span-5 space-y-8">
              {/* Added Team Members */}
              <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#F0F5FA] p-3 rounded-xl">
                      <Users className="w-6 h-6 text-[#004D40]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#003D33]">Added Team Members</h3>
                  </div>
                  <div className="bg-[#D1FAE5] text-[#059669] px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase text-center leading-tight">
                    2<br/>Members
                  </div>
                </div>

                <div className="space-y-4 mb-auto">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="bg-[#F0F5FA]/50 p-6 rounded-2xl flex items-center gap-4 border border-gray-100 transition-all hover:bg-[#F0F5FA]">
                      <div className="w-12 h-12 rounded-full bg-[#E0E7FF] flex items-center justify-center text-[#4F46E5] font-bold text-base shadow-sm">
                        {member.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#003D33] text-[15px]">{member.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                           <div className="w-1.5 h-1.5 bg-[#004D40] rounded-full"></div>
                           <p className="text-[11px] text-gray-500 font-bold uppercase">{member.role} • {member.id}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 bg-[#F0F5FA]/80 p-6 rounded-2xl border border-blue-100/50">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 p-1.5 rounded-full mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#003D33] mb-1">Minimum Requirements Met</h4>
                      <p className="text-[11px] text-gray-500 font-semibold leading-relaxed">
                        You have assigned both a mandatory Lead Clinician and a Van Operator. You may proceed to the final review.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="mt-12 flex justify-end">
            <button 
              onClick={() => navigate('/review')}
              className="flex items-center gap-3 px-10 py-5 bg-[#004D40] hover:bg-[#003D33] text-white font-bold rounded-2xl shadow-xl shadow-[#004D40]/20 transition-all group"
            >
              Continue to Final Review
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
