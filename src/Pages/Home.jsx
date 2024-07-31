import React from 'react'
import Hero from '../Components/Home/Hero'
import Services from '../Components/Home/Services'
import MediaMentions from '../Components/Home/MediaMentions'
import Blog from '../Components/Home/Blog'
import Accordion from '../Components/Home/Accordion'
import Ebook from '../Components/Home/Ebook'
import PartnersVideoCard from '../Components/Home/PartnersVideoCard'
import Achievment from '../Components/Home/Achievment'
import CareerSuitabilitySection from '../Components/Home/CareerSuitabilitySection '



export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <CareerSuitabilitySection/>
      <Ebook/>
      <Achievment/>
      <PartnersVideoCard/>
      <MediaMentions/>
      <Blog/>
      <Accordion/>
    </div>
  )
}
