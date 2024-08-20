import React from "react";
import InterestTestHero from "../Components/InterestTest/InterestTestHero";
import AwardRecognition from "../Components/Home/AwardRecognition";
import LoginAndStatsBanner from "../Components/PsychometricTest/PsychometricPages/AptitudeTest/LoginAndStatsBanner";
import InterestVideoSection from "../Components/InterestTest/InterestVideoSection";
import InteresrTestMiddleSection from "../Components/InterestTest/InteresrTestMiddleSection";
import BannerCard from "../Components/DMit/BannerCard";
import InterestTestCareer from "../Components/InterestTest/InterestTestCareer";
import PartnersVideoCard from "../Components/Home/PartnersVideoCard";
import AwardWinners from "../Components/DMit/AwardWinners";
import TestimonialCard from "../Components/CareerCounselling/TestimonialCard ";
import Accordion from "../Components/Home/Accordion";

export default function InterestTest() {
  return (
    <div>
      <InterestTestHero />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <AwardRecognition />
      </div>
      <LoginAndStatsBanner />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <InterestVideoSection />
        <InteresrTestMiddleSection/>
      </div>
      <BannerCard/>
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <InterestTestCareer/>
      </div>
      <BannerCard/> 
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <PartnersVideoCard />
        <AwardWinners />
        <TestimonialCard />
        <Accordion />
      </div>
    </div>
  );
}
