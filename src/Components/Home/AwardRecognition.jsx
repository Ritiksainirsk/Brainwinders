import React from "react";
import Marquee from "react-fast-marquee";

export default function AwardRecognition() {
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
    {
      title: "Best in Student Counselling",
      subtitle: "Indian School Conclave 2018, 2019, 2020",
    },
  ];

  return (
    <div>
      <div className="mb-7">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold my-9 heading-font mb-16">
            Awards and Recognition
          </h3>
        </div>
        <div className="2xl:mx-20">
          <Marquee speed={50} direction="left">
            <div className="flex justify-center">
              {awards.map((award, index) => (
                <AwardCard
                  key={index}
                  title={award.title}
                  desc={award.subtitle}
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

const AwardCard = ({ title, desc }) => {
  return (
    <>
      <div className="flex justify-center items-center text-center ml-8 w-72">
        <img
          decoding="async"
          width="60"
          height="132"
          src="https://www.parmsingh.ca/wp-content/uploads/2023/11/VectorElementLeft.svg"
          alt=""
        />
        <div>
          <div>
            <div>
              <div>
                <h2 className=" text-[18px] heading-font">{title}</h2>
              </div>
            </div>
            <div>
              <div className="text-[15px] text-[#7A7A7A]">
                <p className="gotham-font">“{desc}"</p>
              </div>
            </div>
          </div>
        </div>
        <img
          decoding="async"
          width="60"
          height="132"
          src="https://www.parmsingh.ca/wp-content/uploads/2023/11/VectorElement1.svg"
          alt=""
        />
      </div>
    </>
  );
};
