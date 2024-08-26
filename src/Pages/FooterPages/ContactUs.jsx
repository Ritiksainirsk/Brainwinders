import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactUsHeader from "../../Components/FooterPagesComp/ContactUs/ContactUsHeader";
import FormSection from "../../Components/FooterPagesComp/ContactUs/FormSection";
import ReviewSection from "../../Components/FooterPagesComp/ContactUs/ReviewSection";
import MapSection from "../../Components/FooterPagesComp/ContactUs/MapSection";
import LastSection from "../../Components/FooterPagesComp/ContactUs/LastSection";

export default function ContactUs() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div>
      <ContactUsHeader />
      <div className="max-w-[1500px] mx-auto overflow-hidden">
        <FormSection />
        <ReviewSection/>
        <MapSection/>
        <LastSection/>
      </div>
    </div>
  );
}
