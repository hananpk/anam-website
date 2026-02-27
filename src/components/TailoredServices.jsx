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
import { ClippingGroup } from "three/webgpu";
import {productData} from "../data/productData";

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
const products = productData.flatMap(product => product.items);
console.log(products);


const TailoredServices = () => {
  const brandColor = "#63243B"; 

  return (
    <section className="container mx-auto py-24 px-4 bg-white font-sans">
      <div className="max-w-[1600px] mx-auto"> 
        
        <div className="flex items-baseline gap-6 border-b border-gray-100 pb-8 mb-12">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
            Best Products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {products.slice(0,10).map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 flex flex-col group cursor-pointer"
            >
              {/* Main Feature Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-white">
                <img
                  src={product?.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Scaled down "Swatch" for thinner columns */}
                <div className="absolute bottom-4 right-4 w-20 h-20 border-[4px] border-[#b22a2a] shadow-lg overflow-hidden">
                  <div className="bg-[#b22a2a] text-[6px] font-black uppercase px-1 py-0.5 tracking-tighter text-white">
                    {product.name.split(" ")[0]}
                  </div>
                  <img
                    src={product?.sm_image}
                    className="w-full h-full object-cover"
                    alt="texture"
                  />
                </div>
              </div>

              <div className="p-5 bg-gray-50 flex flex-col flex-grow">
                <h5 className="text-sm mb-4 font-bold text-gray-900 leading-tight uppercase tracking-wider">{product?.name}</h5>
                <div className="flex flex-col gap-3 mb-4">
                  <div>
                    {product?.warranty && <p className="text-xs font-bold text-gray-900 leading-tight uppercase tracking-wider">
                      {product?.warranty} - Warranty
                    </p>}
                    <p className="text-[11px] text-gray-500 mt-1 leading-snug line-clamp-2">
                      {product?.description}
                    </p>
                  </div>
                </div>

                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-[9px] font-black uppercase tracking-[0.1em] text-gray-400">
                    REQ {index+1}
                  </span>
                  <Link
                    to="/contact"
                    className="p-1.5 bg-white border border-gray-200 hover:border-[#63243B] hover:text-[#63243B] transition-all"
                  >
                    <LuArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TailoredServices;
