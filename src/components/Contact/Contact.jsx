import React from "react";
import ContactPng from "../../assets/contact.jpg";
import { MdLocalPhone, MdVideoCall } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="px-4 md:px-20 py-10 md:py-6">
      <div className="flex flex-col gap-9 justify-center md:flex-row md:justify-between items-center">
        {/* Left Hand Side */}
        <div className="md:w-[50%]">
          <div className="flex flex-col">
            <span className="text-oranger text-xl md:text-2xl font-bold py-1">
              Contact Us
            </span>
            <span className="text-primary text-2xl md:text-4xl font-bold py-1 mb-4">
              Easy to Contact Us
            </span>
            <span className="text-textsecondary text-sm">
              We always ready to help by providing the best services for you. We
              beleive a good place to live can make your life better!
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:gap-2 xl:gap-6 md:flex-wrap">
            <div className="mt-7 flex flex-col gap-6 border-[1px] p-4 rounded-lg transition duration-700 hover:scale-[1.050]">
              <div className="flex gap-8">
                <div className="p-2 text-3xl text-blue bg-lightBlue rounded-md">
                  <MdLocalPhone />
                </div>
                <div>
                  <h1 className=" text-primary text-xl font-semibold">Call</h1>
                  <p className="text-textsecondary text-sm">021 123 145 1444</p>
                </div>
              </div>
              <button className="text-blue text-lg md:text-base font-semibold py-2 w-[100%] bg-lightBlue  hover:text-white hover:bg-gradient-to-r from-[#4066ff] to-[#2949c6] transition duration-700 hover:scale-[0.9] rounded-lg">
                Call Now
              </button>
            </div>

            <div className="mt-7 flex flex-col gap-6 border-[1px] p-4 rounded-lg transition duration-700 hover:scale-[1.050]">
              <div className="flex gap-8">
                <div className="p-2 text-3xl text-blue bg-lightBlue rounded-md">
                  <IoChatbubbleEllipses />
                </div>
                <div>
                  <h1 className=" text-primary text-xl font-semibold">Chat</h1>
                  <p className="text-textsecondary text-sm">021 123 145 1444</p>
                </div>
              </div>
              <button className="text-blue text-lg md:text-base font-semibold py-2 w-[100%] bg-lightBlue  hover:text-white hover:bg-gradient-to-r from-[#4066ff] to-[#2949c6] transition duration-700 hover:scale-[0.9] rounded-lg">
                Chat Now
              </button>
            </div>

            <div className="mt-7 flex flex-col gap-6 border-[1px] p-4 rounded-lg transition duration-700 hover:scale-[1.050]">
              <div className="flex gap-8">
                <div className="p-2 text-3xl text-blue bg-lightBlue rounded-md">
                  <MdVideoCall />
                </div>
                <div>
                  <h1 className=" text-primary text-xl font-semibold">
                    Video Call
                  </h1>
                  <p className="text-textsecondary text-sm">021 123 145 1444</p>
                </div>
              </div>
              <button className="text-blue text-lg md:text-base font-semibold py-2 w-[100%] bg-lightBlue hover:text-white hover:bg-gradient-to-r from-[#4066ff] to-[#2949c6] transition duration-700 hover:scale-[0.9] rounded-lg">
                Video Call Now
              </button>
            </div>

            <div className="mt-7 flex flex-col gap-6 border-[1px] p-4 rounded-lg transition duration-700 hover:scale-[1.050]">
              <div className="flex gap-8">
                <div className="p-2 text-3xl text-blue bg-lightBlue rounded-md">
                  <FaMessage />
                </div>
                <div>
                  <h1 className=" text-primary text-xl font-semibold">
                    Message
                  </h1>
                  <p className="text-textsecondary text-sm">021 123 145 1444</p>
                </div>
              </div>
              <button className="text-blue text-lg md:text-base font-semibold py-2 w-[100%] bg-lightBlue  hover:text-white hover:bg-gradient-to-r from-[#4066ff] to-[#2949c6] transition duration-700 hover:scale-[0.9] rounded-lg">
                Message Now
              </button>
            </div>
          </div>
        </div>

        {/* Right Hand Side */}
        <div>
          <img
            className="w-[30rem] h-[35rem] overflow-hidden rounded-t-[15rem]"
            src={ContactPng}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
