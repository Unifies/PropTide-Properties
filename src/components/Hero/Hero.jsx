import React from "react";
import HeroPng from "../../assets/hero-image.png";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "../../Utility/Animations";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="relative px-4 md:px-20 py-10 md:py-6 bg-black text-white">
      <div className="flex flex-col gap-9 justify-center md:flex-row md:justify-between bg-transparent items-center">
        {/* Hero Image section */}
        <motion.div
          variants={FadeLeft(0.6)}
          initial="hidden"
          animate="visible"
          className="heroImage mb-7 md:order-2"
        >
          <img
            className="w-[30rem] h-auto lg:h-[35rem] overflow-hidden rounded-t-[15rem] border-solid border-bordercolor border-[8px]"
            src={HeroPng}
            alt=""
          />
        </motion.div>

        {/* Hero Message section */}
        <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-9 md:w-[50%]">
          <div className=" relative">
            <motion.div
              variants={FadeUp(0.6)}
              initial="hidden"
              animate="visible"
              className="w-[2rem] md:w-[4rem] h-[2rem] md:h-[4rem] bg-gradient-to-r from-[#ffb978] to-[#ff922d] absolute -top-[5px] md:-top-[25px] left-[140px] md:left-[220px] rounded-[999px] -z-10"
            ></motion.div>

            <motion.h1
              variants={FadeUp(0.6)}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-semibold"
            >
              Discover <br />
              Most Suitable <br /> Property
            </motion.h1>
          </div>

          <motion.p
            variants={FadeUp(0.9)}
            initial="hidden"
            animate="visible"
            className="text-secondary hidden md:block text-wrap"
          >
            Find a variety of properties that suit you very easily. <br />{" "}
            Forget all difficulties in finding a residence for you.
          </motion.p>

          <motion.div
            variants={FadeUp(1.2)}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row w-fit bg-white rounded-2xl justify-start px-2 gap-6 py-3 items-center"
          >
            <div className="flex gap-4 justify-center items-center">
              <FaLocationDot className="text-blue text-3xl" />

              <input
                className="py-1 px-2 w-[200px] border-b-2 text-primary"
                type="text"
                placeholder="Enter description here.."
              />
            </div>

            <button className="primary-btn cursor-pointer bg-gradient-to-r from-[#4066ff] to-[#2949c6]">
              Search
            </button>
          </motion.div>

          <div className="flex w-fit md:w-[80%] justify-center md:justify-between flex-wrap gap-2 items-center">
            <div className="product flex flex-col">
              <h1 className="text-xl sm:text-2xl md:text-3xl self-center">
                <CountUp start={8800} end={9000} duration={4} />
                <span className="text-orange">+</span>
              </h1>
              <p className="text-secondary text-xs sm:text-sm">
                Premium Product
              </p>
            </div>

            <div className="customer flex flex-col">
              <h1 className="text-xl sm:text-2xl md:text-3xl self-center">
                <CountUp start={1700} end={2000} duration={5} />
                <span className="text-orange">+</span>
              </h1>
              <p className="text-secondary text-xs sm:text-sm">
                Happy Customer
              </p>
            </div>

            <div className="winning flex flex-col">
              <h1 className="text-xl sm:text-2xl md:text-3xl self-center">
                <CountUp start={12} end={28} duration={6} />
                <span className="text-orange">+</span>
              </h1>
              <p className="text-secondary text-xs sm:text-sm">
                Awards Winning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
