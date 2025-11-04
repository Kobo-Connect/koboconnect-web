import React from "react";
import AboutHero from "@/components/about/AboutHero";
import BuiltInAfrica from "@/components/about/BuiltInAfrica";
import Footer from "@/components/shared/footer";
import CoreValues from "@/components/about/CoreValues";
import Header from "@/components/shared/header";
import logo from "@/assets/Logo2.svg";
import Image from "next/image";
import WhatIsKoboConnect from "@/components/about/WhatIsKoboConnect";
import { client } from "@/lib/sanity/client";
import { ABOUT_PAGE_DATA_QUERY } from "@/lib/sanity/queries/about";
import OurTeam from "@/components/about/OurTeam";

async function AboutPage() {
  // Fetch about page data from Sanity
  const aboutPageData = await client.fetch(ABOUT_PAGE_DATA_QUERY);

  return (
    <main>
      <Header
        textColor='black'
        backgroundColor='white'
        logo={<Image src={logo} alt='Logo' width={100} height={100} />}
      />
      <div className='mb-16 relative space-y-4 md:space-y-12 lg:space-y-24'>
        <AboutHero aboutPageData={aboutPageData} />
        <WhatIsKoboConnect aboutPageData={aboutPageData} />
        <BuiltInAfrica aboutPageData={aboutPageData} />
        <CoreValues aboutPageData={aboutPageData} />
        <OurTeam teamSection={aboutPageData.teamSection} />
      </div>
      <Footer />
    </main>
  );
}

export default AboutPage;
