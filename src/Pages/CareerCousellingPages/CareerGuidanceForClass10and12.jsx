import React from "react";
import CareerCounsellingNavbar from "../../Components/CareerCounselling/CareerCounsellingPages/CareerCounsellingNavbar";
import AwardRecognition from "../../Components/Home/AwardRecognition";
import CareerGuidence from "../../Components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/CareerGuidence";
import BannerCard from "../../Components/DMit/BannerCard";
import Assessment from "../../Components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/Assessment";
import HowItWorks from "../../Components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/HowItWorks";
import PartnersVideoCard from "../../Components/Home/PartnersVideoCard";
import AwardWinners from "../../Components/DMit/AwardWinners";
import TestimonialCard from "../../Components/CareerCounselling/TestimonialCard ";
import Benefits from "../../Components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/Benefits";
import Accordion from "../../Components/Home/Accordion";
import HeroSection from "../../Components/DMit/DmitPages/DmitForChildern/HeroSection";
import InfoSection from "../../Components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/InfoSection";
import SubjectsMetters from "../../Components/CareerCounselling/CareerCounsellingPages/CareerGuidanceForClass10and12/SubjectsMetters";

export default function CareerGuidanceForClass10and12() {
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
        imgSrc: "https://setmycareer.com/img/completing-online-tests.webp",
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
        imgSrc: "https://setmycareer.com/img/live-sessions.webp",
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
        imgSrc: "https://setmycareer.com/img/recommendations.webp",
        imgAlt: "Strategizing",
      },
    ],
  };


  return (
    <div>
      <CareerCounsellingNavbar />
      <HeroSection/>
      <InfoSection />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <AwardRecognition />
        <SubjectsMetters />
        <CareerGuidence />
      </div>
      <BannerCard />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <Assessment />
        <HowItWorks data={content}/>
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
