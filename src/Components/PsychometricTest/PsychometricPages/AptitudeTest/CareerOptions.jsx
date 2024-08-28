import React, { useEffect } from "react";

import Earth from "../../../../assets/earth_icon.png";
import Data from "../../../../assets/data_analysis.png";
import Management from "../../../../assets/management.png";

import { FaAngleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

export default function CareerOptions() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="mb-16 my-10" data-aos="fade-up">
        <h3 className="text-3xl mb-3 md:text-3xl font-bold text-center heading-font px-5 text-[#022F46]" style={{fontWeight:"600"}}>
          Types of Aptitude Tests
        </h3>
        <p className=" text-[16px] md:text-[16px] text-center mb-6 md:flex md:flex-col">
          Many types of aptitude tests are administered for educational or career discovery and ability purposes
        </p>
        <CareerOptionsCard />
        <CareerOptionsCard2 />
      </div>
    </div>
  );
}

const CareerOptionsCard = () => {
  const cards = [
    {
      title: "Mechanical reasoning",
      description:
        "These types test your knowledge of physical concepts and are generally used to evaluate you for technical positions.",
      buttonText: "Explore Now",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/straight.webp",
      iconColor: "#FFD772",
    },
    {
      title: "Situational judgment",
      description:
        "These tests gauge your reactions to situations and your decision making.",
      buttonText: "Know Yourself Better",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/evaluation.webp",
      iconColor: "#9BC9FF",
    },
    {
      title: "Diagrammatic/spatial reasoning",
      description:
        "These tests see how well you can reach a conclusion based on processes shown in diagrams.",
      buttonText: "Professional Guidance",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/help-1.webp",
      iconColor: "#FFB1CC",
    },
    {
      title: "Verbal reasoning",
      description:
        "Your language, reading comprehension, and vocabulary are tested in these types.",
      buttonText: "India or Abroad",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/graduate.webp",
      iconColor: "#C8BBFF",
    },
  ];

  return (
    <div className="flex justify-center items-center rounded-2xl border-gray-200 md:mb-14 main-hoverbox-container">
      {cards.map((card, index) => (
        <div
          className={`w-[25rem] border-2 h-[23rem] containerBox relative p-7 overflow-hidden ${
            card.title === "Mechanical reasoning"
              ? "hover:bg-yellow-500"
              : "" || card.title === "Situational judgment"
              ? "hover:bg-blue-500"
              : "" || card.title === "Diagrammatic/spatial reasoning"
              ? "hover:bg-green-500"
              : "" || card.title === "Verbal reasoning"
              ? "hover:bg-red-500"
              : ""
          }`}
          key={index}
        >
          <div className="translate-x-[-100%] overlay-content-btn w-full h-full absolute">
            <button className="bg-[#1C4980] text-white py-1 px-5 rounded-lg bottom-10 absolute flex items-center gap-3">
              Explore <FaArrowRight />
            </button>
          </div>

          <div>
            <div
              className={`w-[80px] h-[80px] p-3 mb-4 rounded-full text-center ${
                card.title === "Mechanical reasoning"
                  ? "bg-[#C8BBFF]"
                  : "" || card.title === "Situational judgment"
                  ? "bg-[#B5D7FF]"
                  : "" || card.title === "Diagrammatic/spatial reasoning"
                  ? "bg-[#FFB1CC]"
                  : "" || card.title === "Verbal reasoning"
                  ? "bg-[#FED872]"
                  : ""
              }`}
            >
              <img
                src={card.icon}
                alt=""
                className="rounded-full object-cover w-full"
                width={120}
                height={120}
              />
            </div>

            <h3 className="text-xl font-semibold heading-font pb-3">
              {card.title}
            </h3>
            <p className="mb-7">{card.description}</p>

            <div className="mt-4 btnn ">
              <button className="py-2 tracking-wider flex items-center gap-3">
                {card.buttonText} <FaAngleRight />
              </button>
            </div>
          </div>

          <div className=" ml-28 translate-x-[100%] overlay-content-image absolute w-full h-full top-0 ">
            <img
              src={
                card.title === "Aptitide Test"
                  ? Management
                  : Earth || card.title === "Ideal Career Test"
                  ? Earth
                  : Earth || card.title === "Psychometric Test"
                  ? Data
                  : Earth
              }
              alt=""
              className="w-48 lg:w-52 absolute right-20 top-[-69px]"
              width={120}
              height={120}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const CareerOptionsCard2 = () => {
  const cards = [
    {
      title: "Abstract reasoning",
      description:
        "These measure problem-solving abilities and identify relationships between abstract arrays.",
      buttonText: "Explore Now",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/straight.webp",
      iconColor: "#FFD772",
    },
    {
      title: "Numerical reasoning",
      description:
        "In these tests, your abilities with numbers, math, and data are tested.",
      buttonText: "Know Yourself Better",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/evaluation.webp",
      iconColor: "#9BC9FF",
    },
    {
      title: "Inductive reasoning",
      description:
        "Under the pressure of time, these tests see how well you analyze patterns and data.",
      buttonText: "Professional Guidance",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/help-1.webp",
      iconColor: "#FFB1CC",
    },
    {
      title: "Logical reasoning",
      description:
        "Logical reasoning tests measure how well you recognize patterns and sequences and identify relationships between objects.",
      buttonText: "India or Abroad",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/graduate.webp",
      iconColor: "#C8BBFF",
    },
  ];

  return (
    <div className="flex justify-center items-center rounded-2xl border-gray-200 mb-14 main-hoverbox-container">
      {cards.map((card, index) => (
        <div
          className={`w-[25rem] border-2 h-[23rem] containerBox relative p-7 overflow-hidden ${
            card.title === "Abstract reasoning"
              ? "hover:bg-yellow-500"
              : "" || card.title === "Numerical reasoning"
              ? "hover:bg-blue-500"
              : "" || card.title === "Inductive reasoning"
              ? "hover:bg-green-500"
              : "" || card.title === "Logical reasoning"
              ? "hover:bg-red-500"
              : ""
          }`}
          key={index}
        >
          <div className="translate-x-[-100%] overlay-content-btn w-full h-full absolute">
            <button className="bg-[#1C4980] text-white py-1 px-5 rounded-lg bottom-10 absolute flex items-center gap-3">
              Explore <FaArrowRight />
            </button>
          </div>

          <div>
            <div
              className={`w-[80px] h-[80px] p-3 mb-4 rounded-full text-center ${
                card.title === "Abstract reasoning"
                  ? "bg-[#C8BBFF]"
                  : "" || card.title === "Numerical reasoning"
                  ? "bg-[#B5D7FF]"
                  : "" || card.title === "Inductive reasoning"
                  ? "bg-[#FFB1CC]"
                  : "" || card.title === "Logical reasoning"
                  ? "bg-[#FED872]"
                  : ""
              }`}
            >
              <img
                src={card.icon}
                alt=""
                className="rounded-full object-cover w-full"
                width={120}
                height={120}
              />
            </div>

            <h3 className="text-xl font-semibold heading-font pb-3">
              {card.title}
            </h3>
            <p className="mb-7">{card.description}</p>

            <div className="mt-4 btnn ">
              <button className="py-2 tracking-wider flex items-center gap-3">
                {card.buttonText} <FaAngleRight />
              </button>
            </div>
          </div>

          <div className=" ml-28 translate-x-[100%] overlay-content-image absolute w-full h-full top-0 ">
            <img
              src={
                card.title === "Aptitide Test"
                  ? Management
                  : Earth || card.title === "Ideal Career Test"
                  ? Earth
                  : Earth || card.title === "Psychometric Test"
                  ? Data
                  : Earth
              }
              alt=""
              className="w-48 lg:w-52 absolute right-20 top-[-69px]"
              width={120}
              height={120}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
