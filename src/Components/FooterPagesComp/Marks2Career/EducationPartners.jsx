import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EducationPartners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    { id: 1, content: "160 x 135" },
    { id: 2, content: "160 x 135" },
    { id: 3, content: "160 x 135" },
    { id: 4, content: "160 x 135" },
    { id: 5, content: "160 x 135" },
  ];

  return (
    <div>
      <div className="w-full  mx-auto py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Our Education Partners
        </h2>
        <p className="text-center mb-8 2xl:px-64">
          The top researchers, psychologists, educators, and career counselors
          have put together 50 years of their experience to bring the best
          industries and careers for you!
        </p>
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="px-2">
              {/* Add padding here */}
              <div className="border border-gray-300 rounded-lg text-center">
                <div className="w-full h-52 bg-gray-200 flex items-center justify-center mx-auto">
                  {card.content}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default EducationPartners;
