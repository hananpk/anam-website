import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { IMAGES } from "../utils/assets";

// Define the accent color variable to match the design
const accentColorStr = "#993333"; // Deep reddish-brown approximation

// --- Data for the cards ---
const servicesData = [
  {
    id: 1,
    title: "Interior Design & Planning",
    description:
      "Make your space shine! Our team creates inviting, beautiful interiors that reflect your style and make every room a favorite place to be.",
    icon: IMAGES.design_icon,
  },
  {
    id: 2,
    title: "Architectural Design",
    description:
      "Dream it, we'll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!",
    icon: IMAGES.architec_icon,
  },
  {
    id: 3,
    title: "Consulting Services",
    description:
      "Consider us your design whisperers! We provide expert advice to help your project sparkle with creativity, efficiency, and spot-on solutions.",
    icon: IMAGES.consulting_icon,
  },
  {
    id: 4,
    title: "Project Management",
    description:
      "We handle the hustle! From start to finish, we keep your project on track, on budget, and stress-free – so you can sit back and watch the magic happen.",
    icon: IMAGES.project_icon,
  },
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="service-card h-full flex flex-col p-8 bg-white rounded-3xl border-1 border-[#993333]/20 text-left hover:shadow-lg transition-shadow duration-300">
    <div className="mb-6 w-16">
      <img src={icon} alt="Icon" />
    </div>
    <h3 className="text-xl font-bold text-[#993333] mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
  </div>
);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const subHeaderRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          subHeaderRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          gridRef.current.children,
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 md:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-left">
        <h2
          ref={headerRef}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Experience{" "}
          <span className="text-[#993333]">The art of interior design</span>
        </h2>

        {/* Subheading */}
        <div ref={subHeaderRef} className="max-w-3xl mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            We specialize in transforming visions into reality.
            <br className="hidden md:block" />
            Explore our portfolio of innovative architectural and interior
            design projects crafted with precision.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
