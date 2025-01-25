import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import ValuePng from "../../assets/value.png";
import data from "../../Utility/accordion.jsx";

const Value = () => {
  return (
    <section className="px-4 md:px-20 py-10 md:py-6 -z-10">
      <div className="flex flex-col gap-9 justify-center md:flex-row md:justify-between items-center">
        {/* Left Hand Side */}
        <div>
          <img
            className="w-[30rem] h-auto lg:h-[35rem] overflow-hidden rounded-t-[15rem] border-solid border-lightBlue border-[8px]"
            src={ValuePng}
            alt=""
          />
        </div>

        {/* Right Hand Side */}
        <div className="md:w-[50%]">
          <div className="flex flex-col">
            <span className="text-oranger text-xl md:text-2xl font-bold py-1">
              Our Value
            </span>
            <span className="text-primary text-2xl md:text-4xl font-bold py-1 mb-4">
              Value We Give to You
            </span>
            <span className="text-textsecondary text-sm">
              We are always ready to help by providing the best services for
              you. <br /> We beleive a good blace to live can make your life
              better
            </span>
          </div>

          <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className="border-none mt-5"
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  key={i}
                  uuid={i}
                  className={`bg-white border-[0.8px] border-[#80808024] rounded-md mb-5 accordionItem ${className}`}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flex justify-between items-center py-4 px-5 cursor-pointer">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="p-2 bg-lightBlue text-blue rounded-md">
                        {item.icon}
                      </div>
                      <span className="text-primary text-center text-xl md:text-sm xl:text-xl font-bold py-1">
                        {item.heading}
                      </span>
                      <div className="p-2 bg-lightBlue text-blue rounded-md">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="text-textsecondary text-sm">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
