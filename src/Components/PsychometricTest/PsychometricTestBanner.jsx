import React from "react";

export default function PsychometricTestBanner() {
  return (
    <div>
      <div className="bg-[#070954] text-white p-5 lg:p-8 flex flex-col lg:gap-20 md:flex-row items-center justify-between my-10">
        <div className="md:w-3/4 ">
          <h2 className="text-3xl lg:text-4xl font-bold heading-font">
            Not sure if career counselling is right for you?
          </h2>
          <p className="mt-4 text-lg lg:text-xl">   
            Book a Career Brainstorm Session to explore your options with a
            counsellor before opting for the full career guidance solution.
          </p>
          <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-xl">
            KNOW MORE
          </button>
        </div>
        <div className="md:w-1/4 mt-8 md:mt-0 flex justify-center md:justify-end ">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT91vdIdPgbz4fG5KA8VRyi5GTzTCdQa_dJxGx-VJsd2zhjlZtH"
            alt="Career Counselling"
            className="w-full h-auto rounded-[7rem]"
          />
        </div>
      </div>
    </div>
  );
}
