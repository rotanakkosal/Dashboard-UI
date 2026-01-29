import React from 'react';
import { Heart, Calendar, Gem, Settings, Plus } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-20 bg-[#000000] flex flex-col items-center py-8 gap-10 border-r border-[#1a1a1a] fixed h-full z-20">
      {/* Logo */}
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <span className="font-black text-black text-xl tracking-tighter">NI</span>
      </div>

      {/* Nav Items */}
      <div className="flex flex-col gap-6 w-full items-center">
        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition-all">
          <Heart size={20} />
        </button>
        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition-all">
          <Calendar size={20} />
        </button>
        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition-all">
          <Gem size={20} />
        </button>
        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition-all">
          <Settings size={20} />
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Add Button */}
      <button className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center text-gray-300 hover:bg-[#2a2a2a] hover:text-white transition-all mb-4">
        <Plus size={20} />
      </button>
    </div>
  );
};

export default Sidebar;
