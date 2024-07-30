import React from 'react'
import Hero from '../Components/Home/Hero'
import Services from '../Components/Home/Services'
import MediaMentions from '../Components/Home/MediaMentions'
import VideoBanner from '../Components/Home/VideoBanner'
import Blog from '../Components/Home/Blog'
import Accordion from '../Components/Home/Accordion'
import Ebook from '../Components/Home/Ebook'
import PartnersVideoCard from '../Components/Home/PartnersVideoCard'
import Achievment from '../Components/Home/Achievment'



export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Ebook/>
      <Achievment/>
      <PartnersVideoCard/>
      <MediaMentions/>
      <Blog/>
      <Accordion/>
    </div>
  )
}
