import React, { useEffect, useState } from "react";
import DmitTest from "../Components/DMit/DmitTest";
import BannerCard from "../Components/DMit/BannerCard";
import DmitFeature from "../Components/DMit/DmitFeature";
import InformationSection from "../Components/DMit/InformationSection";
import BrainAndFingerConnection from "../Components/DMit/BrainAndFingerConnection ";
import PartnersVideoCard from "../Components/Home/PartnersVideoCard";
import CertificateGallery from "../Components/DMit/CertificateGallery";
import AwardWinners from "../Components/DMit/AwardWinners";
import Accordion from "../Components/Home/Accordion";
import TestimonialCard from "../Components/CareerCounselling/TestimonialCard ";
import DmitNavbar from "../Components/DMit/DmitPages/DmitNavbar";
import { useLocation } from "react-router-dom";

export default function Dmit() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div>
          <DmitTest/>
          <BannerCard />
          <div className="max-w-[1500px] mx-auto overflow-hidden">
            <DmitFeature />
          </div>
          <InformationSection/>
          <div className="max-w-[1500px] mx-auto overflow-hidden">
            <BrainAndFingerConnection />
            <PartnersVideoCard />
            <CertificateGallery />
            <AwardWinners />
            <TestimonialCard />
            <Accordion />
          </div>
    </div>
  );
}
