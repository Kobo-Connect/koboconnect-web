import React from 'react'

export type MoreBenefitsData = {
    title?: string;
    subtitle?: string;
    benefits?: Array<{ title: string; description: string }>;
}

function MoreBenefits({ data }: { data?: MoreBenefitsData }) {
    const items = data?.benefits && data.benefits.length > 0 ? data.benefits : [
        { title: "Instant Money Transfers", description: "Send and receive money in seconds without the long delays or high fees of traditional banking." },
        { title: "Secure Virtual Cards", description: "Enjoy safer online shopping and subscriptions with instantly generated virtual cards. Protect your main account from fraud while making global payments with ease." },
        { title: "Pay Bills with Ease", description: "No more juggling multiple apps or standing in long queues. Kobo Vault lets you recharge airtime, pay for electricity, water, internet, and more, all from one place." },
    ]

    return (
        <div className=' mx-auto py-6 md:py-8 px-4 max-w-6xl'>
            <div className='flex flex-col md:flex-row justify-between items-center py-6 md:py-8'>
                <h1 className='text-2xl md:text-4xl font-semibold leading-[1.25] max-w-sm mb-2'>{data?.title || 'More Benefits From Kobo Vault'}</h1>
                <p className='text-base font-medium max-w-lg text-center md:text-left'>
                    {data?.subtitle || 'Discover the advantages of managing your finances in one secure place.'}
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-12'>
                {items.map((benefit, idx) => (
                    <div key={idx} className='bg-[#FAFDFE] p-4 rounded-2xl flex flex-col'>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.8747 28.1918V5.8085C14.8747 3.6835 13.968 2.8335 11.7155 2.8335H5.99217C3.73967 2.8335 2.83301 3.6835 2.83301 5.8085V28.1918C2.83301 30.3168 3.73967 31.1668 5.99217 31.1668H11.7155C13.968 31.1668 14.8747 30.3168 14.8747 28.1918Z" stroke="#009A74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M31.1667 15.4418V5.8085C31.1667 3.6835 30.26 2.8335 28.0075 2.8335H22.2842C20.0317 2.8335 19.125 3.6835 19.125 5.8085V15.4418C19.125 17.5668 20.0317 18.4168 22.2842 18.4168H28.0075C30.26 18.4168 31.1667 17.5668 31.1667 15.4418Z" stroke="#009A74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M31.1667 28.1915V25.6415C31.1667 23.5165 30.26 22.6665 28.0075 22.6665H22.2842C20.0317 22.6665 19.125 23.5165 19.125 25.6415V28.1915C19.125 30.3165 20.0317 31.1665 22.2842 31.1665H28.0075C30.26 31.1665 31.1667 30.3165 31.1667 28.1915Z" stroke="#009A74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <h2 className='text-lg font-semibold text-[#010101] mt-4 mb-2'>{benefit.title}</h2>
                        <p className='text-base font-medium text-[#363E3F]'>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MoreBenefits