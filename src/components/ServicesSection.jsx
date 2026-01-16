import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { IMAGES } from "../utils/assets";
import Counter from "./Counter";

const servicesData = [
  {
    id: 1,
    title: "Interior Design & Planning",
    description:
      "Make your space shine! Our team creates inviting, beautiful interiors that reflect your style.",
    icon: IMAGES.design_icon,
  },
  {
    id: 2,
    title: "Architectural Design",
    description:
      "Dream it, we'll design it! From big picture layouts to the tiniest details.",
    icon: IMAGES.architec_icon,
  },
  {
    id: 3,
    title: "Consulting Services",
    description:
      "Consider us your design whisperers! We provide expert advice to help your project sparkle.",
    icon: IMAGES.consulting_icon,
  },
  {
    id: 4,
    title: "Project Management",
    description:
      "We handle the hustle! From start to finish, we keep your project on track and stress-free.",
    icon: IMAGES.project_icon,
  },
];

const ServiceCard = ({ title, description, icon }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="h-full" style={{ perspective: "1000px" }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="service-card h-full flex flex-col p-8 bg-black/10 backdrop-blur-md 
                   rounded-3xl border border-white/10 shadow-lg group
                   transition-colors duration-500 hover:bg-white"
      >
        <div className="mb-6 w-16" style={{ transform: "translateZ(50px)" }}>
          <img src={icon} alt="" className="w-full" />
        </div>

        <div style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#b22a2a]">
            {title}
          </h3>
          <p className="text-gray-200 group-hover:text-black">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const subHeaderRef = useRef(null);

  const bgImages = [IMAGES.bedroom, IMAGES.dark_bg_2, IMAGES.table];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(headerRef.current, { y: 50, opacity: 0, duration: 0.8 })
        .from(
          subHeaderRef.current,
          { y: 30, opacity: 0, duration: 0.8 },
          "-=0.4"
        )
        .from(
          ".service-card",
          { y: 60, opacity: 0, stagger: 0.15, duration: 0.8 },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 md:px-8 overflow-hidden"
    >
      <div className="absolute inset-0">
        {bgImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: bgIndex === index ? 1 : 0,
              scale: bgIndex === index ? 1.05 : 1,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* --------- CONTENT --------- */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2
          ref={headerRef}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Experience the art of
          <span className="block text-[#b22a2a]">interior design</span>
        </h2>

        <div ref={subHeaderRef} className="max-w-3xl mb-16">
          <p className="text-lg text-gray-100">
            We specialize in transforming visions into reality. Explore our
            portfolio of innovative architectural and interior design projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>

      <Counter />
    </section>
  );
};

export default ServicesSection;
