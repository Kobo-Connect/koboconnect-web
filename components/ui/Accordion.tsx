"use client";
import { Accordion } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

interface AccordionItem {
  question: string;
  answer: string;
}

// easing function (typed)
const EASE = [0.22, 1, 0.36, 1] as const;

const listVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.35, ease: EASE },
  },
};

function CustomAccordion({ items }: { items: AccordionItem[] }) {
  const [value, setValue] = useState<string | null>(null);

  if (!items) {
    return null;
  }


  return (
    <motion.div variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto grid max-w-3xl gap-4">

      <Accordion
        value={value}
        onChange={setValue}
        styles={{
          content: { backgroundColor: "white", fontSize: 16, color: "#363E3F" },
          label: { color: "#010101", fontWeight: 500, fontSize: 18 },
        }}
      >
        {items.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Accordion.Item key={item.question} value={item.question}>
              <Accordion.Control chevron={value === item.question ? <IconMinus size={18} /> : <IconPlus size={18} />}>
                {item.question}
              </Accordion.Control>
              <Accordion.Panel>
                <p className='mb-2'>{item.answer}</p>
              </Accordion.Panel>
            </Accordion.Item>
          </motion.div>

        ))}
      </Accordion>
    </motion.div>
  );
}

export default CustomAccordion;
