import Header from '@/components/shared/header'
import Image from 'next/image'
import logo from '@/assets/Logo2.svg'
import Footer from '@/components/shared/footer'
import OurApps from '@/components/home/our-apps'
import { getContactUsPageData } from '@/lib/sanity/queries/contactUs'
import { urlFor } from '@/lib/sanity/image'
import ContactOptions from '@/components/contact-us/ContactOptions'
import { type Variants } from "framer-motion";
import MotionWrapper from '@/components/shared/MotionWrapper'

const EASE = [0.22, 1, 0.36, 1] as const;

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.15, ease: EASE },
  },
};

const heroBgV: Variants = {
  hidden: { opacity: 0, scale: 1.03 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

const heroTextV: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const mapV: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const cardsWrapV: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardV: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};


async function page() {
  const contactUsPageData = await getContactUsPageData()

  return (
    <main>
      <Header textColor='black' backgroundColor='white' logo={<Image src={logo} alt='Logo' width={100} height={100} />} />
      <MotionWrapper variants={pageVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className='mb-16'>
        {/* Hero */}
        <MotionWrapper variants={heroBgV} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className='h-[40vh] relative flex flex-col justify-center items-center px-4'>
          <Image src={urlFor(contactUsPageData?.heroSection?.backgroundImage?.asset!).url()} priority alt={contactUsPageData?.heroSection?.backgroundImage?.alt!} className='absolute top-0 left-0 z-0' fill />

          <MotionWrapper variants={heroTextV} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }} className='text-center z-10 space-y-2 max-w-4xl mx-auto'>
            <h6 className='text-lg font-semibold text-[#007F5E]'>{contactUsPageData?.heroSection?.subtitle}</h6>
            <h1 className='text-[#010101] font-semibold text-3xl lg:text-6xl'>{contactUsPageData?.heroSection?.title}</h1>
            <p className='text-[#363E3F] text-lg lg:text-lg max-w-xl mx-auto'>{contactUsPageData?.heroSection?.description}</p>
          </MotionWrapper>

        </MotionWrapper>

        {/* Map Image */}
        <MotionWrapper variants={mapV} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <Image src={urlFor(contactUsPageData?.mapImage?.asset!).url()} priority alt={contactUsPageData?.mapImage?.alt!} className='object-cover' width={1920} height={1080} />
        </MotionWrapper>

        {/* Contact options */}
        <MotionWrapper variants={cardsWrapV} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <ContactOptions contactOptions={contactUsPageData?.contactOptions!} />
        </MotionWrapper>

        {/* Contact options */}
        <MotionWrapper initial={{ opacity: 0, y: 12 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: EASE },
          }}
          viewport={{ once: true, amount: 0.2 }}>
          <OurApps />
        </MotionWrapper>
      </MotionWrapper>
      <Footer />
    </main>
  )
}

export default page