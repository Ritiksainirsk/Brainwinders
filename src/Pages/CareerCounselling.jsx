import React from 'react'
import CareerCounsellingHero from '../Components/CareerCounselling/CareerCounsellingHero'
import CareerGuidance from '../Components/CareerCounselling/CareerGuidance'
import GuidingSteps from '../Components/CareerCounselling/GuidingSteps'
import BannerCardOfCareer from '../Components/CareerCounselling/BannerCardOfCareer'
import ImportanceOfCareerCounselling from '../Components/CareerCounselling/ImportanceOfCareerCounselling'

export default function CareerCounselling() {
  return (
    <div>
      <CareerCounsellingHero/>
      <CareerGuidance/>
      <GuidingSteps/>
      <BannerCardOfCareer/>
      <ImportanceOfCareerCounselling/>
    </div>
  )
}
