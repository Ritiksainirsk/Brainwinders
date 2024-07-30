import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Man from "../../assets/mansmiles.png";
const items = [
  {
    title: "DMIT Test",
    subtitle:
      "DMIT is the best tool powered by biometrics and genetic intelligence to map all the traits & talents",
    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSROsO2ca-Nj1lKtHD3ChaK9pj3hPPmuCaAi_XUZ2EN2cwnPEja",
    buttonText: "Know More",
  },
  {
    buttonText: "Know Yourself Better",
    title: "Aptitide Test",
      subtitle:
        "measures work value congnitive abilities traits for shaping personal, social and profession growth.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDg5RWnDUTHjk7KP6LKoMjzhh9OWAUrQbNEg&s",
  },
  {
    title: "Ideal Career Test",
    buttonText: "Professional Guidance",
    subtitle:
      "clear the confusion and build a career with confidence, based on personal abilities and current trends",
    url: "https://www.innvictisedutech.com/img/psyc/ideal-career-test-1.jpg",
  },
  {
    title: "Psychometric Test",
    buttonText: "India or Abroad",
    subtitle:
      "The test report will help you to explore career in order to get started in career search or change of career",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiEpW-sx5IXHcT46QKgBMtbp6JJF0T4VKDdg&s",
  },
  // {
  //  title: "Career Counslling",
  //   buttonText: "Know Yourself Better",
  //   subtitle:
  //     "clear the confusion and build a career with confidence, based on personal abilities and current trends",
  //   url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Afaatpbn0nhfnbgayDPIt0nGSGL7Z84q3w&s",
  // },
  // {
  //   title: "Personalit Test",
  //   subtitle:
  //     "Thoughtts, behaviour, relation, emotional regulation and more-decoded and defined.",
  //   url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAucPWqnvbfFqhGJ1PN87asJ7qfe7lPloEw&s",
  // },
  // {
  //   title: "IQ Test",
  //   subtitle:
  //     "A standardisted way to measure the human intelligence and capability as per their age and acquired learning.",
  //   url: "https://lifepsych.com.au/wp-content/uploads/2020/10/4336432A-88E0-4A05-A47B-EE8BD71D94CE-scaled-1.jpeg",
  // },
  // {
  //   title: "Interest Test",
  //   subtitle:
  //     "Intrest Inventory analyses the aspects and fields that privide long term satisfaction to the person.",
  //   url: "https://www.brainwonders.in/page_images/2020-11-12-10-38-152020-08-27-22-19-52banner-image_(2).webp",
  // },
];

export default function Services() {
  return (
    <div>
      {/* Carousel */}
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-semibold my-14 px-8 lg:px-80 text-center">
          How does Brainwonders services help you to sucess in your career?
        </h1>
        <HoverEffectCard/>
      </div>
      {/* Carousel */}
    </div>
  );
}


const Card = ({ title, desc, url }) => {
  return (
    <div className="max-w-xs mx-auto ml-5 bg-white rounded-[3.8rem] border-gray-400 border-2 overflow-hidden p-4 text-center">
      <img className="w-24 h-24 mx-auto" src={url} alt="DMIT Test" />
      <h2 className="mt-4 text-xl font-bold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{desc}</p>
      <button className="mt-4 py-2 font-bold">Read More</button>
    </div>
  );
};

//
const Banner = () => {
  return (
    <div className="w-full bg-[#022F46] text-white p-6 shadow-lg flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-2/3">
        <h2 className="text-2xl font-bold">
          Take the first step towards career clarity!
        </h2>
        <p className="mt-2">
          Discover your best-fit career with the world's most-advanced career
          assessment
        </p>
        <form className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <input
            type="text"
            placeholder="Name"
            className="w-full md:w-1/3 p-2 rounded border border-gray-300 text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-1/3 p-2 rounded border border-gray-300 text-black"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full md:w-1/3 p-2 rounded border border-gray-300 text-black"
          />
        </form>
      </div>
      <div className="md:w-64 mt-4 md:mt-0 flex justify-center">
        <img
          src="https://img.freepik.com/premium-vector/psychological-counseling-concept-psychological-assistance-service-online-mobile-phone-therapist-is-helping-patient-cope-with-stressful-situation-vector-illustration-flat_186332-1291.jpg?w=900"
          alt="Career Clarity"
          className="w-full md:w-auto rounded-full"
        />
      </div>
    </div>
  );
};

const HoverEffectCard = ({bgcolor}) => {
  return (
    <div className="flex justify-center flex-col md:flex-row mx-9 rounded-2xl border-gray-200 border-2 mb-14 shadow-md ">
      {items.map((card, index) => (
        <div
          key={index}
          className={`py-10 relative flex flex-col hover:text-white fff overflow-hidden group justify-between p-6 border-gray-300 border-[1px] transition-all duration-300 w-full sm:w-1/2 md:w-1/4`}
        >
          <div>
            <div className="flex flex-col mb-2 gap-7">
              <div
                className={`w-[80px] rounded-full text-center`}
              >
                <img src={card.url} alt="" className="rounded-full object-cover" />
              </div>
              <h2 className="text-lg font-semibold">{card.title}</h2>
            </div>
            <p className="">{card.subtitle}</p>
          </div>
          <div className="mt-4">
            <button className="py-2 tracking-wider">
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// rough beutyfull card with png images --------------------------------------------------------------->>

// const CourseSelectionCard = () => {
//   return (
//     <div className="relative bg-purple-200 rounded-xl p-6 w-80 shadow-lg h-56">
//       <div className=" z-10">
//         <h2 className="text-white text-xl font-bold">Class 11th & 12th</h2>
//         <p className="text-white mt-2">Guidance for</p>
//         <p className="text-white font-semibold">Course & College selection</p>
//       </div>
//       <div className="absolute bottom-0 right-0 transform translate-x-1/4 ">
//         <img
//           src={Man} // Replace with actual image URL
//           alt="Excited Student"
//           className="h-40"
//         />
//       </div>
//     </div>
//   );
// };
