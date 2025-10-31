import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { HomePageData } from "@/lib/sanity/queries/home";

interface KoboConnectProps {
  data?: HomePageData["koboConnectSection"];
}

export default function KoboConnect({ data }: KoboConnectProps) {
  // Fallback data if no Sanity data is provided
  const koboConnectData = data!;
  return (
    <div>
      <div className=' mx-auto py-10 md:py-20 px-4 max-w-7xl'>
        <div>
          <h2 className='text-[#009A74] font-medium text-xl mb-2'>
            {koboConnectData.subtitle}
          </h2>
          <div className='text-2xl lg:text-3xl font-semibold leading-[1.25] max-w-lg text-[#363E3F]'>
            {koboConnectData.mainTitle &&
              Array.isArray(koboConnectData.mainTitle) ? (
              <PortableText
                value={koboConnectData.mainTitle}
                components={{
                  block: {
                    normal: ({ children }) => <span>{children}</span>,
                    h1: ({ children }) => (
                      <h1 className='text-2xl lg:text-3xl font-semibold leading-[1.25]'>
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className='text-xl lg:text-2xl font-semibold leading-[1.25]'>
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className='text-lg lg:text-xl font-semibold leading-[1.25]'>
                        {children}
                      </h3>
                    ),
                  },
                  marks: {
                    strong: ({ children }) => (
                      <strong className='font-bold'>{children}</strong>
                    ),
                    em: ({ children }) => (
                      <em className='italic'>{children}</em>
                    ),
                    code: ({ children }) => (
                      <code className='bg-gray-100 px-1 py-0.5 rounded text-sm'>
                        {children}
                      </code>
                    ),
                  },
                }}
              />
            ) : (
              <span>{koboConnectData.mainTitle || "Default Title"}</span>
            )}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-5 gap-8 py-8'>
          <div className='md:col-span-2 relative'>
            <Image
              src={koboConnectData.servicesImage.asset.url}
              alt={koboConnectData.servicesImage.alt}
              width={400}
              height={400}
              className='object-contain'
            />
          </div>

          <div className='md:col-span-3 flex flex-col gap-6 items-center'>
            <div className='flex flex-col gap-4'>
              {koboConnectData.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className='grid grid-cols-3 gap-4 mt-6'>
              {koboConnectData.contactInfo.map((item, index) => (
                <div key={index} className='bg-[#FAFDFE] p-4 rounded-lg w-full'>
                  <Image
                    src={item.icon.asset.url}
                    alt={item.icon.alt}
                    width={24}
                    height={24}
                    className='mb-4'
                  />
                  <div className=''>
                    <p className='text-base font-[400] break-words whitespace-normal max-w-full'>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
