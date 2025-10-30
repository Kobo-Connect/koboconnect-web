import Header from '@/components/shared/header'
import Image from 'next/image'
import logo from '@/assets/Logo2.svg'
import Footer from '@/components/shared/footer'
import OurApps from '@/components/home/our-apps'
import { getContactUsPageData } from '@/lib/sanity/queries/contactUs'
import { urlFor } from '@/lib/sanity/image'
import ContactOptions from '@/components/contact-us/ContactOptions'


async function page() {
    const contactUsPageData = await getContactUsPageData()

    return (
        <main>
            <Header textColor='black' backgroundColor='white' logo={<Image src={logo} alt='Logo' width={100} height={100} />} />
            <div className='mb-16'>
                <div className='h-[40vh] relative flex flex-col justify-center items-center px-4'>
                    <Image src={urlFor(contactUsPageData?.heroSection?.backgroundImage?.asset!).url()} priority alt={contactUsPageData?.heroSection?.backgroundImage?.alt!} className='absolute top-0 left-0 z-0' fill />

                    <div className='text-center z-10 space-y-2 max-w-4xl mx-auto'>
                        <h6 className='text-lg font-semibold text-[#007F5E]'>{contactUsPageData?.heroSection?.subtitle}</h6>
                        <h1 className='text-[#010101] font-semibold text-3xl lg:text-6xl'>{contactUsPageData?.heroSection?.title}</h1>
                        <p className='text-[#363E3F] text-lg lg:text-lg max-w-xl mx-auto'>{contactUsPageData?.heroSection?.description}</p>
                    </div>

                </div>

                <Image src={urlFor(contactUsPageData?.mapImage?.asset!).url()} priority alt={contactUsPageData?.mapImage?.alt!} className='object-cover' width={1920} height={1080} />


                <ContactOptions contactOptions={contactUsPageData?.contactOptions!} />

                <OurApps />
            </div>
            <Footer />
        </main>
    )
}

export default page