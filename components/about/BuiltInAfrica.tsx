import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";
import CultureImage from "@/assets/images/Video.png";
import BuiltInAfricaFeatures from "./BuiltInAfricaFeatures";

export type Pill = { text: string; href?: string };

export interface BuiltInAfricaSection {
  title: string;
  description: string;
  features: Pill[];
  cultureImage: {
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
  builtInAfricaSection: BuiltInAfricaSection;
}

interface BuiltInAfricaProps {
  aboutPageData: AboutPageData;
}

// Fallback data
const PILL_ITEMS: Pill[] = [
  { text: "Offline-friendly (USSD + agent networks)" },
  { text: "Financially inclusive" },
  { text: "Designed with cultural relevance" },
  { text: "Locally integrated and scalable" },
];

export default function BuiltInAfrica({ aboutPageData }: BuiltInAfricaProps) {
  const { builtInAfricaSection } = aboutPageData;
  return (
    <section className='relative'>
      {/* Dark band */}
      <div className='bg-[#0A1B1B] text-white h-[690px] lg:h-[772px]'>
        <div className='mx-auto max-w-6xl px-4 pt-[90px] lg:pt-[107px]'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16'>
            {/* Left copy */}
            <div className='max-w-xl'>
              <h2 className='text-3xl sm:text-4xl text-[#FFFFFF] lg:text-[40px] leading-tight font-semibold'>
                {builtInAfricaSection.title}
              </h2>
              <p className='mt-4 text-sm sm:text-base lg:text-lg text-[#B5BBBB] leading-7'>
                {builtInAfricaSection.description}
              </p>
            </div>

            {/* Right pills */}
            <BuiltInAfricaFeatures
              builtInAfricaSection={builtInAfricaSection}
            />
          </div>
        </div>
      </div>

      {/* Overlapping video/image card */}
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='overflow-hidden rounded-xl sm:rounded-2xl shadow-lg -mt-16 lg:-mt-32'>
          <Image
            src={builtInAfricaSection.cultureImage.asset.url}
            alt={builtInAfricaSection.cultureImage.alt}
            width={500}
            height={500}
            className='h-[200px] sm:h-[260px] md:h-[320px] lg:h-[587px] w-full object-cover'
            priority
          />
        </div>
      </div>
    </section>
  );
}
