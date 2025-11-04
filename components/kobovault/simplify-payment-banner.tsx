import React from 'react'
import OurAppImage from "@/assets/images/ourApp.png";
import Image from 'next/image';
import appStoreSvg from "@/assets/appStore.svg";
import playStoreSvg from "@/assets/playStore.svg";
import Link from 'next/link';
import { getVirtualCardBannerData } from '@/lib/sanity/queries/virtualCardBanner';

async function SimplifyPaymentBanner() {
    const data = await getVirtualCardBannerData();
    const title = data?.title || 'Simplify Every Payment, \nFrom Everyday Bills to Global Shopping';
    const description = data?.description || 'Kobo Vault gives you the power to handle all your transactions in one place, whether it’s sending cash to family, paying your utility bills, or shopping online securely.';
    const imageUrl = data?.cardImages?.primaryCard?.asset?.url;
    const appStoreLink = data?.buttonLink;
    const playStoreLink = data?.buttonLink;

    return (
        <div className=' py-10 md:py-14 px-4 max-w-6xl mx-auto'>
            <div className='bg-[#0A1B1B] grid grid-cols-1 md:grid-cols-3 rounded-2xl pt-6'>
                <div className='col-span-1 relative min-h-[300px]'>
                    {imageUrl ? (
                        <Image src={imageUrl} alt={data?.cardImages?.primaryCard?.alt || 'kobovault-app'} fill className='absolute bottom-0 object-full' />
                    ) : (
                        <Image src={OurAppImage} alt='kobovault-app' fill className='absolute bottom-0 object-full' />
                    )}
                </div>

                <div className='px-4 py-10  col-span-1 md:col-span-2 space-y-4'>
                    <h2 className=' text-2xl md:text-4xl font-semibold text-white whitespace-pre-line'>{title}</h2>
                    <p className=' text-lg font-medium text-[#B5BBBB] max-w-xl'>
                        {description}
                    </p>

                    <div className='flex gap-5 pt-4'>
                        <Link href={appStoreLink || '#'}>
                            <Image src={appStoreSvg} alt='app-store' width={150} height={150} />
                        </Link>
                        <Link href={playStoreLink || '#'}>
                            <Image src={playStoreSvg} alt='play-store' width={150} height={150} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimplifyPaymentBanner