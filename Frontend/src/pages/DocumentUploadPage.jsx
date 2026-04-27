import { 
  UserPlus, 
  Truck, 
  FileUp, 
  Users, 
  FileCheck, 
  Save, 
  PlusSquare,
  HelpCircle,
  Bell,
  Briefcase,
  Car,
  FileText,
  Plus,
  CloudUpload,
  CheckCircle2,
  Trash2,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DocumentUploadPage() {
  const navigate = useNavigate();

  const sidebarItems = [
    { icon: UserPlus, label: 'Registration', active: false, path: '/onboarding' },
    { icon: Truck, label: 'Van Specs', active: false, path: '/van-specs' },
    { icon: FileUp, label: 'Document Upload', active: true, path: '/document-upload' },
    { icon: Users, label: 'Team Access', active: false, path: '/team-access' },
    { icon: FileCheck, label: 'Review', active: false, path: '/review' },
  ];

  const docTypes = [
    {
      id: 'medical-license',
      title: 'Medical License',
      desc: "Lead Clinician's active registration certificate.",
      icon: Briefcase,
      status: 'required',
      color: 'bg-[#F0F5FA]'
    },
    {
      id: 'vehicle-reg',
      title: 'Vehicle Registration (RC)',
      desc: 'Official RC book for the diagnostic van chassis.',
      icon: Car,
      status: 'required',
      color: 'bg-[#F0F5FA]'
    },
    {
      id: 'puc-cert',
      title: 'PUC Certificate',
      desc: 'Pollution Under Control certificate.',
      icon: CheckCircle2,
      status: 'uploaded',
      filename: 'puc_cert_2024.pdf',
      color: 'bg-[#D1FAE5]/50'
    },
    {
      id: 'clinical-acc',
      title: 'Clinical Accreditation',
      desc: 'NABL or equivalent lab accreditation proof.',
      icon: Plus,
      status: 'required',
      color: 'bg-[#F0F5FA]'
    }
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
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {/* Top Navbar */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl font-bold text-[#003D33]">Vitality Rural</h2>
            <div className="flex items-center gap-6">
              <button className="text-gray-600 hover:text-[#004D40] transition-colors">
                <HelpCircle className="w-6 h-6" />
              </button>
              <div className="relative">
                <button className="text-gray-600 hover:text-[#004D40] transition-colors">
                  <Bell className="w-6 h-6" />
                </button>
                <span className="absolute -top-1 -right-0.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
              </div>
              <button className="w-10 h-10 rounded-full border-2 border-gray-200 overflow-hidden hover:border-[#004D40] transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" 
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          <header className="mb-10">
            <div className="bg-[#E4E7EC]/80 px-3 py-1 rounded-md inline-block mb-4">
              <span className="text-[#003D33] font-bold text-[10px] uppercase tracking-[0.1em]">Step 3 of 5</span>
            </div>
            <h2 className="text-[44px] font-bold text-[#003D33] mb-4 tracking-tight leading-tight">Document Uploads</h2>
            <p className="text-gray-500 text-lg max-w-3xl leading-relaxed font-medium">
              Please provide clear, legible copies of the following operational documents. These are required to certify your diagnostic van for rural deployment.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docTypes.map((doc) => (
              <div key={doc.id} className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col group transition-all hover:shadow-md">
                <div className="flex justify-between items-start mb-8">
                  <div className={`${doc.status === 'uploaded' ? 'bg-[#D1FAE5]' : doc.color} p-3.5 rounded-xl block`}>
                    <doc.icon className={`w-6 h-6 ${doc.status === 'uploaded' ? 'text-[#059669]' : 'text-[#004D40]'}`} />
                  </div>
                  {doc.status === 'required' ? (
                    <div className="bg-[#FEE2E2] text-[#DC2626] px-3.3 py-1.2 rounded-full flex items-center gap-2">
                       <AlertCircle className="w-4 h-4 fill-[#DC2626] text-white" />
                       <span className="text-[11px] font-bold uppercase tracking-wider">Required</span>
                    </div>
                  ) : (
                    <div className="bg-[#D1FAE5] text-[#059669] px-3.3 py-1.2 rounded-full flex items-center gap-2">
                       <CheckCircle2 className="w-4 h-4 fill-[#059669] text-white" />
                       <span className="text-[11px] font-bold uppercase tracking-wider">Uploaded</span>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-[#003D33] mb-2">{doc.title}</h4>
                  <p className="text-[14px] text-gray-500 font-medium">{doc.desc}</p>
                </div>

                {doc.status === 'uploaded' ? (
                  <div className="bg-[#F2F4F7] p-5 rounded-xl flex items-center justify-between border border-gray-100">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-500" />
                      <span className="text-sm font-semibold text-gray-700">{doc.filename}</span>
                    </div>
                    <button className="p-2 hover:bg-red-50 text-red-500 transition-colors rounded-lg">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-200 rounded-[20px] p-8 text-center flex flex-col items-center justify-center group-hover:border-[#004D40]/30 transition-all cursor-pointer">
                    <div className="flex items-center gap-3 text-gray-600 font-bold text-sm">
                      <CloudUpload className="w-5 h-5 text-[#004D40]" />
                      Select File
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer Action */}
          <div className="mt-12 flex justify-end gap-4">
            <button 
              onClick={() => navigate('/van-specs')}
              className="px-8 py-4 bg-[#E4E7EC] hover:bg-[#D0D5DD] transition-colors text-[#003D33] font-bold rounded-xl text-md"
            >
              Back
            </button>
            <button 
              onClick={() => navigate('/team-access')}
              className="flex items-center gap-3 px-10 py-4 bg-[#004D40] hover:bg-[#003D33] text-white font-bold rounded-xl text-md shadow-xl shadow-[#004D40]/20 group"
            >
              Continue to Team Access
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
