"use client";

import { Avatar, Rating } from "@mantine/core";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  title: string;
  image: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const cardWrap: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const imgReveal: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

const panelReveal: Variants = {
  hidden: { opacity: 0, x: 12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.55, ease: EASE },
  },
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { name, rating, comment, title, image } = testimonial;

  return (
    <motion.div
      variants={cardWrap}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.35 }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className='grid grid-cols-4 gap-4 md:gap-6'>
      {/* Image */}
      <motion.div
        variants={imgReveal}
        className='relative col-span-4 min-h-[220px] md:col-span-1 md:min-h-[200px]'>
        <Image
          src={image}
          alt='avatar'
          fill
          className='rounded-2xl object-cover'
        />
      </motion.div>

      {/* Text panel */}
      <motion.div
        variants={panelReveal}
        className='relative col-span-4 flex flex-col justify-center rounded-2xl bg-[#0A1B1B] p-4 text-white md:col-span-3 md:p-8'>
        <div className='space-y-4'>
          <em className='text-base font-medium'>&quot;{comment}&quot;</em>

          <div className='flex items-center justify-between'>
            <div>
              <h6 className='text-base font-medium'>{name}</h6>
              <p className='text-sm font-medium'>{title}</p>
            </div>
            <Rating defaultValue={rating} readOnly />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default TestimonialCard;
