"use client";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type SanityImage = {
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
  caption?: string;
};

type MasonryImage = {
  src: string;
  alt?: string;
  className?: string;
};

type Props = {
  images?: MasonryImage[];
  sanityImages?: SanityImage[];
  rounded?: string; // tailwind rounding, e.g. "rounded-2xl"
};

// Default demo content (7 images). Replace with your assets.
const DEFAULT_IMAGES: MasonryImage[] = [
  {
    src: "https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG",
    alt: "img-1",
  },
  {
    src: "https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG",
    alt: "img-2",
  },
  {
    src: "https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG",
    alt: "img-3",
  },
  {
    src: "https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG",
    alt: "img-4",
  },
  {
    src: "https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG",
    alt: "img-5",
  },
  {
    src: "https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG",
    alt: "img-6",
  },
  {
    src: "https://o7y30yptvf.ufs.sh/f/5dyupQ86ApvTubS49pGvyT0VEWRgDkPbcFCw8SIUqYtjendG",
    alt: "img-7",
  },
];

// Layout mapping to 4 columns on md+ screens to match the Figma reference.
// Each array entry contains the indices of images placed in that column (top-to-bottom).
// We also add an offset class on the very first tile to visually "center" it in its column.
const DEFAULT_COLUMN_MAP: number[][] = [
  [0],
  // col 2: two stacked images
  [1, 2],
  // col 3: two stacked images (will be pushed down via margin-top)
  [3, 4],
  // col 4: two stacked images
  [5, 6],
];

// Easing (typed cubic-bezier)
const EASE = [0.22, 1, 0.36, 1] as const;

// Variants
const gridVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

const tileVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};
function ImageMansory({
  images = DEFAULT_IMAGES,
  sanityImages,
  rounded = "rounded-xl",
}: Props) {
  // Convert Sanity images to MasonryImage format if provided
  const convertedImages: MasonryImage[] =
    sanityImages && sanityImages.length > 0
      ? sanityImages.map((sanityImg, index) => ({
        src: sanityImg.asset.url,
        alt: sanityImg.alt || `Culture image ${index + 1}`,
        className: sanityImg.caption ? "has-caption" : undefined,
      }))
      : images;

  // Safety: enforce exactly 7 items if more provided.
  const items = convertedImages.slice(0, 7);

  // If no images available, return null
  if (items.length === 0) {
    return null;
  }
  // Build 4 columns map from provided images when count is 7.
  const columnMap = DEFAULT_COLUMN_MAP;

  return (
    <motion.div variants={gridVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }} className='grid grid-cols-2 md:grid-cols-4 gap-6'>
      {columnMap.map((col, colIdx) => (
        <motion.div variants={columnVariants}
          key={colIdx}
          className={`grid gap-6 ${colIdx === 2 ? "mt-6 md:mt-12" : ""}`}>
          {col.map((imgIdx, idxInCol) => {
            const item = items[imgIdx];
            if (!item) return null;

            // Center single image in column 1; others default
            const offsetClass = colIdx === 0 ? "md:self-center" : "";

            return (
              <motion.div
                key={imgIdx}
                variants={tileVariants}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`relative aspect-square w-full overflow-hidden ${rounded} ${offsetClass}`}>
                <Image
                  src={item.src}
                  alt={item.alt || ""}
                  fill
                  sizes='(min-width: 768px) 25vw, 50vw'
                  className={`object-cover ${rounded} ${item.className ?? ""}`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ImageMansory;
