import React, { useEffect } from "react";
import BlogDetailHero from "../../Components/Blog/BlogDetail/BlogDetailHero";
import ContentSection from "../../Components/Blog/BlogDetail/ContentSection";
import ArticleSection from "../../Components/Blog/BlogDetail/ArticleSection";
import TagCloud from "../../Components/Blog/BlogDetail/TagCloud";
import CourseBanner from "../../Components/Blog/BlogDetail/CourseBanner";
import { useLocation } from "react-router-dom";

export default function BlogDetail() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  
  return (
    <div>
      <BlogDetailHero />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <TagCloud/>
        <ContentSection />
        <ArticleSection />
      </div>
        <CourseBanner/>
    </div>
  );
}
