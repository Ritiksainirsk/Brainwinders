import React, { useEffect } from "react";
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
import { useLocation } from "react-router-dom";

export default function CareerCounselling() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <div>
        <CareerCounsellingNavbar />
        <CareerCounsellingHero />
        <div className="max-w-[1500px] mx-auto overflow-hidden">
          <CareerGuidance />
          <GuidingSteps />
        </div>
        <BannerCardOfCareer />
        <div className="max-w-[1500px] mx-auto overflow-hidden">
          <ImportanceOfCareerCounselling />
          <MIddleImageBanner />
        </div>
        <BannerCardOfCareer />
        <div className="max-w-[1500px] mx-auto overflow-hidden">
          <PartnersVideoCard />
          <AwardRecognition />
          <TestimonialCard />
          <Accordion />
        </div>
      </div>
    </>
  );
}
