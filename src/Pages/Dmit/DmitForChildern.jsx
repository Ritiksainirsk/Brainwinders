import React from 'react'
import Navbar from '../../Components/DMit/Navbar'
import HeroSection from '../../Components/DMit/DmitPages/DmitForChildern/HeroSection'
import AwardRecognition from '../../Components/Home/AwardRecognition'
import VideoSection from '../../Components/DMit/DmitPages/DmitForChildern/VideoSection'
import FormBanner from '../../Components/DMit/DmitPages/DmitForChildern/FormBanner'
import CareerPathBanner from '../../Components/DMit/DmitPages/DmitForChildern/CareerPathBanner'
import MiddleBanner from '../../Components/DMit/DmitPages/DmitForChildern/MiddleBanner'
import BannerCard from '../../Components/DMit/BannerCard'
import DmitTestBenefits from '../../Components/DMit/DmitPages/DmitForChildern/DmitTestBenefits'
import PartnersVideoCard from '../../Components/Home/PartnersVideoCard'
import TestimonialCard from '../../Components/CareerCounselling/TestimonialCard '
import Accordion from '../../Components/Home/Accordion'
import AwardWinners from '../../Components/DMit/AwardWinners'

export default function DmitForChildern() {
  return (
    <div className='max-w-[1500px] mx-auto overflow-hidden'>
        <Navbar/>
        <HeroSection/>
        <AwardRecognition/>
        <VideoSection/>
        <FormBanner/> 
        <CareerPathBanner/>
        <MiddleBanner/>
        <BannerCard/>
        <DmitTestBenefits/>
        <PartnersVideoCard/>
        <AwardWinners/>
        <TestimonialCard/>
        <Accordion/>
    </div>
  )
}
