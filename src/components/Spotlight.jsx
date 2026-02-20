import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { gsap } from "gsap";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { IMAGES } from "../utils/assets";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const slides = [
  {
    image: IMAGES.interior,
    title: ["Premium SPD", "Flooring Solutions"],
    subtitle: "Durability Meets Style",
    desc: "Upgrade your space with our water-resistant, high-durability SPC flooring available in various modern textures and finishes.",
    cta: "Explore Flooring",
  },
  {
    image: IMAGES.interior1,
    title: ["Elegant", "Wall Coverings"],
    subtitle: "Transform Your Walls",
    desc: "Choose from our exclusive collection of wallpapers to add character, warmth, and sophistication to any room.",
    cta: "View Wallpapers",
  },
  {
    image: IMAGES.doors,
    title: ["Modern & Secure", "Door Collection"],
    subtitle: "Security & Aesthetics",
    desc: "Discover our range of high-quality doors designed strictly for security without compromising on style.",
    cta: "Browse Doors",
  },
  {
    image: IMAGES.plants,
    title: ["Lush Indoor", "Greenery"],
    subtitle: "Bring Nature Inside",
    desc: "Enhance your interior environment with our selection of lifelike artificial plants and greenery solutions.",
    cta: "See Collection",
  },
];

const Spotlight = () => {
  const sectionRef = useRef(null);

  const onSlideChange = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const titleLines = activeSlide.querySelectorAll(".title-line");
    const descLines = activeSlide.querySelectorAll(".desc-line");
    const bgImage = activeSlide.querySelector(".bg-image");

    const tl = gsap.timeline();

    gsap.fromTo(
      bgImage,
      { scale: 1.2, filter: "blur(10px) brightness(0.5)" },
      {
        scale: 1,
        filter: "blur(0px) brightness(1)",
        duration: 2,
        ease: "power2.out",
      },
    );

    tl.fromTo(
      titleLines,
      { y: 100, rotate: 5, opacity: 0 },
      {
        y: 0,
        rotate: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
      },
      0.3,
    ).fromTo(
      descLines,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8",
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[75vh] overflow-hidden bg-black"
    >
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onSlideChange={onSlideChange}
        onInit={onSlideChange}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".spotlight-prev",
          nextEl: ".spotlight-next",
        }}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center text-center">
              <img
                src={slide.image}
                alt=""
                className="bg-image absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 max-w-4xl px-6">
                <p className="desc-line text-sm md:text-base uppercase tracking-widest text-[#fff]">
                  {slide.subtitle}
                </p>

                <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-4">
                  {slide.title.map((line, idx) => (
                    <span key={idx} className="block overflow-hidden">
                      <span className="title-line block text-[#fff]">
                        {line}
                      </span>
                    </span>
                  ))}
                </h1>

                <p className="desc-line mt-6 text-[#fff] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                  {slide.desc}
                </p>

                <div className="mt-10 flex justify-center gap-4">
                  <button className="px-8 py-4 bg-white text-black font-semibold hover:bg-red-900 hover:text-white transition-colors duration-300">
                    {slide.cta}
                  </button>
                  <button className="px-8 py-4 border border-white text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Spotlight;
