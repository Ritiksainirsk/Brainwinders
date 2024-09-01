import React from "react";

export default function HeroSectionOfMarks() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center md:py-10 px-4 2xl:px-44 bg-white">
        <div className="relative hidden md:block w-full md:w-1/2 h-[620px] md:h-[500px] bg-gray-100 flex items-center justify-center">
          <div className="absolute w-[290px] h-[238px] bottom-0 left-0 bg-gray-200 flex items-center justify-center">
            <span className="text-black text-xl">290 X 238</span>
          </div>
          <div className="absolute bottom-20 left-10 w-[200px] h-[80px] bg-[#9BD9B9] rounded-full flex items-center justify-center">
            <span className="text-white text-sm">87% of people learning</span>
          </div>
          <span className="text-black text-3xl md:text-5xl">620 X 621</span>
          <div className="absolute bottom-10 left-20 text-sm text-black">
            Also Editable
          </div>
          <div className="absolute top-0 left-0 w-12 h-12 bg-yellow-300 rounded-full"></div>
          <div className="absolute bottom-10 right-0 w-12 h-12 bg-yellow-300 rounded-full"></div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 text-center md:text-start">
          <h3 className="text-black text-sm font-bold">
            LEARN THE LATEST SKILLS
          </h3>
          <h1 className="text-black text-[30px] md:text-[40px] md:text-4xl font-bold mt-2 mb-4">
            We use AI to predict your suitable careers
          </h1>
          <p className="text-black mb-6">
            Enter your marks and our AI-driven model will tell you your most
            suitable careers in just 7 minutes!
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="bg-[#022F46] text-white py-2 px-6 rounded-lg">
              8th and below
            </button>
            <button className="bg-[#022F46] text-white py-2 px-6 rounded-lg">
              9th, 10th
            </button>
            <button className="bg-[#022F46] text-white py-2 px-6 rounded-lg">
              11th, 12th
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
