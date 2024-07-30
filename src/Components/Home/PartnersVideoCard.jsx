import React from "react";

export default function PartnersVideoCard() {
  return (
    <div>
      <PartnerSection />
    </div>
  );
}

const PartnerCard = ({ video, title, description, btcolor }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105">
    <iframe
      className=" w-full h-52"
      src={video}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={name}
    ></iframe>
    <div className="flex">
      <div className="p-4">
        <h3 className="text-lg font-bold text-start ">{title}</h3>
        <p className="text-gray-600 mt-2 text-start ">{description}</p>
      </div>
      <div className="p-4 pt-10">
        <button
          style={{ background: `${btcolor}` }}
          className={`bg-[#f66231] text-white rounded-full h-10 w-10 `}
        >
          ▶
        </button>
      </div>
    </div>
  </div>
);

const PartnerSection = () => (
  <div className="max-w-6xl mx-auto px-4 py-16 text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">
      What Our Partners Say About Us
    </h2>
    <p className="text-gray-600 mb-8">
      350+ top schools have chosen Univariety for alumni networking & career
      guidance solutions
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <PartnerCard
        video="https://www.youtube.com/embed/4wxwS28Khl4"
        title="Schools"
        description="Vouch for us for our world-class counselling services"
        btcolor={"#2ebaf6f7"}
      />
      <PartnerCard
        video="https://www.youtube.com/embed/gwjpgiFV_BY"
        title="Universities"
        description="Partner with us for our unique services"
        btcolor={"#5730f4"}
      />
      <PartnerCard
        video="https://www.youtube.com/embed/cfxfgYoy_qQ"
        title="Counsellors"
        description="Collaborate with us for career transformations"
        btcolor={"#f66231"}
      />
    </div>
  </div>
);
