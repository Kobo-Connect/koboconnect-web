import { client } from "../client";
import { HOME_PAGE_QUERY } from "./pages";

export interface HomePageData {
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
    mainTitle: string;
    typewriterWords: string[];
    afterTypewriterText: string;
    appName: string;
    description: string;
    heroImage: {
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
    appStoreLink?: string;
    playStoreLink?: string;
  };
  koboConnectSection: {
    subtitle: string;
    mainTitle: any[]; // Rich text array
    description: string[];
    servicesImage: {
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
    contactInfo: Array<{
      title: string;
      value: string;
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
  };
  solutionSection: {
    title: string;
    subtitle: string;
    solutions: Array<{
      title: string;
      description: string;
    }>;
  };
  innovativeApproach: {
    _id: string;
    title: string;
    description: string;
    showSection: boolean;
  };
  faqSection: {
    title: string;
    subtitle: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
    showSection: boolean;
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

export async function getHomePageData(): Promise<HomePageData | null> {
  try {
    const data = await client.fetch(HOME_PAGE_QUERY);
    return data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null;
  }
}
