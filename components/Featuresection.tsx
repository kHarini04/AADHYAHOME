'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      icon: "/luggage (1).svg",
      title: "Browse Our Extensive Travel Packages",
      description: "Choose from a variety of exciting options tailored to your preferences.",
    },
    {
      icon: "/rate_review.svg",
      title: "Customize Your Trip to Fit Your Needs",
      description: "Our team is here to help you create the perfect itinerary.",
    },
    {
      icon: "/Check Lock.svg",
      title: "Secure Your Booking with Confidence",
      description: "Finalize your plans and get ready for an unforgettable experience.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-1xl mx-auto text-center py-40 mb-10">
        <p className="text-gray-600 text-[20px] font-medium md:text-base">
          Discover a seamless way to plan your next adventure. From browsing our diverse<br />
          packages to securing your booking, we make travel easy and enjoyable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[-165px] px-4 sm:px-8 md:px-12 lg:mx-[300px]">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-300 rounded-2xl h-100 w-full px-6 py-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
          >
            <Image src={feature.icon} alt="Icon" width={90} height={10} className=" mb-4" />
            <h3 className="text-2xl font-bold text-black mb-2">
              {feature.title}
            </h3>
            <p className="text-s py-3 text-gray-600 leading-snug">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}



