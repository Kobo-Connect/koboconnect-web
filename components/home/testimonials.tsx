import React from "react";
import { Button } from "@mantine/core";
import TestimonialCaurosel from "./testimonial-caurosel";
import { getTestimonialsData } from "@/lib/sanity/queries/testimonials";
import MotionWrapper from "../shared/MotionWrapper";
import { fadeUp, popIn } from "@/lib/animations/variants";

async function Testimonials() {
  const testimonialsData = await getTestimonialsData();

  // Don't render if no data and section is disabled
  if (!testimonialsData || !testimonialsData.showSection) {
    return null;
  }

  return (
    <div className='relative container max-w-7xl mx-auto'>
      <MotionWrapper
        as="div"
        variants={{
          hidden: { opacity: 1 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.06 },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="py-10"
      >
        <div className='  py-10 md:py-20 lg:py-28 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-baseline'>
          {/* Left: copy */}
          <MotionWrapper as="div" variants={fadeUp} >
            <div className='space-y-4 md:col-span-1 justify-center pb-4 lg:pb-10 '>
              <h2 className='text-2xl md:text-4xl font-semibold leading-[1.25]'>
                {testimonialsData.title}
              </h2>
              <p className='text-base font-medium max-w-md'>
                {testimonialsData.description}
              </p>

              <div className='mt-6'>
                <MotionWrapper
                  as="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "tween", duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Button
                    variant='default'
                    style={{
                      backgroundColor: "#009A74",
                      color: "white",
                      borderColor: "#008E6A",
                    }}
                    component='a'
                    href={testimonialsData.buttonLink || "#"}>
                    {testimonialsData.buttonText}
                  </Button>
                </MotionWrapper>
              </div>
            </div>

          </MotionWrapper>

          {/* Right: carousel */}
          <MotionWrapper as="div" variants={popIn} >
            <div className='md:col-span-1 '>
              <div className='w-[90%]'>
                <TestimonialCaurosel testimonials={testimonialsData.testimonials} />
              </div>
            </div>
          </MotionWrapper>

        </div>
      </MotionWrapper>


      <svg
        className='absolute right-0 bottom-0 z-0'
        width='425'
        height='100%'
        viewBox='0 0 425 417'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <rect
          width='436'
          height='417'
          rx='20'
          fill='url(#paint0_linear_2166_887)'
        />
        <defs>
          <linearGradient
            id='paint0_linear_2166_887'
            x1='0'
            y1='209'
            x2='377'
            y2='209'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#FAFCFE' stopOpacity='0' />
            <stop offset='1' stopColor='#FAFCFE' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Testimonials;
