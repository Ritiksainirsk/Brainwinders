import React from 'react'
import HeroCarausel from '../Components/PsychometricTest/HeroCarausel'
import PsychometricTestsSection from '../Components/PsychometricTest/PsychometricTestsSection '
import PsychometricAssessments from '../Components/PsychometricTest/PsychometricAssessments'
import OurService from '../Components/PsychometricTest/OurService'
import PsychometricTestBanner from '../Components/PsychometricTest/PsychometricTestBanner'
import Interview from '../Components/PsychometricTest/Interview'
import SuitablityBanner from '../Components/Home/SuitablityBanner'
import Ebook from '../Components/Home/Ebook'
import WhyChooseBrainwonders from '../Components/PsychometricTest/WhyChooseBrainwonders '
import Accordion from '../Components/PsychometricTest/Accordion'

export default function PsychometricTest() {
  return (
    <div>
      <HeroCarausel/>
      <PsychometricTestsSection/>
      <PsychometricAssessments/>
      <PsychometricTestBanner/>
      <OurService/>
      <Interview/>
      <SuitablityBanner/>
      <Ebook/>
      <WhyChooseBrainwonders/>
      <Accordion/>
    </div>
  )
}
