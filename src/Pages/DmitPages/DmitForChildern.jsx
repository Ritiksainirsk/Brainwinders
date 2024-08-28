import React from "react";
import HeroSection from "../../Components/DMit/DmitPages/DmitForChildern/HeroSection";
import AwardRecognition from "../../Components/Home/AwardRecognition";
import VideoSection from "../../Components/DMit/DmitPages/DmitForChildern/VideoSection";
import FormBanner from "../../Components/DMit/DmitPages/DmitForChildern/FormBanner";
import CareerPathBanner from "../../Components/DMit/DmitPages/DmitForChildern/CareerPathBanner";
import MiddleBanner from "../../Components/DMit/DmitPages/DmitForChildern/MiddleBanner";
import BannerCard from "../../Components/DMit/BannerCard";
import DmitTestBenefits from "../../Components/DMit/DmitPages/DmitForChildern/DmitTestBenefits";
import PartnersVideoCard from "../../Components/Home/PartnersVideoCard";
import TestimonialCard from "../../Components/CareerCounselling/TestimonialCard ";
import Accordion from "../../Components/Home/Accordion";
import AwardWinners from "../../Components/DMit/AwardWinners";
import DmitNavbar from "../../Components/DMit/DmitPages/DmitNavbar";

export default function DmitForChildern() {
  return (
    <>
        <DmitNavbar />
        <HeroSection />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <AwardRecognition />
        <VideoSection />
      </div>
        <FormBanner />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <CareerPathBanner />
        <MiddleBanner />
      </div>
        <BannerCard />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <DmitTestBenefits />
        <PartnersVideoCard />
        <AwardWinners />
        <TestimonialCard />
        <Accordion />
      </div>
    </>
  );
}
