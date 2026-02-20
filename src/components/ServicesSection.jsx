import React, { useRef } from "react";
import { IMAGES } from "../utils/assets";
import Counter from "./Counter";

const servicesData = [
  {
    id: "01",
    title: "Interior Design & Planning",
    description:
      "Make your space shine! Our team creates inviting, beautiful interiors that reflect your style.",
    icon: IMAGES.design_icon,
  },
  {
    id: "02",
    title: "Architectural Design",
    description:
      "Dream it, we'll design it! From big picture layouts to the tiniest details.",
    icon: IMAGES.architec_icon,
  },
  {
    id: "03",
    title: "Consulting Services",
    description:
      "Consider us your design whisperers! We provide expert advice to help your project sparkle.",
    icon: IMAGES.consulting_icon,
  },
  {
    id: "04",
    title: "Project Management",
    description:
      "We handle the hustle! From start to finish, we keep your project on track and stress-free.",
    icon: IMAGES.project_icon,
  },
];

const ServiceCard = ({ id, title, description, icon }) => {
  return (
    <div className="flex flex-col h-full bg-white border border-gray-200 group">
      {/* Top Header Bar - Matching image style */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#b22a2a] text-white">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10">
            <img src={icon} alt="" className="w-6 h-6 invert brightness-0" />
          </div>
          <span className="text-sm font-bold tracking-widest">{id}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-8">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-4 group-hover:text-[#b22a2a] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>

        {/* Bottom border indicator */}
        <div className="mt-auto pt-6">
          <div className="w-12 h-1 bg-[#b22a2a]/20 group-hover:w-full group-hover:bg-[#b22a2a] transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const brandColor = "#b22a2a";

  return (
    <section className="pt-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Sharp Accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-5xl font-bold text-gray-900 leading-[0.9]">
              Work with <br />
              <span style={{ color: brandColor }}>ANAM</span> Trading
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-500 text-sm md:text-base leading-relaxed border-l-4 border-[#b22a2a] pl-6 italic">
              "We specialize in transforming visions into reality. Explore our
              portfolio of innovative architectural and interior design
              projects."
            </p>
          </div>
        </div>

        {/* Square Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        {/* Integrated Stats Section */}
        <div className="mt-20">
          <Counter />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
