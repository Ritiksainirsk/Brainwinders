import React, { useState } from "react";

import { FaBookOpen } from "react-icons/fa6";
import { MdOutlineGroups } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

const tabs = [
  "Counsellors",
  "Working Professionals",
  "For College",
  "Class 11 and 12",
  "Class 10",
  "Class 8 and 9",
  "Study Abroad",
];

const cardData = {
  Counsellors: [
    {
      title: "BECOME A MASTER WITH CAREERGUIDE ™",
      questions: "180 Questions",
      time: "60 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "VIEW PROGRAM",
      image:
        "https://www.careerguide.com/images-homepage/become%20master%20with%20cg.jpg",
    },
    {
      title: "CAREER COUNSELLOR'S POWER-UP PACKAGE ",
      questions: "12 modules",
      time: "30 Minutes",
      price: "₹40,000",
      oldPrice: "₹100000",
      target: "VIEW PROGRAM",
      image: "https://www.careerguide.com/images-homepage/job%20guarantee.jpg",
    },
    {
      title: "CERTIFICATION COURSE FOR GUIDING SCHOOL STUDENTS ",
      questions: "30 Questions",
      time: "30 Minutes",
      price: "₹600",
      oldPrice: "₹2000",
      target: "View Program",
      image:
        "https://www.careerguide.com/images-homepage/college%20admission%20service%20abroad.jpg",
    },
    {
      title: "CERTIFICATION COURSE FOR GUIDING COLLEGE STUDENTS ",
      questions: "50 Questions",
      time: "40 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "View Program",
      image:
        "https://www.careerguide.com/images-homepage/delhi%20university.jpg",
    },
    {
      title: "PERSONAL BRANDING & SALES FOR CAREER COUNSELLORS ",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹800",
      oldPrice: "₹3000",
      target: "View Program",
      image:
        "https://www.careerguide.com/images-homepage/personal%20branding.jpg",
    },
    {
      title: "CERTIFICATION COURSE FOR GUIDING WORKING PROFESSIONAL ",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "View Program",
      image:
        "https://www.careerguide.com/images-homepage/masterclass%20wokring.jpg",
    },
    {
      title: "BECOME CERTIFIED PSYCHOMETRIC PRACTITIONER ",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "PROFESSIONAL SKILL",
      image:
        "https://www.careerguide.com/images-homepage/psychometric-main-image.jpg",
    },
    {
      title: "CERTIFICATION COURSE FOR GUIDING STUDY ABROAD",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "View Program",
      image:
        "https://www.careerguide.com/images-homepage/certification%20course%20for%20studying%20abroad.png",
    },
    // Add more cards here
  ],
  "Working Professionals": [
    {
      title: "MASTERCLASS FOR WORKING PROFESSIONALS",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "View Program",
      image:
        "https://www.careerguide.com/images-homepage/master%20class%20for%20working%20professional.jpg",
    },
    {
      title: "CAREER CLARITY SERVICE™",
      questions: "180 Questions",
      time: "60 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For All Age View Program",
      image: "https://www.careerguide.com/images-homepage/career%20clarity.jpg",
    },
    {
      title: "Job Readiness Tool Kit for Working Professional",
      questions: "30 Questions",
      time: "30 Minutes",
      price: "₹600",
      oldPrice: "₹2000",
      target: "For Class View Program",
      image: "https://www.careerguide.com/images-homepage/working.jpg",
    },
    {
      title: "CAREER & JOB SWITCH GUIDANCE ",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹800",
      oldPrice: "₹3000",
      target: "View Program",
      image:
        "https://www.careerguide.com/images-homepage/career%20job%20switch.jpg",
    },
  ],
  "For College": [
    {
      title: "MASTERCLASS FOR WORKING PROFESSIONALS",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "View Program",
      image:
        "https://www.careerguide.com/images-homepage/master%20class%20for%20working%20professional.jpg",
    },
    {
      title: "CAREER CLARITY SERVICE™",
      questions: "180 Questions",
      time: "60 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For All Age View Program",
      image: "https://www.careerguide.com/images-homepage/career%20clarity.jpg",
    },
    {
      title: "SKILL BASED TEST FOR 9TH",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For Class 9th",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXCTLoOQ7hAPvCiuV2qaNdrpuKX8UMWq0WhQsHdQZlM7GB27_",
    },
    {
      title: "ENGINEERING SELECTOR",
      questions: "50 Questions",
      time: "40 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For Class 12th",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6EijsbyQ-M4eWkAT21Qenqv-inU3zq6sfgtLgW9ICZmTsN8qT",
    },
    // Add more cards here
  ],
  "Class 11 and 12": [
    {
      title: "CERTIFICATION COURSE FOR GUIDING COLLEGE STUDENTS ",
      questions: "50 Questions",
      time: "40 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "View Program",
      image:
        "https://www.careerguide.com/images-homepage/delhi%20university.jpg",
    },
    {
      title: "PERSONAL BRANDING & SALES FOR CAREER COUNSELLORS ",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹800",
      oldPrice: "₹3000",
      target: "View Program",
      image:
        "https://www.careerguide.com/images-homepage/personal%20branding.jpg",
    },
    {
      title: "CERTIFICATION COURSE FOR GUIDING WORKING PROFESSIONAL ",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "View Program",
      image:
        "https://www.careerguide.com/images-homepage/masterclass%20wokring.jpg",
    },
    {
      title: "BECOME A MASTER WITH CAREERGUIDE ™",
      questions: "180 Questions",
      time: "60 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "VIEW PROGRAM",
      image:
        "https://www.careerguide.com/images-homepage/become%20master%20with%20cg.jpg",
    },
    {
      title: "CAREER COUNSELLOR'S POWER-UP PACKAGE ",
      questions: "12 modules",
      time: "30 Minutes",
      price: "₹40,000",
      oldPrice: "₹100000",
      target: "VIEW PROGRAM",
      image: "https://www.careerguide.com/images-homepage/job%20guarantee.jpg",
    },
    {
      title: "COMMERCE CAREER SELECTOR",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "COMMERCE",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWQxphSzBFOZ3sRpLO5O3M706FeHUwhDy_2yQ0qIBUZqQ4FyL",
    },
    {
      title: "PROFESSIONAL SKILL INDEX",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "PROFESSIONAL SKILL",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTyjNgVBMrdb7wFYqCQEZ3Sd261TmfujxSZEUOZkbRVwFm2lmAi",
    },
    {
      title: "EDUCATOR PROFESSSIONAL SKILLS",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "EDUCATOR",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlhHjU4-6t6TmrJpEoyF7EPSdp2-GlJET0QEgynVJmPIk2FOXI",
    },
    // Add more cards here
  ],
  "Class 10": [
    {
      title: "STREAM SELECTOR TEST",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "View Program",
      image:
        "https://www.careerguide.com/images-homepage/stream-selector.jpg",
    },
    {
      title: "STREAM AND CAREER CLARITY SERVICE ™",
      questions: "180 Questions",
      time: "60 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "View Program",
      image:
        "https://www.careerguide.com/images-homepage/stream%20and%20clarity%20service.jpg",
    },
    {
      title: "PROFILE BUILDING SERVICE FOR ABROAD ADMISSION ",
      questions: "50 Questions",
      time: "40 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "View Program",
      image:
        "https://www.careerguide.com/images-homepage/profile%20building.jpg",
    },
    // Add more cards here
  ],
  "Class 8 and 9": [
    {
      title: "IDEAL CAREER TEST™",
      questions: "180 Questions",
      time: "60 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For All Age Groups",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwefE4ndJhqhTihsCr6LokbbXs_-zsMAWTZ-nv-OJ2QN9_ZjZO",
    },
    {
        title: "STREAM SELECTOR TEST",
        questions: "40 Questions",
        time: "30 Minutes",
        price: "₹500",
        oldPrice: "₹2000",
        target: "View Program",
        image:
          "https://www.careerguide.com/images-homepage/stream-selector.jpg",
      },
      {
        title: "STREAM AND CAREER CLARITY SERVICE ™",
        questions: "180 Questions",
        time: "60 Minutes",
        price: "₹500",
        oldPrice: "₹2000",
        target: "View Program",
        image:
          "https://www.careerguide.com/images-homepage/stream%20and%20clarity%20service.jpg",
      },
    // Add more cards here
  ],
  "Study Abroad": [
    {
      title: "STUDY ABROAD MBA-IVY LEAGUE/TOP 50 COLLEGES™",
      questions: "180 Questions",
      time: "60 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "View Program",
      image:
        "https://careerguide.com/images-homepage/study%20abroad%20ivy%20league.png",
    },
    {
      title: "STUDY ABROAD UNDERGRADUATE IN TOP 100 COLLEGES",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For View Program",
      image:
        "https://www.careerguide.com/images-homepage/study%20abroad%20undergraduate.jpg",
    },
    {
      title: "STUDY ABROAD POSTGRADUATE IN TOP 100 COLLEGES",
      questions: "50 Questions",
      time: "40 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "For View Program",
      image:
        "https://www.careerguide.com/images-homepage/study%20aborad%20postgraduate.jpg",
    },
    {
      title: "STUDY ABROAD MBBS ",
      questions: "30 Questions",
      time: "30 Minutes",
      price: "₹600",
      oldPrice: "₹2000",
      target: "For View Program",
      image:
        "https://www.careerguide.com/images-homepage/study%20abroad%20mbbs.jpg",
    },
    {
      title: "STUDY ABROAD IN USA",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹800",
      oldPrice: "₹3000",
      target: "View Program",
      image:
        "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
    },
    {
      title: "STUDY ABROAD IN AUSTRALIA&NEWZEALAND ",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "View Program",
      image:
        "https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg",
    },
    {
      title: "STUDY ABROAD IN SINGAPORE",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "View Program",
      image:
        "https://cdn.britannica.com/90/7490-050-5D33348F/Flag-China.jpg",
    },
    {
      title: "STUDY ABROAD IN UK",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "EDUCATOR",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
    },
    // Add more cards here
  ],
};

export default function OurService() {
  return (
    <div>
      <CareerServices />
    </div>
  );
}

function CareerServices() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="p-4">
      <h3 className="text-3xl mt-10 lg:text-4xl font-bold text-center mb-10 heading-font">
      Brainwonders Psychometric Test for Counselling Services
      </h3>
      <div className="flex justify-center flex-wrap space-x-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 rounded ${
              activeTab === tab ? "bg-[#022F46] text-white" : "bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <h3
        className="text-center text-xl leading-7 pb-8 2xl:px-72"
        style={{ color: "rgb(102, 102, 102)" }}
      >
       Brainwonders brings to you scientific and meticulously designed
       Our Services to discover your true potential and interest ,learning styles and skills
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cardData[activeTab]?.map((card, index) => (
          <div
            key={index}
            className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-52 object-cover"
              src={card.image}
              alt={card.title}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg heading-font">{card.title}</h3>
              <span className="flex items-center gap-3">
                <FaBookOpen />
                <p className="text-gray-600">{card.questions}</p>
              </span>
              <span className="flex items-center gap-3">
                <MdOutlineGroups />
                <p className="text-gray-600">{card.time}</p>
              </span>
              <span className="flex items-center gap-3">
                <FaRupeeSign />{" "}
                <div className="flex items-center">
                  <span className="line-through text-gray-500">
                    {card.oldPrice}
                  </span>
                  <span className="text-red-500 ml-2">{card.price}</span>
                </div>
              </span>
              <button className="mt-4 w-full bg-[#022F46] text-white py-2 rounded">
                {card.target}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
