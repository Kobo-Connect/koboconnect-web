import React from "react";
import { AboutPageData } from "./CoreValues";
import Image from "next/image";

function OurTeam({
  teamSection,
}: {
  teamSection: AboutPageData["teamSection"];
}) {
  return (
    <div className='mx-auto px-4 py-10 md:py-16 lg:py-16 max-w-6xl'>
      {/* Team grid */}
      {teamSection.showSection && (
        <div className='mt-16 md:mt-20 lg:mt-24'>
          <h3 className='text-lg md:text-xl font-medium text-[#009A74]'>
            {teamSection.title || "Meet the Team"}
          </h3>
          <p className='text-[#010101] text-2xl md:text-3xl lg:text-[40px] font-semibold mt-1'>
            {teamSection.subtitle || "The People Behind Kobo Connect"}
          </p>

          <div className='mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
            {teamSection.teamMembers && teamSection.teamMembers.length > 0
              ? teamSection.teamMembers.map((member, index) => {
                  const imageSrc =
                    "image" in member &&
                    typeof member.image === "object" &&
                    "asset" in member.image
                      ? member.image.asset.url
                      : "img" in member
                        ? member.img
                        : "";

                  const memberName = "name" in member ? member.name : "";
                  const memberRole = "role" in member ? member.role : "";
                  const imageAlt =
                    "image" in member &&
                    typeof member.image === "object" &&
                    "alt" in member.image
                      ? member.image.alt
                      : memberName;

                  return (
                    <div
                      key={index}
                      className='group relative overflow-hidden rounded-xl aspect-square cursor-pointer'>
                      {/* Image */}
                      <Image
                        src={imageSrc as string}
                        alt={imageAlt}
                        className='object-center transition-transform duration-500 group-hover:scale-105 lg:w-[300px] lg:h-[360px]'
                        fill
                      />

                      {/* Main bar (always visible) + HALO via :after */}
                      <div className='absolute bottom-0 inset-x-4 sm:inset-x-5 lg:inset-x-6 mb-4 sm:mb-5 z-20'>
                        <div className="relative rounded-xl bg-[#007F5E] text-white px-4 py-3 flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-0.5 after:content-[''] after:absolute after:-inset-2 after:rounded-2xl after:bg-[#007F5E]/35 after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300 after:-z-10">
                          <p className='text-sm md:text-lg font-semibold leading-tight'>
                            {memberName}
                          </p>
                          <p className='text-xs md:text-sm font-normal opacity-90'>
                            {memberRole}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default OurTeam;
