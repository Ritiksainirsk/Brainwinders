import React from "react";
import SuitablityBanner from "./SuitablityBanner";

const CareerSuitabilitySection = () => {
  return (
    <div className="">
      <div>
        <CareerFitSection />
      </div>
      <div>
        <SuitablityBanner/>
      </div>
    </div>
  );
};

export default CareerSuitabilitySection;

const CareerFitSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 mx-auto px-10 lg:px-20">
      {/* Left Section */}
      <div className="md:w-2/3">
        <h2 className="text-3xl font-light text-black mb-4 heading-font">
          Confused about the best <span className="font-bold">career-fit</span>{" "}
          for you?
        </h2>
        <p className="text-gray-600 mb-4">
          Too many choices can be daunting! Analyse your aptitude, capabilities,
          personality and interests with our scientific psychometric tool, and
          get advised on the best career options for you. It can also derive
          whether or not you are suitable for a particular career or role type.
        </p>
        <a href="#" className="text-blue-600 font-bold">
          Try our CollegeDekho Career Compass Test &rarr;
        </a>
      </div>

      {/* Right Section */}
      <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkX0S924Kg-a0Gdm1pz-Dzv_X23VDX6OYE7AE8VzV7HQrOODxz"
          alt="Career Fit Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};
