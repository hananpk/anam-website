import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { IMAGES } from "../utils/assets";

const Footer = () => {
  const footerLinks = {
    column1: [
      "About Us",
      "Services",
      "Careers",
      "Our Team",
      "Blog",
      "Contact Us",
    ],
    column2: [
      "Our Projects",
      "Partners",
      "Partners Program",
      "Affiliate Program",
      "Terms & Conditions",
      "Support Center",
    ],
  };

  const socialLinks = [
    { icon: <FaInstagram size={20} />, name: "Instagram", href: "#" },
    { icon: <FaFacebookF size={20} />, name: "Facebook", href: "#" },
    { icon: <FaYoutube size={22} />, name: "YouTube", href: "#" },
    { icon: <FaTwitter size={20} />, name: "Twitter", href: "#" },
  ];
  return (
    <footer className="relative bg-[#1a1a1a] text-white pt-24 pb-10 overflow-hidden h-[600px]">
      {/* Decorative Background Image & Text Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
          alt="Background Interior"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-[1400px] mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <img src={IMAGES.logo} alt="" />
            </div>
            <p className="text-gray-400 font-medium leading-relaxed max-w-[280px]">
              We Transform Your Vision Into Beautifully Crafted Spaces.
            </p>
            <div className="text-gray-400 text-sm">
              Street No.3083, Bld No. 136, Zone No. 91, Logistic Park, Birkat Al
              Awamer, P.O. Box No. 82036, Doha, Qatar
            </div>
          </div>

          {/* Links Column 1 */}
          <ul className="space-y-4">
            {footerLinks.column1.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Links Column 2 */}
          <ul className="space-y-4">
            {footerLinks.column2.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Column */}
          <div className="space-y-6 lg:text-right">
            <div>
              <a
                href="tel:+97430081007"
                className="text-lg hover:opacity-80 transition-opacity"
              >
                +974 30081007
              </a>
            </div>
            <div>
              <a
                href="mailto:info@anamqatar.com"
                className="text-lg hover:opacity-80 transition-colors break-words"
              >
                info@anamqatar.com
              </a>
            </div>

            <div className="flex gap-6 lg:justify-end pt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-gray-400 hover:text-[#c29d59] transition-all duration-300 transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-center items-center gap-4 text-gray-500 text-sm">
          <p>
            © Copyright 2026 <span className="text-[#fff]">Anam</span>. All
            rights reserved.
          </p>
        </div>
      </div>
      <h2 className=" text-center -mt-8 h-auto text-[10vw] font-black text-white/[0.12] uppercase pointer-events-none select-none">
        anam
      </h2>
    </footer>
  );
};

export default Footer;
