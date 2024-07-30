import React from 'react'

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const achievements = [
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnASZ9BEKu4hUZVVyW3AwxQictINHqswS0EbF-LA4vQnY-Oze",
      count: 250000,
      label: "Students Guided",
    },
    {
      icon: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2TeWt2WLV3N4x_SOF7_T_9gvMD78S1SDkz_MMv2TSBou5YUvV",
      count: 120,
      label: "Admission in Top Colleges",
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQexoxRRVtRJwjk3RSTl0_KqWt1SoKSvCwA0ZC_CjcasR_oem2R",
      count: 40000,
      label: "Scholarships",
    },
    {
      icon: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsDIToc2NCNgyEKOkCqe0CBv-cZdYU2rr0NqKEPadcLbflczxa",
      count: 250,
      label: "Diverse Careers",
    },
  ];
export default function Achievment() {
  return (
    <div>
         {/*  */}
         <div className="pt-5 px-5">
            <h2 className=" text-2xl md:text-3xl font-bold mb-2 text-center">
              BRAINWONDERS ACHIEVEMENTS
            </h2>
            <div className="flex overflow-x-scroll justify-center">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  icon={achievement.icon}
                  count={achievement.count}
                  label={achievement.label}
                />
              ))}
            </div>
          </div>
          {/*  */}
    </div>
  )
}




const AchievementCard = ({ icon, count, label }) => {
    const [ref, inView] = useInView({
      triggerOnce: false,
      threshold: 0.5,
    });
  
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 lg:p-6 m-4 flex flex-col lg:flex-row justify-center items-center gap-3">
        <div className="mb-2 lg:mb-0">
          <img src={icon} alt={label} className="w-10 h-10 lg:w-10 lg:h-10" />
        </div>
        <div className="flex flex-col items-start lg:text-left">
          <h3 className=" lg:text-2xl font-bold" ref={ref}>
            {inView ? <CountUp start={0} end={count} duration={7} /> : "0"}
          </h3>
          <p className="text-gray-600 text-sm lg:text-lg">{label}</p>
        </div>
      </div>
    );
  };
  
