import React from 'react';
import { MoreHorizontal, ArrowUp } from 'lucide-react';

const ProductDotMatrix = () => {
  // Generate a grid of dots
  // Rows: 5, Cols: 14
  const renderDots = () => {
    const dots = [];
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 14; c++) {
        // Mock pattern logic
        let color = 'bg-[#333]'; // Default inactive
        
        // Simple visual pattern simulation
        if (r >= 3) {
            // Bottom rows mostly filled
            if ((c + r) % 3 === 0) color = 'bg-white';
            else if ((c + r) % 2 === 0) color = 'bg-[#fb923c]'; // Orange
            else color = 'bg-[#bef264]'; // Green
        } else if (r === 2) {
             if (c > 3 && c < 10 && c % 2 === 0) color = 'bg-[#bef264]';
             else if (c % 3 === 0) color = 'bg-[#fb923c]';
        } else {
            // Top rows sparse
             if (c === 11 || c === 12) color = 'bg-[#bef264]';
             if (c === 5) color = 'bg-[#fb923c]';
        }

        dots.push(
          <div 
            key={`${r}-${c}`} 
            className={`w-2.5 h-2.5 rounded-full ${color}`}
          ></div>
        );
      }
    }
    return dots;
  };

  return (
    <div className="bg-[#121212] p-6 rounded-[32px] border border-[#1f1f1f] h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-gray-400 font-semibold text-sm tracking-wide uppercase">Product</h3>
        <button className="text-gray-500 hover:text-white"><MoreHorizontal size={20} /></button>
      </div>

      <div className="flex gap-8 mb-8">
        <div>
          <div className="flex items-center gap-1 mb-1">
            <ArrowUp size={14} className="text-[#bef264]" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">2,8%</div>
          <div className="text-xs text-gray-500 font-medium">Partners</div>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-1">
            <ArrowDownCustom />
          </div>
          <div className="text-3xl font-bold text-white mb-1">3,2%</div>
          <div className="text-xs text-gray-500 font-medium">Owners</div>
        </div>
      </div>

      <div className="flex-1 grid grid-rows-5 grid-cols-[repeat(14,minmax(0,1fr))] gap-2 items-center justify-center">
        {renderDots()}
      </div>
    </div>
  );
};

const ArrowDownCustom = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-180">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
    </svg>
)

export default ProductDotMatrix;
