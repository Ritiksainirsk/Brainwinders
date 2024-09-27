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
import TestsCard from "../Components/Home/TestsCard";
import CareerCounselingExpectations from "../Components/CareerCounselling/CareerCounselingExpectations";
import HowItWorks from "../Components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/HowItWorks";

// images
import Img1 from '../assets/Curious about how it works/Assessment.webp'
import Img2 from '../assets/Curious about how it works/Guidance.webp'
import Img3 from '../assets/Curious about how it works/Strategizing.webp'

export default function CareerCounselling() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const benefits = [
    {
      title: "Provides Clarity and Direction",
      description:
        "Career counselling helps individuals understand their strengths, interests, and skills, providing clear direction in choosing a career path that suits them."
    },
    {
      title: "Informed Career Choices",
      description:
        "Through expert advice on education, career options, and job market trends, career counselling enables individuals to make well-informed decisions that align with their goals."
    },
    {
      title: "Exploration of Career Options",
      description:
        "Career counselling introduces individuals to a wide variety of career options, including emerging fields, helping them find the right fit for their interests and abilities."
    },
    {
      title: "Personalized Career Guidance",
      description:
        "By considering personal aptitudes, interests, and values, career counsellors provide tailored advice that aligns with individual aspirations, ensuring satisfaction and success."
    },
    {
      title: "Skill Development and Competence",
      description:
        "Career counsellors guide individuals in identifying and developing the necessary skills for their chosen careers, enhancing employability and adaptability."
    },
    {
      title: "Confidence and Long-Term Planning",
      description:
        "Career counselling boosts confidence by helping individuals create structured, long-term career plans and offering continuous support throughout their journey."
    }
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
      <div>
        <CareerCounsellingHero />
        <div className="max-w-[1500px] mx-auto overflow-hidden">
          <CareerGuidance />
          <GuidingSteps />
        </div>
        <BannerCardOfCareer />
          <TestsCard cardData={benefits} />
        <div className="max-w-[1500px] mx-auto overflow-hidden">
          <CareerCounselingExpectations/>
          <HowItWorks data={content}/>
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
