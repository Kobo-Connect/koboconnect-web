"use client";
import { Button } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const navVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
};

type SanityImage = {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
};

type NavLink = {
  label: string;
  href: string;
  _key?: string;
};

type HeaderProps = {
  logo?: SanityImage;
  navLinks?: NavLink[];
  ctaButton?: {
    label: string;
    href: string;
  };
};

export default function Header({
  logo: sanityLogo,
  navLinks,
  ctaButton,
}: HeaderProps) {
  return (
    <div className='z-20 bg-[#0A1B1B]'>
      <div className='hidden md:block'>
        <DesktopHeader
          logo={sanityLogo}
          navLinks={navLinks}
          ctaButton={ctaButton}
        />
      </div>
      <div className='md:hidden'>
        <MobileHeader
          logo={sanityLogo}
          navLinks={navLinks}
          ctaButton={ctaButton}
        />
      </div>
    </div>
  );
}

function DesktopHeader({ logo: sanityLogo, navLinks, ctaButton }: HeaderProps) {
  // Default nav links
  const defaultNavLinks: NavLink[] = [
    {
      label: "Personal",
      href: "/personal",
    },
    {
      label: "Business",
      href: "#",
    },
    {
      label: "CRS",
      href: "#",
    },
  ];

  // Default CTA
  const defaultCTA = {
    label: "Get Started",
    href: "/",
  };

  const links = navLinks && navLinks.length > 0 ? navLinks : defaultNavLinks;
  const cta = ctaButton || defaultCTA;
  const pathName = usePathname();

  const isPath = useMemo(
    () => (href: string) => {
      if (pathName.includes(href)) {
        return true;
      }

      return false;
    },
    [pathName]
  );

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="show"
      className='max-w-7xl mx-auto flex justify-between items-center py-6 px-4'
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "tween", duration: 0.12, ease: EASE }}
      >
        <Link href='/'>
          {sanityLogo ? (
            <Image
              src={sanityLogo.asset.url}
              className='z-50'
              alt={sanityLogo.alt || "Logo"}
              width={100}
              height={100}
            />
          ) : (
            <Image
              src={logo}
              className='z-50'
              alt='Logo'
              width={100}
              height={100}
            />
          )}
        </Link>
      </motion.div>
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate="show"
      >
        {links.map((link) => (
          <motion.div
            key={link._key || link.label}
            variants={navItemVariants}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "tween", duration: 0.12, ease: EASE }}
            className="inline-block"
          >
            <Link href={link.href}>
              <Button
                variant={isPath(link.href) ? "light" : "subtle"}
                style={{
                  backgroundColor: isPath(link.href) ? "#122A2A" : "",
                  color: isPath(link.href) ? "#00BA8B" : "#CCE5DF",
                  fontWeight: isPath(link.href) ? 600 : 500,
                }}>
                {link.label}
              </Button>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={navItemVariants}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "tween", duration: 0.12, ease: EASE }}
      >
        <Link href={cta.href}>
          <Button
            variant='default'
            style={{
              backgroundColor: "#009A74",
              color: "white",
              borderColor: "#008E6A",
            }}>
            {cta.label}
          </Button>
        </Link>
      </motion.div>
    </motion.header>
  );
}

function MobileHeader({ logo: sanityLogo, navLinks, ctaButton }: HeaderProps) {
  // Default nav links
  const defaultNavLinks: NavLink[] = [
    {
      label: "Personal",
      href: "/personal",
    },
    {
      label: "Business",
      href: "/business",
    },
    {
      label: "CRS",
      href: "/crs",
    },
  ];

  // Default CTA
  const defaultCTA = {
    label: "Get Started",
    href: "/",
  };

  const links = navLinks && navLinks.length > 0 ? navLinks : defaultNavLinks;
  const cta = ctaButton || defaultCTA;

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      <div className='container mx-auto flex items-center justify-between px-4 py-5'>
        <motion.div whileTap={{ scale: 0.98 }}>
          <Link href='/'>
            {sanityLogo ? (
              <Image
                src={sanityLogo.asset.url}
                alt={sanityLogo.alt || "Logo"}
                width={100}
                height={100}
              />
            ) : (
              <Image src={logo} alt='Logo' width={100} height={100} />
            )}
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "tween", duration: 0.12, ease: EASE }}
        >
          <Link href={cta.href}>
            <Button
              variant='default'
              style={{
                backgroundColor: "#009A74",
                color: "white",
                borderColor: "#008E6A",
              }}>
              {cta.label}
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}
