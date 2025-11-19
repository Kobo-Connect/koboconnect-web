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
      <KoboConnect data={homeData?.koboConnectSection} />
      <Solution data={homeData?.solutionSection} />
      <InnovativeApproach data={homeData?.innovativeApproach!} />
      <OurApps />
      <Testimonials />
      <VirtualCardBanner />
      <Faq faqData={homeData?.faqSection!} />
      <GetStartedCta />
      <Footer />
    </main>
  );
}
