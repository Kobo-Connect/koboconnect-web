import Image from "next/image";
import { Button } from "@mantine/core";
import { getVirtualCardBannerData } from "@/lib/sanity/queries/virtualCardBanner";

async function VirtualCardBanner() {
  const virtualCardData = await getVirtualCardBannerData();

  // Don't render if no data and section is disabled
  if (!virtualCardData || !virtualCardData.showSection) {
    return null;
  }

  return (
    <div className='py-4 md:py-12 lg:py-14 px-4'>
      <div className='max-w-7xl px-4 relative mx-auto bg-[#0A1B1B] rounded-4xl grid grid-cols-1  md:grid-cols-2 flex-col-reverse gap-4 items-center'>
        <div className='col-span-1 order-2 md:order-1 relative h-full  min-h-[400px]'>
          <Image
            className='absolute top-[-60px] md:top-[-120px] lg:top-[-180px] z-20'
            src={virtualCardData.cardImages.primaryCard.asset.url}
            alt='card'
            width={440}
            height={410}
          />

          <Image
            className='z-20 absolute bottom-0'
            src={virtualCardData.cardImages.secondaryCard.asset.url}
            alt='card'
            width={600}
            height={490}
          />
        </div>

        <div className='p-4 pt-6 mb-12 md:mb-0 md:p-8 md:py-12 space-y-4 col-span-1 order-1 md:order-2'>
          <h2 className='text-2xl md:text-4xl font-semibold leading-[1.25] text-white'>
            {virtualCardData.title}
          </h2>
          <p className='text-lg font-medium text-[#B5BBBB] pb-4'>
            {virtualCardData.description}
          </p>
          <Button
            variant='default'
            style={{
              backgroundColor: "#009A74",
              color: "white",
              borderColor: "#008E6A",
            }}
            component='a'
            href={virtualCardData.buttonLink || "#"}>
            {virtualCardData.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VirtualCardBanner;
