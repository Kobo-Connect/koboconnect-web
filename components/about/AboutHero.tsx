import Image from "next/image";
import React from "react";
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

interface AboutPageData {
  heroSection: HeroSection;
}

interface AboutHeroProps {
  aboutPageData: AboutPageData;
}

export default function AboutHero({ aboutPageData }: AboutHeroProps) {
  const { heroSection } = aboutPageData;

  return (
    <div className='h-[40vh] flex flex-col justify-center items-center relative max-w-6xl mx-auto'>
      <Image
        src={heroSection.backgroundImage.asset.url}
        alt={heroSection.backgroundImage.alt}
        fill
        className='object-cover rounded-2xl'
      />

      <div className='z-10 text-white absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h2 className='text-2xl md:text-5xl font-semibold mb-4'>
          {heroSection.title}
        </h2>
        {heroSection.subtitle && (
          <p className='text-lg text-[#EBFFFF]'>{heroSection.subtitle}</p>
        )}
      </div>

      <Image
        src={gradientBg}
        alt='gradient'
        fill
        className='object-cover rounded-2xl opacity-90 z-0'
      />
    </div>
  );
}
