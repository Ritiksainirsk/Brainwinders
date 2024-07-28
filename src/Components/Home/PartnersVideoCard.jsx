import React from "react";

export default function PartnersVideoCard() {
  return (
    <div>
      <PartnerSection />
    </div>
  );
}

const PartnerCard = ({ image, title, description,btcolor }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105">
    <img
      src={image}
      alt={title}
      className="w-full h-48 sm:object-cover transition-transform duration-300 transform hover:scale-110"
    />
    <div className="flex">
      <div className="p-4">
        <h3 className="text-lg font-bold text-start ">{title}</h3>
        <p className="text-gray-600 mt-2 text-start ">{description}</p>
      </div>
      <div className="p-4 pt-10">
        <button style={{background:`${btcolor}`}} className={`bg-[#f66231] text-white rounded-full h-10 w-10 `}>▶</button>
      </div>
    </div>
  </div>
);

const PartnerSection = () => (
  <div className="max-w-6xl mx-auto px-4 py-16 text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Partners Say About Us</h2>
    <p className="text-gray-600 mb-8">
      350+ top schools have chosen Univariety for alumni networking & career
      guidance solutions
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <PartnerCard
        image="https://cdn.prod.website-files.com/6156c92cb3f1a26201745fa2/621a88595bacd54955617fcd_61b8b5c9d21d94ec0f76f6d8_Blog-%2025%20Cover-min.png"
        title="Schools"
        description="Vouch for us for our world-class counselling services"
        btcolor={"#2ebaf6f7"}
      />
      <PartnerCard
        image="https://imageresizer.static9.net.au/13fNzDxrjHZvqYm-s0AYoaGU4us=/396x0/https%3A%2F%2Fprod.static9.net.au%2Ffs%2Fb673699e-7e92-40c7-b61f-eaba8cf45704"
        title="Universities"
        description="Partner with us for our unique services"
        btcolor={"#5730f4"}
      />
      <PartnerCard
        image="https://www.shutterstock.com/shutterstock/videos/11246702/thumb/1.jpg?ip=x480"
        title="Counsellors"
        description="Collaborate with us for career transformations"
        btcolor={"#f66231"}
      />
    </div>
  </div>
);
