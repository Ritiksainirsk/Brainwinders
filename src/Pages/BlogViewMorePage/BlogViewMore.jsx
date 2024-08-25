import React, { useEffect } from "react";
import BlogHeader from "../../Components/Blog/BlogHeader";
import CareerCounsellingGuidance from "../../Components/Blog/BlogViewMore/CareerCounsellingGuidance";
import { useLocation } from "react-router-dom";

export default function BlogViewMore() {
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
      <CareerCounsellingGuidance />
    </div>
  );
}
