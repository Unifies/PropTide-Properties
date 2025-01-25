import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../Utility/slider.json";
import { sliderSettings } from "../../Utility/common";

const Residencies = () => {
  return (
    <section className="px-4 md:px-20 py-6">
      <div className="relative">
        <div>
          <h2 className="text-oranger text-xl md:text-2xl font-bold py-1">
            Best Choices
          </h2>
          <h1 className="text-primary text-2xl md:text-4xl font-bold py-1 mb-4">
            Popular Residencies
          </h1>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="mt-9 w-[18rem] mx-auto rounded-xl hover:scale-[1.025] transition duration-700 hover:cursor-pointer hover:bg-gradient-to-b from-linear100 to-linear200 hover:drop-shadow">
                <div className="w-[90%] mx-auto flex flex-col gap-3">
                  <img
                    className="w-[100%] m py-1"
                    src={card.image}
                    alt="Home"
                  />

                  <div>
                    <p>
                      <span className="text-orange text-xl font-semibold">
                        $
                      </span>
                      <span className="text-textsecondary text-xl font-semibold">
                        {card.price}
                      </span>
                    </p>
                  </div>

                  <div className=" flex flex-col gap-1">
                    <p className="text-primary text-2xl font-bold py-1">
                      {card.name}
                    </p>
                    <p className="text-textsecondary text-xs py-1 pb-10">
                      {card.detail}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-center gap-3 mt-4">
      <button
        onClick={() => swiper.slidePrev()}
        className="text-2xl px-2 py-1 text-primary rounded-sm bg-white cursor-pointer border-2"
      >
        &lt;
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="text-2xl px-2 py-1 text-primary rounded-sm bg-white cursor-pointer border-2"
      >
        &gt;
      </button>
    </div>
  );
};
