import React from "react";

const GradeCards = () => {
  const cards = [
    {
      title: "7-8th Grade",
      description:
        "Get the best choice of subjects and extracurriculars for you in sync",
      icon: "🔍", // Replace with your actual icon
      bgColor: "bg-green-100",
    },
    {
      title: "9-10th Grade",
      description:
        "Choose the right streams and study in the right education board",
      icon: "👥", // Replace with your actual icon
      bgColor: "bg-orange-100",
    },
    {
      title: "11-12th Grade",
      description:
        "Know what exams, courses, and colleges will take you to your dream career",
      icon: "📚", // Replace with your actual icon
      bgColor: "bg-pink-100",
    },
    {
      title: "Parents/ Schools",
      description:
        "Get a quick glimpse of what opportunities are shaping up for your students and children",
      icon: "🎓", // Replace with your actual icon
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full md:w-1/4 p-6 h-[250px] border-2 bg-white rounded-xl shadow-md flex flex-col items-center text-center"
        >
          <div
            className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 ${card.bgColor}`}
          >
            <span className="text-3xl">{card.icon}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GradeCards;
