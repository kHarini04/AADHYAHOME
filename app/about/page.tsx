// app/about/page.tsx
import Footer from '@/components/Footer';
import HomeWhyUs from '@/components/Homeabt';
import TeamSection from '@/components/team';
import HomeNavbar from '@/components/Homenav';
export default function AboutPage() {
  return (
    <>
   <HomeNavbar/>
  <main className="pt-[100px] px-4 md:px-[150px] pb-16">
  <section className="bg-white py-8 sm:py-12">
  <div className="max-w-5xl mx-auto px-4 sm:px-6">
    <div className="rounded-2xl overflow-hidden bg-[url('/images/Rectangle42.jpg')] bg-center bg-cover relative text-white">
      <div className="p-4 sm:p-8 md:p-12 bg-black/25">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-center sm:text-left">
          About Us
        </h2>
      </div>
    </div>
  </div>
</section>


  {/* Description */}
  <p className="mt-6 text-center font-base font-montserrat text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-montserrat leading-relaxed px-2 sm:px-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sapien nec nulla volutpat fermentum. Fusce vitae turpis ac odio tristique vulputate. Donec aliquet, ipsum non tincidunt faucibus, nulla lorem sagittis elit, et tincidunt nulla nunc ac neque.
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer congue, justo sed luctus varius, tellus nunc gravida erat, ut convallis justo ipsum at nulla. Sed dapibus malesuada fermentum. Nunc imperdiet felis vel sapien tincidunt, at suscipit velit pulvinar.
  </p>

  {/* Stats Section */}
  <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 text-center font-semibold">
    <div>
      <p className="text-black  text-3xl font-bold mb-2">Tour</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-[#002FA7]">220+</h1>
    </div>
    <div>
      <p className="text-black  text-3xl font-bold mb-2">Destinations</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-[#002FA7]">880+</h1>
    </div>
    <div>
      <p className="text-black  text-3xl font-bold mb-2">Happy Travellers</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-[#002FA7]">122k+</h1>
    </div>
  </div>

</main>
<section className="relative bg-white py-20 md:py-40 overflow-hidden">

  {/* Centered Dashed Circle */}
  <div className="
    absolute left-1/2 top-1/2 
    w-[280px] h-[210px] 
    md:w-[400px] md:h-[300px] 
    -translate-x-1/2 -translate-y-1/2 
    rounded-full border-2 border-dashed border-black 
    z-0
    "
  ></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-12 z-10">

    {/* Our Vision */}
    <div className="w-full md:w-1/2 -mt-6 md:-mt-10 relative rounded-3xl overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-[url('/images/Frame74.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-[#FF7F00]/60"></div>
      <div className="relative text-white p-6 md:p-10">
        <h2 className="text-2xl md:text-4xl font-bold font-Montserrat mb-4">Our Vision</h2>
        <p className="font-Montserrat leading-relaxed text-xs sm:text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing.
          Dis ipsum vitae ultrices vulputate sem quis dui eu. Amet tincidunt est elementum fermentum tellus velit. Et dolor risus tempor dui velit. 
          Eget aenean placerat ac feugiat amet ac risus mus. In phasellus dignissim sed diam praesent risus.
          <br/><br/>
          Turpis turpis volutpat ipsum risus. Dignissim proin sapien odio fringilla elit cursus pharetra. Sit mauris eget facilisi sollicitudin. 
          Ac vestibulum sed aliquet mauris nunc nam aliquam duis pretium. Egestas in volutpat elementum lobortis. 
          Massa suspendisse pharetra augue turpis faucibus dignissim. Nulla turpis netus arcu bibendum eget. Imperdiet nulla netus sollicitudin nullam.
        </p>
      </div>
    </div>

    {/* Our Mission */}
    <div className="w-full md:w-1/2 mt-12 md:mt-16 relative rounded-3xl overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-[url('/images/Frame74.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-[#002FA7]/70"></div>
      <div className="relative text-white p-6 md:p-10">
        <h2 className="text-2xl md:text-4xl font-bold font-Montserrat mb-4">Our Mission</h2>
        <p className="font-Montserrat leading-relaxed text-xs sm:text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec interdum habitant. Porttitor augue enim turpis maecenas et adipiscing.
          Dis ipsum vitae ultrices vulputate sem quis dui eu. Amet tincidunt est elementum fermentum tellus velit. Et dolor risus tempor dui velit. 
          Eget aenean placerat ac feugiat amet ac risus mus. In phasellus dignissim sed diam praesent risus.
          <br/><br/>
          Turpis turpis volutpat ipsum risus. Dignissim proin sapien odio fringilla elit cursus pharetra. Sit mauris eget facilisi sollicitudin. 
          Ac vestibulum sed aliquet mauris nunc nam aliquam duis pretium. Egestas in volutpat elementum lobortis. 
          Massa suspendisse pharetra augue turpis faucibus dignissim. Nulla turpis netus arcu bibendum eget. Imperdiet nulla netus sollicitudin nullam.
        </p>
      </div>
    </div>

  </div>
</section>


                <TeamSection/>
                <HomeWhyUs/>
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
      <Footer/>
</>

  );
}
