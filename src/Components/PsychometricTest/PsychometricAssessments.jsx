import React, { useState } from "react";

import { FaBookOpen } from "react-icons/fa6";
import { MdOutlineGroups } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

const tabs = [
  "Psychometric Career Test",
  "21st Century Skills and Learning Test",
];

const cardData = {
  "Psychometric Career Test": [
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
      title: "STREEM SECTOR 10TH",
      questions: "30 Questions",
      time: "30 Minutes",
      price: "₹600",
      oldPrice: "₹2000",
      target: "For Class 10th",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXF11StGTu1EMIS2HDxRPWb1zT073qLMo15g9Qy_2q8B4v72MI",
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
    {
      title: "HUMANITIES CAREER SELECTOR",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹800",
      oldPrice: "₹3000",
      target: "HUMANITIES",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYBTM8YcN63KRSQjBW_O9qMroFcFUk3B_noU4CmM5JOI5sklMq",
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
  "21st Century Skills and Learning Test": [
    {
      title: "Graduates & Post Graduates",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "Grads & Post Grads",
      image:
        "https://www.edwiseinternational.com/images/UK-Post-Graduation-Degree(1).jpg",
    },
    {
      title: "21st Century Skills & Learning Test Grade 12™",
      questions: "180 Questions",
      time: "60 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "Grade - 12",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqJeqUUTE5bVZPcwmOmYml-cc2rZ8S48P07w5wqBOgfKxYO4939fS7wo1Fn9zqthJzv4&usqp=CAU",
    },
    {
      title: "21st Century Skills & Learning Test Grade 11",
      questions: "30 Questions",
      time: "65 Minutes",
      price: "₹2000",
      oldPrice: "₹6000",
      target: "Grade - 11",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQpEDBq6W9zOEx8p4kuHwMsmVbct4cv-Uy-sXQ8Eb52aKUVAmqq",
    },
    {
      title: "21st Century Skills & Learning Test Grade 10",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹800",
      oldPrice: "₹3000",
      target: "Grade -10",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJP_aBGsqUH5MPGDnElhXsQI-FOsHD2AN5yIrhikMYvItmwrtv",
    },
    {
      title: "21st Century Skills & Learning Test Grade 9",
      questions: "50 Questions",
      time: "40 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "Grade - 9",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbPBm691pSFE34_mag0YcZOK4V7rQqQO5lwcTfAhNAvJUHei9I",
    },
    {
      title: "21st Century Skills & Learning Test Grade 8",
      questions: "40 Questions",
      time: "30 Minutes",
      price: "₹500",
      oldPrice: "₹2000",
      target: "Grade - 8",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWQxphSzBFOZ3sRpLO5O3M706FeHUwhDy_2yQ0qIBUZqQ4FyL",
    },
    {
      title: "21st Century Skills & Learning Test Grade 7",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "Grade - 7",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDSOXzqJyvoyADQ1PY1MA1aaORQZ4B6hmD28UC6lA2R9SFmvx",
    },
    // Add more cards here
    {
      title: "21st Century Skills & Learning Test Grade 6",
      questions: "20 Questions",
      time: "40 Minutes",
      price: "₹200",
      oldPrice: "₹2000",
      target: "Grade - 6",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-PAaBiW34i-u_SeyLkehnTBcrHgXM2qRzAAs03reWe8huN-Uh",
    },
  ],
};

export default function PsychometricAssessments() {
  return (
    <div>
      <div>
        <CareerServices />
      </div>
    </div>
  );
}

function CareerServices() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="p-4">
      <h3 className="text-2xl mt-10 lg:text-4xl font-bold text-center mb-5   heading-font text-[#022F46]">
        Brainwonders Psychometric Career Test
      </h3>
      <h3 className="text-center md:text-xl leading-7 pb-8 2xl:px-72 text-black">
        Brainwonders brings to you scientific and meticulously designed
        Psychometric Assessments to discover your true potential and interest
        ,learning styles and skills to excel in 21st Century
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
              width={120}
              height={120}
            />
            <div className="p-4">
              <h3 className="font-bold text-xl heading-font">{card.title}</h3>
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
