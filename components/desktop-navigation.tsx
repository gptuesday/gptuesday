"use client";

import { useEffect, useState } from 'react';

export default function DesktopNavigation() {
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
    <div
      data-w-id="13ca169a-2005-d887-317c-bf8614349314"
      data-animation="default"
      data-collapse="medium"
      data-duration={400}
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className={`nav w-nav ${isScrolled ? 'bg-blue-500' : 'bg-slate-200'}  z-[40]`}
    >
      <div data-w-id="f64720b5-3a4c-8c7e-e14f-0cf0c363ae73" className="nav-div ">
        <a href="/" aria-current="page" className="brand w-nav-brand w--current">
          <div className="logo">GPTUESDAY</div>
        </a>
        <nav role="navigation" className="text-white flex gap-x-10">
          <a href="#join" className="hidden md:block">
            Join
          </a>
          <a href="#pricing" className="hidden md:block">
            Pricing
          </a>
          <a href="#members" className="hidden md:block">
            Founding Members
          </a>
          <a href="#gallery" className="hidden md:block">
            Gallery
          </a>
          <a href="#contact" className="hidden md:block">
            Contact
          </a>
        </nav>
        <div className="hamburger-menu w-nav-button">
          <div className="w-icon-nav-menu" />
        </div>
      </div>
      <div data-w-id="52650803-77c3-e08e-6555-adfe87f58819" className={`nav-bg ${isScrolled ? 'bg-gradient-to-r from-[#051c8f] to-[#9602af]' : 'bg-transparent'} `} />
    </div>
  );
}