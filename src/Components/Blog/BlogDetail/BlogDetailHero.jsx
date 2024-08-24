import React from "react";

export default function BlogDetailHero() {
  return (
    <div>
      <div className="bg-[#E3F2FB] p-5 md:p-8 2xl:p-12 2xl:px-28 rounded-lg flex flex-col xl:flex-row items-center justify-around ">
        {/* Text Section */}
        <div className="md:p-6 flex flex-col gap-2 md:gap-4">
          <h1
            className="text-2xl md:text-4xl font-bold text-gray-800 md:tracking-wide mb-4 text-center md:text-left heading-font md:flex md:flex-col gap-3"
            // style={{ letterSpacing: "3px", lineHeight: "48px" }}
          >
            BMS Course: Everything From Full Form To
            <span>Curriculum, Eligibility, Top Colleges & Career</span>
            <span>Scope!</span>
          </h1>
          <div className="flex flex-col 2xl:flex-row gap-4 2xl:gap-0 2xl:justify-start 2xl:items-center items-center md:items-start mb-4">
            <span className="inline-block bg-[#022F46] text-white px-4 py-1 rounded-full xl:text-lg text-sm font-medium mr-3">
              What Are Courses After 12th
            </span>
            <p className="text-black xl:text-lg text-sm ">
              28 June, 2024 | 4 min read | By Brainwonders
            </p>
          </div>
          <div className="border-b-2 md:border-b-4 border-[#022F46] w-80 mx-auto md:mx-0"></div>{" "}
          {/* Line under the text */}
        </div>

        {/* Image Section */}
        <div className="2xl:w-1/3 lg:w-[40%] md:w-[50%] w-full 2xl:h-64">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSxKNE5u8MO2MSo4qElUAvBJ3zI_zOFzTSopnURYR_NaMzMINvn" // Replace with your actual image URL
            alt="Diploma Courses After 10th"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
