import React from 'react';
import { Search, MessageSquare, Box } from 'lucide-react'; // Using Lucide approximations
import { USER_AVATAR } from '../constants';

const TopNav = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      {/* Left Tabs */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] rounded-full text-white font-medium hover:bg-[#252525] transition-colors border border-[#333]">
          <Box size={18} />
          <span>Check Box</span>
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-transparent rounded-full text-gray-400 font-medium hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
          <span>Monitoring</span>
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-transparent rounded-full text-gray-400 font-medium hover:text-white transition-colors">
          <MessageSquare size={18} />
          <span>Support</span>
        </button>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white bg-[#1a1a1a] hover:bg-[#252525] transition-colors ml-2">
            <Search size={18} />
        </button>
      </div>

      {/* Right User Profile */}
      <div className="flex items-center gap-4">
        <div className="text-right hidden md:block">
          <div className="text-sm font-semibold text-white">Bogdan Nikitin</div>
          <div className="text-xs text-gray-500">@Nixtio</div>
        </div>
        <div className="relative">
            <img src={USER_AVATAR} alt="Profile" className="w-10 h-10 rounded-full object-cover border border-[#333]" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border border-[#000]">2</div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
