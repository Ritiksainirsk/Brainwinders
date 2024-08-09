import React from "react";
import HeroCarausel from "../Components/PsychometricTest/HeroCarausel";
import PsychometricTestsSection from "../Components/PsychometricTest/PsychometricTestsSection ";
import PsychometricAssessments from "../Components/PsychometricTest/PsychometricAssessments";
import OurService from "../Components/PsychometricTest/OurService";
import PsychometricTestBanner from "../Components/PsychometricTest/PsychometricTestBanner";
import Interview from "../Components/PsychometricTest/Interview";
import SuitablityBanner from "../Components/Home/SuitablityBanner";
import Ebook from "../Components/Home/Ebook";
import WhyChooseBrainwonders from "../Components/PsychometricTest/WhyChooseBrainwonders ";
import Accordion from "../Components/PsychometricTest/Accordion";
import TestimonialCard from "../Components/CareerCounselling/TestimonialCard ";

export default function PsychometricTest() {
  return (
    <>
      <HeroCarausel />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <PsychometricTestsSection />
        <PsychometricAssessments />
        <PsychometricTestBanner />
        <OurService />
        <Interview />
        <SuitablityBanner />
        <Ebook />
        <WhyChooseBrainwonders />
        <TestimonialCard/>
        <Accordion />
      </div>
    </>
  );
}
