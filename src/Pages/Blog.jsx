import React, { useEffect } from "react";
import BlogHeader from "../Components/Blog/BlogHeader";
import BlogPosts from "../Components/Blog/BlogPosts ";
import CareerGuidanceSection from "../Components/Blog/CareerGuidanceSection ";
import { useLocation } from "react-router-dom";

export default function Blog() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

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
