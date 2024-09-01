import React, { useEffect } from "react";
import BlogHeader from "../Components/Blog/BlogHeader";
import CareerGuidanceSection from "../Components/Blog/CareerGuidanceSection ";
import { useLocation } from "react-router-dom";

export default function Blog() {
  const { pathname } = useLocation();

  const fetchData = async()=>{
    try {
      const response = await fetch("http://localhost/projects/brainwonders/phpApi/frontApi.php"); // Notice there's no need for the full URL
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const res = await response.json();
      console.log(res);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchData()
  }, [pathname]);

  return (
    <div>
      <BlogHeader />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <CareerGuidanceSection/>
      </div>
    </div>
  );
}
