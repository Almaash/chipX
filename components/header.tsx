"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/internship", label: "Internship" },
    { href: "/contact", label: "Contact us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsAtTop(true);
        setShowHeader(true);
      } else {
        setIsAtTop(false);
        setShowHeader(currentScrollY < lastScrollY); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Determine text color based on background and menu state
  const textColor = isAtTop
    ? isMenuOpen
      ? "text-black" // transparent + menu open
      : "text-white" // transparent + menu closed
    : "text-black"; // white background

  const subTextColor = isAtTop
    ? isMenuOpen
      ? "text-gray-600"
      : "text-gray-300"
    : "text-gray-600";

  const borderColor = isAtTop ? "border-white/30" : "border-black/20";

  return (
    <header
      className={`sticky top-0 z-50 transform transition-all duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
        ${isAtTop ? "bg-transparent shadow-none" : "bg-white shadow-md"}
      `}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded overflow-hidden bg-transparent`}
            >
              <Image
                src="/images/loogo_2.png"
                alt="ChipX Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-bold text-lg sm:text-xl lg:text-2xl ${textColor}`}>
                ChipX
              </span>
              <span className={`text-[10px] sm:text-xs md:text-sm tracking-wide ${subTextColor}`}>
                Semiconductor School
              </span>
            </div>
          </Link>

          {/* Navigation + Mobile Menu */}
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-10">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-10 font-medium">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`hover:text-[#38BDF8] transition-colors ${pathname === href ? "italic text-[#38BDF8]" : textColor
                    }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Mobile Toggle */}
            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${isAtTop ? "text-white" : "text-black"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isAtTop ? "text-white" : "text-black"}`} />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t ${borderColor}`}>
            <nav className="flex flex-col py-4 pb-26 space-y-4 text-base sm:text-lg">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`hover:text-[#38BDF8] transition-colors ${pathname === href ? "italic text-[#38BDF8]" : textColor
                    }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
