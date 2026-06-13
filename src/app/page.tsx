import HeroSection from '@/components/sections/HeroSection'
import CampusStrip from '@/components/sections/CampusStrip'
import MissionVision from '@/components/sections/MissionVision'
import Valeurs from '@/components/sections/Valeurs'
import DirectionQuote from '@/components/sections/DirectionQuote'
import Testimonials from '@/components/sections/Testimonials'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CampusStrip />
      <MissionVision />
      {/* <Valeurs /> */}
      <DirectionQuote />
      <Testimonials />
    </>
  )
}
