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
import TestsCard from "../Components/Home/TestsCard";
import HowItWorks from "../Components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/HowItWorks";

// images
import Img1 from '../assets/Curious about how it works/Assessment.webp'
import Img2 from '../assets/Curious about how it works/Guidance.webp'
import Img3 from '../assets/Curious about how it works/Strategizing.webp'

export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const benefits = [
    {
      title: "Career Guidance for class 8th and 9th",
      description:
        "At this crucial stage of academic life, students are just beginning to explore their interests and potential career paths.",
    },
    {
      title: "Career Guidance After 10thIdentify Your Learning Style",
      description:
        "Choosing the right stream after class 10th is one of the most important decisions students will make in their academic journey",
    },
    {
      title: "Career Guidance After 12th",
      description:
        "After completing class 12th, students are faced with a wide range of career options, from professional degrees to specialized courses.",
    },
    {
      title: "Career Guidance After Graduation",
      description:"Graduation is a significant milestone, but it also brings the challenge of deciding what to do next.",
    },
  ];
    // Content array including title and description for the component
    const content = {
      title: "Curious about how it works?",
      description: `Discover how Brainwonders has empowered over 4.3 lakhs+ individuals and collaborated with 1220+ top schools across the country to help them become #CareerReady.`,
      steps: [
        {
          step: "STEP - 1",
          title: "Take the Brainwonders DMIT test for career assessment",
          description: `DMIT Dermatoglyphics Multiple Intelligence test (DMIT) is the latest
            and most trending way of mapping a person's brain. In DMIT, the
            fingerprints of the client are taken using a scanner, and then a
            report is generated that gives complete details of the client's
            personality, strengths, weaknesses and potential. Research suggests
            85% accuracy for this approach. It is considered more effective than
            any psychometric test. Counselling done on the basis of fingerprint
            reports gives a clearer picture to the students to choose a career
            option based on their abilities and skill sets. In India, Brainwonders
            is the largest DMIT and career counselling centre, with 108 branches
            all across the country.`,
          imgSrc: Img1,
          imgAlt: "Evaluation",
        },
        {
          step: "STEP - 2",
          title: "1-on-1 career counselling",
          description: `Brainwonders ' 1-on-1 career counselling aims to help individuals
            comprehend their strengths, talents, and interests, enabling them to
            set achievable goals and develop valuable skill sets for their
            chosen career paths. Individuals can make counselling decisions
            about their careers by engaging in this counselling session,
            enhancing their chances of success and fulfilment in their
            professional lives.`,
          imgSrc: Img2,
          imgAlt: "Guidance",
        },
        {
          step: "STEP - 3",
          title: "Gain insights from industry experts",
          description: `Our team helps you understand your strengths and goals. Whether you
            're starting or looking to grow, we offer personalized tips to help
            you succeed. Our knowledge of different industries guides you
            towards the right path. Trust us to support you in making
            intelligent career choices and reaching your potential.`,
          imgSrc: Img3,
          imgAlt: "Strategizing",
        },
      ],
    };
  
  return (
    <>
      <div className="overflow-hidden">
        <HeroCarousel />
        <div className="max-w-[1550px] mx-auto overflow-hidden">
          <AwardRecognition />
        </div>
        <Hero />
        <Services />
        <TestsCard cardData={benefits}/>
        <CareerSuitabilitySection />
        <HowItWorks data={content}/>
        <div className="max-w-[1550px] mx-auto overflow-hidden">
          <Ebook />
          <Achievment />
          <PartnersVideoCard />
          <MediaMentions />
          <TestimonialCard />
          <Blog />
          <Accordion />
        </div>
      </div>
    </>
  );
}
