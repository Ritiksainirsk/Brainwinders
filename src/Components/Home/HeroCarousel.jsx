import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import Img1 from '.././../assets/slider-images/Career Counselling after 12th.webp'
import Img2 from '.././../assets/slider-images/Career Counselling.webp'
import Img3 from '.././../assets/slider-images/Career Guidance After 10th.webp'
import Img4 from '.././../assets/slider-images/Career Guidance for class 8th and 9th students.webp'
import Img5 from '.././../assets/slider-images/DMIT.webp'
import Img6 from '.././../assets/slider-images/To Achieve our Goals we must know our Strenths! (2).png'
import Img7 from '.././../assets/slider-images/To Achieve our Goals we must know our Strenths!.webp'

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={` absolute top-1/2 transform -translate-y-1/2 left-4 text-black rounded-full z-30 w-20 `}
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={` absolute top-1/2 transform -translate-y-1/2 right-4 text-black rounded-full p-2 z-30 lg:mr-16`}
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );
};

export default function HeroCarousel() {
  const slides = [
    {
      img: Img3,
      title: "CLASS 11th & 12th",
      description:
        "Career Counselling Services for 11th & 12th students contain exploration of career options, colleges, competitive exams and admission assistance",
      btntext: "Explore services for Class 11th & 12th",
    },
    {
      img: Img1,
      title: "College Students",
      description:
        "Career guidance with a certified career counsellor will give College Students a stronger understanding of what they need to do to pursue the right career in the future",
      btntext: "Explore services for College Students",
    },
    {
      img: Img6,
      title: "CAREER COUNSELLORS",
      description:
        "We help you to Learn, Network, Develop, Grow and Earn. Just as 1000s of Counsellors who have accelerated their careers with the help of services below from CareerGuide",
      btntext: "Explore services for Career Counsellors",
    },
    {
      img: Img5,
      title: "Study Abroad",
      description:
        "We Fulfill Your Dreams to Study Abroad. Choose from 1000s of universities in 100s of countries for a smart education",
      btntext: "Explore services for Study Abroad",
    },
    {
      img: Img2,
      title: "Working Professional",
      description:
        "A career session with a certified career counsellor will give working professionals a strong understanding of job roles & clarity to prosper in their career",
      btntext: "Explore services for Working Professional",
    },
    {
      img: Img7,
      title: "Explore Colleges",
      description:
        "Get Detailed Information on Top Colleges in India and Admission News. Get Alerts for Result, Cutoff and Forms for top Entrance, Government, and Banking Exams.",
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
    <>
      <div className="relative w-full">
        <Slider {...settings}>
          {/* Static Slide */}
          <div className="relative w-full h-[55vh] lg:h-[70vh]">
            <img
              src={Img4}
              alt="Static Slide"
              className="w-full h-full object-cover"
              width={120}
              height={120}
            />
            <div
              className="absolute top-0 text-white h-full flex flex-col justify-center items-center lg:items-start w-full lg:w-[40%] px-8 lg:px-16 gap-6 lg:gap-4"
            >
              <h1 className="text-4xl 2xl:text-[40px] font-bold leading-[60px] heading-font text-shadow text-center mt-10 md:mt-0" style={{fontWeight:"700"}}>
                Class 10th
              </h1>
              <p className="lg:mt-2 2xl:text-[17px] text-sm leading-7 text-center lg:text-left"  style={{fontWeight:"500"}}>
                Career Counselling Services for Class 10th students contains
                Stream Selection, Career option Exploration and everything a
                class 10th student needs to get Confidence and Career Clarity
              </p>
              <button className="bg-[#F23E36] lg:p-2 p-1 text-[14px] lg:text-lg leading-7 rounded-lg w-full lg:w-[23rem] font-bold">
                Explore services for Class 10th
              </button>
            </div>
          </div>

          {/* Dynamic Slides from Array */}
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full  h-[55vh] lg:h-[70vh]">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                width={120}
                height={120}
                key={index}
              />
              <div
                className="absolute top-0 text-white h-full flex flex-col justify-center items-center lg:items-start w-full lg:w-[40%] px-8 lg:px-16 gap-5 lg:gap-4"
              
                key={index}
              >
                <h2 className="text-3xl 2xl:text-[40px] leading-[60px] heading-font text-shadow text-center lg:text-start" style={{fontWeight:"700"}}>
                  {slide.title}
                </h2>
                <p className="lg:mt-2 2xl:text-[17px] text-sm leading-7 text-center lg:text-left"  style={{fontWeight:"500"}}>
                  {slide.description}
                </p>
                <button className="bg-[#F23E36] lg:p-2 leading-7 rounded-lg w-full lg:w-[23rem] font-bold">
                  {slide.btntext}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
