import React from 'react';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import CustomerLineChart from './components/charts/CustomerLineChart';
import ProductDotMatrix from './components/charts/ProductDotMatrix';
import ProductPillChart from './components/charts/ProductPillChart';
import TimelineChart from './components/charts/TimelineChart';
import { SlidersHorizontal } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-20 p-8 h-screen overflow-y-auto">
        <div className="max-w-[1600px] mx-auto h-full flex flex-col">
          
          <TopNav />

          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-black uppercase tracking-tight text-[#e5e5e5]">Check Box</h1>
            
            <div className="flex items-center gap-3">
               <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] rounded-full border border-[#333]">
                  <span className="text-gray-500 text-xs font-medium">Date:</span>
                  <span className="text-white text-sm font-semibold">Now</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] rounded-full border border-[#333]">
                  <span className="text-gray-500 text-xs font-medium">Product:</span>
                  <span className="text-white text-sm font-semibold">All</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] rounded-full border border-[#333]">
                  <span className="text-gray-500 text-xs font-medium">Profile:</span>
                  <span className="text-white text-sm font-semibold">Bogdan</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
               </div>
               <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1a1a1a] text-white border border-[#333] hover:bg-[#252525]">
                  <SlidersHorizontal size={16} />
               </button>
            </div>
          </div>

          {/* Dashboard Grid */}
          {/* Use CSS Grid for complex layout: 2 columns mostly, but the right one spans 2 rows */}
          <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">
            
            {/* Left Column (Width: ~55%) */}
            <div className="col-span-12 lg:col-span-6 xl:col-span-7 grid grid-rows-2 gap-6 min-h-[600px]">
              
              {/* Top Row Split */}
              <div className="grid grid-cols-2 gap-6 h-full">
                 <CustomerLineChart />
                 <ProductDotMatrix />
              </div>

              {/* Bottom Row Full */}
              <div className="h-full">
                <ProductPillChart />
              </div>

            </div>

            {/* Right Column (Width: ~45%) - Full Height */}
            <div className="col-span-12 lg:col-span-6 xl:col-span-5 h-full min-h-[600px]">
               <TimelineChart />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
