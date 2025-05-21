'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Certified Travel Experts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    image: '/images/see1.png',
  },
  {
    title: 'Custom Itineraries',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/see1.png',
  },
  {
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    image: '/images/see1.png',
  },
  {
    title: '30+ Years of Experience',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    image: '/images/see1.png',
  },
  {
    title: 'Global Network',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    image: '/images/see1.png',
  },
];

export default function HomeWhyUs() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white font-Montserrat">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Why Choose Us?</h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac et porttitor luctus.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Slide */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={features[current].image}
            alt={features[current].title}
            fill
            className="object-cover brightness-[70%] transition-all duration-700"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 text-white">
            <h3 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3">{features[current].title}</h3>
            <p className="text-sm sm:text-base md:text-lg max-w-md">{features[current].description}</p>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {features.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? 'bg-gray-600 scale-110' : 'bg-gray-300'
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
