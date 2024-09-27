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
import { useLocation } from "react-router-dom";
import TestsCard from "../Components/Home/TestsCard";
import HowItWorks from "../Components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/HowItWorks";

// images
import Img1 from "../assets/Curious about how it works/Assessment.webp";
import Img2 from "../assets/Curious about how it works/Guidance.webp";
import Img3 from "../assets/Curious about how it works/Strategizing.webp";
import BannerCardOfCareer from "../Components/CareerCounselling/BannerCardOfCareer";
import DmitComparison from "../Components/DMit/DmitComparison";

export default function Dmit() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const benefits = [
    {
      title: "Discover Your Inborn Talents",
      description:
        "The DMIT test analyzes your fingerprints to reveal your natural abilities and strengths. These talents are unique to you, and understanding them can help you make more informed decisions about your career, education, and personal growth. Whether you’re exploring new paths or trying to enhance your skills,",
    },
    {
      title: "Identify Your Learning Style",
      description:
        "Everyone learns differently, and the DMIT test helps you uncover your preferred learning style—whether it's visual, auditory, or kinesthetic. By understanding how you learn best, you can optimize your study habits, improve your performance in school or at work, and make learning a more enjoyable experience.",
    },
    {
      title: "Get Personalized Career Guidance",
      description:
        "The DMIT test not only identifies your talents and learning style but also offers personalized career guidance. Based on your unique profile, the test suggests career paths that align with your strengths, ensuring that you are well-suited for the roles you choose. This tailored approach helps you make confident career decisions that lead to long-term satisfaction and success.",
    },
    {
      title: "Improve Personal and Academic Growth",
      description:
        "With the insights provided by the DMIT test, you can target areas for improvement and work on them effectively. Whether it's developing new skills, refining your strengths, or addressing weaknesses, the test offers a roadmap for personal and academic development. This growth leads to better results, higher achievement, and a stronger sense of fulfillment.",
    },
    {
      title: "Boost Self-Confidence and Decision-Making Skills",
      description:
        "Knowing your strengths and understanding your learning style gives you the confidence to pursue your goals with clarity and determination. With DMIT, you are better equipped to make decisions that align with your abilities and interests, whether in education, career, or life in general. This self-awareness boosts not only your confidence but also your ability to make well-informed, successful choices.",
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
    <div>
      <DmitTest />
      <BannerCard />
      <TestsCard cardData={benefits} />
      <HowItWorks data={content} />
      <BannerCardOfCareer />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <DmitFeature />
      </div>
      <InformationSection />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <BrainAndFingerConnection />
      </div>
        <DmitComparison />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <PartnersVideoCard />
        <CertificateGallery />
        <AwardWinners />
        <TestimonialCard />
        <Accordion />
      </div>
    </div>
  );
}
