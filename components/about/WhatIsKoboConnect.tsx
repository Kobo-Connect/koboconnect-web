"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

interface WhatIsKoboSection {
  title: string;
  subtitle: string;
  description: string;
  stats: Stat[];
  phoneImage: {
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
  whatIsKoboSection: WhatIsKoboSection;
}

interface WhatIsKoboConnectProps {
  aboutPageData: AboutPageData;
}

// Easing
const EASE = [0.22, 1, 0.36, 1] as const;

// Variants
const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.6, ease: EASE },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 160, damping: 20 },
  },
};

function WhatIsKoboConnect({ aboutPageData }: WhatIsKoboConnectProps) {
  const { whatIsKoboSection } = aboutPageData;
  return (
    <div>
      <div className='max-w-6xl mx-auto mt-8 sm:mt-10 lg:mt-12 px-4'>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
          className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center'>
          {/* Left stats with subtle separators */}
          <motion.div
            variants={fadeUp}
            className='order-2 lg:order-1 flex flex-col justify-center  lg:items-center'>
            <div className='flex flex-row sm:flex-row lg:flex-col justify-center sm:justify-around lg:justify-end lg:space-y-6 space-x-6 sm:space-x-8 lg:space-x-0'>
              {whatIsKoboSection.stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <motion.div
                    variants={fadeUp}
                    className='flex flex-col items-center lg:items-end'>
                    <p className='text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#010101]'>
                      {stat.value}
                    </p>
                    <p className='text-sm sm:text-base lg:text-lg font-normal text-[#5B6667] text-center lg:text-right'>
                      {stat.label}
                    </p>
                  </motion.div>

                  {/* Add dividers between stats */}
                  {index < whatIsKoboSection.stats.length - 1 && (
                    <>
                      {/* Mobile/Tablet horizontal divider, Desktop vertical divider */}
                      <div
                        aria-hidden='true'
                        className='hidden lg:block h-px w-[120px] xl:w-[150px] my-4 bg-[#E6ECEC]'
                      />
                      <div
                        aria-hidden='true'
                        className='lg:hidden w-px h-12 sm:h-14 bg-[#E6ECEC] self-center'
                      />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Center phone */}
          <motion.div
            variants={scaleIn}
            className='order-1 lg:order-2 flex flex-col items-center justify-center'>
            <div className='relative'>
              <Image
                src={whatIsKoboSection.phoneImage.asset.url}
                alt={whatIsKoboSection.phoneImage.alt}
                width={420}
                height={420}
                priority
                sizes='(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, (max-width: 1280px) 400px, 620px'
              />
            </div>
          </motion.div>

          {/* Right copy */}
          <motion.div
            variants={fadeUp}
            className='order-3 space-y-4 lg:space-y-6'>
            <p className='text-lg sm:text-xl font-medium text-[#009A74]'>
              {whatIsKoboSection.title}
            </p>
            <h2 className='text-2xl sm:text-3xl font-semibold text-[#010101] mt-2.5 mb-4 lg:mb-6'>
              {whatIsKoboSection.subtitle}
            </h2>
            <p className='text-[#363E3F] leading-6 sm:leading-7 lg:leading-8 text-base sm:text-lg font-normal'>
              {whatIsKoboSection.description}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default WhatIsKoboConnect;
