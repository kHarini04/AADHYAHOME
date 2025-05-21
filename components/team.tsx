'use client';

import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Full name',
    title: 'Job title',
    imageUrl: '/images/team-placeholder.jpg',
    linkedin: '/',
    facebook: '/',
    twitter: '/',
  },
  {
    name: 'Full name',
    title: 'Job title',
    imageUrl: '/images/team-placeholder.jpg',
    linkedin: '/',
    facebook: '/',
    twitter: '/',
  },
  {
    name: 'Full name',
    title: 'Job title',
    imageUrl: '/images/team-placeholder.jpg',
    linkedin: '/',
    facebook: '/',
    twitter: '/',
  },
  {
    name: 'Full name',
    title: 'Job title',
    imageUrl: '/images/team-placeholder.jpg',
    linkedin: '/',
    facebook: '/',
    twitter: '/',
  },
  {
    name: 'Full name',
    title: 'Job title',
    imageUrl: '/images/team-placeholder.jpg',
    linkedin: '/',
    facebook: '/',
    twitter: '/',
  },
  {
    name: 'Full name',
    title: 'Job title',
    imageUrl: '/images/team-placeholder.jpg',
    linkedin: '/',
    facebook: '/',
    twitter: '/',
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-Montserrat text-black font-bold mb-2">
          Our Professional Team
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-10 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 flex flex-col items-center text-center"
            >
              <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg mb-4 relative overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-base sm:text-lg text-black font-semibold">{member.name}</h3>
              <p className="text-sm text-black font-light">{member.title}</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
              <div className="flex gap-4 mt-4">
                <Link href={member.linkedin} className="hover:opacity-80">
                  <Image src="/link1.svg" alt="LinkedIn" width={20} height={20} />
                </Link>
                <Link href={member.facebook} className="hover:opacity-80">
                  <Image src="/facebook (2).svg" alt="Facebook" width={20} height={20} />
                </Link>
                <Link href={member.twitter} className="hover:opacity-80">
                  <Image src="/round.svg" alt="Twitter" width={20} height={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
