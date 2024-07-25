import React from "react";

const items = [
  {
    title: "Numerical Reasoning",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj59qBGogh49qPyfdNAMm0sx4tbhSjZ9UZAw&s", // Replace with actual image URL
    desc: "30 tests | 480 questions",
  },
  {
    title: "Verbal Reasoning",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqlamjSMzxghT8yOV9hfU5p7PzYEXEVtdecs5qlDcgwLUxyFCK", // Replace with actual image URL
    desc: "30 tests | 450 questions",
  },
  {
    title: "Situational Judgement",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9VJbr58S2LaqbwAPTAdjzbNwRGEp65UDkzGoQOSi8YO5XIA2i", // Replace with actual image URL
    desc: "30 tests | 180 questions",
  },
  {
    title: "Analytical Reasoning",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqknUHl5C2Etr8hjeNzd9B9JTSngzGiYKBPgZLPj294hDnqsEs", // Replace with actual image URL
    desc: "44 tests | 536 questions",
  },
  {
    title: "Logical Reasoning",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSkgcxAlJzqFXIYnfAYvTjmBTREPimrX1JdN8Xu3FR166JV0MF5", // Replace with actual image URL
    desc: "30 tests | 100 questions",
  },
  {
    title: "Basic Numeracy",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGXVqdXuF6H7_8-ykM8LgRs8GdDSoHUUgUOFHakOd2Be59jCAP", // Replace with actual image URL
    desc: "15 tests | 300 questions",
  },
  {
    title: "Diagrammatic Reasoning",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv3qD4M8u4_ee2AzG18jcaiZhFvNbMKrbtXyVt8r9LakyqMhV6", // Replace with actual image URL
    desc: "30 tests | 300 questions",
  },
  {
    title: "Abstract Reasoning",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvNF9NgE_0TY4Rzb6J5tJQ7tj4AZUwOHkmSv2dTOtxwxn8x_uj", // Replace with actual image URL
    desc: "30 tests | 140 questions",
  },
];

export default function Assessment() {
  return (
    <div>
      <div className="px-9">
        <h1 className="text-center font-bold text-2xl my-8">
          Brainwonders Psychometric Assessments
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {items.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                desc={item.desc}
                img={item.img}
              />
            );
          })}
        </div>
      </div>

      <div className="text-center my-10">
        <button className="font-bold text-white bg-[#022F46] py-2 px-4 rounded-lg">View More</button>
      </div>
    </div>
  );
}

function Card({ title, desc, img }) {
  return (
    <div className=" w-72 mx-auto overflow-hidden bg-white shadow-lg rounded-lg">
      <img className="w-full h-48 " src={img} alt="Calculator" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
