import React from "react";
import Image from "next/image";
import { Badge, Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { urlFor } from "@/lib/sanity/image";
import { client } from "@/lib/sanity/client";
import { TRENDING_ARTICLES_QUERY } from "@/lib/sanity/queries/articles";
import { Variants } from "framer-motion";
import MotionWrapper from "../shared/MotionWrapper";

interface Article {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  featuredImage: {
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
  category: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
    color: string;
    backgroundColor: string;
  };
  author: string;
  publishedAt: string;
  readTime: number;
  tags?: string[];
}

interface TrendingArticleConfig {
  title: string;
  subtitle: string;
  badgeText: string;
  showSection: boolean;
  limit: number;
}

interface TrendingArticleProps {
  pressPageData: any;
}

const EASE = [0.22, 1, 0.36, 1] as const;

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

const list: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const row: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "tween", duration: 0.45, ease: EASE },
  },
};

const thumbReveal: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 0.5, ease: EASE },
  },
};

async function TrendingArticle({ pressPageData }: TrendingArticleProps) {
  // fetch articles from sanity
  const articles = await client.fetch(TRENDING_ARTICLES_QUERY);

  // config for the section from sanity or render default fallback
  const config: TrendingArticleConfig =
    pressPageData?.trendingArticlesSection || {
      title: "Trending articles you need to check out",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros.",
      badgeText: "Trending",
      showSection: true,
      limit: 3,
    };

  // if the section is not shown or there are no articles, return null
  if (!config.showSection) {
    return null;
  }

  return (
    <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-8'>

      <MotionWrapper variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }} className='mb-4 col-span-1 lg:col-span-2 space-y-2'>
        {/* Header */}
        <MotionWrapper variants={header} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
          <h6 className='text-[#009A74] text-lg font-medium'>
            {config.badgeText}
          </h6>
          <h3 className='text-[#010101] text-2xl lg:text-4xl font-semibold'>
            {config.title}
          </h3>
          <p className='text-[#363E3F] text-lg'>{config.subtitle}</p>
        </MotionWrapper>
      </MotionWrapper>

      {/* List */}
      <MotionWrapper variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className='grid grid-cols-1 gap-4 md:gap-8 lg:col-span-4'>
        {articles.slice(0, config.limit).map((article: Article) => (
          <TrendingArticleCard
            key={article._id}
            article={article}
            badgeText={config.badgeText}
          />
        ))}
      </MotionWrapper>
    </div>
  );
}

function TrendingArticleCard({
  article,
  badgeText,
}: {
  article: Article;
  badgeText: string;
}) {
  return (
    <MotionWrapper as="article" variants={row}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }} className='grid grid-cols-5 gap-4 md:gap-6'>
      <div className=' relative col-span-2'>
        <Image
          src={urlFor(article.featuredImage.asset).width(300).height(200).url()}
          alt={article.featuredImage.alt}
          fill
          className='object-cover rounded-xl'
        />
      </div>

      <div className='space-y-3 col-span-3'>
        <div className='flex justify-between items-center'>
          <Badge
            style={{
              color: article.category.color,
              backgroundColor: article.category.backgroundColor,
            }}>
            {article.category.title}
          </Badge>
          <p className='text-[#363E3F] text-base'>
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
        </div>
        <h4 className='text-[#010101] text-xl lg:text-2xl font-semibold'>
          {article.title}
        </h4>
        <p className='text-[#363E3F] text-base'>
          {article.description.slice(0, 100) + "..."}
        </p>

        <MotionWrapper as="div" whileHover={{ x: 2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "tween", duration: 0.12, ease: EASE }}>
          <Button
            variant='subtle'
            style={{
              paddingLeft: "5px",
            }}
            color='#007F5E'
            rightSection={<IconArrowRight />}
            component='a'
            href={`/press/${article.slug.current}`}>
            Read More
          </Button>
        </MotionWrapper>

      </div>
    </MotionWrapper>
  );
}

export default TrendingArticle;
