import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      content: `"Ahead legitimate archly lizard forceful this some gurgled thus mercifully thus some guinea bandicoot favorably Our campuses”`,
      author: "Tamim Momo",
      role: "Online Course Teacher",
      avatar: "80 x 80",
    },
    {
      id: 2,
      content: `"Ahead legitimate archly lizard forceful this some gurgled thus mercifully thus some guinea bandicoot favorably Our campuses”`,
      author: "Tamim Momo",
      role: "Online Course Teacher",
      avatar: "80 x 80",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Hear it from our Happy Clients
        </h2>
        <p className="text-center text-gray-600 mb-10">Testimonial</p>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700 mb-4">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {testimonial.author}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
