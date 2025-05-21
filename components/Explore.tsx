'use client';
import Image from 'next/image';

const insights = [
  {
    category: 'Travel',
    title: 'Top 10 Destinations for 2023',
    description: 'Explore the most sought-after travel spots this year.',
    author: 'Jane Doe',
    date: '15 Feb 2023',
    readTime: '7 min read',
    image: '/images/top.png',
  },
  {
    category: 'Adventure',
    title: 'How to Pack Light for Travel',
    description: 'Learn the art of packing efficiently for any trip.',
    author: 'John Smith',
    date: '20 Jan 2023',
    readTime: '4 min read',
    image: '/images/beauty.jpg',
  },
  {
    category: 'Culture',
    title: 'Embracing Local Cultures While Traveling',
    description: 'Tips for engaging with local traditions and customs.',
    author: 'Emily Brown',
    date: '05 Mar 2023',
    readTime: '6 min read',
    image: '/images/western.jpg',
  },
];

export default function Explore() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black">Explore Our Latest Insights</h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Discover tips and stories for your next adventure.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {insights.map((insight, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden border">
              <Image
                src={insight.image}
                alt={insight.title}
                width={400}
                height={300}
                className="w-full min-h-[250px] sm:min-h-[300px] object-cover"
              />
              <div className="p-4">
                <p className="text-xs uppercase text-black font-medium">{insight.category}</p>
                <h3 className="text-lg font-semibold text-black mt-1">{insight.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                <div className="flex flex-col sm:flex-row sm:justify-between mt-4 text-sm text-gray-400">
                  <span>{insight.author}</span>
                  <span>{insight.date} • {insight.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right mt-6">
          <button className="bg-[#FF7F00] hover:bg-orange-300 text-white px-6 py-3 rounded-xl font-medium">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}
