"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import heroImg from "@/assets/images/hero.png";
import appStoreSvg from "@/assets/appStore.svg";
import playStoreSvg from "@/assets/playStore.svg";
import TypewriterText from "../shared/typewriter-text";
import heroBg from "@/assets/images/heroBg.png";
import Link from "next/link";
import { HomePageData } from "@/lib/sanity/queries/home";
import { urlFor } from "@/lib/sanity/image";

interface HeroProps {
  data?: HomePageData["heroSection"];
}

const EASE = [0.22, 1, 0.36, 1] as const;

const wrap: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

export default function Hero({ data }: HeroProps) {
  // Fallback data if no Sanity data is provided
  const heroData = data || {
    backgroundImage: {
      asset: {
        url: heroBg.src,
        _id: "",
        metadata: { dimensions: { width: 0, height: 0 } },
      },
      alt: "Hero background",
    },
    mainTitle: "Experience",
    typewriterWords: ["Banking", "Shopping", "Sending Money"],
    appName: "Kobo App",
    afterTypewriterText: "Like Never Before with",
    description:
      "Kobo Connect combines payments, transport, chat, food, shopping, and healthcare into a single seamless platform built for modern living. It's not just an app, it's your daily companion.",
    heroImage: {
      asset: {
        url: heroImg.src,
        _id: "",
        metadata: { dimensions: { width: 0, height: 0 } },
      },
      alt: "Hero image",
    },
    appStoreLink: "#",
    playStoreLink: "#",
  };

  return (
    <section className="relative h-full md:h-[calc(100vh-80px)]">
      <Image
        src={urlFor(heroData.backgroundImage.asset).url()}
        priority
        alt='hero-bg'
        fill
        className='object-cover absolute inset-0 z-0'
      />
      <motion.div variants={wrap}
        initial="hidden"
        animate="show" className='max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-4 py-4 md:py-6 px-4 relative z-10'>
        <div className='py-10 text-white max-w-2xl'>
          <div className="">
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold leading-[1.25]'>
              {heroData.mainTitle} {""}
              <span className='text-[#007F5F]'>
                <TypewriterText
                  words={heroData.typewriterWords}
                />
              </span>
              <br /> {heroData.afterTypewriterText} <br />
            </h1>

            <motion.h1 variants={fadeUp} className='relative text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.40]'>
              <span className='relative'>
                {heroData.appName}
                <svg
                  className='absolute left-2 bottom-0 w-20 lg:w-40'
                  height='60'
                  viewBox='0 0 278 82'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M225.325 16.0525C206.359 9.83672 146.22 2.40419 57.3937 22.4006C-31.4322 42.397 6.15813 64.8532 36.0565 73.5818C68.4575 79.7976 151.594 86.5953 221.769 67.2337C252.195 60.6212 302.297 41.1275 259.307 16.0525C249.429 10.7624 214.736 0.578977 154.992 2.16599'
                    stroke='#007F5F'
                    strokeWidth='4'
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className='text-[#B5BBBB] my-6 text-base md:text-[22px] md:leading-[40px] pr-4 max-w-2xl'>
              {heroData.description}
            </motion.p>
          </div>

          {/* store badges */}
          <motion.div variants={fadeUp} className="flex gap-5 pt-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "tween", duration: 0.12, ease: EASE }}
            >
              <Image
                src={appStoreSvg}
                priority
                alt="app-store"
                width={150}
                height={50}
                style={{ width: "150px", height: "auto" }}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "tween", duration: 0.12, ease: EASE }}
            >
              <Image
                src={playStoreSvg}
                priority
                alt="play-store"
                width={150}
                height={50}
                style={{ width: "150px", height: "auto" }}
              />
            </motion.div>
          </motion.div>
        </div>
        <div className='py-4'>
          <Image
            src={urlFor(heroData.heroImage.asset).url()}
            alt={heroData.heroImage.alt}
            width={480}
            height={420}
            priority
            className='object-contain'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </motion.div>
    </section>
  );
}
