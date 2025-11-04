"use client";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";
import { BuiltInAfricaSection } from "./BuiltInAfrica";

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
      <div className='flex flex-col divide-y divide-[#2A3E3C]'>
        {(builtInAfricaSection.features &&
        builtInAfricaSection.features.length > 0
          ? builtInAfricaSection.features
          : PILL_ITEMS
        ).map((item) => (
          <button
            key={item.text}
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
          </button>
        ))}
      </div>
    </div>
  );
}

export default BuiltInAfricaFeatures;
