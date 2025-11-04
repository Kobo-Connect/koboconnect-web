import { client } from "../client";
import { defineQuery } from "next-sanity";

const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonials" && showSection == true][0] {
    _id,
    title,
    description,
    buttonText,
    buttonLink,
    testimonials[] {
      name,
      title,
      comment,
      rating,
      image {
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

export interface TestimonialsData {
  _id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  testimonials: Array<{
    name: string;
    title: string;
    comment: string;
    rating: number;
    image: {
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
  showSection: boolean;
}

export async function getTestimonialsData(): Promise<TestimonialsData | null> {
  try {
    const data = await client.fetch(TESTIMONIALS_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching testimonials data:", error);
    return null;
  }
}
