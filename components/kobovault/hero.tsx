import Image from "next/image";
import heroImg from "@/assets/images/koboVaultApp.png";
import appStoreSvg from "@/assets/appStore.svg";
import playStoreSvg from "@/assets/playStore.svg";
import heroBg from "@/assets/images/heroBg.png";

type AssetImage = {
  asset: {
    url: string;
    metadata?: { dimensions?: { width: number; height: number } };
  };
  alt?: string;
};

export type HeroData = {
  title?: string;
  description?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  backgroundImage?: AssetImage;
  heroImage?: AssetImage;
};

export default function Hero({ data }: { data?: HeroData }) {
  const displayTitle =
    data?.title || "Banking Without Walls\nSecurity Without\nCompromise";
  const displayDescription =
    data?.description ||
    "We built Kobo Vault to bring financial freedom closer to everyone. With advanced money transfer options, automated payments, and smart virtual cards, you can transact safely and confidently.";

  const bgUrl = data?.backgroundImage?.asset.url;
  const heroUrl = data?.heroImage?.asset.url;

  return (
    <div className='relative h-[70dvh] md:h-[80dvh] mb-10'>
      <Image
        src={bgUrl || heroBg}
        priority
        alt={data?.backgroundImage?.alt || "hero-bg"}
        fill
        className='object-cover absolute inset-0 z-0'
      />
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 py-4 md:py-6 px-4 relative z-10'>
        <div className='md:col-span-3 flex flex-col items-center md:items-start  py-10 text-white'>
          <div className='max-w-lg mx-auto md:m-0'>
            <h1 className='text-3xl text-center md:text-left md:text-5xl font-bold leading-[1.35] whitespace-pre-line tracking-wide'>
              {displayTitle}
            </h1>
            <p className='my-6  text-base text-center md:text-left md:text-lg text-[#FFFFFFB2]'>
              {displayDescription}
            </p>
          </div>
          <div className='flex gap-5 pt-4'>
            {data?.appStoreLink ? (
              <a
                href={data.appStoreLink}
                target='_blank'
                rel='noopener noreferrer'>
                <Image
                  src={appStoreSvg}
                  priority
                  alt='app-store'
                  width={150}
                  height={150}
                />
              </a>
            ) : (
              <Image
                src={appStoreSvg}
                priority
                alt='app-store'
                width={150}
                height={150}
              />
            )}
            {data?.playStoreLink ? (
              <a
                href={data.playStoreLink}
                target='_blank'
                rel='noopener noreferrer'>
                <Image
                  src={playStoreSvg}
                  alt='play-store'
                  width={150}
                  height={150}
                  priority
                />
              </a>
            ) : (
              <Image
                src={playStoreSvg}
                alt='play-store'
                width={150}
                height={150}
                priority
              />
            )}
          </div>
        </div>
        <div className='col-span-2 hidden md:block  h-full pb-10'>
          {heroUrl ? (
            <Image
              src={heroUrl}
              alt={data?.heroImage?.alt || "hero-img"}
              width={500}
              height={500}
              priority
            />
          ) : (
            <Image
              src={heroImg}
              alt='hero-img'
              width={500}
              height={500}
              priority
            />
          )}
        </div>
      </div>
    </div>
  );
}
