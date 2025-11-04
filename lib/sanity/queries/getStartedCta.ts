import { client } from "../client";
import { defineQuery } from "next-sanity";

const GET_STARTED_CTA_QUERY = defineQuery(`
  *[_type == "getStartedCta" && showSection == true][0] {
    _id,
    title,
    ratingText,
    ratingValue,
    ratingDescription,
    buttonText,
    buttonLink,
    footerText,
    showSection
  }
`);

export interface GetStartedCtaData {
  _id: string;
  title: string;
  ratingText: string;
  ratingValue: number;
  ratingDescription: string;
  buttonText: string;
  buttonLink?: string;
  footerText: string;
  showSection: boolean;
}

export async function getGetStartedCtaData(): Promise<GetStartedCtaData | null> {
  try {
    const data = await client.fetch(GET_STARTED_CTA_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching get started CTA data:", error);
    return null;
  }
}
