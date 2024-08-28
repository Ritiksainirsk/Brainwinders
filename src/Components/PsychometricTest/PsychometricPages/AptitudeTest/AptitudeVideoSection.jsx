import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AptitudeVideoSection() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div>
      <div className="mx-auto py-2 px-5 lg:px-1" data-aos="fade-up">
        <div className="my-8">
          {/* Section Title */}
          <h2 className="text-3xl lg:text-3xl font-bold text-[#022F46] mb-2 text-center heading-font" style={{fontWeight:"600"}}>
            What is Aptitude Test
          </h2>

          <p className="text-center text-black text-xl md:text-[16px] mb-8">It basically refers to one’s ability to do certain kinds of work</p>

          <p className="text-black text-[15px] md:text-[16px] leading-relaxed">
            An aptitude test is an exam used to determine an individual' s skill
            or propensity to succeed in a given activity. Aptitude tests assume
            that individuals have inherent strengths and weaknesses and a
            natural inclination toward success or failure in certain areas as a
            result. Aptitude tests are widely used in schools, by employers, and
            to help individuals make career decisions.
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
          <div className=" lg:w-[55%] px-7 md:px-0 flex flex-col justify-center">
            <p className="text-[16px] ml-[-32px]">Key Takeaways</p>

            <ul className=" list-disc space-y-6">
              <li className="text-[15px] md:text-[16px] text-black leading-relaxed">
                An aptitude test is used to determine an individual' s
                abilities, assessing how they are likely to perform in an area
                in which they may have no prior training or knowledge.
              </li>
              <li className="text-[15px] md:text-[16px] text-black leading-relaxed">
                Schools use aptitude tests to determine if students are inclined
                toward advanced placement classes or specific areas of study,
                such as engineering or a foreign language.
              </li>
              <li className="text-[15px] md:text-[16px] text-black leading-relaxed">
                Human resources departments at some companies will use
                assessment tests to learn about a potential candidate ' s
                strengths and weaknesses
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
