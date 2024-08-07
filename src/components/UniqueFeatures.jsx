import React from "react";
import Image from "next/image";
import CommonSubheading from "./common/CommonSubheading";
import { featuresDetails } from "./common/Helper";

const UniqueFeatures = () => {
  return (
    <div
      id="topfeatures"
      className="lg:pt-[100px] md:pt-[70px] pt-[64px] xl:pt-[110px]"
    >
      <div className="max-w-[1164px] mx-auto xl:px-3 lg:px-5 sm:px-4 px-3 relative lg:pt-[73px] pt-12">
        <Image
            loading="lazy"
          className="absolute top-[-40%] md:block hidden md:left-[-39%] lg:left-[-27%]"
          src="/assets/images/uniqueFeatures/leftVector.webp"
          width={355}
          height={363}
          alt="vector"
        />

        <Image
            loading="lazy"
          className="absolute w-full lg:w-[987px] left-[50%] top-0 translate-x-[-50%]"
          height={552}
          width={987}
          src="/assets/images/uniqueFeatures/bgVec.webp"
          alt="bgVec"
        />

        <div className="relative z-10">
          <div data-aos="fade-down" className="flex justify-center">
            <CommonSubheading
              className="!whitespace-nowrap mx-auto"
              subHeading="Top-features"
            />
          </div>
          <h1 className="mt-[10px] xl:text-5xl text-3xl md:text-4xl font-medium !leading-[140%] text-white font-syne text-center">
            Discover Our Unique Features
          </h1>
          <p className="max-w-[535px] mx-auto pt-4 font-normal text-base font-syne text-center text-white opacity-90">
            Forget web3 complexity, at Dexodus we make it simple. Just trade.
            Enjoy an overall more intuitive trading experience.
          </p>
          <div className="flex mt-10 lg:mt-[70px] flex-wrap justify-center gap-6 ">
            {featuresDetails.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index + 1}00`}
                className={`sm:w-[364px]`}
              >
                <div className="flex duration-200  hover:border-pink flex-col pt-6 bg_featuredcards px-6 py-5 max-w-[364px] sm:max-w-full border rounded-[10px] h-full border-[#303030]">
                  <div className="bg-pink rounded-[7px] lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] flex items-center justify-center">
                    {feature.img}
                  </div>
                  <h4 className="lg:mt-8 mt-5 leading-[140%] text-white font-syne font-medium text-[25px] xl:text-[30px]">
                    {feature.title}
                  </h4>
                  <p className="pt-3 text-white opacity-90 text-base  leading-[140%] font-syne font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatures;
