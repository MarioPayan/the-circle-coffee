export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import {heroData, featuresData} from '@/lib/data'

export default function Home() {
  
  return (
    <>
      <Hero data={heroData}/>
      <Features data={featuresData}/>
      <Zigzag />
      <Testimonials />
      {/* <Newsletter /> */}
    </>
  )
}
