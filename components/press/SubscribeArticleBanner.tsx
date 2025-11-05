import React from "react";
import Image from "next/image";
import { Button, Input } from "@mantine/core";
import { urlFor } from "@/lib/sanity/image";
import { type Variants } from "framer-motion";
import MotionWrapper from "../shared/MotionWrapper";

interface SubscribeSectionConfig {
  title: string;
  subtitle: string;
  image?: {
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
  buttonText: string;
  placeholderText: string;
  showSection: boolean;
}

interface SubscribeArticleBannerProps {
  pressPageData: any;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const section: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const imgPop: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.6, ease: EASE },
  },
};

const copyUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

function SubscribeArticleBanner({
  pressPageData,
}: SubscribeArticleBannerProps) {
  // config for the section from sanity or render default fallback
  const config: SubscribeSectionConfig = pressPageData?.subscribeSection || {
    title: "Read more articles like this",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adip elit. Praesent eget leo ac eros facilisis finibus.",
    buttonText: "Subscribe",
    placeholderText: "Enter your email",
    showSection: true,
    image: null,
  };

  // if the section is not shown, return null
  if (!config.showSection) {
    return null;
  }

  return (
    <div className='max-w-7xl mx-auto bg-[#007F5E] rounded-2xl'>
      <MotionWrapper variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }} className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
        {config.image && (
          <div className='col-span-1'>
            {/* Left: image */}
            <MotionWrapper variants={imgPop} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
              <MotionWrapper animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: EASE }}>
                <Image
                  src={urlFor(config.image.asset).url()}
                  alt={config.image.alt}
                  width={500}
                  height={500}
                  className='object-cover'
                />
              </MotionWrapper>

            </MotionWrapper>

          </div>
        )}

        {/* Right: copy + form */}
        <div className='col-span-1 flex flex-col justify-center pr-4 max-w-md'>
          <div className='mb-6 space-y-2'>
            <h2 className='text-white text-2xl lg:text-3xl font-semibold'>
              {config.title}
            </h2>
            <p className='text-[#CCE5DF] text-lg'>{config.subtitle}</p>
          </div>

          <div className='flex items-center gap-2 w-full'>
            <MotionWrapper className="flex-1"
              whileFocus={{ scale: 1.005 }}
              transition={{ type: "tween", duration: 0.12, ease: EASE }}>
              <Input
                variant='unstyled'
                className='w-full placeholder:text-[#ABCCC4]'
                style={{
                  borderBottom: "1px solid #FFFFFF4D",
                  width: "100%",
                  color: "#FFFFFF",
                }}
                placeholder={config.placeholderText}
              />
            </MotionWrapper>
            <MotionWrapper whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "tween", duration: 0.12, ease: EASE }} className='w-[30%]'>
              <Button variant='filled' color='#009A74' fullWidth>
                {config.buttonText}
              </Button>
            </MotionWrapper>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
}

export default SubscribeArticleBanner;
