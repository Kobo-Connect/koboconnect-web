import { client } from "../client";
import { defineQuery } from "next-sanity";

// Hero
const KOBOVAULT_PERSONAL_HERO_QUERY = defineQuery(`
  *[_type == "kobovaultPersonalHero" && showSection == true][0] {
    _id,
    title,
    description,
    appStoreLink,
    playStoreLink,
    backgroundImage { asset->{ _id, url, metadata{ dimensions } }, alt },
    heroImage { asset->{ _id, url, metadata{ dimensions } }, alt },
    showSection
  }
`);

export interface KoboVaultPersonalHeroData {
  _id: string;
  title: string;
  description: string;
  appStoreLink?: string;
  playStoreLink?: string;
  backgroundImage?: { asset: { _id: string; url: string; metadata: { dimensions: { width: number; height: number } } }; alt: string };
  heroImage?: { asset: { _id: string; url: string; metadata: { dimensions: { width: number; height: number } } }; alt: string };
  showSection: boolean;
}

export async function getKoboVaultPersonalHero(): Promise<KoboVaultPersonalHeroData | null> {
  try {
    return await client.fetch(KOBOVAULT_PERSONAL_HERO_QUERY);
  } catch (err) {
    console.error("Error fetching KoboVault personal hero:", err);
    return null;
  }
}

// Total Control Section
const KOBOVAULT_PERSONAL_TOTAL_CONTROL_QUERY = defineQuery(`
  *[_type == "kobovaultPersonalTotalControl" && showSection == true][0] {
    _id,
    title,
    subtitle,
    image { asset->{ _id, url, metadata{ dimensions } }, alt },
    features[]{ title, description, iconColor, iconBg },
    showSection
  }
`);

export interface KoboVaultPersonalTotalControlData {
  _id: string;
  title: string;
  subtitle: string;
  image?: { asset: { _id: string; url: string; metadata: { dimensions: { width: number; height: number } } }; alt: string };
  features?: Array<{ title: string; description: string; iconColor?: string; iconBg?: string }>;
  showSection: boolean;
}

export async function getKoboVaultPersonalTotalControl(): Promise<KoboVaultPersonalTotalControlData | null> {
  try {
    return await client.fetch(KOBOVAULT_PERSONAL_TOTAL_CONTROL_QUERY);
  } catch (err) {
    console.error("Error fetching KoboVault personal total control:", err);
    return null;
  }
}

// Security Section
const KOBOVAULT_PERSONAL_SECURITY_QUERY = defineQuery(`
  *[_type == "kobovaultPersonalSecurity" && showSection == true][0] {
    _id,
    title,
    subtitle,
    image { asset->{ _id, url, metadata{ dimensions } }, alt },
    features[]{ title, description, iconColor, iconBg },
    showSection
  }
`);

export interface KoboVaultPersonalSecurityData {
  _id: string;
  title: string;
  subtitle: string;
  image?: { asset: { _id: string; url: string; metadata: { dimensions: { width: number; height: number } } }; alt: string };
  features?: Array<{ title: string; description: string; iconColor?: string; iconBg?: string }>;
  showSection: boolean;
}

export async function getKoboVaultPersonalSecurity(): Promise<KoboVaultPersonalSecurityData | null> {
  try {
    return await client.fetch(KOBOVAULT_PERSONAL_SECURITY_QUERY);
  } catch (err) {
    console.error("Error fetching KoboVault personal security:", err);
    return null;
  }
}

// Built For Everyday Section
const KOBOVAULT_PERSONAL_EVERYDAY_QUERY = defineQuery(`
  *[_type == "kobovaultPersonalEveryday" && showSection == true][0] {
    _id,
    title,
    subtitle,
    leftImage { asset->{ _id, url, metadata{ dimensions } }, alt },
    overlayImage { asset->{ _id, url, metadata{ dimensions } }, alt },
    features[]{ title, description, iconColor, iconBg },
    showSection
  }
`);

export interface KoboVaultPersonalEverydayData {
  _id: string;
  title: string;
  subtitle: string;
  leftImage?: { asset: { _id: string; url: string; metadata: { dimensions: { width: number; height: number } } }; alt: string };
  overlayImage?: { asset: { _id: string; url: string; metadata: { dimensions: { width: number; height: number } } }; alt: string };
  features?: Array<{ title: string; description: string; iconColor?: string; iconBg?: string }>;
  showSection: boolean;
}

export async function getKoboVaultPersonalEveryday(): Promise<KoboVaultPersonalEverydayData | null> {
  try {
    return await client.fetch(KOBOVAULT_PERSONAL_EVERYDAY_QUERY);
  } catch (err) {
    console.error("Error fetching KoboVault personal everyday:", err);
    return null;
  }
}

// More Benefits Section
const KOBOVAULT_PERSONAL_BENEFITS_QUERY = defineQuery(`
  *[_type == "kobovaultPersonalBenefits" && showSection == true][0] {
    _id,
    title,
    subtitle,
    benefits[]{ title, description },
    showSection
  }
`);

export interface KoboVaultPersonalBenefitsData {
  _id: string;
  title: string;
  subtitle?: string;
  benefits: Array<{ title: string; description: string }>;
  showSection: boolean;
}

export async function getKoboVaultPersonalBenefits(): Promise<KoboVaultPersonalBenefitsData | null> {
  try {
    return await client.fetch(KOBOVAULT_PERSONAL_BENEFITS_QUERY);
  } catch (err) {
    console.error("Error fetching KoboVault personal benefits:", err);
    return null;
  }
}

// Header (optional)
const KOBOVAULT_PERSONAL_HEADER_QUERY = defineQuery(`
  *[_type == "kobovaultPersonalHeader"][0] {
    _id,
    logo { asset->{ _id, url, metadata{ dimensions } }, alt },
    navLinks[]{ label, href, _key },
    ctaButton{ label, href }
  }
`);

export interface KoboVaultPersonalHeaderData {
  _id: string;
  logo?: { asset: { _id: string; url: string; metadata: { dimensions: { width: number; height: number } } }; alt: string };
  navLinks?: Array<{ label: string; href: string; _key?: string }>;
  ctaButton?: { label: string; href: string };
}

export async function getKoboVaultPersonalHeader(): Promise<KoboVaultPersonalHeaderData | null> {
  try {
    return await client.fetch(KOBOVAULT_PERSONAL_HEADER_QUERY);
  } catch (err) {
    console.error("Error fetching KoboVault personal header:", err);
    return null;
  }
}


