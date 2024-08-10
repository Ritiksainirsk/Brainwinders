import React from "react";
import BannerCard from "../DMit/BannerCard";

import Earth from "../../assets/earth_icon.png";
import Data from "../../assets/data_analysis.png";
import Management from "../../assets/management.png";

import { FaAngleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function CareerCounsellingHero() {
  return (
    <div>
      {/* this is hidden div of navbar */}
      <div className="topSpaceDiv"></div>
      {/* <<<<<<<< */}

      <CareerCounsellingVideo />

      {/*  */}
      <div>
        <CareerCounsellingHeroDescription />
      </div>
      {/*  */}3
      {/*  */}
      <div className="mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-center my-10 heading-font px-5 text-[#022F46]">
          BENEFITS OF Career Counselling FOR ALL AGES!
        </h3>
        <CareerOptions />
      </div>
      {/*  */}

      {/*  */}
      <BannerCard />
      {/*  */}
    </div>
  );
}

const CareerCounsellingVideo = () => (
  <div className=" py-8 px-2 flex justify-center items-center">
    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 xl:gap-20">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-[3.3rem] font-bold mb-6 text-shadow heading-font leading-[62px] text-[#022F46]">
          GET THE RIGHT CAREER COUNSELLING
          <br />
          TO LEAP THROUGH YOUR CAREER
          <br />
        </h1>
        <h3 className="text-lg lg:text-[1.4rem] mb-6 leading-[26px]">
          Take the world’s most-advanced Career Assessment Test
          <br />
          and Find your best Career, Course, and college
        </h3>
        <button className="bg-[#022F46] text-white py-2 px-4 rounded-lg">
          Take Counselling Now
        </button>
      </div>
      <div className="w-[90%] lg:w-[50%] xl:w-[40%]">
        <iframe
          className="w-full h-72 rounded-lg"
          src="https://www.youtube.com/embed/ISv2-cLrtnY"
          title="DMIT Test Video"
          allowFullScreen
        ></iframe>
        <p className="text-center text-sm mt-2">
          Watch the Founder & CEO of Brainwonders, Mr Manish Naidu, talk about
          its DMIT franchise model
        </p>
      </div>
    </div>
  </div>
);

const CareerCounsellingHeroDescription = () => {
  return (
    <div className="p-6 2xl:px-[9rem]">
      <h3 className="text-3xl lg:text-5xl font-bold text-center mb-5 heading-font text-[#022F46]">
        WHAT IS CAREER COUNSELLING?
      </h3>
      <p className="text-black mb-4">
        Career Counselling is a process that helps you understand yourself and
        the world of work to make informed career, educational, and life
        decisions. It involves a structured interaction between the individual
        seeking guidance and an expert career counsellor or advisor. Career
        counsellors provide guidance, support, and resources to help individuals
        navigate these decisions. They help identify interests, abilities,
        values, and personality traits to match them to potential careers. They
        also provide information about the job market, education and training
        programs, and career paths.
      </p>
      <p className="text-gray-800">
        Career counsellors assist individuals in setting career goals and
        developing concrete action plans to achieve those goals. This involves
        identifying potential obstacles and developing strategies to overcome
        them. Additionally, they may provide resources for further education or
        training, job search techniques, resume writing, and interview
        preparation to enhance employability. Career counsellors offer ongoing
        support and encouragement throughout the career exploration and
        decision-making process, recognizing that career paths may evolve over
        time.
      </p>
    </div>
  );
};

const CareerOptions = () => {
  const cards = [
    {
      title: "Career Guidance for class 8th and 9th",
      description: "Find the perfect career pathway that's just right for you",
      buttonText: "Explore Now",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/straight.webp",
      iconColor: "#FFD772",
    },
    {
      title: "Career Guidance After 10th",
      description:
        "Helps you to identify your Personality, Areas of Interest and Aptitude Level.",
      buttonText: "Know Yourself Better",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/evaluation.webp",
      iconColor: "#9BC9FF",
    },
    {
      title: "Career Guidance after 12th",
      description:
        "Interact with Real Counselors, not Bots. Get answers for your quick career-related questions.",
      buttonText: "Professional Guidance",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/help-1.webp",
      iconColor: "#FFB1CC",
    },
    {
      title: "Career Guidance after graduation",
      description:
        "We’ll help you choose the perfect college fit in India or Abroad.",
      buttonText: "India or Abroad",
      icon: "https://d8zm9ei35njj5.cloudfront.net/uploads/2024/01/graduate.webp",
      iconColor: "#C8BBFF",
    },
  ];

  return (
    <div className="flex justify-center items-center mx-9 rounded-2xl border-gray-200 mb-14 main-hoverbox-container">
      {cards.map((card, index) => (
        <div
          className={`w-[22rem] border-2 h-[20rem] containerBox relative p-7 overflow-hidden ${
            card.title === "Career Guidance for class 8th and 9th"
              ? "hover:bg-yellow-500"
              : "" || card.title === "Career Guidance After 10th"
              ? "hover:bg-blue-500"
              : "" || card.title === "Career Guidance after 12th"
              ? "hover:bg-green-500"
              : "" || card.title === "Career Guidance after graduation"
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
            <div className={`w-[80px] h-[80px] p-3 mb-4 rounded-full text-center ${
            card.title === "Career Guidance for class 8th and 9th"
              ? "bg-[#C8BBFF]"
              : "" || card.title === "Career Guidance After 10th"
              ? "bg-[#B5D7FF]"
              : "" || card.title === "Career Guidance after 12th"
              ? "bg-[#FFB1CC]"
              : "" || card.title === "Career Guidance after graduation"
              ? "bg-[#FED872]"
              : ""
          }`}>
              <img
                src={card.icon}
                alt=""
                className="rounded-full object-cover w-full"
              />
            </div>

            <h3 className="text-xl font-semibold heading-font pb-3">
              {card.title}
            </h3>
            <p>{card.description}</p>

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
              className="w-52 absolute right-20 top-[-69px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
