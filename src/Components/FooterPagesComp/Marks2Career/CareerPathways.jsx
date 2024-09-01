import React from "react";

const CareerPathways = () => {
  return (
    <div className="px-7 md:px-0">
      <div className="flex items-center justify-center my-11 bg-white relative overflow-hidden">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8">
          <div className=" w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-black">
              Simplified & Target Career Pathways
            </h2>
            <p className="mt-4 text-gray-700">
              We have matched extensive research on the current job-trends with
              the best of AI-powered technology to ensure that your marks help
              you get swift and accurate career possibilities suited for you!
            </p>
            <button className="mt-6 px-6 py-2 bg-[#022D43] text-white rounded-full hover:bg-[#000000c8] transition-all duration-300">
              Explore More
            </button>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 h-80 bg-gray-200 rounded-lg shadow-lg">
            <span className="text-gray-400 text-4xl">496 x 476</span>
          </div>
        </div>
      </div>

      {/* second */}
      <div className="flex items-center justify-center my-11 bg-white relative overflow-hidden">
        <div className="flex flex-wrap-reverse md:flex-nowrap items-center justify-center gap-8">
          <div className="flex justify-center items-center w-full md:w-1/2 h-80 bg-gray-200 rounded-lg shadow-lg">
            <span className="text-gray-400 text-4xl">496 x 476</span>
          </div>
          <div className=" w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-black">
              For students in 8th Standard & Below
            </h2>
            <p className="mt-4 text-gray-700">
              Your report will get you acquainted with the best selection of
              future-oriented careers waiting for you. Choose Marks2Career to
              plan your educational decisions smartly
            </p>
            <button className="mt-6 px-6 py-2 bg-[#022D43] text-white rounded-full hover:bg-[#000000b4] transition-all duration-300">
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* third */}
      <div className="flex items-center justify-center my-11 bg-white relative overflow-hidden">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8">
          <div className=" w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-black">
              For students in 9th & 10th standard
            </h2>
            <p className="mt-4 text-gray-700">
              We have matched extensive research on the current job-trends with
              the best of AI-powered technology to ensure that your marks help
              you get swift and accurate career possibilities suited for you!
            </p>
            <button className="mt-6 px-6 py-2 bg-[#022D43] text-white rounded-full hover:bg-[#000000c6] transition-all duration-300">
              Get started
            </button>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2 h-80 bg-gray-200 rounded-lg shadow-lg">
            <span className="text-gray-400 text-4xl">496 x 476</span>
          </div>
        </div>
      </div>

      {/* fourth */}
      <div className="flex items-center justify-center my-11 bg-white relative overflow-hidden">
        <div className="flex flex-wrap-reverse md:flex-nowrap items-center justify-center gap-8">
          <div className="flex justify-center items-center w-full md:w-1/2 h-80 bg-gray-200 rounded-lg shadow-lg">
            <span className="text-gray-400 text-4xl">496 x 476</span>
          </div>
          <div className=" w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-black">
              For students in 8th Standard & Below
            </h2>
            <p className="mt-4 text-gray-700">
              Get a quick glimpse of what opportunities are available at your
              doorstep Choose Marks2Career to explore future courses, colleges,
              & exams and accurate career possibilities suited for you!
            </p>
            <button className="mt-6 px-6 py-2 bg-[#022D43] text-white rounded-full hover:bg-[#000000b4] transition-all duration-300">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPathways;
