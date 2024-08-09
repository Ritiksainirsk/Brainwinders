import React from "react";

import Earth from "../../assets/earth_icon.png";
import Data from "../../assets/data_analysis.png";
import Management from "../../assets/management.png";

import { FaAngleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const items = [
  {
    title: "DMIT Test",
    subtitle:
      "DMIT is the best tool powered by biometrics and genetic intelligence to map all the traits & talents",
    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSROsO2ca-Nj1lKtHD3ChaK9pj3hPPmuCaAi_XUZ2EN2cwnPEja",
    buttonText: "Know More",
    bgcolor: "bg-yellow-500",
  },
  {
    buttonText: "Know Yourself Better",
    title: "Aptitide Test",
    subtitle:
      "measures work value congnitive abilities traits for shaping personal, social and profession growth.",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDg5RWnDUTHjk7KP6LKoMjzhh9OWAUrQbNEg&s",
    bgcolor: "bg-blue-500",
  },
  {
    title: "Ideal Career Test",
    buttonText: "Professional Guidance",
    subtitle:
      "clear the confusion and build a career with confidence, based on personal abilities and current trends",
    url: "https://www.innvictisedutech.com/img/psyc/ideal-career-test-1.jpg",
    bgcolor: "bg-green-500",
  },
  {
    title: "Psychometric Test",
    buttonText: "India or Abroad",
    subtitle:
      "The test report will help you to explore career in order to get started in career search or change of career",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiEpW-sx5IXHcT46QKgBMtbp6JJF0T4VKDdg&s",
    bgcolor: "bg-red-500",
  },
];
const items2 = [
  {
   title: "Career Counslling",
    subtitle:
      "clear the confusion and build a career with confidence, based on personal abilities and current trends",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Afaatpbn0nhfnbgayDPIt0nGSGL7Z84q3w&s",
    buttonText: "Know More",
    bgcolor: "bg-yellow-500",
  },
  {
    title: "Personalit Test",
    subtitle:
      "Thoughtts, behaviour, relation, emotional regulation and more-decoded and defined.",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAucPWqnvbfFqhGJ1PN87asJ7qfe7lPloEw&s",
    bgcolor: "bg-yellow-500",
    buttonText: "Know More",
  },
  {
    title: "IQ Test",
    subtitle:
      "A standardisted way to measure the human intelligence and capability as per their age and acquired learning.",
    url: "https://lifepsych.com.au/wp-content/uploads/2020/10/4336432A-88E0-4A05-A47B-EE8BD71D94CE-scaled-1.jpeg",
    bgcolor: "bg-yellow-500",
    buttonText: "Know More",
  },
  {
    title: "Interest Test",
    subtitle:
      "Intrest Inventory analyses the aspects and fields that privide long term satisfaction to the person.",
    url: "https://www.brainwonders.in/page_images/2020-11-12-10-38-152020-08-27-22-19-52banner-image_(2).webp",
    bgcolor: "bg-yellow-500",
    buttonText: "Know More",
  },
];
export default function Services() {
  return (
    <div className="flex justify-center">
      {/* Carousel */}
      <div className="flex flex-col items-center">
        <h3 className="text-xl md:text-3xl font-semibold my-14 px-8 lg:px-80 text-center heading-font text-black">
          How does Brainwonders services 
          <br />
          help you to sucess in your career?
        </h3>
        <HoverEffectCard />
        <HoverEffectCard2 />
      </div>
      {/* Carousel */}
    </div>
  );
}

const HoverEffectCard = () => {
  return (
    <div className="flex justify-center mx-9 rounded-2xl border-gray-200 border-2 md:mb-14 shadow-md main-hoverbox-container">
      {items.map((card, index) => (
        <div
          className={`w-[22rem] h-[20rem] containerBox relative p-7 overflow-hidden ${
            card.title === "DMIT Test"
              ? "hover:bg-yellow-500"
              : "" || card.title === "Aptitide Test"
              ? "hover:bg-blue-500"
              : "" || card.title === "Ideal Career Test"
              ? "hover:bg-green-500"
              : "" || card.title === "Psychometric Test"
              ? "hover:bg-red-500"
              : ""
          }`}
        >
          <div className="translate-x-[-100%] overlay-content-btn w-full h-full absolute">
            <button className="bg-[#1C4980] text-white py-1 px-5 rounded-lg bottom-10 absolute flex items-center gap-3">
              Explore <FaArrowRight />
            </button>
          </div>

          <div>
            <div className={`w-[80px] pb-4 rounded-full text-center`}>
              <img
                src={card.url}
                alt=""
                className="rounded-full object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold heading-font pb-3 text-black">
              {card.title}
            </h3>
            <p className="">{card.subtitle}</p>

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
                  ? Earth
                  : Management || card.title === "Ideal Career Test"
                  ? Management
                  : Management || card.title === "Psychometric Test"
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

const HoverEffectCard2 = () => {
  return (
    <div className="flex justify-center mx-9 rounded-2xl border-gray-200 border-2 mb-14 shadow-md main-hoverbox-container">
      {items2.map((card, index) => (
        <div
          className={`w-[22rem] h-[20rem] containerBox relative p-7 overflow-hidden ${
            card.title === "Career Counslling"
              ? "hover:bg-yellow-500"
              : "" || card.title === "Personalit Test"
              ? "hover:bg-blue-500"
              : "" || card.title === "IQ Test"
              ? "hover:bg-green-500"
              : "" || card.title === "Interest Test"
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
            <div className={`w-[80px] pb-4 rounded-full text-center`}>
              <img
                src={card.url}
                alt=""
                className="rounded-full object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold heading-font pb-3 text-black">
              {card.title}
            </h3>
            <p>{card.subtitle}</p>

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
                  ? Earth
                  : Management || card.title === "Ideal Career Test"
                  ? Management
                  : Management || card.title === "Psychometric Test"
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



// rough beutyfull card with png images --------------------------------------------------------------->>

// const CourseSelectionCard = () => {
//   return (
//     <div className="relative bg-purple-200 rounded-xl p-6 w-80 shadow-lg h-56">
//       <div className=" z-10">
//         <h2 className="text-white text-xl font-bold">Class 11th & 12th</h2>
//         <p className="text-white mt-2">Guidance for</p>
//         <p className="text-white font-semibold">Course & College selection</p>
//       </div>
//       <div className="absolute bottom-0 right-0 transform translate-x-1/4 ">
//         <img
//           src={Man} // Replace with actual image URL
//           alt="Excited Student"
//           className="h-40"
//         />
//       </div>
//     </div>
//   );
// };


//
