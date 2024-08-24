import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
const awards = [
  {
    title: "Excellence in Career Counselling",
    subtitle: "Indian School Conclave - 2018, 2019",
  },
  {
    title: "Best in Student Counselling",
    subtitle: "Indian School Conclave 2018, 2019, 2020",
  },
  {
    title: "Contribution in Educational ",
    subtitle: "Education Merit Awards 2017, 2018, 2019, 2020",
  },
  {
    title: "Best in Student Counselling",
    subtitle: "Indian School Conclave 2018, 2019, 2020",
  },
  {
    title: "Contribution in Educational ",
    subtitle: "Education Merit Awards 2017, 2018, 2019, 2020",
  },
];

export default function Hero() {
  useEffect(() => {
    AOS.init({duration: 1000})
  }, []);


  return (
    <>
      <div className=" mb-5">
        <div className="">
          <div className="text-center font-bold py-[5%] md:px-[15%] px-7 md:leading-[38px] leading-8">
            <h3 className="text-[18px] md:text-[22px] text-black"  data-aos="zoom-in">
              We at Brainwonders, India's Largest Career Counselling and DMIT
              Company, strive to help you make an informed decision about your
              career. Based on the analysis you opt for, we assist you in
              understanding your or your child's capabilities better.{" "}
            </h3>
          </div>
        </div>
        {/*  */}
        <div className="flex items-center justify-center w-full bg-[#F7F5FF]  "data-aos="zoom-in-up">
          <Card />
        </div>
      </div>
    </>
  );
}

const Card = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col md:flex-row 2xl:px-48">
      <div className="md:basis-1/2 md:pl-10 p-6 flex flex-col justify-center">
        <h1 className="text-2xl lg:text-4xl font-bold text-[#022F46] heading-font">
          The World's Most Accurate 
          <br />
         <span>Career Test</span> 
        </h1>
        <p className="mt-4 text-black text-xl">
          Take our well researched, accurate DMIT test to 
          <br />
          make the right education, skill and career choice.
        </p>
        <button className="mt-6 px-6 py-2 text-[16px] bg-[#022F46] text-white rounded-2xl hover:bg-[#022f469d] lg:w-32">
          Read More
        </button>
      </div>
      <div className="md:basis-1/2 py-6 px-3 md:px-10 md:pl-0 flex flex-col items-center hero-video-container">
        <iframe
        width="560" height="315" 
          className="w-[100%] md:w-[80%] h-52 md:h-72 rounded-xl heroVideo"
          src="https://www.youtube.com/embed/ISv2-cLrtnY"
          title="YouTube video player"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
        <p className="text-center text-sm mt-2">
          Watch the Founder & CEO of Brainwonders, Mr Manish Naidu, talk about
          <br />
          its DMIT franchise model
        </p>
      </div>
    </div>
  );
};

const AwardCard = ({ title, desc }) => {
  return (
    <>
      <div className="flex justify-center items-center text-center w-72">
        <img
          decoding="async"
          width="60"
          height="132"
          src="https://www.parmsingh.ca/wp-content/uploads/2023/11/VectorElementLeft.svg"
          alt={title}
        />
        <div>
          <div>
            <div>
              <div>
                <h3 className=" text-[18px] heading-font text-black">{title}</h3>
              </div>
            </div>
            <div>
              <div className="text-[15px] text-[#7A7A7A]">
                <p>“{desc}"</p>
              </div>
            </div>
          </div>
        </div>
        <img
          decoding="async"
          width="60"
          height="132"
          src="https://www.parmsingh.ca/wp-content/uploads/2023/11/VectorElement1.svg"
          alt={title}
        />
      </div>
    </>
  );
};


// const BannerComponent = () => {
//   return (
//     <div className="h-auto xl:h-[70vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 px-4 bg-white">
//       <div className=" basis-7/12 md:w-[55rem] flex flex-col items-center md:items-start text-center md:text-left md:ml-10">
//         <p className="text-sm xl:text-lg text-gray-500 heading-font">
//           TRUSTED BY 4,30,000+ USERS
//         </p>
//         <h1 className="text-2xl md:text-4xl md:text-left font-bold text-shadow text-[#022F46] mt-2 heading-font">
//           TO ACHIEVE OUR GOALS
//           <div className=" text-5xl md:text-6xl lg:text-7xl xl:text-8xl my-2 xl:my-3">
//             WE MUST KNOW
//           </div>
//           OUR STRENGTHS!
//         </h1>
//         <p className="text-base md:text-[16px] lg:text-xl text-gray-700 mt-6 md:mt-8 paragraph-font md:text-left">
//           Become self aware. A DMIT Test helps you to identify your Personality,
//           <br />
//           Areas of Interest, and Aptitude level and IQ.
//         </p>
//         <div className="flex space-x-4 mt-4">
//           <button className="bg-[#022F46] text-white px-2 md:px-4 py-2 rounded">
//             Get Your DMIT Test now
//           </button>
//           <button className="bg-[#022F46] text-white px-2 md:px-4 py-2 rounded">
//             Connect Us
//           </button>
//         </div>
//       </div>
//       <div className=" basis-5/12 flex justify-center">
//         <Link to="https://www.mentoria.com">
//           <img
//             src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGZQQObCw82zB9DPtPkJYkOuPvHY4Qu_UeaUkOhMyb6uFQAUux"
//             alt="Banner"
//             className="w-[200px] md:w-[280px] h-auto"
// width={120}
// height={120}
//           />
//         </Link>

//       </div>
//     </div>
//   );
// };
