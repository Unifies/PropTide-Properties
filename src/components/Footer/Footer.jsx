import React from "react";
import LogoPng from "../../assets/logo2.png";

const Footer = () => {
  return (
    <section className="px-4 md:px-20 py-10 md:py-6">
      <div className="w-[100%] flex flex-col gap-6 bg-footerblue border-[6px] border-footerborder rounded-xl justify-center items-center py-6">
        <h1 className="text-2xl text-center md:text-3xl text-white font-semibold">
          Get started with Homyz
        </h1>
        <p className="text-footersec text-sm text-center">
          Subscribe and find super attractive price quotes from us.
          <br />
          Find your residence soon
        </p>
        <button className="footer-btn border-[2px] border-white">
          Get Started
        </button>
      </div>

      <div className=" mt-14 flex flex-col md:flex-row gap-12 md:gap-6 md:justify-between items-center">
        <div className=" w-[55%] md:w-[30%] m-auto md:m-0 flex flex-col gap-3 md:gap-6 justify-center md:justify-start items-center md:items-start">
          <img className="w-[9rem]" src={LogoPng} alt="" />
          <p className="text-sm text-textsecondary text-center md:text-left">
            Our vision is to make all people the best place to live for them.
          </p>
        </div>
        <div className="flex flex-col gap-6 justify-center md:justify-start items-center md:items-start">
          <div>
            <h1 className="text-primary text-2xl md:text-3xl font-bold mb-1">
              Information
            </h1>
            <p className="text-sm text-textsecondary">
              145 New York, FL 5467, USA
            </p>
          </div>

          <div className="flex gap-4 flex-wrap justify-center items-center text-primary font-semibold">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
