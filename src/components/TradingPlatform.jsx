import React from "react";
import Image from "next/image";
import CommonSubheading from "./common/CommonSubheading";
import CommonBtn from "./common/CommonBtn";
import { LogoIcon, RightLines } from "./common/Icons";
const TradingPlatform = () => {
  return (
    <div className="max-w-[1164px] mx-auto px-3 lg:pt-[100px] md:pt-[100px] z-30 pt-20 xl:pt-[132px] relative">
      <Image
        loading="lazy"
        className="absolute hidden lg:block delay-200 -z-0 pointer-events-none  lg:start-[-27%] top-[-15%] lg:top-[-20%]"
        src="/assets/images/tradingPlatform/rightCircle.webp"
        height={400}
        width={425}
        alt="rightcircle"
      />

      <span className="absolute delay-200 md:end-[-33%] sm:max-w-[200px] md:max-w-[425px] end-[-23%] max-w-[100px] -z-0 top-[0%]">
        <RightLines />
      </span>

      <div className="flex flex-wrap gap-6 md:gap-0 justify-center md:justify-start items-center flex-col-reverse md:flex-row max-w-[1118px]">
        <div data-aos="fade-right" className="md:w-6/12">
          <div className="relative w-full h-full flex justify-center items-center  max-w-[400px] rounded-[50%] lg:max-w-[507px] mt-6 lg:mt-0">
            <div className=" absolute top-0 left-0 h-full w-full ">
              <div className="animate-[spin_12s_linear_infinite] h-full w-full">
                <span className="logo absolute top-[65px] z-30">
                  <LogoIcon />
                </span>
              </div>
            </div>
            <div>
              <Image
                loading="lazy"
                className="ghost max-w-[400px] rounded-[50%] relative z-20 lg:max-w-[507px] w-full"
                src="/assets/images/tradingPlatform/circle.png"
                width={507}
                height={507}
                alt="circle"
              />
              <Image
                loading="lazy"
                className="ghost max-w-[400px] absolute top-0 left-0 mix-blend-lighten z-40 rounded-[50%] lg:max-w-[507px] w-full"
                src="/assets/images/tradingPlatform/coatMan.webp"
                width={500}
                height={500}
                alt="ghost"
              />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="md:w-6/12 relative z-10 xl:ps-[102px] md:ps-[40px] lg:ps-[70px]"
        >
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start max-w-[600px] md:max-w-[509px]">
            <CommonSubheading subHeading="Copy Trading" />
            <h2 className=" mt-[10px] xl:text-5xl text-3xl md:text-4xl font-medium !leading-[130%] text-white font-syne md:text-start text-center">
              Automated Mirror Trading Platform
            </h2>
            <p className="md:pt-4 text-base pt-2 text-center md:text-start text-white md:max-w-[482px] opacity-90 font-syne font-normal">
              Follow and execute the strategies of top traders in the protocol
              through our user-friendly copy trading feature.
            </p>
            <div className="sm:mt-8 mt-5 md:mt-12">
              <CommonBtn showSvg={true} text="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingPlatform;
