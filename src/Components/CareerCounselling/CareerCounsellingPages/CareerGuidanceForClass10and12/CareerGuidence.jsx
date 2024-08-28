import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CareerGuidence() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div>
      <div>
        <div className="mx-auto py-8 px-5 lg:px-1" data-aos="fade-up">
          <div className="my-8">
            {/* Section Title */}
            <h2 className="text-2xl lg:text-3xl font-bold text-[#022F46] mb-2 text-center heading-font" style={{fontWeight:"600"}}>
              Why Brainwonders For Career Guidance after 10th?
            </h2>

            <p className="text-black text-center text-[15px] md:text-[16px] leading-relaxed">
              As a parent, there are several investments- emotional, physical
              and financial commitments one puts towards bringing up a
              <br />
              happy and successful child. Thus, here are some aspects we cater
              to to make sure that your efforts are not a shot in the dark:
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Video Section */}
            <div className="lg:w-[50%]">
              <div className="w-full h-full">
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRrhSzjrTlGlEyAN63Qq9LdcKis2PYQqlcDThJmn433UBau-PBI"
                  alt=""
                  className="w-full h-full object-cover"
                  width={120}
                  height={120}
                />
              </div>
            </div>

            {/* right Text Section */}
            <div className="lg:w-[55%] space-y-6">
              <p className="text-[15px] md:text-[16px] text-black leading-relaxed" style={{textAlign:"justify"}}>
                <span className="font-semibold"> Clarity about your interests and goals: </span>
                <br />
                If you are unsure about your career interests, passions, or
                options available after 10th grade, Brainwonders career guidance
                can provide valuable insights and help you discover your
                strengths and interests.
                <br />
                <span className="font-semibold"> Guidance in choosing the right stream: </span>
                <br />
                Brainwonders can assist you in selecting the appropriate stream
                (Science, Commerce, Arts) based on your aptitude, interests, and
                career aspirations. We provide assessments and counselling to
                help you make an informed decision.
                <br />
                <span className="font-semibold">Detailed career information:</span>
                <br />
                Brainwonders or similar programs can offer in-depth information
                about career options, including the required qualifications, job
                prospects, and growth opportunities. This information can help
                you make informed choices about your educational and career
                paths.
                <br />
                <span className="font-semibold"> Personalized guidance and support: </span>
                <br />
                If you would benefit from personalized guidance, individual
                attention, and support throughout the decision-making process,
                Brainwonders can provide that level of assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
