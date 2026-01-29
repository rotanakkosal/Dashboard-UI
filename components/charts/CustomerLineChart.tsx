import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import { CUSTOMER_CHART_DATA } from '../../constants';
import { MoreHorizontal, ArrowUp } from 'lucide-react';

const CustomerLineChart = () => {
  return (
    <div className="bg-[#121212] p-6 rounded-[32px] border border-[#1f1f1f] h-full flex flex-col relative overflow-hidden">
      <div className="flex justify-between items-start mb-6 z-10">
        <h3 className="text-gray-400 font-semibold text-sm tracking-wide uppercase">Customer</h3>
        <button className="text-gray-500 hover:text-white"><MoreHorizontal size={20} /></button>
      </div>

      <div className="flex gap-8 mb-4 z-10">
        <div>
          <div className="flex items-center gap-1 mb-1">
            <ArrowUp size={14} className="text-[#bef264]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#bef264]"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-1">2,4%</div>
          <div className="text-xs text-gray-500 font-medium">Web Surfing</div>
        </div>
        <div>
          <div className="flex items-center gap-1 mb-1">
            <ArrowUp size={14} className="text-[#fb923c]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#fb923c]"></div>
          </div>
          <div className="text-3xl font-bold text-white mb-1">1,1%</div>
          <div className="text-xs text-gray-500 font-medium">Radio Station</div>
        </div>
      </div>

      <div className="flex-1 w-full -ml-4">
        <ResponsiveContainer width="115%" height="100%">
          <LineChart data={CUSTOMER_CHART_DATA}>
            <Tooltip 
                contentStyle={{ backgroundColor: '#1f1f1f', border: 'none', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
                cursor={{ stroke: '#333', strokeWidth: 1 }}
            />
            <Line 
                type="monotone" 
                dataKey="web" 
                stroke="#bef264" 
                strokeWidth={2} 
                dot={false} 
                activeDot={{ r: 4, fill: '#bef264', stroke: '#000', strokeWidth: 2 }}
            />
            <Line 
                type="monotone" 
                dataKey="radio" 
                stroke="#fb923c" 
                strokeWidth={2} 
                dot={false}
                activeDot={{ r: 4, fill: '#fb923c', stroke: '#000', strokeWidth: 2 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomerLineChart;
