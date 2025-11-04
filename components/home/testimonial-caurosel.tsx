"use client";

import "@mantine/carousel/styles.css";
import React, { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { motion, type Variants } from "framer-motion";
import TestimonialCard from "./testimonial-card";

const EASE = [0.22, 1, 0.36, 1] as const;

const slideVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

interface TestimonialCauroselProps {
  testimonials: Array<{
    name: string;
    title: string;
    comment: string;
    rating: number;
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
  }>;
}

function TestimonialCaurosel({ testimonials }: TestimonialCauroselProps) {
  const [active, setActive] = useState(0);

  // Fallback data if no testimonials provided
  const fallbackTestimonials = [
    {
      name: "John Doe",
      image: {
        asset: {
          _id: "",
          url: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
          metadata: { dimensions: { width: 0, height: 0 } },
        },
        alt: "John Doe",
      },
      rating: 4,
      title: "Product Designer",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo a facilisis finibus scelerisque. In et venenatis leo, non luctus mau. Maecenas efficitur volutpat nibh, a aliquet elit.",
    },
  ];

  const displayTestimonials =
    testimonials && testimonials.length > 0
      ? testimonials
      : fallbackTestimonials;

  return (
    <Carousel
      height={"100%"}

      slideSize='70%'
      slideGap='lg'
      withControls
      styles={{
        root: {
          paddingLeft: 10,
          paddingRight: 20,
        },
        control: {
          zIndex: 2,
          marginRight: -30,
          marginLeft: -25,
          "dataInactive": {
            opacity: 0,
            cursor: "default",
          },
        },
      }}
      emblaOptions={{
        loop: true,
        dragFree: true,
        align: "start",
      }}
      onSlideChange={setActive}
    >
      {displayTestimonials.map((testimonial, index) => {
        const isActive = index === 0;
        return (
          <Carousel.Slide key={`${testimonial.name}-${index}`} className='py-4 '>


            <motion.div
              variants={slideVariants}
              initial="hidden"
              animate="show"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              className="h-full"
              style={{
                // de-emphasize non-active slides slightly
                transformOrigin: "center",
                filter: isActive ? "none" : "grayscale(0)",
              }}
            >
              <motion.div
                animate={{
                  scale: isActive ? 1 : 0.97,
                  opacity: isActive ? 1 : 0.9,
                }}
                transition={{ type: "tween", duration: 0.25, ease: EASE }}
                className="h-full"
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            </motion.div>
          </Carousel.Slide>
        )
      })}
    </Carousel>
  );
}

export default TestimonialCaurosel;
