import Image from "next/image";
import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { urlFor } from "@/lib/sanity/image";
import { Variants } from "framer-motion";
import MotionWrapper from "../shared/MotionWrapper";
import { Article } from "@/lib/types/article";

interface RecentArticleConfig {
  title: string;
  subtitle: string;
  showSection: boolean;
  limit: number;
}

interface RecentArticleProps {
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
    transition: { duration: 0.5, ease: EASE, type: "tween" },
  },
};

const grid: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE, type: "tween" },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.02 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

function RecentArticle({ pressPageData }: RecentArticleProps) {

  // config for the section from sanity or render default fallback
  const config: RecentArticleConfig = pressPageData?.recentArticlesSection || {
    title: "Our recent articles",
    subtitle: "Stay informed with our latest insights",
    showSection: true,
    limit: 3,
  };

  // if the section is not shown or there are no articles, return null
  if (!config.showSection) {
    return null;
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <MotionWrapper variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}>
        {/* Header */}
        <MotionWrapper variants={header} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} className='mb-4'>
          <h3 className='text-[#010101] text-2xl lg:text-3xl font-semibold'>
            {config.title}
          </h3>
          <p className='text-[#363E3F] text-lg'>{config.subtitle}</p>
        </MotionWrapper>

        {/* Cards Grid */}
        <MotionWrapper variants={grid} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
            {pressPageData?.recentArticlesSection?.articles.slice(0, config.limit).map((article: Article) => (
              <RecentArticleCard key={article._id} article={article} />
            ))}
          </div>
        </MotionWrapper>

      </MotionWrapper>

    </div>
  );
}

function RecentArticleCard({ article }: { article: Article }) {
  return (
    <MotionWrapper as="article" variants={card}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }} className='grid grid-rows-5 gap-4'>
      <div className='row-span-2 relative'>
        {/* Image */}
        <MotionWrapper variants={imageReveal}>
          <Image
            src={urlFor(article.featuredImage.asset).url()}
            alt={article.featuredImage.alt}
            fill
            className='object-cover rounded-xl'
          />
        </MotionWrapper>

      </div>

      <div className='row-span-3 space-y-2'>
        <div className='flex justify-between items-center'>
          <p className='font-medium text-[#009A74] text-base'>
            {article.author}
          </p>
          <p className='text-[#363E3F] text-base'>
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
        </div>
        <h4 className='text-[#010101] text-xl lg:text-2xl font-semibold'>
          {article.title}
        </h4>
        <p className='text-[#363E3F] text-base'>{article.description}</p>

        <MotionWrapper whileHover={{ x: 2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.12, ease: EASE, type: "tween" }}>
          <Button
            variant='subtle'
            style={{
              paddingLeft: "0px",
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

export default RecentArticle;
