import React from "react";
import Image from "next/image";
import transactionImage from "@/assets/images/manCheckingTransaction.png";

type Feature = {
  title: string;
  description: string;
  iconColor?: string;
  iconBg?: string;
};
export type SecurityData = {
  title?: string;
  subtitle?: string;
  image?: { asset: { url: string }; alt?: string };
  features?: Feature[];
};

function Security({ data }: { data?: SecurityData }) {
  const features: Feature[] =
    data?.features && data.features.length > 0
      ? data.features
      : [
          {
            title: "Virtual Cards",
            description:
              "Shop and subscribe online safely without exposing your main account details.",
            iconBg: "#F2EFFF",
            iconColor: "#7D66F2",
          },
          {
            title: "Bank-Grade Encryption",
            description:
              "Advanced protection ensures your money and data are always secure.",
            iconBg: "#DFFFF3",
            iconColor: "#0DD68B",
          },
        ];

  return (
    <div className='max-w-6xl mx-auto py-6 md:py-10 px-4 flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
      <div className='space-y-8 py-4 md:py-6 pr-4'>
        <div className='space-y-4 pb-2'>
          <h2 className='text-2xl md:text-4xl font-semibold text-[#010101]'>
            {data?.title || "Security You Can Trust"}
          </h2>
          <p className='text-lg font-medium'>
            {data?.subtitle ||
              "Every transaction on Kobo Vault is protected with the highest standards of security, giving you peace of mind."}
          </p>
        </div>
        {features.map((f, idx) => (
          <div key={idx} className='flex gap-4 items-center'>
            <div>
              <svg
                width='60'
                height='61'
                viewBox='0 0 60 61'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect
                  y='0.0273438'
                  width='60'
                  height='60'
                  rx='10'
                  fill={f.iconBg || "#F2EFFF"}
                />
                <path
                  d='M21.9297 33.9065L33.8797 21.9565'
                  stroke={f.iconColor || "#7D66F2"}
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M29.1016 36.3064L30.3016 35.1064'
                  stroke={f.iconColor || "#7D66F2"}
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M31.793 33.6161L34.183 31.2261'
                  stroke={f.iconColor || "#7D66F2"}
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M21.6013 28.2663L28.2413 21.6263C30.3613 19.5063 31.4213 19.4963 33.5213 21.5963L38.4313 26.5063C40.5313 28.6063 40.5213 29.6663 38.4013 31.7863L31.7613 38.4263C29.6413 40.5463 28.5813 40.5563 26.4813 38.4563L21.5713 33.5463C19.4713 31.4463 19.4713 30.3963 21.6013 28.2663Z'
                  stroke={f.iconColor || "#7D66F2"}
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M20 40.0259H40'
                  stroke={f.iconColor || "#7D66F2"}
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div>
              <h3 className='font-semibold text-lg md:text-2xl text-[#010101]'>
                {f.title}
              </h3>
              <p className='text-sm md:text-base text-[#363E3F]'>
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className=''>
        {data?.image?.asset?.url ? (
          <Image
            src={data.image.asset.url}
            alt={data.image.alt || "transaction-image"}
            width={600}
            height={600}
            className='object-cover'
          />
        ) : (
          <Image
            src={transactionImage}
            alt='transaction-image'
            width={600}
            height={600}
            className='object-cover'
          />
        )}
      </div>
    </div>
  );
}

export default Security;
