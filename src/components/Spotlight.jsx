import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { gsap } from "gsap";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { IMAGES } from "../utils/assets";
import Header from "./Header";
import { LuArrowRight } from "react-icons/lu";
import SideDrawer from "./SideDrawer";

const slides = [
  {
    image: IMAGES.spotlight_one,
    title: ["The art of studying", "interior design"],
    desc: "Whether it’s your home, office, or a commercial project, we are always dedicated to bringing your vision to life.",
  },
  {
    image: IMAGES.spotlight_two,
    title: ["Design that defines", "your lifestyle"],
    desc: "We craft spaces that blend functionality, aesthetics, and comfort with precision.",
  },
];

const Spotlight = () => {
  const sectionRef = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onSlideChange = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const titleLines = activeSlide.querySelectorAll(".title-line");
    const descLines = activeSlide.querySelectorAll(".desc-line");
    const bgImage = activeSlide.querySelector(".bg-image");

    // Reset and Animate
    const tl = gsap.timeline();

    // 1. Image Zoom Effect (Ken Burns)
    gsap.fromTo(
      bgImage,
      { scale: 1.2, filter: "blur(10px) brightness(0.5)" },
      {
        scale: 1,
        filter: "blur(0px) brightness(1)",
        duration: 2,
        ease: "power2.out",
      }
    );

    // 2. Text Reveal
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
      0.3 // Start slightly after image animation
    ).fromTo(
      descLines,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8" // Overlap with title animation
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <Header onOpenDrawer={() => setIsDrawerOpen(true)} />

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1500} // Slower transition for elegance
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onSlideChange={onSlideChange}
        onInit={onSlideChange}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
        }}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="overflow-hidden">
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt=""
                className="bg-image absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/60 to-transparent" />

              <div className="absolute bottom-20 left-20 z-10 max-w-7xl mx-auto px-6 flex items-center">
                <div className="max-w-3xl">
                  <h1 className="text-white text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                    {slide.title.map((line, idx) => (
                      <span key={idx} className="block overflow-hidden pb-2">
                        <span className="title-line block">{line}</span>
                      </span>
                    ))}
                  </h1>

                  <div className="overflow-hidden">
                    <p className="desc-line mt-8 text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl border-white/30">
                      {slide.desc}
                    </p>
                  </div>

                  <div className="overflow-hidden mt-10">
                    <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-red-900  flex items-center hover:text-white transition-colors duration-300">
                      Discover More{" "}
                      <span className="block ml-2">
                        <LuArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
      `}</style>
      <SideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </section>
  );
};

export default Spotlight;
