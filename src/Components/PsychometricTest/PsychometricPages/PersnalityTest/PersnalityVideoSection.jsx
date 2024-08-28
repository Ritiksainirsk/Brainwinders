import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PersnalityVideoSection() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div>
      <div className="mx-auto py-2 px-5 lg:px-5" data-aos="fade-up">
        <div className="my-8">
          {/* Section Title */}
          <h2 className="text-2xl lg:text-3xl font-bold text-[#022F46] mb-2 text-center heading-font" style={{fontWeight:"600"}}>
            WHAT IS PERSONALITY TEST?
          </h2>

          <p className="text-center text-black text-base mb-8">
            It determines the skills, capabilities and more that are possessed
            by the individual.
          </p>

          <p className="text-black text-[15px] md:text-[16px] leading-relaxed">
            Personality tests have gained immense popularity in the digital age,
            providing an accessible and easy way to assess individual
            personality traits. These tests help people identify their most
            fundamental characteristics; these tests are used across all
            generations. The results of a personality test remain unchanged
            regardless of the context or situation, providing a reliable
            understanding of one ' s baseline personality. By utilising such
            tests, individuals can gain deeper insights into their inherent
            qualities to better navigate life ' s challenges.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 md:gap-16">
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
          <div className=" lg:w-[55%] flex items-center">
            <ul className=" space-y-6">
              <li
                className="text-[16px] md:text-[18px] text-black leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                This test can help us to know ourselves better and understand
                the people around us. It can let us dive into areas such as our
                strengths and weaknesses and give us an idea of what to focus on
                in our daily lives. It' s also useful for creating a SWOT
                (Strengths, Weaknesses, Opportunities and Threats) analysis
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
