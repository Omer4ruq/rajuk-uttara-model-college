import { useState, useEffect } from 'react';
import LatestNotice from "../../Home/LatestNotice";
import Intro from "./Intro";
import LoginButton from "./LoginButton";
import NavMenu from "./NavMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNotice, setShowNotice] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 100;

      // Update scroll state
      if (currentScrollY > scrollThreshold) {
        setIsScrolled(true);
        // Hide notice when scrolling down
        if (currentScrollY > lastScrollY) {
          setShowNotice(false);
        }
      } else {
        setIsScrolled(false);
        // Show notice when near the top
        setShowNotice(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="relative">
      {/* Intro Section - Smoothly disappears */}
      <div className={`transition-all duration-700 ease-in-out ${
        isScrolled ? 'h-0 overflow-hidden opacity-0 -translate-y-4' : 'h-auto opacity-100 translate-y-0'
      }`}>
        <Intro />
      </div>

      {/* Sticky Navigation Container - Alternative with smooth shadow transition */}
      <div className={`bg-white transition-all duration-700 ease-in-out ${
        isScrolled 
          ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' 
          : 'relative z-50 shadow-md'
      }`}>
        {/* Navigation and Login */}
        <div className="flex justify-between gap-2 px-4 sm:px-6 xl:px-8 bg-white z-50">
          <NavMenu />
          <LoginButton />
        </div>

        {/* Latest Notice with smooth drawer-like slide animation */}
        <div className={`overflow-hidden transition-all duration-1000 ease-in-out ${
          showNotice 
            ? 'max-h-20 opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-100 transform -translate-y-full'
        } z-40`}>
          <LatestNotice />
        </div>
      </div>

      {/* Spacer to prevent content jump when nav becomes fixed */}
      {isScrolled && (
        <div className="h-16"></div>
      )}
    </div>
  );
}