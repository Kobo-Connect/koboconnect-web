import Image from "next/image";
import heroImg from "@/assets/images/hero.png";
import appStoreSvg from "@/assets/appStore.svg";
import playStoreSvg from "@/assets/playStore.svg";
import TypewriterText from "../shared/typewriter-text";
import heroBg from "@/assets/images/heroBg.png";
import Link from "next/link";
import { HomePageData } from "@/lib/sanity/queries/home";
import { urlFor } from "@/lib/sanity/image";

interface HeroProps {
  data?: HomePageData["heroSection"];
}

export default function Hero({ data }: HeroProps) {
  // Fallback data if no Sanity data is provided
  const heroData = data || {
    backgroundImage: {
      asset: {
        url: heroBg.src,
        _id: "",
        metadata: { dimensions: { width: 0, height: 0 } },
      },
      alt: "Hero background",
    },
    mainTitle: "Experience",
    typewriterWords: ["Banking", "Shopping", "Sending Money"],
    appName: "Kobo App",
    afterTypewriterText: "Like Never Before with",
    description:
      "Kobo Connect combines payments, transport, chat, food, shopping, and healthcare into a single seamless platform built for modern living. It's not just an app, it's your daily companion.",
    heroImage: {
      asset: {
        url: heroImg.src,
        _id: "",
        metadata: { dimensions: { width: 0, height: 0 } },
      },
      alt: "Hero image",
    },
    appStoreLink: "#",
    playStoreLink: "#",
  };
  return (
    <div className='relative h-full md:h-[calc(100vh-120px)]'>
      <Image
        src={heroData.backgroundImage.asset.url}
        priority
        alt={heroData.backgroundImage.alt}
        fill
        className='object-cover absolute inset-0 z-0'
      />
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8 lg:gap-14 items-stretch py-4 md:py-6 lg:py-8 px-4 relative z-10'>
        <div className='col-span-2 lg:col-span-1 max-w-2xl  py-6 lg:py-10 text-white '>
          <div className=''>
            <h1 className='text-2xl md:text-5xl font-bold leading-[1.25]'>
              {heroData.mainTitle} {""}
              <span className='text-[#007F5F]'>
                <TypewriterText words={heroData.typewriterWords} />
              </span>
              <br /> {heroData.afterTypewriterText} <br />
            </h1>

            <h1 className='relative text-2xl md:text-5xl font-bold leading-[1.40]'>
              <span className='relative'>
                {heroData.appName}
                <svg
                  className='absolute left-2 bottom-0 w-20 md:w-40'
                  height='60'
                  viewBox='0 0 278 82'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M225.325 16.0525C206.359 9.83672 146.22 2.40419 57.3937 22.4006C-31.4322 42.397 6.15813 64.8532 36.0565 73.5818C68.4575 79.7976 151.594 86.5953 221.769 67.2337C252.195 60.6212 302.297 41.1275 259.307 16.0525C249.429 10.7624 214.736 0.578977 154.992 2.16599'
                    stroke='#007F5F'
                    strokeWidth='4'
                  />
                </svg>
              </span>
            </h1>

            <p className='text-[#B5BBBB] my-6 text-base md:text-[22px] md:leading-[40px] pr-4 max-w-xl'>
              {heroData.description}
            </p>
          </div>

          <div className='flex gap-5 pt-4'>
            <Link href={heroData.appStoreLink || "#"}>
              <Image
                src={appStoreSvg}
                priority
                alt='app-store'
                width={150}
                height={150}
              />
            </Link>
            <Link href={heroData.playStoreLink || "#"}>
              <Image
                src={playStoreSvg}
                alt='play-store'
                width={150}
                height={150}
                priority
              />
            </Link>
          </div>
        </div>
        <div className='col-span-1 lg:col-span-1 lg:place-items-end py-4'>
          <Image
            src={urlFor(heroData.heroImage.asset).url()}
            alt={heroData.heroImage.alt}
            width={480}
            height={420}
            priority
            className='object-contain'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </div>
    </div>
  );
}
