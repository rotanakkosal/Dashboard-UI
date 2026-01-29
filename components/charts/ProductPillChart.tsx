import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { PILL_DISPLAY_DATA } from '../../constants';

const ProductPillChart = () => {
  return (
    <div className="bg-[#121212] p-6 rounded-[32px] border border-[#1f1f1f] h-full flex flex-col relative">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-gray-400 font-semibold text-sm tracking-wide uppercase">Product</h3>
        <button className="text-gray-500 hover:text-white"><MoreHorizontal size={20} /></button>
      </div>

      {/* Chart Area */}
      <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 px-2 mb-8">
        {PILL_DISPLAY_DATA.map((col, idx) => (
          <div key={idx} className="flex flex-col gap-2 items-center w-full">
            
            {/* Top Pill */}
            {col.val3 && (
                <div className={`w-10 rounded-full flex items-center justify-center text-[10px] font-bold text-black h-12 mb-auto ${getColor(col.color3)}`}>
                    {col.val3}
                </div>
            )}

            {/* Middle Pill */}
             <div 
                className={`w-10 rounded-full flex items-center justify-center text-[10px] font-bold text-black ${getColor(col.color2)}`}
                style={{ height: `${Math.max(40, col.val2 * 0.8)}px`}}
            >
                {col.val2}
             </div>

            {/* Bottom Pill */}
            <div 
                className={`w-10 rounded-full flex items-center justify-center text-[10px] font-bold text-black ${getColor(col.color1)}`}
                style={{ height: `${Math.max(40, col.val1 * 0.8)}px`}}
            >
                {col.val1}
            </div>
          </div>
        ))}
      </div>

        {/* Custom Legend */}
        <div className="flex items-center justify-between mt-auto">
            <div className="flex gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-4 border-white bg-transparent"></div>
                    <span className="text-xs text-gray-300 font-medium">Resources</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-4 border-[#bef264] bg-transparent"></div>
                    <span className="text-xs text-gray-300 font-medium">Valid</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-4 border-[#fb923c] bg-transparent"></div>
                    <span className="text-xs text-gray-300 font-medium">Invalid</span>
                </div>
            </div>
            <div className="text-xs text-gray-500 font-medium">Total: 1,012</div>
        </div>
    </div>
  );
};

const getColor = (colorName: string | undefined) => {
    switch (colorName) {
        case 'green': return 'bg-[#bef264]';
        case 'orange': return 'bg-[#fb923c]';
        case 'white': return 'bg-white';
        default: return 'bg-gray-700';
    }
}

export default ProductPillChart;
