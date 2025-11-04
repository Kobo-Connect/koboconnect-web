import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import CustomSpotlight from "./spotlight";

interface HeroSection {
  badge: string;
  title: string;
  subtitle: string;
  backgroundImage?: {
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

interface HeroProps {
  heroSection: HeroSection;
}

function Hero({ heroSection }: HeroProps) {
  // Fallback data if Sanity data is not available
  const section = heroSection || {
    badge: "Help",
    title: "What answers should we help you with?",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus sceleri.",
    backgroundImage: null,
  };

  return (
    <div className='h-[50vh] relative flex flex-col justify-center items-center px-4'>
      {section.backgroundImage?.asset && (
        <Image
          src={urlFor(heroSection?.backgroundImage?.asset!).url()}
          alt={heroSection?.backgroundImage?.alt!}
          className='absolute top-0 left-0 z-0'
          fill
        />
      )}

      <div className='text-center z-10 space-y-2 max-w-5xl mx-auto'>
        <h6 className='text-lg font-semibold text-[#007F5E]'>
          {heroSection.badge}
        </h6>
        <h1 className='text-[#010101] font-semibold text-3xl lg:text-5xl mb-2'>
          {heroSection.title}
        </h1>
        <p className='text-[#363E3F] lg:text-lg max-w-xl mx-auto'>
          {heroSection.subtitle}
        </p>
      </div>

      <div className='pt-10 lg:pt-16 text-center z-10 space-y-2 w-full max-w-lg mx-auto'>
        <CustomSpotlight />
      </div>
    </div>
  );
}

export default Hero;
