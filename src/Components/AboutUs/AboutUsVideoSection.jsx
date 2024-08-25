import React from "react";

export default function AboutUsVideoSection() {
  return (
    <div>
      <div className="mx-auto py-2 px-5 lg:px-5">
        <div className="my-8">
          {/* Section Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-[#022F46] mb-6 text-center heading-font">
            Who are we ?
          </h2>
        </div>

        <div className="flex flex-col items-center lg:flex-row gap-5 md:gap-16">
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
                className="text-[16px] md:text-[20px] text-black leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                We are India’s largest career counselling company that works
                with millions of students every year. We are a team of
                passionate teammates who are working to make career guidance a
                mainstream phenomenon.We have the perfect blend of education +
                technology of excellence + experience and an unmatched passion
                to make sure that every student progresses on the right path.
              </li>
              <li
                className="text-[16px] md:text-[20px] text-black leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                We are focused on providing career counselling and guidance
                services to students of classes 9th, 10th, 11th, 12th apart from
                providing 360 degree guidance to undergraduates and college
                students. We also help Private Schools, Non-Profits, Governments
                and CSRs in improving education by imparting the following
                services
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
