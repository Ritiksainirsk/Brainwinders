import React from "react";
import CareerCounsellingNavbar from "../../Components/CareerCounselling/CareerCounsellingPages/CareerCounsellingNavbar";
import HeroSection from "../../Components/DMit/DmitPages/DmitForChildern/HeroSection";
import InfoSection from "./InfoSection";
import AwardRecognition from "../../Components/Home/AwardRecognition";
import SubjectsMetters from "./SubjectsMetters";
import CareerGuidence from "./CareerGuidence";
import BannerCard from "../../Components/DMit/BannerCard";
import Assessment from "./Assessment";
import HowItWorks from "./HowItWorks";
import PartnersVideoCard from "../../Components/Home/PartnersVideoCard";
import AwardWinners from "../../Components/DMit/AwardWinners";
import TestimonialCard from "../../Components/CareerCounselling/TestimonialCard ";
import Benefits from "./Benefits";
import Accordion from "../../Components/Home/Accordion";

export default function CareerGuidanceForClass10and12() {
  return (
    <div>
      <CareerCounsellingNavbar />
      <HeroSection />
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
