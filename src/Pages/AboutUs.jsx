import React from "react";
import AboutUsHero from "../Components/AboutUs/AboutUsHero";
import AboutUsVideoSection from "../Components/AboutUs/AboutUsVideoSection";
import OurTeam from "../Components/AboutUs/OurTeam";
import TeamMembers from "../Components/AboutUs/TeamMemebers";
import Achievment from "../Components/Home/Achievment";
import AwardWinners from "../Components/DMit/AwardWinners";
import PartnersVideoCard from "../Components/Home/PartnersVideoCard";
import TestimonialCard from "../Components/CareerCounselling/TestimonialCard ";
import Accordion from "../Components/Home/Accordion";

export default function AboutUs() {
  return (
    <div>
      <AboutUsHero />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <AboutUsVideoSection />
        <OurTeam/>
        <TeamMembers/>
        <Achievment/>
        <AwardWinners/>
        <PartnersVideoCard/>
        <TestimonialCard/>
        <Accordion/>
      </div>
    </div>
  );
}
