'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#002FA7] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <Image src="/image 3.svg" width={170} height={40} alt="Aadhya Logo" />
          </div>

          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-2 text-base sm:text-lg">Home</h4>
            <ul className="space-y-1 leading-7 font-thin text-sm text-gray-200">
              <li>About Us</li>
              <li>Our Packages</li>
              <li>Travel Tips</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-2 text-base sm:text-lg">Travel</h4>
            <ul className="space-y-1 leading-7 text-sm text-gray-200">
              <li>Blog Posts</li>
              <li>Travel Guides</li>
              <li>Visa Info</li>
              <li>Packing Tips</li>
              <li>Cultural Insights</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-2 text-base sm:text-lg">Contact Us</h4>
            <ul className="space-y-1 leading-7 text-sm text-gray-200">
              <li>+1 95467230</li>
              <li>Address line</li>
              <li>Email</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300 gap-4">
          <p className="text-sm text-center md:text-left">
            © 2025 Aadhyaglobaltourism. All rights reserved.
          </p>
          <div className="flex flex-wrap  justify-center md:justify-end items-center space-x-4">
            <Link href="/" className="hover:text-white">Privacy Policy</Link>
            <Link href="/" className="hover:text-white">Terms of Service</Link>
            <Link href="/" className="hover:text-white">Cookies Settings</Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center md:justify-end flex-wrap gap-4 text-white">
          <Link href="/" className="hover:opacity-80">
            <Image src="/facewhite.svg" alt="Facebook" width={20} height={20} />
          </Link>
          <Link href="/" className="hover:opacity-80">
            <Image src="/Vector (2).svg" alt="Instagram" width={20} height={20} />
          </Link>
          <Link href="/" className="hover:opacity-80">
            <Image src="/Vector (3).svg" alt="X" width={20} height={20} />
          </Link>
          <Link href="/" className="hover:opacity-80">
            <Image src="/Vector (4).svg" alt="LinkedIn" width={20} height={20} />
          </Link>
          <Link href="/" className="hover:opacity-80">
            <Image src="/Vector (5).svg" alt="YouTube" width={20} height={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}


