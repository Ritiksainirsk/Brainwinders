import React from "react";
import AptitudeHero from "../../Components/PsychometricTest/PsychometricPages/AptitudeTest/AptitudeHero";
import PsychometricNavbar from "../../Components/PsychometricTest/PsychometricPages/PsychometricNavbar";
import AwardRecognition from "../../Components/Home/AwardRecognition";
import LoginAndStatsBanner from "../../Components/PsychometricTest/PsychometricPages/AptitudeTest/LoginAndStatsBanner";
import AptitudeVideoSection from "../../Components/PsychometricTest/PsychometricPages/AptitudeTest/AptitudeVideoSection";
import CareerOptions from "../../Components/PsychometricTest/PsychometricPages/AptitudeTest/CareerOptions";
import AptitudeMeddleSection from "../../Components/PsychometricTest/PsychometricPages/AptitudeTest/AptitudeMeddleSection";
import AptitudeTestGuide from "../../Components/PsychometricTest/PsychometricPages/AptitudeTest/AptitudeTestGuide";
import BannerCard from '../../Components/DMit/BannerCard'
import PricingCard from "../../Components/PsychometricTest/PsychometricPages/AptitudeTest/PricingCard";
import PartnersVideoCard from "../../Components/Home/PartnersVideoCard";
import AwardWinners from "../../Components/DMit/AwardWinners";
import TestimonialCard from "../../Components/CareerCounselling/TestimonialCard ";
import Accordion from "../../Components/Home/Accordion";

export default function AptitudeTest() {
  return (
    <div>
      <PsychometricNavbar />
      <AptitudeHero />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <AwardRecognition />
      </div>
      <LoginAndStatsBanner />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <AptitudeVideoSection />
        <CareerOptions/>
        <AptitudeMeddleSection/>
        <AptitudeTestGuide/>
      </div>
      <BannerCard/>
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <PricingCard/>
        <PartnersVideoCard/>
        <AwardWinners/>
        <TestimonialCard/>
        <Accordion/>
      </div>
    </div>
  );
}
