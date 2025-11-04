"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const header: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

const grid: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

function MoreBenefits() {
  const benefits = [
    {
      id: 1,
      title: "Instant Money Transfers",
      description:
        "Send and receive money in seconds without the long delays or high fees of traditional banking.",
    },
    {
      id: 2,
      title: "Secure Virtual Cards",
      description:
        "Enjoy safer online shopping and subscriptions with instantly generated virtual cards. Protect your main account from fraud while making global payments with ease.",
    },
    {
      id: 3,
      title: "Pay Bills with Ease",
      description:
        "No more juggling multiple apps or standing in long queues. Kobo Vault lets you recharge airtime, pay for electricity, water, internet, and more, all from one place.",
    },
  ];

  return (
    <section className="container mx-auto max-w-7xl px-4 py-6 md:py-8">
      {/* Header */}
      <motion.div
        variants={header}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row md:py-8"
      >
        <h1 className="mb-2 max-w-sm text-2xl font-semibold leading-[1.25] md:text-4xl">
          More Benefits From Kobo Vault
        </h1>
        <p className="max-w-lg text-center text-base font-medium md:text-left text-[#363E3F]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          vehicula ac ex ac vehicula. Vestibulum finibus ante sit amet cursus
          tempus. Ipsum dolor sit amet, consectetur adip
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:gap-12"
      >
        {benefits.map((benefit) => (
          <motion.article
            key={benefit.id}
            variants={card}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="flex flex-col rounded-2xl bg-[#FAFDFE] p-4"
          >
            {/* Icon with quick line-draw */}
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <motion.path
                d="M14.8747 28.1918V5.8085C14.8747 3.6835 13.968 2.8335 11.7155 2.8335H5.99217C3.73967 2.8335 2.83301 3.6835 2.83301 5.8085V28.1918C2.83301 30.3168 3.73967 31.1668 5.99217 31.1668H11.7155C13.968 31.1668 14.8747 30.3168 14.8747 28.1918Z"
                stroke="#009A74"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0.6 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.5, ease: EASE }}
              />
              <motion.path
                d="M31.1667 15.4418V5.8085C31.1667 3.6835 30.26 2.8335 28.0075 2.8335H22.2842C20.0317 2.8335 19.125 3.6835 19.125 5.8085V15.4418C19.125 17.5668 20.0317 18.4168 22.2842 18.4168H28.0075C30.26 18.4168 31.1667 17.5668 31.1667 15.4418Z"
                stroke="#009A74"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0.6 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
              />
              <motion.path
                d="M31.1667 28.1915V25.6415C31.1667 23.5165 30.26 22.6665 28.0075 22.6665H22.2842C20.0317 22.6665 19.125 23.5165 19.125 25.6415V28.1915C19.125 30.3165 20.0317 31.1665 22.2842 31.1665H28.0075C30.26 31.1665 31.1667 30.3165 31.1667 28.1915Z"
                stroke="#009A74"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0.6 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
              />
            </svg>

            <h2 className="mt-4 mb-2 text-lg font-semibold text-[#010101]">
              {benefit.title}
            </h2>
            <p className="text-base font-medium text-[#363E3F]">
              {benefit.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default MoreBenefits;
