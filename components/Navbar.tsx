'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-20 left-0 w-full z-50 px-4 sm:px-6 md:px-[150px] py-4 flex items-center justify-between bg-transparent text-white">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/image 3.svg"
          alt="Logo"
          width={120}
          height={40}
          className="w-25 h-8 sm:h-10 md:h-12"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-sm font-light">
        <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
        <li><Link href="/packages" className="hover:text-gray-300">Our Packages</Link></li>
        <li><Link href="/destinations" className="hover:text-gray-300">Destinations</Link></li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="px-5 py-2 border border-white text-white rounded-xl hover:bg-white hover:text-black transition text-sm">
          Join
        </button>
        <button className="px-5 py-2 bg-[#FF7F00] text-white rounded-xl hover:bg-orange-300 hover:text-black transition text-sm">
          Explore
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} className='mx-4' /> : <Menu className='mx-4' size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-21 w-[200px] bg-[#002FA7] text-white px-6 py-6 space-y-4 shadow-lg md:hidden transition-all z-40">
          <ul className="space-y-3 text-base font-light">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link href="/packages" onClick={() => setIsOpen(false)}>Our Packages</Link></li>
            <li><Link href="/destinations" onClick={() => setIsOpen(false)}>Destinations</Link></li>
          </ul>
          <div className="flex flex-col space-y-3 pt-4">
            <button className="w-full px-4 py-2 border border-white rounded-xl hover:bg-white hover:text-black transition">
              Join
            </button>
            <button className="w-full px-4 py-2 bg-[#FF7F00] rounded-xl hover:bg-orange-300 hover:text-black transition">
              Explore
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
