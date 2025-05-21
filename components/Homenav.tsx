'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-10 left-0 w-full z-50 px-4 sm:px-6 md:px-[150px] py-4 flex items-center justify-between bg-transparent text-white">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/image 1.svg"
          alt="Logo"
          width={120}
          height={40}
          className="w-25 h-8 sm:h-10 md:h-12"
        />
      </div>

      {/* Hamburger button - visible on mobile only */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-sm font-light">
        <li>
          <Link href="/" className="text-black font-Montserrat hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-black font-Montserrat hover:text-gray-300">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/packages" className="text-black font-Montserrat hover:text-gray-300">
            Our Packages
          </Link>
        </li>
        <li>
          <Link href="/destinations" className="text-black font-Montserrat hover:text-gray-300">
            Destinations
          </Link>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="px-5 py-2 border border-black cursor-pointer text-black rounded-xl hover:bg-white hover:text-black transition text-sm">
          Join
        </button>
        <button className="px-5 py-2 bg-[#FF7F00] text-white rounded-xl hover:bg-orange-300 hover:text-black transition text-sm">
          Explore
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-xl md:hidden text-black font-Montserrat">
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <Link href="/" className="block hover:text-orange-600" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block hover:text-orange-600" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/packages" className="block hover:text-orange-600" onClick={() => setMenuOpen(false)}>
                Our Packages
              </Link>
            </li>
            <li>
              <Link href="/destinations" className="block hover:text-orange-600" onClick={() => setMenuOpen(false)}>
                Destinations
              </Link>
            </li>
            <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
              <button className="w-full px-5 py-2 border border-black text-black rounded-xl hover:bg-gray-100 transition text-sm">
                Join
              </button>
              <button className="w-full px-5 py-2 bg-[#FF7F00] text-white rounded-xl hover:bg-orange-300 transition text-sm">
                Explore
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
