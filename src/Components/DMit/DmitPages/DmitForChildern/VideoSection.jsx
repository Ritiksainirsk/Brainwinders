import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function VideoSection() {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);


  return (
    <div>
      <div className="mx-auto py-8 px-5 lg:px-1"  data-aos="fade-up">
        <div className="my-8">
          {/* Section Title */}
          <h2 className="text-2xl lg:text-3xl font-bold text-[#022F46] mb-6 text-center heading-font" style={{fontWeight:"600"}}>
            DMIT Test for Toddlers
          </h2>

          <p className="text-black text-[15px] md:text-[16px] leading-relaxed">
            DMIT Test for toddler and infant is widely accepted. Infancy and
            toddlerhood - which is basically the age of 0-2 years and 3-5 years;
            respectively is where 60% of the brain development happens. Several
            medical and statistical studies also state that early identification
            of suitable learning styles and innate traits can maximise effective
            development by 80%.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Video Section */}
          <div className="lg:w-[45%] bg-gray-100 p-4 rounded-xl md:h-[25rem]">
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
          <div className="lg:w-[55%] space-y-6">
            <p className="text-[15px] md:text-[16px] text-black leading-relaxed">
              When a baby is born - a parent's joy knows no bounds. There are
              several ways in which any parent can always recount how they are
              always putting the best interests of their baby forward. But when
              a child can barely even understand the parents’ speech - how can
              one decide on what is the best for a baby or a toddler?
            </p>
            <p className="text-[15px] md:text-[16px] text-black leading-relaxed">
              Obviously every parent wants to help their child get ahead in
              life. It is not easy though to do that when one does not have any
              direction. To add to it, this is the time when the toddler is
              learning everything. It is like a tabula rasa - a fresh blank
              slate with all kinds of learning opportunities thrown at them. It
              is highly unlikely that the first things that the parents write on
              this blank slate will be a masterstroke. Hence, one has no option
              but to move forward without a clue.
            </p>
            <p className="text-[15px] md:text-[16px] text-black leading-relaxed">
              But Brainwonders US Patented DMIT Test is here to use biometric
              analysis to map the complete inborn profile of a child. There are
              in fact several ways in which Brainwonders DMIT Test assist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
