import { client } from "../client";
import { defineQuery } from "next-sanity";

const OUR_APPS_QUERY = defineQuery(`
  *[_type == "ourApps" && showSection == true][0] {
    _id,
    subtitle,
    title,
    description,
    appImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    stats[] {
      value,
      label
    },
    buttonText,
    buttonLink,
    showSection
  }
`);

export interface OurAppsData {
  _id: string;
  subtitle: string;
  title: string;
  description: string;
  appImage: {
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
  stats: Array<{
    value: string;
    label: string;
  }>;
  buttonText: string;
  buttonLink?: string;
  showSection: boolean;
}

export async function getOurAppsData(): Promise<OurAppsData | null> {
  try {
    const data = await client.fetch(OUR_APPS_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching our apps data:", error);
    return null;
  }
}
