import { useState, useEffect, useRef } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import menuData from "../../../data/menuData";
import { HamburgerMenu, LargeMenu } from "./MenuItem";

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowNav(false);
      }
    };

    if (showNav) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [showNav]);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="md:px-6 lg:px-8 xl:px-12 px-4 relative">
      {/* Mobile hamburger button */}
      <button
        className="py-3 w-full flex justify-start lg:hidden focus:outline-none focus:ring-2 focus:ring-menuColor focus:ring-opacity-50 rounded-md"
        onClick={() => setShowNav(!showNav)}
        aria-label="Toggle navigation menu"
      >
        {showNav ? (
          <IoClose className="text-3xl text-menuColor transition-transform duration-200 hover:scale-110" />
        ) : (
          <HiOutlineMenuAlt3 className="text-3xl text-menuColor transition-transform duration-200 hover:scale-110" />
        )}
      </button>

      {/* Desktop menu */}
      <ul className="text-primary text-sm xl:text-base font-semibold gap-1 hidden lg:flex items-center">
        {menuData.map((menuItem, index) => (
          <LargeMenu key={index} menuItem={menuItem} />
        ))}
      </ul>

      {/* Mobile menu overlay */}
      {showNav && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300">
          <div className="absolute inset-0" onClick={() => setShowNav(false)} />
        </div>
      )}

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white  z-50 transform transition-transform duration-300 ease-in-out lg:hidden shadow-2xl ${
          showNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-semibold text-menuColor">Menu</h3>
          <button
            onClick={() => setShowNav(false)}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-menuColor focus:ring-opacity-50"
            aria-label="Close menu"
          >
            <IoClose className="text-xl text-menuColor" />
          </button>
        </div>

        {/* Mobile menu content */}
        <div className="overflow-y-auto h-full pb-20">
          <ul className="text-primary text-base font-semibold flex flex-col p-4 space-y-1">
            {menuData.map((menuItem, index) => (
              <HamburgerMenu
                key={index}
                menuItem={menuItem}
                setShowNav={setShowNav}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}