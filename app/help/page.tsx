import Header from '@/components/shared/header';

import logo from "@/assets/Logo2.svg";
import helpBg from "@/assets/images/helpBg.png";
import Image from 'next/image';
import Footer from '@/components/shared/footer';
import Spotlight from '@/components/help/spotlight';
import FAQAccordion from '@/components/FaqAccordion';

function page() {
    return (
        <main>
            <Header textColor='black' backgroundColor='white' logo={<Image src={logo} alt='Logo' width={100} height={100} />} />
            <div>
                <div className='h-[40vh] relative flex flex-col justify-center items-center px-4'>
                    <Image src={helpBg} alt='Help' className='absolute top-0 left-0 z-0' fill />
                    <div className='text-center z-10 space-y-2 max-w-3xl mx-auto'>
                        <h6 className='text-lg font-semibold text-[#007F5E]'>Help</h6>
                        <h1 className='text-[#010101] font-semibold text-3xl lg:text-6xl'>What answers should we help you with?</h1>
                        <p className='text-[#363E3F] lg:text-lg max-w-xl mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus sceleri.</p>
                    </div>

                </div>


                <div className='mt-4 mb-16 max-w-2xl mx-auto px-4'>
                    <Spotlight />
                    <FAQAccordion />
                </div>
            </div>

            <Footer />
        </main>
    );
}

export default page