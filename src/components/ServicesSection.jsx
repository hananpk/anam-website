import React from "react";
import { ArrowRight } from "lucide-react";

const ServiceSection = () => {
  return (
    <div className="bg-[#fff] text-black py-20">
      <div className="container px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="">
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
            From Concept Sketches to Finished Spaces, We Shape Your World.
          </h2>
          <div className="mt-12 relative w-full max-w-sm aspect-square md:aspect-video lg:aspect-square bg-[#b22a2a] overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 opacity-20 grayscale group-hover:scale-110 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Industrial Background" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
              <span className="text-7xl md:text-8xl text-[#fff] font-bold tracking-tighter">10+</span>
              <p className="text-lg md:text-xl font-medium tracking-widest uppercase mt-2 text-blue-100">
                Years Of Experience
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between h-auto py-4">
          <div className="grid grid-cols-2 gap-12 mb-16">
            <div className="space-y-2">
              <span className="text-5xl md:text-6xl font-bold tracking-tighter text-[#b22a2a] italic">3+</span>
              <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">Warehouses</p>
            </div>

            <div className="space-y-2">
              <span className="text-5xl md:text-6xl font-bold text-[#b22a2a] tracking-tighter italic">40+</span>
              <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">Employees working</p>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
              Welcome to <span className="text-[#b22a2a] font-semibold">ANAM Trading Company</span>, your trusted partner for over 30 years in elevating living and working environments. Specializing in premium interior planning, architectural design, and high-end finishes, we ensure every space is crafted for both beauty and lasting durability.
            </p>
            
            <button className="flex items-center gap-3 bg-[#b22a2a] hover:bg-[#333] text-white px-8 py-4 font-bold transition-all group">
              Read More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceSection;