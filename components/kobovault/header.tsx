"use client";
import { Button } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";

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
    <div className="z-20 bg-[#0A1B1B]">
      <div className="hidden md:block">
        <DesktopHeader
          logo={sanityLogo}
          navLinks={navLinks}
          ctaButton={ctaButton}
        />
      </div>
      <div className="md:hidden">
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
  const pathName = usePathname();

  return (
    <header className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
      <Link href="/">
        {sanityLogo ? (
          <Image
            src={sanityLogo.asset.url}
            className="z-50"
            alt={sanityLogo.alt || "Logo"}
            width={100}
            height={100}
          />
        ) : (
          <Image
            src={logo}
            className="z-50"
            alt="Logo"
            width={100}
            height={100}
          />
        )}
      </Link>
      <div>
        {links.map((link) => (
          <Link key={link._key || link.label} href={link.href}>
            <Button
              variant={pathName === link.href ? "light" : "subtle"}
              color="white"
            >
              {link.label}
            </Button>
          </Link>
        ))}
      </div>

      <div>
        <Link href={cta.href}>
          <Button
            variant="default"
            style={{
              backgroundColor: "#009A74",
              color: "white",
              borderColor: "#008E6A",
            }}
          >
            {cta.label}
          </Button>
        </Link>
      </div>
    </header>
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
    <header>
      <div>
        {/* Add your mobile header implementation here */}
        {/* You can use the sanityLogo, links, and cta props */}
        header
      </div>
    </header>
  );
}
