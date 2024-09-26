import React, { useEffect } from "react";
import AnimatedSection from "../AnimatedSection";

const CareerGuidance = () => {
  const items = [
    {
      icon: "https://mindlerimages.imgix.net/tinyimg/005-creative.svg", // replace with actual icon paths
      text: "Enable students to identify their best-fit career with our world-class career assessment and personalised guidance.",
    },
    {
      icon: "https://mindlerimages.imgix.net/tinyimg/002-devices.svg", // replace with actual icon paths
      text: "Empower students to learn all about the professional world with virtual career simulations, exhaustive career library, career blogs and vlogs.",
    },
    {
      icon: "https://mindlerimages.imgix.net/tinyimg/003-certificate.svg", // replace with actual icon paths
      text: "Pave student’s way to their dream college with our end-to-end college application guidance, scholarship drive and corporate internship program.",
    },
    {
      icon: "https://mindlerimages.imgix.net/tinyimg/004-career.svg", // replace with actual icon paths
      text: "Enable schools in creating a career guidance ecosystem in sync with the vision of New Education Policy.",
    },
    {
      icon: "https://mindlerimages.imgix.net/tinyimg/004-career.svg", // replace with actual icon paths
      text: "Empower educators to become International Certified Career Coaches and build a career in career guidance & counselling.",
    },
    {
      icon: "https://mindlerimages.imgix.net/tinyimg/007-startup.svg", // replace with actual icon paths
      text: "Revolutionary assessment platform and technology driven career guidance solutions for educators to boost their career guidance & counselling practice.",
    },
  ];

  return (
    <AnimatedSection>
    <div className="p-6 bg-white" >
      <h3 className="text-2xl lg:text-3xl font-bold text-center mb-2 heading-font text-[#022F46]" style={{fontWeight:"600"}}>
        Shaping the Career Guidance Landscape
      </h3>
      <p className="text-center mb-8">
        Comprehensive career guidance solutions for students, parents, educators
        and schools
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4"
          >
            <img
              src={item.icon}
              alt={`Icon ${index + 1}`}
              className="mb-4 w-16 h-16"
              width={120}
              height={120}
            />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
    </AnimatedSection>
  );
};

export default CareerGuidance;
