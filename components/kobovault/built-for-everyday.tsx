import React from "react";
import Image from "next/image";
import MapSvg from "@/assets/Map.svg";
import transactionCard from "@/assets/images/transactionCard.png";

export type BuiltForEverydayData = {
  title?: string;
  subtitle?: string;
  leftImage?: { asset: { url: string }; alt?: string };
  overlayImage?: { asset: { url: string }; alt?: string };
  features?: Array<{
    title: string;
    description: string;
    iconColor?: string;
    iconBg?: string;
  }>;
};

function BuiltForEveryday({ data }: { data?: BuiltForEverydayData }) {
  const features =
    data?.features && data.features.length > 0
      ? data.features
      : [
          {
            title: "Offline Access",
            description:
              "Use USSD and agent networks even without internet or a smartphone.",
            iconBg: "#F9F2E4",
            iconColor: "#DAC576",
          },
          {
            title: "Inclusive Finance",
            description:
              "Designed for both banked and unbanked users, ensuring no one is left behind.",
            iconBg: "#ECF9FF",
            iconColor: "#39A5FF",
          },
        ];

  return (
    <div className="max-w-6xl mx-auto py-6 md:py-10 px-4 flex flex-col md:flex-row gap-8 md:gap-20 items-center">
      <div className="relative">
        {data?.leftImage?.asset?.url ? (
          <Image
            src={data.leftImage.asset.url}
            alt={data.leftImage.alt || "map-svg"}
            width={600}
            height={600}
            className="object-cover"
          />
        ) : (
          <Image
            src={MapSvg}
            alt="map-svg"
            width={600}
            height={600}
            className="object-cover"
          />
        )}
        {data?.overlayImage?.asset?.url ? (
          <Image
            src={data.overlayImage.asset.url}
            alt={data.overlayImage.alt || "transaction-card"}
            width={140}
            height={140}
            className="object-contain absolute bottom-3 right-0"
          />
        ) : (
          <Image
            src={transactionCard}
            alt="transaction-card"
            width={140}
            height={140}
            className="object-contain absolute bottom-3 right-0"
          />
        )}
      </div>

      <div className="space-y-8 py-4 md:py-6 pr-4">
        <div className="space-y-4 pb-2">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#010101]">
            {data?.title || "Built for Everyday Life in Africa"}
          </h2>
          <p className="text-lg font-medium">
            {data?.subtitle ||
              "Whether you’re paying bills, running a business, or sending money to family, Kobo Vault works seamlessly for real people and real needs."}
          </p>
        </div>

        {features.map((f, idx) => (
          <div key={idx} className="flex gap-4 items-center">
            <div>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="60"
                  height="60"
                  rx="10"
                  fill={f.iconBg || "#F9F2E4"}
                />
                <path
                  d="M22.9102 29.8401C27.2102 26.5201 32.8002 26.5201 37.1002 29.8401"
                  stroke={f.iconColor || "#DAC576"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 26.3601C26.06 21.6801 33.94 21.6801 40 26.3601"
                  stroke={f.iconColor || "#DAC576"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.79 33.4902C27.94 31.0502 32.05 31.0502 35.2 33.4902"
                  stroke={f.iconColor || "#DAC576"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.4004 37.1501C28.9804 35.9301 31.0304 35.9301 32.6104 37.1501"
                  stroke={f.iconColor || "#DAC576"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg md:text-2xl text-[#010101]">
                {f.title}
              </h3>
              <p className="text-sm md:text-base text-[#363E3F]">
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuiltForEveryday;
