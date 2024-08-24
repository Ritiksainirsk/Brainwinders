import React, { useEffect, useState } from "react";
import Hero from "../Components/Home/Hero";
import Services from "../Components/Home/Services";
import MediaMentions from "../Components/Home/MediaMentions";
import Blog from "../Components/Home/Blog";
import Accordion from "../Components/Home/Accordion";
import Ebook from "../Components/Home/Ebook";
import PartnersVideoCard from "../Components/Home/PartnersVideoCard";
import Achievment from "../Components/Home/Achievment";
import CareerSuitabilitySection from "../Components/Home/CareerSuitabilitySection ";
import HeroCarousel from "../Components/Home/HeroCarousel";
import TestimonialCard from "../Components/CareerCounselling/TestimonialCard ";
import AwardRecognition from "../Components/Home/AwardRecognition";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
      <HeroCarousel />
      <div className="max-w-[1550px] mx-auto overflow-hidden">
        <AwardRecognition />
      </div>
      <Hero />
      <Services />
      <div className="max-w-[1550px] mx-auto overflow-hidden"></div>
      <CareerSuitabilitySection />
      <div className="max-w-[1550px] mx-auto overflow-hidden">
        <Ebook />
        <Achievment />
        <PartnersVideoCard />
        <MediaMentions />
        <TestimonialCard />
        <Blog />
        <Accordion />
      </div>
    </>
  );
}
