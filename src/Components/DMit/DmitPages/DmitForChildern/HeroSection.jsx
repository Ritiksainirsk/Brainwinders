import React from "react";

export default function HeroSection() {
  return (
    <div>
      <div className="bg-[#E3F2FB] p-8 md:p-10 xl:px-40 rounded-lg flex flex-col md:flex-row items-center justify-around ">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl 2xl:text-[40px] text-gray-800  mb-4 md:flex md:flex-col md:gap-2" style={{fontWeight:"700"}}>
            Are you ready for
            <span className="text-[#043E56]">your child's success story?</span>
          </h1>
          <p className="md:mt-4 text-black text-lg md:text-[16px] md:flex md:flex-col">
            With Our DMIT Test, Understand your Child's
            capabilities & plan her future accordingly
          </p>
          <button className="mt-4 bg-[#043E56] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#032F42] transition">
            Get Your DMIT Test now
          </button>
        </div>

        {/* Right Section */}
        <div className=" mt-8 md:mt-0 relative">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTafeyol0A0bYV8vtkPhfe-OzkWTXkte5C62zCD64j77zb05AZT" /* Replace with actual image URL */
            alt="Child holding books"
            className="w-[450px] h-full rounded-md shadow-lg"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
}
