import React from "react";
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuShieldCheck,
  LuWind,
  LuZap,
  LuActivity,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import { IMAGES } from "../utils/assets";

const services = [
  {
    id: "01",
    title: "Retail Services",
    tagline: "Heavy-Duty",
    specification: "Curated premium materials for foot traffic areas.",
    icon: <LuActivity className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    sm_image: IMAGES.flooring,
  },
  {
    id: "02",
    title: "Wholesale Supply",
    tagline: "Low Smoke",
    specification: "High-quality materials meeting EN 45545 standards.",
    icon: <LuWind className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    sm_image: IMAGES.flooring,
  },
  {
    id: "03",
    title: "Contracting & Construction",
    tagline: "Superior Durability",
    specification: "Certified indoor air quality and structural safety.",
    icon: <LuShieldCheck className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    sm_image: IMAGES.flooring,
  },
];

const TailoredServices = () => {
  const brandColor = "#63243B"; // ANAM Burgundy

  return (
    <section className="container mx-auto py-24 px-6 bg-white font-sans">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header - Matching image 06 style */}
        <div className="flex items-baseline gap-6 border-b border-gray-100 pb-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
              Best Products
            </h2>
          </div>
        </div>

        {/* Product Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 flex flex-col group cursor-pointer"
            >
              {/* Main Feature Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Inset "Swatch" Style Image - As seen in Image 06 */}
                <div className="absolute bottom-6 right-6 w-32 h-32 border-[6px] border-[#b22a2a] shadow-xl overflow-hidden">
                  <div className="bg-[#b22a2a] text-[8px] font-black uppercase px-2 py-1 tracking-tighter">
                    {service.title.split(" ")[0]} Plus®
                  </div>
                  <img
                    src={service.sm_image}
                    className="w-full h-full object-cover"
                    alt="texture"
                  />
                </div>
              </div>

              {/* Technical Data Content */}
              <div className="p-8 bg-gray-50 flex flex-col flex-grow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-white rounded-full shadow-sm border border-gray-100 text-[#b22a2a]">
                    {service.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-tight">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {service.specification}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex justify-between items-center pt-6 border-t border-gray-200">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                    Requirement {service.id}
                  </span>
                  <Link
                    to="/contact"
                    className="p-2 bg-white border border-gray-200 hover:border-[#63243B] hover:text-[#63243B] transition-all"
                  >
                    <LuArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Action Link */}
        {/* <div className="mt-16 flex justify-center">
          <Link
            to="/contact"
            className="group flex items-center gap-4 text-sm font-black uppercase tracking-widest text-gray-900 border-b-2 border-black pb-2 hover:text-[#63243B] hover:border-[#63243B] transition-all"
          >
            Discovery All Services
            <LuArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default TailoredServices;
