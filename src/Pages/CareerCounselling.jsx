import React from "react";
import CareerCounsellingHero from "../Components/CareerCounselling/CareerCounsellingHero";
import CareerGuidance from "../Components/CareerCounselling/CareerGuidance";
import GuidingSteps from "../Components/CareerCounselling/GuidingSteps";
import BannerCardOfCareer from "../Components/CareerCounselling/BannerCardOfCareer";
import ImportanceOfCareerCounselling from "../Components/CareerCounselling/ImportanceOfCareerCounselling";
import MIddleImageBanner from "../Components/CareerCounselling/MIddleImageBanner";
import PartnersVideoCard from "../Components/Home/PartnersVideoCard";
import AwardRecognition from "../Components/Home/AwardRecognition";
import TestimonialCard from "../Components/CareerCounselling/TestimonialCard ";
import Accordion from "../Components/Home/Accordion";
import CareerCounsellingNavbar from "../Components/CareerCounselling/CareerCounsellingPages/CareerCounsellingNavbar";

export default function CareerCounselling() {
  return (
    <>
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <CareerCounsellingNavbar/>
        <CareerCounsellingHero />
        <CareerGuidance />
        <GuidingSteps />
        <BannerCardOfCareer />
        <ImportanceOfCareerCounselling />
        <MIddleImageBanner />
        <BannerCardOfCareer />
        <PartnersVideoCard />
        <AwardRecognition />
        <TestimonialCard />
        <Accordion />
      </div>
    </>
  );
}
