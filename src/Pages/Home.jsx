import React from 'react'
import Hero from '../Components/Home/Hero'
import Services from '../Components/Home/Services'
import Achievement from '../Components/Home/Achievement'
import MediaMentions from '../Components/Home/MediaMentions'
import VideoBanner from '../Components/Home/VideoBanner'
import Blog from '../Components/Home/Blog'
import Accordion from '../Components/Home/Accordion'
import Ebook from '../Components/Home/Ebook'
import PartnersVideoCard from '../Components/Home/PartnersVideoCard'



export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Achievement/>
      <MediaMentions/>
      <VideoBanner/>
      <Ebook/>
      <PartnersVideoCard/>
      <Blog/>
      <Accordion/>
    </div>
  )
}
