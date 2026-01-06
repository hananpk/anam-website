import React, { useState, useEffect } from "react"; // Added hooks
import { LiaAngleDownSolid } from "react-icons/lia";
import { IMAGES } from "../utils/assets";
import Button from "./ui/Button";
import { PiCirclesFour } from "react-icons/pi";

const Header = ({ onOpenDrawer }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when user scrolls more than 200px
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
        isScrolled
          ? "bg-black/80 backdrop-blur-md py-2 shadow-2xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="left-container flex items-center justify-center">
          <a href="#">
            <img
              src={IMAGES.logo}
              alt="Logo"
              className={`transition-all duration-500 ${
                isScrolled ? "scale-90" : "scale-100"
              }`}
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200 md:ml-8">
            <a href="#" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-white transition-colors">
              About
            </a>

            {/* SERVICES MEGA MENU */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-white py-4">
                Services{" "}
                <span className="text-xs transition-transform group-hover:rotate-180">
                  <LiaAngleDownSolid />
                </span>
              </button>

              {/* Added a dynamic 'top' to ensure menu stays attached when header shrinks */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[700px] bg-[#111] rounded-xl shadow-xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="grid grid-cols-3 gap-6 text-sm">
                  {/* ... internal menu content remains same ... */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">
                      Construction
                    </h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="hover:text-white cursor-pointer">
                        Civil Works
                      </li>
                      <li className="hover:text-white cursor-pointer">
                        Interior Fit-out
                      </li>
                      <li className="hover:text-white cursor-pointer">
                        MEP Services
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Trading</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="hover:text-white cursor-pointer">
                        Building Materials
                      </li>
                      <li className="hover:text-white cursor-pointer">
                        Electrical Supplies
                      </li>
                      <li className="hover:text-white cursor-pointer">
                        Plumbing Items
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Support</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="hover:text-white cursor-pointer">
                        Maintenance
                      </li>
                      <li className="hover:text-white cursor-pointer">
                        Consulting
                      </li>
                      <li className="hover:text-white cursor-pointer">
                        Project Planning
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECTS MEGA MENU */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-white py-4">
                Projects{" "}
                <span className="text-xs transition-transform group-hover:rotate-180">
                  <LiaAngleDownSolid />
                </span>
              </button>

              <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[600px] bg-[#111] rounded-xl shadow-xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="grid grid-cols-2 gap-6 text-sm">
                  {/* ... internal menu content remains same ... */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Completed</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="hover:text-white cursor-pointer">
                        Commercial Buildings
                      </li>
                      <li className="hover:text-white cursor-pointer">
                        Warehouses
                      </li>
                      <li className="hover:text-white cursor-pointer">
                        Retail Spaces
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Ongoing</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="hover:text-white cursor-pointer">
                        Residential Towers
                      </li>
                      <li className="hover:text-white cursor-pointer">
                        Industrial Units
                      </li>
                      <li className="hover:text-white cursor-pointer">
                        Infrastructure
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="hover:text-white transition-colors">
              Blogs
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button className={isScrolled ? "py-2 px-5 text-sm" : ""}>
            Contact
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
