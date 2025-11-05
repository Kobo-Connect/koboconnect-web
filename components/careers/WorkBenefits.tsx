import React from "react";
import Image from "next/image";
import { Variants } from "framer-motion";
import MotionWrapper from "../shared/MotionWrapper";

interface Benefit {
  title: string;
  description: string;
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

interface BenefitsSection {
  title?: string;
  subtitle?: string;
  benefits: Benefit[];
}

interface CareersPageData {
  benefitsSection: BenefitsSection;
}

interface WorkBenefitsProps {
  careersPageData: CareersPageData;
}

// Typed easing (cubic-bezier)
const EASE = [0.22, 1, 0.36, 1] as const;

// Variants
const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

function WorkBenefits({ careersPageData }: WorkBenefitsProps) {
  const { benefitsSection } = careersPageData;

  // Use Sanity data if available, otherwise fallback
  const benefitsList =
    benefitsSection.benefits && benefitsSection.benefits.length > 0
      ? benefitsSection.benefits.map((benefit) => ({
          title: benefit.title,
          description: benefit.description,
          icon: benefit.icon.asset.url,
        }))
      : [];
  return (
    <div className='max-w-6xl mx-auto'>
      {benefitsSection.title && (
        <div className='mb-8'>
          <h6 className='text-[#009A74]'>Benefits</h6>
          <h2 className='text-[#010101] text-2xl lg:text-3xl font-semibold'>
            {benefitsSection.title}
          </h2>
          {benefitsSection.subtitle && (
            <p className='text-[#363E3F] mt-2'>{benefitsSection.subtitle}</p>
          )}
        </div>
      )}

      <MotionWrapper
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.3 }}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
          {benefitsList.map((item, index) => (
            <MotionWrapper
              as='div'
              key={index}
              variants={itemVariant}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className='flex items-start gap-4'>
              <MotionWrapper
                whileHover={{ scale: 1.05 }}
                transition={{ type: "tween", duration: 0.25 }}
                className='flex-shrink-0'>
                <Image
                  src={typeof item.icon === "string" ? item.icon : item.icon}
                  alt='icon'
                  className='rounded-full'
                  width={70}
                  height={70}
                />
              </MotionWrapper>

              <div>
                <h2 className='text-lg font-semibold'>{item.title}</h2>
                <p className='text-base text-[#363E3F]'>{item.description}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </MotionWrapper>
    </div>
  );
}

export default WorkBenefits;
