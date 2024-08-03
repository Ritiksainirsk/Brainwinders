import React from "react";
import { FaStar } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Marquee from "react-fast-marquee";

const awards = [
  {
    title: "Excellence in Career Counselling",
    subtitle: "Indian School Conclave - 2018, 2019",
  },
  {
    title: "Best in Student Counselling",
    subtitle: "Indian School Conclave 2018, 2019, 2020",
  },
  {
    title: "Contribution in Educational ",
    subtitle: "Education Merit Awards 2017, 2018, 2019, 2020",
  },
  {
    title: "Best in Student Counselling",
    subtitle: "Indian School Conclave 2018, 2019, 2020",
  },
  {
    title: "Contribution in Educational ",
    subtitle: "Education Merit Awards 2017, 2018, 2019, 2020",
  },
  {
    title: "Best in Student Counselling",
    subtitle: "Indian School Conclave 2018, 2019, 2020",
  },
];

export default function Hero() {
  return (
    <>
      {/* this is hidden div of navbar */}
      <div className="topSpaceDiv"></div>
      {/* <<<<<<<< */}

      <div className="">
        <div className="2xl:mx-36">
          <BannerComponent />

          {/* Carousel */}
          <div className="mb-7">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-semibold my-9 heading-font">
                Awards and Recognition
              </h1>
            </div>
            <div className="2xl:mx-20">
              <Marquee speed={50} direction="left">
                <div className="flex justify-center">
                  {awards.map((award, index) => (
                    <AwardCard
                      key={index}
                      title={award.title}
                      desc={award.subtitle}
                    />
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
          {/* Carousel */}

          {/*  */}
          <div className="text-center text-[22px] font-bold py-[5%] px-[15%] leading-[38px]">
            <p className="">
              We at Brainwonders, India's Largest Career Counselling and DMIT
              Company, strive to help you make an informed decision about your
              career. Based on the analysis you opt for, we assist you in
              understanding your or your child's capabilities better.{" "}
            </p>
          </div>
        </div>
        {/*  */}
        <br />

        <div className="flex items-center justify-center w-full bg-[#F7F5FF] px-16 2xl:px-40">
          <Card />
        </div>
      </div>
    </>
  );
}

const Card = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col md:flex-row ">
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 heading-font">
          The World's Most Accurate Career Test
        </h2>
        <p className="mt-4 text-gray-600 ">
          Take our well researched, accurate DMIT test to make the right
          education, skill and career choice.
        </p>
        <button className="mt-6 px-6 py-2 text-[14px] bg-[#022F46] text-white rounded-2xl hover:bg-[#022f469d] w-44">
          Read More
        </button>
      </div>
      <div className="lg:w-[50%] p-6 aspect-w-16 aspect-h-9 h-80 mb-6 hero-video-container">
        <iframe
          className="w-full h-72 rounded-xl heroVideo"
          src="https://www.youtube.com/embed/ISv2-cLrtnY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const AwardCard = ({ title, desc }) => {
  return (
    <>
      <div className="flex justify-center items-center text-center ml-8 w-72">
        <img
          decoding="async"
          width="60"
          height="132"
          src="https://www.parmsingh.ca/wp-content/uploads/2023/11/VectorElementLeft.svg"
          alt=""
        />
        <div>
          <div>
            <div>
              <div>
                <h2 className=" text-[18px] heading-font">{title}</h2>
              </div>
            </div>
            <div>
              <div className="text-[15px] text-[#7A7A7A]">
                <p>“{desc}"</p>
              </div>
            </div>
          </div>
        </div>
        <img
          decoding="async"
          width="60"
          height="132"
          src="https://www.parmsingh.ca/wp-content/uploads/2023/11/VectorElement1.svg"
          alt=""
        />
      </div>
    </>
  );
};

const BannerComponent = () => {
  return (
    <div className="h-auto xl:h-[70vh] mx-4 md:mx-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 p-4 md:p-6 bg-white">
      <div className="w-full md:w-[55rem] flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-sm lg:text-lg text-gray-500 heading-font">
          TRUSTED BY 4,30,000+ USERS
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-shadow text-[#022F46] mt-2 heading-font">
          TO ACHIEVE OUR GOALS
          <div className="text-4xl md:text-6xl xl:text-9xl my-2 xl:my-3">
            WE MUST KNOW
          </div>
          OUR STRENGTHS!
        </h1>
        <p className="text-base md:text-lg lg:text-2xl text-gray-700 mt-6 md:mt-8 paragraph-font">
          Become self aware. A DMIT Test helps you to identify your Personality,
          Areas of Interest, and Aptitude level and IQ.
        </p>
        <div className="flex space-x-4 mt-4">
          <button className="bg-[#022F46] text-white px-2 md:px-4 py-2 rounded">
            Get Your DMIT Test now
          </button>
          <button className="bg-[#022F46] text-white px-2 md:px-4 py-2 rounded">
            Connect Us
          </button>
        </div>
      </div>
      <div className="w-72 md:w-[39rem] lg:w-96 flex justify-center md:justify-end">
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGZQQObCw82zB9DPtPkJYkOuPvHY4Qu_UeaUkOhMyb6uFQAUux"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
