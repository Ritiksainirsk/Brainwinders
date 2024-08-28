import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function IqTestVideoSection() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div>
      <div className="mx-auto py-2 px-5 lg:px-5" data-aos="fade-up">
        <div className="my-8">
          {/* Section Title */}
          <h2 className="text-3xl lg:text-3xl text-[#022F46] mb-2 text-center heading-font" style={{fontWeight:"600"}}>
            WHAT IS IQ TEST?
          </h2>

          <p className="text-center text-black text-[16px] mb-8">
            It basically refers to one’s ability to do certain kinds of work
          </p>

          <p className="text-black text-[15px] md:text-[16px] leading-relaxed">
            An IQ test is a set of questions designed to measure an individual'
            s intellectual abilities. It can assess the capacity for
            problem-solving, logical reasoning, and abstract thought. These
            tests are standardised Psychometric tests to measure the
            ‘Intelligence Quotient’ , which is a psychological indicator of
            one’s relative mental and cognitive abilities as per their age.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 md:gap-16 items-center">
          {/* Left Video Section */}
          <div className="lg:w-[35%] bg-gray-100 p-4 rounded-xl md:h-[21rem]">
            <div className="w-full h-full">
              <iframe
                className="rounded-xl h-52 md:h-[80%]"
                width="100%"
                height="300px"
                src="https://www.youtube.com/embed/Uh_-gRHLo6k" // Replace with actual video URL
                title="DMIT Franchise | Best DMIT Franchise"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p className="text-[13px] md:text-base text-center text-[#909090] mt-4">
                Watch the Founder & CEO of Brainwonders, Mr. Manish Naidu, talk
                about its DMIT franchise model
              </p>
            </div>
          </div>

          {/* right Text Section */}
          <div className=" lg:w-[55%]">
            <ul className=" space-y-6">
              <li className="text-[15px] md:text-[18px] text-black leading-relaxed" style={{textAlign:"justify"}}>
                An IQ test is a set of questions designed to measure an
                individual' s intellectual abilities. It can assess the capacity
                for problem-solving, logical reasoning, and abstract thought.
                These tests are standardised Psychometric tests to measure the
                ‘Intelligence Quotient’ , which is a psychological indicator of
                one’s relative mental and cognitive abilities as per their age.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
