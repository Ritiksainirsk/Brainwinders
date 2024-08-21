import React from "react";

const CourseBanner = () => {
  return (
    <div className="bg-[#07364d] text-white p-6 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center py-10 2xl:px-48">
      <div>
        <h2 className="text-xl lg:text-3xl font-bold text-[#ff7e2d] heading-font">
          Confused about which Course to choose after 10th?
        </h2>
        <p className="mt-2 text-base md:text-lg">
          Take Brainwonders Career Test and make the right decisions for your
          college and course ahead.
        </p>
      </div>
      <button className="bg-[#ff7e2d] text-white text-base md:text-lg font-semibold py-2 px-4 rounded-full">
        Connect Now
      </button>
    </div>
  );
};

export default CourseBanner;
