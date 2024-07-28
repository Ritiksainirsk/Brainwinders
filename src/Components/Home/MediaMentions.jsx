import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Dunzo from "../../../src/assets/dunzo.png";
import Grindle from "../../assets/gridle.png";
import Ibm from "../../assets/ibm.png";
import Infosys from "../../assets/infosys.png";
import Peercoin from "../../assets/peercoin.png";
import Sprint from "../../assets/sprint.png";
import Verizon from "../../assets/verizon.png";

// yah animations to create silky smooth marquees
import Marquee from "react-fast-marquee";

const images = [
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzSQ3F-WLvrUYS-ociTD57MHATe4sBkwG5nGaeOjHStcWQWu7Q",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlno5slCcL8GsmE_BTfebbtyLHGpc9yTN2PLH8lvH3dN0BYiHz",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cV82B4UuDyT0ToMbtUzHN5b-khavLNTjWug81HOpYlrobTsr",
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHg6-coNMho6b2C6dHJUvU82Nmp-zTdarXaBlw2-QH0ybrefyp",
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzSQ3F-WLvrUYS-ociTD57MHATe4sBkwG5nGaeOjHStcWQWu7Q",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRlno5slCcL8GsmE_BTfebbtyLHGpc9yTN2PLH8lvH3dN0BYiHz",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cV82B4UuDyT0ToMbtUzHN5b-khavLNTjWug81HOpYlrobTsr",
  "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHg6-coNMho6b2C6dHJUvU82Nmp-zTdarXaBlw2-QH0ybrefyp",
];

export default function MediaMentions() {
  return (
    <div>
      {/* Media Mentions */}
      <h1 className="text-center font-bold text-2xl mt-11">Media Mentions</h1>
      <div className="mx-6 lg:mx-24">
        <Marquee speed={50}>
          <div className="flex justify-center">
            <img src={Dunzo} alt="Dunzo" className="p-2 max-h-28 pr-12" />
          </div>
          <div className="flex justify-center">
            <img src={Grindle} alt="Grindle" className="p-2 max-h-28 pr-12" />
          </div>
          <div className="flex justify-center">
            <img src={Ibm} alt="IBM" className="p-2 max-h-28 pr-12" />
          </div>
          <div className="flex justify-center">
            <img src={Infosys} alt="Infosys" className="p-2 max-h-28 pr-12" />
          </div>
          <div className="flex justify-center">
            <img src={Peercoin} alt="Peercoin" className="p-2 max-h-28 pr-12" />
          </div>
          <div className="flex justify-center">
            <img src={Sprint} alt="Sprint" className="p-2 max-h-28 pr-12" />
          </div>
          <div className="flex justify-center">
            <img src={Verizon} alt="Verizon" className="p-2 max-h-28 pr-12" />
          </div>
          <div className="flex justify-center">
            <img src={Infosys} alt="Infosys" className="p-2 max-h-28 pr-12" />
          </div>
        </Marquee>
      </div>
      {/* Media Mentions */}

      {/* ASSOCIATED SCHOOLS */}
      <h1 className="text-center font-bold text-2xl my-10">
        ASSOCIATED SCHOOLS
      </h1>
      <div className="mx-6 lg:mx-24 mb-16">
        <Marquee speed={50} direction="right">
          <div className="flex justify-center">
            {images.map((image, index) => {
              return (
                <>
                  <img
                    src={image}
                    key={index}
                    className="p-2 max-h-24 mr-10"
                  />
                </>
              );
            })}
          </div>
        </Marquee>
      </div>
      {/* ASSOCIATED SCHOOLS */}
    </div>
  );
}
