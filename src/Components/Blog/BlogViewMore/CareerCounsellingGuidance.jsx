import React from "react";

const CareerCounsellingGuidance = () => {
  const articles = [
    {
      title: "BMS Course: Everything From Full Form To Curriculum, Eligibility, Top Colleges & Career Scope!",
      description:
        " Do maths and numbers interest you? Do you have the ability to manage a team? Are you inclined to examine and enhance the organizational processes?",
      date: "June 24, 2024",
      comments: "3 Comments",
      link: "#",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTVHg-l_MhjK4mzxFqDllrELKX0StK-M2DmgV_dnH6yNeuTkik6", // Replace with actual image URL
    },
    {
      title: "Best Diploma Courses After 10th: Everything About High Salary Options For All Streams!",
      description:
        " Have you completed your class 10th? Or are you in class 10th? Do you wish to drop your class 11th and pursue some diploma course?",
      date: "June 14, 2024",
      comments: "3 Comments",
      link: "#",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRVQF0ec8Iqq3_d9k-P_bC912zEnbcIkNA_zSUT6aRuCx3Y3tl6", // Replace with actual image URL
    },
    {
      title: "Best Fashion Designing Colleges in India – Eligibility, Courses, and Admission Process.",
      description:
        " Apart from engineering and medical courses, students are getting inclined towards the fashion trends in India. The growth trends have been interesting, resulting in overall...",
      date: "May 13, 2024",
      comments: "No Comments",
      link: "#",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgx8crMIZUSPPpm6cKdNSRd5sAGkvxNK1Kvdk4lTJQk0Z4qmri", // Replace with actual image URL
    },
    {
      title: "Best Diploma Courses After 10th: Everything About High Salary Options For All Streams!",
      description:
        " Have you completed your class 10th? Or are you in class 10th? Do you wish to drop your class 11th and pursue some diploma course?",
      date: "June 14, 2024",
      comments: "3 Comments",
      link: "#",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRm_9Im2t27A_1K38ea6uyYEDzuK3ChJCe6Q5N-ZYwTYfgzozOp", // Replace with actual image URL
    },
    {
        title: "BMS Course: Everything From Full Form To Curriculum, Eligibility, Top Colleges & Career Scope!",
        description:
          " Do maths and numbers interest you? Do you have the ability to manage a team? Are you inclined to examine and enhance the organizational processes?",
        date: "June 24, 2024",
        comments: "3 Comments",
        link: "#",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTVHg-l_MhjK4mzxFqDllrELKX0StK-M2DmgV_dnH6yNeuTkik6", // Replace with actual image URL
      },
      {
        title: "Best Diploma Courses After 10th: Everything About High Salary Options For All Streams!",
        description:
          " Have you completed your class 10th? Or are you in class 10th? Do you wish to drop your class 11th and pursue some diploma course?",
        date: "June 14, 2024",
        comments: "3 Comments",
        link: "#",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRVQF0ec8Iqq3_d9k-P_bC912zEnbcIkNA_zSUT6aRuCx3Y3tl6", // Replace with actual image URL
      },
      {
        title: "Best Fashion Designing Colleges in India – Eligibility, Courses, and Admission Process.",
        description:
          " Apart from engineering and medical courses, students are getting inclined towards the fashion trends in India. The growth trends have been interesting, resulting in overall...",
        date: "May 13, 2024",
        comments: "No Comments",
        link: "#",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgx8crMIZUSPPpm6cKdNSRd5sAGkvxNK1Kvdk4lTJQk0Z4qmri", // Replace with actual image URL
      },
      {
        title: "Best Diploma Courses After 10th: Everything About High Salary Options For All Streams!",
        description:
          " Have you completed your class 10th? Or are you in class 10th? Do you wish to drop your class 11th and pursue some diploma course?",
        date: "June 14, 2024",
        comments: "3 Comments",
        link: "#",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRm_9Im2t27A_1K38ea6uyYEDzuK3ChJCe6Q5N-ZYwTYfgzozOp", // Replace with actual image URL
      },
      {
        title: "BMS Course: Everything From Full Form To Curriculum, Eligibility, Top Colleges & Career Scope!",
        description:
          " Do maths and numbers interest you? Do you have the ability to manage a team? Are you inclined to examine and enhance the organizational processes?",
        date: "June 24, 2024",
        comments: "3 Comments",
        link: "#",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTVHg-l_MhjK4mzxFqDllrELKX0StK-M2DmgV_dnH6yNeuTkik6", // Replace with actual image URL
      },
      {
        title: "Best Diploma Courses After 10th: Everything About High Salary Options For All Streams!",
        description:
          " Have you completed your class 10th? Or are you in class 10th? Do you wish to drop your class 11th and pursue some diploma course?",
        date: "June 14, 2024",
        comments: "3 Comments",
        link: "#",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRVQF0ec8Iqq3_d9k-P_bC912zEnbcIkNA_zSUT6aRuCx3Y3tl6", // Replace with actual image URL
      },
      {
        title: "Best Fashion Designing Colleges in India – Eligibility, Courses, and Admission Process.",
        description:
          " Apart from engineering and medical courses, students are getting inclined towards the fashion trends in India. The growth trends have been interesting, resulting in overall...",
        date: "May 13, 2024",
        comments: "No Comments",
        link: "#",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgx8crMIZUSPPpm6cKdNSRd5sAGkvxNK1Kvdk4lTJQk0Z4qmri", // Replace with actual image URL
      },
      {
        title: "Best Diploma Courses After 10th: Everything About High Salary Options For All Streams!",
        description:
          " Have you completed your class 10th? Or are you in class 10th? Do you wish to drop your class 11th and pursue some diploma course?",
        date: "June 14, 2024",
        comments: "3 Comments",
        link: "#",
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRm_9Im2t27A_1K38ea6uyYEDzuK3ChJCe6Q5N-ZYwTYfgzozOp", // Replace with actual image URL
      },
  ];

  return (
    <div className="px-4 lg:px-20 py-8 bg-white">
      <h1 className="text-2xl md:text-4xl font-bold text-[#022F46] text-center mb-8">
        Career Counselling & Guidance
      </h1>
      <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {articles.map((article, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg mb-3 font-semibold text-[#022F46]">
                {article.title}
              </h2>
              <p className="text-sm text-[#4D5B6B] mb-4">
                {article.description}
              </p>
              <a
                href={article.link}
                className="text-blue-500 hover:text-blue-700 text-sm font-semibold"
              >
                READ MORE »
              </a>
              <div className="flex justify-between text-xs text-[#4D5B6B] mt-4">
                <span>{article.date}</span>
                <span>{article.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <ul className="flex items-center space-x-2">
          <li>
            <a
              href="#"
              className="px-3 py-1 border rounded-lg text-[#022F46] border-[#022F46] hover:bg-[#022F46] hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-1 border rounded-lg text-[#022F46] border-[#022F46] hover:bg-[#022F46] hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-1 border rounded-lg text-[#022F46] border-[#022F46] hover:bg-[#022F46] hover:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-1 border rounded-lg text-[#022F46] border-[#022F46] hover:bg-[#022F46] hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-1 border rounded-lg text-[#022F46] border-[#022F46] hover:bg-[#022F46] hover:text-white"
            >
              NEXT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CareerCounsellingGuidance;
