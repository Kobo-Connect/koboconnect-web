import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";

import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { ThemeProvider } from "@/components/theme-provider";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "Kobo Connect",
  title: {
    default:
      "Kobo Connect — Super App for Mobile Banking, Bills & Virtual Cards",
    template: "%s | Kobo Connect",
  },
  description:
    "Kobo Connect is a modern fintech super app offering mobile banking with Kobo Vault (online banking), bill payments, airtime & data top-up, and secure virtual card services.",
  keywords: [
    "Kobo Connect",
    "Kobo Vault",
    "Next generation super app",
    "fintech app",
    "mobile banking",
    "online banking",
    "bill payment",
    "airtime",
    "data top up",
    "virtual card",
    "debit card",
    "pay bills",
    "send money",
    "digital wallet",
  ],
  authors: [{ name: "KoboConnect" }],
  creator: "KoboConnect",
  publisher: "KoboConnect",
  category: "Finance, Fintech, Mobile Banking",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kobo Connect",
    title: "Kobo Connect — Super App for Mobile Banking, Bills & Virtual Cards",
    description:
      "Kobo Connect brings together Kobo Vault online banking, seamless bill payments, and secure virtual card issuance in one secure super app.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kobo Connect — Super App for Mobile Banking, Bills & Virtual Cards",
    description:
      "Experience Kobo Vault online banking, pay bills instantly, and create virtual cards — all in the Kobo Connect super app.",
    creator: "@koboconnect",
  },
};

// revalidate cache every 60 minutes
export const revalidate = 3600;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript async />
      </head>
      <body className={` ${manrope.className} antialiased`}>
        <ThemeProvider>
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
