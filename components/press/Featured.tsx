import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import { Badge, Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

function Featured({ pressPageData }: { pressPageData: any }) {
  // Fallback data if Sanity data is not available
  const heroSection = pressPageData?.heroSection || {
    featuredArticle: null,
  };

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center'>
        <div>
          <Image
            src={urlFor(heroSection.featuredArticle.featuredImage).url()}
            alt={heroSection.featuredArticle.featuredImage.alt}
            width={500}
            height={500}
            className='object-cover rounded-xl'
          />
        </div>

        <div className='space-y-4'>
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
          <h4 className='text-2xl font-semibold'>
            {heroSection.featuredArticle.title}
          </h4>
          <p>{heroSection.featuredArticle.description}</p>
          <Button
            variant='subtle'
            color='#007F5E'
            rightSection={<IconArrowRight />}
            component='a'
            href={`/press/${heroSection.featuredArticle.slug.current}`}>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
