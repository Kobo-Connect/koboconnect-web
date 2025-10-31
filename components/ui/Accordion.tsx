"use client";
import { Accordion } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

function CustomAccordion({ items }: { items: AccordionItem[] }) {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Accordion
      value={value}
      onChange={setValue}
      styles={{
        content: { backgroundColor: "white", fontSize: 16, color: "#363E3F" },
        label: { color: "#010101", fontWeight: 500, fontSize: 18 },
      }}
    >
      {items.map((item) => (
        <Accordion.Item key={item.question} value={item.question}>
          <Accordion.Control chevron={value === item.question ? <IconMinus size={18} /> : <IconPlus size={18} />}>
            {item.question}
          </Accordion.Control>
          <Accordion.Panel>
            <p className='mb-2'>{item.answer}</p>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default CustomAccordion;
