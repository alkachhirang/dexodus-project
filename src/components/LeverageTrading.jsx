import React from "react";
import { leverageTradingDetails } from "./common/Helper";

const LeverageTrading = () => {
  return (
    <div>
      <div className="container max-w-[1164px] mx-auto xl:px-3 lg:px-5 sm:px-4 px-3 pt-20 md:pt-[100px] lg:pt-[132px]">
        <h2
          data-aos="fade-down"
          className="text-3xl lg:text-5xl md:text-4xl text-white font-syne font-medium text-center leading-[140%]"
        >
          Leverage Trading
        </h2>
        <p className="text-base text-center font-normal font-syne text-white opacity-90 py-4 sm:pb-10 lg:pb-[60px] leading-[140%] max-w-[640px] mx-auto">
          Amplify your potential profits by taking larger market positions with
          smaller capital investments on over 20 different markets.
        </p>
        <div className=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 justify-center">
          {leverageTradingDetails.map((data, i) => {
            return (
              <div key={i} data-aos="zoom-in" className=" w-full mx-auto">
                <div className=" w-full bg-[#FFFFFF0A] mx-auto border border-[#FFFFFF1F] duration-300 hover:border-pink rounded-[10px] p-5 backdrop-blur-[30px]">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      {data.img}
                      <div>
                        <p className="text-white text-base font-syne font-semibold leading-[118%]">
                          {data.name}
                        </p>
                        <p className="text-[#878787]  font-syne font-normal text-base leading-[140%]">
                          {data.type}
                        </p>
                      </div>
                    </div>
                    <span>{data.graphImg} </span>
                  </div>
                  <div className="flex justify-between pt-5 items-center">
                    <p className="lg:text-2xl sm:text-xl text-lg font-medium font-syne text-white leading-[140%]">
                      {data.amount}
                    </p>
                    <div>
                      <div className="flex gap-3">
                        <p className="text-[#8A8B8D] text-sm font-normal font-syne  leading-[114%]">
                          CGH
                        </p>{" "}
                        <p className="text-[#FF0000] text-base font-normal font-syne leading-[125%]">
                          {data.chg}
                        </p>
                      </div>
                      <div className="flex gap-3 pt-2">
                        <p className="text-[#8A8B8D] text-sm font-normal font-syne leading-[114%] ">
                          VOL
                        </p>{" "}
                        <p className="text-white text-base font-normal font-syne leading-[125%]">
                          {data.vol}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeverageTrading;
