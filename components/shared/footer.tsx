import React from "react";
import logoBig from "@/assets/logoBig.svg";
import logoConnect from "@/assets/logoConnect.svg";
import Image from "next/image";
import Link from "next/link";
import { getFooterData, FooterData } from "@/lib/sanity/queries/footer";

interface FooterProps {
  data?: FooterData;
}

async function Footer({ data }: FooterProps) {
  const footerData = data || (await getFooterData());

  // Fallback data if no Sanity data is provided
  const fallbackData: FooterData = {
    _id: "fallback",
    logo: {
      asset: {
        _id: "",
        url: logoConnect.src,
        metadata: { dimensions: { width: 163, height: 44 } },
      },
      alt: "Kobo Connect",
    },
    description:
      "From rides and deliveries to food, services, and healthcare powered by Kobo Vault's seamless and inclusive digital finance tools.",
    footerLinks: [
      {
        title: "Products",
        links: [
          { title: "Kobo Vault", href: "/personal" },
          { title: "Kobo Chat", href: "/" },
          { title: "Kobo Ride", href: "/" },
          { title: "Kobo Send & Delivery", href: "/" },
          { title: "Kobo Market", href: "/" },
          { title: "Kobo Eat", href: "/" },
          { title: "Kobo Square", href: "/" },
          { title: "Kobo Wave", href: "/" },
        ],
      },
      {
        title: "Company",
        links: [
          { title: "About", href: "/about" },
          { title: "Leadership Team", href: "/leadership" },
          { title: "Careers", href: "/careers" },
          { title: "Press", href: "/press" },
          { title: "Affiliate program", href: "/affiliate" },
          { title: "Partners", href: "/partners" },
          { title: "Suppliers", href: "/suppliers" },
        ],
      },
      {
        title: "Help",
        links: [
          { title: "Customer Support", href: "/customer-support" },
          { title: "Sitemap", href: "/sitemap" },
          { title: "Financial crime policies", href: "/sitemap" },
        ],
      },
    ],
    socialLinks: [
      {
        name: "X",
        href: "https://x.com/kobovault",
        icon: {
          asset: {
            _id: "",
            url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUyLjUiIGhlaWdodD0iNTIuNSIgcng9IjI2LjI1IiBmaWxsPSIjMDA5QTc0IiAvPgo8cGF0aCBmaWxsUnVsZT0iZXZlbm9kZCIgY2xpcFJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNy40MTY3IDIzLjc3NDdMMzQuMTc2MiAxNS43NUgzNi4wNDhMMjguMjQ4NiAyNS4wMDkyTDM2Ljc1IDM3LjYyNUgzMC40OTA5TDI0Ljc3MTQgMjkuMTM3M0wxNy42MjE5IDM3LjYyNUgxNS43NUwyMy45Mzk0IDI3LjkwMjhMMTUuNzUgMTUuNzVIMjIuMDA5MUwyNy40MTY3IDIzLjc3NDdaTTMxLjMzOTEgMzYuMjU0MUgzNC4yMzQ3TDIxLjEzMTYgMTcuMTUwN0gxOC4yNTA3TDMxLjMzOTEgMzYuMjU0MVoiIGZpbGw9IndoaXRlIiAvPgo8L3N2Zz4K",
            metadata: { dimensions: { width: 40, height: 40 } },
          },
          alt: "X",
        },
      },
      {
        name: "Facebook",
        href: "https://www.facebook.com/kobovault",
        icon: {
          asset: {
            _id: "",
            url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iNTIuNSIgaGVpZ2h0PSI1Mi41IiByeD0iMjYuMjUiIGZpbGw9IiMxNDIzMjIiIC8+CjxwYXRoIGQ9Ik0zMi44NzUgMTguMTAyMVYxNC4xNjY4QzMyLjE0MjQgMTQuMDgxNiAzMC4zMDI2IDEzLjkzNTQgMjguODA0NCAxNC4wMzE2QzI3LjMwNjIgMTQuMTI3NyAyNi4xMzcxIDE0Ljc3MjYgMjUuNzM5OCAxNS4wODNDMjQuMTU0OSAxNi4xMjg0IDIzLjY4NjUgMTguMjcyNCAyMy42NTA0IDE5LjIxMzZWMjIuOTY4OEgxOS43NVYyNy4zMjQ3SDIzLjY1MDRWMzguNUgyOC4yOTM2VjI3LjMyNDdIMzIuMTYzTDMxLjcyMDIgMjIuOTY4OEgyOC4yOTM2VjE5Ljc1NDRDMjguMjkzNiAxOC44NDE5IDI5LjA1NTkgMTguMTAyMSAyOS45OTYyIDE4LjEwMjFIMzIuODc1WiIgZmlsbD0iIzE0MjMyMiIgLz4KPC9zdmc+Cg==",
            metadata: { dimensions: { width: 40, height: 40 } },
          },
          alt: "Facebook",
        },
      },
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/company/kobovault",
        icon: {
          asset: {
            _id: "",
            url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUyLjUiIGhlaWdodD0iNTIuNSIgcng9IjI2LjI1IiBmaWxsPSIjMTQyMzIyIiAvPgo8cGF0aCBkPSJNMjcuMDU4NCAyMi4xNDM3SDIyLjcwNjFWMzYuNzU1MkgyNy4wNDM2VjI4Ljg5NDNDMjcuMDQzNiAyOC41MzkgMjcuMTEwMiAyOC4xNjQgMjcuMTM5OCAyOC4wMjA5QzI3LjE1NDYgMjcuODUzMSAyNy4yODQ5IDI3LjM2OTUgMjcuNjI4NCAyNi44MzY2QzI3Ljk3MTggMjYuMzAzNiAyOC41ODA4IDI2LjAyMjMgMjguODQyMyAyNS45NDgzQzI5LjAzNDcgMjUuODk2NSAyOS4yMTk4IDI1LjgzNzMgMjkuNzgyMyAyNS44MTUxQzMwLjIzMjQgMjUuNzk3MyAzMC42MzExIDI1LjkxNjIgMzAuNzc0MiAyNS45Nzc5QzMwLjk0NDUgMjYuMDQ5NSAzMS4zNDU2IDI2LjI2ODEgMzEuNTg4NCAyNi41NzAxQzMxLjgzMTIgMjYuODcyMSAzMS45OTA2IDI3LjI3MzMgMzIuMDM5OSAyNy40MzYxQzMyLjE5MzkgMjcuODUwNiAzMi4yNDcyIDI4LjU0MTUgMzIuMjU0NiAyOC44MzUxVjM2Ljc1NTJIMzYuNzY5OFYyNy44MjFDMzYuODM0OSAyNS44NTUxIDM2LjIyOTUgMjQuNDI2IDM1LjkxODYgMjMuOTU3MkMzNS41MjEzIDIzLjIxOTUgMzQuMDk0NyAyMS43MzM2IDMxLjU2NjIgMjEuNjkyMkMyOS4wMzc3IDIxLjY1MDcgMjcuNTA3NSAyMy4yODg1IDI3LjA1ODQgMjQuMTEyNlYyMi4xNDM3WiIgZmlsbD0iIzE0MjMyMiIgLz4KPHJlY3QgeD0iMTUuMzA0NyIgeT0iMjIuMTQyNiIgd2lkdGg9IjQuNTE1MjEiIGhlaWdodD0iMTQuNjExNSIgZmlsbD0iIzE0MjMyMiIgLz4KPGNpcmNsZSBjeD0iMTcuNTM5OCIgY3k9IjE3LjUzOTgiIHI9IjIuNjY0ODEiIGZpbGw9IiMxNDIzMjIiIC8+Cjwvc3ZnPgo=",
            metadata: { dimensions: { width: 40, height: 40 } },
          },
          alt: "Linkedin",
        },
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/kobovault",
        icon: {
          asset: {
            _id: "",
            url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iNTIuNSIgaGVpZ2h0PSI1Mi41IiByeD0iMjYuMjUiIGZpbGw9IiMxNDIzMjIiIC8+CjxwYXRoIGZpbGxSdWxlPSJldmVub2RkIiBjbGlwUnVsZT0iZXZlbm9kZCIgZD0iTTI2LjMxMjUgMjAuNTg3MUMyOS42ODE2IDIwLjU4NzEgMzIuNDEyOSAyMy4zMTg0IDMyLjQxMjkgMjYuNjg3NUgzMi40MTI5IDMwLjA1NjZDMzIuNDEyOSAzMy40MjU3IDI5LjY4MTYgMzYuMTU3IDI2LjMxMjUgMzYuMTU3QzIyLjk0MzQgMzYuMTU3IDIwLjIxMjEgMzMuNDI1NyAyMC4yMTIxIDMwLjA1NjZWMjYuNjg3NUMyMC4yMTIxIDIzLjMxODQgMjIuOTQzNCAyMC41ODcxIDI2LjMxMjUgMjAuNTg3MVpNMjYuMzEyNSAyMi44MDU1QzI0LjE2ODUgMjIuODA1NSAyMi40MzA1IDI0LjU0MzUgMjIuNDMwNSAyNi42ODc1QzIyLjQzMDUgMjguODMxNSAyNC4xNjg1IDMwLjU2OTUgMjYuMzEyNSAzMC41Njk1QzI4LjQ1NjUgMzAuNTY5NSAzMC4xOTQ1IDI4LjgzMTUgMzAuMTk0NSAyNi42ODc1QzMwLjE5NDUgMjQuNTQzNSAyOC40NTY1IDIyLjgwNTUgMjYuMzEyNSAyMi44MDU1WiIgZmlsbD0iIzE0MjMyMiIgLz4KPHBhdGggZD0iTTMyLjYzNDcgMTguOTIzNEMzMy40MzEgMTguOTIzNCAzNC4wNzY2IDE5LjU2OSAzNC4wNzY2IDIwLjM2NTNDMzQuMDc2NiAyMS4xNjE3IDMzLjQzMSAyMS44MDcyIDMyLjYzNDcgMjEuODA3MkMzMS44MzgzIDIxLjgwNzIgMzEuMTkyOCAyMS4xNjE3IDMxLjE5MjggMjAuMzY1M0MzMS4xOTI4IDE5LjU2OSAzMS44MzgzIDE4LjkyMzQgMzIuNjM0NyAxOC45MjM0WiIgZmlsbD0iIzE0MjMyMiIgLz4KPHBhdGggZmlsbFJ1bGU9ImV2ZW5vZGQiIGNsaXBSdWxlPSJldmVub2RkIiBkPSJNMzEuNDcwMSAxNC44NzVDMzUuMTQ1NSAxNC44NzUgMzguMTI1IDE3Ljg1NDUgMzguMTI1IDIxLjUyOTlWMzEuODQ1MUMzOC4xMjUgMzUuNDkxOCAzNS4xOTE5IDM4LjQ1MzQgMzEuNTU2MSAzOC40OTk1TDMxLjQ3MDEgMzguNUgyMS4xNTQ5TDIxLjA2ODkgMzguNDk5NUMxNy40NjE4IDM4LjQ1MzggMTQuNTQ2MiAzNS41MzgyIDE0LjUwMDUgMzEuOTMxMUwxNC41IDMxLjg0NTFWMjEuNTI5OUMxNC41IDE3Ljg1NDUgMTcuNDc5NSAxNC44NzUgMjEuMTU0OSAxNC44NzVIMzEuNDcwMVpNMjEuMTU0OSAxNy4wOTMzQzE4LjcwNDcgMTcuMDkzMyAxNi43MTgzIDE5LjA3OTcgMTYuNzE4MyAyMS41Mjk5VjMxLjg0NTFDMTYuNzE4MyAzNC4yOTUzIDE4LjcwNDcgMzYuMjgxNyAyMS4xNTQ5IDM2LjI4MTdIMzEuNDcwMUMzMy45MjAzIDM2LjI4MTcgMzUuOTA2NyAzNC4yOTUzIDM1LjkwNjcgMzEuODQ1MVYyMS41Mjk5QzM1LjkwNjcgMTkuMDc5NyAzMy45MjAzIDE3LjA5MzMgMzEuNDcwMSAxNy4wOTMzSDIxLjE1NDlaIiBmaWxsPSIjMTQyMzIyIiAvPgo8L3N2Zz4K",
            metadata: { dimensions: { width: 40, height: 40 } },
          },
          alt: "Instagram",
        },
      },
    ],
    bottomLogo: {
      asset: {
        _id: "",
        url: logoBig.src,
        metadata: { dimensions: { width: 1558, height: 275 } },
      },
      alt: "logo",
    },
  };

  const displayData = footerData || fallbackData;

  return (
    <div className='bg-[#0A1B1B]'>
      <div className='max-w-7xl mx-auto pt-8 md:pt-14 px-4 relative'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 mb-8 md:mb-16'>
          <div className='flex flex-col gap-4 '>
            <Image
              src={displayData.logo.asset.url}
              width={displayData.logo.asset.metadata.dimensions.width}
              height={displayData.logo.asset.metadata.dimensions.height}
              alt={displayData.logo.alt}
            />
            <p className='text-[#B5BBBB] max-w-md'>{displayData.description}</p>

            <div className='flex gap-4 mt-4'>
              {displayData.socialLinks.map((social) => (
                <div
                  key={social.name}
                  className='p-2 md:p-4 rounded-full bg-[#142322] size-10 md:size-12 flex flex-col justify-center cursor-pointer items-center hover:bg-[#009A74] transition-all'>
                  <Link
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image
                      src={social.icon.asset.url}
                      width={21}
                      height={21}
                      alt={social.icon.alt}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
            {displayData.footerLinks.map((link) => (
              <div key={link.title}>
                <h3 className='text-[#009A74] font-semibold text-lg mb-2'>
                  {link.title}
                </h3>
                <ul>
                  {link.links.map((item) => (
                    <li
                      key={item.title}
                      className='text-[#B5BBBB] leading-loose'>
                      <a href={item.href}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Image
          src={displayData.bottomLogo.asset.url}
          alt={displayData.bottomLogo.alt}
          width={displayData.bottomLogo.asset.metadata.dimensions.width}
          height={displayData.bottomLogo.asset.metadata.dimensions.height}
          className=''
        />
      </div>
    </div>
  );
}

export default Footer;
