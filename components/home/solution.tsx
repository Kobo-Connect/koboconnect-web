import React from "react";
import { HomePageData } from "@/lib/sanity/queries/home";

interface SolutionProps {
  data?: HomePageData["solutionSection"];
}

function Solution({ data }: SolutionProps) {
  // Fallback data if no Sanity data is provided
  const solutionData = data || {
    title: "Here is our Solution",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget leo ac eros facilisis finibus scelerisque sit amet turpis.",
    solutions: [
      {
        title: "No More App-Hopping",
        description:
          "To combat fragmented service access, eliminating the hassle of juggling numerous apps",
      },
      {
        title: "Reimagining Access to Money",
        description:
          "To provide accessible financial tools including mobile wallets and peer to peer transfer all built to function with or without traditional banking infrastructure.",
      },
      {
        title: "One Digital Flow",
        description:
          "To bridge the gap caused by inconsistent digital ecosystems and ensure smooth running between users, local businesses, and service providers.",
      },
    ],
  };

  return (
    <div className='container mx-auto py-6 md:py-12 px-4 max-w-6xl'>
      <div className='text-center mb-10 max-w-2xl mx-auto'>
        <h2 className='text-[#010101] font-semibold text-4xl mb-2'>
          {solutionData.title}
        </h2>
        <p className='text-base font-medium text-[#363E3F]'>{solutionData.subtitle}</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-8 lg:gap-x-16'>
        {solutionData.solutions.map((solution) => (
          <div
            key={solution.title}
            className='bg-[#FAFDFE] p-4 rounded-lg space-y-4'>
            <svg
              className='mb-4'
              width='34'
              height='34'
              viewBox='0 0 34 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M14.875 28.1916V5.80825C14.875 3.68325 13.9683 2.83325 11.7158 2.83325H5.9925C3.73999 2.83325 2.83333 3.68325 2.83333 5.80825V28.1916C2.83333 30.3166 3.73999 31.1666 5.9925 31.1666H11.7158C13.9683 31.1666 14.875 30.3166 14.875 28.1916Z'
                stroke='#009A74'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M31.1667 15.4416V5.80825C31.1667 3.68325 30.26 2.83325 28.0075 2.83325H22.2842C20.0317 2.83325 19.125 3.68325 19.125 5.80825V15.4416C19.125 17.5666 20.0317 18.4166 22.2842 18.4166H28.0075C30.26 18.4166 31.1667 17.5666 31.1667 15.4416Z'
                stroke='#009A74'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M31.1667 28.1917V25.6417C31.1667 23.5167 30.26 22.6667 28.0075 22.6667H22.2842C20.0317 22.6667 19.125 23.5167 19.125 25.6417V28.1917C19.125 30.3167 20.0317 31.1667 22.2842 31.1667H28.0075C30.26 31.1667 31.1667 30.3167 31.1667 28.1917Z'
                stroke='#009A74'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <h3 className='text-lg font-semibold text-[#010101]'>{solution.title}</h3>
            <p className='text-base font-[400] text-[#363E3F]'>{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solution;
