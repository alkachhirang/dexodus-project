import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { ourPartnersSlidesImages } from "./common/Helper";

const OurPartners = () => {
  return (
    <div className="bg-darkblack overflow-hidden sm:pt-[64px] pt-20 md:pt-[100px] lg:pt-[100px] xl:pt-[149px]">
      <div className="container mx-auto xl:px-3 lg:px-5 sm:px-4 px-3 ">
        <h2
          data-aos="fade-up"
          className="font-syne !leading-[140%] text-white font-medium text-3xl lg:text-5xl md:text-4xl text-center mb-4 sm:mb-7 lg:mb-10"
        >
          Our Partners
        </h2>
      </div>
      <div className="relative z-30 mx-auto pb-20 sm:pb-[60px] md:pb-[100px] lg:pb-[140px] min-[1930px]:container">
        <Image
            loading="lazy"
          src="/assets/images/ourPartners/ourPartnersBordrBg.webp"
          className="absolute left-[50%] translate-x-[-50%] min-h-[81px] sm:min-h-[101px]"
          alt="border bg"
          width={1140}
          height={155}
        />
        <Marquee className="flex items-center py-[10px]  md:py-[20px] md:border-t-[0px] md:border-b-[0px] border-t-[1px] border-b-[1px] border-b-[#413c4a]  border-t-[#413c4a] lg:py-[38px] relative z-20">
          {ourPartnersSlidesImages.map((obj , index) => {
            return (
              <Image key={index}
                  loading="lazy"
                src={obj.img}
                className="sm:ml-10 sm:w-[200px] sm:h-[80px] w-[150px] h-[60px]"
                alt="arrow"
                width={200}
                height={80}
              />
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default OurPartners;
