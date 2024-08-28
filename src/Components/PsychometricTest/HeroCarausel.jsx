import React, { useEffect, useState, useRef } from "react";
import "./Css/PsychometricTest.css";
import Slider from 'react-slick';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function HeroCarausel() {
  return (
    <div>
      {/* main Carousel */}
      <Carouselll />
      {/* main Carousel */}

      {/* text content */}
      <div className="px-7 md:px-16 2xl:px-80 my-14">
        <h1 className="text-2xl lg:text-3xl heading-font font-semibold text-center mb-7 text-[#022F46]" style={{fontWeight:'600'}}>
          The World’s Most Powerful Psychometric Career Assessment
        </h1>
        <p className="text-xl leading-7 text-black text-center">
          Using advanced machine learning, psychometrics, and career
          satisfaction data, Brainwonders has reimagined what a career test can
          be. Brainwonders brings to you 30+ scientific and meticulously
          designed Psychometric Career Assessment to discover your true
          potential and interest
        </p>
      </div>
      {/* text content */}
    </div>
  );
}


const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={` absolute top-1/2 transform -translate-y-1/2 left-4 text-black rounded-full z-40 w-20 `}
      onClick={onClick}
    >
      <FaChevronLeft/>
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={` absolute top-1/2 transform -translate-y-1/2 right-4 text-black rounded-full p-2 z-40 lg:mr-16`}
      onClick={onClick}
    >
     <FaChevronRight/>
    </button>
  );
};

const Carouselll = () => {
  const slides = [
    {
      img: "https://www.careerguide.com/images_new/banner_1.png",
      title: "Class 10th",
      description: "Career Counselling Services for Class 10th students contains Stream Selection, Career option Exploration and everything a class 10th student needs to get Confidence and Career Clarity",
      btntext: "Explore services for Class 10th",
    },
    {
      img: "https://www.careerguide.com/images_new/banner_2.png",
      title: "CLASS 11th & 12th",
      description: "Career Counselling Services for 11th & 12th students contain exploration of career options, colleges, competitive exams and admission assistance",
      btntext: "Explore services for Class 11th & 12th",
    },
    {
      img: "https://www.careerguide.com/images_new/banner_3.png",
      title: "College Students",
      description: "Career guidance with a certified career counsellor will give College Students a stronger understanding of what they need to do to pursue the right career in the future",
      btntext: "Explore services for College Students",
    },
    {
      img: "https://www.careerguide.com/images_new/banner_4.png",
      title: "CAREER COUNSELLORS",
      description: "We help you to Learn, Network, Develop, Grow and Earn. Just as 1000s of Counsellors who have accelerated their careers with the help of services below from CareerGuide",
      btntext: "Explore services for Career Counsellors",
    },
    {
      img: "https://www.careerguide.com/images_new/banner_5.png",
      title: "Study Abroad",
      description: "We Fulfill Your Dreams to Study Abroad. Choose from 1000s of universities in 100s of countries for a smart education",
      btntext: "Explore services for Study Abroad",
    },
    {
      img: "https://www.careerguide.com/images_new/banner_6.png",
      title: "Working Professional",
      description: "A career session with a certified career counsellor will give working professionals a strong understanding of job roles & clarity to prosper in their career",
      btntext: "Explore services for Working Professional",
    },
    {
      img: "https://www.careerguide.com/images_new/banner_7.png",
      title: "Explore Colleges",
      description: "Get Detailed Information on Top Colleges in India and Admission News. Get Alerts for Result, Cutoff and Forms for top Entrance, Government, and Banking Exams.",
      btntext: "Explore more Colleges to get enrolled",
    },
  ];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="relative w-full ">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[50vh] md:h-[70vh]">
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              width={120}
              height={120}
            />
            <div
              className="absolute top-0 text-white h-full flex flex-col justify-center items-center lg:items-start w-full lg:w-[40%] px-8 lg:px-16 gap-5 md:gap-7"
                  style={{
                background:
                  "linear-gradient(90deg, rgba(5, 69, 137, 1) 0%, rgba(44, 157, 252, 1) 100%)",
              }}
            >
              <h2 className="text-3xl 2xl:text-[3.5rem] font-bold heading-font text-shadow text-center">
                {slide.title}
              </h2>
              <p className="md:mt-2 2xl:text-xl text-sm leading-7 text-center lg:text-left">
                {slide.description}
              </p>
              <button className="bg-[#F23E36] p-1 md:p-2 text-sm lg:text-lg leading-7 rounded-lg w-full lg:w-[23rem] font-bold">
                {slide.btntext}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};