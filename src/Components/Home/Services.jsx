import React from "react";

const items = [
  {
    title: "DMIT Test",
    subtitle:
      "DMIT is the best tool powered by biometrics and genetic intelligence to map all the traits & talents",
    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSROsO2ca-Nj1lKtHD3ChaK9pj3hPPmuCaAi_XUZ2EN2cwnPEja",
    buttonText: "Know More",
    bgcolor: "bg-yellow-500",
  },
  {
    buttonText: "Know Yourself Better",
    title: "Aptitide Test",
    subtitle:
      "measures work value congnitive abilities traits for shaping personal, social and profession growth.",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDg5RWnDUTHjk7KP6LKoMjzhh9OWAUrQbNEg&s",
    bgcolor: "bg-blue-500",
  },
  {
    title: "Ideal Career Test",
    buttonText: "Professional Guidance",
    subtitle:
      "clear the confusion and build a career with confidence, based on personal abilities and current trends",
    url: "https://www.innvictisedutech.com/img/psyc/ideal-career-test-1.jpg",
    bgcolor: "bg-green-500",
  },
  {
    title: "Psychometric Test",
    buttonText: "India or Abroad",
    subtitle:
      "The test report will help you to explore career in order to get started in career search or change of career",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiEpW-sx5IXHcT46QKgBMtbp6JJF0T4VKDdg&s",
    bgcolor: "bg-red-500",
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
        <h1 className="text-2xl md:text-3xl font-semibold my-14 px-8 lg:px-80 text-center heading-font">
          How does Brainwonders services help you to sucess in your career?
        </h1>
        <HoverEffectCard />
      </div>
      {/* Carousel */}
    </div>
  );
}

const HoverEffectCard = ({ bgcolor }) => {
  return (
    <div className="flex justify-center flex-col md:flex-row mx-9 rounded-2xl border-gray-200 border-2 mb-14 shadow-md ">
      {items.map((card, index) => (
        <div
          key={index}
          className={`py-10 relative ${
            card.title === "DMIT Test"
              ? "hover:bg-yellow-500"
              : "" || card.title === "Aptitide Test"
              ? "hover:bg-blue-500"
              : "" || card.title === "Ideal Career Test"
              ? "hover:bg-green-500"
              : "" || card.title === "Psychometric Test"
              ? "hover:bg-red-500"
              : ""
          } flex flex-col hover:text-white fff second-fff overflow-hidden group justify-between p-6 border-gray-300 border-[1px] transition-all duration-300 w-full sm:w-1/2 md:w-1/4`}
        >
          <div>
            <div className="flex flex-col mb-2 gap-7">
              <div className={`w-[80px] rounded-full text-center`}>
                <img
                  src={card.url}
                  alt=""
                  className="rounded-full object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold heading-font">
                {card.title}
              </h2>
            </div>
            <p className="">{card.subtitle}</p>
          </div>
          <div className="mt-4">
            <button className="py-2 tracking-wider">{card.buttonText}</button>
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
