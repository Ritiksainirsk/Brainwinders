import React from "react";

const HowItWorks = () => {
  return (
    <div className="mx-auto py-12">
      <h3 className="text-4xl font-bold text-center mb-8 heading-font">
        Curious about how it works?
      </h3>
      <p className="text-center text-[20px] text-black mb-16">
        Discover how Brainwonders has empowered over 4.3 lakhs+ individuals and
        collaborated
        <br />
        with 1220+ top schools across the country to help them become
        #CareerReady.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-12 md:space-y-0 px-5 md:space-x-12">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center max-w-[25rem]">
          <div className="relative mb-4">
            <span className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-gray-200 text-gray-800 text-sm font-bold py-1 px-3 rounded-full">
              STEP - 1
            </span>
            <div className="w-64">
              <img
                src="https://setmycareer.com/img/completing-online-tests.webp"
                alt="Evaluation"
                className="rounded-full w-full border-2 border-gray-200"
                width={120}
                height={120}
              />
            </div>
          </div>
          <h3 className="font-bold text-xl mb-2">
            Take the Brainwonders DMIT test for career assessment
          </h3>
          <p className="text-black" style={{ textAlign: "justify" }}>
            DMIT Dermatoglyphics Multiple Intelligence test (DMIT) is the latest
            and most trending way of mapping a person ' s brain. In DMIT, the
            fingerprints of the client are taken using a scanner, and then a
            report is generated that gives complete details of the client' s
            personality, strengths, weaknesses and potential. Research suggests
            85% accuracy for this approach. It is considered more effective than
            any psychometric test. Counselling done on the basis of fingerprint
            reports gives a clearer picture to the students to choose a career
            option based on their abilities and skill sets. In India,
            Brainwonders is the largest DMIT and career counselling centre, with
            108 branches all across the country
          </p>
        </div>

        {/* Arrow */}
        <div className="hidden md:block text-gray-400 text-4xl pt-80">&#10095;</div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center max-w-[25rem]">
          <div className="relative mb-4">
            <span className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-gray-200 text-gray-800 text-sm font-bold py-1 px-3 rounded-full">
              STEP - 2
            </span>
            <div className="w-64">
              <img
                src="https://setmycareer.com/img/live-sessions.webp"
                alt="Guidance" 
                className="rounded-full w-full border-2 border-gray-200"
                width={120}
                height={120}
              />
            </div>
          </div>
          <h3 className="font-bold text-xl mb-2">1-on-1 career counselling </h3>
          <p className="text-black " style={{ textAlign: "justify" }}>
            Brainwonders ' 1-on-1 career counselling aims to help individuals
            comprehend their strengths, talents, and interests, enabling them to
            set achievable goals and develop valuable skill sets for their
            chosen career paths. Individuals can make counselling decisions
            about their careers by engaging in this counselling session,
            enhancing their chances of success and fulfilment in their
            professional lives. The counselling process involves evaluating and
            improving an individual' s skills, aptitude, competence, and flair
            to support personal, social, and professional growth.
          </p>
        </div>

        {/* Arrow */}
        <div className="hidden md:block text-gray-400 text-4xl pt-80">&#10095;</div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center max-w-[25rem]">
          <div className="relative mb-4">
            <span className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-gray-200 text-gray-800 text-sm font-bold py-1 px-3 rounded-full">
              STEP - 3
            </span>
            <div className="w-64">
              <img
                src="https://setmycareer.com/img/recommendations.webp"
                alt="Strategizing"
                className="rounded-full w-full border-2 border-gray-200"
                width={120}
                height={120}
              />
            </div>
          </div>
          <h3 className="font-bold text-xl mb-2">
            Gain insights from industry experts
          </h3>
          <p className="text-black" style={{ textAlign: "justify" }}>
            Our team helps you understand your strengths and goals. Whether you
            ' re starting or looking to grow, we offer personalized tips to help
            you succeed. Our knowledge of different industries guides you
            towards the right path. Trust us to support you in making
            intelligent career choices and reaching your potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
