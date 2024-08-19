import React from "react";
import IqTestHero from "../../Components/PsychometricTest/PsychometricPages/IqTest/IqTestHero";
import PsychometricNavbar from "../../Components/PsychometricTest/PsychometricPages/PsychometricNavbar";
import AwardRecognition from "../../Components/Home/AwardRecognition";
import LoginAndStatsBanner from "../../Components/PsychometricTest/PsychometricPages/AptitudeTest/LoginAndStatsBanner";
import IqTestVideoSection from "../../Components/PsychometricTest/PsychometricPages/IqTest/IqTestVideoSection";
import IqTestGuide from "../../Components/PsychometricTest/PsychometricPages/IqTest/IqTestGuide";
import IQTestMeasure from "../../Components/PsychometricTest/PsychometricPages/IqTest/IQTestMeasure";
import BannerCard from "../../Components/DMit/BannerCard";
import PricingCard from "../../Components/PsychometricTest/PsychometricPages/AptitudeTest/PricingCard";
import PartnersVideoCard from "../../Components/Home/PartnersVideoCard";
import AwardWinners from "../../Components/DMit/AwardWinners";
import TestimonialCard from "../../Components/CareerCounselling/TestimonialCard ";
import Accordion from "../../Components/Home/Accordion";

export default function IqTest() {
  return (
    <div>
      <PsychometricNavbar />
      <IqTestHero />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <AwardRecognition />
      </div>
      <LoginAndStatsBanner />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <IqTestVideoSection />
        <IqTestGuide />
      </div>
      <IQTestMeasure />
      <BannerCard />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <PricingCard />
        <PartnersVideoCard/>
        <AwardWinners/>
        <TestimonialCard/>
        <Accordion/>
      </div>
    </div>
  );
}
