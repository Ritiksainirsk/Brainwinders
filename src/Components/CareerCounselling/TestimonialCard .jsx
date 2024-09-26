import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AnimatedSection from "../AnimatedSection";

function TestimonialCard() {

  const items = [
    {
      name: "Archna Gupta",
      image: "https://www.shutterstock.com/image-photo/pretty-smiling-joyfully-female-fair-260nw-776697943.jpg",
      text: " Being a homemaker for 18 years, I felt incomplete despite my passion for baking and crafting. Seeking guidance, I turned to SetMyCareer.They helped me identify my strengths and areas for growth, offeringvaluable insights. Dr. Rathi's advice clarified my path forward. I          commend SetMyCareer for their dedication and the hope they provided           for my professional journey",
    },
    {
      name: "Sara shiju",
      image: "https://img.freepik.com/premium-photo/beautiful-south-indian-female-college-student-without-anyone-else-blurred-background_878783-7184.jpg",
      text: " In my testimonial i shere my jaurney, I felt incomplete despite my passion for baking, I turned to SetMyCareer.They helped me identify my strengths and areas for growth, offeringvaluable insights. Dr. Rathi's advice clarified my path forward. I          commend SetMyCareer for their dedication and the hope they provided           for my professional journey",
    },
    {
      name: "Uchawal",
      image: "https://www.shutterstock.com/image-photo/headshot-portrait-happy-millennial-man-260nw-1548802709.jpg",
      text: " My jaurney with Shere my career, I felt incomplete despite my passion for baking. I turned to SetMyCareer.They helped me identify my strengths and areas for growth, offeringvaluable insights. Dr. Rathi's advice clarified my path forward. I          commend SetMyCareer for their dedication and the hope they provided           for my professional journey",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div className=" px-3" >
        <div className="text-center my-8">
          <h2 className="text-2xl md:text-[34px] font-bold mb-2 heading-font text-[#022F46]" style={{fontWeight:"700"}}>
            Reviews
          </h2>
        </div>
        <AnimatedSection>
        <div className="2xl:mx-28">
          <Carousel
            responsive={responsive}
            className="py-20"
            infinite={true}
            autoPlay={true}
            transitionDuration={500}
            autoPlaySpeed={2000}
            draggable={true}
            arrows={false}
          >
            {items.map((item, index) => {
              return (
                <>
                  <ReviewCard name={item.name} image={item.image} text={item.text} key={index}/>
                </>
              );
            })}
          </Carousel>
        </div>
        </AnimatedSection>
      </div>      
    </div>
  );
}

export default TestimonialCard;

const ReviewCard = ({ image, name, text }) => {
  return (
    <div className="max-w-sm mx-auto bg-blue-800 text-white rounded-3xl shadow-md p-6 h-[22rem]">
      <div className="flex items-center justify-center">
        <div className="rounded-full overflow-hidden w-28 h-28 mb-4 mt-[-80px] border-2 border-black">
          <img
            src={image}
            alt="Archna Gupta"
            className="w-full h-full object-cover"
            width={120}
            height={120}
          />
        </div>
      </div>
      <div className="text-center">
        <h4 className="text-xl font-semibold"> {name}</h4>
        <div className="flex justify-center my-2 gap-2">
          <FaStar className="text-orange-200 text-2xl" />
          <FaStar className="text-orange-200 text-2xl" />
          <FaStar className="text-orange-200 text-2xl" />
          <FaStar className="text-orange-200 text-2xl" />
          <FaStar className="text-orange-200 text-2xl" />
        </div>
        <p className="text-sm">"{text}"</p>
      </div>
    </div>
  );
};
