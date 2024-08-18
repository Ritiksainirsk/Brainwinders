import React from "react";
import CareerCounsellingNavbar from "../../Components/CareerCounselling/CareerCounsellingPages/CareerCounsellingNavbar";
import AwardRecognition from "../../Components/Home/AwardRecognition";
import CareerGuidence from "../../Components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/CareerGuidence";
import BannerCard from "../../Components/DMit/BannerCard";
import Assessment from "../../Components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/Assessment";
import HowItWorks from "../../Components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/HowItWorks";
import PartnersVideoCard from "../../Components/Home/PartnersVideoCard";
import AwardWinners from "../../Components/DMit/AwardWinners";
import TestimonialCard from "../../Components/CareerCounselling/TestimonialCard ";
import Benefits from "../../Components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/Benefits";
import Accordion from "../../Components/Home/Accordion";
import HeroSection from "../../Components/DMit/DmitPages/DmitForChildern/HeroSection";
import InfoSection from "../../Components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/InfoSection";
import SubjectsMetters from "../../Components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/SubjectsMetters";

export default function CareerGuidanceForClass10and12() {
  return (
    <div>
      <CareerCounsellingNavbar />
      <HeroSection/>
      <InfoSection />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <AwardRecognition />
        <SubjectsMetters />
        <CareerGuidence />
      </div>
      <BannerCard />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <Assessment />
        <HowItWorks />
      </div>
      <BannerCard />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <PartnersVideoCard />
        <AwardWinners />
        <TestimonialCard />
        <Benefits />
        <Accordion />
      </div>
    </div>
  );
}
