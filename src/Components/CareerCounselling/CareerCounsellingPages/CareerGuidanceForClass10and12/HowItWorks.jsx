import React, { useEffect } from "react";
import AnimatedSection from "../../../AnimatedSection";

const HowItWorks = ({ data }) => {
  return (
    <div className="mx-auto py-12">
      <h3
        className="text-2xl md:text-[34px] font-bold text-center mb-2 heading-font"
        style={{ fontWeight: "700" }}
      >
        {data.title}
      </h3>
      <p
        className="text-center lg:text-[17px] text-black mb-16 lg:px-64"
        style={{ fontWeight: "500" }}
      >
        {data.description}
      </p>
      <AnimatedSection>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-12 md:space-y-0 px-5 md:space-x-12">
          {data.steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center max-w-[25rem]"
            >
              <div className="relative mb-4">
                <span className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-gray-200 text-gray-800 text-sm font-bold py-1 px-3 rounded-full">
                  {step.step}
                </span>
                <div className="w-64">
                  <img
                    src={step.imgSrc}
                    alt={step.imgAlt}
                    className="rounded-full w-full border-2 border-gray-200"
                    width={120}
                    height={120}
                  />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-black" style={{ textAlign: "justify" }}>
                {step.description}
              </p>
            </div>
          ))}

          {/* Arrow Divs */}
          {/* <div className="hidden md:block text-gray-400 text-4xl pt-80">&#10095;</div> */}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HowItWorks;
