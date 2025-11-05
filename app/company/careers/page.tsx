import logo from "@/assets/Logo2.svg";
import Header from "@/components/shared/header";
import Image from "next/image";
import Footer from "@/components/shared/footer";
import { Divider } from "@mantine/core";
import WorkBenefits from "@/components/careers/WorkBenefits";
import HeadStart from "@/components/careers/HeadStart";
import Hero from "@/components/careers/Hero";
import { client } from "@/lib/sanity/client";
import { CAREERS_PAGE_DATA_QUERY } from "@/lib/sanity/queries/careers";
import CurrentVacancies from "@/components/careers/CurrentVacancies";

export default async function page() {
  // Fetch careers page data from Sanity
  const careersPageData = await client.fetch(CAREERS_PAGE_DATA_QUERY);

  return (
    <div>
      <Header
        textColor='black'
        backgroundColor='white'
        logo={<Image src={logo} priority alt='Logo' width={100} height={100} />}
      />

      <div className='space-y-4 md:space-y-12 lg:space-y-24 px-4'>
        {/* Hero Section */}
        <Hero careersPageData={careersPageData} />

        {/* Head Start Section */}
        <HeadStart careersPageData={careersPageData} />

        <Divider />

        {/* Work Benefits Section */}
        <WorkBenefits careersPageData={careersPageData} />

        {/* Current Vacancies Section */}
        <CurrentVacancies careersPageData={careersPageData} />
      </div>

      <Footer />
    </div>
  );
}
