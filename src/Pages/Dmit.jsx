import React from 'react'
import DmitTest from '../Components/DMit/DmitTest'
import BannerCard from '../Components/DMit/BannerCard'
import DmitFeature from '../Components/DMit/DmitFeature'
import InformationSection from '../Components/DMit/InformationSection'
import BrainAndFingerConnection from '../Components/DMit/BrainAndFingerConnection '
import PartnersVideoCard from '../Components/Home/PartnersVideoCard'
import CertificateGallery from '../Components/DMit/CertificateGallery'
import AwardWinners from '../Components/DMit/AwardWinners'
import Accordion from '../Components/Home/Accordion'
import TestimonialCard from '../Components/CareerCounselling/TestimonialCard '
import DmitNavbar from '../Components/DMit/DmitPages/DmitNavbar'

export default function Dmit() {
  return (
    <div className='max-w-[1500px] mx-auto overflow-hidden'>
      <DmitNavbar/>
      <DmitTest/>
      <BannerCard/>
      <DmitFeature/>
      <InformationSection/>
      <BrainAndFingerConnection/>
      <PartnersVideoCard/>
      <CertificateGallery/>
      <AwardWinners/>
      <TestimonialCard/>
      <Accordion/>
    </div>
  )
}
