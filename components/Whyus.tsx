'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const cards = [
  {
    image: '/images/Rectangle 40.jpg',
    title: 'Benefit of personalized travel plans',
    description:
      'Our custom itineraries are designed to meet your unique travel desires. Enjoy a journey that reflects your interests and preferences, ensuring an unforgettable experience.',
    button: 'Book Now',
  },
  {
    image: '/images/Rectangle 40 (1).jpg',
    title: '24/7 travel support',
    description:
      'Travel with confidence knowing our dedicated support team is available around the clock. Whether you have questions or need assistance, we’re just a call or message away.',
    button: 'More Info',
  },
  {
    image: '/images/Rectangle 40 (2).jpg',
    title: 'Exclusive travel deals',
    description:
      'Get access to the best travel deals, discounts, and offers tailored to your destinations and preferences.',
    button: 'Explore Deals',
  },
  {
    image: '/images/Rectangle 40 (3).jpg',
    title: 'VIP Travel Assistance',
    description:
      'Experience top-tier services with our VIP travel support, including personalized help and luxury arrangements.',
    button: 'Join VIP',
  },
];

export default function WhyUs() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(2);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 768) {
        setCardsPerSlide(1);
      } else {
        setCardsPerSlide(2);
      }
    };

    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);
    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(cards.length / cardsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % totalSlides;
      if (carouselRef.current) {
        const scrollTo = carouselRef.current.clientWidth * nextIndex;
        carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
      setCurrentIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, totalSlides]);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-bold">Why Choose Us?</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-2 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et al automation possunt mutare mundum.
        </p>
      </div>

      <div className="overflow-hidden max-w-6xl mx-auto px-4">
        <div
          ref={carouselRef}
          className="flex transition-all duration-700 ease-in-out snap-x snap-mandatory overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const startIndex = slideIndex * cardsPerSlide;
            return (
              <div
                key={slideIndex}
                className="flex-shrink-0 flex w-full gap-6 snap-start"
              >
                {cards.slice(startIndex, startIndex + cardsPerSlide).map((card, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-1/2 h-[500px] relative rounded-xl overflow-hidden shadow-lg"
                  >
                   <Image
                      src={card.image}
                      alt={card.title}
                      layout="fill"
                       objectFit="cover"
                      />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold">{card.title}</h3>
                      <p className="text-sm mt-1">{card.description}</p>
                      <button className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-400 text-white mt-4 mx-auto px-6 py-3 rounded-xl transition">
                        <Image src="/near_me.svg" alt="Book Icon" width={20} height={20} />
                        <span className="font-medium text-sm">{card.button}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <span
              key={idx}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'bg-[#FF7F00]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
