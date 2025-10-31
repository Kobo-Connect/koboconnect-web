import { Button, Rating } from "@mantine/core";
import React from "react";
import {
  getGetStartedCtaData,
  GetStartedCtaData,
} from "@/lib/sanity/queries/getStartedCta";

interface GetStartedCtaProps {
  data?: GetStartedCtaData;
}

async function GetStartedCta({ data }: GetStartedCtaProps) {
  const ctaData = data || (await getGetStartedCtaData());

  // Don't render if no data and section is disabled
  if (!ctaData || !ctaData.showSection) {
    return null;
  }
  return (
    <div>
      <div className='container flex flex-col items-center justify-center mx-auto py-10 md:py-20 px-4 max-w-7xl text-center'>
        <div className='space-y-4 '>
          <h2 className='text-2xl md:text-4xl max-w-2xl font-semibold leading-[1.25]'>
            {ctaData.title}
          </h2>

          <div className='flex items-center justify-center py-2 text-[#010101]'>
            <div className='flex items-center gap-2 text-lg font-medium'>
              {ctaData.ratingText} <Rating value={ctaData.ratingValue} readOnly />{" "}
              {ctaData.ratingDescription}
            </div>
          </div>

          <div>
            <Button
              variant='default'
              style={{
                backgroundColor: "#009A74",
                color: "white",
                borderColor: "#008E6A",
              }}
              component='a'
              href={ctaData.buttonLink || "#"}>
              {ctaData.buttonText}
            </Button>
          </div>

          <div className='flex items-center justify-center gap-2'>
            <svg
              width='19'
              height='15'
              viewBox='0 0 19 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M18 15C18.5523 15 19 14.5523 19 14C19 13.4477 18.5523 13 18 13V14V15ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM18 14V13H10V14V15H18V14ZM8 12H9V1H8H7V12H8ZM10 14V13C9.44772 13 9 12.5523 9 12H8H7C7 13.6569 8.34315 15 10 15V14Z'
                fill='#007F5F'
              />
            </svg>

            <p className='text-lg font-semibold text-[#010101]'>{ctaData.footerText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStartedCta;
