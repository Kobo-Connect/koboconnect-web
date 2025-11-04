import React from "react";
import Image from "next/image";
import { Button, Divider } from "@mantine/core";
import { getOurAppsData } from "@/lib/sanity/queries/ourApps";
import { Variants } from "framer-motion";
import MotionWrapper from "../shared/MotionWrapper";

const EASE = [0.22, 1, 0.36, 1] as const;

const section: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.55, ease: EASE },
  },
};

const imagePop: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.6, ease: EASE },
  },
};

async function OurApps() {
  const ourAppsData = await getOurAppsData();

  // Don't render if no data and section is disabled
  if (!ourAppsData || !ourAppsData.showSection) {
    return null;
  }

  return (
    <div className='bg-[#0A1B1B] '>
      <MotionWrapper className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto pt-10 md:pt-24 lg:pt-28 px-4'>
        {/* Copy column */}

        <MotionWrapper variants={section} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className='space-y-6 md:space-y-8 pb-6 lg:pb-16 max-w-lg'>
          <div className='space-y-2'>
            <h3 className='text-[#009A74] font-medium text-xl '>
              {ourAppsData.subtitle}
            </h3>
            <h2 className='font-semibold text-white text-4xl leading-[1.30]'>
              {ourAppsData.title}
            </h2>
            <p className='text-lg font-medium text-[#B5BBBB]'>
              {ourAppsData.description}
            </p>
          </div>

          <div className='flex gap-6 lg:gap-8 text-white items-center pb-4 lg:pb-6'>
            {ourAppsData.stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div>
                  <h2 className='font-semibold text-2xl md:text-4xl'>
                    {stat.value}
                  </h2>
                  <p>{stat.label}</p>
                </div>
                {index < ourAppsData.stats.length - 1 && (
                  <Divider orientation='vertical' />
                )}
              </React.Fragment>
            ))}
          </div>

          <Button
            size='md'
            variant='default'
            style={{
              backgroundColor: "#009A74",
              color: "white",
              borderColor: "#008E6A",
              borderRadius: 12,
            }}
            component='a'
            href={ourAppsData.buttonLink || "#"}>
            {ourAppsData.buttonText}
          </Button>
        </MotionWrapper>


        {/* Image column */}
        <MotionWrapper variants={imagePop}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative min-h-96 flex justify-center">
          <Image
            src={ourAppsData.appImage.asset.url}
            alt={ourAppsData.appImage.alt}
            width={320}
            height={320}
          />
        </MotionWrapper>
      </MotionWrapper>
    </div>
  );
}

export default OurApps;
