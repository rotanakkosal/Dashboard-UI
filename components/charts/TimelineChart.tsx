import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { TIMELINE_DATA } from '../../constants';
import { TimelineEvent } from '../../types';

// Icons for the timeline bubbles
const BrandIcon = ({ type }: { type?: string }) => {
    if (!type) return null;
    switch(type) {
        case 'shazam': return <span className="text-blue-600 font-bold text-lg">S</span>; // Placeholder
        case 'x': return <span className="text-black font-bold">X</span>;
        case 'dribbble': return <span className="text-pink-600 font-bold">Dr</span>;
        case 'discord': return <span className="text-indigo-600 font-bold">Di</span>;
        case 'facebook': return <span className="text-blue-700 font-bold">f</span>;
        case 'twitter': return <span className="text-sky-500 font-bold">t</span>;
        default: return null;
    }
}

// Map real icons in a real app, here we simulate with colors and letters or just visual cues
const EventBar: React.FC<{ event: TimelineEvent }> = ({ event }) => {
    let bgColor = 'bg-[#bef264]'; // Customer - Green
    let textColor = 'text-black';
    if (event.type === 'product') {
        bgColor = 'bg-[#fb923c]'; // Product - Orange
    } else if (event.type === 'web') {
        bgColor = 'bg-white'; // Web - White
    }

    const width = `${event.duration * 3.3}%`; // approx scale
    const left = `${event.start * 3.3}%`;

    return (
        <div 
            className={`absolute h-10 rounded-full flex items-center justify-between px-1.5 ${bgColor} shadow-lg group hover:z-10 transition-all hover:scale-[1.02]`}
            style={{ width, left, top: '50%', transform: 'translateY(-50%)' }}
        >
            {/* Left Icon/Avatar */}
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 relative z-10">
               {event.icon ? (
                   // Simplified Icon Mapping
                   event.icon === 'shazam' ? <div className="w-5 h-5 bg-blue-500 rounded-full"></div> :
                   event.icon === 'x' ? <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-[10px] text-white">X</div> :
                   event.icon === 'dribbble' ? <div className="w-5 h-5 bg-pink-500 rounded-full"></div> :
                   event.icon === 'discord' ? <div className="w-5 h-5 bg-indigo-500 rounded-full"></div> :
                   event.icon === 'facebook' ? <div className="w-5 h-5 bg-blue-700 rounded-full text-white text-[10px] flex items-center justify-center">f</div> :
                   event.icon === 'twitter' ? <div className="w-5 h-5 bg-sky-400 rounded-full"></div> : null
               ) : (
                   event.avatars && event.avatars.length > 0 ? (
                       <div className="flex -space-x-2">
                           {event.avatars.map((av: string, i: number) => (
                               <img key={i} src={av} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                           ))}
                       </div>
                   ) : null
               )}
            </div>

            {/* Right Count */}
            <span className={`text-[10px] font-bold ${textColor} pr-2`}>{event.count}</span>
        </div>
    )
}

const TimelineChart = () => {
  return (
    <div className="bg-[#121212] p-6 rounded-[32px] border border-[#1f1f1f] h-full flex flex-col">
       <div className="flex justify-between items-start mb-6">
        <h3 className="text-gray-400 font-semibold text-sm tracking-wide uppercase">Projects Timeline</h3>
        <button className="text-gray-500 hover:text-white"><MoreHorizontal size={20} /></button>
      </div>

      <div className="flex-1 flex flex-col relative">
        {/* Grid Lines (Vertical) */}
        <div className="absolute inset-0 flex justify-between pointer-events-none px-12">
            {[0, 1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-full border-l border-dashed border-[#2a2a2a] w-px"></div>
            ))}
        </div>

        {/* Rows */}
        <div className="flex flex-col justify-between flex-1 py-2">
            {TIMELINE_DATA.map((row, idx) => (
                <div key={idx} className="flex items-center relative h-12">
                    {/* Date Label */}
                    <div className="w-12 text-xs font-medium text-gray-400 shrink-0">{row.date}</div>
                    
                    {/* Event Area */}
                    <div className="flex-1 relative h-full mx-2">
                        {row.events.map(event => (
                            <EventBar key={event.id} event={event} />
                        ))}
                    </div>
                </div>
            ))}
        </div>

        {/* X Axis Labels */}
        <div className="flex justify-between px-12 mt-6 text-xs text-gray-500 font-medium">
            <span>0</span>
            <span>5</span>
            <span>10</span>
            <span>15</span>
            <span>20</span>
            <span>25</span>
            <span>30</span>
        </div>
      </div>

       {/* Legend */}
       <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#1a1a1a]">
            <div className="flex gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#bef264] border-2 border-[#121212] ring-1 ring-[#bef264]"></div>
                    <span className="text-xs text-gray-300 font-medium">Customer</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#fb923c] border-2 border-[#121212] ring-1 ring-[#fb923c]"></div>
                    <span className="text-xs text-gray-300 font-medium">Product</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-[#121212] ring-1 ring-white"></div>
                    <span className="text-xs text-gray-300 font-medium">Web</span>
                </div>
            </div>
            <div className="text-xs text-gray-500 font-medium">Total: 284</div>
        </div>
    </div>
  );
};

export default TimelineChart;