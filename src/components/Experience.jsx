import React from "react";
import CommonSubheading from "./common/CommonSubheading";
import CommonBtn from "./common/CommonBtn";
import { experienceCardDetails } from "./common/Helper";
import { Player } from "@lottiefiles/react-lottie-player";

const Experience = () => {
  return (
    <div id="docs" className="bg-darkblack mt-[-1px]">
      <div className="container mx-auto xl:px-3 lg:px-5 sm:px-4 px-3 max-w-[1164px]">
        <div className="flex flex-wrap items-center justify-center ">
          <div data-aos="fade-right" className="lg:w-1/2">
            <div className="flex flex-col justify-center sm:px-4 items-center lg:justify-start lg:items-start">
              <CommonSubheading subHeading="Focus on Trading" />
              <h3 className="font-syne !leading-[130%] mt-[10px] text-white font-medium text-3xl lg:text-5xl md:text-4xl text-center lg:text-start sm:max-w-[582px]">
                Simplified Trading, Enhanced Experience
              </h3>
              <p className="my-3 sm:my-4 font-syne text-base text-white opacity-90 font-normal leading-[137%] lg:max-w-[482px] text-center sm:max-w-[600px] lg:text-start">
                Forget web3 complexity, at Dexodus we make it simple. Just
                trade. Enjoy an overall more intuitive trading experience.
              </p>
              <p className="font-syne text-base text-white opacity-90 font-normal leading-[137%] lg:max-w-[482px]  text-center sm:max-w-[600px] lg:text-start">
                Escape Web3 Complexity with Dexodus: Trade Effortlessly,
                Experience Intuitive Simplicity
              </p>
              <div className="mt-6 lg:mt-[48px] mb-9">
                <CommonBtn text="Start Now" showSvg={true} />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex lg:justify-end flex-col lg:items-end">
            {experienceCardDetails.map((card, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={`${index + 1}00`}
                key={index}
                className="p-[18px] relative overflow-hidden hover:border-bruntpink transition-all duration-200 ease-linear mb-4 sm:mb-[30px] border-[1px] max-w-[521px] bg-experience-card border-darkgray rounded-[10px]"
              >
                <div className="flex items-center">
                  <span className="w-[40px] h-[40px]">
                    <Player
                      className="lottie_player w-[40px] h-[40px]"
                      autoplay
                      loop
                      src={card.lottie}
                    />
                  </span>
                  <h3 className="ms-4 text-white font-medium font-syne lg:text-2xl sm:text-xl text-lg">
                    {card.title}
                  </h3>
                </div>
                <p className="font-syne text-base mt-3 leading-[137%] text-white opacity-90 font-normal lg:max-w-[482px]">
                  {card.description}
                </p>
                <span className="bg-white absolute blur-[50px] pointer-events-none top-0 left-0 w-[40px] h-[40px]"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
