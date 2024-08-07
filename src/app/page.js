"use client";
import Experience from "@/components/Experience";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LeverageTrading from "@/components/LeverageTrading";
import Mark from "@/components/Mark";
import OurPartners from "@/components/OurPartners";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import Tokenomics from "@/components/Tokenomics";
import TradingPlatform from "@/components/TradingPlatform";
import UniqueFeatures from "@/components/UniqueFeatures";
import BackToTop from "@/components/common/BackToTop";
import Navbar from "@/components/common/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
      
    <div className="bg-darkblack ">
       <BackToTop />
            <Navbar />
      <div className="max-w-[1920px] mx-auto overflow-x-hidden">
        <Hero />
        <OurPartners />
        <Experience />
        <UniqueFeatures />
        <TradingPlatform />
        <div className="relative">
          <Image
            loading="lazy"
            src="/assets/images/leverageTrading/bgLeverageTrading.webp"
            alt="leaverage and roadmap bg image"
            width={2500}
            height={962}
            className="absolute top-[-7%] left-[50%] translate-x-[-50%]"
          />
          <LeverageTrading />
          <Roadmap />
        </div>
        <Tokenomics />
        <Team />
        <Faq />
        <Mark />
        <Footer />
      </div>
    </div>
  );
}
