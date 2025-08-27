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

  return (
    <header
      className={`sticky top-0 z-50 transform transition-all duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${isAtTop ? "bg-transparent text-white shadow-none" : "bg-white text-black shadow-md"}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 mx-6 md:mx-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div
              className={`w-9 h-9 flex items-center justify-center rounded overflow-hidden ${
                isAtTop ? "bg-transparent" : "bg-white"
              }`}
            >
              <Image
                src="/images/loogo_2.png"
                alt="ChipX Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl">ChipX</span>
              <span
                className={`text-[11px] tracking-wide ${
                  isAtTop ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Semiconductor School
              </span>
            </div>
          </Link>

          {/* Navigation + Mobile Menu */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8 font-medium">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`hover:text-[#38BDF8] transition-colors ${
                    pathname === href
                      ? "italic text-[#38BDF8]"
                      : isAtTop
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-black/20">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`hover:text-[#38BDF8] ${
                    pathname === href
                      ? "italic text-[#38BDF8]"
                      : isAtTop
                      ? "text-white"
                      : "text-black"
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
