"use client";
// import Accordion from "./Accordian";
import { faqAccordionData } from "./common/Helper";
import { FaqEllipse, Minus, Plusicon } from "./common/Icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div
      id="faq"
      className=" bg-darkblack pb-20 sm:pb-[60px] md:pb-[100px] lg:pb-[100px] xl:pb-[140px] relative z-[1] overflow-x-clip"
    >
      <div className="container max-w-[1164px] mx-auto xl:px-3 lg:px-5 sm:px-4 px-3">
        <h2
          data-aos="fade-up"
          className=" text-white font-syne text-3xl lg:text-5xl md:text-4xl !leading-[140%] text-center pb-4 font-medium"
        >
          Frequently Asked Questions
        </h2>
        <p className=" text-white font-syne leading-[140%] text-base text-center max-w-[640px] mx-auto">
          Traders engage in fierce competition across the absolute and relative
          leagues, where their Profit and Loss (PnL) scores determine their
          standing.
        </p>
        <div className="max-w-[927px] mx-auto lg:mt-16 mt-12 transition-all duration-300 ease-in-out">
          <Accordion type="single" className="flex flex-col gap-6" collapsible>
            {faqAccordionData.map((obj, index) => {
              return (
                <AccordionItem
                  value={index + 1}
                  key={index}
                  className=" rounded-[10px] faq-bg"
                >
                  <AccordionTrigger className="text-white lg:text-2xl sm:text-xl text-base font-medium leading-[140%] md:p-6 p-4 hover:no-underline text-start">
                    {obj.question}
                    <span className="pluse-icon ms-2">
                      <Plusicon />
                    </span>
                    <span className="minus-icon ms-2">
                      <Minus />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white sm:text-base text-xs font-normal leading-[140%] max-w-[751px] sm:pb-6 pb-4 sm:px-6 px-4 ">
                    {obj.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>

      <span className="absolute left-0 top-[-13%] z-[-1] max-sm:hidden">
        <FaqEllipse />
      </span>
      <div className="w-[285px] h-[285px] bg-pink opacity-20 blur-[120px] right-[-10%] top-[-2%] absolute z-[-1] max-sm:hidden"></div>
    </div>
  );
}
