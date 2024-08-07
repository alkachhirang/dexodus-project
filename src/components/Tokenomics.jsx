import React from "react";
import CommonSubheading from "./common/CommonSubheading";
import { TokenomicsGraph } from "./common/Icons";

const Tokenomics = () => {
  return (
    <div
      id="tokenomics"
      className="container max-w-[1164px] mx-auto xl:px-3 lg:px-5 sm:px-4 px-3 lg:py-[70px] md:py-0"
    >
      <div className="grid lg:grid-cols-2 xl:gap-0 lg:gap-7 gap-12">
        <div data-aos="fade-right" className="lg:max-w-[509px]">
          <div className="flex max-lg:justify-center">
            <CommonSubheading subHeading="Tokenomics & Tokepolitics" />
          </div>
          <h2 className="text-3xl lg:text-5xl md:text-4xl text-white font-medium !leading-[130%] font-syne max-lg:text-center pt-[10px]">
            Tokenomics Overview and Analysis
          </h2>
          <p className="text-white opacity-90 text-base font-normal font-syne leading-[135%] py-4 sm:pb-7 lg:pb-12 max-lg:text-center">
            Thorough Tokenomics Overview and Comprehensive Analysis: Delving
            Deep into the Economic Model, Value Proposition, Market Dynamics,
            Token Distribution, Governance Structure, Long-Term Sustainability,
            and Impact on the Ecosystem
          </p>
          <div className="flex  max-sm:items-center gap-4 md:gap-[34px] max-lg:justify-center">
            <p className="sm:text-lg text-xs font-semibold rounded-[10px] relative after:h-full after:w-[2px] after:flex after:absolute after:top-0 after:left-[-2px]  border-l-[2px] border-purple after:hover:w-[110%] after:bg-purple overflow-hidden after:duration-300 after:z-[-1] font-syne ps-5 py-[10px] w-full max-w-[198px] bg-[#FFFFFF0F] text-white z-10 leading-[125%]">
              Governance
            </p>
            <p className="sm:text-lg text-xs font-semibold rounded-[10px] relative after:h-full after:w-[2px] after:flex after:absolute after:top-0 after:left-[-2px]  border-l-[2px] border-purple after:hover:w-[110%] after:bg-purple overflow-hidden after:duration-300 after:z-[-1] font-syne ps-5 py-[10px] w-full max-w-[198px] bg-[#FFFFFF0F] text-white z-10 leading-[125%]">
              Business Model
            </p>
          </div>
          <div className="flex  max-sm:items-center gap-4 md:gap-[34px] max-lg:justify-center mt-4 md:mt-[34px]">
            <p className="sm:text-lg text-xs font-semibold rounded-[10px] relative after:h-full after:w-[2px] after:flex after:absolute after:top-0 after:left-[-2px]  border-l-[2px] border-purple after:hover:w-[110%] after:bg-purple overflow-hidden after:duration-300 after:z-[-1] font-syne ps-5 py-[10px] w-full max-w-[198px] bg-[#FFFFFF0F] text-white z-10 leading-[125%]">
              DXG Token
            </p>
            <p className="sm:text-lg text-xs font-semibold rounded-[10px] relative after:h-full after:w-[2px] after:flex after:absolute after:top-0 after:left-[-2px]  border-l-[2px] border-purple after:hover:w-[110%] after:bg-purple overflow-hidden after:duration-300 after:z-[-1] font-syne ps-5 py-[10px] w-full max-w-[198px] bg-[#FFFFFF0F] text-white z-10 leading-[125%]">
              Referral Program
            </p>
          </div>
        </div>
        <div data-aos="fade-left">
          <span className="lg:w-full sm:w-[80%] mx-auto mt-8 scale_image xl:scale-[1.15] scale-0 xl:translate-x-[58px] lg:mt-0 max-w-unset xl:w-[658px]">
            <TokenomicsGraph />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
