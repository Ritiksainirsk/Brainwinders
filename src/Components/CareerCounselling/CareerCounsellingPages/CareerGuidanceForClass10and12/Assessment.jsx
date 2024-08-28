import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Assessment() {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div>
      <div className="  ">
        <First />
        <Second />
      </div>
    </div>
  );
}

const First = () => {
  return (
    <div className="p-6 bg-white rounded-lg" data-aos="fade-up">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 heading-font" style={{fontWeight:"600"}}>
        Why this assessment?
      </h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-3/5" style={{ textAlign: "justify" }}>
          <p className="text-black mb-4 md:text-[16px]">
            Students often feel lost or confused while selecting a subject or
            stream that’s meant for them. Sometimes, they end up making the
            wrong choice, only to realize the same after they’ve already begun a
            new journey. Times like these can bring pressure, stress, and worry
            – changing your stream is never easy. While changing a stream or
            subject is not the end of the world, it affects the student’s
            confidence and self-esteem.
          </p>
          <ul className="list-disc pl-5 text-black md:text-[16px]">
            <li>
              Psychometric career assessments are specifically designed to help
              students recognize and accept their traits, strengths, weaknesses,
              interests, etc. so that they can make the right decisions
              regarding their education and career.
            </li>
            <li>
              These tests explore the most vital aspects of their personality
              and guide them into making informed decisions.
            </li>
            <li>
              The assessment gives you deep insight into the skills you need to
              pursue the career you are most passionate about.
            </li>
            <li>
              Once you are aware of your capabilities and preferences, you can
              start preparing for your future.
            </li>
          </ul>
        </div>
        <div className="md:w-[40%] w-[100%] md:pl-8 mt-6 md:mt-0">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSra2MmFMelNW55iG_fbI9CWr-cbytdi3hT2X4IyucDFMQ5i5Fc"
            alt="Student studying"
            className="w-full"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

const Second = () => {
  return (
    <div className="p-6 bg-white rounded-lg" data-aos="fade-up">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 heading-font" style={{fontWeight:"600"}}>
        How is this helpful for me?
      </h2>

      <div className="flex flex-col md:flex-row items-center">

        <div className="md:w-[40%] w-[100%] md:pr-8 mb-6 md:mt-0">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSra2MmFMelNW55iG_fbI9CWr-cbytdi3hT2X4IyucDFMQ5i5Fc"
            alt="Student studying"
            className="w-full"
            width={120}
            height={120}
          />
        </div>

        <div className="md:w-3/5" style={{ textAlign: "justify" }}>
          <p className="text-black mb-4 md:text-[18px]">
            For most students today, choosing a stream can be difficult as there
            are too many career options available. Career assessment tests help
            you better understand your educational needs and career
            possibilities based on who you are as an individual
          </p>
          <ul className="list-disc pl-5 text-black md:text-[18px]">
            <li>
              When paired with professional counsel, they help you plan your
              entire education and career
            </li>
            <li>
              This assessment and counseling will assist you to make the right
              call and suggest other paths you can choose. This way can consider
              all possibilities before making a decision.
            </li>
            <li>
              Additionally, our assessment helps you build critical life skills,
              qualities, etc
            </li>
            <li>
              Say goodbye to your uncertainties and work towards a wonderful
              future
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
