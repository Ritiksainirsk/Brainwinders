import React, { useEffect } from "react";
import "./css/DmitTest.css";

import { FaAngleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import AnimatedSection from "../AnimatedSection";
import { Link } from "react-router-dom";

export default function DmitTest() {
  return (
    <div>
      <div className="">
        <DMTITestComponent />
      </div>
      {/*  */}
      <div>
        <DmttTestDescription />
      </div>
      {/*  */}
      {/*  */}
      <div className="mb-16">
        <h3
          className="px-2 text-2xl md:text-[34px] text-center my-10 heading-font text-[#022F46]"
          style={{ fontWeight: "700" }}
        >
          BENEFITS OF DMIT TEST FOR ALL AGES!
        </h3>
        <AnimatedSection>
          <CareerOptions />
        </AnimatedSection>
        <AnimatedSection>
          <CareerOptions2 />
        </AnimatedSection>
      </div>
      {/*  */}
    </div>
  );
}

const DMTITestComponent = () => (
  <div className="py-8 px-3 md:px-36 flex justify-center items-center bg-[#E0EFFF]">
    <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
      <div className="text-center lg:text-left">
        <h1
          className="text-3xl lg:text-[40px] mt-8 md:mt-0 font-thin mb-4 text-shadow heading-font leading-[44px] lg:leading-[62px] text-[#022F46]"
          style={{ fontWeight: "700" }}
        >
          DISCOVER YOUR INBORN POTENTIAL AND SHINE WITH DMIT TEST
        </h1>
        <h3
          className="lg:text-[17px] mb-6 leading-[26px] 2xl:pr-56"
          style={{ fontWeight: "500" }}
        >
          Take the world’s most-advanced Career Assessment Test and Find your
          best Career, Course, and college
        </h3>
        <div>
          <button className="bg-[#022F46] text-white py-2 px-4 rounded-lg">
            Get Your DMIT Test now
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="relative overflow-hidden pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/ISv2-cLrtnY"
            title="DMIT Test Video"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-center text-sm mt-2">
          Watch the Founder & CEO of Brainwonders, Mr Manish Naidu, talk about
          its DMIT franchise model
        </p>
      </div>
    </div>
  </div>
);

const DmttTestDescription = () => {
  return (
    <div className=" mx-auto p-6 2xl:px-[9rem]">
      <h3
        className="text-2xl lg:text-[34px] text-center mb-4 heading-font text-[#022F46]"
        style={{ fontWeight: "700" }}
      >
        WHAT IS DMIT TEST?
      </h3>
      <p
        className="mb-4 md:text-[17px] leading-7"
        style={{ fontWeight: "500" }}
      >
        The full form of DMIT is the Dermatoglyphics Multiple Intelligence Test
        (DMIT) is a biometric analysis based on the scientific study of
        fingerprints. It is useful for all age groups and helps understand an
        individual’s potential, personality type, SWOT analysis, learning style,
        career introspection, and more. DMIT is particularly beneficial for
        parents and teachers, providing insights into a child's innate strengths
        and areas that need development. Using information from the child's
        biometrics, the DMIT assessment offers actionable insights and
        appropriate career recommendations. Dermatoglyphics is the study of the
        patterns of skin ridges on human fingers, toes, and soles. It reveals
        the congenital links between our fingers and our intrinsic qualities and
        talents. These patterns are formed from the external ectoderm and
        typically develop during the fetal stage, with fingerprints forming
        between the 13th and 21st weeks. Medical experts and scientists have
        discovered that the distribution of brain cells in different parts of
        the brain can be understood through the DMIT test. This helps reveal a
        person's multiple intelligences, innate potential capabilities, and
        personality. Our fingerprints reveal what we need and how we learn,
        transforming our lives through a holistic education approach.
      </p>
    </div>
  );
};

const CareerOptions = () => {
  const cards = [
    {
      title: "DMIT Test for Toddlers (1-4 years)",
      description:
        "Helps parents make decisions on understanding the child's behavior, parenting styles, and apt teaching methods.",
      buttonText: "Explore Now",
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7AMz_3fqjluWADEO6rkKwJVQRm4IJo6d2THmoqnDEOD5Il7hn",
      iconColor: "#FFD772",
    },
    {
      title: "DMIT Test for Children (4-10 years)",
      description:
        "Understanding their learning styles and intelligence profiles to explore their strengths.",
      buttonText: "Know Yourself Better",
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGY2l14zUv0XW6odm081SYYwR65zTesUruyUDWZAT2Qz3eppf4",
      iconColor: "#9BC9FF",
    },
    {
      title: "DMIT Test for Students (11 to 17 years)",
      description:
        "Highlights the innate primary and secondary learning styles.",
      buttonText: "Professional Guidance",
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTsNMl0KBQhToPa0Ux-hNggAjvKNCyObZ4-T0X0TSGlqvaA-caX",
      iconColor: "#FFB1CC",
    },
    {
      title: "DMIT Test for Career Guidance (18 years and above)",
      description: "Boosts professional growth and ensures success on the job.",
      buttonText: "India or Abroad",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuG7gyuVrX-6QEsKfLznnXQgNxoBvs1zO5UKcabWalDrb_uQKo",
      iconColor: "#C8BBFF",
    },
  ];
  return (
    <div className="flex justify-center rounded-2xl border-gray-200 md:mb-14 main-hoverbox-container">
      {cards.map((card, index) => (
        <Link
          to={
            card.title === "DMIT Test for Children (4-10 years)"
              ? "/dmit/dmitforchildern"
              : ""
          }
        >
          <div
            className={`w-[25rem] h-[25rem] border-2 border-gray containerBox relative p-7 overflow-hidden ${
              card.title === "DMIT Test for Toddlers (1-4 years)"
                ? "hover:bg-yellow-500"
                : "" || card.title === "DMIT Test for Children (4-10 years)"
                ? "hover:bg-blue-500"
                : "" || card.title === "DMIT Test for Students (11 to 17 years)"
                ? "hover:bg-green-500"
                : "" ||
                  card.title ===
                    "DMIT Test for Career Guidance (18 years and above)"
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
                className={`w-[85px] h-[100px] pb-4 rounded-full text-center`}
              >
                <img
                  src={card.icon}
                  alt=""
                  className=" h-full w-full rounded-full object-cover"
                  width={120}
                  height={120}
                />
              </div>

              <h3 className="text-xl font-semibold heading-font pb-3 leading-6">
                {card.title}
              </h3>
              <p className="mb-8">{card.description}</p>

              <div className="mt-4 btnn ">
                <button className="py-2 tracking-wider flex items-center gap-3">
                  Explore Now <FaAngleRight />
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const CareerOptions2 = () => {
  const cards = [
    {
      title: "DMIT Test for Adult (25 years and above)",
      description:
        "Helps parents make decisions on understanding the child's behavior, parenting styles, and apt teaching methods.",
      buttonText: "Explore Now",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu4iiu98uczFUIyiu1k_RK2tZ4GtlGY5OAKaaW12HwXC8xhoKk",
      iconColor: "#FFD772",
    },
    {
      title: "DMIT Test for institutional (all years)",
      description:
        "Understanding their learning styles and intelligence profiles to explore their strengths.",
      buttonText: "Know Yourself Better",
      icon: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRr32UKvo3htclj5II8XhdMzgbMsoY9u2jG42jOjAaleogqIZmu",
      iconColor: "#9BC9FF",
    },
    {
      title: "DMIT Test for Students (11 to 17 years)",
      description:
        "Highlights the innate primary and secondary learning styles.",
      buttonText: "Professional Guidance",
      icon: "https://media.istockphoto.com/id/1369754239/photo/university-student-in-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=LjFVDfjusWBjYTNliHV9DyXfApPGc8DmgBGEtfVgQ0Q=",
      iconColor: "#FFB1CC",
    },
    {
      title: "DMIT Test for Career Guidance (18 years and above)",
      description: "Boosts professional growth and ensures success on the job.",
      buttonText: "India or Abroad",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTLeD3eeWIg0ceOxjDdQxGHMxBZr27D2XTrA&s",
      iconColor: "#C8BBFF",
    },
  ];
  return (
    <div className="flex justify-center rounded-2xl border-gray-200 mb-14 main-hoverbox-container">
      {cards.map((card, index) => (
        <div
          className={`w-[25rem] h-[25rem] border-2 border-gray containerBox relative p-7 overflow-hidden ${
            card.title === "DMIT Test for Adult (25 years and above)"
              ? "hover:bg-pink-300"
              : "" || card.title === "DMIT Test for institutional (all years)"
              ? "hover:bg-orange-300"
              : "" || card.title === "DMIT Test for Students (11 to 17 years)"
              ? "hover:bg-gray-400"
              : "" ||
                card.title ===
                  "DMIT Test for Career Guidance (18 years and above)"
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
            <div className={`w-[80px] h-[100px] pb-4 rounded-full text-center`}>
              <img
                src={card.icon}
                alt=""
                className=" h-full w-full rounded-full object-cover"
                width={120}
                height={120}
              />
            </div>

            <h3 className="text-xl font-semibold heading-font pb-3 leading-6">
              {card.title}
            </h3>
            <p className="mb-8">{card.description}</p>

            <div className="mt-4 btnn ">
              <button className="py-2 tracking-wider flex items-center gap-3">
                Explore Now <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
