import Image from "next/image";
import heroImg from "@/assets/images/koboVaultApp.png";
import appStoreSvg from "@/assets/appStore.svg";
import playStoreSvg from "@/assets/playStore.svg";
import heroBg from "@/assets/images/heroBg.png";
import MotionWrapper from "../shared/MotionWrapper";
import { fadeUp, imageReveal, section } from "@/lib/animations/variants";

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
    <div className='relative h-[80dvh] mb-10'>
      <MotionWrapper
        variants={imageReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="absolute inset-0"
      >
        <Image
          src={bgUrl || heroBg}
          priority
          alt={data?.backgroundImage?.alt || "hero-bg"}
          fill
          className='object-cover absolute inset-0 z-0'
        />
      </MotionWrapper>
      <MotionWrapper
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 py-4 md:py-6 px-4 relative z-10'
      >
        <MotionWrapper variants={fadeUp} className='col-span-3 max-w-xl  py-10 text-white'>
          <div>
            <h1 className='text-2xl md:text-5xl font-bold leading-[1.30] whitespace-pre-line tracking-wide'>
              {displayTitle}
            </h1>
            <p className='my-6 text-sm md:text-lg text-[#FFFFFFB2]'>
              {displayDescription}
            </p>
          </div>
          <MotionWrapper
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "tween", duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className='flex gap-5 pt-4'
          >
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
          </MotionWrapper>
        </MotionWrapper>
        <MotionWrapper variants={imageReveal} className='col-span-2  h-full pb-10'>
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
        </MotionWrapper>
      </MotionWrapper>
    </div>
  );
}
