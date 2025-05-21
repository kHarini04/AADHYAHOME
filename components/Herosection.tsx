import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[150vh] mx-4 sm:mx-10 md:mx-14 my-14 mt-14 rounded-2xl">
      <Image
        src="/edited.gif"
        alt="Hero"
        fill
        className="object-cover brightness-[55%] rounded-3xl"
        priority
      />

      <div className="absolute inset-0 bg-transparent flex flex-col items-center justify-center px-4 text-white text-center 
        mx-4 sm:mx-20 md:mx-[150px] lg:mx-[200px] xl:mx-[336px] mt-[50px]">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug tracking-tight">
          Explore the World with <br /> Unforgettable Journeys
        </h1>

        <p className="mt-4 text-sm sm:text-base max-w-md sm:max-w-lg md:max-w-xl">
          Discover breathtaking destinations and tailor-made travel experiences designed just for you. Let us turn your travel dreams into reality with our guidance and support.
        </p>

        <button className="mt-6 px-4 sm:px-6 py-2 border border-white hover:bg-transparent hover:text-gray-300 cursor-pointer text-white rounded-xl bg-gray-500 text-sm sm:text-base">
          Book Now
        </button>
      </div>
 <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-10">
  <Link href="/chat">
    <div className="w-12 sm:w-16 md:w-[70px] aspect-square">
      <Image
        src="/Chat_fill.svg"
        alt="Chat Icon"
        fill
        className="object-contain hover:scale-105 transition-transform drop-shadow-md"
      />
    </div>
  </Link>
</div>


</section>
  );
}
