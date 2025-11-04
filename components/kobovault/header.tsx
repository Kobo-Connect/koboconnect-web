"use client";

import { Button } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import React from "react";
import logo from "@/assets/logo.svg";

export default function Header() {
  return (
    <div className="z-20 bg-[#0A1B1B]">
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
      <div className="md:hidden">
        <MobileHeader />
      </div>
    </div>
  );
}

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE, type: "tween" },
  },
};

function DesktopHeader() {
  const navLinks = [
    { label: "Personal", href: "/personal" },
    { label: "Business", href: "/business" },
    { label: "CRS", href: "/crs" },
  ];

  const pathName = usePathname();

  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-7xl flex items-center justify-between px-4 py-5"
    >
      {/* Logo */}
      <motion.div variants={fadeUp}>
        <Link href="/">
          <Image
            src={logo}
            className="z-50"
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        </Link>
      </motion.div>

      {/* Nav links */}
      <motion.nav
        variants={container}
        className="flex items-center space-x-1 text-white"
      >
        {navLinks.map((link) => (
          <motion.div key={link.label} variants={fadeUp}>
            <Link href={link.href}>
              <Button
                variant={pathName === link.href ? "light" : "subtle"}
                color="white"
              >
                {link.label}
              </Button>
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* CTA Button */}
      <motion.div
        variants={fadeUp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.12, ease: EASE }}
      >
        <Link href="/">
          <Button
            variant="default"
            styles={{
              root: {
                backgroundColor: "#009A74",
                color: "white",
                borderColor: "#008E6A",
              },
            }}
          >
            Get Started
          </Button>
        </Link>
      </motion.div>
    </motion.header>
  );
}

function MobileHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-4">
      <Image src={logo} alt="Logo" width={80} height={80} />
      <p className="text-white text-sm">Menu</p>
    </header>
  );
}
