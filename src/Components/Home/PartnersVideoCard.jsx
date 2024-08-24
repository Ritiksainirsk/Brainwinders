import React, { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PartnersVideoCard() {
    
  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);

  return (
    <div  data-aos="fade-right">
      <PartnerSection />
    </div>
  );
}

const PartnerCard = ({ video, title, description, btcolor, id, thumbnail }) => {
  const iframeRef = useRef(null);

  const handleDialogClose = () => {
    iframeRef.current.src = ""; // Remove the src attribute to stop the video
  };

  const handleDialogOpen = () => {
    iframeRef.current.src = video; // Restore the src attribute to start the video
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105" >
      <img className="w-full h-52" src={thumbnail} alt={title}  width={120} height={120} data-aos="zoom-in" />
      <div className="flex" data-aos="zoom-in">
        <div className="p-4">
          <h3 className="text-xl text-start heading-font font-bold text-black">{title}</h3>
          <p className="text-black mt-2 text-start ">{description}</p>
        </div>
        <div className="p-4 pt-10">
          <button
            style={{ background: btcolor }}
            className="btn rounded-full text-white border-none"
            onClick={() => {
              handleDialogOpen();
              document.getElementById(`modal_${id}`).showModal();
            }}
          >
            ▶
          </button>
          <dialog
            id={`modal_${id}`}
            className="modal"
            onClose={handleDialogClose}
          >
            <div className="modal-box p-0 w-[80vw]">
              <iframe
                ref={iframeRef}
                className="w-full h-80"
                src=""
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
              ></iframe>
              <form method="dialog" className="modal-backdrop">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:text-white font-bold bg-white">
                  ✕
                </button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

const PartnerSection = () => (
  <div className="max-w-6xl mx-auto px-5 py-16 text-center">
    <h3 className="text-3xl md:text-3xl font-bold mb-4 heading-font text-[#022F46]">
      What Our Partners Say About Us
    </h3>
    <p className=" mb-8 md:text-xl font-bold text-black">
    Watch People from Different Backgrounds talk about their experience with Brainwonders.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <PartnerCard
        video="https://www.youtube.com/embed/4wxwS28Khl4"
        thumbnail="https://www.univariety.com/home/images/schools.png"
        title="Schools"
        description="Vouch for us for our world-class counselling services"
        btcolor="#2ebaf6f7"
        id="1"
      />
      <PartnerCard
        video="https://www.youtube.com/embed/gwjpgiFV_BY"
        thumbnail="https://www.univariety.com/home/images/universities.png"
        title="Universities"
        description="Partner with us for our unique services"
        btcolor="#5730f4"
        id="2"
      />
      <PartnerCard
        video="https://www.youtube.com/embed/cfxfgYoy_qQ"
        thumbnail="https://www.univariety.com/home/images/counsellors.png"
        title="Counsellors"
        description="Collaborate with us for career transformations"
        btcolor="#f66231"
        id="3"
      />
    </div>
  </div>
);
