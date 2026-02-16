import React, { useState, useMemo } from "react";
import {
  ChevronDown,
  MessageCircle,
  Menu,
  X,
  Search,
  ArrowRight,
} from "lucide-react";
import { IMAGES } from "../utils/assets";
import { Link, useNavigate } from "react-router-dom";

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
    name: "Curtains & Blinds",
    items: [
      "Blackout Blinds",
      "Sunscreen Blinds",
      "Vertical Blinds",
      "Venetian Blinds",
      "Roman Blinds",
      "Curtain Track & Rail",
      "3D Digital Printed",
      "PVC Strip Curtains",
      "Blackout Curtains",
      "Luxury Curtains",
      "Motorized Systems",
    ],
  },
  {
    name: "Wall Panels",
    items: ["WPC Wall Panel", "MDF Wooden Panels", "UV Panels", "Grass Wall"],
  },
  {
    name: "Doors & Alum.",
    items: [
      "WPC Doors",
      "Wooden Doors",
      "UPVC Bathroom",
      "Steel Doors",
      "Aluminum Doors",
      "Aluminum Windows",
    ],
  },
  {
    name: "Additional Services",
    items: [
      "Wallpaper",
      "Artificial Plants",
      "Steel / Stainless",
      "uPVC / Glass",
      "Ceiling",
      "Kitchen & Wardrobe",
      "Solid Surface",
      "Epoxy Coating",
      "Water Proofing",
      "Floor Covering",
      "Micro Cement",
    ],
  },
];

const Header = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const brandColor = "#63243B";
  const navigate = useNavigate();

  // Flat list for search filtering
  const allItems = useMemo(() => {
    return serviceCategories.flatMap((cat) =>
      cat.items.map((item) => ({ name: item, category: cat.name })),
    );
  }, []);

  const filteredResults = useMemo(() => {
    if (!searchQuery) return [];
    return allItems
      .filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      .slice(0, 8); // Limit results for clean UI
  }, [searchQuery, allItems]);

  const handleClickProducts = (item) => {
    const route = item.replace(" ", "-").toLowerCase();
    navigate(`/products/${route}`);
    console.log("helo", route);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* Logo Section */}
        <div
          className={`flex items-center gap-3 shrink-0 ${isSearchOpen ? "hidden md:flex" : "flex"}`}
        >
          <div className="w-20 md:w-34">
            <Link to={"/"}>
              <img src={IMAGES.logo} alt="Logo" className="w-full h-auto" />
            </Link>
          </div>
        </div>

        {/* Integrated Search Overlay */}
        <div
          className={`absolute inset-0 bg-white z-30 flex flex-col transition-all duration-300 ${isSearchOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
        >
          <div className="flex items-center px-10 h-20 border-b border-gray-100">
            <Search size={22} className="text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full h-full px-6 outline-none text-xl text-gray-800 placeholder:text-gray-300 font-light"
              autoFocus={isSearchOpen}
            />
            <button
              onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery("");
              }}
              className="p-2 hover:bg-gray-100 text-gray-500"
            >
              <X size={28} />
            </button>
          </div>

          {/* Real-time Search Results Panel */}
          {searchQuery && (
            <div className="bg-white absolute left-0 top-full w-full border-b border-gray-200 shadow-2xl max-h-[60vh] overflow-y-auto">
              <div className="max-w-4xl mx-auto py-8 px-10">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">
                  Results
                </p>
                {filteredResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredResults.map((result, i) => (
                      <a
                        key={i}
                        href="#"
                        className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 group transition-colors"
                      >
                        <div>
                          <p className="text-sm font-bold text-gray-900">
                            {result.name}
                          </p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-tighter">
                            {result.category}
                          </p>
                        </div>
                        <ArrowRight
                          size={16}
                          className="text-gray-300 group-hover:text-black transition-all group-hover:translate-x-1"
                        />
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 py-10 text-center italic">
                    No products found matching "{searchQuery}"
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <nav className="hidden lg:flex items-center gap-10 h-full">
          <a
            href="#"
            className="text-[13px] font-bold tracking-widest hover:opacity-70 transition-opacity"
            style={{ color: brandColor }}
          >
            HOME
          </a>

          <div
            className="h-full flex items-center"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-[13px] font-bold tracking-widest text-gray-500 hover:text-black transition-colors h-full">
              SERVICES{" "}
              <ChevronDown
                size={14}
                className={isMegaMenuOpen ? "rotate-180" : ""}
              />
            </button>

            {/* Mega Menu */}
            {isMegaMenuOpen && (
              <div className="absolute left-0 top-full w-full bg-white shadow-2xl border-t border-gray-100 p-12 grid grid-cols-5 gap-8 animate-in fade-in slide-in-from-top-1">
                {serviceCategories.map((cat, idx) => (
                  <div key={idx}>
                    <h3
                      className="text-[11px] font-black uppercase tracking-[0.2em] mb-6 pb-2 border-b border-gray-100"
                      style={{ color: brandColor }}
                    >
                      {cat.name}
                    </h3>
                    <ul className="space-y-3">
                      {cat.items.map((item, i) => (
                        <li
                          key={i}
                          onClick={() => handleClickProducts(item)}
                          className="cursor-pointer"
                        >
                          <span className="text-[13px] text-gray-500 hover:text-black hover:pl-2 transition-all block border-l border-transparent hover:border-[#63243B]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <a
            href="#"
            className="text-[13px] font-bold tracking-widest text-gray-500 hover:text-black"
          >
            ABOUT US
          </a>
          <a
            href="#"
            className="text-[13px] font-bold tracking-widest text-gray-500 hover:text-black"
          >
            BLOG
          </a>
          <a
            href="#"
            className="text-[13px] font-bold tracking-widest text-gray-500 hover:text-black"
          >
            CONTACT
          </a>
        </nav>

        {/* Right Action Tray */}
        <div className="flex items-center">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="p-5 hover:bg-gray-50 transition-colors text-gray-500 border-x border-gray-100"
          >
            <Search size={20} />
          </button>
          <a
            href="#"
            className="flex items-center gap-3  text-black px-8 h-20 text-sm tracking-widest"
          >
            <MessageCircle size={20} />
            <span className="hidden xl:inline">Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
