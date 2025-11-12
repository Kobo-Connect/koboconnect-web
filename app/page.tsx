import Image from "next/image";
import logo from "@/assets/logo.svg";
import Header from "@/components/shared/header";
import Hero from "@/components/home/hero";
import KoboConnect from "@/components/home/kobo-connect";
import Solution from "@/components/home/solution";
import InnovativeApproach from "@/components/home/innovative-approach";
import OurApps from "@/components/home/our-apps";
import Testimonials from "@/components/home/testimonials";
import VirtualCardBanner from "@/components/home/virtualcard-banner";
import Faq from "@/components/home/faq";
import GetStartedCta from "@/components/home/getstarted-cta";
import Footer from "@/components/shared/footer";
import { getHomePageData } from "@/lib/sanity/queries/home";
import MotionWrapper from "@/components/shared/MotionWrapper";
import { sectionScrollUp } from "@/lib/animations/variants";

export default async function Home() {
  // Fetch home page data for Hero, KoboConnect, and Solution sections
  const homeData = await getHomePageData();

  return (
    <main>
      <Header
        textColor='#CCE5DF'
        logo={<Image src={logo} alt='Logo' priority width={100} height={100} />}
      />
      <Hero data={homeData?.heroSection} />
      <MotionWrapper
        variants={sectionScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <KoboConnect data={homeData?.koboConnectSection} />
      </MotionWrapper>
      <MotionWrapper
        variants={sectionScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Solution data={homeData?.solutionSection} />
      </MotionWrapper>
      <MotionWrapper
        variants={sectionScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <InnovativeApproach data={homeData?.innovativeApproach!} />
      </MotionWrapper>
      <MotionWrapper
        variants={sectionScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <OurApps />
      </MotionWrapper>
      <MotionWrapper
        variants={sectionScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Testimonials />
      </MotionWrapper>
      <MotionWrapper
        variants={sectionScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <VirtualCardBanner />
      </MotionWrapper>
      <MotionWrapper
        variants={sectionScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Faq faqData={homeData?.faqSection!} />
      </MotionWrapper>
      <MotionWrapper
        variants={sectionScrollUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <GetStartedCta />
      </MotionWrapper>
      <Footer />
    </main>
  );
}
