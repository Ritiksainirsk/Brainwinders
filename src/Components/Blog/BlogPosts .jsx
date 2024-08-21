import React from "react";

export default function BlogPosts() {
  return (
    <div>
      <FirstPostSection />
      <HandpickedPosts />
    </div>
  );
}

const FirstPostSection = () => {
  const posts = [
    {
      id: 1,
      title: "Toughest Exams in India 2022: The Hardest Competitions",
      category: "Medicine",
      date: "15 July, 2022",
      readTime: "4 min read",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cpsvMMqkPZNQAfqOvBxEWf_CG4XNrNrM--z9GYpyWBlWyal7",
    },
    {
      id: 2,
      title: "Top Highest Salary Jobs After 12th Commerce Courses",
      category: "Engineering",
      date: "15 July, 2022",
      readTime: "4 min read",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cpsvMMqkPZNQAfqOvBxEWf_CG4XNrNrM--z9GYpyWBlWyal7",
    },
    {
      id: 3,
      title: "Top Highest Salary Jobs After",
      category: "Medicine",
      date: "15 July, 2022",
      readTime: "4 min read",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQT39nZ9r4EOIL9AcXUxdc9lSSo6XZYOh1ZhycnHort1iINKxOL",
    },
    {
      id: 4,
      title: "Top Highest Salary Jobs After 12th Commerce Courses",
      category: "Engineering",
      date: "15 July, 2022",
      readTime: "4 min read",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQT39nZ9r4EOIL9AcXUxdc9lSSo6XZYOh1ZhycnHort1iINKxOL",
    },
  ];

  return (
    <div className="py-8 px-4">
      <h2 className="md:text-2xl text-xl font-semibold mb-4 heading-font">Latest</h2>
      <div className="border-b-2 border-black mb-4"></div>{" "}
      {/* Line below heading */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex justify-between items-center border-b pb-4"
          >
            <div>
              <h3 className="text-lg md:text-xl font-bold">{post.title}</h3>
              <span className="inline-block bg-[#022F46] text-white px-4 py-1 rounded-full text-sm md:text-lg font-medium my-2">
                {post.category}
              </span>
              <p className="text-gray-500 text-sm">
                {post.date} | {post.readTime}
              </p>
            </div>
            <div>
              <img
                src={post.image}
                alt={post.title}
                className="w-32 h-20 rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HandpickedPosts = () => {
  const posts = [
    {
      id: 1,
      title: "Top Highest Salary Jobs After",
      category: "Medicine",
      date: "15 July, 2022",
      readTime: "4 min read",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cpsvMMqkPZNQAfqOvBxEWf_CG4XNrNrM--z9GYpyWBlWyal7",
    },
    {
      id: 2,
      title: "Top Highest Salary Jobs After 12th Commerce Courses",
      category: "Engineering",
      date: "15 July, 2022",
      readTime: "4 min read",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQT39nZ9r4EOIL9AcXUxdc9lSSo6XZYOh1ZhycnHort1iINKxOL",
    },
    {
      id: 3,
      title: "Top Highest Salary Jobs",
      category: "Management",
      date: "15 July, 2022",
      readTime: "4 min read",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2X0cezJ0o6dX5MzFfQWYTGNQ-0_6XNDDP7TpW0_FIRO-Hrye3",
    },
  ];

  return (
    <div className="py-8 px-4">
      <h2 className="md:text-2xl text-xl font-semibold mb-2 heading-font">Handpicked</h2>
      <div className="border-b-2 border-black mb-4"></div>
      {/* Line below heading */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 md:h-64 rounded-lg object-cover mb-4"
            />
            <h3 className="md:text-xl text-lg font-bold">{post.title}</h3>
            <div className="flex justify-between items-center">
              <span className="inline-block bg-[#022F46] text-white px-5 py-1 rounded-full text-sm md:text-lg font-medium my-2">
                {post.category}
              </span>
              <p className="text-gray-500 text-sm">
                {post.date} | {post.readTime}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
