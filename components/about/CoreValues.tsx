import Image from "next/image";
import React from "react";

function ValueCard({
  value,
  reverse = false,
}: {
  value: Value;
  reverse?: boolean;
}) {
  function formatWithLineBreaks(text: string) {
    return text.split("|").map((part, idx) => (
      <React.Fragment key={idx}>
        {part.trim()}
        <br className='hidden lg:block' />
      </React.Fragment>
    ));
  }

  // Define spacing based on value ID and reverse state
  const getSpacingClass = () => {
    const id = "id" in value ? value.id : 0;
    if (id === 1) return reverse ? "md:mr-[79px]" : "md:ml-[79px]";
    if (id === 3) return reverse ? "md:mr-[79px]" : "md:ml-[79px]";
    return "";
  };

  return (
    <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-x-12'>
      {/* Image */}
      <div
        className={`w-full md:w-auto md:flex-shrink-0 ${
          reverse ? "lg:order-2" : "lg:order-1"
        } mb-6 md:mb-0`}>
        <div className='relative rounded-xl overflow-hidden w-full md:w-[480px]'>
          {/* green accent frame */}
          <div className='absolute -inset-3 rounded-2xl border-[6px] border-[#009A74] -z-10 hidden sm:block' />
          <Image
            src={
              "image" in value &&
              typeof value.image === "object" &&
              "asset" in value.image
                ? value.image.asset.url
                : typeof value.image === "string"
                  ? value.image
                  : ""
            }
            alt={
              "image" in value &&
              typeof value.image === "object" &&
              "alt" in value.image
                ? value.image.alt
                : value.title
            }
            className='rounded-xl object-cover w-full h-auto'
            width={480}
            height={320}
            sizes='(max-width: 768px) 100vw, 480px'
            priority={false}
          />
        </div>
      </div>

      {/* Text */}
      <div
        className={`w-4/5 lg:w-full m-auto flex-1 ${
          reverse ? "lg:order-1" : "lg:order-2"
        } ${getSpacingClass()}`}>
        <div className='w-full flex lg:block justify-center items-center mt-10 lg:mt-0'>
          <Image
            src={
              typeof value.icon === "object" && "asset" in value.icon
                ? value.icon.asset.url
                : value.icon
            }
            alt={
              typeof value.icon === "object" && "alt" in value.icon
                ? value.icon.alt
                : value.title
            }
            className='rounded-xl object-cover mb-3'
            width={55}
            height={55}
            priority={false}
          />
        </div>
        <h3 className='text-xl md:text-[35px] md:leading-[40px] font-semibold text-[#010101] mb-2'>
          {formatWithLineBreaks(value.title)}
        </h3>
        <p className='text-[#363E3F] leading-7 text-sm md:text-base font-normal'>
          {formatWithLineBreaks(value.description)}
        </p>
      </div>
    </div>
  );
}

interface Value {
  title: string;
  description: string;
  image: {
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
  icon: {
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

interface ValuesSection {
  title: string;
  subtitle: string;
  values: Value[];
}

interface TeamMember {
  name: string;
  role: string;
  image: {
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
  bio?: string;
  linkedin?: string;
  twitter?: string;
}

interface TeamSection {
  title: string;
  subtitle: string;
  showSection: boolean;
  teamMembers: TeamMember[];
}

export interface AboutPageData {
  valuesSection: ValuesSection;
  teamSection: TeamSection;
}

interface CoreValuesProps {
  aboutPageData: AboutPageData;
}

export default function CoreValues({ aboutPageData }: CoreValuesProps) {
  const { valuesSection } = aboutPageData;
  return (
    <section className='mx-auto px-4 py-10 md:py-16 lg:py-16 max-w-6xl'>
      {/* Section header */}
      <div className='text-center max-w-2xl mx-auto mb-8 md:mb-16'>
        <h2 className='text-2xl md:text-[40px] md:leading-[44px] font-semibold text-[#010101]'>
          {valuesSection.title || "Our Core Values"}
        </h2>
        <p className='mt-3 text-sm md:text-lg font-medium text-[#363E3F]'>
          {valuesSection.subtitle ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilibus finib."}
        </p>
      </div>

      {/* Values list */}
      <div className='space-y-10 md:space-y-20 lg:space-y-24'>
        {valuesSection.values && valuesSection.values.length > 0
          ? valuesSection.values.map((val, i) => (
              <ValueCard key={val.title} value={val} reverse={i % 2 === 1} />
            ))
          : null}
      </div>
    </section>
  );
}
