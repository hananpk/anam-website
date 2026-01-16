import React from "react";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Retail",
    description:
      "Our retail services offer homeowners and businesses a curated selection of premium construction and finishing materials.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop", // Replace with your local asset
  },
  {
    title: "Wholesale",
    description:
      "Our wholesale services provide a wide range of high-quality building materials and finishing products at competitive prices.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop", // Replace with your local asset
  },
  {
    title: "Contracting & Construction",
    description:
      "We delivers exceptional contracting and construction solutions, handling everything from initial design to project completion.",
    image:
      "https://images.unsplash.com/photo-1616489953149-7597b5aeeddd?q=80&w=1974&auto=format&fit=crop", // Replace with your local asset
  },
];

const TailoredServices = () => {
  return (
    <section className="py-20 px-6 bg-white font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#b22a2a] text-xs font-bold uppercase tracking-widest block mb-2">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Tailored Services for <br /> Every Need
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-left group cursor-pointer"
            >
              {/* Image Container */}
              <div className="overflow-hidden rounded-[2rem] mb-6 aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <Link to={"/contact"}>
            <button className="px-8 py-4 border border-black text-black hover:border-transparent rounded-full font-semibold hover:bg-red-900 hover:text-white flex items-center transition-all duration-300 group">
              Contact Us
              <span className="block ml-2 group-hover:translate-x-1 transition-transform">
                <LuArrowRight />
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TailoredServices;
