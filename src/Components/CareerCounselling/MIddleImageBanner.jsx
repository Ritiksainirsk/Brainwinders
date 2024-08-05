import React from "react";

const MIddleImageBanner = () => {
  return (
    <>
      <FirstBanner />
      <SecondBanner />
    </>
  );
};

const FirstBanner = () => {
  return (
    <>
      <div className="bg-white p-8 md:p-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold heading-font">
            CAREER COUNSELLING THROUGH BIOMETRICS
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Brainwonders, is the only U.S Patent DMIT Company which helps in
            transformation via brain mapping
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-8">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6zjQLCOk0WBZO0lFK6U17OkPO9jZUuONZoArz2FNTJcajU0c"
              alt="Career Counseling"
              className="w-3/4 md:w-2/3"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 lg:pr-20">
            <p className="text-gray-700 text-sm md:text-base">
              DMIT Dermatoglyphics Multiple Intelligence test (DMIT) is the
              latest and most trending way of mapping a person's brain. In DMIT,
              the fingerprints of the client are taken using a scanner, and then
              a report is generated that gives complete details of the client's
              personality, strengths, weaknesses, and potential. Research
              suggests 85% accuracy for this approach. It is considered more
              effective than any psychometric test. Counselling done on the
              basis of fingerprint reports gives a clearer picture to the
              students to choose a career option based on their abilities and
              skill sets. In India, Brainwonders is the largest DMIT and career
              counselling centre, with 108 branches all across the country.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const SecondBanner = () => {
  return (
    <>
      <div className="bg-gray-50 p-6">
        <h2 className="text-3xl lg:text-4xl font-semibold heading-font text-center my-7">
          CAREER GUIDANCE BY OUR CAREER COUNSELLORS
        </h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-20">
          <div className="md:w-[30%]">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTauSCxFrAo84-YpO4jpScIjwLe6O0qPoyGPMynXGk5JgLyRg5S" // Replace with your image URL
              alt="Career Guidance"
              className="w-full"
            />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <p className="text-gray-600 mt-4">
              Career Guidance is the guidance given to people to help them in
              understanding their abilities, capacities and potential that is
              significant for picking the right career way. Career guidance
              after tenth and career guidance after twelfth are vital as these
              are the significant defining moments in an understudies' life.
            </p>
            <p className="text-gray-600 mt-4">
              Career guidance and advising given by proficient career guidance
              instructors to understudies who are befuddled with regards to what
              career decision to make.
            </p>
            <p className="text-gray-600 mt-4">
              Aptitude Test career instructors are qualified career guides who
              assist understudies with understanding their inborn capacities and
              abilities through different career guidance tests, for example,
              aptitude test and interest test, likewise assist understudies with
              picking the right career way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MIddleImageBanner;
