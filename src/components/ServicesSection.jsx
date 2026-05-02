import React from "react";
import { ArrowRight } from "lucide-react";

const ServiceSection = () => {
  return (
    <div className=" container mx-auto px-6 text-black py-20 pt-26">
      <div className="container px-6 mx-auto flex items-start justify-center md:flex-row flex-col gap-16 ">
        <div className="md:h-[400px] h-[200px]">
          <div className="relative w-full max-w-sm h-full bg-[#8B1743] overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 opacity-20 grayscale group-hover:scale-110 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Industrial Background"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
              <span className="text-7xl md:text-8xl text-[#fff] font-bold tracking-tighter ">
                10+
              </span>
              <p className="text-lg md:text-xl font-medium tracking-widest uppercase mt-2 text-white">
                Years Of Experience
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between h-auto py-4">
          <div className="flex flex-col md:flex-row gap-10 mb-10">
            <div className="space-y-2">
              <span className="text-5xl md:text-6xl font-bold tracking-tighter text-[#8B1743] italic mb-4 block">
                3+
              </span>
              <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">
                Warehouses
              </p>
            </div>

            <div className="md:ml-10">
              <span className="text-5xl md:text-6xl font-bold text-[#8B1743] tracking-tighter italic mb-4 block">
                40+
              </span>
              <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">
                Employees working
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-zinc-400 text-md md:text-lg leading-relaxed max-w-lg">
              Welcome to{" "}
              <span className="text-primary font-semibold">
                ANAM Trading Company
              </span>
              , your trusted partner for over 30 years in elevating living and
              working environments. Specializing in premium interior planning,
              architectural design, and high-end finishes, we ensure every space
              is crafted for both beauty and lasting durability.
            </p>

            <button className="flex items-center gap-3 bg-[#8B1743] hover:bg-[#4B0B22] text-white px-8 py-4 font-bold transition-all group">
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
