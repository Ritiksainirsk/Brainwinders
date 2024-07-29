import React from "react";

import { Carousel } from "@material-tailwind/react";

const brands = [
    {
      name: 'OLA',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcVCEaEyRD2I6LHDxQvN8NS1y78VSVjE1Aw&s', // Replace with actual image URL
    },
    {
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png', // Replace with actual image URL
    },
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', // Replace with actual image URL
    },
    {
      name: 'PepsiCo',
      logo: 'https://e7.pngegg.com/pngimages/846/359/png-clipart-pepsico-logo-pepsico-food-drink-diet-pepsi-pepsico-logo-blue-food.png', // Replace with actual image URL
    },
    {
      name: 'Kotak',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ51HGpmIn5CQwTBteGJ8dH5FZj4-V6kuPoQ&s', // Replace with actual image URL
    },
  ];

export default function Carousell() {
  return (
    <>
    {/* this is hidden div of navbar */}
    <div className="topSpaceDiv">  
    </div>
    {/* <<<<<<<< */}
    <div className="">
      <CarouselCustomNavigation />
      <BrandLogos />
    </div>
    </>
  );
}

function CarouselCustomNavigation() {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      autoplayDelay={3500}
      className=""
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative w-full h-64 lg:h-[70vh]">
        <img
          src="https://dcx0p3on5z8dw.cloudfront.net/Aakash/s3fs-public/inline-images/iACST%202022.jpg?XrXCbNUcg1t1Ju9auryvoMzaaFPtYZFc"
          alt="image 1"
          className="absolute inset-0 w-full h-full object"
        />
      </div>
      <div className="relative w-full h-64 lg:h-[70vh]">
        <img
          src="https://natsavacademy.com/wp-content/uploads/2024/04/About-us.webp"
          alt="image 2"
          className="absolute inset-0 w-full h-full "
        />
      </div>
      <div className="relative w-full h-64 lg:h-[70vh]">
        <img
          src="https://www.krmangalam.edu.in/wp-content/uploads/2024/02/348bs_BlogBanner4.webp"
          alt="image 3"
          className="absolute inset-0 w-full h-full "
        />
      </div>
      <div className="relative w-full h-64 lg:h-[70vh]">
        <img
          src="https://blog.rmgoe.org/wp-content/uploads/2022/06/Career-Options-for-PCB-Students.webp"
          alt="image 3"
          className="absolute inset-0 w-full h-full "
        />
      </div>
    </Carousel>
  );
}

const BrandLogos = () => {
  return (
    <div className="px-5 flex gap-3 flex-col items-center lg:flex-row justify-center py-5 bg-gray-100">
      <span className="text-lg font-semibold mb-4 sm:mb-0 sm:mr-6 text-center">
        Trusted By:
      </span>
      <div className="flex flex-wrap items-center justify-around space-x-4 sm:space-x-8 space-y-4 sm:space-y-0">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand.logo}
            alt={brand.name}
            className="h-10 object-contain grayscale"
          />
        ))}
      </div>
    </div>
  );
};
