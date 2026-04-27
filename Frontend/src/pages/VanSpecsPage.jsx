import { 
  UserPlus, 
  Truck, 
  FileUp, 
  Users, 
  FileCheck, 
  Save, 
  PlusSquare,
  Car,
  Activity,
  Camera,
  Image as ImageIcon,
  CheckCircle2,
  Award,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function VanSpecsPage() {
  const navigate = useNavigate();

  const sidebarItems = [
    { icon: UserPlus, label: 'Registration', active: false, path: '/onboarding' },
    { icon: Truck, label: 'Van Specs', active: true, path: '/van-specs' },
    { icon: FileUp, label: 'Document Upload', active: false, path: '/document-upload' },
    { icon: Users, label: 'Team Access', active: false, path: '/team-access' },
    { icon: FileCheck, label: 'Review', active: false, path: '/review' },
  ];

  return (
    <div className="flex min-h-screen bg-[#F9FAFB] font-sans antialiased text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-[#F2F4F7] border-r border-gray-200 flex flex-col p-6 sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="bg-[#004D40] p-2.5 rounded-xl shadow-lg shadow-[#004D40]/20">
            <PlusSquare className="text-white w-5 h-5 fill-white/20" />
          </div>
          <div>
            <h1 className="text-[#004D40] font-bold text-[15px] leading-tight">Partner Onboarding</h1>
            <p className="text-[#004D40]/70 text-[9px] font-semibold tracking-wide uppercase">Diagnostic Van System</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.path !== '#' && navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                item.active 
                  ? 'bg-[#004D40] text-white shadow-lg shadow-[#004D40]/20' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              <item.icon className={`w-5 h-5 ${item.active ? 'text-white' : 'text-gray-600'}`} />
              <span className="text-sm font-semibold">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto">
          <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#E4E7EC] hover:bg-[#D0D5DD] transition-colors rounded-xl text-xs font-semibold text-gray-700 shadow-sm">
            <Save className="w-4 h-4" />
            Save Progress
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <header className="mb-10">
            <span className="text-[#004D40] font-bold text-xs uppercase tracking-widest mb-2 block">Step 2 of 5</span>
            <h2 className="text-[40px] font-bold text-[#003D33] mb-3 tracking-tight">Van Specifications</h2>
            <p className="text-gray-500 text-[15px] max-w-2xl leading-relaxed">
              Detail your mobile clinic's physical capabilities and diagnostic equipment to ensure it meets rural deployment standards.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Vehicle Identification Card */}
              <section className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-[#F0F5FA] p-3 rounded-xl block">
                    <Car className="w-6 h-6 text-[#004D40]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#003D33]">Vehicle Identification</h3>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Van Make &amp; Model</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Ford Transit 350HD"
                      className="w-full px-5 py-4 bg-[#F2F4F7] border-none rounded-xl text-sm placeholder-gray-400 focus:ring-2 focus:ring-[#004D40] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">License Plate Number</label>
                    <input 
                      type="text" 
                      placeholder="E.G., ABC-1234"
                      className="w-full px-5 py-4 bg-[#F2F4F7] border-none rounded-xl text-sm placeholder-gray-400 focus:ring-2 focus:ring-[#004D40] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Vehicle Identification Number (VIN)</label>
                  <input 
                    type="text" 
                    placeholder="17-CHARACTER VIN"
                    className="w-full px-5 py-5 bg-[#F2F4F7] border-none rounded-xl text-sm placeholder-gray-400 focus:ring-2 focus:ring-[#004D40] transition-all uppercase tracking-widest"
                  />
                </div>
              </section>

              {/* Onboard Equipment Card */}
              <section className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-[#E4E7EC] p-6 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-3 rounded-xl">
                      <Activity className="w-6 h-6 text-[#004D40]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#003D33] leading-none mb-1">Onboard Equipment</h3>
                      <p className="text-xs text-gray-500 font-medium">Select all active diagnostic tools</p>
                    </div>
                  </div>
                  <div className="bg-[#0052CC] text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    NETWORK READY
                  </div>
                </div>

                <div className="p-8 grid grid-cols-2 gap-4">
                  {[
                    { title: 'Digital X-Ray', desc: 'Portable chest/limb imaging', checked: false },
                    { title: 'Ultrasound Unit', desc: 'Point-of-care diagnostics', checked: false },
                    { title: 'ECG Machine', desc: '12-lead electrocardiogram', checked: true },
                    { title: 'Basic Vitals Kit', desc: 'BP, SpO2, Temp, Glucose', checked: true },
                  ].map((item) => (
                    <div key={item.title} className={`p-5 rounded-2xl border transition-all cursor-pointer flex gap-4 ${
                      item.checked ? 'bg-[#F0F5FA] border-[#004D40]/20 ring-1 ring-[#004D40]/10' : 'bg-[#F9FAFB] border-transparent'
                    }`}>
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                        item.checked ? 'bg-[#004D40]' : 'bg-white border border-gray-200 shadow-sm'
                      }`}>
                        {item.checked && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#003D33]">{item.title}</p>
                        <p className="text-[11px] text-gray-500 mt-1 font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Visual Verification Column */}
            <div className="space-y-8">
              <section className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-2">
                  <div className="bg-[#F0F5FA] p-3 rounded-xl">
                    <Camera className="w-6 h-6 text-[#004D40]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#003D33] leading-none mb-1">Visual Verification</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Mandatory photos for compliance</p>
                  </div>
                </div>

                <div className="mt-8 space-y-6 flex-1">
                  {/* Exterior View */}
                  <div className="border-2 border-dashed border-gray-200 rounded-3xl p-6 text-center group hover:border-[#004D40]/30 transition-all">
                    <ImageIcon className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                    <h4 className="text-sm font-bold text-[#003D33] mb-1">Exterior View</h4>
                    <p className="text-[10px] text-gray-400 leading-tight mb-4 px-4 font-medium italic">
                      Clear shot showing full vehicle side profile and license plate.
                    </p>
                    <button className="px-6 py-2.5 bg-[#E4E7EC] hover:bg-[#D0D5DD] transition-colors rounded-xl text-[11px] font-bold text-gray-700">
                      Select Photo
                    </button>
                  </div>

                  {/* Interior Layout - Success State */}
                  <div className="relative rounded-3xl h-[120px] overflow-hidden group">
                    <img 
                      src="https://images.unsplash.com/photo-1516549221184-8ae9413fd552?auto=format&fit=crop&q=80&w=400" 
                      alt="Interior"
                      className="w-full h-full object-cover filter brightness-50"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                      <div className="bg-[#004D40] p-1.5 rounded-full mb-2">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-sm font-bold mb-1">Interior Layout</h4>
                      <p className="text-[10px] font-bold text-[#4ADE80] uppercase tracking-wider">Uploaded successfully</p>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="border-2 border-dashed border-gray-200 rounded-3xl p-6 text-center group hover:border-[#004D40]/30 transition-all">
                    <Award className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                    <h4 className="text-sm font-bold text-[#003D33] mb-1">Certifications</h4>
                    <p className="text-[10px] text-gray-400 leading-tight mb-4 px-4 font-medium italic">
                      Photo of medical vehicle operating license or local permits.
                    </p>
                    <button className="px-6 py-2.5 bg-[#E4E7EC] hover:bg-[#D0D5DD] transition-colors rounded-xl text-[11px] font-bold text-gray-700">
                      Select Photo
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex justify-between items-center">
            <button 
              onClick={() => navigate('/onboarding')}
              className="flex items-center gap-2 px-8 py-3 bg-[#E4E7EC] hover:bg-[#D0D5DD] transition-colors text-[#003D33] font-bold rounded-xl text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <button 
              onClick={() => navigate('/document-upload')}
              className="flex items-center gap-2 px-10 py-3 bg-[#004D40] hover:bg-[#003D33] transition-colors text-white font-bold rounded-xl text-sm shadow-lg shadow-[#004D40]/20 group"
            >
              Next Step
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
