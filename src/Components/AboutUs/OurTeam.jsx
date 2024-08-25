import React from 'react';

const OurTeam = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-20">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-12">
          {/* Vision Section */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#022F46] mb-4">Our Vision</h2>
            <p className="text-sm md:text-xl text-[#022F46]" style={{textAlign:"justify"}}>
              We are India’s largest career counselling company that works with millions of students every year. 
              We are a team of passionate teammates who are working to make career guidance a mainstream phenomenon. 
              We have the perfect blend of education + technology of excellence + experience and an unmatched passion to make sure that 
              every student progresses on the right path.
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJ3TbPXnAwq7EBMKvk3YLK5GXXehRHYV-2S6KMbzH53ySuGSkb"
              alt="Our Vision"
              className="w-full md:h-[21rem] object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Mission Section */}
          <div className="lg:w-1/2 order-2 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#022F46] mb-4">Our Mission</h2>
            <p className="text-sm h-auto md:text-xl text-[#022F46]"  style={{textAlign:"justify"}}>
              We are India’s largest career counselling company that works with millions of students every year. 
              We are a team of passionate teammates who are working to make career guidance a mainstream phenomenon. 
              We have the perfect blend of education + technology of excellence + experience and an unmatched passion to make sure that 
              every student progresses on the right path.
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-1">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSlZVHcyBsEZUsmH_VUChtfi1uoc0EIu1l_BnAgzDnnvaK7GNJC"
              alt="Our Mission"
              className="w-full h-auto md:h-[21rem] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
