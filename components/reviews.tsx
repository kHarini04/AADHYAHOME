'use client';
import Image from 'next/image';
import Link from 'next/link';

const reviews = [
  {
    quote: '“A real sense of community, nurtured”',
    content: 'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...',
    name: 'Olga',
    location: 'Weave Studios – Kai Tak',
    source: 'Google',
    image: '/images/Rectangle 37.jpg',
  },
  {
    quote: '“The facilities are superb. Clean, slick, bright.”',
    content: 'A real sense of community, nurtured! Really appreciate the help and support from the staff...',
    name: 'Thomas',
    location: 'Weave Studios – Olympic',
    source: 'Google',
    image: '/images/Rectangle 36.jpg',
  },
  {
    quote: '“A real sense of community, nurtured”',
    content: 'Really appreciate the help and support from the staff. Shoutout to Katie for making it smooth...',
    name: 'Eliot',
    location: 'Weave Studios – Kai Tak',
    source: 'Google',
    image: '/images/Rectangle 37 (2).jpg',
  },
];

export default function ReviewsAndCTA() {
  return (
    <>
      {/* REVIEWS SECTION */}
      <section className="py-12 sm:py-16 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">Reviews</h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              What people say about Colbee facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-md flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-black mb-2">{review.quote}</h3>
                  <p className="text-sm text-gray-600 mb-4">{review.content}</p>

                  <div className="flex items-center space-x-1 mb-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.212 3.726h3.905c.969 0 1.371 1.24.588 1.81l-3.158 2.295 1.212 3.726c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.158 2.295c-.784.57-1.838-.197-1.539-1.118l1.212-3.726-3.158-2.295c-.784-.57-.38-1.81.588-1.81h3.905l1.212-3.726z" />
                        </svg>
                      ))}
                  </div>

                  <div className="text-sm text-gray-500">
                    <strong>{review.name}</strong> <br />
                    {review.location}
                  </div>

                  <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <Image src="/google.svg" width={16} height={16} alt="Google" />
                    <span className="text-xs font-bold">{review.source}</span>
                  </div>
                </div>

                {review.image && (
                  <div className="mt-4 rounded-lg overflow-hidden">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}

                <div className="text-right mt-3">
                  <Link href="/" className="text-sm font-semibold text-black hover:underline">
                    View more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden bg-[url('/images/Card.jpg')] bg-cover bg-center relative text-white">
            <div className="bg-black/60 p-6 sm:p-10 md:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                Start Your Adventure Today
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-thin mb-6">
                Don’t wait! Begin planning your unforgettable journey with us right now.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="w-full sm:w-auto bg-[#FF7F00] hover:bg-orange-400 text-white px-6 py-3 rounded-xl font-medium transition">
                  Get Started
                </button>
                <button className="w-full sm:w-auto bg-white text-[#FF7F00] hover:bg-orange-100 px-6 py-3 rounded-xl font-medium transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
