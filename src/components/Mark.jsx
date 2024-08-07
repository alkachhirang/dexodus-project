import CommonBtn from "./common/CommonBtn";
import Image from "next/image";
import { MarkEllipse } from "./common/Icons";

export default function Mark() {
  return (
    <div data-aos="zoom-out" id="community" className="overflow-hidden">
      <div className="container max-w-[1164px] mx-auto xl:px-3 lg:px-5 sm:px-4 px-3 pb-8 lg:pb-0">
        <div className="w-full markcardbg lg:py-[63px] py-12 lg:rounded-full border-gradient sm:rounded-[100px] sm:after:rounded-[100px] lg:after:rounded-full max-sm:rounded-3xl   max-sm:after:rounded-3xl relative overflow-hidden z-[1] mb-5 px-3">
          <h3 className=" font-syne lg:text-[64px] text-3xl lg:text-5xl md:text-4xl !leading-[130%] text-white text-center font-semibold lg:pb-12 pb-8">
            Ready to make your <span className="block">mark?</span>
          </h3>
          <div className="flex justify-center">
            <CommonBtn showSvg={true} text="Launch App" />
          </div>

          <span className="absolute top-0  left-0 z-[-1]">
            <MarkEllipse />
          </span>
        </div>
      </div>
      <Image
          loading="lazy"
        data-aos="fade-up"
        src="/assets/images/markEllipse/dexodus.webp"
        alt="dexodus"
        width={1362}
        height={224}
        className=" max-w-[1362px] w-full mx-auto lg:translate-y-4"
      />
    </div>
  );
}
