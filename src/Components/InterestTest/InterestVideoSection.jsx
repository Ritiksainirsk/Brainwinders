import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function InterestVideoSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div>
      <div className="mx-auto py-2 px-5 lg:px-5"  data-aos="fade-up">
        <div className="my-8">
          {/* Section Title */}
          <h2 className="text-3xl lg:text-3xl font-bold text-[#022F46] mb-2 text-center heading-font" style={{fontWeight:"600"}}>
            What is Interest Test
          </h2>

          <p className="text-center text-black text-xl md:text-[16px] mb-8">
            It basically refers to one’s ability to do certain kinds of work
          </p>

          <p className="text-black text-[15px] md:text-[16px] leading-relaxed font-semibold">
            The interest test is a Psychometric Test that estimates a child’s
            abilities from different angles. It differentiates the numerous
            ranges of abilities and inclinations present in an individual. This
            gives an individual profile to comprehend the changing aspects,
            strengths and areas that require support and improvement.
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
                Children can immensely benefit from the test as it helps one
                understand the overall competencies they are developing and thus
                the parents and mentors are able to guide them accordingly to
                explore various options. Various preschools and schools,
                activity centres and academic organisations have opted for an
                Interest-Aptitude test to guide student’s academic development,
                growth and management.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
