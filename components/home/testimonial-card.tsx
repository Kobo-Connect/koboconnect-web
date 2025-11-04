"use client";

import { Avatar, Rating } from "@mantine/core";
import { motion, type Variants } from "framer-motion";

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  title: string;
  image:
  | string
  | {
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


const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { name, rating, comment, title, image } = testimonial;

  // Handle both string URLs and Sanity image objects
  const imageUrl = typeof image === "string" ? image : image.asset.url;

  return (
    <motion.div variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className="relative rounded-2xl bg-[#FAFDFE] p-4 shadow-sm">

      {/* Avatar */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
      >
        <Avatar
          radius='xl'
          src={imageUrl}
          className='absolute top-[-30px] left-0 z-40'
          alt={typeof image === "string" ? "avatar" : image.alt}
        />
      </motion.div>

      <div className='space-y-4'>
        <div>
          <p className='block text-base font-medium text-[#363E3F]'>
            &quot;{comment}&quot;
          </p>
        </div>

        <div className='flex items-center justify-between gap-2'>
          <div>
            <h6 className='text-base font-medium text-[#010101]'>{name}</h6>
            <p className='text-sm font-medium text-[#363E3F]'>{title}</p>
          </div>
          <Rating defaultValue={rating} readOnly />
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
