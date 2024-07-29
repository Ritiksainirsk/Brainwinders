import React from 'react'
import DmitTest from '../Components/DMit/DmitTest'
import BannerCard from '../Components/DMit/BannerCard'
import DmitFeature from '../Components/DMit/DmitFeature'
import InformationSection from '../Components/DMit/InformationSection'
import BrainAndFingerConnection from '../Components/DMit/BrainAndFingerConnection '
import PartnersVideoCard from '../Components/Home/PartnersVideoCard'
import VideoBanner from '../Components/Home/VideoBanner'
import CertificateGallery from '../Components/DMit/CertificateGallery'
import AwardWinners from '../Components/DMit/AwardWinners'
import Accordion from '../Components/Home/Accordion'

export default function Dmit() {
  return (
    <div>
      <DmitTest/>
      <BannerCard/>
      <DmitFeature/>
      <InformationSection/>
      <BrainAndFingerConnection/>
      <PartnersVideoCard/>
      <VideoBanner/>
      <CertificateGallery/>
      <AwardWinners/>
      <Accordion/>
    </div>
  )
}
