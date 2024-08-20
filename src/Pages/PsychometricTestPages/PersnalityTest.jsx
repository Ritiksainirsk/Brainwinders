import React from "react";
import PersnalityTestHero from "../../Components/PsychometricTest/PsychometricPages/PersnalityTest/PersnalityTestHero";
import PsychometricNavbar from "../../Components/PsychometricTest/PsychometricPages/PsychometricNavbar";
import AwardRecognition from "../../Components/Home/AwardRecognition";
import LoginAndStatsBanner from "../../Components/PsychometricTest/PsychometricPages/AptitudeTest/LoginAndStatsBanner";
import PersnalityVideoSection from "../../Components/PsychometricTest/PsychometricPages/PersnalityTest/PersnalityVideoSection";
import PersonalityAssessments from "../../Components/PsychometricTest/PsychometricPages/PersnalityTest/PersonalityAssessments";
import PersnalityMiddleSection from "../../Components/PsychometricTest/PsychometricPages/PersnalityTest/PersnalityMiddleSection";
import BannerCard from "../../Components/DMit/BannerCard";
import PricingCard from "../../Components/PsychometricTest/PsychometricPages/AptitudeTest/PricingCard";
import PartnersVideoCard from "../../Components/Home/PartnersVideoCard";
import AwardWinners from "../../Components/DMit/AwardWinners";
import TestimonialCard from "../../Components/CareerCounselling/TestimonialCard ";
import Accordion from "../../Components/Home/Accordion";

export default function PersnalityTest() {
  return (
    <div>
      <PsychometricNavbar />
      <PersnalityTestHero />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <AwardRecognition />
      </div>
      <LoginAndStatsBanner />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <PersnalityVideoSection />
        <PersonalityAssessments />
        <PersnalityMiddleSection />
      </div>
      <BannerCard />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <PricingCard />
        <PartnersVideoCard />
        <AwardWinners />
        <TestimonialCard />
        <Accordion />
      </div>
    </div>
  );
}
