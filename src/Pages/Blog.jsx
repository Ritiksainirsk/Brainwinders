import React from "react";
import BlogHeader from "../Components/Blog/BlogHeader";
import BlogPosts from "../Components/Blog/BlogPosts ";
import CareerGuidanceSection from "../Components/Blog/CareerGuidanceSection ";

export default function Blog() {
  return (
    <div>
      <BlogHeader />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <BlogPosts />
        <CareerGuidanceSection/>
      </div>
    </div>
  );
}
