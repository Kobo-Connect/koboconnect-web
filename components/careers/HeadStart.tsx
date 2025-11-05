import React from "react";
import { type Variants } from "framer-motion";
import ImageMansory from "./ImageMansory";
import MotionWrapper from "../shared/MotionWrapper";

// Typed easing (cubic-bezier)
const EASE = [0.22, 1, 0.36, 1] as const;

// Variants
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

const blockVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 180, damping: 22 },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.55, ease: EASE, delay: 0.05 },
  },
};

interface CultureSection {
  title?: string;
  subtitle?: string;
  description?: string;
  cultureImages?: {
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
    caption?: string;
  }[];
}

interface CareersPageData {
  cultureSection: CultureSection;
}

interface HeadStartProps {
  careersPageData: CareersPageData;
}

function HeadStart({ careersPageData }: HeadStartProps) {
  const { cultureSection } = careersPageData;
  return (
    <div className='max-w-6xl mx-auto px-4 space-y-4 md:space-y-12 lg:space-y-16'>
      <MotionWrapper
        as='div'
        variants={headerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.4 }}
        className='flex flex-col gap-2 max-w-sm'>
        <h6 className='text-[#009A74] text-lg md:text-xl'>
          {cultureSection.subtitle || "Head Start"}
        </h6>
        <h2 className='text-[#010101] text-2xl md:text-3xl lg:text-4xl font-semibold'>
          {cultureSection.title || "Build your career with Kobo Connect"}
        </h2>
      </MotionWrapper>

      {/* Image masonry block (wrapped for animation without touching the component) */}
      <MotionWrapper
        as='div'
        variants={blockVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.4 }}>
        <ImageMansory sanityImages={cultureSection.cultureImages} />
      </MotionWrapper>

      <MotionWrapper
        variants={textVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.4 }}
        className='max-w-5xl'>
        <p className='text-[#363E3F] text-base md:text-lg'>
          {cultureSection.description}
        </p>
      </MotionWrapper>
    </div>
  );
}

export default HeadStart;
