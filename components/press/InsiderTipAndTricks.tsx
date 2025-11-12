"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { urlFor } from "@/lib/sanity/image";
import { motion } from "framer-motion";
import { card, grid, header, section } from "@/lib/animations/variants";

interface Tip {
  title: string;
  description: string;
  image: {
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
  backgroundColor: string;
  textColor: string;
}

interface InsiderTipAndTricksConfig {
  title: string;
  subtitle: string;
  showSection: boolean;
  tips: Tip[];
}

interface InsiderTipAndTricksProps {
  pressPageData: any;
}

function InsiderTipAndTricks({ pressPageData }: InsiderTipAndTricksProps) {
  // config for the section from sanity or render default fallback
  const config: InsiderTipAndTricksConfig =
    pressPageData?.insiderTipsSection || {
      title: "Insider tips and tricks for maximum efficiency",
      subtitle:
        "Discover valuable insights to optimize your business and maximize efficiency.",
      showSection: true,
      tips: [],
    };

  if (!config.showSection || !config.tips.length) {
    return null;
  }

  return (
    <div className='max-w-6xl mx-auto'>

      <motion.div variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}>

        {/* Header */}
        <motion.div variants={header} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className='mb-8'>
          <h2 className='text-[#010101] text-2xl lg:text-3xl font-semibold'>
            {config.title}
          </h2>
          <p className='text-[#363E3F] text-lg'>{config.subtitle}</p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'
        >
          {config.tips.map((item: Tip, index: number) => (
            <InsiderTipAndTricksItem key={index} item={item} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

function InsiderTipAndTricksItem({ item }: { item: Tip }) {
  return (
    <motion.article
      variants={card}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      className='grid grid-rows-5 gap-4'
      style={{
        backgroundColor: item.backgroundColor,
        color: item.textColor,
        borderRadius: 12,
      }}
    >
      <div className='p-4 lg:p-6 row-span-3 space-y-2'>
        <h2 className='text-xl lg:text-2xl font-semibold'>{item.title}</h2>
        <p className='text-base'>
          {item.description.slice(0, 100)}{" "}
          {item.description.length > 100 ? "..." : ""}
        </p>
        <motion.div
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "tween", duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button
            variant='subtle'
            color={item.textColor}
            rightSection={<IconArrowRight />}>
            Read More
          </Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className='relative row-span-2'
      >
        <Image
          src={urlFor(item.image.asset).width(400).height(300).url()}
          alt={item.image.alt}
          fill
          className='object-cover'
        />
      </motion.div>
    </motion.article>
  );
}

export default InsiderTipAndTricks;
