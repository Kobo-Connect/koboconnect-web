import Header from "@/components/shared/header";
import Image from "next/image";
import logo from "@/assets/Logo2.svg";
import { Divider } from "@mantine/core";
import RecentArticle from "@/components/press/RecentArticle";
import TrendingArticle from "@/components/press/TrendingArticle";
import InsiderTipAndTricks from "@/components/press/InsiderTipAndTricks";
import SubscribeArticleBanner from "@/components/press/SubscribeArticleBanner";
import { client } from "@/lib/sanity/client";
import { PRESS_PAGE_DATA_QUERY } from "@/lib/sanity/queries/press";
import Hero from "@/components/press/Hero";
import Featured from "@/components/press/Featured";
import { type Variants } from "framer-motion";
import MotionWrapper from "@/components/shared/MotionWrapper";
import { sectionScrollUp } from "@/lib/animations/variants";

const EASE = [0.22, 1, 0.36, 1] as const;

const pageV: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.15, ease: EASE },
  },
};

async function page() {
  // Fetch press page data from Sanity
  const pressPageData = await client.fetch(PRESS_PAGE_DATA_QUERY);

  console.log(pressPageData, "pressPageData")

  return (
    <div>
      <Header
        textColor='black'
        backgroundColor='white'
        logo={<Image src={logo} alt='Logo' width={100} height={100} />}
      />

      <MotionWrapper as="div" variants={pageV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }} className='mb-16 space-y-4 md:space-y-12 lg:space-y-24 px-4'>
        {/* Hero Section */}
        <Hero pressPageData={pressPageData} />

        {/* Featured Article Section */}
        <MotionWrapper variants={sectionScrollUp}>
          <Featured pressPageData={pressPageData} />
        </MotionWrapper>

        {/* Recent Articles Section */}
        <MotionWrapper variants={sectionScrollUp}>
          <RecentArticle pressPageData={pressPageData} />
        </MotionWrapper>

        <Divider className="mx-auto max-w-6xl" />

        {/* Trending Articles Section */}
        <MotionWrapper variants={sectionScrollUp}>
          <TrendingArticle pressPageData={pressPageData} />
        </MotionWrapper>

        {/* Insider Tips Section */}
        <MotionWrapper variants={sectionScrollUp}>
          <InsiderTipAndTricks pressPageData={pressPageData} />
        </MotionWrapper>

        {/* Subscribe Section */}
        <MotionWrapper variants={sectionScrollUp}>
          <SubscribeArticleBanner pressPageData={pressPageData} />
        </MotionWrapper>
      </MotionWrapper>
    </div>
  );
}

export default page;
