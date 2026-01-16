import React, { useState, useEffect } from "react"; // Added hooks
import { LiaAngleDownSolid } from "react-icons/lia";
import { IMAGES } from "../utils/assets";
import Button from "./ui/Button";
import { PiCirclesFour } from "react-icons/pi";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    name: "Flooring",
    items: [
      "SPC Flooring",
      "Acrylic",
      "Laminated Wooden Flooring",
      "Carpet Tile",
      "Vinyl Flooring",
      "Grass Flooring",
      "Sports & Gym Floorings",
      "WPC Decking",
      "LVT Flooring",
      "Solid And Semi Solid Engineering Wooden Floor",
    ],
  },
  {
    name: "Curtains And Roller Blinds",
    items: [
      "Blackout Blinds in Qatar",
      "Sunscreen Blinds",
      "Vertical Blinds",
      "Venetian Blinds",
      "Roman Blinds",
      "Curtain Track & Curtain Rail",
      "3D Digital Printed Curtains",
      "PVC Strip Curtains",
      "Blackout Curtains",
      "Luxury Curtains",
      "Motorized Curtains and Blinds",
    ],
  },
  {
    name: "Wall Panels",
    items: [
      "WPC Wall Panel",
      "MDF Wooden Wall Panels",
      "UV Panels",
      "Grass Wall",
    ],
  },
  {
    name: "Doors",
    items: ["WPC Doors", "Wooden Doors", "UPVC Bathroom Doors", "Steel Doors"],
  },
  {
    name: "Aluminium",
    items: ["Aluminum doors", "Aluminum Windows"],
  },
  {
    name: "Additional Services",
    items: [
      "Wallpaper",
      "Artificial Plants and Pots",
      "Steel",
      "Stainless Steel",
      "uPVC",
      "Glass",
      "Ceiling",
      "Kitchen & Wardrobe",
      "WPC",
      "Solid Surface",
      "Epoxy Coating",
      "Water Proofing",
      "Floor Covering",
      "Micro Cement",
    ],
  },
];

const Header = ({ withBg, onOpenDrawer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled || withBg
          ? "bg-red-900 backdrop-blur-md shadow-2xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="left-container flex items-center justify-center">
          <Link to="/" className="w-100">
            <img
              src={isScrolled || withBg ? IMAGES.logo_white : IMAGES.logo}
              alt="Logo"
              className={`transition-all duration-500 ${
                isScrolled || withBg ? "scale-90 w-40" : "scale-100"
              }`}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200 md:ml-8">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              About
            </Link>

            {/* SERVICES MEGA MENU */}
            <div className="relative group static">
              <button className="flex items-center gap-1 hover:text-white py-4">
                Products
                <span className="text-xs transition-transform group-hover:rotate-180">
                  <LiaAngleDownSolid />
                </span>
              </button>

              {/* Mega Menu Container */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[900px] bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 overflow-hidden flex text-left lowercase first-letter:uppercase">
                {/* Left Side: Category List */}
                <div className="w-1/3 bg-gray-50 p-6 border-r border-gray-100">
                  <ul className="space-y-1">
                    {serviceCategories.map((cat) => (
                      <li
                        key={cat.name}
                        onMouseEnter={() => setActiveCategory(cat)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
                          activeCategory.name === cat.name
                            ? "text-[#b22a2a] font-bold scale-[1.02]"
                            : "text-gray-600 hover:text-[#b22a2a]"
                        }`}
                      >
                        <span className="text-sm tracking-tight capitalize">
                          {cat.name}
                        </span>
                        <LiaAngleDownSolid
                          className={`text-[10px] ${
                            activeCategory.name === cat.name
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side: Items Grid */}
                <div className="w-2/3 p-10 bg-white">
                  <div className="mb-8">
                    <h4 className="text-[#b22a2a] text-[10px] font-black uppercase tracking-[0.3em] mb-1">
                      Explore
                    </h4>
                    <h3 className="text-3xl font-bold text-gray-900 tracking-tighter capitalize">
                      {activeCategory.name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                    {activeCategory.items.map((item) => (
                      <Link
                        key={item}
                        to={`/products/${item
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className="text-gray-500 hover:text-[#b22a2a] transition-colors text-sm font-medium flex items-center gap-2 group/link capitalize"
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-300 group-hover/link:bg-[#b22a2a] c" />
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECTS MEGA MENU */}

            <Link to="/projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <a
              href="/node_modules#blogs"
              className="hover:text-white transition-colors"
            >
              Blogs
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button className={isScrolled ? "py-2 px-5 text-sm" : ""}>
            <Link to="/contact"> Contact</Link>
          </Button>
          <Button isIcon onClick={onOpenDrawer}>
            <PiCirclesFour />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
