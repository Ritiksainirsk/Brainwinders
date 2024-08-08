import React from "react";

import Earth from "../../assets/earth_icon.png";
import Data from "../../assets/data_analysis.png";
import Management from "../../assets/management.png";

import { FaAngleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const MIddleImageBanner = () => {
  return (
    <>
      <FirstBanner />
      <SecondBanner />
      <div>
        <div className="flex justify-center items-center mt-5">
          <h1 className="bg-[#FFF8F0] text-[#1C355E] font-bold text-center heading-font text-3xl lg:text-4xl my-11 py-4 px-10 rounded-full shadow-lg">
            Paving a path for your Bright future
          </h1>
        </div>
        <CareerOptions />
      </div>
    </>
  );
};

const FirstBanner = () => {
  return (
    <>
      <div className="bg-white p-8 md:p-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold heading-font">
            CAREER COUNSELLING THROUGH BIOMETRICS
          </h1>
          <p className="text-lg md:text-2xl text-black mt-4">
            Brainwonders, is the only U.S Patent DMIT Company which helps in
            transformation via brain mapping
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-8">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6zjQLCOk0WBZO0lFK6U17OkPO9jZUuONZoArz2FNTJcajU0c"
              alt="Career Counseling"
              className="w-3/4 md:w-2/3"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 lg:pr-20">
            <p className="text-black text-sm md:text-base">
              DMIT Dermatoglyphics Multiple Intelligence test (DMIT) is the
              latest and most trending way of mapping a person's brain. In DMIT,
              the fingerprints of the client are taken using a scanner, and then
              a report is generated that gives complete details of the client's
              personality, strengths, weaknesses, and potential. Research
              suggests 85% accuracy for this approach. It is considered more
              effective than any psychometric test. Counselling done on the
              basis of fingerprint reports gives a clearer picture to the
              students to choose a career option based on their abilities and
              skill sets. In India, Brainwonders is the largest DMIT and career
              counselling centre, with 108 branches all across the country.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const SecondBanner = () => {
  return (
    <>
      <div className="bg-gray-50 p-6">
        <h2 className="text-3xl lg:text-4xl font-semibold heading-font text-center my-7">
          CAREER GUIDANCE BY OUR CAREER COUNSELLORS
        </h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-20">
          <div className="md:w-[30%]">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTauSCxFrAo84-YpO4jpScIjwLe6O0qPoyGPMynXGk5JgLyRg5S" // Replace with your image URL
              alt="Career Guidance"
              className="w-full"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <p className="text-black mt-4">
              Career Guidance is the guidance given to people to help them in
              understanding their abilities, capacities and potential that is
              significant for picking the right career way. Career guidance
              after tenth and career guidance after twelfth are vital as these
              are the significant defining moments in an understudies' life.
            </p>
            <p className="text-black mt-4">
              Career guidance and advising given by proficient career guidance
              instructors to understudies who are befuddled with regards to what
              career decision to make.
            </p>
            <p className="text-black mt-4">
              Aptitude Test career instructors are qualified career guides who
              assist understudies with understanding their inborn capacities and
              abilities through different career guidance tests, for example,
              aptitude test and interest test, likewise assist understudies with
              picking the right career way.
            </p>
          </div>
        </div>
      </div>
    </>
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
            <div
              className={`w-[80px] h-[80px] p-3 mb-4 rounded-full text-center ${
                card.title === "Career Guidance for class 8th and 9th"
                  ? "bg-[#C8BBFF]"
                  : "" || card.title === "Career Guidance After 10th"
                  ? "bg-[#B5D7FF]"
                  : "" || card.title === "Career Guidance after 12th"
                  ? "bg-[#FFB1CC]"
                  : "" || card.title === "Career Guidance after graduation"
                  ? "bg-[#FED872]"
                  : ""
              }`}
            >
              <img
                src={card.icon}
                alt=""
                className="rounded-full object-cover w-full"
              />
            </div>

            <h2 className="text-xl font-semibold heading-font pb-3">
              {card.title}
            </h2>
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

export default MIddleImageBanner;
