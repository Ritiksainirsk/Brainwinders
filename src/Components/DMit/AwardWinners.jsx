import React from "react";
import Marquee from "react-fast-marquee";

const awards = [
  {
    title: "Digital Innovation in Career Counselling",
    subtitle: "Asia's Emerging Brands",
    years: "2019, 2020, 2021",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4WMZsKS9g8ba_4cJXJtqH4bjVaOKdHDNZS2TtBQDmbjRPkoHeTAsvAEWGTchWkhO3ok&usqp=CAU",
  },
  {
    title: "Most Trusted Academic Counsellor",
    subtitle: "National K-12 Summit",
    years: "2018, 2019, 2020, 2022",
    image:
      "https://www.scholarsrosary.co.in/Images/Screen-Shot-2016-12-03-at-7.59.54-PM.png",
  },
  {
    title: "Business Leader The Economic Times",
    subtitle: "National K-12 Summit",
    years: "2018, 2019, 2020, 2021",
    image:
      "https://static.vecteezy.com/system/resources/previews/025/744/455/large_2x/realistic-gold-award-medal-with-red-ribbons-and-engraved-winner-cup-premium-badge-for-winners-and-achievements-photo.jpg",
  },
  {
    title: "Winner of GTF Leadership Summit",
    years: "2019",
    image:
      "https://t3.ftcdn.net/jpg/06/54/22/82/360_F_654228223_IFwivlTmXpwA2mxwUwMYvIPe0JPj3eZ1.jpg",
  },
];

const AwardWinners = () => {
  return (
    <>
      <div className="py-8">
        <h3 className="text-3xl lg:text-4xl font-bold text-center mb-3 heading-font px-5 text-[#022F46]">
          5+ National Award Winners
        </h3>
        <p className="text-center mb-8 px-5">
          Brainwonders has been a recipient of 5 National Awards for being the
          Best Career Counselling Centre and our contribution to Educational
          Counselling.
        </p>
        <div className="px-5">
          <Marquee className="p-9" speed={50} direction="right">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg w-60 md:w-auto p-6 text-center ml-11 border-[1px] border-gray-300 h-72"
              >
                <div className="flex justify-center">
                  <img
                    src={award.image}
                    alt=""
                    className="w-24 md:w-36 "
                    width={120}
                    height={120}
                  />
                </div>
                <div className="text-xl font-bold mb-2">{award.title}</div>
                <div className="text-gray-600 mb-2">{award.subtitle}</div>
                <div className="text-gray-800">{award.years}</div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default AwardWinners;
