import Explore from '@/components/Explore'
import FeaturesSection from '@/components/Featuresection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import Planform from '@/components/Planform'
import PopularDestinations from '@/components/Populardestination'
import ReviewsAndCTA from '@/components/reviews'
import Whyus from '@/components/Whyus'


export default function Home() {
  return (
    <main >
      <Navbar />
      <HeroSection/>
      <Planform/>
      <FeaturesSection/>
      <PopularDestinations/>
      <Whyus/>
      <Explore/>
      <ReviewsAndCTA/>
      <Footer/>
    </main>
  )
}
