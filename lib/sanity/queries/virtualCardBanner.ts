import { client } from "../client";
import { defineQuery } from "next-sanity";

const VIRTUAL_CARD_BANNER_QUERY = defineQuery(`
  *[_type == "virtualCardBanner" && showSection == true][0] {
    _id,
    title,
    description,
    buttonText,
    buttonLink,
    cardImages {
      primaryCard {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      secondaryCard {
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
    showSection
  }
`);

export interface VirtualCardBannerData {
  _id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  cardImages: {
    primaryCard: {
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
    secondaryCard: {
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
  };
  showSection: boolean;
}

export async function getVirtualCardBannerData(): Promise<VirtualCardBannerData | null> {
  try {
    const data = await client.fetch(VIRTUAL_CARD_BANNER_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching virtual card banner data:", error);
    return null;
  }
}
