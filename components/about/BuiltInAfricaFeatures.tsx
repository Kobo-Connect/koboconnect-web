"use client";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";
import { BuiltInAfricaSection } from "./BuiltInAfrica";
import { motion, Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const listVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.4, ease: EASE },
  },
};

function BuiltInAfricaFeatures({
  builtInAfricaSection,
}: {
  builtInAfricaSection: BuiltInAfricaSection;
}) {
  const PILL_ITEMS = [
    { text: "Offline-friendly (USSD + agent networks)" },
    { text: "Financially inclusive" },
    { text: "Designed with cultural relevance" },
    { text: "Locally integrated and scalable" },
  ];
  return (
    <div>
      <motion.div
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className='flex flex-col divide-y divide-[#2A3E3C]'
      >
        {(builtInAfricaSection.features &&
        builtInAfricaSection.features.length > 0
          ? builtInAfricaSection.features
          : PILL_ITEMS
        ).map((item) => (
          <motion.button
            key={item.text}
            variants={itemVariants}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            type='button'
            className='group flex items-center justify-between py-3 sm:py-4 text-left text-[#EAF2F1] transition px-1'
            //   onClick={() => item.href && window.open(item.href, "_blank")}
          >
            <span className='text-sm sm:text-base lg:text-lg font-medium'>
              {item.text}
            </span>
            <span className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F2C29] group-hover:bg-[#0F3A34] cursor-pointer'>
              <IconArrowRight size={16} />
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

export default BuiltInAfricaFeatures;
