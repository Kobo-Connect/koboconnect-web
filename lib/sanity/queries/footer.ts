import { client } from "../client";
import { defineQuery } from "next-sanity";

const FOOTER_QUERY = defineQuery(`
  *[_type == "footer"][0] {
    _id,
    logo {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    description,
    footerLinks[] {
      title,
      links[] {
        title,
        href
      }
    },
    socialLinks[] {
      name,
      href,
      icon {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    },
    bottomLogo {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    }
  }
`);

export interface FooterData {
  _id: string;
  logo: {
    asset: {
      _id: string;
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
    alt: string;
  };
  description: string;
  footerLinks: Array<{
    title: string;
    links: Array<{
      title: string;
      href: string;
    }>;
  }>;
  socialLinks: Array<{
    name: string;
    href: string;
    icon: {
      asset: {
        _id: string;
        url: string;
        metadata: {
          dimensions: {
            width: number;
            height: number;
          };
        };
      };
      alt: string;
    };
  }>;
  bottomLogo: {
    asset: {
      _id: string;
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
    alt: string;
  };
}

export async function getFooterData(): Promise<FooterData | null> {
  try {
    const data = await client.fetch(FOOTER_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return null;
  }
}
