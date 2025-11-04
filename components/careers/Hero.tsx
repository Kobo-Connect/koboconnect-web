import React from "react";
import Image from "next/image";
import gradientBg from "@/assets/images/gradientBg.png";

interface HeroSection {
  title: string;
  subtitle: string;
  backgroundImage: {
    asset: {
      _id: string;
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
    alt: string;
  };
}

interface CareersPageData {
  heroSection: HeroSection;
}

interface HeroProps {
  careersPageData: CareersPageData;
}

function Hero({ careersPageData }: HeroProps) {
  const { heroSection } = careersPageData;

  return (
    <div className="h-[40vh] flex flex-col justify-center items-center relative max-w-6xl mx-auto">
      <Image 
        src={heroSection.backgroundImage.asset.url} 
        alt={heroSection.backgroundImage.alt} 
        fill 
        className="object-cover rounded-2xl" 
      />

      <svg width="52" className="z-10 absolute top-10 left-10 md:left-20 lg:left-40" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.9998 0.999981C47.5998 6.59998 54.5 29 49.4998 37C43.9997 41.4999 40.5 38 36.5 34.5C33.3 31.7 25.4999 32 21.9998 32.5C14.3332 34.6667 -0.600164 35 0.999836 19C2.59984 2.99998 16 -0.312454 21.9998 0.999981Z" fill="#C5A140" />
      </svg>

      <svg width="69" className="z-10 absolute top-10 right-10 md:right-20 lg:right-40" height="63" viewBox="0 0 69 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.5 46.5C53.9 60.1 64.5 62.8333 68.5 62.5C57.7 57.7 50.3333 48.5 48 44.5C51.6 41.3 52.1667 34.5 52 31.5L40.5 24C41.3 31.2 39.5 36.3333 38.5 38C20.5 42 12 14.6667 10 0.5H0C7.2 44.9 32 49.6667 43.5 46.5Z" fill="#DDB953" />
      </svg>

      <div className="z-10 text-white absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-2xl md:text-5xl font-semibold mb-4">{heroSection.title}</h2>
        <p className="text-lg text-[#EBFFFF]">{heroSection.subtitle}</p>
      </div>

      <Image src={gradientBg} alt="gradient" fill className="object-cover rounded-2xl opacity-90 z-0" />
    </div>
  );
}

export default Hero;
