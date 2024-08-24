import React from "react";

export default function HeroSection() {
  return (
    <div>
      <div className="bg-[#E3F2FB] p-8 md:p-12 rounded-lg flex flex-col md:flex-row items-center justify-around ">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-gray-800 leading-tight mb-4 md:mb-9">
            Are you ready for
            <br />
            <span className="text-[#043E56]">your child's success story?</span>
          </h1>
          <p className="md:mt-4 text-black text-lg md:text-2xl md:flex md:flex-col">
            <span>With Our DMIT Test, Understand your Child's</span>
            capabilities & plan her future accordingly
          </p>
          <button className="mt-6 bg-[#043E56] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#032F42] transition">
            Get Your DMIT Test now
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-[30%] mt-8 md:mt-0 relative">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTafeyol0A0bYV8vtkPhfe-OzkWTXkte5C62zCD64j77zb05AZT" /* Replace with actual image URL */
            alt="Child holding books"
            className="w-full rounded-md shadow-lg"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
}
