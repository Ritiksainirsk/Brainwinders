import React, { useEffect } from "react";


import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Achievement() {

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className="hidden md:block mt-20" >
        <h1 className="text-center font-bold text-2xl"> OUR ACHIEVEMENTS </h1>
      <div
        className="bg-[#E7E6E9] flex justify-around p-6 my-6"
      >
        <div className="flex flex-col items-center gap-2 justify-center" ref={ref}>
          <p className="font-extrabold text-[23px] mt-3"> {inView ? <CountUp start={0} end={95} duration={7} /> : '0'} +</p>
          <p className="mt-[6px] text-[1.1rem] font-bold">CORPORATES</p>
        </div>
        
        <div className="flex flex-col items-center gap-2 justify-center" ref={ref}>
          <p className="font-extrabold text-[23px] mt-3"> {inView ? <CountUp start={0} end={1223} duration={5} /> : '0'} +</p>
          <p className="mt-[6px] text-[1.1rem] font-bold">Schools / Institutes</p>
        </div>

        <div className="flex flex-col items-center gap-2 justify-center " ref={ref}>
          <p className="font-extrabold text-[23px] mt-3"> {inView ? <CountUp start={0} end={481003} duration={8} /> : '0'}+</p>
          <p className="mt-[6px] text-[1.1rem] font-bold">Employees Tested</p>
        </div>

        <div className="flex flex-col items-center gap-2 justify-center" ref={ref}>
          <p className="font-extrabold text-[23px] mt-3"> {inView ? <CountUp start={0} end={350} duration={8} /> : '0'} +</p>
          <p className="mt-[6px] text-[1.1rem] font-bold">Employee Engagement Program</p>
        </div>

      </div>
    </div>
  );
}
