import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import { Badge, Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { type Variants } from "framer-motion";
import { EASE } from "@/lib/animations/variants";
import MotionWrapper from "../shared/MotionWrapper";

const featureImageV: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
};

const featureTextV: Variants = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } },
};

function Featured({ pressPageData }: { pressPageData: any }) {
  // Fallback data if Sanity data is not available
  const heroSection = pressPageData?.heroSection || {
    featuredArticle: null,
  };

  return (
    <div className='max-w-6xl mx-auto py-4'>
      <div className='flex flex-col-reverse md:flex-row gap-4 md:gap-8 lg:gap-12 items-center'>
        <div>
          <MotionWrapper variants={featureImageV}>
            <Image
              src={urlFor(heroSection.featuredArticle.featuredImage).url()}
              alt={heroSection.featuredArticle.featuredImage.alt}
              width={900}
              height={600}
              className='object-cover rounded-xl'
            />
          </MotionWrapper>
        </div>

        <div className='space-y-4'>
          <MotionWrapper variants={featureTextV}>
            <Badge color='#ECF8F4' size='lg'>
              <div className='flex gap-2 items-center'>
                <Badge
                  variant='filled'
                  style={{
                    backgroundColor:
                      heroSection.featuredArticle.category.backgroundColor,
                    color: heroSection.featuredArticle.category.color,
                  }}>
                  {heroSection.featuredArticle.category.title}
                </Badge>
                <p className='text-[#363E3F]'>
                  {heroSection.featuredArticle.readTime} mins read
                </p>
              </div>
            </Badge>
            <h4 className='text-2xl font-semibold my-2'>
              {heroSection.featuredArticle.title}
            </h4>
            <p className='my-2'>{heroSection.featuredArticle.description}</p>

            <Button
              variant='subtle'
              color='#007F5E'
              rightSection={<IconArrowRight />}
              component='a'
              href={`/press/${heroSection.featuredArticle.slug.current}`}>
              Read More
            </Button>
          </MotionWrapper>



        </div>
      </div>
    </div>
  );
}

export default Featured;
