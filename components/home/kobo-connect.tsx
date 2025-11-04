"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { HomePageData } from "@/lib/sanity/queries/home";

// Typed easing (cubic-bezier)
const EASE = [0.22, 1, 0.36, 1] as const;

// Variants
const section: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const header: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

const imgPop: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.55, ease: EASE },
  },
};

const copyPara: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

const contactGrid: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const contactCard: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.35, ease: EASE },
  },
};

interface KoboConnectProps {
  data?: HomePageData["koboConnectSection"];
}

export default function KoboConnect({ data }: KoboConnectProps) {
  const koboConnectData = data!;

  return (
    <section>
      <div className=' mx-auto py-10 md:py-20 px-4 max-w-7xl'>
        <motion.div variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}>
          {/* Heading */}
          <motion.div variants={header} className="mb-4">

            <h2 className='text-[#009A74] font-medium text-xl mb-2'>
              {koboConnectData.subtitle}
            </h2>

            <div className='text-2xl lg:text-3xl font-semibold leading-[1.25] max-w-lg text-[#363E3F]'>
              {koboConnectData.mainTitle &&
                Array.isArray(koboConnectData.mainTitle) ? (
                <PortableText
                  value={koboConnectData.mainTitle}
                  components={{
                    block: {
                      normal: ({ children }) => <span>{children}</span>,
                      h1: ({ children }) => (
                        <h1 className='text-2xl lg:text-3xl font-semibold leading-[1.25]'>
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className='text-xl lg:text-2xl font-semibold leading-[1.25]'>
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className='text-lg lg:text-xl font-semibold leading-[1.25]'>
                          {children}
                        </h3>
                      ),
                    },
                    marks: {
                      strong: ({ children }) => (
                        <strong className='font-bold'>{children}</strong>
                      ),
                      em: ({ children }) => (
                        <em className='italic'>{children}</em>
                      ),
                      code: ({ children }) => (
                        <code className='bg-gray-100 px-1 py-0.5 rounded text-sm'>
                          {children}
                        </code>
                      ),
                    },
                  }}
                />
              ) : (
                <span>{koboConnectData.mainTitle || "Default Title"}</span>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Content grid */}
        <motion.div variants={contactGrid} className='grid grid-cols-1 md:grid-cols-5 gap-8 py-8'>
          {/* Image */}
          <motion.div variants={imgPop} className="relative md:col-span-2">
            <Image
              src={koboConnectData.servicesImage.asset.url}
              alt={koboConnectData.servicesImage.alt}
              width={400}
              height={400}
              className='object-contain'
              priority
            />
          </motion.div>

          {/* Copy + contact cards */}
          <div className='md:col-span-3 flex flex-col gap-6 items-center'>
            <div className='flex flex-col gap-4 text-[#363E3F]'>
              {koboConnectData.description.map((paragraph, index) => (
                <motion.p key={index} variants={copyPara}>{paragraph}</motion.p>
              ))}
            </div>

            <motion.div
              variants={contactCard}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }} className='grid grid-cols-3 gap-4 mt-6'>
              {koboConnectData.contactInfo.map((item, index) => (
                <motion.div key={index} variants={contactCard} className='bg-[#FAFDFE] p-4 rounded-lg w-full'>
                  <Image
                    src={item.icon.asset.url}
                    alt={item.icon.alt}
                    width={24}
                    height={24}
                    className='mb-4'
                  />
                  <div className=''>
                    <p className='text-base font-[400] break-words whitespace-normal max-w-full'>
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
