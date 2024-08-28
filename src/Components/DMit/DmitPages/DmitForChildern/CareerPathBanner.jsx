import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CareerPathBanner() {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);

  
  return (
    <div>
      <div className=" p-8 " data-aos="fade-up">
        <h3 className="text-2xl md:text-3xl font-semibold mb-12  text-center mt-10 heading-font text-[#022F46]" style={{fontWeight:"600"}}>
          How DMIT Test for Students helps
          <br />
          in Choosing a Right Career
        </h3>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 text-lg">
            <p className="mb-4 text-black text-[15px] md:text-[16px]" style={{ textAlign: 'justify' }}>
              DMIT Test for students helps in choosing the Right Career. DMIT
              Test determines the strengths and comfort zones of an individual
              through Brain Mapping. It helps in identifying, which parts of
              your brain are your strength compared to others. This can be
              subsequently mapped with the career choices to arrive at the best
              fit career. It is an accepted fact that given a chance, every
              individual would like to work in his/her comfort zones. DMIT Test
              for students helps in identifying the comfort zones and hence
              choosing a Right Career option. It is quite evident today that the
              number of cases of drop-out from colleges and universities is
              increasing daily. If a student feels at anytime in life that
              he/she has not taken the right decision in selecting a course or
              career, he would like to drop-out. This wastes a lot of money of
              parents, which has gone into admission and fee. At the same time,
              it also wastes the time and effort of the student. Hence DMIT Test
              for students is a wonderful tool in identifying your core
              competencies and choose the right career.
            </p>
          </div>
          <div className="flex-1 mb-4 md:mb-0 md:mr-4">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR1J1Ysgd2WWNH0Qj14IzwAdIhx5as9JoXA1hvir-KXfe8XMzTR"
              alt="Brain and Finger Connection"
              className="w-full h-auto"
              width={120}
              height={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
