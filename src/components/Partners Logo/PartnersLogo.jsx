import React from "react";
import PrologisPng from "../../assets/prologis.png";
import EquinixPng from "../../assets/equinix.png";
import RealtyPng from "../../assets/realty.png";
import TowerPng from "../../assets/tower.png";

const PartnersLogo = () => {
  return (
    <section className="px-4 md:px-20 py-6">
      <div className="flex flex-wrap gap-5 justify-between items-end">
        <div className="w-[45%] md:w-fit flex justify-center">
          <img className="w-[6rem] md:w-[7rem]" src={PrologisPng} alt="" />
        </div>
        <div className="w-[45%] md:w-fit flex justify-center">
          <img className="w-[6rem] md:w-[10rem]" src={TowerPng} alt="" />
        </div>
        <div className="w-[45%] md:w-fit flex justify-center">
          <img className="w-[6rem] md:w-[12rem]" src={EquinixPng} alt="" />
        </div>
        <div className="w-[45%] md:w-fit flex justify-center">
          <img className="w-[6rem] md:w-[12rem]" src={RealtyPng} alt="" />
        </div>
      </div>
    </section>
  );
};

export default PartnersLogo;
