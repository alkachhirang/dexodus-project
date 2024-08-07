import CommonBtn from "./common/CommonBtn";
import CommonSubheading from "./common/CommonSubheading";
import { Heroheading, Fasttrading, Continuous, Secure } from "./common/Icons";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Hero() {
  return (
    <div className="bg-bgheader md:min-h-screen 3xl:min-h-[unset] bg-cover pt-12 sm:pt-[55px] lg:pt-[70px] xl:pt-[90px] relative overflow-x-clip">
      <div className="absolute left-[50%] top-[10%] h-[400px] w-[1140px] transform -translate-x-1/2">
        <Image
          loading="lazy"
          src="/assets/images/heroImages/heroImgBgLinear.webp"
          width={1140}
          height={400}
          alt="hero bg image linear"
        />
      </div>
      <div className="container custom2xl:max-w-[1260px] relative z-30 xl:max-w-[1164px] xl:px-3 lg:px-5 sm:px-4 px-3 mx-auto">
        <div className="flex justify-center items-center flex-col">
          <div className="mb-[10px]">
            <CommonSubheading subHeading="Copy Trading Meets DeFi" />
          </div>
          <h1 className="font-syne font-semibold text-white text-4sm md:text-5md lg:text-7lg xl:text-[54px] leading-[140%] text-center xl:text-nowrap">
            Decentralized Perpetual Exchange
          </h1>
          <p className="text-pink uppercase flex items-center text-4sm md:text-5md lg:text-7lg xl:text-6xl leading-[140%] justify-center lg:mb-[8px] lg:mt-0 mt-3 mb-3 xl:mb-[16px] font-bold">
            DEX <Heroheading /> DUS
          </p>
          <p className="font-syne font-normal text-base text-white max-w-[734px] text-center opacity-[90%] mb-[16px] leading-2lg">
            Your gateway to gasless trading with stable fees, trading across
            multiple markets, copy trading, single transactions for a CEX-like
            experience, and competitive rankings.
          </p>
          <div className="flex flex-row flex-wrap gap-x-6 items-center justify-center mb-[30px] md:mb-[40px] lg:mb-[48px]">
            <div className="flex items-center gap-2">
              <Fasttrading />
              <p className="font-syne font-medium sm:text-lg text-base text-white leading-lg">
                Fast Trading
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Secure />
              <p className="font-syne font-medium sm:text-lg text-base text-white leading-lg">
                Secure & Reliable
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Continuous />
              <p className="font-syne font-medium sm:text-lg text-base text-white leading-lg">
                Continuous Market Updates
              </p>
            </div>
          </div>
          <div className="sm:mb-[60px] mb-[35px] relative z-20">
            <CommonBtn showSvg={true} text="Get Started" />
          </div>
          <div
            data-aos="fade-up"
            className="bg-gradient-to-l from-[#a020f0b3] to-[#ffffffb3] rounded-2xl p-[2px] relative z-20"
          >
            <Image
              loading="lazy"
              src="/assets/images/heroImages/heroDashboard.webp"
              alt="heroDashboard"
              width={1136}
              height={599}
              className="xl:min-w-[1140px] max-h-[601px] w-full lg:max-h-[unset] rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="absolute lg:top-[45%] sm:top-[55%] xxs:top-[65%] top-[74%] 5xl:top-[44%] opacity-70 w-full z-10">
        <Player
          className="lottie_player"
          autoplay
          loop
          src="/assets/lottie/lines.json"
        />
      </div>
    </div>
  );
}
