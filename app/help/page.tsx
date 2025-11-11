import logo from "@/assets/Logo2.svg";
import Image from "next/image";
import Footer from "@/components/shared/footer";
import { client } from "@/lib/sanity/client";
import { HELP_PAGE_QUERY } from "@/lib/sanity/queries/help";
import Hero from "@/components/help/Hero";
import FAQAccordion from "@/components/FaqAccordion";
import Header from "@/components/shared/header";
import MotionWrapper from "@/components/shared/MotionWrapper";
import { sectionScrollUp } from "@/lib/animations/variants";

async function page() {
    // Fetch help page data from Sanity
    const helpPageData = await client.fetch(HELP_PAGE_QUERY);

    return (
        <main>
            <Header
                textColor='black'
                backgroundColor='white'
                logo={<Image src={logo} alt='Logo' width={100} height={100} />}
            />
            <div>
                {/* Hero Section */}
                <Hero heroSection={helpPageData.heroSection} />

                <MotionWrapper
                    variants={sectionScrollUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className='mt-4 mb-16 lg:mb-24 max-w-2xl mx-auto px-4'
                >
                    {/* FAQ Section */}
                    <FAQAccordion />
                </MotionWrapper>
            </div>

            <Footer />
        </main>
    );
}

export default page;