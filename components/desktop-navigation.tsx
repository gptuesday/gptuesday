"use client";

import { useEffect, useState } from 'react';

export default function DesktopNavigation({isAbsolute}: {isAbsolute?: boolean}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${isAbsolute ? 'absolute' : 'relative'} top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-purple-900' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-[1100px]">
      <a href="/" ><div className="logo">GPTUESDAY</div></a>
        <div className="flex items-center space-x-6 hidden md:block">
          <a href="/events/" className="text-white hover:text-purple-300 transition-colors">Upcoming Events</a>
          {/* <a href="/#gallery" className="text-white hover:text-purple-300 transition-colors">Gallery</a> */}
          {/* <a href="/#contact" className="text-white hover:text-purple-300 transition-colors">Contact</a> */}
        </div>
      </div>
    </nav>
  );
}