import { defineQuery } from "next-sanity";
import { client } from "../client";
import { CONTACT_US_PAGE_QUERY } from "./pages";


export interface ContactUsPageData {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    heroSection: {
        backgroundImage: {
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
        title: string;
        subtitle: string;
        description: string;
    };
    mapImage: {
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
    contactOptions: Array<{
        title: string;
        content: string;
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
        action: {
            label: string;
            url: string;
        };
    }>;
    seo: {
        metaTitle: string;
        metaDescription: string;
        keywords: string[];
    };
}


export async function getContactUsPageData(): Promise<ContactUsPageData | null> {
    try {
        const data = await client.fetch(CONTACT_US_PAGE_QUERY);
        return data;
    } catch (error) {
        console.error("Error fetching contact us page data:", error);
        return null;
    }
}

