import { Variants } from "framer-motion";
import React from "react";
import MotionWrapper from "../shared/MotionWrapper";

export interface InnovativeApproachData {
  _id: string;
  title: string;
  description: string;
  showSection: boolean;
}

interface InnovativeApproachProps {
  data: InnovativeApproachData;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const section: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.55, ease: EASE },
  },
};

async function InnovativeApproach({ data }: InnovativeApproachProps) {
  const innovativeData = data;

  // Don't render if no data and section is disabled
  if (!innovativeData || !innovativeData.showSection) {
    return null;
  }
  return (
    <div>
      <MotionWrapper as="div" variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className='container mx-auto py-10 md:py-20 lg:py-28 px-4 max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div>
            {/* Left: Heading + underline draw */}
            <MotionWrapper as="h2" variants={fadeUp} className='text-2xl md:text-4xl max-w-lg font-semibold leading-[1.25]'>
              {innovativeData.title}
            </MotionWrapper>

            <svg
              className='w-60 md:w-90 h-8 mt-4'
              viewBox='0 0 472 33'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1 16.4556C74.1648 8.27411 250.539 -5.1436 370.717 6.6378C308.662 8.6709 167.578 17.0043 106.154 29.2545C104.947 29.4952 105.16 30.9771 106.386 30.8701C184.442 24.0618 355.134 14.8783 471 30.3637'
                stroke='#007F5F'
                strokeWidth='3'
              />
            </svg>
          </div>

          <div>
            <MotionWrapper as="p" variants={slideInRight} className="text-[#363E3F] font-[400] text-lg">{innovativeData.description}</MotionWrapper>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
}

export default InnovativeApproach;
