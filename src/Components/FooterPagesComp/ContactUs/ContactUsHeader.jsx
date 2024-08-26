import React from "react";

export default function ContactUsHeader() {
  return (
    <div>
      <div className="bg-[#E0EFFF] py-12 px-4 md:px-20 h-[40vh] flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-[#022F46] mb-6">
          Contact Us
          </h2>
          <p
            className="text-sm md:text-xl font-semibold text-center"
          >
           Fill up this form and let our expert connect with you!
          </p>
        </div>
      </div>
    </div>
  );
}
