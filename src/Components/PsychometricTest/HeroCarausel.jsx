import React from "react";
import { Carousel } from "@material-tailwind/react";

export default function HeroCarausel() {
  return (
    <div>
      {/* this is hidden div of navbar */}
      <div className="topSpaceDiv"></div>
      {/* <<<<<<<< */}

      {/* main Carousel */}
      <CarouselCustomNavigation />
      {/* main Carousel */}

      {/* text content */}
      <div className="px-16 2xl:px-80 my-14">
        <h2 className="text-3xl heading-font font-semibold text-center mb-7">The World’s Most Powerful Psychometric Career Assessment</h2>
        <p className="text-lg leading-7">
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

function CarouselCustomNavigation() {
  const slides = [
    {
      img: "https://www.careerguide.com/images_new/banner_1.png",
      title: "Class 10th",
      description:
        "Career Counselling Services for Class 10th students contains Stream Selection, Career option Exploration and everything aclass 10th students need to get Confidence and Career Clarity",
      btntext: "Explore services for Class 10th",
    },
    {
      img: "https://www.careerguide.com/images_new/banner_2.png",
      title: "CLASS 11th & 12th",
      description:
        "Career Counselling Services for 11th & 12th students contain exploration of career option, colleges, competitive exams and admmission assistance",
      btntext: "Explore services for Class 11th & 12th",
    },
    {
      img: "https://www.careerguide.com/images_new/banner_3.png",
      title: "College Students",
      description:
        "Career guidance with certified career counsellor will give College Students stronger understanding of what they need to do to pursue right career in the future",
      btntext: "Explore services for College Students",
    },
    {
      img: "https://www.careerguide.com/images_new/banner_4.png",
      title: "CAREER COUNSELLORS",
      description:
        "We help you to Learn, Network, Develop, Grow and Earn. Just as 1000s of Counsellors who have accelerated their career with help of services below from CareerGuide",
      btntext: "Explore services for Career Counsellors",
    },
    {
      img: "https://www.careerguide.com/images_new/banner_5.png",
      title: "Study Abroad",
      description:
        "We Fullfill Your Dreams to Study Abroad. Choose from 1000s of universities in 100s of countries for a smart education",
      btntext: "Explore services for Study Abroad",
    },
    {
      img: "https://www.careerguide.com/images_new/banner_6.png",
      title: "Working Professional",
      description:
        "Career session with certified career counsellor will give working professionals strong understanding of job roles & clarity to prosper in their career",
      btntext: "Explore services for Working Professional",
    },
    {
      img: "https://www.careerguide.com/images_new/banner_7.png",
      title: "Explore Colleges",
      description:
        "Get Detailed Information on Top Colleges in India and Admission News. Get Alerts for Result, Cutoff and Forms for top Entrance, Gov and Banking Exams.",
      btntext: "Explore more Colleges to get enrolled",
    },
  ];

  return (
    <Carousel
      autoplay={true}
      loop={true}
      autoplayDelay={3500}
      className="relative"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative w-full h-[28rem] lg:h-[70vh]">
          <img
            src={slide.img}
            alt={`image ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute text-white h-full flex flex-col justify-center w-[40%] px-16 gap-5 "
            style={{
              background:
                "linear-gradient(90deg, rgba(5, 69, 137, 1) 0%, rgba(44, 157, 252, 1) 100%)",
            }}
          >
            <h2 className="text-2xl lg:text-[2.5rem] font-bold leading-[60px] heading-font">
              {slide.title}
            </h2>
            <p className="mt-2 lg:text-lg leading-7">{slide.description}</p>
            <button className=" bg-[#F23E36] p-2 lg:text-lg leading-7 rounded-lg w-[22rem] font-bold">
              {slide.btntext}
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
