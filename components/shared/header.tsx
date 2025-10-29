"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mantine/core";
import NavMenu from "@/components/ui/NavMenu";
import vaultImage from "@/assets/images/koboVault.png";
import aboutImage from "@/assets/images/aboutUs.png";
import careerImage from "@/assets/images/careers.png";
import pressImage from "@/assets/images/press.png";
import koboRideImage from "@/assets/images/koboRide.png";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

const navLinks = [
  {
    label: "Products",
    children: (
      <div className='grid grid-cols-3 gap-8 container mx-auto p-4 rounded-2xl rounded-b-2xl'>
        <Link
          href='/personal'
          className='rounded-xl bg-[#0A1B1B] flex flex-col relative h-[240px]'>
          <div className='p-5 flex flex-col gap-1'>
            <h2 className='text-white font-bold'>Kobo Vault</h2>
            <h6 className='text-[#B5BBBB]'>
              Secure, smart, seamless digital banking for everyone.
            </h6>
          </div>

          <div className='bg-[#203C3A] rounded-t-xl absolute bottom-0 right-3'>
            <Image
              className='mt-2 mr-2 rounded-t-xl'
              src={vaultImage}
              alt='vault'
              width={240}
              height={240}
            />
          </div>
        </Link>

        <Link
          href='#'
          className='rounded-xl border border-[#B0D0CE] flex flex-col relative h-[240px]'>
          <div className='p-5 flex flex-col gap-1'>
            <div className='flex gap-2 items-center'>
              <h2 className='font-bold'>Kobo Ride</h2>
              <span className='text-[#FC8541] bg-[#FFEFE8] px-2 py-1 rounded-md text-xs'>
                Coming Soon
              </span>
            </div>
            <h6 className=''>
              Fast, reliable, and affordable rides at your fingertips.{" "}
            </h6>
          </div>

          <div className='bg-[#203C3A]  rounded-t-xl absolute bottom-0 right-3'>
            <Image
              className='mt-2 mr-2 rounded-t-xl'
              src={koboRideImage}
              alt='kobo-ride'
              width={240}
              height={240}
            />
          </div>
        </Link>

        <div className='flex gap-10'>
          <div className='py-2 flex flex-col justify-between'>
            <div className='flex gap-2 items-center mb-2'>
              <h2 className='font-bold'>More Products</h2>
              <span className='text-[#FC8541] bg-[#FFEFE8] px-2 py-1 rounded-md text-xs'>
                Coming Soon
              </span>
            </div>

            <h6>Kobo Chat</h6>
            <h6>Kobo Eat</h6>
            <h6>Kobo Square</h6>
            <h6>Kobo Wave</h6>
            <h6>Kobo Send & Delivery</h6>
          </div>

          <div className='self-center'>
            <Link href='/products'>
              <svg
                width='105'
                height='105'
                viewBox='0 0 105 105'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <circle
                  cx='52.5'
                  cy='52.5'
                  r='52.25'
                  fill='#F3F8F8'
                  stroke='#93A8A7'
                  strokeWidth='0.5'
                />
                <path
                  d='M55.8477 43.3892L65.4585 53L55.8477 62.6108'
                  stroke='#93A8A7'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M38.5415 53H65.189'
                  stroke='#93A8A7'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Company",
    href: "/company",
    children: (
      <div className='grid grid-cols-2 gap-8 p-4'>
        <div>
          <Link
            href='/company/about-us'
            className='rounded-xl border border-[#B0D0CE] flex flex-col relative h-[240px]'>
            <div className='p-5 flex flex-col gap-1'>
              <h2 className='font-bold'>About Us</h2>
              <h6 className=''>
                Our mission is to connect Africa through technology.{" "}
              </h6>
            </div>

            <div className='bg-[#B0D0CE]  rounded-t-xl absolute bottom-0 right-3'>
              <Image
                className='mt-2 mr-2 rounded-t-xl'
                src={aboutImage}
                alt='about'
                width={240}
                height={240}
              />
            </div>
          </Link>
        </div>

        <div className='flex flex-col gap-2 h-full'>
          <Link
            href='/company/careers'
            className='h-[50%] rounded-xl bg-[#0A1B1B] border border-[#B0D0CE] relative'>
            <div className='p-5 flex flex-col gap-1'>
              <h2 className='font-bold text-white'>Careers</h2>
              <h6 className='text-[#B5BBBB]'>Join a team of mavericks.</h6>
            </div>

            <div className='bg-[#203C3A] rounded-t-xl absolute bottom-0 right-0'>
              <Image
                className='mt-2 mr-2 rounded-t-xl'
                src={careerImage}
                alt='career'
                width={140}
                height={140}
              />
            </div>
          </Link>

          <Link
            href='/company/press'
            className='h-[50%] rounded-xl border border-[#B0D0CE] relative'>
            <div className='p-5 flex flex-col gap-1'>
              <h2 className='font-bold'>Press</h2>
              <h6 className='text-[#363E3F]'>
                Our latest news, & media updates.
              </h6>
            </div>

            <div className='bg-[#B0D0CE] rounded-t-xl absolute bottom-0 right-0'>
              <Image
                className='mt-2 mr-2 rounded-t-xl'
                src={pressImage}
                alt='press'
                width={140}
                height={140}
              />
            </div>
          </Link>
        </div>
      </div>
    ),
  },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Help", href: "/help" },
];

export default function Header({
  textColor,
  backgroundColor = "#0A1B1B",
  logo,
}: {
  textColor: string;
  backgroundColor?: string;
  logo: React.ReactNode;
}) {
  return (
    <div className='z-20' style={{ backgroundColor }}>
      <div className='hidden md:block'>
        <DesktopHeader textColor={textColor} logo={logo} />
      </div>
      <div className='md:hidden'>
        <MobileHeader logo={logo} />
      </div>
    </div>
  );
}

function DesktopHeader({
  textColor = "#CCE5DF",
  logo,
}: {
  textColor: string;
  logo: React.ReactNode;
}) {
  const pathName = usePathname();

  // handle button variant based on current path
  const handleButtonVariant = useCallback(
    (href: string) => {
      if (!href) {
        return "subtle";
      }

      if (pathName.includes(href)) {
        return "filled";
      }

      return "subtle";
    },
    [pathName]
  );

  return (
    <header className='max-w-7xl mx-auto flex justify-between items-center py-6 px-4'>
      <Link href='/'>{logo}</Link>

      <div className='flex gap-4'>
        {navLinks.map((link) =>
          link.children ? (
            <NavMenu
              key={link.label}
              link={link}
              color={textColor}
              buttonOptions={{
                variant: handleButtonVariant(link?.href as string),
              }}
            />
          ) : (
            <Link href={link.href} key={link.label}>
              <Button
                style={{
                  backgroundColor: link.href === pathName ? "#122A2A" : "",
                  color: link.href === pathName ? "#00BA8B" : textColor,
                }}
                variant={handleButtonVariant(link.href)}
                color={textColor}>
                {link.label}
              </Button>
            </Link>
          )
        )}
      </div>

      <Button
        variant='default'
        radius={"md"}
        size='md'
        style={{
          backgroundColor: "#008E6A",
          color: "#FFFFFF",
          fontSize: "14px",
          borderColor: "#008E6A",
        }}>
        Get Started
      </Button>
    </header>
  );
}

function MobileHeader({ logo }: { logo: React.ReactNode }) {
  return (
    <header className='container mx-auto flex justify-between items-center py-5 px-4'>
      {logo}

      <Button
        variant='default'
        style={{
          backgroundColor: "#009A74",
          color: "white",
          borderColor: "#008E6A",
        }}>
        Get Started
      </Button>
    </header>
  );
}
