import Image from "next/image";

const destinations = [
  { name: "Mysore", image: "/Rectangle 3.svg" },
  { name: "Goa", image: "/Rectangle 4.svg" },
  { name: "Coorg", image: "/Rectangle 3 (1).svg" },
  { name: "Ooty", image: "/Rectangle 4 (1).svg" },
  { name: "Kodaikanal", image: "/Rectangle 3 (2).svg" },
  { name: "Madurai", image: "/Frame 197.svg" },
  { name: "Rameswaram", image: "/Frame 197 (1).svg" },
  { name: "Kanyakumari", image: "/Frame 198.svg" },
  { name: "Munnar", image: "/Frame 197 (2).svg" },
];

export default function PopularDestinations() {
  return (
    <section className="py-[55px] bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-4">
          Experience Travel Like Never Before
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Our custom itineraries are designed to meet your unique travel desires.
          Enjoy a journey that reflects your interests and preferences, ensuring an unforgettable experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between rounded-xl shadow-md p-4 bg-white text-black text-left transition-all duration-300 hover:bg-blue-600 hover:text-white transform hover:scale-105 h-auto"
            >
              <Image
                src={destination.image}
                alt={destination.name}
                width={100}
                height={20}
                className=" object-cover rounded-md mb-4 sm:mb-0 sm:mr-6 shrink-0"
              />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-normal mb-2">{destination.name}</h3>
                <p className="text-sm sm:text-[13px]">Mode of travel · Hotels · Resorts</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

