import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0b1f3a] via-[#122d52] to-[#1d4073] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-25">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
                <Link href="/" className="flex items-center space-x-2">
            <div
              className={`w-9 h-9 flex items-center justify-center rounded overflow-hidden bg-transparent `}
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
                className={`text-[11px] tracking-wide text-gray-300 `}
              >
                Semiconductor School
              </span>
            </div>
          </Link>
            <p className=" max-w-md pt-5">
              India's premier startup-focused semicunductor school, empowering
              the next generation of entrepreneurial leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className=" transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className=" transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className=" transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/internship"
                  className=" transition-colors"
                >
                  Internship
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: info@chipx.edu</li>
              <li>Phone: +91 98765 43210</li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-400 mt-8 pt-8 text-center ">
          <p>&copy; 2025 ChipX semicunductor school. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
