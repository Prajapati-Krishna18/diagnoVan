import React from "react";
import { motion } from "motion/react";

export function StatCard({ icon, label, value, badge, badgeColor, borderColor }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-50 border-l-[6px] ${borderColor} flex flex-col justify-between`}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        {badge && (
          <span className={`${badgeColor} px-3 py-1 rounded-full text-[10px] font-bold tracking-tight`}>
            {badge}
          </span>
        )}
      </div>
      <div>
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</div>
        <div className="text-4xl font-bold text-teal-950 tracking-tight">{value}</div>
      </div>
    </motion.div>
  );
}

export function BookingRow({ patient, id, location, sub, types, status, initials }) {
  const statusColor = {
    'COMPLETED': 'text-teal-600 bg-teal-600',
    'IN PROGRESS': 'text-blue-500 bg-blue-500',
    'PENDING': 'text-orange-500 bg-orange-500'
  } ;

  return (
    <tr className="group hover:bg-gray-50/50 transition-colors">
      <td className="py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#E8F5E9]/50 rounded-xl flex items-center justify-center text-teal-800 font-bold text-xs">
            {initials}
          </div>
          <div>
            <div className="font-bold text-teal-950 text-sm">{patient}</div>
            <div className="text-[10px] font-bold text-gray-300">ID: #{id}</div>
          </div>
        </div>
      </td>
      <td className="py-6">
        <div className="font-bold text-teal-950 text-sm">{location}</div>
        <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{sub}</div>
      </td>
      <td className="py-6">
        <div className="flex gap-2">
          {types.map((t) => (
            <span key={t} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-[9px] font-bold tracking-widest uppercase">
              {t}
            </span>
          ))}
        </div>
      </td>
      <td className="py-6">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${statusColor[status]}`}></div>
          <span className={`text-[10px] font-bold tracking-widest uppercase ${status === 'IN PROGRESS' ? 'text-blue-500' : status === 'COMPLETED' ? 'text-gray-500' : 'text-orange-500'}`}>
            {status}
          </span>
        </div>
      </td>
      <td className="py-6 text-right">
        <button className="text-xs font-bold text-teal-800 hover:underline cursor-pointer">Details</button>
      </td>
    </tr>
  );
}

export function ActivityItem({ icon, bgColor, title, time }) {
  return (
    <div className="flex gap-4 relative">
      <div className={`w-6 h-6 ${bgColor} rounded-full flex items-center justify-center relative z-10 border-4 border-white`}>
        {icon}
      </div>
      <div>
        <div className="text-xs font-bold text-teal-950">{title}</div>
        <div className="text-[10px] font-bold text-gray-300 mt-0.5">{time}</div>
      </div>
    </div>
  );
}

export function AssignmentCard({ id, type, status, action, color }) {
  return (
    <div className="p-5 bg-gray-50/50 rounded-2xl flex items-center justify-between border border-gray-50">
      <div>
        <div className="font-bold text-teal-950 text-sm">Van #{id} ({type})</div>
        <div className="text-[10px] text-gray-400 font-medium">{status}</div>
      </div>
      <button className={`${color === 'teal' ? 'bg-[#004D40] text-white hover:bg-[#00382e]' : 'bg-gray-200 text-gray-500 hover:bg-gray-300'} px-6 py-2 rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer`}>
        {action}
      </button>
    </div>
  );
}
